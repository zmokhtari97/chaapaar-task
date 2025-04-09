import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IntroductionPageComponent } from './introduction-page.component';
import { provideRouter } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';

describe('IntroductionPageComponent', () => {
  let component: IntroductionPageComponent;
  let fixture: ComponentFixture<IntroductionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntroductionPageComponent, NgOptimizedImage, NzButtonModule],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(IntroductionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
