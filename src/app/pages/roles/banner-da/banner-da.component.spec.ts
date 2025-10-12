import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerDAComponent } from './banner-da.component';

describe('BannerDAComponent', () => {
  let component: BannerDAComponent;
  let fixture: ComponentFixture<BannerDAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerDAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerDAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
