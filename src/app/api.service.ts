import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL = 'http://sup-w-000866.labs.microstrategy.com:8080/MicroStrategyLibrary/api/';
  subject = new BehaviorSubject('');
  
  getQuote() {
    return this.httpClient.get("something")
  }
  getAuth() {
    return this.httpClient.post<HttpResponse<Object>>(this.apiURL + "auth/login",
      {
        "username": "administrator",
        "password": "",
        "loginMode": 1
      },{observe: 'response'}).pipe(
        map(
          resp=>this.subject.next(resp.headers.get("X-MSTR-AuthToken"))
        )
      )
  }

  constructor(private httpClient: HttpClient) { }
}
