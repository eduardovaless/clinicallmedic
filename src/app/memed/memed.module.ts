import { MemedRoutingModule } from './memed-routing.module';
import { MemedComponent } from './memed/memed.component';

import { MatNativeDateModule } from '@angular/material/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatTab, MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';

import {MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';


@NgModule({
  declarations: [MemedComponent],

  imports: [
    BrowserAnimationsModule,
    CommonModule,    
    FormsModule,
    MatButtonModule,    
    MatTabsModule,
    MatTableModule,
    MatInputModule,
    MatCardModule,
    MatRadioModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MemedRoutingModule
    
    
    
    
  ],
  exports:[
    MemedComponent,
    MatTabsModule
    
    
  ],
  providers:[
    
    
  ]
})
export class MemedModule { }