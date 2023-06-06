import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';
import { Region } from '../../interfaces/region.type';


@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent implements OnInit {

  public countries: Country[] = [];
  public isLoading: boolean = false;
  public selectedRegion?: Region;

  public regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']

  constructor(private countriesServices: CountriesService) { }

  ngOnInit(): void {
    this.countries = this.countriesServices.cacheStore.byRegion.countries;
    this.selectedRegion = this.countriesServices.cacheStore.byRegion.region;
  }

  searchByRegion(region: Region): void {

    this.selectedRegion = region;

    this.isLoading = true;

    this.countriesServices.searchRegion(region).subscribe(countries => {
      this.countries = countries;
      this.isLoading = false;

    })
  }

}
