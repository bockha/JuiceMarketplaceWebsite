import {Component, OnInit} from '@angular/core';
import {Wallet} from "../models/Wallet";
import {VaultService} from "../services/vault.service";
import {MatDialog, MatDialogRef, MatTableDataSource} from "@angular/material";
import {VaultPayoutDialogComponent} from "../vault-payout-dialog/vault-payout-dialog.component";

@Component({
    selector: 'app-vault',
    templateUrl: './vault.component.html',
    styleUrls: ['./vault.component.css'],
    providers: [VaultService]
})
export class VaultComponent implements OnInit {

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
        this.loadWallet();

    }

    loadWallet(){
        this.vaultService.getVaultWallets().subscribe(wallets => {
            this.dataSource.data = wallets;
        })
    }

    payout(wallet: Wallet){
        this.payoutDialogConfig.data.wallet = wallet;
        this.payoutDialogRef = this.dialog.open(VaultPayoutDialogComponent, this.payoutDialogConfig);
        this.payoutDialogRef.afterClosed().subscribe((result:string) => {
            this.loadWallet();
            this.payoutDialogRef = null;
        });
    }

}
