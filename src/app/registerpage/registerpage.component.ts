import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AppComponent } from '../app.component';
import { Test } from '../models/test';
import { RegisterService } from '../services/register.service';

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
    this.appComponent.register = false;
    this.appComponent.showlogin = false;
  }
  ngOnInit(): void {
  }

  navigatetologin() {
    this.router.navigateByUrl("login")
  }
  //Function test to call function register in register service and to do error handling//
  loginpage() {
    this.registerservice.register(this.test).subscribe(
      data => {
        console.log("Get respond")
        this.response = data;
        console.log(this.response)
        this.router.navigateByUrl('login');
      },
      error => {
        alert("Form must be filled! Please fill in the required forms!");
      }
    )
  }
}


