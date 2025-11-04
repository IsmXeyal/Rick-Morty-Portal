import { inject, Injectable } from '@angular/core';
import { ApiService } from '@rick-morty-portal/shared-data-access';
import { ApiEndpoints } from '@rick-morty-portal/shared-util';
import { CharacterDto } from '@rick-morty-portal/shared-data-access';

@Injectable({
  providedIn: 'root',
})
export class CharacterDetailService {
  private readonly api = inject(ApiService);

  public getCharacterById(id: number) {
    return this.api.getById<CharacterDto>(ApiEndpoints.Characters, id);
  }
}
