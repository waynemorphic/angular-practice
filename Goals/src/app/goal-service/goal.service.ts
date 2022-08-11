import { Injectable } from '@angular/core';
import { goals } from '../goalList'

@Injectable({
  providedIn: 'root'
})
export class GoalService {

  // method returns the goals array from the goalList file
  getGoals(){
    return goals

  }

  constructor() { }
}
