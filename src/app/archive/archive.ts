import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Task } from '../task';
import { Tasks as TasksService } from '../tasks';

@Component({
  selector: 'app-archive',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './archive.html',
  styleUrl: './archive.css',
})
export class Archive implements OnInit {

  tasks: Task[] = [];

  constructor(private tasksService: TasksService) {}

  ngOnInit(): void {
    this.loadArchived();
  }

  private loadArchived(): void {
    this.tasksService.index(true).subscribe(tasks => {
      this.tasks = tasks;
    });
  }

  delete(task: Task): void {
    this.tasksService.delete(task).subscribe(() => {
      this.tasks = this.tasks.filter(t => t.id !== task.id);
    });
  }
}
