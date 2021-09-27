import { PacienteFormComponent } from './paciente-form/paciente-form.component';
import { PacienteComponent } from './paciente/paciente.component';
import { LayoutComponent } from './../layout/layout.component';


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'paciente', component: LayoutComponent, children: [
      { path: 'list', component: PacienteComponent },

      { path: 'form', component: PacienteFormComponent }

    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PacienteRoutingModule { }
