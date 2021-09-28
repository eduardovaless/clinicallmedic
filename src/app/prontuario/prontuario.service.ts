import { Paciente } from './../paciente/paciente';

import { environment } from 'src/environments/environment.prod';
import { DadosEmpresa } from './../template/dadosempresa';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProntuarioService {

  apiURL: string = environment.apiURL + '/datasnap/rest/TDocumentController/listaDocumento'
  apiURLpdf: string = environment.apiURL + '/datasnap/rest/TDocumentController/documento'


  constructor(
    private http: HttpClient
  ) { }

    //POST
    getPront(id: number): Observable<any> {
      return this.http.get<any>(`${this.apiURL}/${id}`);
    }

    

    getProntPDF(id: number, documento: number, origem: string): Observable<any> {
      return this.http.get<any>(`${this.apiURLpdf}/${id}/${documento}/${origem}`);
    }
  
  }