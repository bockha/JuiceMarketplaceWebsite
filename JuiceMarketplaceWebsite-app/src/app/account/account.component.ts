import { Component, OnInit } from '@angular/core';
// import {ResponsiveCalc} from '../helper/responsive-calc';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  loggedIn = true;
  // respCalc = ResponsiveCalc.Instance;

  constructor() { }

  ngOnInit() {
  }

}
