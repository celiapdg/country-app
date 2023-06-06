import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent implements OnInit {

  public countries: Country[] = [];
  public isLoading: boolean = false;
  public initialValue: string = '';

  constructor(private countriesServices: CountriesService) { }

  ngOnInit(): void {
    this.countries = this.countriesServices.cacheStore.byCapital.countries;
    this.initialValue = this.countriesServices.cacheStore.byCapital.term;
  }

  searchByCapital(term: string): void {

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
