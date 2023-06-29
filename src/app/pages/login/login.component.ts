import { LoginService } from './../../services/login.service';
import { Component } from '@angular/core';
import { UserInterface } from 'src/app/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  // public name = '';
  public email = '';
  public password = '';

  constructor(public loginService:LoginService, private router: Router){}

  ngOnInit(){
    console.log(this.loginService.token);
    }
    public onSubmit(){
      const obj= {
        // name: this.name,
        email: this.email,
        password: this.password
      };
      this.login(obj);
    }
    public logout(){
      console.log('click');
      this.loginService.logoutapi()
    }


    private login(obj:any) {
      this.loginService.loginapi(obj).subscribe(data => {
        console.log(data);
        console.log(this.loginService.token);
       this.router.navigate(['/home'])
      })
    }
}
