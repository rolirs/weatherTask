import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IconMatchService } from './iconmatch.service';
import { WeatherTextService } from './weathertext.service';
import { FunctionsService } from './functions.service';

@Injectable()
export class GetdataService {
  icon = this.iconService.icon;
  textWeather = this.weatherText.weatherText;
  actualIcon: any;
  actualIconConverted: any;
  pathBase = 'assets/icons/';
  path = 'assets/icons/';
  forecastToShowPaths: any = [];
  temperature: any;
  degreeMetric: any;
  windMetric: any;
  wind: any;
  currentTime: any;
  currentTimeHour: any;
  textWeatherString: any;
  forecastRaw: any = [];
  forecastToShow: any = [];
  days: any = [];
  constructor(
    public http: HttpClient,
    public iconService: IconMatchService,
    public weatherText: WeatherTextService,
    public functionService: FunctionsService
  ) {
    this.http
      .get(
        'https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=57.7060&lon=11.9756'
      )
      .subscribe((weatherData: any) => {
        console.log(weatherData);
        for (let i of weatherData.properties.timeseries) {
          if (new Date(i.time).getHours() == 7) {
            this.forecastToShow.push(i);
            if (this.forecastToShow.length == 7) {
              break;
            }
          }
        }

        this.iconMaker(weatherData, 0);
        this.temperature =
          weatherData.properties.timeseries[0].data.instant.details.air_temperature;
        this.degreeMetric = weatherData.properties.meta.units.air_temperature;
        this.degreeMetric = this.degreeMetric === 'celsius' ? '°C' : '°F';
        this.wind =
          weatherData.properties.timeseries[0].data.instant.details.wind_speed;
        this.windMetric = weatherData.properties.meta.units.wind_speed;
        this.currentTime = weatherData.properties.timeseries[0].time;
        this.currentTimeHour = this.currentTime.slice(
          this.currentTime.indexOf('T') + 1,
          this.currentTime.indexOf('T') + 6
        );
        this.textWeatherString = this.functionService.getProperty(
          this.textWeather,
          this.actualIcon
        );

        for (let i of this.forecastToShow) {
          this.days.push(this.functionService.getTheDay(new Date(i.time)));
        }
        console.log(this.days);
        this.readyStatus.emit('ok');
      });
  }
  ngOnInit() {}

  iconMaker(weatherData: any, countOfDay: number) {
    this.actualIcon =
      weatherData.properties.timeseries[
        countOfDay
      ].data.next_1_hours.summary.symbol_code;

    this.actualIconConverted = this.functionService.getProperty(
      this.icon,
      this.actualIcon
    );
    this.path = this.path + this.actualIconConverted + '.png';
  }
  iconMaker2(forecastDataToShow: any, countOfDay: number) {
    this.actualIcon =
      forecastDataToShow[countOfDay].data.next_6_hours.summary.symbol_code;

    this.actualIconConverted = this.functionService.getProperty(
      this.icon,
      this.actualIcon
    );
    return this.pathBase + this.actualIconConverted + '.png';
  }
  readyStatus = new EventEmitter<string>();
}
