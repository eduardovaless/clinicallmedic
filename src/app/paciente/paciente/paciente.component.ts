import { PacienteService } from './../paciente.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Paciente } from '../paciente';



 @Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent implements OnInit {

  

  displayedColumns: string[] = ['nome', 'nascimento', 'convenio', 'cpf', 'telefone'];
  
  paciente: Paciente[] = [];

  constructor(
    private service: PacienteService
  ) { }

  ngOnInit(): void {
    this.getPacie()
  }

  getPacie(){
    this.service.getPacie().subscribe(resposta => this.paciente = resposta);
  }

}
