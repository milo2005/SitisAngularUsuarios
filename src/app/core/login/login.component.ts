import { Component, OnInit } from '@angular/core';
import { Credentials } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials: Credentials = { password: '', email: '' };

  constructor() { }

  ngOnInit() {
  }

  login() {

  }

}
