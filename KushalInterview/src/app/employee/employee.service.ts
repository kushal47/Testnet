import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployeeServiceModel } from './employee.class';
import { Resolve } from '@angular/router';


@Injectable({
    providedIn: 'root'
})

export class EmployeeService {

    url: string = "http://localhost:61165/api/";
    constructor(private http: HttpClient) {
    }
    getAllEmployee = (): Observable<Array<EmployeeServiceModel>> => {
        return this.http.get<Array<EmployeeServiceModel>>(this.url + "EmployeeDetail/GetAllEmployee")

    }

    addEmployee = (emp: EmployeeServiceModel) => {
        return this.http.post(this.url + "EmployeeDetail/AddEmployee", emp);
    }

    getEmployeeById = (id: number) => {
        return this.http.get<EmployeeServiceModel>(this.url + "EmployeeDetail/GetEmployeeByIOd?id=" + id);
    }

    updateEmployee = (emp: EmployeeServiceModel) => {
        return this.http.post(this.url + "EmployeeDetail/UpdateEmployee", emp);
    }

    deleteEmployee = (id: number) => {
        return this.http.get(this.url + "EmployeeDetail/RemoveEmployee?id=" + id);
    }
}


@Injectable()
export class GetEmployees implements Resolve<any> {
    constructor(private apiService: EmployeeService) { }
    resolve() {
        return this.apiService.getAllEmployee();
    }
}