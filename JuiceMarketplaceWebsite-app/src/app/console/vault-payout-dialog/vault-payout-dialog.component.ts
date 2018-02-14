import {Component, OnInit, OnDestroy, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA, MatDialog} from "@angular/material";
import {Wallet} from "../models/Wallet";
import {Payout} from "../models/Payout";

import * as moment from 'moment';
import {VaultService} from "../services/vault.service";
import {Observable} from "rxjs/Rx";
import {Subscription} from "rxjs/Rx";
import 'rxjs/add/observable/fromEvent';

import * as bs58check from 'bs58check';
import {VaultTestnetHelpDialogComponent} from "../vault-testnet-help-dialog/vault-testnet-help-dialog.component";

@Component({
    selector: 'app-vault-payout-dialog',
    templateUrl: './vault-payout-dialog.component.html',
    styleUrls: ['./vault-payout-dialog.component.scss'],
    providers: [VaultService]
})
export class VaultPayoutDialogComponent implements OnInit, OnDestroy {


    intervalSubscription: Subscription;
    wallet: Wallet;
    payout = 0;
    emptyWallet = false;
    address = "";
    regex = new RegExp('^[mn2][a-km-zA-HJ-NP-Z1-9]{33}$');
    mainnetRegex = new RegExp('^[13][a-km-zA-HJ-NP-Z1-9]{25,34}$');
    addressCorrect = false;
    isMainnetAddress = false;
    payoutCorrect = false;
    unit = "mbtc";
    unitFactor = 100000;
    unitName = "mBTC";
    errorText: string;

    transactionFee = 0;
    remaining = 0;

    helpDialogRef: MatDialogRef<VaultTestnetHelpDialogComponent> | null;
    helptDialogConfig = {
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
        }
    };

    constructor(public dialogRef: MatDialogRef<VaultPayoutDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public data: any,
                private vaultService: VaultService,
                private dialog: MatDialog) {
        this.wallet = data.wallet;
    }

    ngOnInit() {
        this.payout = this.wallet.confirmed / this.unitFactor;
        this.reloadWalletInfo();
        this.intervalSubscription = Observable.interval(20000).subscribe(a => {
            this.reloadWalletInfo();
        });

    }

    ngOnDestroy(){
        this.intervalSubscription.unsubscribe();
    }

    reloadWalletInfo(){
        this.vaultService.getVaultWallet(this.wallet.walletId).subscribe(wallet =>{
            this.wallet = wallet;
            this.checkPayout();
        },error2 => console.log(error2));
    }


    accept() {
        var pObject = new Payout();
        pObject.amount = Math.round(this.payout * this.unitFactor);
        pObject.payoutAddress = this.address;
        pObject.emptyWallet = this.emptyWallet;
        pObject.referenceId = "Payout by JMW";
        this.vaultService.createVaultPayout(this.wallet.walletId, pObject).subscribe(payout => {
            this.dialogRef.close();
        }, error2 => {

            if (error2.status == 409) {
                this.errorText = "Das Guthaben ist für diese Aktion zu gering. Beachten Sie, dass für" +
                    " eine Bitcointransaktion auch Transaktionsgebühren verrichtet werden müssen.";
                if (error2.error && error2.error.message) {
                    this.errorText +=  "\n(" + error2.error.message+ ")";
                }
            } else {
                if (error2.error && error2.error.message) {
                    this.errorText =  error2.error.message;
                } else {
                    this.errorText = error2.message;
                }

            }


        })

    }

    emptyChanged(e: any) {
        if (this.emptyWallet) {
            this.payout = ( this.wallet.confirmed - this.transactionFee) / this.unitFactor;
            this.payoutChanged(null);
        }
    }

    unconfirmedChanged(e:any){
        this.payoutChanged(null);
    }

    addressChanged(e: any) {

        let validbs58 = false;
        try{
            const decoded = bs58check.decode(this.address);
            validbs58 = true;
        } catch(e) {
        }

        if(validbs58) {
            this.addressCorrect = this.regex.test(this.address);
            this.isMainnetAddress = this.mainnetRegex.test(this.address);

        }

        this.reloadWalletInfo();
    }

    payoutChanged(e: any) {

        this.reloadWalletInfo();

    }

    unitChanged(e: any) {
        switch (e.value) {
            case "mbtc":
                this.unitFactor = 100000;
                this.unitName = "mBTC";
                break;
            case "btc":
                this.unitFactor = 100000000;
                this.unitName = "BTC";
                break;
            case "satoshi":
                this.unitFactor = 1;
                this.unitName = "Satoshis";
                break;
            default:
                console.error(this.unit + " is not an expected unit");
        }
        this.payout = (this.wallet.confirmed-this.transactionFee) / this.unitFactor;
        this.payoutChanged(null);

        this.reloadWalletInfo();
    }

    checkPayout(){
        if(this.wallet.confirmed == 0){
            this.transactionFee = 0;
            this.remaining = 0;
            return;
        }
        var pObject = new Payout();
        pObject.amount = Math.round(this.payout * this.unitFactor);
        if(pObject.amount < 6000){
            pObject.amount = 6000;
        }
        if(this.address){
            pObject.payoutAddress = this.address;
        }else{
            pObject.payoutAddress = "mpYAAGNkUbsXBhya7SH2kABV8rhWdeKutZ";
        }

        pObject.emptyWallet = this.emptyWallet;
        pObject.referenceId = "Payout by JMW";
        this.vaultService.checkVaultPayout(this.wallet.walletId, pObject).subscribe(payoutCheck => {
            this.remaining = payoutCheck.remaining;
            this.transactionFee = payoutCheck.fee;
            if(this.payout > (this.wallet.confirmed-this.transactionFee) / this.unitFactor ){
                this.payout = (this.wallet.confirmed-this.transactionFee) / this.unitFactor;
                if(this.payout< 0){
                    this.payout = 0;
                }
                this.checkPayout();
            }
            this.checkPayoutForCorrect()

        }, error2 => {
            console.log(error2);
        })
    }

    checkPayoutForCorrect(){
        var rv = false;
        if ((this.payout >= 500 / this.unitFactor) && (this.payout <= (this.wallet.confirmed-this.transactionFee) / this.unitFactor)) {
            rv = true;
        }

        this.payoutCorrect = rv;
    }

    testnetHelp(){
        this.helpDialogRef = this.dialog.open(VaultTestnetHelpDialogComponent, this.helptDialogConfig);
    }

}
