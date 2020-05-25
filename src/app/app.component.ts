import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DASHBOARD';

 public hiddenComponent = true;
// public title = 'show-button';

  showNextComponent() {
    console.log('Button clicked.');
    this.hiddenComponent = false;
    console.log(this.hiddenComponent);
     }
  }