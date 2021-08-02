import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSelect, MatSelectChange } from '@angular/material/select';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { MedicineParam } from '../models/medicineparam';
import { Symptoms } from '../models/symptom';
import { SymptomParam } from '../productlist/productlist.component';
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
  symptomfiltering = "false";
  medicineparam = new MedicineParam();

  symptoms: any[] = [
    { id: '1', viewValue: 'Fever' },
    { id: '2', viewValue: 'Cough' },
    { id: '3', viewValue: 'Headache' },
    { id: '4', viewValue: 'Stomachache' },
    { id: '5', viewValue: 'Sore Throat' },
    { id: '6', viewValue: 'Vomiting' }
  ]

  indications: any[] = [
    { id: 'liver&kidney', viewValue: 'Liver and Kidney' },
    { id: 'gastricmotility', viewValue: 'Gastric Motility' },
    { id: 'hypersensitive', viewValue: 'Hypersensitivity' },
    { id: 'safe', viewValue: 'Safe' }
  ]

  constructor(private router: Router, private appComponent: AppComponent, private symptomservice: SymptomsService, private symptomparam: SymptomParam) {
    this.appComponent.register = true;
    this.appComponent.symptomfiltering = true;
    this.appComponent.showlogin = false;
    this.appComponent.homepage = false;
  }

  ngOnInit(): void {
  }

  productlistpage() {
    console.log("Searching for Products")
    this.medicineparam.first_symptom = this.firstsymptom;
    this.medicineparam.second_symptom = this.secondsymptom;
    this.medicineparam.third_symptom = this.thirdsymptom;
    this.medicineparam.indication = this.indication;
    console.log(this.medicineparam)
    this.symptomparam.symptom = this.medicineparam;
    if (this.medicineparam.first_symptom == "" || this.medicineparam.second_symptom == "" || this.medicineparam.third_symptom == "" || this.medicineparam.indication == "") {
      alert('Symptoms and Indication must be filled!')
    } else {
      this.router.navigateByUrl('productlist');
    }
  }

  selectedfirstsymptom(event: any) {
    console.log(event.target.value)
    // this.firstsymptom = event.value.viewValue
    this.firstsymptom = event.target.value
  }

  selectedsecondsymptom(event: any) {
    // this.secondsymptom = event.value.viewValue
    this.secondsymptom = event.target.value
  }

  selectedthirdsymptom(event: any) {
    // this.thirdsymptom = event.value.viewValue
    this.thirdsymptom = event.target.value
  }

  selectedindication(event: any) {
    // this.indication = event.value.viewValue
    this.indication = event.target.value
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

