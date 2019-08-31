import { Component, OnInit } from '@angular/core';
import { AppState } from '../../../store';
import { NgRedux } from '@angular-redux/store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-centercontent',
  templateUrl: './employee-centercontent.component.html',
  styleUrls: ['./employee-centercontent.component.scss']
})
export class EmployeeCentercontentComponent implements OnInit {

  empDetails: any;
  accPanels: any = [
    { id: 'infoPanel', title: 'Emp Info Panel' },
    { id: 'contactPanel', title: 'Emp Contact Panel' }
  ]
  constructor(private ngRedux: NgRedux<AppState>, private router: Router) { }

  ngOnInit() {
    this.ngRedux.select(state => {
      return state.employee.detailFormObj
    }).subscribe(data => {
      this.empDetails = data;
      console.log(this.empDetails);
    })
  }

  beforeChange(event){
      this.router.navigate(['employee/emp-details/'+event.panelId]);
  }

}
