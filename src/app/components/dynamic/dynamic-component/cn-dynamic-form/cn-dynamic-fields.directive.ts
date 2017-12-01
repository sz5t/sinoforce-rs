import {
  ComponentFactoryResolver, ComponentRef, Directive, Input, OnChanges, OnInit, Type,
  ViewContainerRef
} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {IField} from '../../../form/form-models/IField';
import {CnFormButtonComponent} from '../../../form/cn-form-button/cn-form-button.component';
import {CnFormInputComponent} from '../../../form/cn-form-input/cn-form-input.component';
import {CnFormSelectComponent} from '../../../form/cn-form-select/cn-form-select.component';
import {CnFormSelect2Component} from '../../../form/cn-form-select2/cn-form-select2.component';
import {CnFormRadioComponent} from '../../../form/cn-form-radio/cn-form-radio.component';
import {CnFormCheckboxComponent} from '../../../form/cn-form-checkbox/cn-form-checkbox.component';
import {CnFormTextareaComponent} from '../../../form/cn-form-textarea/cn-form-textarea.component';
import {IFieldConfig} from '../../../form/form-models/IFieldConfig';
import {CnDatePickerComponent} from '../../../form/cn-date-picker/cn-date-picker.component';
import {CnDateRangePickerComponent} from '../../../form/cn-date-range-picker/cn-date-range-picker.component';
import {CnDatetimePickerComponent} from '../../../form/cn-datetime-picker/cn-datetime-picker.component';

const components: { [type: string]: Type<IField> } = {
  button: CnFormButtonComponent,
  input: CnFormInputComponent,
  select: CnFormSelectComponent,
  select2: CnFormSelect2Component,
  radio: CnFormRadioComponent,
  checkbox: CnFormCheckboxComponent,
  textarea: CnFormTextareaComponent,
  datepicker: CnDatePickerComponent,
  daterangepicker: CnDateRangePickerComponent,
  datetimepicker: CnDatetimePickerComponent,
};

@Directive({
  selector: '[cnDynamicFields]'
})
export class CnDynamicFieldsDirective implements IField, OnChanges, OnInit {
  @Input() config: IFieldConfig;
  @Input() group: FormGroup;
  @Input() submitValid: boolean;
  component: ComponentRef<IField>;

  constructor(private resolver: ComponentFactoryResolver,
              private container: ViewContainerRef) {
  }

  ngOnChanges() {
    if (this.component) {
      this.component.instance.config = this.config;
      this.component.instance.group = this.group;
      this.component.instance.submitValid = this.submitValid;
    }
  }

  ngOnInit() {
    if (!components[this.config.type]) {
      const supportedTypes = Object.keys(components).join(', ');
      throw new Error(
        `Trying to use an unsupported type (${this.config.type}).Supported types: ${supportedTypes}`
      );
    }
    const comp = this.resolver.resolveComponentFactory<IField>(components[this.config.type]);
    this.component = this.container.createComponent(comp);
    this.component.instance.config = this.config;
    this.component.instance.group = this.group;
    this.component.instance.submitValid = this.submitValid;
  }
}
