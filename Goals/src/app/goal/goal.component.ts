import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';
import { GoalService } from '../goal-service/goal.service';
import { AlertService } from '../alert-service/alert.service';
import { HttpClient } from '@angular/common/http';
import { Quote } from '../quote-class/quote';
import { QuoteRequestService } from '../quote-http/quote-request.service';
import { QuoteRequest } from '../quote-request';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})

export class GoalComponent implements OnInit {
  goals: Goal[];
  alertService: AlertService;
  quote: Quote;
  quoteService: QuoteRequestService;
  // baseurl = "http://quotes.stormconsultancy.co.uk/random.json";

  //   new Goal(1, "Watch The Avengers", "Maybe tomorrow"),
  //   new Goal(2, "Watch The Spiderman", "Buy popcorns too")
  // ];

  // click event binding for toggleDetails function
  toggleDetails(index: any) {
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }

  // completeGoal function for emitting an event from the child component
  completeGoal(isComplete: any, index: any) {
    if (isComplete) {
      this.goals.splice(index, 1);
    }
  }

  deleteGoal(isDelete: any, index: any) {
    if (isDelete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}?`)

      if (toDelete) {
        this.goals.splice(index, 1)
        this.alertService.alertMe("This goal has been deleted")
      }
    }
  }

  addNewGoal(goal: any) {
    let goalLength = this.goals.length;
    goal.id = goalLength + 1;
    this.goals.push(goal)
  }

  // dependency injection to register service
  constructor(goalService: GoalService, alertService: AlertService, private http: HttpClient, quoteService: QuoteRequestService) {
    this.goals = goalService.getGoals()
    // this.alertService = alertService;
    // this.quoteService = quoteService;
  }

  getQuotes(){
    this.quoteService.getRequest().subscribe(quotes =>{
      console.log(quotes)
    });

    // this.quote = this.quoteService.quote
    // console.log(this.quoteService.quote)
  }

  ngOnInit():void {
  }
}


    
    // this.quote = this.quoteService.quote
    // let resp = this.http.get<QuoteRequest>(this.baseurl)
    // resp.subscribe((data) => {
    //   this.quote = new Quote(data.author, data.quote)
    //   console.log(this.quote)
    // })

    
    // interface ApiResponse {
    //   author: string;
    //   quote: string;

    // }
    // const myObservarble = new Observable(observer =>{
    //   fetch("http://quotes.stormconsultancy.co.uk/random.json")
    //   .then(data =>{
    //     this.quote = new Quote("author", "quote")
    //   })

    //   })
    //   const value = this.http.get<ApiResponse>("http://quotes.stormconsultancy.co.uk/random.json");

    //   observer.next(value)
    //   observer.error(console.error("An error occurred"));

    // })

    // const observarbleResponse = new Observable((observer) => {
    //   this.http.get<ApiResponse>("http://quotes.stormconsultancy.co.uk/random.json").subscribe(data =>{
    //     this.quote = new Quote(data.author, data.quote)
    //   },Error)


    //   // }})
    // })
    //   this.http.get<ApiResponse>("http://quotes.stormconsultancy.co.uk/random.json").subscribe((data) =>{
    //     // successful api request
    //     this.quote = new Quote(data.author, data.quote)
    // },
    //   err=>{
    //     this.quote = new Quote("Winston Churchill", "Never give up")
    //     console.log("An error occurred")
    //   })
  

// }
// }