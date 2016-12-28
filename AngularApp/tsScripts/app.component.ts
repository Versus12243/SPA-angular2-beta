import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'my-app',
    templateUrl: './AngularTemplates/app.component.html'
})

export class AppComponent {
    constructor(public router: Router) { }
}