import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { Beer, IBeerRaw } from './app.model';


const BASE_BEER_URL: string = 'https://api.punkapi.com/v2/beers';
const BEER_URL: string = BASE_BEER_URL + '?beer_name=';
const RANDOM_BEER_URL: string = BASE_BEER_URL + '/random';

@Injectable()
export class BeerService {

    constructor (
        private _http: Http
    ) { }

    public getBeers (): Observable<Beer[]> {
        return this.getPublic(BASE_BEER_URL).map(this.mapBeers);
    }

    public getBeer (id: number): Observable<Beer[]> {
        return this.getPublic(BASE_BEER_URL + '/' + id).map(this.mapBeers);
    }

    public getRandomBeer () {
        return this.getPublic(RANDOM_BEER_URL).map(this.mapBeer);
    }

    private mapBeer = (response: any) => new Beer(<IBeerRaw> response);

    private mapBeers = (response: any) => {
        const rawBeers = <IBeerRaw[]> response;
        return rawBeers.map(this.mapBeer);
    }

    public getPublic (url: string): Observable<any> {
        return this._http
            .get(url, this.getOptions())
            .map(this.extractData)
            .catch(error => {
                console.log(error);
                return Observable.throw(error);
            });
    }

    private getOptions (headers = {}): RequestOptions {
        headers['Accept'] = 'application/json';
        return new RequestOptions({ 'headers': new Headers(headers) });
    }

    private extractData (res: Response): any {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('BAD RESPONSE STATUS: ' + res.status);
        }
        if (res) {
            try {
                return res.json();
            } catch (e) {}
        }
        return null;
    }

}
