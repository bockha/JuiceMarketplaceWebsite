import {Component, OnInit, ViewChild} from '@angular/core';
import {Router, ActivatedRoute, NavigationEnd} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {MatSidenav} from '@angular/material';
import {HostListener} from '@angular/core';
import {UserService} from "./console/services/user.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [UserService]
})

export class AppComponent implements OnInit {
    title = 'app';
    routerSubscription: Subscription;
    menuVisible = false;
    menuButtonVisible = false;

    navigationButtonsVisible = true;
    tdmLogoVisible = true;
    accountInfoShortened = false;

    path = '';

    @ViewChild(MatSidenav) sidenav: MatSidenav;

    constructor(private router: Router,
                private activatedRoute: ActivatedRoute,
                private userService: UserService) {


    }

    @HostListener('window:resize', ['$event'])
    windowResized(event: UIEvent) {
        this.updateResponsiveElements();
    }

    // printpath(parent: String, config: Route[]) {
    //   for (let i = 0; i < config.length; i++) {
    //     let r = config[i];
    //     console.log(parent + '/' + r.path);
    //     if (r.children && r.path) {
    //       this.printpath(parent + '/' + r.path, r.children);
    //     }
    //   }
    // }

    ngOnInit() {
        const self = this;
        this.routerSubscription = this.router.events.subscribe(function (s) {
            if (s instanceof NavigationEnd) {
                self.path = s.urlAfterRedirects;
                self.calculateMenu(self.path);
            }
        });
        this.updateResponsiveElements();
        // this.printpath('', this.router.config);
        // console.log('configured routes: ', this.router.config);
    }

    private updateResponsiveElements() {
        this.navigationButtonsVisible = window.innerWidth > 1100;
        this.accountInfoShortened = window.innerWidth < 580;
        this.tdmLogoVisible = window.innerWidth > 290;
        this.calculateMenu(this.path);
    }

    // this.router.navigate([{outlets: {'sidebar': ['statistics']}}]);
    calculateMenu(path: string) {
        if (this.navigationButtonsVisible) {
            this.sidenav.mode = 'side';
            if (path.startsWith('/console')) {
                this.menuVisible = true;
                this.menuButtonVisible = true;
                // console.log(self.tdmButton);
                this.router.navigate([{outlets: {'sidebar': ['console-menu']}}]);
            } else if (path.startsWith('/statistics')) {
                this.menuVisible = true;
                this.menuButtonVisible = true;
                this.router.navigate([{outlets: {'sidebar': ['statistics']}}]);
            } else if (path.startsWith('/landingpage')) {
                this.menuVisible = false;
                this.menuButtonVisible = false;
                this.sidenav.close();

            } else if (path.startsWith('/news')) {
                this.menuVisible = false;
                this.menuButtonVisible = false;
                this.sidenav.close();
            }
        } else {
            this.router.navigate([{outlets: {'sidebar': ['index']}}]);
            this.sidenav.mode = 'over';
            this.menuButtonVisible = true;
            this.menuVisible = false;
            this.sidenav.close();
        }

    }

    startClicked() {
        this.router.navigateByUrl('/landingpage');
    }

    tdmClicked() {
        this.userService.isLoggedIn().subscribe(loggedin => {
            if (loggedin) {
                this.router.navigateByUrl('/console');
            } else {

                document.cookie = "redirectTo=/console";
                window.location.href = "/auth/iuno";
            }
        })


    }


    statisticsClicked() {
        this.router.navigateByUrl('/statistics');
    }

    newsClicked() {
        this.router.navigateByUrl('/news');
    }


}
