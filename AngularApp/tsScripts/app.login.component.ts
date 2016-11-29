import {Component, ElementRef} from '@angular/core';
import {AuthenticationService} from './app.authentication.service';
import {User, UserService} from './app.user.service';

@Component({
    selector: 'login-form',
    providers: [AuthenticationService, UserService],
    templateUrl: '/AngularTemplates/app.login.component.html'
})

export class LoginComponent {

    public user = new User('', '');
    public errorMsg = '';

    constructor(
        private _service: AuthenticationService) { }

    login() {
        if (!this._service.login(this.user)) {
            this.errorMsg = 'Failed to login';
        }
    }
}