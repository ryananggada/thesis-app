import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  constructor(private router: Router, private appComponent: AppComponent) {
    this.appComponent.showlogin = true;
    this.appComponent.homepage = true;
  }


  ngOnInit(): void {
    console.log(this.appComponent.showlogin)
  }
  registerpage() {
    this.router.navigateByUrl('register');
    console.log("registeralready")
  }
}

