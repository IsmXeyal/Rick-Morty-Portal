import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharactersListUtil } from './characters-list-util';

describe('CharactersListUtil', () => {
  let component: CharactersListUtil;
  let fixture: ComponentFixture<CharactersListUtil>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharactersListUtil],
    }).compileComponents();

    fixture = TestBed.createComponent(CharactersListUtil);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
