import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilterResultsComponent } from './filter-results.component';

const routes: Routes = [
  {path: '', component: FilterResultsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilterResultsRoutingModule { }
