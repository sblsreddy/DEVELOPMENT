import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name: string | undefined;
  date: string | undefined;
  amount: number | undefined;
  height: number | undefined;
  miles: number | undefined;

  car = {
    make : 'TOYOTA',
    model : 'Camry',
    year : '2012'
  }

  onNameChange(target: EventTarget) {
    const value = (<HTMLInputElement>target).value;
    console.log(value);
    this.name = value;
  }

  onDateChange(target: EventTarget) {
    const value = (<HTMLInputElement>target).value;
    console.log(value);
    this.date = value;
  }

  onAmountChange(target: EventTarget) {
    const value = (<HTMLInputElement>target).value;
    console.log(value);
    this.amount = parseInt(value);
  }

  onHeightChange(target: EventTarget) {
    const value = (<HTMLInputElement>target).value;
    console.log(value);
    this.height = parseFloat(value);
  }

  onMilesChange(target: EventTarget) {
    const value = (<HTMLInputElement>target).value;
    console.log(value);
    this.miles = parseFloat(value);
  }
}
