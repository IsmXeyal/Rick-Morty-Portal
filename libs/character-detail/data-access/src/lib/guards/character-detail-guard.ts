import { inject } from '@angular/core';
import { CanActivateFn, Router, ActivatedRouteSnapshot } from '@angular/router';
import { CharacterDetailService } from '../services/character-detail.service';
import { map, catchError, of } from 'rxjs';

export const characterDetailGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {
  const service = inject(CharacterDetailService);
  const router = inject(Router);
  const id = Number(route.paramMap.get('id'));

  if (!id) {
    router.navigate(['/characters']);
    return false;
  }

  return service.getCharacterById(id).pipe(
    map(() => true),
    catchError(() => {
      router.navigate(['/characters']);
      return of(false);
    })
  );
};
