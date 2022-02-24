import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class WeatherTextService {
  weatherText: any = { lightsleet: 'Light sleet', cloudy: 'Cloudy' };
}
