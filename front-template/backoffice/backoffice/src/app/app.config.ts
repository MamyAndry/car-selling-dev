import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(HttpClientModule,FormsModule,MdbTooltipModule,BrowserAnimationsModule)
  ]
};
