import { Nacionalidade } from './../nacionalidade';
import { SnackBarService } from './../../services/snackbar.service';
import { PacienteService } from './../paciente.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Paciente } from '../paciente';

//SELECT DE ESTADO CIVIL
interface EstadoCivil {
  value: string;
  viewValue: string;
}
//-----------------------------------
//SELECT DE ESTADO CIVIL
interface Raca {
  value: string;
  viewValue: string;
}
//-----------------------------------




@Component({
  selector: 'app-paciente-form',
  templateUrl: './paciente-form.component.html',
  styleUrls: ['./paciente-form.component.css']
})


export class PacienteFormComponent implements OnInit {
//SEXO
  sexo: string;
  genero: string[] = ['Feminino', 'Masculino'];
//----------------------------
  //SELECT DE ESTADO CIVIL
  estadocivis: EstadoCivil[] = [
    { value: '', viewValue: '' },
    { value: 'solteiro-1', viewValue: 'Solteiro' },
    { value: 'casado-2', viewValue: 'Casado' },
    { value: 'separado-3', viewValue: 'Separado' },
    { value: 'viuvo-4', viewValue: 'Viúvo' },
    { value: 'outro-5', viewValue: 'Outro' }
  ];
  //-----------------------------------
   //SELECT DE ESTADO CIVIL
   racas: Raca[] = [
    { value: '', viewValue: '' },
    { value: 'branca-1', viewValue: 'Branca' },
    { value: 'preta-2', viewValue: 'Preta' },
    { value: 'parda-3', viewValue: 'Parda' },
    { value: 'amarela-4', viewValue: 'Amarela' },
    { value: 'ingigena-5', viewValue: 'Indigena' },
    { value: 'seminform-5', viewValue: 'Sem Informação' }
  ];
  //-----------------------------------


  paciente: Paciente;
  nacionalidade: Nacionalidade[] = [];

  constructor(
    private router: Router,
    private service: PacienteService,
    private snackBar: SnackBarService
  ) {

    this.paciente = new Paciente();
    
  }

  ngOnInit(): void {
    this.sexo= this.paciente.sexo
    this.getNac();
    
  }

  onSubmit() {

    this.service.salvar(this.paciente).subscribe( response =>{
      console.log(response);       
      this.paciente= response;
      this.snackBar.successMessage('Paciente criado com sucesso!')
      this.router.navigate(["/paciente-list"])
    }, errorResponse =>{
      this.snackBar.errorMessage('Não foi possível criar o Paciente!')      
      console.log(errorResponse.error.errors);            
    }
    )
  }

getNac(){
  this.service.getNac().subscribe(resposta => this.nacionalidade = resposta)
}





}
