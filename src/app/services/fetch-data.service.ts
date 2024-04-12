import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../models/country.model';
import { Global } from '../models/global.model';

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
      this.http.get< Country >(URL)
    )
  }

  /**
   * Devuelve los casos del mundo
   * @returns 
   */
  getGlobalCases() {
    let URL = `${this.URL}all`;
    return (
      this.http.get< Global >(URL)
    )
  }
}
