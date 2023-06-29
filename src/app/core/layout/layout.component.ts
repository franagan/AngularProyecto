import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']

})
export class LayoutComponent implements OnInit {
  email: string='';
  password: string='';
  login: any;
 constructor(public loginService: LoginService){}
 ngOnInit(): void {
  this.loginService;
 }
 public logout(){
  console.log('click');
  this.loginService.logoutapi()
}
public onSubmit(){
  const obj= {
    // name: this.name,
    email: this.email,
    password: this.password
  };
  this.login(obj);
}
}
