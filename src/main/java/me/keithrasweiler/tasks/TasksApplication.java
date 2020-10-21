package me.keithrasweiler.tasks;

import me.keithrasweiler.tasks.domain.Task;
import me.keithrasweiler.tasks.service.TaskService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.time.LocalDate;

@SpringBootApplication
public class TasksApplication {

    public static void main(String[] args) {
        SpringApplication.run(TasksApplication.class, args);
    }

    @Bean
    CommandLineRunner runner(TaskService taskService) {
        return args -> {
            taskService.save(new Task(1L, "Pick up the car", LocalDate.now(), true));
            taskService.save(new Task(2L, "Figure out the remove waivers thing", LocalDate.now(), false));
            taskService.save(new Task(3L, "Make Amazon order", LocalDate.now(), false));
        };
    }

}
