import { Routes } from '@angular/router';
import { AppRoutes } from '@rick-morty-portal/shared-util';

export const appRoutes: Routes = [
  { path: '', redirectTo: AppRoutes.Auth, pathMatch: 'full' },

  {
    path: AppRoutes.Auth,
    loadChildren: () => import('@rick-morty-portal/auth-shell').then(m => m.AUTH_ROUTES),
  },

  {
    path: AppRoutes.Characters,
    //canActivate: [authGuard],
    loadComponent: () =>
      import('@rick-morty-portal/characters-list-shell').then(m => m.CharactersListShell),
  },

  {
    path: AppRoutes.CharacterDetail,
    //canActivate: [authGuard],
    loadComponent: () =>
      import('@rick-morty-portal/character-detail-shell').then(m => m.CharacterDetailShell),
  },

  { path: '**', redirectTo: AppRoutes.Characters },
];
