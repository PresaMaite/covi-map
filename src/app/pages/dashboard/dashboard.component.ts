import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { FetchDataService } from '../../services/fetch-data.service';
import { Country } from '../../models/country.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  cases?: any;
  globalCases?: any;

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
