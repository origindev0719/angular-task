import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ITravel, IListing } from '../../interfaces/travel.interface';
import { TravelService } from '../../services/travel.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  title: string = 'List page';
  lists: IListing[] | undefined;

  isLoading: boolean = false;
  totalCount: number | undefined;
  minPrice: number | undefined;
  maxPrice: number | undefined;
  avgPrice: number | undefined;

  constructor(
    private route: ActivatedRoute,
    private travelService: TravelService
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.travelService.getTravel().subscribe((data: ITravel) => {
      this.isLoading = false;

      this.lists = data.listings
        .sort((a, b) => a.pricePerPassenger - b.pricePerPassenger)
        .filter((ele) => ele.vehicleType.maxPassengers > 2);

      this.totalCount = this.lists.length;

      this.minPrice = this.lists.reduce(
        (min, item) =>
          item.pricePerPassenger < min ? item.pricePerPassenger : min,
        Number.POSITIVE_INFINITY
      );

      this.maxPrice = this.lists.reduce(
        (max, item) =>
          item.pricePerPassenger > max ? item.pricePerPassenger : max,
        Number.NEGATIVE_INFINITY
      );

      const sum = this.lists.reduce(
        (total, item) => total + item.pricePerPassenger,
        0
      );

      this.avgPrice = Number((sum / this.totalCount).toFixed(2));
    });
  }
}
