import { Component, OnInit } from '@angular/core';
import { Task } from '../task.model';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.sass']
})
export class TasksListComponent implements OnInit {

    tasks: Task[] = [];

  constructor() { }

  ngOnInit(): void {
      this.tasks.push(new Task(1, "Task 1", false, "5/7/2020"));
      this.tasks.push(new Task(2, "Task 2", false, "5/7/2020"));
      this.tasks.push(new Task(3, "Task 3", true, "5/7/2020"));
  }

    getDueDateLabel(task: Task) {
      return task.completed ? 'label-success' : 'label-primary';
    }

    onTaskChange(event, task: Task) {
      console.log("task has changed");
      // this.taskService.saveTask(task, event.target.checked).subscribe();
    }

}
