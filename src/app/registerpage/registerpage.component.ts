import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router'
import { AppComponent } from '../app.component';
import { Profile } from '../models/Profile';
import { Test } from '../models/test';
import { RegisterService } from '../services/register.service';

//import { ProfilesService } from '../services/profiles.services';


@Component({
  selector: 'app-registerpage',
  templateUrl: './registerpage.component.html',
  styleUrls: ['./registerpage.component.scss']
})
//We need to create a variable called test which consists of the model Test that is going to be used in registerpage//
export class RegisterpageComponent implements OnInit {
  test = new Test();
  response = "";
  //We need constructor registerservice to import classes that are going to be used in this component//
  constructor(private router: Router, private appComponent: AppComponent, private registerservice: RegisterService) {
  }

  ngOnInit(): void {
    this.appComponent.register = false;
  }
  //Function for navigating to login page//
  loginpage() {
    this.router.navigateByUrl('login');
    console.log("loginalready")
  }
  //Function test to call function register in register service and to do error handling//
  tests() {
    this.registerservice.register(this.test).subscribe(
      data => {
        console.log("Get respond")
        this.response = data;
        console.log(this.response)
        this.router.navigateByUrl('login');
      },
      error => {
        alert("Form must be filled");
      }
    )
  }
}


