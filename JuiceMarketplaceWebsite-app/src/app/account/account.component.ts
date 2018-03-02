import {Component, OnInit} from '@angular/core';
import {UserService, User} from '../console/services/user.service';
import {Router} from "@angular/router";

// import {ResponsiveCalc} from '../helper/responsive-calc';

@Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.css'],
    providers: [UserService]
})
export class AccountComponent implements OnInit {
    user: User = null;
    loggedin: boolean = false;

    // respCalc = ResponsiveCalc.Instance;

    constructor(private userService: UserService, private router: Router) {
        this.userService.isLoggedIn().subscribe(loggedIn => {
            this.loggedin = loggedIn;
            if (this.loggedin) {
                userService.getUser().subscribe(user => {
                    this.user = user;
                });
            }
        })

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

    getUserAvatar() {
        if (this.user != null) {
            return '/api/users/me/image';
        }
        return '';
    }

    logout() {
        window.location.href = "/auth/logout";
    }

    login() {
        document.cookie = "redirectTo=" + this.router.url.toString();
        window.location.href = "/auth/iuno";
    }
}
