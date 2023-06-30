import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'testProyect';
  backColor: string ='';
  dark: string = 'dark'

  changeColor(){
    console.log('change');
    this.backColor = this.backColor==='' ?this.dark:'';
  }
}
