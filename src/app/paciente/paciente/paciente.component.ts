import { SnackBarService } from './../../services/snackbar.service';
import { PacienteService } from './../paciente.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Paciente } from '../paciente';
import { map, startWith } from 'rxjs/operators';
import {FormControl} from '@angular/forms';
import {Observable, Subscriber} from 'rxjs';
import {MatTableDataSource} from '@angular/material/table';
import moment from 'moment';





 @Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent implements OnInit {

  displayedColumns: string[] = ['nome', 'nascimento', 'convenio', 'cpf', 'telefone'];

  paciente: Paciente[] = [];

  patientList = [];

  nascimento: string;

  pacientes: Paciente

  idPaciente:number;




//testes---------------------------------

dataSource = new MatTableDataSource<Paciente>();

//-----------------------------------
  constructor(
    private service: PacienteService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private snackBar: SnackBarService
  ) {



   }

  ngOnInit(): void {

    this.getPacie()
    this.initialTable();


    let params : Observable<any> = this.activatedRoute.params
     params.subscribe(urlParams => {
     this.idPaciente = urlParams ['id'];
     if(this.idPaciente){
     this.service.getPacieById(this.idPaciente)
     .subscribe(response => this.pacientes = response,
      errorResponse => this.pacientes = new Paciente()
      )}})


      let user  = JSON.parse(sessionStorage.getItem("user"))
    if(!user){
      this.router.navigate([""]);
      this.snackBar.warnMessage("Usuario sem permisão")
      return
    }


  }


  getPacie(){
    this.service.getPacie().subscribe(resposta => {
      console.log(resposta),
      this.paciente = resposta
      });
  }











  //---------------------- testes
  initialTable(){
    this.service.getPatientList('a')
    .subscribe(response =>{
      this.dataSource.data = response
      ;
    })

  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    if(filterValue.length > 2){
      this.service.getPatientList(filterValue)
      .subscribe(response =>{
        if(response.length > 0){
          this.dataSource.data = response
        }else {
          this.patientList = new Array<Paciente>();
          this.patientList.push(response);
          this.dataSource.data = this.patientList;
        }
        console.log(this.dataSource.data);


        ;
      })

    }
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  // ... (código ocultado) ...





}
