/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/stepper/stepper-editable/stepper-editable-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/material/stepper";
import * as i4 from "@angular/material/form-field";
import * as i5 from "@angular/material/input";
function StepperEditableExample_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, "Fill out your name");
} }
function StepperEditableExample_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, "Fill out your address");
} }
function StepperEditableExample_ng_template_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, "Done");
} }
/**
 * \@title Stepper with editable steps
 */
export class StepperEditableExample {
    /**
     * @param {?} _formBuilder
     */
    constructor(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.isEditable = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', Validators.required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', Validators.required]
        });
    }
}
StepperEditableExample.decorators = [
    { type: Component, args: [{
                selector: 'stepper-editable-example',
                templateUrl: 'stepper-editable-example.html',
                styleUrls: ['stepper-editable-example.css']
            },] },
];
/** @nocollapse */
StepperEditableExample.ctorParameters = () => [
    { type: FormBuilder }
];
/** @nocollapse */ StepperEditableExample.ɵfac = function StepperEditableExample_Factory(t) { return new (t || StepperEditableExample)(i0.ɵɵdirectiveInject(i1.FormBuilder)); };
/** @nocollapse */ StepperEditableExample.ɵcmp = i0.ɵɵdefineComponent({ type: StepperEditableExample, selectors: [["stepper-editable-example"]], decls: 35, vars: 7, consts: [["mat-raised-button", "", 3, "click"], ["linear", ""], ["stepper", ""], [3, "stepControl", "editable"], [3, "formGroup"], ["matStepLabel", ""], ["matInput", "", "formControlName", "firstCtrl", "placeholder", "Last name, First name", "required", ""], ["mat-button", "", "matStepperNext", ""], ["matInput", "", "formControlName", "secondCtrl", "placeholder", "Ex. 1 Main St, New York, NY", "required", ""], ["mat-button", "", "matStepperPrevious", ""], ["mat-button", "", 3, "click"]], template: function StepperEditableExample_Template(rf, ctx) { if (rf & 1) {
        const _r4 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "button", 0);
        i0.ɵɵlistener("click", function StepperEditableExample_Template_button_click_0_listener() { return ctx.isEditable = !ctx.isEditable; });
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "mat-horizontal-stepper", 1, 2);
        i0.ɵɵelementStart(4, "mat-step", 3);
        i0.ɵɵelementStart(5, "form", 4);
        i0.ɵɵtemplate(6, StepperEditableExample_ng_template_6_Template, 1, 0, "ng-template", 5);
        i0.ɵɵelementStart(7, "mat-form-field");
        i0.ɵɵelementStart(8, "mat-label");
        i0.ɵɵtext(9, "Name");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(10, "input", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "div");
        i0.ɵɵelementStart(12, "button", 7);
        i0.ɵɵtext(13, "Next");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "mat-step", 3);
        i0.ɵɵelementStart(15, "form", 4);
        i0.ɵɵtemplate(16, StepperEditableExample_ng_template_16_Template, 1, 0, "ng-template", 5);
        i0.ɵɵelementStart(17, "mat-form-field");
        i0.ɵɵelementStart(18, "mat-label");
        i0.ɵɵtext(19, "Address");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(20, "input", 8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(21, "div");
        i0.ɵɵelementStart(22, "button", 9);
        i0.ɵɵtext(23, "Back");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(24, "button", 7);
        i0.ɵɵtext(25, "Next");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(26, "mat-step");
        i0.ɵɵtemplate(27, StepperEditableExample_ng_template_27_Template, 1, 0, "ng-template", 5);
        i0.ɵɵelementStart(28, "p");
        i0.ɵɵtext(29, "You are now done.");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(30, "div");
        i0.ɵɵelementStart(31, "button", 9);
        i0.ɵɵtext(32, "Back");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(33, "button", 10);
        i0.ɵɵlistener("click", function StepperEditableExample_Template_button_click_33_listener() { i0.ɵɵrestoreView(_r4); const _r0 = i0.ɵɵreference(3); return _r0.reset(); });
        i0.ɵɵtext(34, "Reset");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", !ctx.isEditable ? "Enable edit mode" : "Disable edit mode", "\n");
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("stepControl", ctx.firstFormGroup)("editable", ctx.isEditable);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("formGroup", ctx.firstFormGroup);
        i0.ɵɵadvance(9);
        i0.ɵɵproperty("stepControl", ctx.secondFormGroup)("editable", ctx.isEditable);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("formGroup", ctx.secondFormGroup);
    } }, directives: [i2.MatButton, i3.MatHorizontalStepper, i3.MatStep, i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.FormGroupDirective, i3.MatStepLabel, i4.MatFormField, i4.MatLabel, i5.MatInput, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlName, i1.RequiredValidator, i3.MatStepperNext, i3.MatStepperPrevious], styles: [".mat-stepper-horizontal[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(StepperEditableExample, [{
        type: Component,
        args: [{
                selector: 'stepper-editable-example',
                templateUrl: 'stepper-editable-example.html',
                styleUrls: ['stepper-editable-example.css']
            }]
    }], function () { return [{ type: i1.FormBuilder }]; }, null); })();
