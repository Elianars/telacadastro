import { Component } from '@angular/core';
import { Form } from '@angular/forms';
import { CepServiceService } from './cep-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cep ';

  constructor(private cepsService: CepServiceService){}

  consultaCep(cep:any,form:Form){
    this.cepsService.buscar(cep).subscribe((dados) => this.populaForm({ dados, form }));
  }

    populaForm({ dados, form }: { dados: any; form: any; }){
     form.setValue({
      cep:dados.cep,
      logradouro: dados.logradouro,
      bairro:dados.bairro,
      cidade:dados.localidade,
      uf:dados.uf,
    })
  }
}

