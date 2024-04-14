import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { FetchDataService } from '../../services/fetch-data/fetch-data.service';
import { Country } from '../../models/country.model';
import { Global } from '../../models/global.model';
import { SearchInputComponent } from './components/search-input/search-input.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CardComponent, SearchInputComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  cases?: Country;
  globalCases?: Global;

  constructor (private fetchData: FetchDataService) {}

  ngOnInit(): void {
    this.getCases();
  }


  getCases() {

    this.fetchData.getCasesByCountry("Spain")
      .subscribe((cases) => {
        this.cases = cases;
      })

    this.fetchData.getGlobalCases()
      .subscribe((globalCases) => {
        this.globalCases = globalCases;
      })

  }

}
