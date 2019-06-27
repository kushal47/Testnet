import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EmployeeServiceModel } from './employee.class';

import { EmployeeAddComponent } from './emp-manage/emp-add.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeService } from './employee.service';

@Component({
    moduleId: module.id,
    selector: 'app-employee',
    templateUrl: 'employee.component.html',
    styleUrls: ['employee.component.scss']
})

export class EmployeeComponent implements OnInit, OnDestroy {


    employeeForm: FormGroup;
    isAdd: boolean = false;
    employeeList?: Array<EmployeeServiceModel> = [];

    empDetail: EmployeeServiceModel = {}
    rows = [];
    columns = [
        { prop: 'FirstName', name: 'FirstName' },
        { prop: 'LastName', name: 'LastName' },
        { prop: 'EmailAddress', name: 'EmailAddress' },
        { prop: 'PhoneNumber', name: 'PhoneNumber' },
        { prop: 'Address', name: 'Address' },
        { prop: 'action', name: 'Actions' }
    ];

    // columns = [
    //     { name: 'FirstName' },
    //     { name: 'LastName' },
    //     { name: 'EmailAddress' },
    //     { name: 'PhoneNumber' },
    //     { name: 'Address' },
    //     { name: 'Actions' }
    // ];
    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private modalService: NgbModal,
        private employeeService: EmployeeService) {

        this.route.data.subscribe(data => {
            this.employeeList = data.employee;
            this.rows = this.employeeList;
        });
    }
    initForm = () => {
        return this.formBuilder.group({
            FirstName: ['', Validators.required],
            LastName: ['', Validators.required],
            EmailAddress: ['', [Validators.required, Validators.email]],
            PhoneNumber: ['', [Validators.required]],
            Address: ['', Validators.required]
        });
    }
    addButtonCalled = () => {
        const modalRef = this.modalService.open(EmployeeAddComponent);
        modalRef.componentInstance.name = 'World';
    }

    saveDetails = () => {
        if (this.employeeForm.valid) {
            var dataToAdd = new EmployeeServiceModel();
            dataToAdd = Object.assign(this.employeeForm.value);
            this.employeeService.addEmployee(dataToAdd)
                .subscribe(data => {
                    console.log("employee addedd");
                    this.refreshEmployee();
                });
        }
    }

    refreshEmployee = () => {
        this.employeeService.getAllEmployee()
            .subscribe(data => {
                this.employeeList = data;
                this.employeeForm = this.initForm();
            })
    }
    editData = (data: EmployeeServiceModel) => {

        this.employeeService.getEmployeeById(data.Id)
            .subscribe(data => {
                if (!!data) {
                    this.empDetail = data;
                    this.employeeForm = this.initForm();
                    this.employeeForm.patchValue(this.empDetail);
                }
            });
    }

    updateData = () => {
        if (this.employeeForm.valid) {

            Object.assign(this.empDetail, this.employeeForm.value);
            this.employeeService.updateEmployee(this.empDetail)
                .subscribe(data => {
                    console.log("employee updated");
                    this.refreshEmployee();
                });
        }
    }

    deleteData = (data) => {
        this.employeeService.deleteEmployee(data.Id)
            .subscribe(data => {
                if (!!data) {
                    this.refreshEmployee();
                }
            })
    }
    gotoBack = () => {

    }


    ngOnInit(): void {
        this.employeeForm = this.initForm();
    }
    ngOnDestroy(): void {
    }


}