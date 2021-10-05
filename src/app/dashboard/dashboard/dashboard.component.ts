import { Router } from '@angular/router';
import { SnackBarService } from './../../services/snackbar.service';
import { Component, OnInit } from '@angular/core';
import { single } from './dashboard'; 
import { single2 } from './dashboard';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
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
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  yAxisLabel: string = 'Serviços';
  showYAxisLabel: boolean = true;
  xAxisLabel: string = 'Serviços realizados';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };


  //MESES
   // options
   gradient2: boolean = true;
   showLegend2: boolean = true;
   showLabels: boolean = true;
   isDoughnut: boolean = false;
   legendPosition: string = 'below';
 
   colorScheme2 = {
     domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA', '#00FFFF', '#000000', '#B120CB', '#F30B54', '#04F896']
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

    // LOCALSTORAGE
    let user  = JSON.parse(localStorage.getItem("user"))
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

   }

  


