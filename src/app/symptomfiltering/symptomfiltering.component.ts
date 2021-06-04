import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSelect, MatSelectChange } from '@angular/material/select';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { Symptoms } from '../models/symptom';
import { SymptomsService } from '../services/symptoms.service';

interface Dropdown {
  id: string;
  viewValue: string;
}

@Component({
  selector: 'app-symptomfiltering',
  templateUrl: './symptomfiltering.component.html',
  styleUrls: ['./symptomfiltering.component.scss']
})

export class SymptomfilteringComponent implements OnInit {
  symptomname = new Symptoms();
  response = "";
  firstsymptom = "";
  secondsymptom = "";
  thirdsymptom = "";
  indication = "";

  symptoms: Dropdown[] = [
    { id: '1', viewValue: 'Fever' },
    { id: '2', viewValue: 'Cough' },
    { id: '3', viewValue: 'Headache' },
    { id: '4', viewValue: 'Stomachache' },
    { id: '5', viewValue: 'Sore Throat' },
    { id: '6', viewValue: 'Vomiting' }
  ]

  indications: Dropdown[] = [
    { id: 'liver&kidney', viewValue: 'Liver and Kidney' },
    { id: 'gastricmotility', viewValue: 'Gastric Motility' },
    { id: 'hypersensitive', viewValue: 'Hypersensitivity' },
    { id: 'safe', viewValue: 'Safe' }
  ]

  constructor(private router: Router, private appComponent: AppComponent, private symptomservice: SymptomsService) {
  }

  ngOnInit(): void {
    this.appComponent.register = true;
  }

  productlistpage() {
    this.router.navigateByUrl('productlist');
    console.log("Searching for Products")
    console.log(this.firstsymptom)
    console.log(this.secondsymptom)
    console.log(this.thirdsymptom)
    console.log(this.indication)
  }

  selectedfirstsymptom(event: MatSelectChange) {
    this.firstsymptom = event.value.id
  }

  selectedsecondsymptom(event: MatSelectChange) {
    this.secondsymptom = event.value.id
  }

  selectedthirdsymptom(event: MatSelectChange) {
    this.thirdsymptom = event.value.id
  }

  selectedindication(event: MatSelectChange) {
    this.indication = event.value.id
  }

  symptom() {
    this.symptomservice.symptomfiltering().subscribe(
      data => {
        console.log("Get response")
        this.response = data;
        console.log(this.response)
        this.router.navigateByUrl('productlist');
      },
      error => {
        alert("Please fill in the symptoms and indications")
      }
    )
  }
}

export class NgbdDropdownBasic {
}

