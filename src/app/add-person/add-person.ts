import { Component } from '@angular/core';
import { Person } from '../person';
import { PersonLs } from '../person-ls';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-person',
  standalone: true,
  templateUrl: './add-person.html',
  styleUrl: './add-person.css',
  imports: [FormsModule]
})
export class AddPersonComponent {

  person: Person = {
    address: {}
  };

  constructor(
    private personLs: PersonLs,
    private router: Router
  ) {}

  save(): void {
    this.personLs.addPerson(this.person);

    this.router.navigate(['/list']);
  }
}
