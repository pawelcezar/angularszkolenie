import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'si-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() owner = 'Me';
  @Output() timePassed = new EventEmitter<number>();

  constructor() {
    setInterval(() => {
      this.timePassed.emit(+new Date());
    }, 2000);
  }

  ngOnInit() {
  }

}
