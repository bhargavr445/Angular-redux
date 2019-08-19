import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule }             from "@angular/router";
import { rootReducer, INITIAL_STATE } from './store';
import { AppServiceService } from '../app/app-service.service';
import { LandingModule } from '../app/landing/landing.module';
import { LandingComponent } from '../app/landing/landing.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    

  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule,
    HttpModule,
    FormsModule,
    NgReduxModule,
    AppRoutingModule,
    LandingModule
  ],
  providers: [AppServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<{}>) {
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
}
