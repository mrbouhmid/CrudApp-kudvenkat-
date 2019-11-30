import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';

import { RouterModule, Routes } from '@angular/router';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { EmployeeService } from './employees/employee.service';
import { DisplayEmployeeComponent } from './employees/display-employee.component';

const appRoutes: Routes = [
  { path: 'list', component: ListEmployeesComponent },
  { path: 'create', component: CreateEmployeeComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent,
    DisplayEmployeeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
