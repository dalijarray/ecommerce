import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  phoneNumber: string = '';
  password: string = '';
  address: string = '';
  gender: string = ''; // Assuming gender selection is required
  dateOfBirth!: Date;
  role: string='';
  constructor() { }
  
  registrationData = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phoneNumber: '',
    role: '',
    pictureUrl: [],
    dateOfBirth: null,
    gender: ''
  };

  ngOnInit() {
  }

}
