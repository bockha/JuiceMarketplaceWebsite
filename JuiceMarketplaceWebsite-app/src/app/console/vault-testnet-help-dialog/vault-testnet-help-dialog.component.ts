import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material";

@Component({
    selector: 'app-vault-testnet-help-dialog',
    templateUrl: './vault-testnet-help-dialog.component.html',
    styleUrls: ['./vault-testnet-help-dialog.component.css']
})
export class VaultTestnetHelpDialogComponent implements OnInit {

    constructor(public dialogRef: MatDialogRef<VaultTestnetHelpDialogComponent>) {
    }

    ngOnInit() {
    }

}
