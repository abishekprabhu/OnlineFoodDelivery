import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminhomepageComponent } from './adminhomepage.component';

describe('AdminhomepageComponent', () => {
  let component: AdminhomepageComponent;
  let fixture: ComponentFixture<AdminhomepageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminhomepageComponent]
    });
    fixture = TestBed.createComponent(AdminhomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
