import { SnackBarService } from './../../services/snackbar.service';
import { ProntuarioService } from './../prontuario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PacienteService } from './../../paciente/paciente.service';
import { Observable } from 'rxjs';
import { Component, Inject, OnInit } from '@angular/core';
import { Paciente } from 'src/app/paciente/paciente';
import { pdfDefaultOptions } from 'ngx-extended-pdf-viewer';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { DatePipe } from '@angular/common';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-prontuario',
  templateUrl: './prontuario.component.html',
  styleUrls: ['./prontuario.component.css'],
  providers: [DatePipe] 
})
export class ProntuarioComponent implements OnInit {
  public Editor = ClassicEditor;
  public isDisabled = false;
  public edited: boolean;
  public cancel: boolean;  
  public novo: boolean = true;

  public video: boolean;
  public videonovo: boolean = true;
  public videocancelar: boolean;

  public myConfig = {
    /*
        editorConfig is the original config for onlyoffice, see docs under https://api.onlyoffice.com/editors/config/document
    */
    editorConfig: { 
      document: {
        fileType: "docx",
        info: {
          author: "Me",
          created: "26.11.19",
        },
        key: "3277238458",
        permissions: {
          download: true,
          edit: true,
        },
        title: "TestTitle",
        url: "example.com",
      },
      documentType: "text",
      editorConfig: {
        embedded: {
          embedUrl: "example.com",
          saveUrl: "example.com",
          shareUrl: "example.com",
          toolbarDocked: "top",
        },
        lang: "en",
        mode: "edit",
      },
      events: {
        onBack: console.log,
        onDocumentStateChange: console.log,
        onError: console.log,
        onReady: console.log,
        onRequestEditRights: console.log,
        onSave: console.log,
      },
      height: "100%",
      type: "desktop",
      width: "100%",
    },
    script: "https://office.example-server/web-apps/apps/api/documents/api.js", // <-- This is the api script URL.
  };

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
   private snackBar: SnackBarService,
   private router: Router,
   private datePipe: DatePipe,
   public dialog: MatDialog

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

      let user  = JSON.parse(sessionStorage.getItem("user"))
    if(!user){
      this.router.navigate([""]);
      this.snackBar.warnMessage("Usuario sem permisão")
      return
    }

   
    
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

toggleVideo(){
  this.video = true
  this.videonovo = false;
  this.videocancelar = true;

 
  
}
toggleVideo2(){
  this.video = false;
  this.videonovo = true; 
  this.videocancelar = false;
}


openDialog(){
  this.dialog.open(DialogDataExampleDialog, {
     
    });
  }
}

@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'memed-dialog.html',
})
export class DialogDataExampleDialog {
  constructor() {}
}




