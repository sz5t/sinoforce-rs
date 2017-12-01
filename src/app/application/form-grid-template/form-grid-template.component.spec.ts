import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FormGridTemplateComponent} from './form-grid-template.component';

describe('FormGridTemplateComponent', () => {
  let component: FormGridTemplateComponent;
  let fixture: ComponentFixture<FormGridTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormGridTemplateComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormGridTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
