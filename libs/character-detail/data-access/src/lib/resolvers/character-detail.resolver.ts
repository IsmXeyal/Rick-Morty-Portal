import { inject } from '@angular/core';
import { ResolveFn, ActivatedRouteSnapshot, Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { CharacterDetailService } from '../services/character-detail.service';
import { CharacterDto } from '@rick-morty-portal/shared-data-access';

export const CharacterDetailResolver: ResolveFn<CharacterDto | null> = (
  route: ActivatedRouteSnapshot
) => {
  const charactersService = inject(CharacterDetailService);
  const router = inject(Router);

  const id = Number(route.paramMap.get('id'));

  if (!id) {
    router.navigate(['/characters']);
    return of(null);
  }

  return charactersService.getCharacterById(id).pipe(
    catchError(error => {
      console.error('CharacterDetailResolver failed:', error);
      router.navigate(['/characters']);
      return of(null);
    })
  );
};
