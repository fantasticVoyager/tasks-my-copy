import {HttpClient} from "@angular/common/http";
import {EventEmitter, Injectable} from "@angular/core";
import { Task } from './task.model';

@Injectable()
export class TaskService {

    constructor(private httpClient: HttpClient) {
    }

    //used to allow communication between the add and list components
    onTaskAdded = new EventEmitter<Task>();

    getTasks() {
        return this.httpClient.get('/api/tasks');
    }

    updateTask(task: Task, checked: boolean) {
        task.completed = checked;
        return this.httpClient.post('/api/tasks', task);
    }

    saveTask(task: Task) {
        return this.httpClient.post('/api/tasks', task);
    }
}
