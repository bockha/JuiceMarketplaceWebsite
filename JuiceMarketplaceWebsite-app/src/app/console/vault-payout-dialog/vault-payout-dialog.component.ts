import {Component, OnInit, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from "@angular/material";
import {Wallet} from "../models/Wallet";
import {Payout} from "../models/Payout";

import * as moment from 'moment';
import {VaultService} from "../services/vault.service";

@Component({
    selector: 'app-vault-payout-dialog',
    templateUrl: './vault-payout-dialog.component.html',
    styleUrls: ['./vault-payout-dialog.component.scss'],
    providers: [VaultService]
})
export class VaultPayoutDialogComponent implements OnInit{

    wallet: Wallet;
    unconfirmed = false;
    payout = 0;
    emptyWallet = false;
    address = "";
    regex = new RegExp('([2mn][a-km-zA-HJ-NP-Z0-9]{26,34})');
    addressCorrect = false;
    payoutCorrect = false;
    unit = "mbtc";
    unitFactor = 100000;
    unitName = "mBTC";
    errorText: string;

    constructor(public dialogRef: MatDialogRef<VaultPayoutDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private vaultService: VaultService) {
        this.wallet = data.wallet;
    }

    ngOnInit() {
        this.payout = this.wallet.unconfirmed / this.unitFactor;
        this.payoutChanged(null);
    }


    accept() {
        var pObject = new Payout();
        pObject.amount = this.payout * this.unitFactor;
        pObject.payoutAddress  = this.address;
        pObject.emptyWallet = this.emptyWallet;
        pObject.referenceId = "Payout by JMW";
        this.vaultService.createVaultPayout(this.wallet.walletId,pObject).subscribe(payout=>{
            this.dialogRef.close();
        },error2 => {

            this.errorText = error2.message;
        })

    }

    emptyChanged(e: any){
        if(this.emptyWallet){
            this.payout = (this.unconfirmed ? this.wallet.unconfirmed : this.wallet.confirmed)/this.unitFactor;
            this.payoutChanged(null);
        }
    }

    addressChanged(e: any){
        this.addressCorrect = this. regex.test(this.address);
        console.log("address is now " + this.addressCorrect);
    }

    payoutChanged(e: any){
        var rv = false;
        if((this.payout >= 500/this.unitFactor) && (this.payout <= (this.unconfirmed ? this.wallet.unconfirmed : this.wallet.confirmed)/this.unitFactor)){
            rv = true;
        }
        this.payoutCorrect = rv;
    }

    unitChanged(e: any){
        switch(e.value){
            case "mbtc":
                this.unitFactor = 100000;
                this.unitName = "mBTC";
                break;
            case "btc":
                this.unitFactor =100000000;
                this.unitName = "BTC";
                break;
            case "satoshi":
                this.unitFactor = 1;
                this.unitName = "Satoshis";
                break;
            default:
                console.error(this.unit + " is not an expected unit");
        }
        this.payout = this.wallet.unconfirmed / this.unitFactor;
        this.payoutChanged(null);
    }
}