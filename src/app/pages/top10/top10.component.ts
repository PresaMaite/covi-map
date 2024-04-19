import { Component, OnInit } from '@angular/core';
import { FetchDataService } from '../../services/fetch-data/fetch-data.service';
import { CardComponent } from '../../components/card/card.component';
import { CardCountry } from './models/card-country.models';

@Component({
  selector: 'app-top10',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './top10.component.html',
  styleUrl: './top10.component.css'
})
export class Top10Component implements OnInit {
  topCases: CardCountry[] = [];
  topDeaths: CardCountry[] = [];
  topActives: CardCountry[] = [];
  topRecovered: CardCountry[] = [];

  skeleton: any[] = new Array(10);


  constructor(private fetchData: FetchDataService) {}


  ngOnInit(): void {
    this.getCountryCases();
  }


  /**
   * Realiza el fetch y prepara los arrays
   */
  getCountryCases() {
    this.fetchData.getAllCountries()
      .subscribe((countries) => {
        countries.map((country) => {
          let cardCases: CardCountry = {
            name: country.country,
            flag: country.countryInfo.flag,
            value: country.cases
          }
          let cardDeaths: CardCountry = {
            name: country.country,
            flag: country.countryInfo.flag,
            value: country.deaths
          }
          let cardActives: CardCountry = {
            name: country.country,
            flag: country.countryInfo.flag,
            value: country.active
          }
          let cardRecovered: CardCountry = {
            name: country.country,
            flag: country.countryInfo.flag,
            value: country.recovered
          }

          this.topCases.push(cardCases);
          this.topDeaths.push(cardDeaths);
          this.topActives.push(cardActives);
          this.topRecovered.push(cardRecovered);

          this.sortArrays();
          this.top10();

        })

      })
  }


  /**
   * Ordena los arrays de mayor a menor según los casos
   */
  sortArrays() {
    this.topCases = this.topCases.sort((a, b) => b.value - a.value);
    this.topDeaths = this.topDeaths.sort((a, b) => b.value - a.value);
    this.topActives = this.topActives.sort((a, b) => b.value - a.value);
    this.topRecovered = this.topRecovered.sort((a, b) => b.value - a.value);
  }


  /**
   * Corta y obtiene las primeras 10 posiciones
   */
  top10() {
    this.topCases = this.topCases.slice(0, 10);
    this.topDeaths = this.topDeaths.slice(0, 10);
    this.topActives = this.topActives.slice(0, 10);
    this.topRecovered = this.topRecovered.slice(0, 10);
  }

}
