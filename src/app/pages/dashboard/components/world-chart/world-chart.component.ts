import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Chart, CategoryScale } from 'chart.js';
import { ChoroplethController, ColorScale, Feature, GeoFeature, ProjectionScale, topojson } from 'chartjs-chart-geo';
import 'chartjs-chart-geo';

import { CountriesService } from '../../../../services/countries/countries.service';


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
 
  @Input() 
  public set countryId(id : string) {
    this._countryId = id;
    
    this.chart?.destroy();
    if(this.countries) {
      this.getCountries();
    }
  }
  public get countryId() : string {
    return this._countryId;
  }

  @Output() onClickID = new EventEmitter();
  
  private _countryId: any;
 
  countries: any;
  chart?: Chart;

  constructor(public countriesFetch: CountriesService) {}

  ngOnInit(): void {
    this.countriesFetch.getCountriesChart()
      .subscribe((countries) => {
        this.countries = countries;
        this.getCountries();
      })
  }

  getCountries() {
    let countries = this.countries;
    let data = countries.map((d: any) => ({feature: d, value: d.id === this.countryId ? 1 : 0}))

    this.chart = new Chart("canvas", {
      type: 'choropleth',
      data: {
        labels: countries.map((d: any) => d.properties.name),
        datasets: [{
          label: 'Countries',
          data: data,
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
        onClick: (e: any, element) => {
          if(element[0]) {
            let nameID: any = element[0].element;

            this.onClickID.emit({ID: nameID.feature.id, name: nameID.feature.properties.name});
          }
        },
        scales: {
          projection: {
            axis: 'x',
            projection: 'equalEarth'
          },
          color: {
            display: false,
            axis: "x"
          },
        }
      }
    });
  }

}
