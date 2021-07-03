import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-try',
  templateUrl: './try.component.html',
  styleUrls: ['./try.component.scss']
})
export class TryComponent implements OnInit {
  string1: string = "Steven Lee"
  string2: string = "Ryan D Masiv"
  number1: number = 3
  number2: number = 60
  productlist: String[] = []
  constructor() { }

  ngOnInit(): void {
    this.kasihnamakonsol()
    this.konsolnumber()
    this.konsolparameterr(this.number2, this.string2)
    this.belajarfor()
    this.belajararay()
    this.arayglobal()
    this.konsolarayglobal()

  }

  kasihnamakonsol() {
    let string3: string = ""
    let string4: string = ""
    let string5: string = ""
    string3 = this.string1
    string4 = this.string2
    string5 = string3 + string4
    console.log("STRING1 adalah: ", this.string1)
    console.log("STRING3 adalah: ", string3)
    console.log("STRING4 adalah: ", string4)
    console.log("STRING4 adalah: ", string5)
  }

  konsolnumber() {
    let number3: number = 0
    number3 = this.number1 + this.number2
    console.log(number3)
    this.tambah(number3)
  }

  konsolparameterr(angka: number, huruf: string) {
    console.log(angka, huruf)
  }

  tambah(angka: number) {
    let angka1: number = angka
    let angka2: number = 80
    console.log(angka1 + angka2)
    this.kurang(angka1, angka2)
    this.kali(angka2)
  }

  kurang(a: number, b: number) {
    console.log("Yang dikurangin adalah:", a - b)
  }

  kali(apaaja: number) {
    console.log("Yang dikaliin adalah:", apaaja * this.number1)
  }

  belajarfor() {
    let angka1: number = 90
    for (let index = 0; index <= 5; index++) {
      angka1++
      console.log(angka1, index)
    }
  }

  belajararay() {
    let stringaray: String[] = []
    stringaray.push("string 1")
    stringaray.push("string 2")
    stringaray.push("string 3")
    console.log(stringaray)
    console.log(stringaray[1])
  }

  arayglobal() {
    for (let index = 0; index < 16; index++) {
      this.productlist.push("Obat" + index)
    }
    console.log(this.productlist)
  }

  konsolarayglobal() {
    for (let index = 0; index < this.productlist.length; index++) {
      console.log(this.productlist[index])
    }
  }


}
