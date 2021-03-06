import {Injectable} from '@angular/core';
// import { HttpModule, Http, Response } from '@angular/http';
import {HttpClient} from '@angular/common/http';
import {CocktailComponent} from 'tdm-common';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class MarketplaceService {
    private _components: BehaviorSubject<CocktailComponent[]> = new BehaviorSubject([]);
    public readonly components: Observable<CocktailComponent[]> = this._components.asObservable();

    constructor(private http: HttpClient) {
        this.updateComponents();
    }

    updateComponents() {
        this.http.get<CocktailComponent[]>('/api/components').subscribe(components => {
            this._components.next(components);
        });
    }

    // getComponents() {
    //   this.http.get<TdmComponent[]>('/components').subscribe(components => {
    //     this._components.next(components);
    //   });

    //   return this.http
    //   .get(this.componentsUrl)
    //   .toPromise()
    //   .then(response => {
    //     var r = response.json() as TdmComponent[];
    //     return r;
    //   })
    //   .catch(this.handleError);
    // }

    // private handleError(error: any): Promise<any> {
    //   console.error('An error occurred', error);
    //   return Promise.reject(error.message || error);
    // }
}
