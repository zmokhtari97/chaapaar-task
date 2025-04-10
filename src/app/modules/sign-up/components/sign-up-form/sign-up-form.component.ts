import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';

import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NgClass } from '@angular/common';

type FormType = {
  identifier: FormControl<string>;
  username: FormControl<string>;
  first_name: FormControl<string>;
  last_name: FormControl<string>;
  display_name: FormControl<string>;
  newPassword: FormControl<string>;
  confirmPassword: FormControl<string>;
};
@Component({
  selector: 'app-sign-up-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NzButtonModule,
    NzInputModule,
    NzToolTipModule,
    NgClass,
  ],
  templateUrl: './sign-up-form.component.html',
  styleUrl: './sign-up-form.component.scss',
})
export class SignUpFormComponent implements OnInit {
  passwordVisible = false;
  fields = [
    {
      '@type': '.input.TextField',
      name: 'identifier',
      title: 'Mobile number or email',
      description: 'Enter your mobile number or email',
      errorMessage: 'The entered identifier is not valid',
      required: true,
      minLength: 3,
      maxLength: 40,
      type: 'TEXT',
    },
    {
      '@type': '.input.TextField',
      name: 'username',
      title: 'Username',
      description:
        'The entry argument must have English Lowercase Letters and minimum 5 characters and maximum 15 characters.',
      descriptionShowType: 'TOOLTIP',
      errorMessage:
        'username must have Lowercase and minimum 5characters and maximum 15 characters',
      required: true,
      regex: '^[a-z][a-z0-9]{4,}$',
      minLength: 5,
      maxLength: 15,
      type: 'TEXT',
    },
    {
      '@type': '.input.TextField',
      name: 'first_name',
      title: 'Name',
      description: 'Enter name',
      errorMessage:
        'First name must be english with at least two characters and maximum 30 characters.',
      required: true,
      regex: '^[a-zA-Z]+$',
      minLength: 2,
      maxLength: 30,
      type: 'TEXT',
    },
    {
      '@type': '.input.TextField',
      name: 'last_name',
      title: 'Last name',
      description: 'Enter last name',
      errorMessage: 'Last name must be english with at least two characters.',
      required: true,
      regex: '^[a-zA-Z]+$',
      minLength: 2,
      maxLength: 30,
      type: 'TEXT',
    },
    {
      '@type': '.input.TextField',
      name: 'display_name',
      title: 'Display Name',
      errorMessage:
        'Display Name must be minimum 2 characters and maximum 50 characters',
      required: true,
      minLength: 2,
      maxLength: 50,
      type: 'TEXT',
    },
    {
      '@type': '.input.NewPasswordField',
      name: 'newPassword',
      title: 'Password',
      info: 'The password must be a combination of lowercase letters, uppercase letters and English numbers and special characters such as (&, $, #, @, ^, % and...) and at least 8 and at most 20 characters.',
      errorMessage: 'The entered password is not acceptable.',
      required: true,
      regex:
        '^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^!&-_+=()])(?=\\S+$).{8,20}$',
      minLength: 8,
      maxLength: 20,
      showConfirmPassword: true,
      type: 'NEW_PASSWORD',
    },
  ];

  form: FormGroup<FormType> = new FormGroup(
    this.signUpFormFields(),
    passwordMatchValidator
  );

  ngOnInit(): void {}

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

  signUpFormFields(): FormType {
    let finalFields = {};
    this.fields.forEach((field) => {
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
    });

    return finalFields as FormType;
  }
}

export const passwordMatchValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const password = control.get('password')?.value;
  const confirmPassword = control.get('confirmPassword')?.value;

  return password === confirmPassword ? null : { mismatch: true };
};
