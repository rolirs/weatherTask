import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../getdata.service';

@Component({
  selector: 'app-subdaycarousel',
  templateUrl: './subdaycarousel.component.html',
  styleUrls: ['./subdaycarousel.component.css'],
})
export class SubdaycarouselComponent implements OnInit {
  forecastToShow: any;
  days: any = [];
  daysCarouselFirst: any = [];
  daysCarouselSecond: any = [];
  path: any;
  forecastToShowPaths: any = [];
  constructor(public weatherDataFromService: GetdataService) {
    this.weatherDataFromService.readyStatus.subscribe(() => {
      this.forecastToShow = this.weatherDataFromService.forecastToShow;
      this.days = weatherDataFromService.days;
      this.path = weatherDataFromService.path;
      for (let i = 0; i < this.forecastToShow.length; i++) {
        this.forecastToShowPaths.push(
          this.weatherDataFromService.iconMaker2(this.forecastToShow, i)
        );
      }
      this.daysCarouselFirst = this.days.slice(0, 4);
      this.daysCarouselSecond = this.days.slice(4);
    });
  }

  ngOnInit(): void {}
}
