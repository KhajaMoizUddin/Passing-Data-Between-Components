import { Component, ViewChild, AfterViewInit } from '@angular/core';
import {Test1Component} from './test1/test1.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements AfterViewInit {

@ViewChild (Test1Component, {static: true}) test1;
getChildValue: string;
public fullName = 'Khaja Moizuddin';
public companyName = 'Legato Health Technologies';
public location = 'Hyderabad';
public childData = '';

employeeList: any[] = [
  {
    employeeId: 1001,
    employeeName: 'KhajaMoiz',
    location: 'Hyderabad'
  },
  {
    employeeId: 1002,
    companyName: 'Moizuddin',
    location: 'Bangalore'
  }
];

ngAfterViewInit() {
  this.getChildValue = this.test1.childToParentViewChild;
}




}
