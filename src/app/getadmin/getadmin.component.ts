import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-getadmin',
  templateUrl: './getadmin.component.html',
  styleUrls: ['./getadmin.component.css']
})
export class GetadminComponent implements OnInit {
  column = [
    { name: 'PID' },
    { name: 'PNAME' },
    { name: 'PCOST' },
    { name: 'EMAIL' }
  ];

  admindetails: string[];
  rows;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  //this method will get the records and display them in table 
  search() {
    //this.http.get('http://172.17.20.19:3000/getProducts')
    this.http.get('http://172.17.15.68:3000/getProducts')
      .subscribe((response) => {
        this.admindetails = response as string[];
        this.rows = response;
        console.log(this.rows);
      },
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            console.log('Client-side error occured.');
          } else {
            console.log('Server-side error occured.');
          }
        });
  }
}
