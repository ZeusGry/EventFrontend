import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOdUsers } from './list-od-users.component';

describe('BoardAdminComponent', () => {
  let component: ListOdUsers;
  let fixture: ComponentFixture<ListOdUsers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOdUsers ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOdUsers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
