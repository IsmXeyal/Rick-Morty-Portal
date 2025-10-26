import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthUtil } from './auth-util';

describe('AuthUtil', () => {
  let component: AuthUtil;
  let fixture: ComponentFixture<AuthUtil>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthUtil],
    }).compileComponents();

    fixture = TestBed.createComponent(AuthUtil);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
