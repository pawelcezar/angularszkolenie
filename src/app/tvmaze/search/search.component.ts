import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Show, ShowsResponse} from '../tvmaze.models';

@Component({
  selector: 'si-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  shows: Show[];
  query = 'flash';

  constructor(private http: HttpClient) {
    this.search(this.query);
  }

  search(query: string) {
    const apiUrl = 'http://api.tvmaze.com/search/shows?q=' + query;

    this.http.get<ShowsResponse[]>(apiUrl)
      .subscribe(showsResponse => {
        this.shows = showsResponse.map(({show}) => show); // object destructuring
      });
  }

  ngOnInit() {
  }

}
