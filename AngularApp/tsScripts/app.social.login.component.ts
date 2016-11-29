import {Component, NgZone} from '@angular/core';
import {Router} from '@angular/router';
import {User} from './app.user.service'

declare var gapi: any;

@Component({
    selector: 'login-form',
    templateUrl: '/AngularTemplates/app.social.login.component.html'
})

export class SocialLoginComponent {   

    public errorMsg = '';

    googleLoginButtonId = "google-login-button";

    constructor(private _zone: NgZone, private _router: Router) { }

    ngAfterViewInit() {
        // Converts the Google login button stub to an actual button. 
        gapi.signin2.render(this.googleLoginButtonId,
            {
                'onsuccess': this.onLoginInSuccess,
                'onfailure': this.onLoginFailure,
                'scope': 'profile',
                'theme': 'dark',
                'width': 200,
                'height': 36,
                'display': 'inline-block'
            });
    }

    private onLoginInSuccess = (loggedInUser: any) => {
        this._zone.run(() => {
            var email = loggedInUser.getBasicProfile().getEmail();
            var auth_token = loggedInUser.getAuthResponse().id_token;
            // Use a service to store authenticate with backend 
            // Store token in local storage for authentication 
            var user = new User(email, auth_token);
            localStorage.setItem("user", JSON.stringify(user));
            this._router.navigate(['home']);
        });
    }

    private onLoginFailure = (error: any) => {
        this.errorMsg = 'Failed to login';
    }
}