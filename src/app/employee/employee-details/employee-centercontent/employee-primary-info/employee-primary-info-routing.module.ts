import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeePrimaryInfoComponent } from '../employee-primary-info/employee-primary-info.component';

const routes: Routes = [
  {path: '', component: EmployeePrimaryInfoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeePrimaryInfoRoutingModule { }
