import { Component } from '@angular/core';

@Component({
  selector: 'si-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sasdfasdfi';

  handleClick(event: MouseEvent) {
    this.title = this.title + (event.target as HTMLElement);
  }
}
