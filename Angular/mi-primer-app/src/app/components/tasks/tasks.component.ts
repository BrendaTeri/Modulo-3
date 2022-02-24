import { Component, OnInit } from '@angular/core';
//importamos nuestra lista de tarea e interface
import { Task } from 'src/app/Task';
import { TASKS } from 'src/app/mock-tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
//iniciamos la lista de tareas
  tasks: Task[] = TASKS;

  constructor() { }

  ngOnInit(): void {
  }

}
