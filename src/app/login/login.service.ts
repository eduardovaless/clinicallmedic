import { AuthService } from './auth.service';
import { ResponseLogin } from './login/responseLogin';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from './login';
import { tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiURL: string = environment.apiURL + `/datasnap/rest/TAuthenticateController/login`;

  constructor(
    private http: HttpClient,
    private authService: AuthService,
  ) { }

  fazerLogin(usuario: Login):Observable<ResponseLogin>{
      return this.http.post<ResponseLogin>(this.apiURL, usuario).pipe(
        tap((loginResponse)=> this.authService.loginResponse= loginResponse ));
    }

    getLogin(){
      return this.http.get<Login>(this.apiURL);
    }


}
