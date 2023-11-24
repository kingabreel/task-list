import { Component } from '@angular/core';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {

  constructor(private taskService: TaskService) {}

  getTasks() {
    return this.taskService.userTasks;
  }

  completeTask(id: number) {
    this.taskService.switchComplete(id);
  }
}
