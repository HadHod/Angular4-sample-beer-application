import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Beer } from './../app.model';
import { BeerService } from './../app.service';


@Component({
  templateUrl: './beer-details.component.html',
  styleUrls: ['./beer-details.component.css'],
  providers: [BeerService]
})
export class BeerDetailsComponent implements OnInit {
    public beer: Beer;

    public isInitialized: boolean = false;

    constructor (
        private _router: ActivatedRoute,
        private _beerService: BeerService
    ) { }

    ngOnInit() {
        this._router.params.subscribe(params => this.init(params));
    }

    private init (params) {
        const id: number = params['beerId'];

        this._beerService.getBeer(id).subscribe(([beer]) => {
            this.beer = beer;
            this.isInitialized = true;
        });
    }

}
