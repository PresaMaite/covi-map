import { Component, OnInit } from '@angular/core';
import { FetchDataService } from '../../services/fetch-data/fetch-data.service';

@Component({
  selector: 'app-top10',
  standalone: true,
  imports: [],
  templateUrl: './top10.component.html',
  styleUrl: './top10.component.css'
})
export class Top10Component implements OnInit {
  topCases: any [] = [];
  topDeaths: any[] = [];
  topActives: any[] = [];
  topRecovered: any[] = [];
  topTodayDeaths: any[] = [];
  topTodayCases: any[] = [];


  constructor(private fetchData: FetchDataService) {}


  ngOnInit(): void {
    this.getCountryCases();
    this.sortArrays;
  }

  getCountryCases() {
    this.fetchData.getAllCountries()
      .subscribe((countries) => {
        countries.map((country) => {
          let cardCases: any = {
            name: country.country,
            flag: country.countryInfo.flag,
            value: country.cases
          }
          let cardDeaths: any = {
            name: country.country,
            flag: country.countryInfo.flag,
            value: country.deaths
          }
          let cardActives: any = {
            name: country.country,
            flag: country.countryInfo.flag,
            value: country.active
          }
          let cardRecovered: any = {
            name: country.country,
            flag: country.countryInfo.flag,
            value: country.recovered
          }
          let cardTodayDeaths: any = {
            name: country.country,
            flag: country.countryInfo.flag,
            value: country.todayDeaths
          }
          let cardTodayCases: any = {
            name: country.country,
            flag: country.countryInfo.flag,
            value: country.todayCases
          }

          this.topCases.push(cardCases);
          this.topDeaths.push(cardDeaths);
          this.topActives.push(cardActives);
          this.topRecovered.push(cardRecovered);
          this.topTodayDeaths.push(cardTodayDeaths);
          this.topTodayCases.push(cardTodayCases);

        })

      })
  }

  sortArrays() {
    this.topCases = this.topCases.sort((a, b) => a.value - b.value);
    this.topDeaths = this.topDeaths.sort((a, b) => a.value - b.value);
    this.topActives = this.topActives.sort((a, b) => a.value - b.value);
    this.topRecovered = this.topRecovered.sort((a, b) => a.value - b.value);
    this.topTodayDeaths = this.topTodayDeaths.sort((a, b) => a.value - b.value);
    this.topTodayCases = this.topTodayCases.sort((a, b) => a.value - b.value);
  }

}
