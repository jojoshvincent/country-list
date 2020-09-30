import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-country',
  templateUrl: './edit-country.component.html',
  styleUrls: ['./edit-country.component.scss']
})
export class EditCountryComponent implements OnInit {

  editCountryForm: FormGroup;
  itemId: any;
  editData: any;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private http: HttpClient
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      if(param.id){
        this.itemId = param.id;
      }
    })
    this.getData(this.itemId);
  }

  update(){
    const data = {
      code: this.editCountryForm.value.country_code,
      name: this.editCountryForm.value.country_name,
      alpha2Code: this.editCountryForm.value.alpha_code2,
      alpha3Code: this.editCountryForm.value.alpha_code3
    }
    this.httpRequest(data, this.itemId);
  }

  httpRequest(body, id){
    const url = 'https://trn.api.alqasim.net/country/' + id;
    this.http.put(url, body).subscribe(result => {
      console.log('Api response put', result);
    }, error => {
      console.log('Api response error', error);
    });
  }

  getData(id){
    const url = 'https://trn.api.alqasim.net/country/' + id;
    this.http.get(url).subscribe(result => {
      this.editData = result;
      this.editCountryForm = this.formBuilder.group({
        country_code: [this.editData.code, Validators.required],
        country_name: [this.editData.name, Validators.required],
        alpha_code2: [this.editData.alpha2Code, Validators.required],
        alpha_code3: [this.editData.alpha3Code, Validators.required]
      })
    }, error => {
      console.log('Api response error', error);
    })
  }

}
