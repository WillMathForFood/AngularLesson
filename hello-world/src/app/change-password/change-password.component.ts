import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, NG_ASYNC_VALIDATORS } from '@angular/forms';
import { ChangePasswordValidators } from './change-password.Validators';

@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
  form = new FormGroup({
    oldPassword: new FormControl('', Validators.required, ChangePasswordValidators.isValid),
    newPassword: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required)
  }, ChangePasswordValidators.confirmMatch);

  get oldPassword() {
    return this.form.get('oldPassword');
  }

  get newPassword() {
    return this.form.get('newPassword');
  }

  get confirmPassword() {
    return this.form.get('confirmPassword');
  }
}
