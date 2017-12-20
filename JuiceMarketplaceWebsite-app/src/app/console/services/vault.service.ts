import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router, CanActivate, ActivatedRouteSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Wallet} from "../models/Wallet";

@Injectable()
export class VaultService{
    constructor(private http: HttpClient) {
    }

    getVaultBalance(): Observable<number>{
        return this.http.get<number>("/api/users/me/vault/balance");
    }

    getVaultWallets(): Observable<Wallet[]>{
        return this.http.get<Wallet[]>("/api/users/me/vault/wallets");
    }

}