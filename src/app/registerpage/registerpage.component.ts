import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router'
import { Profile } from '../models/userprofile';
//import { ProfilesService } from '../services/profiles.services';


@Component({
  selector: 'app-registerpage',
  templateUrl: './registerpage.component.html',
  styleUrls: ['./registerpage.component.scss']
})
export class RegisterpageComponent implements OnInit {
  public registerGroup: FormGroup;


  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.registerGroup = new FormGroup({
      firstname: new FormControl(),
      lastname: new FormControl(),
      gender: new FormControl(),
      dateofbirth: new FormControl(),
      address: new FormControl(),
      email: new FormControl(),
      username: new FormControl(),
      password: new FormControl()
    });
   }

  ngOnInit(): void {
  }

  public register(){
    if (this.registerGroup == null){
      return
    };

    if(this.registerGroup.get('firstname') == null){
      return
    }

    if(this.registerGroup.get('lastname') == null){
      return
    }

    if(this.registerGroup.get('gender') == null){
      return
    }

    if(this.registerGroup.get('dateofbirth') == null){
      return
    }

    if(this.registerGroup.get('address') == null){
      return
    }

    if(this.registerGroup.get('email') == null){
      return
    }

    if(this.registerGroup.get('username') == null){
      return
    }

    if(this.registerGroup.get('password') == null){
      return
    }

    var firstname = this.registerGroup.get('firstname');
    var lastname = this.registerGroup.get('lastname');
    var gender = this.registerGroup.get('gender');
    var dateofbirth = this.registerGroup.get('dateofbirth');
    var address = this.registerGroup.get('address');
    var email = this.registerGroup.get('email');
    var username = this.registerGroup.get('username');
    var password = this.registerGroup.get('password');

    if (password == null){
      window.alert("Password cannot be empty!");
      return;
    }

    var profile = new Profile(0, firstname, lastname, gender, dateofbirth, address, email, username, password);
  }
}
