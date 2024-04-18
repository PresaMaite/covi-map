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
  country = "724";
  countryName = "Spain";

  constructor (private fetchData: FetchDataService) {}

  ngOnInit(): void {
    this.getCountryCases();
    this.getAllCases();
  }

  
  /**
   * Actualiza el ID y solicita nuevos datos para pintar
   * @param country Recibe el ID del país seleccionado en el search
   */
  getNewCountry(country: string) {
    this.cases = undefined;
    this.country = country;

    this.getCountryCases();
  }


  /**
   * Fetch de los casos del país seleccionado
   */
  getCountryCases() {

    this.fetchData.getCasesByCountry(this.country)
      .subscribe((cases) => {
        this.cases = cases;
      })
  }


  /**
   * Fetch totales de todos los casos del mundo
   */
  getAllCases() {

    this.fetchData.getGlobalCases()
      .subscribe((globalCases) => {
        this.globalCases = globalCases;
      })
  }


  /**
   * Actualiza el ID y solicita nuevos datos para pintar
   * @param nameID Recibe un objeto con el ID y el nombre del país seleccionado en el chart
   */
  getChartID(nameID: any) {
    this.country = nameID.ID;
    this.countryName = nameID.name;

    this.getNewCountry(nameID.ID);
  }

}
