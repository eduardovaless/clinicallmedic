import { SnackBarService } from './../../services/snackbar.service';
import { LoginService } from './../login.service';
import { DadosEmpresa } from './../../template/dadosempresa';
import { ServiceEmpresaService } from './../../services/service-empresa.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../login';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  
  user  = JSON.parse(localStorage.getItem("user"))
  userName= ""
  login = document.getElementById('login');
  senha = document.getElementById('senha');


   public usuario: Login; 

  //NOME DA EMPRESA
  clinica: DadosEmpresa;
  nomeFantasia= ""
  //-----------------------------


  constructor(
    private router: Router,
    private service: ServiceEmpresaService,
    private servicelogin: LoginService,
    private snackBar: SnackBarService
  ) { }

  ngOnInit(): void {

    this.usuario = new Login();
    
    this.getClinica()
    this.getLogin()
    
    if(!this.user.nomeUsuario){
      this.router.navigate(["/home/home"]);
      this.snackBar.warnMessage("Usuario sem permisão")
      return
    }
  }

  onSubmit() {  
   
  }

  public fazerLogin(): void{
    console.log(this.usuario)

    this.servicelogin.fazerLogin(this.usuario).subscribe((resposta)=>{
      console.log(resposta)
      localStorage.setItem("user", JSON.stringify(resposta));
      this.router.navigate(['/home/home'])
    },
    error =>{
      this.snackBar.errorMessage("Usuário ou/e Senha Inconrretos.")
      console.error(error)
    }
    )
  }

  getClinica(){
    this.service.getClinica().subscribe(resposta => this.nomeFantasia = resposta.nomeFantasia)
  }

  getLogin(){
    
  }
  
}
