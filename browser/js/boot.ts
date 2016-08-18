import {bootstrap}    from 'angular2/platform/browser';
import {AppComponent} from './components/app.component.js';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ComponentRef} from 'angular2/core';
import {appInjector} from './app-injector.js';


bootstrap(AppComponent, [
	ROUTER_PROVIDERS,
	HTTP_PROVIDERS
])
  .then((appRef: ComponentRef) => {
    appInjector(appRef.injector);
  });
