import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'si-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(http: HttpClient) {
    const apiUrl = 'http://api.tvmaze.com/search/shows?q=flash';

    http.get(apiUrl);
  }

  ngOnInit() {
  }

}
