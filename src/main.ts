import {
  enableProdMode,
  importProvidersFrom,
  ErrorHandler,
} from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { routes } from './app/app-routing.module';
import { CustomErrorHandler } from './app/utils/custom-error-handle.service';
import { GlobalHttpErrorHandler } from './app/interceptors/global-http-error-handler.interceptor';

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
    {
      provide: HTTP_INTERCEPTORS,
      useClass: GlobalHttpErrorHandler,
      multi: true,
    },
  ],
}).catch((err) => console.error(err));
