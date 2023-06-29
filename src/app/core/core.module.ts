
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


import { NgModule } from '@angular/core';
import { LayoutModule } from './layout/layout.module';

const ngModules = [
  HttpClientModule,
];

@NgModule({
  declarations: [
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    LayoutModule,
    ...ngModules,
],
exports: [
  LayoutModule,

]
})
export class CoreModule { }
