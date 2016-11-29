﻿import {NgModule} from '@angular/core';
import {AppComponent}  from './app.component';
import {BrowserModule } from '@angular/platform-browser';
import {Component} from '@angular/core';
import {FormsModule } from '@angular/forms';
import {LoginComponent} from './login.component';
import {PrivateComponent} from './private.component';
import {RouterModule, Routes} from '@angular/router';
import {routes} from './app.routes';
import {SocialLoginComponent} from './app.social.login.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(routes, {
            useHash: true
        })
    ],
    declarations: [
        AppComponent,
        PrivateComponent,
        LoginComponent,
        SocialLoginComponent
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}

