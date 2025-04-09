import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'sign-up',
    loadChildren: () =>
      import('./modules/sign-up/sign-up.routing').then((r) => r.SignUpRouting),
  },
  {
    path: 'introduction',
    loadChildren: () =>
      import('./modules/introduction/introduction.routing').then(
        (r) => r.IntroductionRoutes
      ),
  },

  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'introduction',
  },
];
