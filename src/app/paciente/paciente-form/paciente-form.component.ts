import { Nacionalidade } from './../nacionalidade';
import { SnackBarService } from './../../services/snackbar.service';
import { PacienteService } from './../paciente.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Paciente } from '../paciente';
import moment from 'moment';
import { Sexo } from '../sexo';

import { EstadoCivil } from '../estadocivil';
import { Raca } from '../raca';
import { Convenio } from '../convenio';
import { Observable } from 'rxjs';


//-----------------------------------




@Component({
  selector: 'app-paciente-form',
  templateUrl: './paciente-form.component.html',
  styleUrls: ['./paciente-form.component.css']
})


export class PacienteFormComponent implements OnInit {


  //-----------------------------------

  id: number;
  statusPaciente: string;
  paciente: Paciente;
  nacionalidade: Nacionalidade[] = [];
  pegarsexo: Sexo[] = [];
  estadoCivil: EstadoCivil[] = [];
  raca: Raca[] = [];
  convenio: Convenio[] = [];


  constructor(
    private router: Router,
    private service: PacienteService,
    private snackBar: SnackBarService,
    private activatedRoute: ActivatedRoute
  ) {

    this.paciente = new Paciente();
    this.statusPaciente= "Ativo"
  }

  ngOnInit(): void {

    this.paciente.situacao= this.statusPaciente

    this.getNac();
    this.getSexo();
    this.getEstadoCivil();
    this.getRaca();
    this.getConvenio();


    let user  = JSON.parse(localStorage.getItem("user"))
    if(!user){
      this.router.navigate([""]);
      this.snackBar.warnMessage("Usuario sem permisão")
      return
    }

  }

  onSubmit() {
    this.paciente.dataNascimento= moment().format('YYYY-MM-DD')
    this.paciente.validadeCarteiraConvenio= moment().format('YYYY-MM-DD')
    this.service.salvar(this.paciente).subscribe( response =>{
      console.log(response);
      this.paciente= response;
      this.snackBar.successMessage('Paciente criado com sucesso!')
      this.router.navigate(["/paciente/list"])
    }, errorResponse =>{
      this.snackBar.errorMessage('Não foi possível criar o Paciente!')
      console.log(errorResponse.error.errors);
    }
    )
  }

getNac(){
  this.service.getNac().subscribe(resposta => this.nacionalidade = resposta)
}

getSexo(){
  this.service.getSexo().subscribe(resposta => this.pegarsexo = resposta)
}

getEstadoCivil(){
  this.service.getEstadoCivil().subscribe(resposta => this.estadoCivil = resposta)
}

getRaca(){
  this.service.getRaca().subscribe(resposta => this.raca = resposta)
}

getConvenio(){
  this.service.getConvenio().subscribe(resposta => this.convenio = resposta)
}



}
