import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificatesDAComponent } from './certificates-da.component';

describe('CertificatesDAComponent', () => {
  let component: CertificatesDAComponent;
  let fixture: ComponentFixture<CertificatesDAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificatesDAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertificatesDAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
