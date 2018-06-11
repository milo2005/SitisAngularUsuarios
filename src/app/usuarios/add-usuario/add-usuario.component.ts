import { Component, OnInit } from '@angular/core';
import { Usuario } from '../services/usuario.model';
import { NavService } from '../../core/services/nav.service';

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.component.html',
  styleUrls: ['./add-usuario.component.css']
})
export class AddUsuarioComponent implements OnInit {

  usuario: Usuario = { email: '', img: '', nombre: '', password: '' };

  constructor(nav: NavService) {
    nav.title = 'Agregar usuario';
  }

  ngOnInit() {
  }

  add() {

  }

}
