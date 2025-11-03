import { PaginationInfoDto } from './paginationinfo.dto';

export interface LocationDto {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
}

export interface LocationsResponseDto {
  info: PaginationInfoDto;
  results: LocationDto[];
}
