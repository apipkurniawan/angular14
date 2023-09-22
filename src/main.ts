import {
  enableProdMode,
  importProvidersFrom,
  ErrorHandler,
} from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { routes } from './app/app-routing.module';
import { CustomErrorHandler } from './app/utils/custom-error-handle.service';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      RouterModule.forRoot(routes),
      HttpClientModule,
      BrowserAnimationsModule,
      MatSnackBarModule
    ),
    {
      provide: ErrorHandler,
      useClass: CustomErrorHandler,
    },
  ],
}).catch((err) => console.error(err));
