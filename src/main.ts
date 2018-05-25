import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
    enableProdMode();
}

import { loadMessages, locale } from 'devextreme/localization';

const zhMessages = require(
    `devextreme/localization/messages/zh.json`
);
loadMessages(zhMessages);
locale('zh');

platformBrowserDynamic().bootstrapModule(AppModule)
    .then(val => {
        // console.log('app bootstrap');
    })
    .catch(err => {
        console.error(err);
    });
