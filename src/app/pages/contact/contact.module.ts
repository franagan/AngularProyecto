import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  imports: [
    CommonModule,
    ContactRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,

  ],
  declarations: [],

})
export class ContactModule { }
