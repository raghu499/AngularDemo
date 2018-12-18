import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-data',
  templateUrl: './delete-data.component.html',
  styleUrls: ['./delete-data.component.css']
})
export class DeleteDataComponent implements OnInit {
  result;
  productID:number;
  //delete ts file
  constructor(private http:HttpClient) { }
  ngOnInit() {
  }
  //This method is for deleting the record
  deleteData(){
    //this.http.delete('http://172.17.20.19:3000/delete/' + this.productID )
    this.http.delete('http://172.17.15.68:3000/delete/' + this.productID )
    .subscribe(data => { });
    this.result = 'Deleted Successfully....'
  }
}
