import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharacterDetailUi } from './character-detail-ui';

describe('CharacterDetailUi', () => {
  let component: CharacterDetailUi;
  let fixture: ComponentFixture<CharacterDetailUi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterDetailUi],
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterDetailUi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
