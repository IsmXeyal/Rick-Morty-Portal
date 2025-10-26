import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharacterDetailDataAccess } from './character-detail-data-access';

describe('CharacterDetailDataAccess', () => {
  let component: CharacterDetailDataAccess;
  let fixture: ComponentFixture<CharacterDetailDataAccess>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterDetailDataAccess],
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterDetailDataAccess);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
