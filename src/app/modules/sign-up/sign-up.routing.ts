import { Route } from '@angular/router';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';

export const SignUpRouting: Route[] = [
  {
    path: '',
    loadComponent: () => SignUpPageComponent,
  },
];
