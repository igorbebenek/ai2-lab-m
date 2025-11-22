import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Housing } from '../housing';
import { HousingLocationInfo } from '../housinglocation';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [NgIf],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details {
  private route = inject(ActivatedRoute);
  private housingService = inject(Housing);

  housingLocation?: HousingLocationInfo;

  constructor() {
    const housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingService
      .getHousingLocationById(housingLocationId)
      .then((location) => (this.housingLocation = location));
  }
}
