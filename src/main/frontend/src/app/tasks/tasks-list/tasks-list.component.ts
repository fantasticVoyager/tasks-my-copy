import { Component, OnInit } from '@angular/core';
import { Task } from '../task.model';
import {TaskService} from "../task.service";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.sass']
})
export class TasksListComponent implements OnInit {

    tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
      this.taskService.getTasks()
        .subscribe(
            (data: any) => this.tasks = data
        );

      this.taskService.onTaskAdded.subscribe(
          (task: Task) => this.tasks.push(task)
      );
  }

    getDueDateLabel(task: Task) {
      return task.completed ? 'alert-success' : 'alert-primary';
    }

    onTaskChange(event, task: Task) {
      this.taskService.updateTask(task, event.target.checked)
          .subscribe(
              (data: any) => console.log(data)
          );
    }

}
