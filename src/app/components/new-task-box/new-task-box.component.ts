import { Component } from '@angular/core';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-new-task-box',
  templateUrl: './new-task-box.component.html',
  styleUrls: ['./new-task-box.component.css']
})
export class NewTaskBoxComponent {
  taskTitle: string = '';

  constructor(private taskService: TaskService){}

  addTask(){
    this.taskService.addTask(this.taskTitle);
    this.taskTitle = '';
  }
}
