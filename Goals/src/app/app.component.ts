import { Component } from '@angular/core';
import { Goal } from './goal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  goals:Goal[] = [
    {id:1, name :"Watch The Avengers"},
    {id:2, name: "Watch The Spiderman"}
  ]

  // constructor(){
  //   this.goals = ["Watch the Avengers", "Watch Spiderman"]
  // }
}
