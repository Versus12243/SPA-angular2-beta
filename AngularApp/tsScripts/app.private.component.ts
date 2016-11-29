import {Component} from '@angular/core';
import {AuthenticationService} from './app.authentication.service'
import {UserService} from './app.user.service';

@Component({
    selector: 'login-form',
    providers: [AuthenticationService, UserService],
    templateUrl: '/AngularTemplates/app.private.component.html'
})

export class PrivateComponent {

    constructor(
        private _service: AuthenticationService) { }

    ngOnInit() {
        this._service.checkCredentials();
    }

    logout() {
        this._service.logout();
    }
}