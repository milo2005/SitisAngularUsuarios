import { Component, OnInit } from '@angular/core';
import { Usuario } from '../services/usuario.model';

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.component.html',
  styleUrls: ['./add-usuario.component.css']
})
export class AddUsuarioComponent implements OnInit {

  usuario: Usuario = { email: '', img: '', nombre: '', password: '' };

  constructor() { }

  ngOnInit() {
  }

  add() {

  }

}
