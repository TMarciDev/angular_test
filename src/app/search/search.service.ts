import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { City } from "../data/cities";
import { WEATHER_DATA } from "../data/weather";

export interface WeatherRow {
  date: string;
  time: string;
  temp: number;
}

@Injectable({ providedIn: "root" })
export class SearchService {
  constructor(private http: HttpClient) { }
  get(city: City) {
    //response interface not provided?
    return this.http.get(`https://api.open-meteo.com/v1/forecast?latitude=${city.latitude}&longitude=${city.longitude}&hourly=temperature_2m`)
  }
  public getWeatherByCity(city: City, handleResults: (res: WeatherRow[]) => void): void{
    this.get(city).subscribe(
      (res : any) => {
        const data = res.hourly.time.map((t: string, idx: number) => {
          const splittedTime = t.split('T');
          return {
            date: splittedTime[0].replaceAll('-', '. '),
            time: splittedTime[1],
            temp: res.hourly.temperature_2m[idx] as number
          }
        })
        handleResults(data)
      });
  }
}
