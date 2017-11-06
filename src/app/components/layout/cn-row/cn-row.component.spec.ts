import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CnRowComponent } from './cn-row.component';

describe('CnRowComponent', () => {
  let component: CnRowComponent;
  let fixture: ComponentFixture<CnRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CnRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CnRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
