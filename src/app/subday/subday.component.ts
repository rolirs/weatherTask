import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../getdata.service';

@Component({
  selector: 'app-subday',
  templateUrl: './subday.component.html',
  styleUrls: ['./subday.component.css'],
})
export class SubdayComponent implements OnInit {
  forecastToShow: any;
  days: any;
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
    });
  }

  ngOnInit(): void {}
}
