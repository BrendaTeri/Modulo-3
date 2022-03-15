import { Component, OnInit } from '@angular/core';
//Cuando hagamos click en el btn le pasamos al otro component.
import { UiService } from 'src/app/service/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title:string = 'My Task List';
  showAddTask:boolean = true;
  subscription?: Subscription;

  constructor(
    private uiService:UiService,
    private router: Router
  ) { 
    this.subscription = this.uiService.onToggle()
      .subscribe(value => this.showAddTask = value);
  }

  ngOnInit(): void {
  }
  
//Cuando el usuario haga click en btn(en el component-btn), este le pasa al component-header que hubo un evento y lo muestra.
  toggleAddTask(){
    this.uiService.toggleAddTask();
  }

  hasRoute(route:string){
    return this.router.url === route
  }

}
