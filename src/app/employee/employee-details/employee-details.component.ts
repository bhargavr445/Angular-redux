import { Component, OnInit } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { AppState } from '../../store';
import { EmployeeContact } from '../../employee/models/EmpAddressModel';
import { Employee } from '../../employee/models/Employee';
import { DETAIL_DB_DATA } from '../../actions';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {

  updatedAddressList: Array<EmployeeContact>;
  empDetails: Employee;
  constructor(private ngRedux: NgRedux<AppState>) { }

  ngOnInit() {
    this.ngRedux.select(state => {
      return state.empAddress.addressList
    }).subscribe(result => {
      this.updatedAddressList = result;
      console.log(this.updatedAddressList);
    });
    // this.ngRedux.select(state => {
    //   return state.employee.dbObj
    // }).subscribe(result => {
    //   this.empDetails = result;
    //   console.log(this.empDetails);

    // })
  }

  saveForm() {
alert('Hello');
  //  this.empDetails.address = this.updatedAddressList;

  //  this.ngRedux.dispatch({ type: DETAIL_DB_DATA, dbObj: this.empDetails });

  }
}
