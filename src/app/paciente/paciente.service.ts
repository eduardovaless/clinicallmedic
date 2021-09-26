import { Nacionalidade } from './nacionalidade';
import { Paciente } from './paciente';
import { environment } from 'src/environments/environment.prod';
import { DadosEmpresa } from './../template/dadosempresa';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  apiURL: string = environment.apiURL + '/datasnap/rest/TPatientController/paciente'
  apiURLp: string = environment.apiURL + '/datasnap/rest/TPatientController/pacientes'
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

    getPacie():Observable<Paciente[]>{
      return this.http.get<Paciente[]>(this.apiURLp)
    }

    getPaciente():Observable<Paciente>{
      return this.http.get<Paciente>(this.apiURLp)
    }



    getPatientList(name: string): Observable<Paciente[]> {
      return this.http.get<Paciente[]>(`${this.apiURLp}/${name}`)
  }

    listar(): Observable<{
      nomePaciente: string,
      dataNascimento: string,
      nomeConvenio:string,
      cpf: string,
      telefoneCelular: string  }[]> {
      return this.http
          .get<any[]>(this.apiURLp)
          .pipe(
              map(dadosDaApi => {
                  return dadosDaApi.map(a => {
                      return {
                          nomePaciente: a.nomePaciente,
                          dataNascimento: a.dataNascimento,
                          nomeConvenio: a.nomeConvenio,
                          cpf: a.cpf,
                          telefoneCelular: a.telefoneCelular
                      };
                  });
              })
          );
  }


}
