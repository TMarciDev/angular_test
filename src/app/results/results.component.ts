import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { WeatherRow } from './../search/search.service';
import { Component, OnInit } from '@angular/core';

import { Location } from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  results: WeatherRow[] = [];
  selectedCity: string = '';

  displayedColumns: string[] = [
    'date',
    'time',
    'temp'
  ];

  dataSource = new MatTableDataSource(this.results)
  
  constructor(private location:Location) { }

  @ViewChild('paginator') paginator: MatPaginator | undefined;


  ngOnInit(): void {
    //TODO: any -> new interface
    const state:any = this.location.getState();
    this.selectedCity = state.cityName;
    this.results = state.results;
  }
  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource(this.results);
    this.dataSource.paginator = this.paginator as MatPaginator;
  }
}
