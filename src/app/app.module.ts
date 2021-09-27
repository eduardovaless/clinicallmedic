import { AuthService } from './login/auth.service';
import { AuthGuardService } from './login/auth-guard.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { SnackBarService } from './services/snackbar.service';
import { PacienteModule } from './paciente/paciente.module';
import { AgendaModule } from './agenda/agenda.module';
import { ServiceEmpresaService } from './services/service-empresa.service';

import { FormsModule } from '@angular/forms';

import { UsuarioModule } from './usuario/usuario.module';


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component'

import { HttpClientModule } from '@angular/common/http';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { registerLocaleData } from '@angular/common';
import localeBr from '@angular/common/locales/pt';
import localeBrExtra from '@angular/common/locales/extra/pt';

import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MatDatepicker} from '@angular/material/datepicker';
import * as moment from 'moment';

// Depending on whether rollup is used, moment needs to be imported differently.
// Since Moment.js doesn't have a default export, we normally need to import using the `* as`
// syntax. However, rollup creates a synthetic default module and we thus need to import it using
// the `default as` syntax.
import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
import {defaultFormat as _rollupMoment, Moment} from 'moment';
import { ProntuarioComponent } from './prontuario/prontuario/prontuario.component';
import { ProntuarioModule } from './prontuario/prontuario.module';
import { PacienteService } from './paciente/paciente.service';
registerLocaleData(localeBr, 'pt', localeBrExtra)
export const MY_FORMATS = {
    parse: {
      dateInput: 'DD/MM/YYYY',
    },
    display: {
      dateInput: 'DD/MM/YYYY',

    monthYearLabel: 'MMMM Y',
    dateA11yLabel: 'L',
    monthYearA11yLabel: 'MMMM Y'


    },
  };




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LayoutComponent,






  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TemplateModule,
    NoopAnimationsModule,
    HttpClientModule,
    UsuarioModule,
    FormsModule,
    AgendaModule,
    PacienteModule,
    MatSnackBarModule,
    ProntuarioModule

  ],
  providers: [
    PacienteService,
    ServiceEmpresaService,
    SnackBarService,
    AuthGuardService,
    AuthService,
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
