import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgxMaskModule}  from 'ngx-mask';
import { FormularioComponent } from './cadastro/formulario/formulario.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxMaskModule.forRoot({
      dropSpecialCharacters:false
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
