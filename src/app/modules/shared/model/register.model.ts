import { FormControl } from '@angular/forms';

export type FormType = {
  identifier: FormControl<string>;
  username: FormControl<string>;
  first_name: FormControl<string>;
  last_name: FormControl<string>;
  display_name: FormControl<string>;
  newPassword: FormControl<string>;
  confirmPassword: FormControl<string>;
};

export interface registerFormModel {
  description: string;
  errorMessage: string;
  maxLength: number;
  minLength: number;
  name: string;
  required: boolean;
  title: string;
  type: string;
  regex: string;
  descriptionShowType: string;
  showConfirmPassword: boolean;
}
