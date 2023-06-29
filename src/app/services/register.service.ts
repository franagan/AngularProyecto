import { Injectable, Pipe } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

constructor(private httpClient: HttpClient) { }

registerApi(obj:any){
return this.httpClient.post('https://proyect-movies-eight.vercel.app/user/register', obj);
}
};
