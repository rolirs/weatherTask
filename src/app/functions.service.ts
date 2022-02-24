import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class FunctionsService {
  getProperty<T, K extends keyof T>(o: T, propertyName: K): T[K] {
    return o[propertyName];
  }

  getTheDay(date: Date) {
    switch (date.getDay()) {
      case 0:
        return 'Sun';
      case 1:
        return 'Mon';
      case 2:
        return 'Tue';
      case 3:
        return 'Wed';
      case 4:
        return 'Thu';
      case 5:
        return 'Fri';
      case 6:
        return 'Sat';
      default:
        return null;
    }
  }
}
