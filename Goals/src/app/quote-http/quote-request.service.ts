import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Quote } from '../quote-class/quote';
import { Observable, throwError } from 'rxjs';
import { catchError, map, filter, retry } from 'rxjs/operators';
import { QuoteRequest } from '../quote-request';

@Injectable({
  providedIn: 'root'
})
export class QuoteRequestService {
  baseUrl = "http://quotes.stormconsultancy.co.uk/random.json";
  quote: Quote;

  constructor(private http: HttpClient) {
    this.quote = new Quote("", "");
  }

  
  getRequest() {
    // let resp = this.http.get<QuoteRequest>(this.baseUrl);
    // let myQuote;
    // resp.subscribe((data) => {
    //   myQuote = new Quote(data.author, data.quote)
      // console.log(data.author)
      // console.log(myQuote)
      return this.http.get<QuoteRequest>(this.baseUrl);
      // return this.quote
    }

    
    // return myQuote
  }

  // errorHandl(error: any) {
  //   let errorMessage = '';
  //   if (error.error instanceof ErrorEvent) {
  //     // get client side error
  //     errorMessage = error.error.message;

  //     // get server side error
  //   } else {
  //     errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`
  //   }
  //   throwError(() => {
  //     return errorMessage
  //   })

  // }
// }
