import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  employee: any;
  empList: Array<any>;

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.employee = data['employee'];
      console.log('Data :', data['employee']);
    });

    this.route.data.subscribe(data => {
      this.empList = data['empList'];
      console.log('Data :', data['empList']);
    }
    );
  }

}
