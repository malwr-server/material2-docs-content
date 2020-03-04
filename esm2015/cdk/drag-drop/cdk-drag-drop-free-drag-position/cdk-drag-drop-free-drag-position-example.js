/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/cdk/drag-drop/cdk-drag-drop-free-drag-position/cdk-drag-drop-free-drag-position-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/drag-drop";
/**
 * \@title Programmatically setting the free drag position
 */
export class CdkDragDropFreeDragPositionExample {
    constructor() {
        this.dragPosition = { x: 0, y: 0 };
    }
    /**
     * @return {?}
     */
    changePosition() {
        this.dragPosition = { x: this.dragPosition.x + 50, y: this.dragPosition.y + 50 };
    }
}
CdkDragDropFreeDragPositionExample.decorators = [
    { type: Component, args: [{
                selector: 'cdk-drag-drop-free-drag-position-example',
                templateUrl: 'cdk-drag-drop-free-drag-position-example.html',
                styleUrls: ['cdk-drag-drop-free-drag-position-example.css'],
            },] },
];
/** @nocollapse */ CdkDragDropFreeDragPositionExample.ɵfac = function CdkDragDropFreeDragPositionExample_Factory(t) { return new (t || CdkDragDropFreeDragPositionExample)(); };
/** @nocollapse */ CdkDragDropFreeDragPositionExample.ɵcmp = i0.ɵɵdefineComponent({ type: CdkDragDropFreeDragPositionExample, selectors: [["cdk-drag-drop-free-drag-position-example"]], decls: 5, vars: 1, consts: [[3, "click"], ["cdkDrag", "", 1, "example-box", 3, "cdkDragFreeDragPosition"]], template: function CdkDragDropFreeDragPositionExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "p");
        i0.ɵɵelementStart(1, "button", 0);
        i0.ɵɵlistener("click", function CdkDragDropFreeDragPositionExample_Template_button_click_1_listener() { return ctx.changePosition(); });
        i0.ɵɵtext(2, "Change element position");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 1);
        i0.ɵɵtext(4, " Drag me around\n");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("cdkDragFreeDragPosition", ctx.dragPosition);
    } }, directives: [i1.CdkDrag], styles: [".example-box[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  border: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  cursor: move;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  background: #fff;\n  border-radius: 4px;\n  position: relative;\n  z-index: 1;\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),\n              0 2px 2px 0 rgba(0, 0, 0, 0.14),\n              0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n.example-box[_ngcontent-%COMP%]:active {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CdkDragDropFreeDragPositionExample, [{
        type: Component,
        args: [{
                selector: 'cdk-drag-drop-free-drag-position-example',
                templateUrl: 'cdk-drag-drop-free-drag-position-example.html',
                styleUrls: ['cdk-drag-drop-free-drag-position-example.css'],
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    CdkDragDropFreeDragPositionExample.prototype.dragPosition;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRyYWctZHJvcC1mcmVlLWRyYWctcG9zaXRpb24tZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9kcmFnLWRyb3AvY2RrLWRyYWctZHJvcC1mcmVlLWRyYWctcG9zaXRpb24vY2RrLWRyYWctZHJvcC1mcmVlLWRyYWctcG9zaXRpb24tZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9kcmFnLWRyb3AvY2RrLWRyYWctZHJvcC1mcmVlLWRyYWctcG9zaXRpb24vY2RrLWRyYWctZHJvcC1mcmVlLWRyYWctcG9zaXRpb24tZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7O0FBVXhDLE1BQU0sT0FBTyxrQ0FBa0M7SUFML0M7UUFNRSxpQkFBWSxHQUFHLEVBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFDLENBQUM7S0FLN0I7Ozs7SUFIQyxjQUFjO1FBQ1osSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBQyxDQUFDO0lBQ2pGLENBQUM7OztZQVZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsMENBQTBDO2dCQUNwRCxXQUFXLEVBQUUsK0NBQStDO2dCQUM1RCxTQUFTLEVBQUUsQ0FBQyw4Q0FBOEMsQ0FBQzthQUM1RDs7b0hBQ1ksa0NBQWtDO3VFQUFsQyxrQ0FBa0M7UUNWL0MseUJBQ0U7UUFBQSxpQ0FBbUM7UUFBM0IsK0dBQVMsb0JBQWdCLElBQUM7UUFBQyx1Q0FBdUI7UUFBQSxpQkFBUztRQUNyRSxpQkFBSTtRQUVKLDhCQUNFO1FBQUEsaUNBQ0Y7UUFBQSxpQkFBTTs7UUFGMkIsZUFBd0M7UUFBeEMsMERBQXdDOztrRERNNUQsa0NBQWtDO2NBTDlDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsMENBQTBDO2dCQUNwRCxXQUFXLEVBQUUsK0NBQStDO2dCQUM1RCxTQUFTLEVBQUUsQ0FBQyw4Q0FBOEMsQ0FBQzthQUM1RDs7OztJQUVDLDBEQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgUHJvZ3JhbW1hdGljYWxseSBzZXR0aW5nIHRoZSBmcmVlIGRyYWcgcG9zaXRpb25cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2RrLWRyYWctZHJvcC1mcmVlLWRyYWctcG9zaXRpb24tZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnY2RrLWRyYWctZHJvcC1mcmVlLWRyYWctcG9zaXRpb24tZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2Nkay1kcmFnLWRyb3AtZnJlZS1kcmFnLXBvc2l0aW9uLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIENka0RyYWdEcm9wRnJlZURyYWdQb3NpdGlvbkV4YW1wbGUge1xuICBkcmFnUG9zaXRpb24gPSB7eDogMCwgeTogMH07XG5cbiAgY2hhbmdlUG9zaXRpb24oKSB7XG4gICAgdGhpcy5kcmFnUG9zaXRpb24gPSB7eDogdGhpcy5kcmFnUG9zaXRpb24ueCArIDUwLCB5OiB0aGlzLmRyYWdQb3NpdGlvbi55ICsgNTB9O1xuICB9XG59XG4iLCI8cD5cbiAgPGJ1dHRvbiAoY2xpY2spPVwiY2hhbmdlUG9zaXRpb24oKVwiPkNoYW5nZSBlbGVtZW50IHBvc2l0aW9uPC9idXR0b24+XG48L3A+XG5cbjxkaXYgY2xhc3M9XCJleGFtcGxlLWJveFwiIGNka0RyYWcgW2Nka0RyYWdGcmVlRHJhZ1Bvc2l0aW9uXT1cImRyYWdQb3NpdGlvblwiPlxuICBEcmFnIG1lIGFyb3VuZFxuPC9kaXY+XG4iXX0=