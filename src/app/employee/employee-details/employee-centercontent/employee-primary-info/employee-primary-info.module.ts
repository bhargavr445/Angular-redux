import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeePrimaryInfoRoutingModule } from './employee-primary-info-routing.module';
import { EmployeePrimaryInfoComponent } from './employee-primary-info.component';

@NgModule({
  declarations: [EmployeePrimaryInfoComponent],
  imports: [
    CommonModule,
    EmployeePrimaryInfoRoutingModule
  ]
})
export class EmployeePrimaryInfoModule { }
