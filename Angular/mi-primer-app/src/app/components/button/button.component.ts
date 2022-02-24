import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//Con Output:  lo trasladamos al header.
//EventEmitter: emitir hacia afuera del componente una acción.
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() text: string = "";
  @Input() color: string = "";
  @Output() btnClick = new EventEmitter()
  
  constructor() { }

  ngOnInit(): void {
  }

  //Para llevarlo hacia afuera hay que llamarlo con this
  onClick(){
    this.btnClick.emit();
  }
  
}
