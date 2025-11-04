import { PaginationInfoDto } from './paginationinfo.dto';

export interface CharacterDto {
  id: number;
  name: string;
  status: 'Alive' | 'Dead' | 'unknown';
  species: string;
  type: string;
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown';
  origin: LocationRefDto;
  location: LocationRefDto;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface LocationRefDto {
  name: string;
  url: string;
}

export interface CharactersResponseDto {
  info: PaginationInfoDto;
  results: CharacterDto[];
}
