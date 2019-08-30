import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-centercontent',
  templateUrl: './employee-centercontent.component.html',
  styleUrls: ['./employee-centercontent.component.scss']
})
export class EmployeeCentercontentComponent implements OnInit {

  accPanels:any = [
    {id:'infoPanel', title:'Emp Info Panel'},
    {id:'contactPanel', title:'Emp Contact Panel'}
  ]
  constructor() { }

  ngOnInit() {
  }

}