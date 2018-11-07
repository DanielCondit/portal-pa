import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipFormComponent } from './equip-form.component';

describe('EquipFormComponent', () => {
  let component: EquipFormComponent;
  let fixture: ComponentFixture<EquipFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
