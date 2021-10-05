import { MemedComponent } from './memed/memed.component';

import { LayoutComponent } from './../layout/layout.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  
  { path: 'memed' , component: LayoutComponent, children: [
    { path: 'prontuario', component: MemedComponent},
  
    
  ]}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MemedRoutingModule { }
