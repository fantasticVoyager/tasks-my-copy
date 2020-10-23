import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { TasksAddComponent } from './tasks/tasks-add/tasks-add.component';
import { TasksListComponent } from './tasks/tasks-list/tasks-list.component';
import { HttpClientModule } from "@angular/common/http";
import { TaskService } from "./tasks/task.service";

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        TasksComponent,
        TasksAddComponent,
        TasksListComponent
      ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
