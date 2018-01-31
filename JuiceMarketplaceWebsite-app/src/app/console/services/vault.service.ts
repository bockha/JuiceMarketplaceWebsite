import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router, CanActivate, ActivatedRouteSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Wallet} from "../models/Wallet";
import {Payout} from "../models/Payout";
import {PayoutCheck} from "../models/PayoutCheck";

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

    getVaultWallet(walletId: string): Observable<Wallet>{
        return this.http.get<Wallet>("/api/users/me/vault/wallets/"+walletId);
    }

    createVaultPayout(walletId: string, payout: Payout): Observable<Payout>{
        return this.http.post<Payout>('/api/users/me/vault/wallets/'+walletId+'/payouts',payout);
    }

    checkVaultPayout(walletId: string, payout: Payout): Observable<PayoutCheck>{
        return this.http.post<PayoutCheck>('/api/users/me/vault/wallets/'+walletId+'/payouts/check',payout);
    }

}