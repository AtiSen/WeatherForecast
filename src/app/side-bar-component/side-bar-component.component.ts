import { Component, OnInit, Input } from '@angular/core';
//import { ButtonEventComponent } from './button-event/button-event.component';

@Component({
  selector: 'app-side-bar-component',
  templateUrl: './side-bar-component.component.html', 
  styleUrls: ['./side-bar-component.component.css']
})


export class SideBarComponentComponent implements OnInit {

  //@Input() Country:string; 
  
  bodyDiv = false;
  inputName = '';
  
  constructor() { }

  ngOnInit() {}

  hiddenComponent = true;
  title = 'show-button';
  name:string;

  showNextComponent(value:string) {
    this.name = value;
    console.log('Button clicked.');
    this.hiddenComponent = false;
    console.log(this.hiddenComponent);
  }

 
}
