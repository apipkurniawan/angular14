import { Component, inject, OnInit, OnDestroy, Input } from '@angular/core';
import {
  FormGroup,
  ReactiveFormsModule,
  FormControl,
  ControlContainer,
} from '@angular/forms';
@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  standalone: true,
  imports: [ReactiveFormsModule],
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: () => inject(ControlContainer, { skipSelf: true }),
    },
  ],
})
export class AddressComponent implements OnInit, OnDestroy {
  @Input() controlKey = '';
  @Input() label = '';
  parentContainer = inject(ControlContainer);

  get parentFormGroup() {
    return this.parentContainer.control as FormGroup;
  }

  ngOnInit(): void {
    this.parentFormGroup.addControl(
      this.controlKey,
      new FormGroup({
        street: new FormControl(''),
        zipCode: new FormControl(''),
      })
    );
  }

  ngOnDestroy(): void {
    this.parentFormGroup.removeControl(this.controlKey);
  }
}
