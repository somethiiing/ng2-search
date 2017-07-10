import { Injectable } from '@angular/core';
import { Api } from './api';

@Injectable()
export class SearchService {

  constructor(private api: Api) {  }

  getRecentMovies() {
    return this.api.getApiData(
      '/discover/movie',
      '&language=en-US&region=US&sort_by=popularity.desc&include_adult=false&include_video=false&year=2017'
    )
    .take(1)
  }

}
