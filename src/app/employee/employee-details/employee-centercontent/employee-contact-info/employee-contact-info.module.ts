import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeContactInfoRoutingModule } from './employee-contact-info-routing.module';
import { EmployeeContactInfoComponent } from './employee-contact-info.component';
import { SharedModule } from '../../../../shared.module';

@NgModule({
  declarations: [EmployeeContactInfoComponent],
  imports: [
    CommonModule,
    EmployeeContactInfoRoutingModule,
    SharedModule
  ]
})
export class EmployeeContactInfoModule { }
