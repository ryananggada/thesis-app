import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {
  public loginGroup: FormGroup;
  usersService: any;

  constructor(private formBuilder: FormBuilder) {
    this.loginGroup = new FormGroup({
      username: new FormControl(),
      password: new FormControl(),
    });
   }

  ngOnInit(): void {
  }

  public login() {
    var username = this.loginGroup.get('username');
    var password = this.loginGroup.get('password');
    this.usersService.login(username).subscribe((userId: number) => {
      if (userId == 0) {
        //Invalid login details.
        window.alert("Username or Password is incorrect.");
      }
      this.usersService.getUser(userId).subscribe((user: null) => {
        //Check if user exists
        if (user != null) {
          this.usersService.authorizeLogin(userId)
        }
      //Display error popup
        else {
        }
      })
    })
  }
}
