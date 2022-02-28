import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//Importamos  para manejar que un método es observable, que es asincrónico.
import { Observable, of } from 'rxjs';
//Importamos nuestra lista de tarea e interface.
import { Task } from 'src/app/Task';
import { TASKS } from 'src/app/mock-tasks';

//Le enviamos un Json a nuestro server.
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class TaskService {
//Creamos una const para guardar la Url del servidor. Puede guardarse también en una variable de entorno.
  private apiUrl = 'http://localhost:3000/tasks'

  constructor(
    private http:HttpClient
  ) { }
//Usamos interface y colocamos la lista de tareas.
//El método es Asincrónico, a la DB le lleva tiempo para responder a la petición.
//Método get nos devuelve la lista de tareas. Pidiendo desde nuestro servidor y no desde un archivo estático.
  getTasks(): Observable<Task[]>{
    return this.http.get<Task[]>(this.apiUrl)
  }

//Por medio de la función que definimos en el component task- enlazamos al service con la apiUrl par apoder ejecutar el delete desde la DB.
  deleteTask(task: Task): Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`
    return this.http.delete<Task>(url)
  }

  //Put, para actualizar un elemento.
  updateToggleReminder(task: Task): Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`
    return this.http.put<Task>(url, task, httpOptions)
  }
}
