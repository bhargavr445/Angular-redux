import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { rootReducer, INITIAL_STATE } from './store';
import { AppServiceService } from '../app/app-service.service';
import { LandingModule } from '../app/landing/landing.module';
import { LandingComponent } from '../app/landing/landing.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './shared.module';
import { environment } from '../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LandingModule,
    ReactiveFormsModule,
    SharedModule,
    // !environment.production ? StoreDevtoolsModule.instrument() : []
  //  StoreModule.forRoot({rootReducer}),
    //StoreRouterConnectingModule,
    //StoreRouterConnectingModule.forRoot(),
    // StoreDevtoolsModule.instrument({
    //   maxAge: 25 //  Retains last 25 states
    // }),
   // !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [AppServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<{}>) {
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
}
