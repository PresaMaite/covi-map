import { Component, OnInit } from '@angular/core';
import { Chart, CategoryScale } from 'chart.js';
import { ChoroplethController, ColorScale, Feature, GeoFeature, ProjectionScale, topojson } from 'chartjs-chart-geo';
import 'chartjs-chart-geo';
import { map } from 'rxjs';



Chart.register(CategoryScale);
Chart.register(ChoroplethController);
Chart.register(ProjectionScale);
Chart.register(ColorScale);
Chart.register(GeoFeature);


@Component({
  selector: 'app-world-chart',
  standalone: true,
  imports: [],
  templateUrl: './world-chart.component.html',
  styleUrl: './world-chart.component.css'
})
export class WorldChartComponent implements OnInit {
  namesArray: string[] = [];

  constructor() {}

  ngOnInit(): void {
    this.getCountries();
  }

  getCountries() {
    fetch('https://unpkg.com/world-atlas/countries-50m.json').then((r) => r.json()).then((data) => {
      const countriesFeat: Feature = topojson.feature(data as any, data.objects.countries as any);
      const countries = countriesFeat.features;
      console.log(countries);

      countries.map((country: any) => {
        let countryName = country.properties.name;
        this.namesArray.push(countryName);
      })

      console.log(this.namesArray);

      const chart = new Chart("canvas", {
        type: 'choropleth',
        data: {
          labels: countries.map((d: any) => d.properties.name),
          datasets: [{
            label: 'Countries',
            data: countries.map((d: any) => ({feature: d, value: Math.random()})),
          }]
        },
        options: {
          showOutline: true,
          showGraticule: true,
          plugins: {
            legend: {
              display: false
            },
          },
          scales: {
            projection: {
              axis: 'x',
              projection: 'equalEarth'
            }
          }
        }
      });
    })

  }

}
