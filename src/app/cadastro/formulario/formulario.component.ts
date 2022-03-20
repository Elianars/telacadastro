import { Component, OnInit } from '@angular/core';
import { Cadastr } from '../shared/cadastr';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  cliente: Cadastr | undefined;

  constructor() { }
  
  ngOnInit(): void {
    this.cliente =new Cadastr();
  }

}
