import { Input, Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'emp-model',
    moduleId: module.id,
    templateUrl: 'emp-manage-component.html',
    styleUrls: ['emp-manage-component.scss']
})

export class EmployeeAddComponent {
    @Input() name;

    constructor(public activeModal: NgbActiveModal) { }

}