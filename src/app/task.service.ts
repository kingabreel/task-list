import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  userTasks: string[] = [];


  addTask(tarefa: string) {
    this.userTasks.push(tarefa);
  }

  constructor() { }
}
