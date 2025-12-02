import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [FormsModule, NgForOf, NgIf],
  templateUrl: './list.html',
  styleUrl: './list.css'
})
export class ListComponent {
  newItem = '';
  items: string[] = [];

  addItem(): void {
    const trimmed = this.newItem.trim();
    if (!trimmed) {
      return;
    }
    this.items.push(trimmed);
    this.newItem = '';
  }

  removeItem(index: number): void {
    this.items.splice(index, 1);
  }
}
