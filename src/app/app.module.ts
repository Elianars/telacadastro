import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgxMaskModule}  from 'ngx-mask';
import { FormularioComponent } from './cadastro/formulario/formulario.component';
@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxMaskModule.forRoot({
      dropSpecialCharacters:false
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
