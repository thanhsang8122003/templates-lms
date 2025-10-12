import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilarRoleDAComponent } from './similar-role-da.component';

describe('SimilarRoleDAComponent', () => {
  let component: SimilarRoleDAComponent;
  let fixture: ComponentFixture<SimilarRoleDAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimilarRoleDAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimilarRoleDAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
