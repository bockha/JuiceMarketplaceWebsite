import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { setTimeout } from 'timers';

@Injectable()
export class UserService {
  private _user: BehaviorSubject<User> = new BehaviorSubject(null);
  public readonly user: Observable<User> = this._user.asObservable();


  constructor(private http: HttpClient) {
    this.updateUser();
  }

  updateUser() {
    this.http.get<User>("/users/me").subscribe(user => {
      // setTimeout(() => {
      //   console.log("Hallo!!!!!");
      //   this._user.next(user);
      // }, 5000);
      this._user.next(user);
    }, error => {
      console.log(error);
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