import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MainComponent } from 'src/app/main/main.component';
import {ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-floor1',
  templateUrl: './floor1.component.html',
  styleUrls: ['./floor1.component.css']
})

export class Floor1Component implements OnInit {
  
  @Input() main: MainComponent;
  contactForm: FormGroup; 
  
  //var vm = this;
  submitted = false;
  username : string;
  password: string;

  constructor(private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute) {
    //this.username ="Hi World";
    //this.password= "Hi Atreyee";
 }

 ngOnInit() {
  /*this.contactForm = this.formBuilder.group({
    userName: new FormControl('', Validators.required),
    Password: new FormControl('', Validators.required)
  });*/
} 

  get f() {return this.contactForm.controls; }
    
    onSubmit() {
     // this.submitted = true;
    }

    /*revert() {
    this.contactForm.reset();
    } */

    navigate(path) {
      this.router.navigate([{outlets: {primary: path, sidemenu:path}}], 
                           {relativeTo: this.route});
       }   

}
