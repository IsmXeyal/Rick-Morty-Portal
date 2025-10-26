import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharactersListDataAccess } from './characters-list-data-access';

describe('CharactersListDataAccess', () => {
  let component: CharactersListDataAccess;
  let fixture: ComponentFixture<CharactersListDataAccess>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharactersListDataAccess],
    }).compileComponents();

    fixture = TestBed.createComponent(CharactersListDataAccess);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
