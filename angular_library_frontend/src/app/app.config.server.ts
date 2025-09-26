import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { OCEAN_THEME } from '../../projects/ocean-ui/src/lib/theme/ocean-theme.tokens';
import { defaultOceanTheme } from '../../projects/ocean-ui/src/lib/theme/ocean-theme';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    { provide: OCEAN_THEME, useValue: defaultOceanTheme }
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
