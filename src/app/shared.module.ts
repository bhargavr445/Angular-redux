import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { RouterModule }             from "@angular/router";
import { SubmitDirective } from './submit.directive';
import { StoreModule } from '@ngrx/store';
import { rootReducer, INITIAL_STATE } from './store';

@NgModule({
  declarations: [SubmitDirective],
  imports: [
    HttpModule,
    NgbModule,
    FormsModule,
    NgReduxModule,
    RouterModule,
    StoreModule.forRoot({rootReducer}),
  ]
})
export class SharedModule { 
  constructor(ngRedux: NgRedux<{}>) {
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
}
