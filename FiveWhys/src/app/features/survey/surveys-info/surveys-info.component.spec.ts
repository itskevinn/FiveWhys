import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveysInfoComponent } from './surveys-info.component';

describe('SurveysInfoComponent', () => {
  let component: SurveysInfoComponent;
  let fixture: ComponentFixture<SurveysInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveysInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurveysInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
