import {NgModule} from '@angular/core';
import {AppComponent}  from './app.component';
import {BrowserModule } from '@angular/platform-browser';
import {Component} from '@angular/core';
import {FormsModule } from '@angular/forms';
import {LoginComponent} from './app.login.component';
import {PrivateComponent} from './app.private.component';
import {RouterModule, Routes} from '@angular/router';
import {routes} from './app.routes';
import {SocialLoginComponent} from './app.social.login.component';
import {RegistrationComponent} from './app.registration.component';

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
        SocialLoginComponent,
        RegistrationComponent
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}

