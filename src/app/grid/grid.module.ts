import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DxDataGridModule } from 'devextreme-angular/ui/data-grid';

import { GridRoutingModule } from './grid-routing.module';
import { GridComponent } from './grid/grid.component';

@NgModule({
  declarations: [
      GridComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    DxDataGridModule,
    GridRoutingModule
  ]
})
export class GridModule { }
