import { Component, OnInit } from '@angular/core';
import { Credentials } from '../services/login.service';
import { NavService } from '../services/nav.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials: Credentials = { password: '', email: '' };

  constructor(nav: NavService) {
    nav.title = 'Iniciar Sesion';
  }

  ngOnInit() {
  }

  login() {

  }

}
