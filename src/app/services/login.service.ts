import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  token: string | null = sessionStorage.getItem('token-app');

  constructor(private httpClient: HttpClient){}

  loginapi(obj: any){
    return this.httpClient.post('https://proyect-movies-eight.vercel.app/user/login'
  , obj).pipe(
    map((response: any)=> {
      this.token = response.token;
      sessionStorage.setItem('token-app', response.token);
      return response;
    })
  );
}
logoutapi(){
  this.token= null;
  sessionStorage.removeItem('token-app');
}
}
