import { Observable } from 'rxjs';
import { Agenda } from './agenda';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  
  apiURL: string = environment.apiURL + `/datasnap/rest/TCalendarController/agendaProfissional`;
  apiURL2: string = environment.apiURL + `/datasnap/rest/TCalendarController/agendamento`;
  apiURL3: string = environment.apiURL + `/datasnap/rest/TEntityController/unidades`;

  constructor(
    private http: HttpClient,
    
  ) { }

    getAgenda(idUnidade: any, idProfissional: string, currentDate: string){
      return this.http.get<Agenda[]>(`${this.apiURL}/${idUnidade}/${idProfissional}/${currentDate}`)
    }

    getAgenda2(){
      return this.http.get<Agenda>(this.apiURL2)
    }

    getPront(id: number): Observable<any> {
      return this.http.get<any>(`${this.apiURL2}/${id}`);
    }

    getUnidade(): Observable<any> {
      return this.http.get<any>(this.apiURL3);
    }


}
