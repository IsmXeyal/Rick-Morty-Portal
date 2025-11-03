import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { CharactersResponseDto } from '@rick-morty-portal/shared-data-access';
import { CharactersService } from '../services/characters.service';
import { catchError, of } from 'rxjs';

export const CharactersListResolver: ResolveFn<CharactersResponseDto | null> = (
  _route: ActivatedRouteSnapshot
) => {
  const service = inject(CharactersService);

  return service.getAllCharacters().pipe(
    catchError(error => {
      console.error('CharactersListResolver failed:', error);
      return of(null);
    })
  );
};
