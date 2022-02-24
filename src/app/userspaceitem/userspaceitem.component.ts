import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../getdata.service';

@Component({
  selector: 'app-userspaceitem',
  templateUrl: './userspaceitem.component.html',
  styleUrls: ['./userspaceitem.component.css'],
})
export class UserspaceitemComponent implements OnInit {
  userSpaceData: any;
  temperature: any;
  degreeMetric: any;
  wind: any;
  windMetric: any;
  textWeatherString: any;
  currentTimeHour: any;
  path: any;
  constructor(private weatherDataFromService: GetdataService) {
    this.weatherDataFromService.readyStatus.subscribe(() => {
      this.temperature = this.weatherDataFromService.temperature;
      this.degreeMetric = this.weatherDataFromService.degreeMetric;
      this.wind = this.weatherDataFromService.wind;
      this.windMetric = this.weatherDataFromService.windMetric;
      this.textWeatherString = this.weatherDataFromService.textWeatherString;
      this.currentTimeHour = this.weatherDataFromService.currentTimeHour;
      this.path = this.weatherDataFromService.path;
    });
  }

  ngOnInit(): void {}
}
