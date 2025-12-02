import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { Random } from '../random';

@Component({
  selector: 'app-random',
  standalone: true,
  imports: [NgIf],
  templateUrl: './random.html',
  styleUrl: './random.css'
})
export class RandomComponent {
  @Input() max = 10;

  value: number | null = null;

  constructor(private randomService: Random) {}

  draw(): void {
    this.value = this.randomService.randomNumber(this.max);
  }

  isLowerHalf(): boolean {
    return this.value !== null && this.value < 0.5 * this.max;
  }

  isUpperHalf(): boolean {
    return this.value !== null && this.value >= 0.5 * this.max;
  }
}
