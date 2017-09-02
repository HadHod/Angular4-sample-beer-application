import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MdToolbarModule, MdProgressSpinnerModule, MdListModule } from '@angular/material';


const MD_COMPONENTS = [MdToolbarModule, MdProgressSpinnerModule, MdListModule];
const DIRECTIVES = [];
const PIPES = [];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, HttpModule,
        MD_COMPONENTS, DIRECTIVES, PIPES
    ],
    providers: [
        HttpModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
