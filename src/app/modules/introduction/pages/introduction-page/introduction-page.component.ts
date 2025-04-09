import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-introduction-page',
  standalone: true,
  imports: [RouterLink, NgOptimizedImage, NzButtonModule],
  templateUrl: './introduction-page.component.html',
  styleUrl: './introduction-page.component.scss',
})
export class IntroductionPageComponent {}
