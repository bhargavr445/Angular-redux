import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-employee-contact-info',
  templateUrl: './employee-contact-info.component.html',
  styleUrls: ['./employee-contact-info.component.scss']
})
export class EmployeeContactInfoComponent implements OnInit, OnDestroy {
  

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    console.log('1-Destroyed');
  }

}
