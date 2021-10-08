import { MemedRoutingModule } from './memed-routing.module';
import { MemedComponent } from './memed/memed.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {  MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [MemedComponent],

  imports: [
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    MemedRoutingModule

  ],
  exports: [
    MemedComponent,
    MatTabsModule


  ],
  providers: [


  ]
})
export class MemedModule { }