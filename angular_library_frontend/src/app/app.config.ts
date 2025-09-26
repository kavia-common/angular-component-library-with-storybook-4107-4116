import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { OCEAN_THEME } from '../../projects/ocean-ui/src/lib/theme/ocean-theme.tokens';
import { defaultOceanTheme } from '../../projects/ocean-ui/src/lib/theme/ocean-theme';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    { provide: OCEAN_THEME, useValue: defaultOceanTheme }
  ]
};
