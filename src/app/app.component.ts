import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { WidgetComponent } from './widget/widget.component';
import { WetherContentComponent } from './widget/wether-content.component';
import { VelocityContentComponent } from './widget/velocity-content.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatToolbarModule,
    WidgetComponent,
    VelocityContentComponent,
    WetherContentComponent,
  ],
  template: `
    <mat-toolbar color="primary">
      <span>My App</span>
    </mat-toolbar>
    <main class="content">
      <app-widget title="Wether">
        <app-wether-content></app-wether-content>
      </app-widget>
      <app-widget title="Velocity">
        <app-velocity-content></app-velocity-content>
      </app-widget>
      <app-widget title="Anything">
        <p>Any content</p>
      </app-widget>
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
