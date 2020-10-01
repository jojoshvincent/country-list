import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-country',
  templateUrl: './add-country.component.html',
  styleUrls: ['./add-country.component.scss']
})
export class AddCountryComponent implements OnInit {

  addCountryForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private route: Router
    ) { }

  ngOnInit(): void {
    this.addCountryForm = this.formBuilder.group({
      country_name: ['', Validators.required],
      alpha_code2: ['', Validators.required],
      alpha_code3: ['', Validators.required]
    })
  }

  create(){
    const data = {
      name: this.addCountryForm.value.country_name,
      alpha2Code: this.addCountryForm.value.alpha_code2,
      alpha3Code: this.addCountryForm.value.alpha_code3
    }
    const postUrl = ''
    this.httpRequest(postUrl, data);
  }

  view(){
    this.route.navigate(['/countries']);
  }

  httpRequest(url, body){
    this.http.post(url, body).subscribe(result => {
      console.log('Api response for create', result);
    }, error => {
      console.log('Api response error for create', error);
    })
  }

}
