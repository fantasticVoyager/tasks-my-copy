package me.keithrasweiler.tasks.service;

import me.keithrasweiler.tasks.domain.Task;

public interface TaskService {

    Iterable<Task> list();

    Task save(Task task);
}
