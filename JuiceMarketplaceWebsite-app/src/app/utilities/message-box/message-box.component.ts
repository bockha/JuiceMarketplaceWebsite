import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'app-message-box',
    templateUrl: './message-box.component.html',
    styleUrls: ['./message-box.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class MessageBoxComponent implements OnInit {
    @Input() type = "error";

    constructor() {
    }

    ngOnInit() {
    }

}
