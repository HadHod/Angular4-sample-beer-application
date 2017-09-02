import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MdToolbarModule, MdProgressSpinnerModule, MdListModule, MdCardModule } from '@angular/material';
import { BeerDetailsComponent } from './beer-details/beer-details.component';


const MD_COMPONENTS = [
    MdToolbarModule, MdProgressSpinnerModule, MdListModule, MdCardModule
];
const DIRECTIVES = [];
const PIPES = [];

@NgModule({
    declarations: [
        AppComponent,
        BeerDetailsComponent
    ],
    imports: [
        BrowserModule, HttpModule, AppRoutingModule,
        MD_COMPONENTS, DIRECTIVES, PIPES
    ],
    exports: [
        BeerDetailsComponent
    ],
    providers: [
        HttpModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
