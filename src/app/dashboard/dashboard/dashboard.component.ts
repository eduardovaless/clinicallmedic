import { Router } from '@angular/router';
import { SnackBarService } from './../../services/snackbar.service';
import { Component, OnInit } from '@angular/core';
import { single } from './dashboard'; 
import { single2 } from './dashboard';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})



export class DashboardComponent implements OnInit{

  

  public grafic1: boolean = true;
  public periodo1: boolean 

  //serviços
  single: any[];
  view: any[] = [700, 400];

  //meses
  single2: any[];
  view2: any[] = [700, 400];

  // SERVIÇOS
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;  
  showXAxisLabel: boolean = true;
  yAxisLabel: string = 'Serviços';
  showYAxisLabel: boolean = true;
  xAxisLabel: string = 'Serviços realizados';
  showLegend: boolean = true;

  colorScheme = {
    domain: ['#20a8d8', '#fc6f8d', '#d0ff7d', '#f1db7a', '#908279']
  };


  //MESES
   // options
   gradient2: boolean = true;
   showLegend2: boolean = true;
   showLabels: boolean = true;
   isDoughnut: boolean = false;
   legendPosition: string = 'below';
 
   colorScheme2 = {
     domain: [
       '#dc00c7', //jan
       '#ff0064', //fev
       '#ff822d', //mar
       '#e0cc51', //abril
       '#a6f198', //maio
       '#0d122c', //jun
       '#368ada', //jul
       '#1ab497', //ago
       '#55909e', //set
       '#585886', //out
       '#9f93db', //nov
       '#e31750', //dez
      ]
   };

  constructor(

    private snackBar: SnackBarService,
    private router: Router,

  ) {
    //serviços
    Object.assign(this, { single });

    //meses
    Object.assign(this, { single2 });
  }

  ngOnInit(): void {

    // sessionStorage
    let user  = JSON.parse(sessionStorage.getItem("user"))
    if(!user){
      this.router.navigate([""]);
      this.snackBar.warnMessage("Usuario sem permisão")
      return
    }

 }

  //serviços
  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }


  //MESES
  onSelect2(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate2(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate2(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }


  select1(){
    this.grafic1= false;
    this.periodo1= true;
  }

  filtrar1(){
    this.grafic1= true;
    this.periodo1= false;
  }

   }

  


