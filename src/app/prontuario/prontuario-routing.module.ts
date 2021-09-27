import { LayoutComponent } from './../layout/layout.component';


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProntuarioComponent } from './prontuario/prontuario.component';


const routes: Routes = [
  {
    path: 'prontuario', component: LayoutComponent, children: [
      { path: 'list', component: ProntuarioComponent },
      { path: 'form', component: ProntuarioComponent },
      { path: 'form/:id', component: ProntuarioComponent },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ProntuarioRoutingModule { }
