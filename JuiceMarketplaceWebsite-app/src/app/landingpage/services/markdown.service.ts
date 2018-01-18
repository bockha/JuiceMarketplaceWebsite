import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class MarkdownService {

    constructor(private http: HttpClient) {
    }

    getMarkDownFile(path: string): Observable<string> {
        return this.http.get(path, {responseType: 'text'});
    }

}
