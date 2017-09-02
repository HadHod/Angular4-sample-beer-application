import { Component, OnInit } from '@angular/core';

import { Beer } from './app.model';
import { BeerService } from './app.service';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [BeerService]
})
export class AppComponent implements OnInit {
    public beers: Beer[];

    public isInitialized: boolean = false;

    constructor (
        private _beerService: BeerService
    ) {}

    ngOnInit () {
        this._beerService.getBeers().subscribe(b => {
            this.beers = b;
            this.isInitialized = true;
        });
    }

}
