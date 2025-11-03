import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { CharactersService } from '../services/characters.service';
import { map, catchError, of } from 'rxjs';

export const charactersListGuard: CanActivateFn = () => {
  const service = inject(CharactersService);

  return service.getAllCharacters().pipe(
    map(() => true),
    catchError(() => {
      return of(true);
    })
  );
};
