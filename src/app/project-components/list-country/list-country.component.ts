import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-list-country',
  templateUrl: './list-country.component.html',
  styleUrls: ['./list-country.component.scss']
})
export class ListCountryComponent implements OnInit {

  countryList: any;
  myControl = new FormControl();
  filteredResults: Observable<Object[]>;

  constructor(
    private http: HttpClient,
    private route: Router
    ) { }

  ngOnInit(): void {
    this.httpRequest();
  }

  searchFilter(){
    this.filteredResults = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)) )
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.countryList.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }

  httpRequest(){
    const url = '';
    this.http.get(url).subscribe(result => {
      console.log('Api response get countries', result);
      this.countryList = result;
      this.searchFilter();
    }, error => {
      console.log('Api response error', error);
    })
  }

  addCountry(){
    this.route.navigate(['/create']);
  }

  editData(item){
    debugger
    this.route.navigate(['/edit', item.code]);
  }

  deleteData(item){
    const url = 'https://trn.api.alqasim.net/country/' + item.code;
    this.http.delete(url).subscribe(result => {
      console.log('Api response delete', result);
    }, error => {
      console.log('Api response error', error);
    });
  }

}
