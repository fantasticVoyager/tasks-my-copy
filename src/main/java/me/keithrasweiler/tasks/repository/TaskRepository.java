package me.keithrasweiler.tasks.repository;

import me.keithrasweiler.tasks.domain.Task;
import org.springframework.data.repository.CrudRepository;

public interface TaskRepository extends CrudRepository<Task, Long> {
}
