//Para guardar la información de lo que estamos creando en las task-Emula una DB
import {Task} from  "./Task"
export const TASKS: Task[] = [
    {
        id: 1,
        text: 'Terminar módulo de Angular',
        day: ' Marzo 3 a las 12:00',
        reminder:true
    },
    {
        id: 2,
        text: 'Hacer curso de JS con Pololo',
        day: 'Febrero 24 a las 12:00',
        reminder:true
    },
    {
        id: 3,
        text: 'Limpieza',
        day: ' Marzo 3 a las 12:00',
        reminder:true
    },
    {
        id: 4,
        text: 'Practicar Código',
        day: 'Siempre',
        reminder:false
    }
]