// goal-detail component is a child component of the goal component
// here, we are doing input property binding so that the child component can receive data from the parent component

import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal-detail',
  templateUrl: './goal-detail.component.html',
  styleUrls: ['./goal-detail.component.css']
})

export class GoalDetailComponent implements OnInit {

  @Input() goal:Goal; //input property binding
  
  @Output() isComplete = new EventEmitter<boolean>(); //isComplete is an event emitter

  goalComplete(complete:boolean){
    this.isComplete.emit(complete);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
