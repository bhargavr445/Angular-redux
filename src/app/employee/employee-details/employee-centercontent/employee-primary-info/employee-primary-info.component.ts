import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgRedux } from '@angular-redux/store';
import { AppState } from '../../../../store';

@Component({
  selector: 'app-employee-primary-info',
  templateUrl: './employee-primary-info.component.html',
  styleUrls: ['./employee-primary-info.component.scss']
})
export class EmployeePrimaryInfoComponent implements OnInit {
  employeeDetails: any;
  constructor(private route: ActivatedRoute, 
              private ngRedux: NgRedux<AppState> ){

  }
  ngOnInit() {
   this.ngRedux.select(state => {
      return state.employee.detailFormObj
    }).subscribe(result => {
      this.employeeDetails = result;
      console.log(this.employeeDetails);
    });
  }

}
