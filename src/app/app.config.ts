import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';

import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const APP_CONFIG: ApplicationConfig = {
  providers: [
    provideHttpClient(), provideAnimationsAsync()
  ]
}; 
