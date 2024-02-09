import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';

const bootstrap = () => bootstrapApplication(AppComponent, config);
import 'localstorage-polyfill'

global['localStorage'] = localStorage;
export default bootstrap;
