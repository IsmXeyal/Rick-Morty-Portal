import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { CharactersResponseDto } from '@rick-morty-portal/shared-data-access';
import { CharactersService } from '@rick-morty-portal/characters-list-data-access';
import { catchError, of } from 'rxjs';

export const CharactersListResolver: ResolveFn<CharactersResponseDto | null> = (
  route: ActivatedRouteSnapshot
) => {
  const charactersService = inject(CharactersService);

  return charactersService.getAllCharacters().pipe(
    catchError(error => {
      console.error('CharactersListResolver failed:', error);
      return of(null);
    })
  );
};
