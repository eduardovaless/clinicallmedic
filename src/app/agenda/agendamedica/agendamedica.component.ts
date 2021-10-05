import { PacienteService } from './../../paciente/paciente.service';
import { Paciente } from './../../paciente/paciente';
import { SnackBarService } from './../../services/snackbar.service';
import { AgendaService } from './../agenda.service';
import { Observable } from 'rxjs';
import { Agenda } from './../agenda';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import moment from 'moment';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import localePt from '@angular/common/locales/pt';

@Component({
  selector: 'app-agendamedica',
  templateUrl: './agendamedica.component.html',
  styleUrls: ['./agendamedica.component.css'],
  providers: [
    {provide: localePt, useValue: 'pt'},
  ]
})
export class AgendamedicaComponent implements OnInit {
  agenda: Agenda [] = [];
  genda: Agenda
  idpacie: string;
  selected: Date | null;
  backgroundColorToggle = "primary";
  idUnidade: number;
  idProfissional: string;
  dataAgenda: string;
  id:number;
  pacientes: number;
  user  = JSON.parse(localStorage.getItem("user"))

  displayedColumns: string[] = ['status', 'hora', 'paciente', 'convenio', 'servico'];
  

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private service: AgendaService,
    private snackBar: SnackBarService,
    private servicep: PacienteService


  ) {
    
    
    this.idUnidade= 1
    this.idProfissional= this.user.idProfissional
    


   }

  ngOnInit(): void {

    this.searchScheduleProfessional();
  }
    //carregar agenda do medico logado

    searchScheduleProfessional(event?){//o evente é a data selecionado na agenda
     
      moment.locale('pt'); 
     
      let currentDate;
      
       //vai receber a data do dia ou a data selecionada
      if (event) {//se tiver o evento vamos jogar o evento nele se não colocamos a data do dia
        currentDate = moment(event).format('YYYY-MM-DD') //coloco no currentDate o evento da data já formatada no formato da api     
    }else{
      currentDate = moment().format('YYYY-MM-DD') //coloca a data do dia já formatada
    }

   // LOCALSTORAGE
    let user  = JSON.parse(localStorage.getItem("user"))
    if(!user){
      this.router.navigate([""]);
      this.snackBar.warnMessage("Usuario sem permisão")
      return
    }
    

      this.service.getAgenda(this.idUnidade, this.idProfissional, currentDate)
      .subscribe(resposta => this.agenda = resposta);
      
        
    }


     
  

  openScheduleDialog(){
    this.router.navigate(["/autorizacao/form"])    
  }

  click(idPaciente){    

    if (idPaciente) {
      this.router.navigate([`/prontuario/form/${idPaciente}`])
    }else{
      this.snackBar.errorMessage("Nenhum paciente selecionado!")
    }
     
   }
 //routerLink="/prontuario/form/{{element.idPaciente}}"


/*click(){
  
  let params : Observable<any> = this.activatedRoute.params
   params.subscribe(urlParams => {
     this.id = urlParams ['id'];
     console.log(this.id)

  if (this.idpacie) {
    this.router.navigate([`/prontuario/form/`])
  }
    
    */
}