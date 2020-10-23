import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import { Task } from './task.model';

@Injectable()
export class TaskService {

    constructor(private httpClient: HttpClient) {
    }

    getTasks() {
        return this.httpClient.get('/api/tasks');
    }

    saveTask(task: Task, checked: boolean) {
        task.completed = checked;
        return this.httpClient.post('/api/tasks', task);
    }
}
