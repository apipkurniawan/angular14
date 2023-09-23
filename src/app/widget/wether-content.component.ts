import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-wether-content',
  standalone: true,
  imports: [MatIconModule],
  template: ` <h5>Currently</h5>
    <section class="widget-content">
      <mat-icon class="widget-icon">wb_sunny</mat-icon>
      <div class="value">+25</div>
    </section>`,
  styleUrls: ['./widget-content.scss'],
})
export class WetherContentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
