import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  userTasks: { id: number, title: string, completed: boolean } [] = [];
  nextTaskId: number = 1;


  addTask(task: string) {
    this.userTasks.push({ id: this.nextTaskId++, title: task, completed: false });
  }

  switchComplete(id: number) {
    const task = this.userTasks.find(task => task.id === id);

    if (task) {
      task.completed = !task.completed;
    }
  }
}
