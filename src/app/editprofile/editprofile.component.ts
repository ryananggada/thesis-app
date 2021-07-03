import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Test } from '../models/test';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.scss']
})
export class EditprofileComponent implements OnInit {
  user = new Test();
  response = ""
  currentuser: any;
  constructor(private profileservice: ProfileService, private router: Router) {
    this.currentuser = JSON.parse(localStorage.getItem('currentuser') || '{}') as Test;
    this.user = this.currentuser.profile
  }

  ngOnInit(): void {
  }

  edituser() {
    this.profileservice.editprofile(this.user, this.user.id!).subscribe(
      data => {
        console.log("Get respond")
        this.response = data;
        console.log(this.response)
        // this.getuserbyprofile()
        alert("Your profile has been updated")
      },
      error => {
        alert("Form must be filled");
      }
    )
  }

  getuserbyprofile(profileid: number) {
    this.profileservice.getprofile(profileid).subscribe(
      data => {
        console.log("Get response")
        this.response = data;
        console.log(this.response)
        localStorage.setItem('currentuser', JSON.stringify(data))
        this.router.navigateByUrl('symptomfiltering');
      },
      error => {
        alert("Cannot find user Profile");
      }
    )
  }

}
