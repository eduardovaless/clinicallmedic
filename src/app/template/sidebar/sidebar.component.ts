import { LoginComponent } from './../../login/login/login.component';
import { LoginService } from './../../login/login.service';
import { PacienteService } from './../../paciente/paciente.service';
import { DadosEmpresa } from './../dadosempresa';
import { ServiceEmpresaService } from './../../services/service-empresa.service';
import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/login/login';



var data = new Date();
var ano = data.getFullYear();


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})


export class SidebarComponent implements OnInit {

  dadosempresa: DadosEmpresa;
  anoAtual= ano;
  nomeFantasia = ""
  usuario: LoginComponent
  nomeusuario= ""

  constructor(
    private serviceEmpresa: ServiceEmpresaService,
    private service: LoginService

  ) {      
    
    
  }

  ngOnInit(): void {
    this.getclinica()
    
  }

  getclinica(){    
    this.serviceEmpresa.getClinica().subscribe(resposta => this.nomeFantasia = resposta.nomeFantasia);
      }

     


}
