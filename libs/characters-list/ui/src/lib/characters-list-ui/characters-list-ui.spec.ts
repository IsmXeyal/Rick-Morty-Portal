import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharactersListUi } from './characters-list-ui';

describe('CharactersListUi', () => {
  let component: CharactersListUi;
  let fixture: ComponentFixture<CharactersListUi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharactersListUi],
    }).compileComponents();

    fixture = TestBed.createComponent(CharactersListUi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
