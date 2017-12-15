import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router, CanActivate, ActivatedRouteSnapshot} from '@angular/router';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';

// import { setTimeout } from 'timers';

@Injectable()
export class UserService {
    // private _user: BehaviorSubject<User> = new BehaviorSubject(null);
    // public readonly user: Observable<User> = this._user.asObservable();


    constructor(private http: HttpClient) {
        // this.updateUser();
    }

    // updateUser() {
    //     this.http.get<User>("/users/me").subscribe(user => {
    //         // setTimeout(() => {
    //         //   console.log("Hallo!!!!!");
    //         //   this._user.next(user);
    //         // }, 5000);
    //         this._user.next(user);
    //     }, error => {
    //         console.log(error);
    //     });
    // }

    getUser():Observable<User> {
        return this.http.get<User>("/users/me");
    }

    isLoggedIn(): Observable<boolean>  {
        return this.http.get<boolean>("/auth/loggedin").flatMap(loggedin => {
            return Observable.of(loggedin);
        })
    }
}

@Injectable()
export class AccessGuard implements CanActivate {
    constructor(private http: HttpClient, private router: Router) {

    }

    canActivate(route: ActivatedRouteSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.http.get<boolean>("/auth/loggedin").flatMap(loggedin => {
            if (!loggedin) {
                window.location.href = "/";
            }
            return Observable.of(loggedin);
        });
    }

    guardLoggedIn(): Observable<boolean> {
        console.log("guardLoggedIn");
        return this.http.get<boolean>("/auth/loggedin").flatMap(loggedin => {
            console.log("loggedin = " + loggedin);
            if (!loggedin) {
                window.location.href = "/";
            }
            return Observable.of(loggedin);
        });
    }
}

export class User {
    id: string;
    username: string;
    firstname: string;
    lastname: string;
    useremail: string;
    oauth2provider: string;
}