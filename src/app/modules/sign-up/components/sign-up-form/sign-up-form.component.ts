import { Component, inject, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Subscription } from 'rxjs';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NgClass } from '@angular/common';
import { FormType, registerFormModel, RegisterService } from '../../../shared';

@Component({
  selector: 'app-sign-up-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NzButtonModule,
    NzInputModule,
    NzToolTipModule,
    NgClass,
    NzSpinModule,
  ],
  templateUrl: './sign-up-form.component.html',
  styleUrl: './sign-up-form.component.scss',
})
export class SignUpFormComponent implements OnInit {
  passwordVisible = false;
  subscription!: Subscription;

  registerService = inject(RegisterService);
  fields: registerFormModel[] = [];

  form!: FormGroup<FormType>;

  ngOnInit(): void {
    this.getFormData();
  }

  getFormData() {
    this.subscription = this.registerService
      .getRegisterForm()
      .subscribe((resp: any) => {
        this.fields = resp.form.fields;

        this.initForm();
      });
  }

  initForm() {
    this.form = new FormGroup(this.signUpFormFields(), passwordMatchValidator);
  }

  signUpFormFields(): FormType {
    let finalFields = {};
    this.fields.forEach((field: registerFormModel) => {
      let fieldValidators = [];
      if ('minLength' in field) {
        fieldValidators.push(Validators.minLength(field.minLength));
      }
      if ('maxLength' in field) {
        fieldValidators.push(Validators.maxLength(field.maxLength));
      }
      if ('required' in field) {
        fieldValidators.push(Validators.required);
      }
      if ('regex' in field) {
        fieldValidators.push(Validators.pattern(field.regex!));
      }
      finalFields = {
        ...finalFields,
        [field.name]: new FormControl('', {
          nonNullable: true,
          validators: fieldValidators,
        }),
      };

      if (field.showConfirmPassword) {
        finalFields = {
          ...finalFields,
          confirmPassword: new FormControl('', {
            nonNullable: true,
            validators: [Validators.required],
          }),
        };
      }
    });
    return finalFields as FormType;
  }

  onSubmit(): void {
    if (this.form.valid) {
    } else {
      this.form.markAllAsTouched();
      this.form.markAsDirty();
    }
  }

  onReset(): void {
    this.form.reset();
  }
}

export const passwordMatchValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const password = control.get('newPassword')?.value;
  const confirmPassword = control.get('confirmPassword')?.value;
  return password === confirmPassword ? null : { mismatch: true };
};
