import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersComponent } from './characters.component';
import { FilterPipe } from 'src/app/services/filter.pipe';

@NgModule({
  declarations: [
    CharactersComponent,
    FilterPipe,
],

  imports: [
    CommonModule,
    CharactersRoutingModule,
    HttpClientModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
  ]

})
export class CharactersModule { }
