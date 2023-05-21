import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { TravelService } from './services/travel.service';
import { HttpModule } from './http.module';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AddComponent } from './pages/add/add.component';
import { ListComponent } from './pages/list/list.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgbTimepickerConfig } from '@ng-bootstrap/ng-bootstrap';

import {
  NgxMatDatetimePickerModule,
  NgxMatTimepickerModule,
} from '@angular-material-components/datetime-picker';

import {
  NgbDatepickerModule,
  NgbTimepickerModule,
} from '@ng-bootstrap/ng-bootstrap';

import { JsonPipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    ListComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    NgbDatepickerModule,
    NgbTimepickerModule,
    FormsModule,
    JsonPipe,
    HttpClientModule,
    CommonModule,
    HttpModule.forRoot({ environment }),
  ],

  providers: [NgbTimepickerConfig, TravelService],
  bootstrap: [AppComponent],
})
export class AppModule {}
