import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LoginService {



}

export interface Credentials {
    email: string;
    password: string;
}


