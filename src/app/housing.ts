import { Injectable } from '@angular/core';
import { HousingLocationInfo } from './housinglocation';

@Injectable({
  providedIn: 'root',
})
export class Housing {
  private readonly url = 'http://localhost:3000/locations';

  async getAllHousingLocations(): Promise<HousingLocationInfo[]> {
    const response = await fetch(this.url);
    return (await response.json()) ?? [];
  }

  async getHousingLocationById(id: number): Promise<HousingLocationInfo | undefined> {
    const response = await fetch(`${this.url}/${id}`);
    return (await response.json()) ?? undefined;
  }
}
