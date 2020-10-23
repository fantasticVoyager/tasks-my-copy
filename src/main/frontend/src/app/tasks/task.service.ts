import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable()
export class TaskService {

    constructor(private httpClient: HttpClient) {
    }

    getTasks() {
        return this.httpClient.get('/api/tasks');
    }
}
