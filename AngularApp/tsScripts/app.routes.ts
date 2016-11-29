// Import our dependencies
import { Routes } from '@angular/router';
import {LoginComponent} from './login.component';
import {PrivateComponent} from './private.component';
import {SocialLoginComponent} from './app.social.login.component';

// Define which component should be loaded based on the current URL
export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'social-login', component: SocialLoginComponent },
    { path: 'Home', component: PrivateComponent },
];