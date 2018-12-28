import { trigger, transition, useAnimation } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { fadeIn } from 'ng-animations';

import { GridService } from './grid.service';

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

    constructor(
        private http: HttpClient,
        public vm: GridService
    ) { }

    public async ngOnInit(): Promise<void> {
        try {
            await this.vm.loadData();
        }
        catch (ex) {
            console.error(ex);
        }
    }

}
