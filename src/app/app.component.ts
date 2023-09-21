import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AddressComponent } from './components/address/address.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterModule, AddressComponent],
})
export class AppComponent {}
