import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar class="container" color="primary">Usuarios</mat-toolbar>
    <div class="section container">
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent { }
