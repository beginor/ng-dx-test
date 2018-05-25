import { trigger, transition, useAnimation } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { fadeIn } from '../../animations';

@Component({
    moduleId: module.id,
    selector: 'app-grid',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.scss'],
    animations: [
        trigger('fadeIn', [transition(':enter', useAnimation(fadeIn))])
    ],
    host: { '[@fadeIn]': '' }
})
export class GridComponent implements OnInit {

    public dataSource: any[] = [];

    constructor(
        private http: HttpClient
    ) { }

    public ngOnInit() {
        const id = '3f49c0a95ec945b5b92b437846a29243';
        this.http.get<any[]>(
            `http://gishub.gdepb.gov.cn/rest/datasources/${id}/data`
        ).toPromise().then(data => {
            this.dataSource = data;
        }).catch(ex => {
            console.error(ex);
        });
    }

}
