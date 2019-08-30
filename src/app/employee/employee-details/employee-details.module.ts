import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeDetailsRoutingModule } from './employee-details-routing.module';
import { EmployeeDetailsComponent } from './employee-details.component';
import { EmployeeCentercontentComponent } from './employee-centercontent/employee-centercontent.component';
import { EmployeeLeftmenuComponent } from './employee-leftmenu/employee-leftmenu.component';
import { SharedModule } from '../../shared.module';

@NgModule({
  declarations: [EmployeeDetailsComponent, EmployeeCentercontentComponent, EmployeeLeftmenuComponent],
  imports: [
    CommonModule,
    EmployeeDetailsRoutingModule,
    SharedModule
  ]
})
export class EmployeeDetailsModule { }
