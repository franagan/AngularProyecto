import { LayoutComponent } from './layout.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { RouterLink, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from 'src/app/pages/login/login.component';
import { LoginModule } from 'src/app/pages/login/login.module';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    LoginModule,
],
  declarations: [
LayoutComponent,
NotFoundComponent,

  ],
exports:[
  LayoutComponent,
]
})
export class LayoutModule { }
