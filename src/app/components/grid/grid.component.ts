import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'grid',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

    public dataSource: any[] = [];

    constructor(
        private http: HttpClient
    ) { }

    public ngOnInit() {
        this.http.get<any[]>(
            'http://gishub.gdepb.gov.cn/rest/datasources/3f49c0a95ec945b5b92b437846a29243/data'
        ).subscribe(data => {
            this.dataSource = data;
        });
    }

}
