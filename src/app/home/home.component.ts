import { Component, OnInit } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { AppState } from '../store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  resultsList: Array<any>;
  constructor(private ngRedux: NgRedux<AppState>) {
    this.ngRedux.select(
      state => {
        return state.landing.searchResults;
      }
    ).subscribe(result =>{
      this.resultsList = result;
      console.log(this.resultsList);
    })
    // this.ngRedux.select(state => {
    //   return state.appLanding.pageLoad;
    // }).subscribe(result =>{
    //   this.load_page = result;
    //   console.log(this.load_page);
    // })
   }

  ngOnInit() {
  }

}
