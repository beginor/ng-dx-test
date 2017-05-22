import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    moduleId: module.id,
    selector: 'grid',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

    dataSource: any[] = [];

    constructor(
        private http: Http
    ) { }

    ngOnInit() {
        this.http.get(
            'http://gishub.gdepb.gov.cn/rest/datasources/3f49c0a95ec945b5b92b437846a29243/data'
        ).subscribe(response => {
            this.dataSource = response.json();
        });
    }

}
