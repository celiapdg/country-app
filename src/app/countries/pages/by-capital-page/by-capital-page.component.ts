import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent {

  public countries: Country[] = [];
  public isLoading: boolean = false;

  constructor(private countriesServices: CountriesService) { }

  searchByCapital(term: string) {

    if (term === '') {
      this.countries = [];
      return;
    };

    this.isLoading = true;

    this.countriesServices.searchCapital(term)
      .subscribe(countries => {
        console.log(countries)
        this.countries = countries;
        this.isLoading = false;
      });
  }

}
