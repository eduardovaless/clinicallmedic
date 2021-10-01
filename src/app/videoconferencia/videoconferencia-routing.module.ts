import { VideoconferenciaComponent } from './videoconferencia/videoconferencia.component';
import { LayoutComponent } from './../layout/layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {
    path: 'video', component: LayoutComponent, children: [
     
      { path: 'conferencia', component: VideoconferenciaComponent },
      
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideoconferenciaRoutingModule { }
