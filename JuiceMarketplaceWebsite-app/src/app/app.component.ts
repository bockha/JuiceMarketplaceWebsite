import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material';
import { ViewEncapsulation } from '@angular/core/src/metadata/view';
import { UserService, User } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css'
  ],
  providers: [UserService]  
})

export class AppComponent implements OnInit {
  title = 'app';
  user: User = null;
  spinnerCounter = 0;

  @ViewChild('sidenav') sidenav: MatSidenav;

  constructor(
    private router: Router,
    private userService: UserService
  ) {
    // if (userService.isLoggedIn()) {
    //   console.log("LoggedIn!");
    // } else {
    //   console.log("Not LoggedIn!");
    // }
  }

  ngOnInit() {
    this.spinnerCounter += 1;
    this.userService.user.subscribe(user => {
      if (user != null) {
        this.user = user;
        this.spinnerCounter -= 1;
      }
    });
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

  openDashboard() {
    this.router.navigate(['dashboard']);
  }

  openCreateRecipe() {
    this.router.navigate(['create-recipe']);
  }

  openRecipes() {
    this.router.navigate(['recipes']);
  }
}
