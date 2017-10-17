import {AfterViewInit, Component, Input, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {CnDynamicFormComponent} from "../../form/cn-dynamic-form.component";
import {IFieldConfig} from "../../form/form-models/IFieldConfig";

@Component({
  selector: 'cn-form-dialog',
  encapsulation:ViewEncapsulation.None,
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.css']
})
export class FormDialogComponent implements AfterViewInit {
  @ViewChild(CnDynamicFormComponent) form: CnDynamicFormComponent;
  @Input() title:string;
  @Input() config:IFieldConfig[];
  ngAfterViewInit(){
    let previousValid = this.form.valid;
    this.form.changes.subscribe(() =>{
      if(this.form.valid !== previousValid){
        previousValid = this.form.valid;
        this.form.setDisabled('submit', !previousValid);
      }
    });
    this.form.setDisabled('submit',true);
    //this.form.setValue('name', '');
  }
  submit(value: {[name:string]:any}){
    console.log(value);
  }

}
