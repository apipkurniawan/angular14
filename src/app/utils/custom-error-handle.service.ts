import { Injectable, ErrorHandler, NgZone } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class CustomErrorHandler implements ErrorHandler {
  constructor(private snackbar: MatSnackBar, private zone: NgZone) {}

  handleError(error: any): void {
    this.zone.run(() => {
      this.snackbar.open(
        'Error was detected! We are already working on it!',
        'Close',
        { duration: 2000 }
      );
    });
    console.warn('Caught by Custom Error Handler : ', error);
  }
}
