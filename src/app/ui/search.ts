import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

@Component({
  selector: 'search',
  template: `
    <ng2-slim-loading-bar
      [color]="'blue'"
      [height]="'4px'"
      class="loading-bar"
    ></ng2-slim-loading-bar>
    <div class="mainContainer">
      <h1>Movies of 2016 Filter</h1>
      <div class="searchBar">
        <input
          [(ngModel)]="searchTerm"
          placeholder="Start typing a title..."
        >
      </div>
      <div class="dataContainer" *ngIf="!loading">
        <div
          class="dataCell"
          [hidden]="filterResults(data.title)"
          *ngFor="let data of dataArr"
          (click)="showDetails(data)"
        >{{ data.title }}
          <div
            *ngIf="selected.title === data.title"
          >
          <img src="http://image.tmdb.org/t/p/w185/{{data.poster_path}}">
          <h5>{{data.title}}</h5>
          <p>Release Date: {{data.release_date}}</p>
          <p>Popularity: {{data.popularity}}</p>
          <p>{{data.overview}}</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['search.css']
})

export class Search implements OnInit {
  searchTerm = '';
  dataArr = [];
  loading = true;
  selected = {};

  constructor(
    private searchService: SearchService,
    private slimLoadingBarService: SlimLoadingBarService
  ) { }

  ngOnInit() {
    this.slimLoadingBarService.start()
    this.searchService.getRecentMovies()
      .subscribe(data => {
        this.slimLoadingBarService.complete();
        this.loading = false;
        this.dataArr = data;
      })
  }

  filterResults(index) {
    const length = this.searchTerm.length;
    const partial = index.slice(0, length).toLowerCase();
    return this.searchTerm.toLowerCase() === partial ? false : true;
  }

  showDetails(data) {
    console.log(data);
    if (this.selected === data) {
      this.selected = {};
    } else {
      this.selected = data;
    }
  }

}
