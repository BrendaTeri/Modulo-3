import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title:string = 'My Task List';

  constructor() { }

  ngOnInit(): void {
  }
  
//Cuando el usuario haga click en btn(en el component-btn), este le pasa al component-header que hubo un evento y lo muestra.
  toggleAddTask(){
    console.log("toggleAddTask!");
  }

}
