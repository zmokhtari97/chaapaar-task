import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutSidebarComponent } from './layout';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LayoutSidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'chaapaar-task';
}
