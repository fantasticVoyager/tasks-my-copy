package me.keithrasweiler.tasks.controller;

import me.keithrasweiler.tasks.domain.Task;
import me.keithrasweiler.tasks.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/tasks")
public class TaskController {

    private TaskService taskService;

    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @GetMapping(value = {"", "/"})
    public Iterable<Task> list() {
        return this.taskService.list();
    }

    @PostMapping(value = {"", "/"})
    public Task saveTask(@RequestBody Task task) {
        return this.taskService.save(task);
    }
}
