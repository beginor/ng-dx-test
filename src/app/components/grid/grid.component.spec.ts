import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { GridComponent } from './grid.component';

describe('GridComponent', () => {

    let fixture: ComponentFixture<GridComponent>;
    let target: GridComponent;
    let targetEl: HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                NoopAnimationsModule,
                RouterTestingModule
            ],
            declarations: [
                GridComponent
            ]
        }).compileComponents();
        // create test target;
        fixture = TestBed.createComponent(GridComponent);
        target = fixture.componentInstance;
        targetEl = fixture.debugElement.nativeElement;
    }));

    it('should create GridComponent', async(() => {
        expect(target).toBeTruthy();
    }));

});
