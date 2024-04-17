import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Feature, topojson } from 'chartjs-chart-geo';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  URL = 'https://unpkg.com/world-atlas/countries-50m.json';

  constructor(private http: HttpClient) { }

  /**
   * Recupera los datos de los países
   * @returns Devuelve los datos de los países y su path de dibujo en la gráfica
   */
  getCountriesChart() {

    return (
      this.http.get(this.URL)
        .pipe(map((data: any) => {

          const countriesFeat: Feature = topojson.feature(data as any, data.objects.countries as any);
          const countries = countriesFeat.features;

          return (
            countries
          )

        }))
    )
  }

  /**
   * Recupera los datos de los países
   * @returns Devuelve un array con los nombres de los países y su respectivo ID
   */
  getCountriesName() {
    return (
      this.http.get(this.URL)
        .pipe(map((data: any) => {
          const countriesFeat: Feature = topojson.feature(data as any, data.objects.countries as any);
          const countries = countriesFeat.features;

          let namesArray: any[] = [];

          countries.map((country: any) => {
            let countryName = country.properties.name;
            namesArray.push({countryName, id: country.id});
          });

          namesArray = namesArray.sort((a, b) =>  a.countryName.localeCompare(b.countryName));

          return (namesArray);

        }))

    )
    
  }
}
