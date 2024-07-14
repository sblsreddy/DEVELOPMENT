import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  name: string | undefined;

  onNameChange(target: EventTarget) {
      const value = (<HTMLInputElement>target).value;
      console.log(value);
      this.name = value;
  }
}
