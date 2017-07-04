import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'search',
  template: `
    <input
      [(ngModel)]="searchTerm"
      placeholder="Type some keywords!"
      (keyup)="onKeyUp()"
    >
    <div [hidden]="filterResults(data)" *ngFor="let data of dataArr">{{ data }}</div>
  `,
  styles: ['']
})

export class Search implements OnInit {
  searchTerm = '';
  dataArr = [
    'Sophia',
    'Aiden',
    'Emma',
    'Jackson',
    'Olivia',
    'Isabella',
    'Liam',
    'Ethan',
    'Ava',
    'Mason',
    'Lily',
    'Noah',
    'Zoe',
    'Lucas',
    'Chloe',
    'Jacob',
    'Mia',
    'Jayden'
  ];

  ngOnInit() {
    this.dataArr = this.dataArr.sort();
  }

  filterResults(index) {
    const length = this.searchTerm.length;
    const partial = index.slice(0, length).toLowerCase();
    console.log(this.searchTerm);
    console.log(partial);
    return this.searchTerm.toLowerCase() === partial ? false : true;
  }

  onKeyUp() {
    console.log(this.searchTerm);
  }
}

