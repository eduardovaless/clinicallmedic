import { Router } from '@angular/router';
import { SnackBarService } from './../../services/snackbar.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-memed',
  templateUrl: './memed.component.html',
  styleUrls: ['./memed.component.css']
})
export class MemedComponent implements OnInit {

  constructor(
    private snackBar: SnackBarService,
    private router: Router,
  ) {
    
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

}
