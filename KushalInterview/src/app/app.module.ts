import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CalculatorComponent } from './calculator/calculator.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeService, GetEmployees } from './employee/employee.service';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { EmployeeAddComponent } from './employee/emp-manage/emp-add.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    EmployeeComponent,
    EmployeeAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxDatatableModule,
    NgbModule
  ],
  providers: [EmployeeService, GetEmployees],
  bootstrap: [AppComponent],
  entryComponents: [EmployeeAddComponent]
})
export class AppModule { }
