import { Component, OnInit } from '@angular/core';
import { Usuario } from '../services/usuario.model';

@Component({
  selector: 'app-list-usuario',
  templateUrl: './list-usuario.component.html',
  styleUrls: ['./list-usuario.component.css']
})
export class ListUsuarioComponent implements OnInit {

  data: Usuario[] = [];

  constructor() {

    for (let i = 0; i < 10; i++) {
      this.data.push({
        nombre: 'Usuario ' + i,
        email: 'email' + i + '@email.com',
        id: i,
        img: 'https://www.petdarling.com/articulos/wp-content/uploads/2014/11/eliminar-pis-de-gato.jpg',
        password: 'abc'
      });
    }

  }

  ngOnInit() {
  }

}
