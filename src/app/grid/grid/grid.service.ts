import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class GridService {

    private id = '3f49c0a95ec945b5b92b437846a29243';

    public dataSource: any[] = [];

    constructor(
        private http: HttpClient
    ) {
        this.http.get('http://gishub.gdepb.gov.cn/rest/request-token')
            .toPromise()
            .catch(ex => {
                console.error(ex);
            });
    }

    public async loadData(): Promise<void> {
        const data = await this.http.get<any[]>(
            `http://gishub.gdepb.gov.cn/rest/datasources/${this.id}/data`
        ).toPromise();
        this.dataSource = data;
    }
}
