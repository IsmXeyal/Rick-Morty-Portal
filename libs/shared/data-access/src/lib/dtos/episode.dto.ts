import { PaginationInfoDto } from './paginationinfo.dto';

export interface EpisodeDto {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}

export interface EpisodesResponseDto {
  info: PaginationInfoDto;
  results: EpisodeDto[];
}
