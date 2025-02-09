import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideClientHydration } from '@angular/platform-browser';
import { provideServerRouting } from '@angular/ssr';
import { routes, serverRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideServerRouting(serverRoutes),
    provideRouter(routes),
    provideClientHydration(),
  ],
};
