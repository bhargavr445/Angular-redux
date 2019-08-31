import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeePrimaryInfoRoutingModule } from './employee-primary-info-routing.module';
import { EmployeePrimaryInfoComponent } from './employee-primary-info.component';
import { EmployeeDetailResolverService } from '../../../services/employee-detail-resolver.service';


@NgModule({
  declarations: [EmployeePrimaryInfoComponent],
  imports: [
    CommonModule,
    EmployeePrimaryInfoRoutingModule
  ],
  providers:[
    EmployeeDetailResolverService
  ]
})
export class EmployeePrimaryInfoModule { }
