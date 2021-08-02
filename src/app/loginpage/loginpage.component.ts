import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { Test } from '../models/test';
import { LoginService } from '../services/login.service';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {
  test = new Test();
  response = "";

  constructor(private router: Router, private appComponent: AppComponent, private loginservice: LoginService, private Profileservice: ProfileService) {
    this.appComponent.register = false;
    this.appComponent.showlogin = false;
  }

  ngOnInit(): void {
  }

  getuserbyprofile(profileid: number) {
    this.Profileservice.getprofile(profileid).subscribe(
      data => {
        console.log("Get response")
        this.response = data;
        console.log(this.response)
        localStorage.setItem('currentuser', JSON.stringify(data))
        this.appComponent.user = JSON.parse(localStorage.getItem('currentuser') || '{}') as Test;
        this.router.navigateByUrl('symptomfiltering');
      },
      error => {
        alert("Cannot find user Profile");
      }
    )
  }

  navigatetoregister() {
    this.router.navigateByUrl('register')
  }

  symptomsfilteringpage() {
    let user = this.test.username!
    let password = this.test.password!
    this.loginservice.login(user, password).subscribe(
      data => {
        console.log("Get response")
        this.response = data;
        console.log(this.response)
        if (data.valid == true) {
          localStorage.setItem('currentuser', JSON.stringify(data))
          this.appComponent.user = data.user
          alert("Successfully Logged In")
          this.router.navigateByUrl('symptomfiltering');
        }
        else {
          alert("Username or Password is incorrect!")
        }
      },
      error => {
        alert("Username and Password cannot be empty!");
      }
    )
  }
}
