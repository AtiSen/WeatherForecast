import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';
//import { Floor1ComponentComponent } from './floor-1/floor1Component/floor1Component.component';
//import { Room1ComponentComponent } from './floor-1/room1Component/room1component.component';
//import { Room2ComponentComponent } from './floor-1/room2Component/room2component.component';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  
 // @Input()

  ngOnInit(): void { }

  constructor(private router: Router, private route: ActivatedRoute) { }

  navigate(path) {
    this.router.navigate([{outlets: {primary: path, sidemenu:path}}], 
                         {relativeTo: this.route});
     }   
}
