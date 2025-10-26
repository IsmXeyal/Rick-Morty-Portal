import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharacterDetailFeature } from './character-detail-feature';

describe('CharacterDetailFeature', () => {
  let component: CharacterDetailFeature;
  let fixture: ComponentFixture<CharacterDetailFeature>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterDetailFeature],
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterDetailFeature);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
