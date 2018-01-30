import {Component, OnInit, OnDestroy} from '@angular/core';
import {Wallet} from "../models/Wallet";
import {VaultService} from "../services/vault.service";
import {MatDialog, MatDialogRef, MatTableDataSource} from "@angular/material";
import {VaultPayoutDialogComponent} from "../vault-payout-dialog/vault-payout-dialog.component";
import {Observable} from "rxjs/Rx";
import {Subscription} from "rxjs/Rx";
import 'rxjs/add/observable/fromEvent';

@Component({
    selector: 'app-vault',
    templateUrl: './vault.component.html',
    styleUrls: ['./vault.component.css'],
    providers: [VaultService]
})
export class VaultComponent implements OnInit, OnDestroy {

    intervalSubscription: Subscription;

    constructor(private vaultService: VaultService, private dialog: MatDialog) {
    }

    dataSource = new MatTableDataSource<Wallet>();
    displayedColumns = ["walletid", "unconfirmed", "confirmed", "action"];

    payoutDialogRef: MatDialogRef<VaultPayoutDialogComponent> | null;
    payoutDialogConfig = {
        disableClose: false,
        panelClass: 'custom-overlay-pane-class',
        hasBackdrop: true,
        backdropClass: '',
        width: '',
        height: '',
        position: {
            top: '',
            bottom: '',
            left: '',
            right: ''
        },
        data: {
            wallet: new Wallet
        }
    }

    ngOnInit() {
        this.intervalSubscription = Observable.interval(20000).subscribe(a => {
            this.loadWallet();
        });
        this.loadWallet();

    }

    ngOnDestroy() {
        this.intervalSubscription.unsubscribe();
    }

    loadWallet() {
        this.vaultService.getVaultWallets().subscribe(wallets => {
            this.dataSource.data = wallets;
        })
    }

    payout(wallet: Wallet) {
        this.payoutDialogConfig.data.wallet = wallet;
        this.payoutDialogRef = this.dialog.open(VaultPayoutDialogComponent, this.payoutDialogConfig);
        this.payoutDialogRef.afterClosed().subscribe((result: string) => {
            this.loadWallet();
            this.payoutDialogRef = null;
        });
    }

}
