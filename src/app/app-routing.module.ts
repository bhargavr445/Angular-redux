import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Router } from '@angular/router';
import {HomeComponent} from '../app/home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeResolverService } from './employee-resolver.service';
import { EmployeeListResolverService } from './employee-list-resolver.service';
//import { Component } from '@angular/core/src/metadata/directives';

const appRoutes:Routes=[
    {path: '', redirectTo:'landing', pathMatch:'full'},
    {path: 'home', loadChildren:'./home/home.module#HomeModule'},
    {path: 'employee', component: EmployeeComponent, 
                       resolve: {employee: EmployeeResolverService
                        , 
                                 empList: EmployeeListResolverService
                              }
                                }
//   { path:'employee',      
//     loadChildren:'app/modules/employee.module#EmployeeModule',    
//     data: { preload: true }
//   },
//   { path:'student',        
//     loadChildren:'app/modules/student.module#StudentModule',      
//     data: { preload: true }
//   },
//   { path:'profile',        
//     loadChildren:'app/modules/profile.module#ProfileModule',      
//     data: { preload: true }
//   }
];

// git commit -m "Some message"

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes,//add AppPreloadingStrategy to customize preloading
    )//PreloadAllModules
  ],
  exports:[RouterModule],
  declarations: [],
  providers:[]
})
export class AppRoutingModule { }

