import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonLs } from '../person-ls';
import { Person } from '../person';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-details',
  standalone: true,
  templateUrl: './details.html',
  styleUrl: './details.css',
  imports: [NgIf]
})
export class DetailsComponent implements OnInit {

  id!: number;
  person?: Person;

  constructor(
    private route: ActivatedRoute,
    private personLs: PersonLs
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      this.id = idParam !== null ? Number(idParam) : 0;
      this.person = this.personLs.getPerson(this.id);
    });
  }
}
