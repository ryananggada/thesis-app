import { Component, OnInit } from '@angular/core';

interface Dropdown {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-symptomfiltering',
  templateUrl: './symptomfiltering.component.html',
  styleUrls: ['./symptomfiltering.component.scss']
})

export class SymptomfilteringComponent implements OnInit {

  symptoms: Dropdown[] = [
    {value: 'fever', viewValue: 'Fever'},
    {value: 'cough', viewValue: 'Cough'},
    {value: 'headache', viewValue: 'Headache'},
    {value: 'stomachache', viewValue: 'Stomachache'},
    {value: 'sorethroat', viewValue: 'Sore Throat'},
    {value: 'vomitting', viewValue: 'Vomitting'}
  ]

  options: Dropdown[] = [
    {value: 'yes', viewValue: 'Yes'},
    {value: 'no', viewValue: 'No'},
  ]




  constructor() { }

  ngOnInit(): void {
  }

}

export class NgbdDropdownBasic {
}
