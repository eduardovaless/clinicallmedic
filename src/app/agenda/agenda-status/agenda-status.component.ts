import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-agenda-status',
  templateUrl: './agenda-status.component.html',
  styleUrls: ['./agenda-status.component.css']
})
export class AgendaStatusComponent implements OnInit {

  @Input("schedule") schedule: any;
  status: any
  constructor() { }

  ngOnInit() {
    if (this.schedule.estadoAgenda) {

     this.schedule.estadoAgenda =  this.schedule.estadoAgenda.toLowerCase();
     
    }

    if (this.schedule.situacaoAgenda) {

     this.schedule.situacaoAgenda =  this.schedule.situacaoAgenda.toLowerCase();
    
    }


  }

}
