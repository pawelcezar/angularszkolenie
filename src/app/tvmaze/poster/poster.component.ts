import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Show} from '../tvmaze.models';

@Component({
  selector: 'si-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class PosterComponent implements OnInit {
  @Input() show: Show;

  constructor() { }

  ngOnInit() {
  }

}
