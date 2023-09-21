import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AddressComponent } from './components/address/address.component';
import { FormGroup, ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, AddressComponent],
})
export class AppComponent implements OnInit {
  form = new FormGroup({
    displayName: new FormControl(''),
  });

  constructor() {}

  ngOnInit(): void {}

  submit() {
    console.log(this.form.value);
    this.form.reset();
  }
}
