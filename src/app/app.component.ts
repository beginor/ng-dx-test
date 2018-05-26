import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { loadMessages, locale } from 'devextreme/localization';
import { environment } from '../environments/environment';

@Component({
    moduleId: module.id,
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    public collapsed = true;

    constructor(private http: HttpClient) { }

    public async ngOnInit(): Promise<void> {
        const dxLocale = environment.dxLocale;
        const url = `./dx-locales/${dxLocale}.json`;
        const messages = await this.http.get(url).toPromise();
        loadMessages(messages);
        locale(environment.dxLocale);
    }

}
