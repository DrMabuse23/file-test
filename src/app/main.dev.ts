import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule, Mode } from './app.module';

window.addEventListener("ident", function(e: CustomEvent) {
  Mode.mode = e.detail;
  platformBrowserDynamic().bootstrapModule(AppModule);
});

