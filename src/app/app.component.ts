import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WidgetComponent } from './components/widget/widget.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterModule, WidgetComponent],
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
