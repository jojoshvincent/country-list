import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCountryComponent } from './project-components/add-country/add-country.component';
import { EditCountryComponent } from './project-components/edit-country/edit-country.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListCountryComponent } from './project-components/list-country/list-country.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCountryComponent,
    EditCountryComponent,
    ListCountryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
