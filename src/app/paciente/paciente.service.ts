import { Nacionalidade } from './nacionalidade';
import { Paciente } from './paciente';
import { environment } from 'src/environments/environment.prod';
import { DadosEmpresa } from './../template/dadosempresa';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  apiURL: string = environment.apiURL + '/datasnap/rest/TPatientController/paciente';
  apiURLNac: string = environment.apiURL + '/datasnap/rest/TDomainController/nacionalidade'
  constructor(
    private http: HttpClient
  ) { }


    salvar(paciente:Paciente):Observable<Paciente>{
      return this.http.post<Paciente>(this.apiURL, paciente);
    }

    getNac():Observable<Nacionalidade[]>{
      return this.http.get<Nacionalidade[]>(this.apiURLNac)
    }

}