if (false) {
    /** @type {?} */
    StepperEditableExample.prototype.firstFormGroup;
    /** @type {?} */
    StepperEditableExample.prototype.secondFormGroup;
    /** @type {?} */
    StepperEditableExample.prototype.isEditable;
    /**
     * @type {?}
     * @private
     */
    StepperEditableExample.prototype._formBuilder;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHBlci1lZGl0YWJsZS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc3RlcHBlci9zdGVwcGVyLWVkaXRhYmxlL3N0ZXBwZXItZWRpdGFibGUtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3N0ZXBwZXIvc3RlcHBlci1lZGl0YWJsZS9zdGVwcGVyLWVkaXRhYmxlLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFDaEQsT0FBTyxFQUFDLFdBQVcsRUFBYSxVQUFVLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7SUNNbEMsa0NBQWtCOzs7SUFZbEIscUNBQXFCOzs7SUFhdkIsb0JBQUk7Ozs7O0FEckJsQyxNQUFNLE9BQU8sc0JBQXNCOzs7O0lBS2pDLFlBQW9CLFlBQXlCO1FBQXpCLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBRjdDLGVBQVUsR0FBRyxLQUFLLENBQUM7SUFFNkIsQ0FBQzs7OztJQUVqRCxRQUFRO1FBQ04sSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztZQUM1QyxTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQztTQUNyQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO1lBQzdDLFVBQVUsRUFBRSxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUMsUUFBUSxDQUFDO1NBQ3RDLENBQUMsQ0FBQztJQUNMLENBQUM7OztZQW5CRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtnQkFDcEMsV0FBVyxFQUFFLCtCQUErQjtnQkFDNUMsU0FBUyxFQUFFLENBQUMsOEJBQThCLENBQUM7YUFDNUM7Ozs7WUFUTyxXQUFXOzs0RkFVTixzQkFBc0I7MkRBQXRCLHNCQUFzQjs7UUNYbkMsaUNBQ0U7UUFEd0IsdUlBQWtDO1FBQzFELFlBQ0Y7UUFBQSxpQkFBUztRQUVULG9EQUNFO1FBQUEsbUNBQ0U7UUFBQSwrQkFDRTtRQUFBLHVGQUEwQjtRQUMxQixzQ0FDRTtRQUFBLGlDQUFXO1FBQUEsb0JBQUk7UUFBQSxpQkFBWTtRQUMzQiw0QkFDRjtRQUFBLGlCQUFpQjtRQUNqQiw0QkFDRTtRQUFBLGtDQUFrQztRQUFBLHFCQUFJO1FBQUEsaUJBQVM7UUFDakQsaUJBQU07UUFDUixpQkFBTztRQUNULGlCQUFXO1FBQ1gsb0NBQ0U7UUFBQSxnQ0FDRTtRQUFBLHlGQUEwQjtRQUMxQix1Q0FDRTtRQUFBLGtDQUFXO1FBQUEsd0JBQU87UUFBQSxpQkFBWTtRQUM5Qiw0QkFFRjtRQUFBLGlCQUFpQjtRQUNqQiw0QkFDRTtRQUFBLGtDQUFzQztRQUFBLHFCQUFJO1FBQUEsaUJBQVM7UUFDbkQsa0NBQWtDO1FBQUEscUJBQUk7UUFBQSxpQkFBUztRQUNqRCxpQkFBTTtRQUNSLGlCQUFPO1FBQ1QsaUJBQVc7UUFDWCxpQ0FDRTtRQUFBLHlGQUEwQjtRQUMxQiwwQkFBRztRQUFBLGtDQUFpQjtRQUFBLGlCQUFJO1FBQ3hCLDRCQUNFO1FBQUEsa0NBQXNDO1FBQUEscUJBQUk7UUFBQSxpQkFBUztRQUNuRCxtQ0FBNkM7UUFBMUIsMEpBQVMsV0FBZSxJQUFDO1FBQUMsc0JBQUs7UUFBQSxpQkFBUztRQUM3RCxpQkFBTTtRQUNSLGlCQUFXO1FBQ2IsaUJBQXlCOztRQXRDdkIsZUFDRjtRQURFLDRGQUNGO1FBR1ksZUFBOEI7UUFBOUIsZ0RBQThCLDRCQUFBO1FBQ2hDLGVBQTRCO1FBQTVCLDhDQUE0QjtRQVcxQixlQUErQjtRQUEvQixpREFBK0IsNEJBQUE7UUFDakMsZUFBNkI7UUFBN0IsK0NBQTZCOztrRERQMUIsc0JBQXNCO2NBTGxDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQyxXQUFXLEVBQUUsK0JBQStCO2dCQUM1QyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQzthQUM1Qzs7OztJQUVDLGdEQUEwQjs7SUFDMUIsaURBQTJCOztJQUMzQiw0Q0FBbUI7Ozs7O0lBRVAsOENBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnN9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuLyoqXG4gKiBAdGl0bGUgU3RlcHBlciB3aXRoIGVkaXRhYmxlIHN0ZXBzXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N0ZXBwZXItZWRpdGFibGUtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnc3RlcHBlci1lZGl0YWJsZS1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnc3RlcHBlci1lZGl0YWJsZS1leGFtcGxlLmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN0ZXBwZXJFZGl0YWJsZUV4YW1wbGUgaW1wbGVtZW50cyBPbkluaXQge1xuICBmaXJzdEZvcm1Hcm91cDogRm9ybUdyb3VwO1xuICBzZWNvbmRGb3JtR3JvdXA6IEZvcm1Hcm91cDtcbiAgaXNFZGl0YWJsZSA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2Zvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcikge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmZpcnN0Rm9ybUdyb3VwID0gdGhpcy5fZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgZmlyc3RDdHJsOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdXG4gICAgfSk7XG4gICAgdGhpcy5zZWNvbmRGb3JtR3JvdXAgPSB0aGlzLl9mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICBzZWNvbmRDdHJsOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdXG4gICAgfSk7XG4gIH1cbn1cbiIsIjxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gKGNsaWNrKT1cImlzRWRpdGFibGUgPSAhaXNFZGl0YWJsZVwiPlxuICB7eyFpc0VkaXRhYmxlID8gJ0VuYWJsZSBlZGl0IG1vZGUnIDogJ0Rpc2FibGUgZWRpdCBtb2RlJ319XG48L2J1dHRvbj5cblxuPG1hdC1ob3Jpem9udGFsLXN0ZXBwZXIgbGluZWFyICNzdGVwcGVyPlxuICA8bWF0LXN0ZXAgW3N0ZXBDb250cm9sXT1cImZpcnN0Rm9ybUdyb3VwXCIgW2VkaXRhYmxlXT1cImlzRWRpdGFibGVcIj5cbiAgICA8Zm9ybSBbZm9ybUdyb3VwXT1cImZpcnN0Rm9ybUdyb3VwXCI+XG4gICAgICA8bmctdGVtcGxhdGUgbWF0U3RlcExhYmVsPkZpbGwgb3V0IHlvdXIgbmFtZTwvbmctdGVtcGxhdGU+XG4gICAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgICAgIDxtYXQtbGFiZWw+TmFtZTwvbWF0LWxhYmVsPlxuICAgICAgICA8aW5wdXQgbWF0SW5wdXQgZm9ybUNvbnRyb2xOYW1lPVwiZmlyc3RDdHJsXCIgcGxhY2Vob2xkZXI9XCJMYXN0IG5hbWUsIEZpcnN0IG5hbWVcIiByZXF1aXJlZD5cbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgICA8ZGl2PlxuICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gbWF0U3RlcHBlck5leHQ+TmV4dDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9mb3JtPlxuICA8L21hdC1zdGVwPlxuICA8bWF0LXN0ZXAgW3N0ZXBDb250cm9sXT1cInNlY29uZEZvcm1Hcm91cFwiIFtlZGl0YWJsZV09XCJpc0VkaXRhYmxlXCI+XG4gICAgPGZvcm0gW2Zvcm1Hcm91cF09XCJzZWNvbmRGb3JtR3JvdXBcIj5cbiAgICAgIDxuZy10ZW1wbGF0ZSBtYXRTdGVwTGFiZWw+RmlsbCBvdXQgeW91ciBhZGRyZXNzPC9uZy10ZW1wbGF0ZT5cbiAgICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgICAgPG1hdC1sYWJlbD5BZGRyZXNzPC9tYXQtbGFiZWw+XG4gICAgICAgIDxpbnB1dCBtYXRJbnB1dCBmb3JtQ29udHJvbE5hbWU9XCJzZWNvbmRDdHJsXCIgcGxhY2Vob2xkZXI9XCJFeC4gMSBNYWluIFN0LCBOZXcgWW9yaywgTllcIlxuICAgICAgICAgICAgICAgcmVxdWlyZWQ+XG4gICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIG1hdFN0ZXBwZXJQcmV2aW91cz5CYWNrPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBtYXRTdGVwcGVyTmV4dD5OZXh0PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Zvcm0+XG4gIDwvbWF0LXN0ZXA+XG4gIDxtYXQtc3RlcD5cbiAgICA8bmctdGVtcGxhdGUgbWF0U3RlcExhYmVsPkRvbmU8L25nLXRlbXBsYXRlPlxuICAgIDxwPllvdSBhcmUgbm93IGRvbmUuPC9wPlxuICAgIDxkaXY+XG4gICAgICA8YnV0dG9uIG1hdC1idXR0b24gbWF0U3RlcHBlclByZXZpb3VzPkJhY2s8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiAoY2xpY2spPVwic3RlcHBlci5yZXNldCgpXCI+UmVzZXQ8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgPC9tYXQtc3RlcD5cbjwvbWF0LWhvcml6b250YWwtc3RlcHBlcj5cbiJdfQ==