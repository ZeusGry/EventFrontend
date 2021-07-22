import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizerRegComponent } from './organizer-reg.component';

describe('OrganizerRegComponent', () => {
  let component: OrganizerRegComponent;
  let fixture: ComponentFixture<OrganizerRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganizerRegComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizerRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
