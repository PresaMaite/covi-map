import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay, map } from 'rxjs';
import { Country, ReceivedCountry } from '../../models/country.model';
import { Global, ReceivedGlobal } from '../../models/global.model';
import { Countries, ReceivedCountries } from '../../models/countries.model';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {
  URL = "https://disease.sh/v3/covid-19/"

  constructor(private http: HttpClient) { }

  /**
   * Devuelve los casos del país
   * @param country 
   * @returns 
   */
  getCasesByCountry(country: string) {
    let URL = `${this.URL}countries/${country}`;
    return (
      this.http.get< ReceivedCountry >(URL).pipe(
        delay(3000),
        map((country) => {
          return {
            cases: country.cases,
            todayCases: country.todayCases,
            deaths: country.deaths,
            todayDeaths: country.todayDeaths,
            recovered: country.recovered,
            active: country.active
          } as Country;
        }),
      )
    )
  }

  /**
   * Devuelve los casos del mundo
   * @returns 
   */
  getGlobalCases() {
    let URL = `${this.URL}all`;
    return (
      this.http.get< ReceivedGlobal >(URL).pipe(
        delay(3000),
        map((global) => {
          return {
            "cases": global.cases,
            "deaths": global.deaths,
            "recovered": global.recovered,
            "active": global.active
          } as Global;
        })
      )
    )
  }


  getAllCountries() {
    let URL = `${this.URL}countries`;
    return (
      this.http.get< ReceivedCountries[] >(URL).pipe(
        delay(3000),
        map((allCountries) => {
          let arrayCountries: Countries[] = allCountries.map((country) => {
            return ( {
              "country": country.country,
              "countryInfo": {
                "flag": country.countryInfo.flag,
              }, 
              "cases": country.cases,
              "todayCases": country.todayCases,
              "deaths": country.deaths,
              "todayDeaths": country.todayDeaths,
              "recovered": country.recovered,
              "active": country.active,
            } as Countries)
          })

          return (
            arrayCountries
          )
          
        })
      )
    )
  }




}
