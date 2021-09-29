import { SnackBarService } from './../../services/snackbar.service';
import { Router } from '@angular/router';
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
  user  = JSON.parse(localStorage.getItem("user"))
  

  constructor(
    private serviceEmpresa: ServiceEmpresaService,
    private service: LoginService,
    private router: Router,
    private snackbar: SnackBarService


  ) {        
    
   
  }

  ngOnInit(): void {
    this.getclinica()
    
    let user  = JSON.parse(localStorage.getItem("user"))
    if(!user){
      this.router.navigate([""]);
      this.snackbar.warnMessage("Usuario sem permisão")
      return
    }
  }

  getclinica(){    
    this.serviceEmpresa.getClinica().subscribe(resposta => this.nomeFantasia = resposta.nomeFantasia);
      }

  sair(){
    this.router.navigate([''])
    localStorage.clear();
  }
     


}
