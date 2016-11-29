import {Component, ElementRef} from '@angular/core';
import {RegistrationService} from './app.registration.service';
import {User, UserService} from './app.user.service';

@Component({
    selector: 'login-form',
    providers: [RegistrationService, UserService],
    templateUrl: '/AngularTemplates/app.registration.component.html'
})

export class RegistrationComponent {

    public user = new User('', '');
    public errorMsg = '';

    constructor(
        private _service: RegistrationService) { }

    register() {
        if (!this._service.registerUser(this.user)) {
            this.errorMsg = 'Failed to login';
        }
    }
}