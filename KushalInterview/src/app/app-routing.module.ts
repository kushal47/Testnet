import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { EmployeeComponent } from './employee/employee.component';
import { GetEmployees } from './employee/employee.service';

const routes: Routes = [
    {
        path: 'calculator',
        component: CalculatorComponent,
        
    },
    {
        path: 'employee',
        component: EmployeeComponent,
        resolve: {
            employee: GetEmployees
        }
    },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],

})
export class AppRoutingModule { }
