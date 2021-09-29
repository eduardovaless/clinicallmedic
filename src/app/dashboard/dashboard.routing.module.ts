import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './../layout/layout.component';


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {
    path: 'dashboard', component: LayoutComponent, children: [
      { path: 'list', component: DashboardComponent },     
      
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DashboardRoutingModule { }