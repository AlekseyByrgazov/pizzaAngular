import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';

import { provideHttpClient } from '@angular/common/http';

export const APP_CONFIG: ApplicationConfig = {
  providers: [
    provideHttpClient()
  ]
}; 
