import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Reloadable, WidgetContent } from './widget-content';
import { RELOADABLE_CONTENT } from './widget-content.token';

@Component({
  selector: 'app-wether-content',
  standalone: true,
  imports: [MatIconModule],
  template: `
    <h5>Currently</h5>
    <section class="widget-content">
      <mat-icon class="widget-icon">wb_sunny</mat-icon>
      <div class="value">+25</div>
    </section>
  `,
  styleUrls: ['./widget-content.scss'],
  providers: [
    { provide: RELOADABLE_CONTENT, useExisting: WetherContentComponent },
  ],
})
export class WetherContentComponent implements WidgetContent, Reloadable {
  // interface segregation principle : mengimplementasi sebuah interface
  id: string = '';
  loading: boolean = false;

  reload(): void {
    console.log('...reloading is happening...');
  }
}
