import { Component } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { Http } from '@angular/http';
import { IAppState } from '../app/store';
import { Subscription } from 'rxjs/Subscription';
import { AppServiceService } from '../app/app-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private subscription: Subscription = new Subscription()
  title = 'app';
  searchResults: Array<any>;
  constructor(private http: Http, private appService: AppServiceService,
    private ngRedux: NgRedux<IAppState>) { 
  const sub = this.ngRedux.select(state => {
    return state.searchResults;
  }).subscribe(result =>{
    this.searchResults = result;
    console.log(this.searchResults);
  })

  this.subscription.add(sub);
  this.appService.loadResults();
}

}
