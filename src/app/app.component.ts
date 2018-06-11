import { Component } from '@angular/core';
import { NavService } from './core/services/nav.service';

@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar color="primary"><span class="container-toolbar">{{nav.title}}</span></mat-toolbar>
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {
  constructor(public nav: NavService) { }
}
