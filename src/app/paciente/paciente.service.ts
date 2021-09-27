import { Nacionalidade } from './nacionalidade';
import { Paciente } from './paciente';
import { environment } from 'src/environments/environment.prod';
import { DadosEmpresa } from './../template/dadosempresa';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Sexo } from './sexo';
import { EstadoCivil } from './estadocivil';
import { Raca } from './raca';
import { Convenio } from './convenio';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  apiURL: string = environment.apiURL + '/datasnap/rest/TPatientController/paciente'
  apiURLp: string = environment.apiURL + '/datasnap/rest/TPatientController/pacientes'
  apiURLNac: string = environment.apiURL + '/datasnap/rest/TDomainController/nacionalidade'
  apiURLSexo: string = environment.apiURL + '/datasnap/rest/TDomainController/sexo'
  apiURLEstCivil: string = environment.apiURL + '/datasnap/rest/TDomainController/estadocivil'
  apiURLRaca: string = environment.apiURL + '/datasnap/rest/TDomainController/raca'
  apiURLConvenio: string = environment.apiURL + '/datasnap/rest/TEntityController/convenios'


  constructor(
    private http: HttpClient
  ) { }

    //POST
    salvar(paciente:Paciente):Observable<Paciente>{
      return this.http.post<Paciente>(this.apiURL, paciente);
    }

    //PEGAR NACIONALIDADE
    getNac():Observable<Nacionalidade[]>{
      return this.http.get<Nacionalidade[]>(this.apiURLNac)
    }

    //PEGAR SEXO
    getSexo():Observable<Sexo[]>{
      return this.http.get<Sexo[]>(this.apiURLSexo)
    }

    //PEGAR ESTADO CIVIL
    getEstadoCivil():Observable<EstadoCivil[]>{
      return this.http.get<EstadoCivil[]>(this.apiURLEstCivil)
    }

    //PEGAR RAÇA
    getRaca():Observable<Raca[]>{
      return this.http.get<Raca[]>(this.apiURLRaca)
    }

    //PEGAR CONVENIO
    getConvenio():Observable<Convenio[]>{
      return this.http.get<Convenio[]>(this.apiURLConvenio)
    }
    //PEGAR POR ID
    getPacieById(id: number): Observable<Paciente> {
      return this.http.get<Paciente>(`${this.apiURL}/${id}`);
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
