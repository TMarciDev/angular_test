import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from "@angular/core";
import { CITIES, City } from "../data/cities";
import { SearchService, WeatherRow } from "./search.service";
@Component({
  selector: "search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  
  cities: City[] = CITIES;
  selectedCity:string = '';
  results: WeatherRow[] = [];

  displayedColumns: string[] = [
    'date',
    'time',
    'temp'
  ];

  dataSource = new MatTableDataSource(this.results)
  constructor(private service: SearchService) {
  }
  @ViewChild('paginator') paginator: MatPaginator | undefined;

  public ngOnInit(): void {
  }



  public updateResults(city: City): void {
    let results = this.service.getWeatherByCity(city);
    this.dataSource = new MatTableDataSource(results)
    // TODO set results
    this.results = results;
  }

  public onSearch(city: string): void {
    const cityToSearch = this.cities.find(c => c.name === city);
    this.updateResults(cityToSearch as City)
    this.selectedCity = city;
  }
}
