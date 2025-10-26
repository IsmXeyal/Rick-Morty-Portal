import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharacterDetailShell } from './character-detail-shell';

describe('CharacterDetailShell', () => {
  let component: CharacterDetailShell;
  let fixture: ComponentFixture<CharacterDetailShell>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterDetailShell],
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterDetailShell);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
