import { Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  result = '';

  productid;

  constructor(private http: HttpClient) { }
  signupForm: FormGroup;
  //here we are validating the input fields
  ngOnInit() {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'pid': new FormControl(null, [Validators.required]),
        'pname': new FormControl(null, [Validators.required]),
        'email': new FormControl(null, [Validators.required, Validators.email]),
        'pcost': new FormControl(null, [Validators.required])
      }),

    });
  }
  //In this method we will post the data to the target URL with input data.
  onSubmit() {
    //console.log(this.signupForm.value.userData.productid);
    this.http.post('http://172.17.20.19:3000/postProduct', {
      pid: this.signupForm.value.userData.pid,
      pname: this.signupForm.value.userData.pname,
      pcost: this.signupForm.value.userData.pcost,
      email: this.signupForm.value.userData.email
    })
      .subscribe(
        res => {
          console.log(res);
          this.result = 'Registration was Successful'
        },
        err => {
          console.log('Error occured');
          this.result = ' Registration was not successful'
        }
      );
  }
}
