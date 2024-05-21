import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeatherReportService} from './weather-report.service';
import {FormsModule} from '@angular/forms'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'WeatherReport';
  data: any;
  city = "";
  error= "";
  loading: boolean = false;

  constructor(private weatherService: WeatherReportService) {}

  getWeatherDetails() {
    if (!this.city) {
      this.error = 'Please enter a city name';
      this.data=[];
      return;
    }
      this.loading = true;
      this.error= "";
      this.weatherService.getInfo(this.city).subscribe(
        (data) => {
          this.data = data.slice(0,5);
          this.loading = false;
        },
        (error) => {
          this.data=[];
          this.loading = false;
          this.error = "Error ! Please Enter a Valid City Name"
        }
      );
  }


}
