import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AddCountryComponent } from './project-components/add-country/add-country.component';
import { EditCountryComponent } from './project-components/edit-country/edit-country.component';
import { ListCountryComponent } from './project-components/list-country/list-country.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'countries',
    pathMatch: 'full'
  },
  {
    path: 'countries',
    component: ListCountryComponent
  },
  {
    path: 'create',
    component: AddCountryComponent
  },
  {
    path: 'edit/:id',
    component: EditCountryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
