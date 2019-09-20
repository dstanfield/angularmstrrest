import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  constructor(private apiService:ApiService) { }

  ngOnInit() {
    this.apiService.getAuth().subscribe(
      resp=>console.log(resp),
      error=>console.error(error),
      
    )


    // this.apiService.getQuote().subscribe(
    // Response=>console.log(Response),
    // error=>console.error(error)
    // )

  }

}
