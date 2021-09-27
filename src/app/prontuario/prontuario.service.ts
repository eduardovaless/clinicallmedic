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

  apiURL: string = environment.apiURL + 'datasnap/rest/TDocumentController/listaDocumento'
 


  constructor(
    private http: HttpClient
  ) { }

    //POST
    getPront(id: number): Observable<Paciente> {
      return this.http.get<Paciente>(`${this.apiURL}/${id}`);
    }
  
  }