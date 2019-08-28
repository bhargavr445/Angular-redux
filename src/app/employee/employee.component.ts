import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  constructor(private route: ActivatedRoute) { 

  }

  ngOnInit() {
    this.route.data.subscribe(data => console.log('Data :', data['employee']));
    this.route.data.subscribe(data => console.log('Data :', data['empList']));
    //console.log(this.route.snapshot.data['employee']);
  }

}
