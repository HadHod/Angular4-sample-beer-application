import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BeerDetailsComponent } from './beer-details/beer-details.component';


const routes: Routes = [
  {
    path: 'details/:beerId',
    component: BeerDetailsComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
