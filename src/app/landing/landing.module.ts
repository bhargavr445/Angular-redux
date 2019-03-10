import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppLandingPage,ApplandingReducer,APPLANDING_INITIAL_STATE } from '../landing/store';
import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from '../landing/landing.component';
import { NgRedux } from '@angular-redux/store';

@NgModule({
  declarations: [
    LandingComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule
  ]
})
export class LandingModule {
  // constructor(ngRedux: NgRedux<AppLandingPage>) {
  //   ngRedux.configureStore(ApplandingReducer, APPLANDING_INITIAL_STATE);
  // }
 }
