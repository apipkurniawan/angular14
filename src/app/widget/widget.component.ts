import { Component } from '@angular/core';
import { WidgetBase } from './widget-base';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-widget',
  standalone: true,
  imports: [MatDividerModule],
  template: `
    <div class="header">
      <h1>{{ title }}</h1>
      <button mat-stroked-button (click)="exportJsonHandler()">
        Export as JSON
      </button>
    </div>
    <mat-divider></mat-divider>
    <ng-content></ng-content>
  `,
  styles: [
    `
      :host {
        display: block;
        border: #f0ebeb solid 1px;
        border-radius: 5px;
        padding: 15px;
        background-color: #fafafa;
        width: 400px;
        margin-left: 20px;
      }
      .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    `,
  ],
})
export class WidgetComponent extends WidgetBase {
  constructor() {
    super();
  }

  // liskov-substitution-principle : memanggil function menggunakan inheritance class
  exportJsonHandler(): void {
    super.onExportJson();
    console.log('... aditional logic ...');
    // ... but it should not break a contract with Base class
  }
}