import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeDetailsComponent } from '../employee-details/employee-details.component';


const routes: Routes = [
  {path: '', component: EmployeeDetailsComponent, children:[
    {path: 'employeeInfo', 
            loadChildren:'./employee-centercontent/employee-primary-info/employee-primary-info.module#EmployeePrimaryInfoModule'},
    {path: 'employeeInfo', 
            loadChildren:'./employee-centercontent/employee-contact-info/employee-contact-info.module#EmployeeContactInfoModule'}

  ]}
];

  


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeDetailsRoutingModule { }
