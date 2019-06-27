import { Component, OnInit, OnDestroy } from "@angular/core";
import { CalculatorTableModel } from './calculator.class';
import * as moment from 'moment';

@Component({
    moduleId: module.id,
    selector: 'app-cal',
    templateUrl: 'calculator.component.html',
    styleUrls: ['calculator.component.scss']
})

export class CalculatorComponent implements OnInit, OnDestroy {

    loan: number = 0;
    rate: number = 0;
    monthNo: number = 0;;
    emi: number | any = 0;
    monthlyInterest: number | any = 0;
    dataLogic: Array<CalculatorTableModel> = [];

    constructor() {
    }

    ngOnInit(): void {
    }

    onChangeInput = () => {
        var monthlyInterestRatio = (this.rate / 100) / 12;
        var monthlyInterest = (monthlyInterestRatio * this.loan);
        this.monthlyInterest = monthlyInterest;
        var top = Math.pow((1 + monthlyInterestRatio), this.monthNo);
        var bottom = top - 1;
        var sp = top / bottom;
        var emi = ((this.loan * monthlyInterestRatio) * sp);
        this.emi = emi.toFixed(2);
        if (!!this.emi && !!this.monthNo && !!this.monthlyInterest && !!this.loan) {
            this.getData();
        }
    }

    getData = () => {
        this.dataLogic = [];
        for (let i = 0; i < Number(this.monthNo); i++) {
            this.dataLogic[i] = new CalculatorTableModel();
            var monthlyInterestRatio = (this.rate / 100) / 12;
            if (i != 0) {
                let cuttingprincipalNo = (i - 1);
                var monthlyInterest = (monthlyInterestRatio * this.dataLogic[cuttingprincipalNo].totalRemainAmount);
                let actualPayingPrincipal = (this.emi - monthlyInterest);
                this.setData(i, (this.dataLogic[cuttingprincipalNo].totalRemainAmount - actualPayingPrincipal), monthlyInterest, actualPayingPrincipal,
                    moment(this.dataLogic[cuttingprincipalNo].date).add(1, 'month').format("D MMM YYYY"));
            } else {
                let actualPayingPrincipal = (this.emi - this.monthlyInterest);
                this.setData(i, (this.loan - actualPayingPrincipal), this.monthlyInterest, actualPayingPrincipal, moment().format("D MMM YYYY"));

            }
        }
    }
    setData = (i, totalRemainAmount, monthlyInterest, actualPrincipal, date) => {
        this.dataLogic[i].totalRemainAmount = totalRemainAmount.toFixed(2);
        this.dataLogic[i].emi = this.emi;
        this.dataLogic[i].interest = monthlyInterest.toFixed(2);
        this.dataLogic[i].actualPrincipal = actualPrincipal.toFixed(2);
        this.dataLogic[i].date = date;
    }
    ngOnDestroy(): void {
    }


}