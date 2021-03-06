import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-data',
  templateUrl: './delete-data.component.html',
  styleUrls: ['./delete-data.component.css']
})
export class DeleteDataComponent implements OnInit {

  productID:number;
  //delete ts file
  constructor(private http:HttpClient) { }
  ngOnInit() {
  }
  //This method is for deleting the record
  deleteData(){
    this.http.delete('http://172.17.20.19:3000/delete/' + this.productID )
    .subscribe(data => { });
  }
}
