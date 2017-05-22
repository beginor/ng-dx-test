import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DxButtonModule, DxDataGridModule } from 'devextreme-angular'

import { AppComponent }   from './app.component';
import { RouteComponents, AppRoutes } from './app.routes';

@NgModule({
    declarations: [
        AppComponent,
        RouteComponents
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        JsonpModule,
        NgbModule.forRoot(),
        DxButtonModule,
        DxDataGridModule,
        AppRoutes
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
