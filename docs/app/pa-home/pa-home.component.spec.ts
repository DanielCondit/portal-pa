import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaHomeComponent } from './pa-home.component';

describe('PaHomeComponent', () => {
  let component: PaHomeComponent;
  let fixture: ComponentFixture<PaHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
