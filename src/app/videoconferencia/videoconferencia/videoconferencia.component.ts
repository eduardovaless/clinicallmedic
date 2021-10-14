import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-videoconferencia',
  templateUrl: './videoconferencia.component.html',
  styleUrls: ['./videoconferencia.component.css']
})
export class VideoconferenciaComponent implements OnInit {
 url="https://sendlink-53591.firebaseapp.com/conf.html?room="
 hash= Math.floor(Date.now() * Math.random()).toString(36)

  constructor() {}

  
 
  ngOnInit(): void {
    
  }

  
}
