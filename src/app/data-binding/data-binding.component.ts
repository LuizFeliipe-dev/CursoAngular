import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  url: String = 'http:/loiane.com';
  cursoAngular: boolean = true;
  urlImage =  'http://lorempixel.com/400/200/nature/';
  valorAtual: String = '';
  valorSalvo = '';
  isMouseOver: boolean = false;
  nome: String = 'abc';
  pessoa = {
    nome: 'igor',
    idade: 19
  }
  nomeDoCurso: String = 'Angular';


  getValor(){
    return 1;
  }

  getCurtiCurso(){
    return true;
  }

  botaoClickado(){
    alert('Botão Clickado!')
  }

  onKeyUp(evento: KeyboardEvent){
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor: any){
    this.valorSalvo = valor;
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
