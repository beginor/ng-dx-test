import { Component, OnInit } from '@angular/core';

import { loadMessages, locale } from 'devextreme/localization';
import { localeMessages, localeName } from 'dx-locale-zh-cn';

@Component({
    moduleId: module.id,
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    public ngOnInit(): void {
        loadMessages(localeMessages);
        locale(localeName);
    }

}
