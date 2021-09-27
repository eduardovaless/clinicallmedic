import { ActivatedRoute } from '@angular/router';
import { PacienteService } from './../../paciente/paciente.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/app/paciente/paciente';

@Component({
  selector: 'app-prontuario',
  templateUrl: './prontuario.component.html',
  styleUrls: ['./prontuario.component.css']
})
export class ProntuarioComponent implements OnInit {
  id:number;
  paciente: Paciente;

  constructor(
   private service:PacienteService,
   private activatedRoute: ActivatedRoute,

  ) {
    this.paciente=new Paciente();
   }

  ngOnInit(): void {

    let params : Observable<any> = this.activatedRoute.params
   params.subscribe(urlParams => {
     this.id = urlParams ['id'];
     if(this.id){
     this.service.getPacieById(this.id)
     .subscribe(response => this.paciente = response,
      errorResponse => this.paciente = new Paciente()
      )}})

  }

}
