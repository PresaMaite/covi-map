import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { FetchDataService } from '../../services/fetch-data/fetch-data.service';
import { Country } from '../../models/country.model';
import { Global } from '../../models/global.model';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { WorldChartComponent } from './components/world-chart/world-chart.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CardComponent, SearchInputComponent, WorldChartComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  cases?: Country;
  globalCases?: Global;
  country = "Spain";

  constructor (private fetchData: FetchDataService) {}

  ngOnInit(): void {
    this.getCases();
  }

  changeCountry(country: string) {
    this.cases = undefined;
    this.country = country;

    this.fetchData.getCasesByCountry(this.country)
    .subscribe((cases) => {
      this.cases = cases;
    })
  }


  getCases() {

    this.fetchData.getCasesByCountry(this.country)
      .subscribe((cases) => {
        this.cases = cases;
      })

    this.fetchData.getGlobalCases()
      .subscribe((globalCases) => {
        this.globalCases = globalCases;
      })

  }

}
