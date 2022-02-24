import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/Task';
import { TASKS } from 'src/app/mock-tasks';
//importamos el pack de estilos que descargamos de angular
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})
export class TasksItemComponent implements OnInit {
  //traemos la primer tarea de muestra
  @Input() task: Task = TASKS[0]

  //lo iniciamos
  faTimes = faTimes;
  constructor() { }

  ngOnInit(): void {
  }

}
