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

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource(this.results);
    this.dataSource.paginator = this.paginator as MatPaginator;
}

  public updateResults(city: City): void {
    
    const handleResults = (res : any) => {
      this.results = res;
      this.dataSource = new MatTableDataSource(res)
      this.dataSource.paginator = this.paginator as MatPaginator;
    }
    
    this.service.getWeatherByCity(city, handleResults)

  }

  public onSearch(city: string): void {
    this.selectedCity = city;
    const cityToSearch = this.cities.find(c => c.name === city);
    this.updateResults(cityToSearch as City)
  }
}
