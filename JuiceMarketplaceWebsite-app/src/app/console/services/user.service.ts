import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router, CanActivate, ActivatedRouteSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) {
    }

    getUser(): Observable<User> {
        return this.http.get<User>("/users/me");
    }

    isLoggedIn(): Observable<boolean> {
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