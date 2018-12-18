import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexFooterComponent } from './flex-footer.component';

describe('FlexFooterComponent', () => {
  let component: FlexFooterComponent;
  let fixture: ComponentFixture<FlexFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlexFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
