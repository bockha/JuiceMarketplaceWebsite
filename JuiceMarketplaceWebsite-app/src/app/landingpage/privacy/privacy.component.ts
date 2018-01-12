import {Component, OnInit} from '@angular/core';
import {MarkdownService} from "../services/markdown.service";

@Component({
    selector: 'app-privacy',
    templateUrl: './privacy.component.html',
    styleUrls: ['./privacy.component.css'],
    providers: [MarkdownService]
})
export class PrivacyComponent implements OnInit {

    public markdownContent: string = "";

    constructor(private markdownService: MarkdownService) {
    }

    ngOnInit() {
        this.markdownService.getMarkDownFile('assets/resources/privacy.md').subscribe(md => this.markdownContent = md, error2 => console.log(error2));

    }

}
