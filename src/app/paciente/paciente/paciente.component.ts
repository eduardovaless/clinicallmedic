import { PacienteService } from './../paciente.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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




//testes---------------------------------

dataSource = new MatTableDataSource<Paciente>();











//-----------------------------------
  constructor(
    private service: PacienteService
  ) {



   }

  ngOnInit(): void {
    this.getPacie()
    this.initialTable();




    //teste-------------------------



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
