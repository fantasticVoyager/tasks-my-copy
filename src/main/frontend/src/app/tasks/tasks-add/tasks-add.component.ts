import { Component, OnInit } from '@angular/core';
import {TaskService} from "../task.service";
import {TargetedEntryPointFinder} from "@angular/compiler-cli/ngcc/src/entry_point_finder/targeted_entry_point_finder";
import {Task} from "../task.model";

@Component({
  selector: 'app-tasks-add',
  templateUrl: './tasks-add.component.html',
  styleUrls: ['./tasks-add.component.sass']
})
export class TasksAddComponent implements OnInit {

    addTaskValue: string = "initial value!!";

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }

  onTaskAdd(event) {
      let task: Task = new Task(event.target.value, false, '01/07/2020');
      this.taskService.saveTask(task).subscribe(
          (newTask: Task) => {
              console.log(newTask);

              //clear the input
              this.addTaskValue = ' ';

              //emit the task added event and send the new task
              this.taskService.onTaskAdded.emit(newTask);
          });
  }

}
