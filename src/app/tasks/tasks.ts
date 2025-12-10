import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Task } from '../task';
import { Tasks as TasksService } from '../tasks';
import { forkJoin } from 'rxjs';
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks implements OnInit {
  tasks: Task[] = [];
  newTask: Task = {};
  constructor(private tasksService: TasksService) {}
  ngOnInit(): void {
    this.loadTasks();
  }
  private loadTasks(): void {
    this.tasksService.index(false).subscribe(tasks => {
      this.tasks = tasks;
    });
  }
  addTask(): void {
    if (!this.newTask.title) {
      return;
    }
    const taskToSend: Task = {
      title: this.newTask.title,
      deadline: this.newTask.deadline || '',
      completed: false,
      archived: false,
    };

    this.tasksService.post(taskToSend).subscribe(created => {
      this.tasks.push(created);
      this.newTask = {};
    });
  }
  handleChange(task: Task): void {
    this.tasksService.put(task).subscribe();
  }
  archiveCompleted(): void {
    const toArchive = this.tasks.filter(t => t.completed && !t.archived);

    if (!toArchive.length) {
      return;
    }

    const requests = toArchive.map(t => {
      const updated: Task = { ...t, archived: true };
      return this.tasksService.put(updated);
    });

    forkJoin(requests).subscribe({
      next: () => {
        this.ngOnInit();
      }
    });
  }

}
