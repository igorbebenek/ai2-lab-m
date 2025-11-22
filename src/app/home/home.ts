import { Component } from '@angular/core';
import { HousingLocation } from '../housing-location/housing-location';
import { Housing } from '../housing';
import { HousingLocationInfo } from '../housinglocation';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HousingLocation],
  template: `
    <section>
      <form>
        <input
          #filter
          type="text"
          placeholder="Filter by city"
          (input)="filterResults(filter.value)"
        />
        <button class="primary" type="button" (click)="filterResults(filter.value)">
          Search
        </button>
      </form>
    </section>

    <section class="results">
      @for (housingLocation of filteredLocationList; track housingLocation.id) {
        <app-housing-location
          [housingLocation]="housingLocation"
        ></app-housing-location>
      }
    </section>
  `,
  styleUrl: './home.css',
})
export class Home {
  housingLocationList: HousingLocationInfo[] = [];
  filteredLocationList: HousingLocationInfo[] = [];

  constructor(private housingService: Housing) {
    this.housingService.getAllHousingLocations().then((locations) => {
      this.housingLocationList = locations;
      this.filteredLocationList = locations;
    });
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }

    const lower = text.toLowerCase();
    this.filteredLocationList = this.housingLocationList.filter((location) =>
      location.city.toLowerCase().includes(lower)
    );
  }
}
