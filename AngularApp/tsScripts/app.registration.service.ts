import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {UserService, User} from './app.user.service';

@Injectable()
export class RegistrationService {

    constructor(
        private _router: Router, private _userService: UserService) { }
    
    registerUser(user) {
        this._userService.createUser(user);
        this._router.navigate(['home']);
    }
}
