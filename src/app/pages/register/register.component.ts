import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
public email='';
public password='';
public name='';
public lastname='';
public phone= 0;

constructor(public registerService: RegisterService, private router: Router){}

ngOnInit(){
  console.log(this.registerService);
  }
  public onSubmit(){
const obj={
  email: this.email,
  password: this.password,
  name: this.name,
  lastname: this.lastname,
  phone: this.phone,
};
this.register(obj)
  }
  private register(obj:any){
this.registerService.registerApi(obj).subscribe(data =>{
  console.log(data);
  this.router.navigate(['/login'])
})

  }
}
