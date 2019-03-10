import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import { NgRedux } from '@angular-redux/store';
//import { IAppState } from '../app/store';
import { Subscription } from 'rxjs/Subscription';
import { SEARCH_RESULTS, PAGE_LOAD, LANDING_SEARCH_RESULTS } from '../app/actions';
import { AppState } from '../app/store';

@Injectable()
export class AppServiceService {
  private subscription: Subscription = new Subscription
  searchResults: Array<any>;
  constructor(private http: Http,
  private ngRedux: NgRedux<AppState>
) { 
   
    const sub = this.ngRedux.select(state => {
        return state.landing.searchResults;
      }).subscribe(result =>{
        this.searchResults = result;
        console.log(this.searchResults);
      })

      this.subscription.add(sub);
   }
  loadResults(){
  this.http.get("http://dummy.restapiexample.com/api/v1/employees").subscribe(status => {

  this.ngRedux.dispatch({type: LANDING_SEARCH_RESULTS, searchResults: status.json()});
  console.log(status.json());
  this.ngRedux.dispatch({type: PAGE_LOAD, pageLoad: false})
})
  }
}
