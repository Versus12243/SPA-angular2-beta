import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'my-app',
    template: `
              <h1>Angular Router</h1>
              <nav>
               <a routerLink="/login" routerLinkActive="active">Login</a>
               <a routerLink="/social-login" routerLinkActive="active">Social login</a>
              </nav>
              <router-outlet></router-outlet>
        `
})

export class AppComponent {
    constructor(public router: Router) { }
}