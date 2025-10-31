import { Routes } from '@angular/router';
// import { LoginComponent } from './login/login.component';
// import { RegisterComponent } from './register/register.component';
// import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AppRoutes } from '@rick-morty-portal/shared-util';

export const AUTH_ROUTES: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: AppRoutes.Login,
        pathMatch: 'full',
      },
      //   {
      //     path: AppRoutes.Login,
      //     loadComponent: () =>
      //       import('@rick-morty-portal/auth-feature').then((m) => m.LoginComponent)
      //   },
      //   {
      //     path: AppRoutes.Register,
      //     loadComponent: () =>
      //       import('@rick-morty-portal/auth-feature').then((m) => m.RegisterComponent)
      //   },
      //   {
      //     path: AppRoutes.ResetPassword,
      //     loadComponent: () =>
      //       import('@rick-morty-portal/auth-feature').then((m) => m.ResetPasswordComponent)
      //   }
    ],
  },
];
