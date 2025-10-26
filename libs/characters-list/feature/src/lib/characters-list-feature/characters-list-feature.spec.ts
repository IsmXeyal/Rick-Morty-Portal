import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharactersListFeature } from './characters-list-feature';

describe('CharactersListFeature', () => {
  let component: CharactersListFeature;
  let fixture: ComponentFixture<CharactersListFeature>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharactersListFeature],
    }).compileComponents();

    fixture = TestBed.createComponent(CharactersListFeature);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
