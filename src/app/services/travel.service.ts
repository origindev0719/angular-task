import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { ITravel } from '../interfaces/travel.interface';
import {
  ENV_CONFIG,
  EnvironmentConfig,
} from '../interfaces/environment-config.interface';

@Injectable({
  providedIn: 'root',
})
export class TravelService {
  private apiUrl;

  constructor(
    private http: HttpClient,
    @Inject(ENV_CONFIG) private config: EnvironmentConfig
  ) {
    this.apiUrl = `${config.environment.apiURL}`;
  }

  getTravel() {
    return this.http
      .get<ITravel>(`${this.apiUrl}`)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }
}
