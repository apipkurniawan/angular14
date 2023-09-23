import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { WidgetComponent } from './widget.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatIconModule, MatToolbarModule, WidgetComponent],
  template: `
    <mat-toolbar color="primary">
      <span>My App</span>
    </mat-toolbar>
    <main class="content">
      <!-- single responsibility principle : memisahkan component menjadi component terpisah -->
      <app-widget></app-widget>
    </main>
  `,
  styles: [
    `
      .content {
        background-color: #fff;
        padding: 2rem;
        height: calc(100vh - 64px);
        display: flex;
        box-sizing: border-box;
        justify-content: center;
        align-items: center;
      }
    `,
  ],
})
export class AppComponent {}
