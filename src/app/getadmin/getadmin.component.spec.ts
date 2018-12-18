import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetadminComponent } from './getadmin.component';

describe('GetadminComponent', () => {
  let component: GetadminComponent;
  let fixture: ComponentFixture<GetadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
