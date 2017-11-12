import {
    animate, state, style, transition, trigger
} from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import 'rxjs/add/operator/toPromise';

@Component({
    moduleId: module.id,
    selector: 'grid',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.scss'],
    animations: [
        trigger('state', [
            transition(':enter', [
                style({
                    opacity: 0
                }),
                animate(300)
            ]),
            transition(':leave', [
                animate(300),
                style({
                    opacity: 0
                })
            ])
        ])
    ]
})
export class GridComponent implements OnInit {

    public dataSource: any[] = [];

    public state: any;

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
