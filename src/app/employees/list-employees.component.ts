import { Component, OnInit, Output } from '@angular/core';
// import Employee Model
import { Employee } from '../models/employee.model';
import { EmployeeService } from './employee.service';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  // Hard code the employee data. In a later video we will discuss
  // how to retrieve this employees data from a database table
  employees: Employee[];
  employeeToDisplay : Employee;
  private arrayIndex= 1  ; 
  dataFromChild:Employee  ;
  //= new EventEmitter();
  //@Output() displayEmployee = new EventEmitter();

  constructor(private _employeeService : EmployeeService) { }

  ngOnInit() {
    this.employees = this._employeeService.getEmployee();
    //this.employeeToDisplay=this.employees[0];
  }

  //  nextEmployee(): void {
  //   if (this.employeeToDisplay.id <= 2) {
  //     this.employeeToDisplay = this.employees[this.arrayIndex];
  //     this.arrayIndex++;
  //   } else {
  //     this.employeeToDisplay = this.employees[0];
  //     this.arrayIndex = 1;
  //   }
  // }

  /*handleNotify(eventData : Employee){
    this.dataFromChild=eventData;
  }*/
}