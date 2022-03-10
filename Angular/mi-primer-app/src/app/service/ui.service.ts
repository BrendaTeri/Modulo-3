import { Injectable } from '@angular/core';
//Para poder visualizar los cambios en el service.
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
 //Nos dejará ver los cambios. 
  private showAddTask:boolean = false;
  private subjet = new Subject<any>();
  
  constructor() { }

  toggleAddTask():void{
    this.showAddTask = !this.showAddTask;
    this.subjet.next(this.showAddTask);
  }

  onToggle():Observable<any>{
    return this.subjet.asObservable();
  }

}
