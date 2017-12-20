import {Component, OnInit, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from "@angular/material";
import {Wallet} from "../models/Wallet";

@Component({
    selector: 'app-vault-payout-dialog',
    templateUrl: './vault-payout-dialog.component.html',
    styleUrls: ['./vault-payout-dialog.component.css']
})
export class VaultPayoutDialogComponent implements OnInit {

    wallet: Wallet;
    unconfirmed: boolean;
    payout = 0;
    emptyWallet = false;
    address = "";
    regex = new RegExp('([2mn][a-km-zA-HJ-NP-Z0-9]{34})');
    addressCorrect = false;
    constructor(public dialogRef: MatDialogRef<VaultPayoutDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
        this.wallet = data.wallet;
    }

    ngOnInit() {
    }

    isPayoutEnabled() {
        return ((this.payout >= 500) && (this.payout <= (this.unconfirmed ? this.wallet.unconfirmed : this.wallet.confirmed)))&&this.addressCorrect;
    }

    accept() {

    }

    emptyChanged(e: any){
        if(this.emptyWallet){
            this.payout = this.unconfirmed ? this.wallet.unconfirmed : this.wallet.confirmed;
        }
    }

    addressChanged(e: any){
        this.addressCorrect = this. regex.test(this.address);
        console.log("address is now " + this.addressCorrect);
    }
}
