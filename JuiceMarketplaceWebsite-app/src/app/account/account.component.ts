import { Component, OnInit } from '@angular/core';
import { UserService, User } from '../console/services/user.service';
// import {ResponsiveCalc} from '../helper/responsive-calc';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [UserService]  
})
export class AccountComponent implements OnInit {
  user: User = null;
  // respCalc = ResponsiveCalc.Instance;

  constructor(private userService: UserService) { 
    userService.user.subscribe(user => {
      this.user = user;
      console.log("Hallo???");
    });
  }

  ngOnInit() {
  }

  getUserDisplayName() {
    var displayName = '';
    if (this.user != null) {
      displayName = 'Anonymous';
      if (this.user.firstname && this.user.lastname) {
        displayName = this.user.firstname + " " + this.user.lastname;
      } else if (this.user.username) {
        displayName = this.user.username;
      } else if (this.user.firstname) {
        displayName = this.user.firstname;
      } else if (this.user.lastname) {
        displayName = this.user.lastname;
      }
    }
    return displayName;
  }

  logout() {
    window.location.href="/auth/logout";
  }

  login() {
    window.location.href="/auth/iuno";
  }
}
