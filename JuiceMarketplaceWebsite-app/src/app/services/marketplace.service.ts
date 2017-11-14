import { Injectable } from '@angular/core';
import { HttpModule, Http, Response } from '@angular/http';
import { TdmComponent } from '../juice-program-configurator/models/tdmcomponent';

@Injectable()
export class MarketplaceService {
  private componentsUrl = '/components';
  
  constructor(private http: Http) {
  }

  getComponents() {
    return this.http
    .get(this.componentsUrl)
    .toPromise()
    .then(response => {
      var r = response.json() as TdmComponent[];
      return r;
    })
    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
