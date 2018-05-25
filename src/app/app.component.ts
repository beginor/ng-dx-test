import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    public collapsed = true;

    public ngOnInit(): void {
    }


}
