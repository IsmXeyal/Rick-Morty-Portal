import { inject, Injectable } from '@angular/core';
import { ApiService } from '@rick-morty-portal/shared-data-access';
import { ApiEndpoints } from '@rick-morty-portal/shared-util';
import { CharactersResponseDto } from '@rick-morty-portal/shared-data-access';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  private readonly api = inject(ApiService);

  public getAllCharacters() {
    return this.api.getAll<CharactersResponseDto>(ApiEndpoints.Characters);
  }
}
