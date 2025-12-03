// src/app/person-ls.ts
import { Injectable } from '@angular/core';
import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
export class PersonLs {
  readonly KEY = 'stored-people-data';

  constructor() {}

  public getAll(): Person[] {
    const raw = localStorage.getItem(this.KEY);
    if (!raw) {
      return [];
    }
    try {
      return JSON.parse(raw) as Person[];
    } catch {
      return [];
    }
  }

  public getPerson(index: number): Person {
    const people = this.getAll();
    return people[index];
  }

  public addPerson(person: Person): void {
    const people = this.getAll();
    people.push(person);
    localStorage.setItem(this.KEY, JSON.stringify(people));
  }

  public deletePerson(index: number): void {
    const people = this.getAll();
    people.splice(index, 1);
    localStorage.setItem(this.KEY, JSON.stringify(people));
  }
}
