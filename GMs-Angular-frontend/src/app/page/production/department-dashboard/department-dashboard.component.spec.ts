import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentDashboardComponent } from './department-dashboard.component';

describe('DepartmentDashboardComponent', () => {
  let component: DepartmentDashboardComponent;
  let fixture: ComponentFixture<DepartmentDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartmentDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
