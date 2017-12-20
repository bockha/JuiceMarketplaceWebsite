import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router, CanActivate, ActivatedRouteSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class VaultService{
    constructor(private http: HttpClient) {
    }

    getVaultBalance(): Observable<number>{
        return this.http.get<number>("/api/users/me/vault/balance");
    }

}