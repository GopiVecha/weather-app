import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherReportService {
   http = inject(HttpClient)
   apiID = '1635890035cbba097fd5c26c8ea672a1';
   url = 'https://api.openweathermap.org/data/2.5/forecast';

  constructor() { }

  getInfo(city: string) {
    const url = `${this.url}?q=${city}&appid=${this.apiID}&units=metric`;
    return this.http.get(url).pipe(
      map((data: any) => {
        return data.list.filter((item: any, index: number) => index % 5 === 0);
      })
    );
  }
}
