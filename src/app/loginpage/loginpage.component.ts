import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { Test } from '../models/test';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {
  test = new Test();
  response = "";

  constructor(private router: Router, private appComponent: AppComponent, private loginservice: LoginService) {
  }

  ngOnInit(): void {
    this.appComponent.register = false;
  }

  symptomsfilteringpage() {
    this.router.navigateByUrl('symptomfiltering');
    console.log("symptompage")
  }

  tests() {
    this.loginservice.login(this.test).subscribe(
      data => {
        console.log("Get response")
        this.response = data;
        console.log(this.response)
        this.router.navigateByUrl('symptomfiltering');
      },
      error => {
        alert("Form must be filled");
      }
    )
  }
}
