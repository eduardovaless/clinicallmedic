import { DashboardRoutingModule } from './dashboard.routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';


import { MAT_DATE_LOCALE } from '@angular/material/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import {MatSelectModule} from '@angular/material/select';
import { MatDatepickerModule, MatDatepickerInput } from '@angular/material/datepicker';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import {MatListModule} from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { NgxChartsModule } from '@swimlane/ngx-charts';


@NgModule({
  declarations: [DashboardComponent],

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
    MatSelectModule,
    MatDatepickerModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    HttpClientModule,    
    NgxExtendedPdfViewerModule,
    MatListModule,
    MatDividerModule,
    PdfViewerModule,
    CKEditorModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    DashboardRoutingModule
   
  ],
  exports:[
    MatTabsModule,
    DashboardComponent
    

  ],
  providers:[
    
  ]
})
export class DashboardModule { 
  
}
