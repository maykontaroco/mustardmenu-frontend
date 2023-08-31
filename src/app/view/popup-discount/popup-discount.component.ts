import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-popup-discount',
  templateUrl: './popup-discount.component.html',
  styleUrls: ['./popup-discount.component.css']
})
export class PopupDiscountComponent {

  form: FormGroup;

  constructor(public dialogRef: MatDialogRef<PopupDiscountComponent>, private fb: FormBuilder) {
    this.form = this.fb.group({
      additionValue: ['', Validators.required],
    });
  }

  applyDiscount() {
    this.dialogRef.close(parseFloat(this.form.value.additionValue));
  }
}
