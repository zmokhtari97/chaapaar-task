import { Component } from '@angular/core';
import { ContentLayoutComponent } from '../../../../layout';
import { SignUpFormComponent } from '../../components/sign-up-form/sign-up-form.component';
@Component({
  selector: 'app-sign-up-page',
  standalone: true,
  imports: [ContentLayoutComponent, SignUpFormComponent],
  templateUrl: './sign-up-page.component.html',
  styleUrl: './sign-up-page.component.scss',
})
export class SignUpPageComponent {}
