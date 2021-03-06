import { Component } from "@angular/core";
import { FormBuilder, FormGroup, AbstractControl, Validators, FormControl } from "@angular/forms";

@Component({
  selector: 'ng-book-form',
  template: `
  <div class="ui raised segment">
    <h2 class="ui header">Demo Form: Sku</h2>
    <form 
      [formGroup]="myForm" 
      (ngSubmit)="onSubmit(myForm.value)" 
      class="ui form">
      <div class="field" [class.error]="!sku.valid && sku.touched">
        <label for="skuInput">SKU</label>
        <input 
          type="text" 
          id="skuInput" 
          placeholder="SKU" 
          [formControl]="myForm.controls['sku']">
        <div *ngIf="!sku.valid"
          class="ui error message">SKU is invalid</div>   
        <div *ngIf="sku.hasError('required')"
          class="ui error message">SKU is required</div>   
      </div>
      
      <button type="submit" class="ui button">Submit</button>
    </form>
  </div>
  `
})

export class NgBookFormComponent {
  myForm: FormGroup;
  sku: AbstractControl;

  constructor(fb: FormBuilder){
    this.myForm = fb.group({
      'sku': ['', Validators.compose([Validators.required, this.skuValidator])]
    });

    this.sku = this.myForm.controls['sku']

    this.sku.valueChanges.subscribe(
      (value: string) => {
        console.log('sku changed to:', value);
      }
    )

    this.myForm.valueChanges.subscribe(
      (form: any) => {
        console.log('form changed to:', form);
      }
    )
  }

  onSubmit(form: any): void{
    console.log(form);
  }

  skuValidator(control: FormControl): { [s: string]: boolean }{
    if (!control.value.match(/^123/)) {
      return {invalidSku: true}
    }
  }
}
