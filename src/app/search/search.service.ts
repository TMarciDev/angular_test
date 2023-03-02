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
  public getWeatherByCity(city: City): WeatherRow[] {
    let cityWeather = WEATHER_DATA.find(data => data.city === city.name)
    if(!cityWeather) return [];
    // TODO assemble results based on input city
    return cityWeather.hourly.time.map((t: string, idx: number) => {
      const splittedTime = t.split('T');
      return {
        date: splittedTime[0].replaceAll('-', '. '),
        time: splittedTime[1],
        temp: cityWeather?.hourly.temperature_2m[idx] as number
      }
    })
  }
}
