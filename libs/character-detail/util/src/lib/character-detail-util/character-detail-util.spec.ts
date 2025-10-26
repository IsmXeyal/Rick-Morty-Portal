import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharacterDetailUtil } from './character-detail-util';

describe('CharacterDetailUtil', () => {
  let component: CharacterDetailUtil;
  let fixture: ComponentFixture<CharacterDetailUtil>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterDetailUtil],
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterDetailUtil);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
