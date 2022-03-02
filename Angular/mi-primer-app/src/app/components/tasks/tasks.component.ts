import { Component, OnInit } from '@angular/core';
//Nos va a permitir hacer llamadas GET/POST a nuestro puerto de DB.
import { HttpClient, HttpHandler } from '@angular/common/http';
//Importamos el TaskService.
import { TaskService } from 'src/app/service/task.service';
import { Task } from 'src/app/Task';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
//iniciamos la lista de tareas con una lista vacía.
  tasks: Task[] = [];
//Debemos iniciar nuestro servicio.
  constructor(
    private taskService: TaskService
  ) { }
//Cuando se monte el componente, vamos a llamar a nuestro servicio. 
//Guardamos la lista de tareas dentro de la lista vacía que creamos anteriormente.
  ngOnInit(): void {
//Like promise, el .suscribe() sería lo mismo que async/await de las promises, pero este es del Observable.
//Cuando el getTaks finaliza, recibimos un cb, recibiendo un parámetro de respuesta(tareas).
    this.taskService.getTasks().subscribe( tasks => {
//Las tareas que recibimos vamos a asignarlas a nuestra propiedad tasks.
      this.tasks = tasks
    });
  }
//Debemos pasar la task a la DB para que sea borrada a travez del servicio.
  deleteTask(task: Task){
    this.taskService.deleteTask(task)
      .subscribe(() => {
        this.tasks = this.tasks.filter( t => t.id !== task.id )
      })
  }

//Le enviamos al service que la tarea ya actualizada la guarde en la DB
  toggleReminder(task: Task){
    task.reminder = !task.reminder
    this.taskService.updateToggleReminder(task).subscribe();
  }

//Recibimos la tarea agregada desde addTask.
//Ahora guardamos esta información enviandola al DB
  addTask(task:Task){
    this.taskService.addTask(task).subscribe(task=>{
      this.tasks.push(task)
    })
  }
}

