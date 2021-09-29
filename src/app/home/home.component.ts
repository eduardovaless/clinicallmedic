import { SnackBarService } from './../services/snackbar.service';
import { ServiceEmpresaService } from './../services/service-empresa.service';
import { DadosEmpresa } from './../template/dadosempresa';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  clinica: DadosEmpresa;
  nomeFantasia= ""
  user  = JSON.parse(localStorage.getItem("user"))

  constructor(
    private service: ServiceEmpresaService,
    private snackBar: SnackBarService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getClinica()

   let user  = JSON.parse(localStorage.getItem("user"))
    if(!user){
      this.router.navigate([""]);
      this.snackBar.warnMessage("Usuario sem permisão")
      return
    }
  }

  getClinica(){
    this.service.getClinica().subscribe(resposta => this.nomeFantasia = resposta.nomeFantasia)
  }

}
