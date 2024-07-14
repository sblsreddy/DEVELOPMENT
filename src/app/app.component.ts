import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // creating an array 
  posts =[
    {
      title : 'Neat Tree',
      imageUrl : 'assets/tree.jpeg',
      userName : 'nature',
      content : 'I saw this today'
    },
    {
      title : 'Snowy Mountain',
      imageUrl : 'assets/mountain.jpeg',
      userName : 'mountain lover',
      content : 'Here is a picture of snowy mountain'
    },
    {
      title : 'Mountain Biking',
      imageUrl : 'assets/biking.jpeg',
      userName : 'biking',
      content : 'Biking today'
    }
  ];
  
}
