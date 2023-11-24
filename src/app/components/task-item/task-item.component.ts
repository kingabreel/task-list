import { Component } from '@angular/core';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  taskComplete: boolean[] = [];

  constructor(private taskService: TaskService) {}

  getTasks() {
    for(let task in this.taskService.userTasks){
      this.taskComplete.push(false);
    }

    return this.taskService.userTasks;
  }

  
}
