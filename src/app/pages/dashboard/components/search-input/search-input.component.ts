import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../../../services/countries/countries.service';

@Component({
  selector: 'app-search-input',
  standalone: true,
  imports: [],
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.css'
})
export class SearchInputComponent {
  toggle = false;
  country = "Spain";
  constructor(public countries: CountriesService) {}

  toggleMenu() {
    this.toggle = !this.toggle;
  }

  selectedCountry(country: string) {
    this.country = country;
    this.toggle = false;
  }


}
