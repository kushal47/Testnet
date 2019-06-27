import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'KushalInterview';
  constructor(private router: Router) {

  }
  gotoCal = () => {
    this.router.navigate(["/calculator"])
  }
  gotoEmp = () => {
    this.router.navigate(["/employee"])
  }
}
