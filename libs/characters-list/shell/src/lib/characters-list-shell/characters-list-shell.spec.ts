import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharactersListShell } from './characters-list-shell';

describe('CharactersListShell', () => {
  let component: CharactersListShell;
  let fixture: ComponentFixture<CharactersListShell>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharactersListShell],
    }).compileComponents();

    fixture = TestBed.createComponent(CharactersListShell);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
