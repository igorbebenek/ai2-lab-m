import { Component, OnInit } from '@angular/core';
import { PersonLs } from '../person-ls';
import { Person } from '../person';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  templateUrl: './list.html',
  styleUrl: './list.css',
  imports: [NgFor, RouterLink]
})
export class ListComponent implements OnInit {

  people: Person[] = [];

  constructor(private personLs: PersonLs) {}

  ngOnInit(): void {
    this.reload();
  }

  private reload(): void {
    this.people = this.personLs.getAll();
  }

  delete(index: number): void {
    this.personLs.deletePerson(index);
    this.reload();
  }
}
