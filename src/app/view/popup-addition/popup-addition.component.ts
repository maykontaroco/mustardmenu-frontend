import {Component} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-popup-addition',
  templateUrl: './popup-addition.component.html',
  styleUrls: ['./popup-addition.component.css']
})
export class PopupAdditionComponent {

  form: FormGroup;

  constructor(public dialogRef: MatDialogRef<PopupAdditionComponent>, private fb: FormBuilder) {
    this.form = this.fb.group({
      additionValue: ['', Validators.required],
    });
  }

  applyAddition() {
    this.dialogRef.close(parseFloat(this.form.value.additionValue));
  }
}
