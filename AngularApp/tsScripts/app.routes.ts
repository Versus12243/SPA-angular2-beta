// Import our dependencies
import { Routes } from '@angular/router';
import {LoginComponent} from './app.login.component';
import {PrivateComponent} from './app.private.component';
import {SocialLoginComponent} from './app.social.login.component';
import {RegistrationComponent} from './app.registration.component';

// Define which component should be loaded based on the current URL
export const routes: Routes = [
    { path: '', component: PrivateComponent },
    { path: 'login', component: LoginComponent },
    { path: 'social-login', component: SocialLoginComponent },
    { path: 'register', component: RegistrationComponent },
    { path: 'home', component: PrivateComponent },
];