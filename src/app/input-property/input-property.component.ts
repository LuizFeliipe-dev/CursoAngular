import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.scss'],
  //inputs: ['nomeCurso: nome']
})
export class InputPropertyComponent implements OnInit {

  //Melhor fazer dessa forma para quando for
  //Visualizar o código, ficar mais fácil de
  //Enxergar as váriaveis que são inputs
  @Input('nome') nomeCurso: String = '';

  constructor() { }

  ngOnInit(): void {
  }

}
