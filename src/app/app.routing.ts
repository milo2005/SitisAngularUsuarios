import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUsuarioComponent } from './usuarios/list-usuario/list-usuario.component';
import { AddUsuarioComponent } from './usuarios/add-usuario/add-usuario.component';
import { LoginComponent } from './core/login/login.component';
import { NotFoundComponent } from './core/not-found/not-found.component';

const appRoutes: Routes = [
    { path: '', component: ListUsuarioComponent },
    { path: 'agregar', component: AddUsuarioComponent},
    { path: 'login', component: LoginComponent},
    { path: '**', component: NotFoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRouting { }
