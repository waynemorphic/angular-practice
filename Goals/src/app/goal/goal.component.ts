import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})

export class GoalComponent implements OnInit {
  goals:Goal[] = [
    new Goal(1, "Watch The Avengers", "Maybe tomorrow"),
    new Goal(2, "Watch The Spiderman", "Buy popcorns too")
  ];

  // click event binding for toggleDetails function
  toggleDetails(index:any){
    this.goals[index].showDescription =! this.goals[index].showDescription;
  }

  // completeGoal function for emitting an event from the child component
  completeGoal(isComplete:any, index:any){
    if (isComplete){
      this.goals.splice(index, 1);
    }
  }

  deleteGoal(isDelete:any, index:any){
    if (isDelete){
      let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}?`)

      if (toDelete){
        this.goals.splice(index, 1)
      }
    }
  }

  addNewGoal(goal:any){
    let goalLength = this.goals.length;
    goal.id = goalLength+1;
    this.goals.push(goal)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
