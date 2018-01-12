import {Component, OnInit} from '@angular/core';
import {MarkdownService} from "../services/markdown.service";


@Component({
    selector: 'app-imprint',
    templateUrl: './imprint.component.html',
    styleUrls: ['./imprint.component.css'],
    providers: [MarkdownService]
})
export class ImprintComponent implements OnInit {

    public markdownContent: string = "";
    constructor(private markdownService: MarkdownService) {
    }

    ngOnInit() {

        this.markdownService.getMarkDownFile('assets/resources/imprint.md').subscribe(md => this.markdownContent = md,error2 => console.log(error2));
    }


}
