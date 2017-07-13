import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class Api {
  headers: Headers = new Headers({
    'content-type': 'application/json',
    Accept: 'application/json'
  });

  tmdb_api_key: string = '037e1ef528d041a22be4bb907e3efced';
  tmdb_api_url: string = 'https://api.themoviedb.org/3'

  constructor(private http: Http) {}

  private getJson(arr) {
    return arr.map( elem => {
      return elem.json();
    });
  }

  private combineData(arr) {
    let results = [];
    arr.forEach( elem => {
      results = results.concat(elem.results);
    });
    return results;
  }

  getApiData(path: string, options?: string): Observable<any> {

    let urls = [];
    const url = `${this.tmdb_api_url}${path}?api_key=${this.tmdb_api_key}${options}&page=`
    for (let i = 1; i < 21; i++) {
      urls.push(this.http.get(url + i));
    }
    return Observable.forkJoin(urls)
      .map(data => this.getJson(data))
      .map(data => this.combineData(data))
      .map(data => {
        return data.sort((a, b) => {
          return a.title.localeCompare(b.title);
        })
      })
  }





}

