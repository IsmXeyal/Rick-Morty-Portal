import { TestBed } from '@angular/core/testing';
import { CharacterDetailService } from './character-detail.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CharacterDetailService', () => {
  let service: CharacterDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CharacterDetailService],
    });
    service = TestBed.inject(CharacterDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
