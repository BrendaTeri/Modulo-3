import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//Importamos  para manejar que un método es observable, que es asincrónico.
import { Observable, of } from 'rxjs';
//Importamos nuestra lista de tarea e interface.
import { Task } from 'src/app/Task';
import { TASKS } from 'src/app/mock-tasks';

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
}