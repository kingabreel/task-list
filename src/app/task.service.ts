import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  userTasks: { id: number, title: string, completed: boolean } [] = [];
  nextTaskId: number = 1;


  exampleTasks(){
    const tasks = ['Study Calculus', 'Study Java', 'Take a break', 'Initiate an app creation', 'Study English'];

    tasks.forEach(task => this.addTask(task));
  }

  addTask(task: string) {
    this.userTasks.push({ id: this.nextTaskId++, title: task, completed: false });
  }

  switchComplete(id: number) {
    const task = this.userTasks.find(task => task.id === id);

    if (task) {
      task.completed = !task.completed;
    }
  }

  removeTask(id:number) {
    const i = this.userTasks.findIndex( task => task.id === id);

    if (i !== -1) {
      this.userTasks.splice(i, 1);
      this.organizeId();
    }
  }

  private organizeId() {
    this.userTasks.forEach((task, index) => {
      task.id = index + 1;
      if(this.userTasks.length > 1){
        this.nextTaskId = index + 2;
      } else {
        this.nextTaskId = 1;
      }
    });
  }
}
