import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from "@angular/core";
import { CITIES, City } from "../data/cities";
import { SearchService, WeatherRow } from "./search.service";

import { Router } from '@angular/router';

@Component({
  selector: "search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  
  cities: City[] = CITIES;

  constructor(private service: SearchService, private router: Router) {
  }

  public ngOnInit(): void {
  }


  public updateResults(city: City): void {
    
    const handleResults = (res : WeatherRow[]) => {
      this.router.navigateByUrl('/results', { state: {cityName: city.name, results: res} });
    }
    
    this.service.getWeatherByCity(city, handleResults)
  }

  public onSearch(city: string): void {
    if(!city) return;
    const cityToSearch = this.cities.find(c => c.name === city);
    this.updateResults(cityToSearch as City)
  }
}
