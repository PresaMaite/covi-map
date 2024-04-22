import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CountriesService } from '../../../../services/countries/countries.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-search-input',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.css'
})
export class SearchInputComponent implements OnInit {
  @Output() onSelected = new EventEmitter< string >();
  @Input() 
  public set countryId(v : any) {
    this.country = v;
  }

  public get countryId() : any {
    return this.country;
  }

  toggle = false;
  country = "Spain";
  countryNames: any[] = [];

  constructor(public countries: CountriesService) {}

  ngOnInit(): void {
    this.countries.getCountriesName()
      .subscribe((names) => {
        this.countryNames = names;
      })
  }

  toggleMenu() {
    this.toggle = !this.toggle;
  }

  selectedCountry(country: any) {
    this.country = country.countryName;
    this.toggle = false;

    this.onSelected.emit(country.id);
  }
}
