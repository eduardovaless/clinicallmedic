import { ProntuarioService } from './../prontuario.service';
import { ActivatedRoute } from '@angular/router';
import { PacienteService } from './../../paciente/paciente.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/app/paciente/paciente';
import { pdfDefaultOptions } from 'ngx-extended-pdf-viewer';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-prontuario',
  templateUrl: './prontuario.component.html',
  styleUrls: ['./prontuario.component.css']
})
export class ProntuarioComponent implements OnInit {
  public Editor = ClassicEditor;
  public isDisabled = false;
  public edited: boolean;
  public cancel: boolean;
  public novo: boolean = true;
  pdfSrc: any
  pdf= "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf"
  id:number;
  documento:number;
  paciente: Paciente;
  listPront= new Array();


  //teste---------
  _base64ToArrayBuffer(base64) {
	  var binary_string = base64.replace(/\\n/g, '');
    binary_string =  window.atob(base64);
    var len = binary_string.length;
    var bytes = new Uint8Array( len );
    for (var i = 0; i < len; i++)        {
        bytes[i] = binary_string.charCodeAt(i);
    }
    return bytes.buffer;
  }
  //---------------

  constructor(
   private service:PacienteService,
   private servicep: ProntuarioService,
   private activatedRoute: ActivatedRoute,
   

  ) {
    this.paciente=new Paciente();
    pdfDefaultOptions.assetsFolder = 'bleeding-edge';
   }

  ngOnInit(): void {

    let params : Observable<any> = this.activatedRoute.params
   params.subscribe(urlParams => {
     this.id = urlParams ['id'];
     if(this.id){
     this.service.getPacieById(this.id)
     .subscribe(response => this.paciente = response,
      errorResponse => this.paciente = new Paciente()
      )}})

      
      this.getPront();

  }

  getPront(){

    let params : Observable<any> = this.activatedRoute.params
   params.subscribe(urlParams => {
     this.id = urlParams ['id'];
     console.log(this.id)
     if(this.id){
     this.servicep.getPront(this.id)
     .subscribe(response => {if (response.idDocumento) {
      this.listPront.push(response)
    }else {this.listPront= response};
      console.log(response)
      console.log(this.listPront)
  
  },         
      errorResponse => this.paciente = new Paciente()
      )}})
  }

  visupdf(documento:any){
    this.servicep.getProntPDF(documento.idDocumento, documento.idPaciente, documento.origem)
    .subscribe(response =>{
      console.log(response)
      this.pdfSrc =this._base64ToArrayBuffer(response.arquivoPDF);
    })
}

toggleDisabled() {  
  this.edited = true; 
  this.cancel = true; 
  this.novo = false;  
}

toggleCancel(){
  this.edited = false;
  this.novo = true; 
  this.cancel = false;
}



}




