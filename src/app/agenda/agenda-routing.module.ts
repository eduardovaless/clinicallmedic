import { AgendamedicaComponent } from './agendamedica/agendamedica.component';
import { LayoutComponent } from './../layout/layout.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  
  { path: 'agenda' , component: LayoutComponent, children: [
    { path: 'medico', component: AgendamedicaComponent},
  
    
  ]}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AgendaRoutingModule { }
