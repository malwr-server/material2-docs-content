(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('tslib'), require('@angular/core'), require('@angular/forms'), require('@angular/common'), require('@angular/cdk-experimental/popover-edit'), require('@angular/cdk/a11y'), require('@angular/cdk/drag-drop'), require('@angular/cdk/portal'), require('@angular/cdk/scrolling'), require('@angular/cdk/stepper'), require('@angular/cdk/table'), require('@angular/cdk/tree'), require('@angular/material/autocomplete'), require('@angular/material/badge'), require('@angular/material/bottom-sheet'), require('@angular/material/button'), require('@angular/material/button-toggle'), require('@angular/material/card'), require('@angular/material/checkbox'), require('@angular/material/chips'), require('@angular/material/core'), require('@angular/material/datepicker'), require('@angular/material/dialog'), require('@angular/material/divider'), require('@angular/material/expansion'), require('@angular/material/form-field'), require('@angular/material/grid-list'), require('@angular/material/icon'), require('@angular/material/input'), require('@angular/material/list'), require('@angular/material/menu'), require('@angular/material/paginator'), require('@angular/material/progress-bar'), require('@angular/material/progress-spinner'), require('@angular/material/radio'), require('@angular/material/select'), require('@angular/material/sidenav'), require('@angular/material/slide-toggle'), require('@angular/material/slider'), require('@angular/material/snack-bar'), require('@angular/material/sort'), require('@angular/material/stepper'), require('@angular/material/table'), require('@angular/material/tabs'), require('@angular/material/toolbar'), require('@angular/material/tooltip'), require('@angular/material/tree'), require('rxjs/operators'), require('@angular/cdk/overlay'), require('@angular/cdk/platform'), require('@angular/cdk/collections'), require('rxjs'), require('@angular/cdk/keycodes'), require('moment'), require('@angular/cdk/coercion'), require('@angular/platform-browser'), require('@angular/cdk/layout'), require('@angular/animations'), require('@angular/common/http'), require('@angular/cdk/text-field')) :
    typeof define === 'function' && define.amd ? define('@angular/material-examples', ['exports', 'tslib', '@angular/core', '@angular/forms', '@angular/common', '@angular/cdk-experimental/popover-edit', '@angular/cdk/a11y', '@angular/cdk/drag-drop', '@angular/cdk/portal', '@angular/cdk/scrolling', '@angular/cdk/stepper', '@angular/cdk/table', '@angular/cdk/tree', '@angular/material/autocomplete', '@angular/material/badge', '@angular/material/bottom-sheet', '@angular/material/button', '@angular/material/button-toggle', '@angular/material/card', '@angular/material/checkbox', '@angular/material/chips', '@angular/material/core', '@angular/material/datepicker', '@angular/material/dialog', '@angular/material/divider', '@angular/material/expansion', '@angular/material/form-field', '@angular/material/grid-list', '@angular/material/icon', '@angular/material/input', '@angular/material/list', '@angular/material/menu', '@angular/material/paginator', '@angular/material/progress-bar', '@angular/material/progress-spinner', '@angular/material/radio', '@angular/material/select', '@angular/material/sidenav', '@angular/material/slide-toggle', '@angular/material/slider', '@angular/material/snack-bar', '@angular/material/sort', '@angular/material/stepper', '@angular/material/table', '@angular/material/tabs', '@angular/material/toolbar', '@angular/material/tooltip', '@angular/material/tree', 'rxjs/operators', '@angular/cdk/overlay', '@angular/cdk/platform', '@angular/cdk/collections', 'rxjs', '@angular/cdk/keycodes', 'moment', '@angular/cdk/coercion', '@angular/platform-browser', '@angular/cdk/layout', '@angular/animations', '@angular/common/http', '@angular/cdk/text-field'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.materialExamples = {}), global.tslib, global.ng.core, global.ng.forms, global.ng.common, global.ng.cdkExperimental['popover-edit'], global.ng.cdk.a11y, global.ng.cdk['drag-drop'], global.ng.cdk.portal, global.ng.cdk.scrolling, global.ng.cdk.stepper, global.ng.cdk.table, global.ng.cdk.tree, global.ng.material.autocomplete, global.ng.material.badge, global.ng.material['bottom-sheet'], global.ng.material.button, global.ng.material['button-toggle'], global.ng.material.card, global.ng.material.checkbox, global.ng.material.chips, global.ng.material.core, global.ng.material.datepicker, global.ng.material.dialog, global.ng.material.divider, global.ng.material.expansion, global.ng.material['form-field'], global.ng.material['grid-list'], global.ng.material.icon, global.ng.material.input, global.ng.material.list, global.ng.material.menu, global.ng.material.paginator, global.ng.material['progress-bar'], global.ng.material['progress-spinner'], global.ng.material.radio, global.ng.material.select, global.ng.material.sidenav, global.ng.material['slide-toggle'], global.ng.material.slider, global.ng.material['snack-bar'], global.ng.material.sort, global.ng.material.stepper, global.ng.material.table, global.ng.material.tabs, global.ng.material.toolbar, global.ng.material.tooltip, global.ng.material.tree, global.rxjs.operators, global.ng.cdk.overlay, global.ng.cdk.platform, global.ng.cdk.collections, global.rxjs, global.ng.cdk.keycodes, global.moment, global.ng.cdk.coercion, global.ng.platformBrowser, global.ng.cdk.layout, global.ng.animations, global.ng.common.http, global.ng.cdk['text-field']));
}(this, function (exports, tslib_1, core, forms, common, popoverEdit, a11y, dragDrop, portal, scrolling, stepper, table, tree, autocomplete, badge, bottomSheet, button, buttonToggle, card, checkbox, chips, core$1, datepicker, dialog, divider, expansion, formField, gridList, icon, input, list, menu, paginator, progressBar, progressSpinner, radio, select, sidenav, slideToggle, slider, snackBar, sort, stepper$1, table$1, tabs, toolbar, tooltip, tree$1, operators, overlay, platform, collections, rxjs, keycodes, _rollupMoment, coercion, platformBrowser, layout, animations, http, textField) { 'use strict';

    var _rollupMoment__default = 'default' in _rollupMoment ? _rollupMoment['default'] : _rollupMoment;

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * A component that attaches to a form within the edit.
     * It coordinates the form state with the table-wide edit system and handles
     * closing the edit when the form is submitted or the user clicks
     * out.
     */
    var MatEditLens = /** @class */ (function (_super) {
        tslib_1.__extends(MatEditLens, _super);
        function MatEditLens() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MatEditLens = tslib_1.__decorate([
            core.Directive({
                selector: 'form[matEditLens]',
                host: {
                    'class': 'mat-edit-lens',
                },
                inputs: [
                    'clickOutBehavior: matEditLensClickOutBehavior',
                    'preservedFormValue: matEditLensPreservedFormValue',
                    'ignoreSubmitUnlessValid: matEditLensIgnoreSubmitUnlessValid',
                ],
                outputs: ['preservedFormValueChange: matEditLensPreservedFormValueChange'],
                providers: [popoverEdit.EditRef],
            })
        ], MatEditLens);
        return MatEditLens;
    }(popoverEdit.CdkEditControl));
    /** Reverts the form to its initial or previously submitted state on click. */
    var MatEditRevert = /** @class */ (function (_super) {
        tslib_1.__extends(MatEditRevert, _super);
        function MatEditRevert() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MatEditRevert = tslib_1.__decorate([
            core.Directive({
                selector: 'button[matEditRevert]',
                host: {
                    'type': 'button',
                }
            })
        ], MatEditRevert);
        return MatEditRevert;
    }(popoverEdit.CdkEditRevert));
    /** Closes the lens on click. */
    var MatEditClose = /** @class */ (function (_super) {
        tslib_1.__extends(MatEditClose, _super);
        function MatEditClose() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MatEditClose = tslib_1.__decorate([
            core.Directive({
                selector: 'button[matEditClose]',
                host: {
                    'type': 'button',
                }
            })
        ], MatEditClose);
        return MatEditClose;
    }(popoverEdit.CdkEditClose));

    var POPOVER_EDIT_HOST_BINDINGS = {
        'tabIndex': '0',
        'class': 'mat-popover-edit-cell',
        '[attr.aria-haspopup]': 'true',
    };
    var POPOVER_EDIT_INPUTS = [
        'template: matPopoverEdit',
        'context: matPopoverEditContext',
        'colspan: matPopoverEditColspan',
    ];
    var EDIT_PANE_CLASS = 'mat-edit-pane';
    var MAT_ROW_HOVER_CLASS = 'mat-row-hover-content';
    var MAT_ROW_HOVER_RTL_CLASS = MAT_ROW_HOVER_CLASS + '-rtl';
    var MAT_ROW_HOVER_ANIMATE_CLASS = MAT_ROW_HOVER_CLASS + '-visible';
    var MAT_ROW_HOVER_CELL_CLASS = MAT_ROW_HOVER_CLASS + '-host-cell';
    /**
     * Attaches an ng-template to a cell and shows it when instructed to by the
     * EditEventDispatcher service.
     * Makes the cell focusable.
     */
    var MatPopoverEdit = /** @class */ (function (_super) {
        tslib_1.__extends(MatPopoverEdit, _super);
        function MatPopoverEdit() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MatPopoverEdit.prototype.panelClass = function () {
            return EDIT_PANE_CLASS;
        };
        MatPopoverEdit = tslib_1.__decorate([
            core.Directive({
                selector: '[matPopoverEdit]:not([matPopoverEditTabOut])',
                host: POPOVER_EDIT_HOST_BINDINGS,
                inputs: POPOVER_EDIT_INPUTS,
            })
        ], MatPopoverEdit);
        return MatPopoverEdit;
    }(popoverEdit.CdkPopoverEdit));
    /**
     * Attaches an ng-template to a cell and shows it when instructed to by the
     * EditEventDispatcher service.
     * Makes the cell focusable.
     */
    var MatPopoverEditTabOut = /** @class */ (function (_super) {
        tslib_1.__extends(MatPopoverEditTabOut, _super);
        function MatPopoverEditTabOut() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MatPopoverEditTabOut.prototype.panelClass = function () {
            return EDIT_PANE_CLASS;
        };
        MatPopoverEditTabOut = tslib_1.__decorate([
            core.Directive({
                selector: '[matPopoverEdit][matPopoverEditTabOut]',
                host: POPOVER_EDIT_HOST_BINDINGS,
                inputs: POPOVER_EDIT_INPUTS,
            })
        ], MatPopoverEditTabOut);
        return MatPopoverEditTabOut;
    }(popoverEdit.CdkPopoverEditTabOut));
    /**
     * A structural directive that shows its contents when the table row containing
     * it is hovered or when an element in the row has focus.
     */
    var MatRowHoverContent = /** @class */ (function (_super) {
        tslib_1.__extends(MatRowHoverContent, _super);
        function MatRowHoverContent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MatRowHoverContent.prototype.initElement = function (element) {
            _super.prototype.initElement.call(this, element);
            element.classList.add(MAT_ROW_HOVER_CLASS);
        };
        MatRowHoverContent.prototype.makeElementHiddenButFocusable = function (element) {
            element.classList.remove(MAT_ROW_HOVER_ANIMATE_CLASS);
        };
        MatRowHoverContent.prototype.makeElementVisible = function (element) {
            popoverEdit._closest(this.elementRef.nativeElement, popoverEdit._CELL_SELECTOR)
                .classList.add(MAT_ROW_HOVER_CELL_CLASS);
            if (this.services.directionality.value === 'rtl') {
                element.classList.add(MAT_ROW_HOVER_RTL_CLASS);
            }
            else {
                element.classList.remove(MAT_ROW_HOVER_RTL_CLASS);
            }
            element.classList.remove(MAT_ROW_HOVER_ANIMATE_CLASS);
            this.services.ngZone.runOutsideAngular(function () {
                setTimeout(function () {
                    element.classList.add(MAT_ROW_HOVER_ANIMATE_CLASS);
                });
            });
        };
        MatRowHoverContent = tslib_1.__decorate([
            core.Directive({
                selector: '[matRowHoverContent]',
            })
        ], MatRowHoverContent);
        return MatRowHoverContent;
    }(popoverEdit.CdkRowHoverContent));
    /**
     * Opens the closest edit popover to this element, whether it's associated with this exact
     * element or an ancestor element.
     */
    var MatEditOpen = /** @class */ (function (_super) {
        tslib_1.__extends(MatEditOpen, _super);
        function MatEditOpen() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MatEditOpen = tslib_1.__decorate([
            core.Directive({
                selector: '[matEditOpen]',
            })
        ], MatEditOpen);
        return MatEditOpen;
    }(popoverEdit.CdkEditOpen));

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var EXPORTED_DECLARATIONS = [
        MatPopoverEdit,
        MatPopoverEditTabOut,
        MatRowHoverContent,
        MatEditLens,
        MatEditRevert,
        MatEditClose,
        MatEditOpen
    ];
    var MatPopoverEditModule = /** @class */ (function () {
        function MatPopoverEditModule() {
        }
        MatPopoverEditModule = tslib_1.__decorate([
            core.NgModule({
                imports: [
                    popoverEdit.CdkPopoverEditModule,
                    common.CommonModule,
                ],
                exports: tslib_1.__spread(EXPORTED_DECLARATIONS, [
                    popoverEdit.CdkEditable,
                ]),
                declarations: EXPORTED_DECLARATIONS,
            })
        ], MatPopoverEditModule);
        return MatPopoverEditModule;
    }());

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    var ExampleMaterialModule = /** @class */ (function () {
        function ExampleMaterialModule() {
        }
        ExampleMaterialModule = tslib_1.__decorate([
            core.NgModule({
                imports: [
                    a11y.A11yModule,
                    popoverEdit.CdkPopoverEditModule,
                    table.CdkTableModule,
                    tree.CdkTreeModule,
                    stepper.CdkStepperModule,
                    dragDrop.DragDropModule,
                    autocomplete.MatAutocompleteModule,
                    badge.MatBadgeModule,
                    bottomSheet.MatBottomSheetModule,
                    button.MatButtonModule,
                    buttonToggle.MatButtonToggleModule,
                    card.MatCardModule,
                    checkbox.MatCheckboxModule,
                    chips.MatChipsModule,
                    datepicker.MatDatepickerModule,
                    dialog.MatDialogModule,
                    divider.MatDividerModule,
                    expansion.MatExpansionModule,
                    formField.MatFormFieldModule,
                    gridList.MatGridListModule,
                    icon.MatIconModule,
                    input.MatInputModule,
                    list.MatListModule,
                    menu.MatMenuModule,
                    paginator.MatPaginatorModule,
                    MatPopoverEditModule,
                    progressBar.MatProgressBarModule,
                    progressSpinner.MatProgressSpinnerModule,
                    radio.MatRadioModule,
                    core$1.MatRippleModule,
                    select.MatSelectModule,
                    sidenav.MatSidenavModule,
                    slideToggle.MatSlideToggleModule,
                    slider.MatSliderModule,
                    snackBar.MatSnackBarModule,
                    sort.MatSortModule,
                    stepper$1.MatStepperModule,
                    table$1.MatTableModule,
                    tabs.MatTabsModule,
                    toolbar.MatToolbarModule,
                    tooltip.MatTooltipModule,
                    tree$1.MatTreeModule,
                    scrolling.ScrollingModule,
                    portal.PortalModule,
                    core$1.MatNativeDateModule,
                ],
                exports: [
                    a11y.A11yModule,
                    popoverEdit.CdkPopoverEditModule,
                    table.CdkTableModule,
                    tree.CdkTreeModule,
                    stepper.CdkStepperModule,
                    dragDrop.DragDropModule,
                    autocomplete.MatAutocompleteModule,
                    badge.MatBadgeModule,
                    bottomSheet.MatBottomSheetModule,
                    button.MatButtonModule,
                    buttonToggle.MatButtonToggleModule,
                    card.MatCardModule,
                    checkbox.MatCheckboxModule,
                    chips.MatChipsModule,
                    datepicker.MatDatepickerModule,
                    dialog.MatDialogModule,
                    divider.MatDividerModule,
                    expansion.MatExpansionModule,
                    formField.MatFormFieldModule,
                    gridList.MatGridListModule,
                    icon.MatIconModule,
                    input.MatInputModule,
                    list.MatListModule,
                    menu.MatMenuModule,
                    paginator.MatPaginatorModule,
                    MatPopoverEditModule,
                    progressBar.MatProgressBarModule,
                    progressSpinner.MatProgressSpinnerModule,
                    radio.MatRadioModule,
                    core$1.MatRippleModule,
                    select.MatSelectModule,
                    sidenav.MatSidenavModule,
                    slideToggle.MatSlideToggleModule,
                    slider.MatSliderModule,
                    snackBar.MatSnackBarModule,
                    sort.MatSortModule,
                    stepper$1.MatStepperModule,
                    table$1.MatTableModule,
                    tabs.MatTabsModule,
                    toolbar.MatToolbarModule,
                    tooltip.MatTooltipModule,
                    tree$1.MatTreeModule,
                    scrolling.ScrollingModule,
                    portal.PortalModule,
                    core$1.MatNativeDateModule,
                ]
            })
        ], ExampleMaterialModule);
        return ExampleMaterialModule;
    }());

    /**
     * @title Highlight the first autocomplete option
     */
    var AutocompleteAutoActiveFirstOptionExample = /** @class */ (function () {
        function AutocompleteAutoActiveFirstOptionExample() {
            this.myControl = new forms.FormControl();
            this.options = ['One', 'Two', 'Three'];
        }
        AutocompleteAutoActiveFirstOptionExample.prototype.ngOnInit = function () {
            var _this = this;
            this.filteredOptions = this.myControl.valueChanges.pipe(operators.startWith(''), operators.map(function (value) { return _this._filter(value); }));
        };
        AutocompleteAutoActiveFirstOptionExample.prototype._filter = function (value) {
            var filterValue = value.toLowerCase();
            return this.options.filter(function (option) { return option.toLowerCase().indexOf(filterValue) === 0; });
        };
        AutocompleteAutoActiveFirstOptionExample = tslib_1.__decorate([
            core.Component({
                selector: 'autocomplete-auto-active-first-option-example',
                template: "<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\">\n    <input type=\"text\" placeholder=\"Pick one\" aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\">\n    <mat-autocomplete autoActiveFirstOption #auto=\"matAutocomplete\">\n      <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">\n        {{option}}\n      </mat-option>\n    </mat-autocomplete>\n  </mat-form-field>\n</form>\n",
                styles: [".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n"]
            })
        ], AutocompleteAutoActiveFirstOptionExample);
        return AutocompleteAutoActiveFirstOptionExample;
    }());

    /**
     * @title Display value autocomplete
     */
    var AutocompleteDisplayExample = /** @class */ (function () {
        function AutocompleteDisplayExample() {
            this.myControl = new forms.FormControl();
            this.options = [
                { name: 'Mary' },
                { name: 'Shelley' },
                { name: 'Igor' }
            ];
        }
        AutocompleteDisplayExample.prototype.ngOnInit = function () {
            var _this = this;
            this.filteredOptions = this.myControl.valueChanges
                .pipe(operators.startWith(''), operators.map(function (value) { return typeof value === 'string' ? value : value.name; }), operators.map(function (name) { return name ? _this._filter(name) : _this.options.slice(); }));
        };
        AutocompleteDisplayExample.prototype.displayFn = function (user) {
            return user ? user.name : undefined;
        };
        AutocompleteDisplayExample.prototype._filter = function (name) {
            var filterValue = name.toLowerCase();
            return this.options.filter(function (option) { return option.name.toLowerCase().indexOf(filterValue) === 0; });
        };
        AutocompleteDisplayExample = tslib_1.__decorate([
            core.Component({
                selector: 'autocomplete-display-example',
                template: "<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\">\n    <input type=\"text\" placeholder=\"Assignee\" aria-label=\"Assignee\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\">\n    <mat-autocomplete #auto=\"matAutocomplete\" [displayWith]=\"displayFn\">\n      <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">\n        {{option.name}}\n      </mat-option>\n    </mat-autocomplete>\n  </mat-form-field>\n</form>\n",
                styles: [".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n"]
            })
        ], AutocompleteDisplayExample);
        return AutocompleteDisplayExample;
    }());

    /**
     * @title Filter autocomplete
     */
    var AutocompleteFilterExample = /** @class */ (function () {
        function AutocompleteFilterExample() {
            this.myControl = new forms.FormControl();
            this.options = ['One', 'Two', 'Three'];
        }
        AutocompleteFilterExample.prototype.ngOnInit = function () {
            var _this = this;
            this.filteredOptions = this.myControl.valueChanges
                .pipe(operators.startWith(''), operators.map(function (value) { return _this._filter(value); }));
        };
        AutocompleteFilterExample.prototype._filter = function (value) {
            var filterValue = value.toLowerCase();
            return this.options.filter(function (option) { return option.toLowerCase().includes(filterValue); });
        };
        AutocompleteFilterExample = tslib_1.__decorate([
            core.Component({
                selector: 'autocomplete-filter-example',
                template: "<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\">\n    <input type=\"text\" placeholder=\"Pick one\" aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\">\n    <mat-autocomplete #auto=\"matAutocomplete\">\n      <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">\n        {{option}}\n      </mat-option>\n    </mat-autocomplete>\n  </mat-form-field>\n</form>\n",
                styles: [".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n"]
            })
        ], AutocompleteFilterExample);
        return AutocompleteFilterExample;
    }());

    var _filter = function (opt, value) {
        var filterValue = value.toLowerCase();
        return opt.filter(function (item) { return item.toLowerCase().indexOf(filterValue) === 0; });
    };
    /**
     * @title Option groups autocomplete
     */
    var AutocompleteOptgroupExample = /** @class */ (function () {
        function AutocompleteOptgroupExample(_formBuilder) {
            this._formBuilder = _formBuilder;
            this.stateForm = this._formBuilder.group({
                stateGroup: '',
            });
            this.stateGroups = [{
                    letter: 'A',
                    names: ['Alabama', 'Alaska', 'Arizona', 'Arkansas']
                }, {
                    letter: 'C',
                    names: ['California', 'Colorado', 'Connecticut']
                }, {
                    letter: 'D',
                    names: ['Delaware']
                }, {
                    letter: 'F',
                    names: ['Florida']
                }, {
                    letter: 'G',
                    names: ['Georgia']
                }, {
                    letter: 'H',
                    names: ['Hawaii']
                }, {
                    letter: 'I',
                    names: ['Idaho', 'Illinois', 'Indiana', 'Iowa']
                }, {
                    letter: 'K',
                    names: ['Kansas', 'Kentucky']
                }, {
                    letter: 'L',
                    names: ['Louisiana']
                }, {
                    letter: 'M',
                    names: ['Maine', 'Maryland', 'Massachusetts', 'Michigan',
                        'Minnesota', 'Mississippi', 'Missouri', 'Montana']
                }, {
                    letter: 'N',
                    names: ['Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
                        'New Mexico', 'New York', 'North Carolina', 'North Dakota']
                }, {
                    letter: 'O',
                    names: ['Ohio', 'Oklahoma', 'Oregon']
                }, {
                    letter: 'P',
                    names: ['Pennsylvania']
                }, {
                    letter: 'R',
                    names: ['Rhode Island']
                }, {
                    letter: 'S',
                    names: ['South Carolina', 'South Dakota']
                }, {
                    letter: 'T',
                    names: ['Tennessee', 'Texas']
                }, {
                    letter: 'U',
                    names: ['Utah']
                }, {
                    letter: 'V',
                    names: ['Vermont', 'Virginia']
                }, {
                    letter: 'W',
                    names: ['Washington', 'West Virginia', 'Wisconsin', 'Wyoming']
                }];
        }
        AutocompleteOptgroupExample.prototype.ngOnInit = function () {
            var _this = this;
            this.stateGroupOptions = this.stateForm.get('stateGroup').valueChanges
                .pipe(operators.startWith(''), operators.map(function (value) { return _this._filterGroup(value); }));
        };
        AutocompleteOptgroupExample.prototype._filterGroup = function (value) {
            if (value) {
                return this.stateGroups
                    .map(function (group) { return ({ letter: group.letter, names: _filter(group.names, value) }); })
                    .filter(function (group) { return group.names.length > 0; });
            }
            return this.stateGroups;
        };
        AutocompleteOptgroupExample = tslib_1.__decorate([
            core.Component({
                selector: 'autocomplete-optgroup-example',
                template: "<form [formGroup]=\"stateForm\">\n  <mat-form-field>\n    <input type=\"text\" matInput placeholder=\"States Group\" formControlName=\"stateGroup\" required [matAutocomplete]=\"autoGroup\">\n      <mat-autocomplete #autoGroup=\"matAutocomplete\">\n        <mat-optgroup *ngFor=\"let group of stateGroupOptions | async\" [label]=\"group.letter\">\n          <mat-option *ngFor=\"let name of group.names\" [value]=\"name\">\n            {{name}}\n          </mat-option>\n      </mat-optgroup>\n    </mat-autocomplete>\n  </mat-form-field>\n</form>\n",
                styles: ["/** No CSS for this example */\n"]
            }),
            tslib_1.__metadata("design:paramtypes", [forms.FormBuilder])
        ], AutocompleteOptgroupExample);
        return AutocompleteOptgroupExample;
    }());

    /**
     * @title Autocomplete overview
     */
    var AutocompleteOverviewExample = /** @class */ (function () {
        function AutocompleteOverviewExample() {
            var _this = this;
            this.stateCtrl = new forms.FormControl();
            this.states = [
                {
                    name: 'Arkansas',
                    population: '2.978M',
                    // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
                    flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg'
                },
                {
                    name: 'California',
                    population: '39.14M',
                    // https://commons.wikimedia.org/wiki/File:Flag_of_California.svg
                    flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg'
                },
                {
                    name: 'Florida',
                    population: '20.27M',
                    // https://commons.wikimedia.org/wiki/File:Flag_of_Florida.svg
                    flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg'
                },
                {
                    name: 'Texas',
                    population: '27.47M',
                    // https://commons.wikimedia.org/wiki/File:Flag_of_Texas.svg
                    flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg'
                }
            ];
            this.filteredStates = this.stateCtrl.valueChanges
                .pipe(operators.startWith(''), operators.map(function (state) { return state ? _this._filterStates(state) : _this.states.slice(); }));
        }
        AutocompleteOverviewExample.prototype._filterStates = function (value) {
            var filterValue = value.toLowerCase();
            return this.states.filter(function (state) { return state.name.toLowerCase().indexOf(filterValue) === 0; });
        };
        AutocompleteOverviewExample = tslib_1.__decorate([
            core.Component({
                selector: 'autocomplete-overview-example',
                template: "<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"State\" aria-label=\"State\" [matAutocomplete]=\"auto\" [formControl]=\"stateCtrl\">\n    <mat-autocomplete #auto=\"matAutocomplete\">\n      <mat-option *ngFor=\"let state of filteredStates | async\" [value]=\"state.name\">\n        <img class=\"example-option-img\" aria-hidden [src]=\"state.flag\" height=\"25\">\n        <span>{{state.name}}</span> |\n        <small>Population: {{state.population}}</small>\n      </mat-option>\n    </mat-autocomplete>\n  </mat-form-field>\n\n  <br>\n\n  <mat-slide-toggle\n    [checked]=\"stateCtrl.disabled\"\n    (change)=\"stateCtrl.disabled ? stateCtrl.enable() : stateCtrl.disable()\">\n    Disable Input?\n  </mat-slide-toggle>\n</form>\n",
                styles: [".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n\n.example-option-img {\n  vertical-align: middle;\n  margin-right: 8px;\n}\n\n[dir='rtl'] .example-option-img {\n  margin-right: 0;\n  margin-left: 8px;\n}\n"]
            }),
            tslib_1.__metadata("design:paramtypes", [])
        ], AutocompleteOverviewExample);
        return AutocompleteOverviewExample;
    }());

    /**
     * @title Plain input autocomplete
     */
    var AutocompletePlainInputExample = /** @class */ (function () {
        function AutocompletePlainInputExample() {
            this.control = new forms.FormControl();
            this.streets = ['Champs-Élysées', 'Lombard Street', 'Abbey Road', 'Fifth Avenue'];
        }
        AutocompletePlainInputExample.prototype.ngOnInit = function () {
            var _this = this;
            this.filteredStreets = this.control.valueChanges.pipe(operators.startWith(''), operators.map(function (value) { return _this._filter(value); }));
        };
        AutocompletePlainInputExample.prototype._filter = function (value) {
            var _this = this;
            var filterValue = this._normalizeValue(value);
            return this.streets.filter(function (street) { return _this._normalizeValue(street).includes(filterValue); });
        };
        AutocompletePlainInputExample.prototype._normalizeValue = function (value) {
            return value.toLowerCase().replace(/\s/g, '');
        };
        AutocompletePlainInputExample = tslib_1.__decorate([
            core.Component({
                selector: 'autocomplete-plain-input-example',
                template: "<form class=\"example-form\">\n  <input type=\"text\" placeholder=\"Search for a street\" [formControl]=\"control\" [matAutocomplete]=\"auto\">\n  <mat-autocomplete #auto=\"matAutocomplete\">\n    <mat-option *ngFor=\"let street of filteredStreets | async\" [value]=\"street\">\n      {{street}}\n    </mat-option>\n  </mat-autocomplete>\n</form>\n",
                styles: [".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n"]
            })
        ], AutocompletePlainInputExample);
        return AutocompletePlainInputExample;
    }());

    /**
     * @title Simple autocomplete
     */
    var AutocompleteSimpleExample = /** @class */ (function () {
        function AutocompleteSimpleExample() {
            this.myControl = new forms.FormControl();
            this.options = ['One', 'Two', 'Three'];
        }
        AutocompleteSimpleExample = tslib_1.__decorate([
            core.Component({
                selector: 'autocomplete-simple-example',
                template: "<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\">\n    <input type=\"text\" placeholder=\"Pick one\" aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\">\n    <mat-autocomplete #auto=\"matAutocomplete\">\n      <mat-option *ngFor=\"let option of options\" [value]=\"option\">\n        {{option}}\n      </mat-option>\n    </mat-autocomplete>\n  </mat-form-field>\n</form>\n",
                styles: [".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n"]
            })
        ], AutocompleteSimpleExample);
        return AutocompleteSimpleExample;
    }());

    /**
     * @title Badge overview
     */
    var BadgeOverviewExample = /** @class */ (function () {
        function BadgeOverviewExample() {
        }
        BadgeOverviewExample = tslib_1.__decorate([
            core.Component({
                selector: 'badge-overview-example',
                template: "<p>\n  <span matBadge=\"4\" matBadgeOverlap=\"false\">Text with a badge</span>\n</p>\n\n<p>\n  Button with a badge on the left\n  <button mat-raised-button color=\"primary\"\n      matBadge=\"8\" matBadgePosition=\"before\" matBadgeColor=\"accent\">\n    Action\n  </button>\n</p>\n\n<p>\n  Icon with a badge\n  <mat-icon matBadge=\"15\" matBadgeColor=\"warn\">home</mat-icon>\n    <!-- Include text description of the icon's meaning for screen-readers -->\n    <span class=\"cdk-visually-hidden\">\n      Example with a home icon with overlaid badge showing the number 15\n    </span>\n</p>\n\n",
                styles: ["/** No CSS for this example */\n"]
            })
        ], BadgeOverviewExample);
        return BadgeOverviewExample;
    }());

    /**
     * @title Bottom Sheet Overview
     */
    var BottomSheetOverviewExample = /** @class */ (function () {
        function BottomSheetOverviewExample(_bottomSheet) {
            this._bottomSheet = _bottomSheet;
        }
        BottomSheetOverviewExample.prototype.openBottomSheet = function () {
            this._bottomSheet.open(BottomSheetOverviewExampleSheet);
        };
        BottomSheetOverviewExample = tslib_1.__decorate([
            core.Component({
                selector: 'bottom-sheet-overview-example',
                template: "<p>You have received a file called \"cat-picture.jpeg\".</p>\n\n<button mat-raised-button (click)=\"openBottomSheet()\">Open file</button>\n",
                styles: ["/** No CSS for this example */\n"]
            }),
            tslib_1.__metadata("design:paramtypes", [bottomSheet.MatBottomSheet])
        ], BottomSheetOverviewExample);
        return BottomSheetOverviewExample;
    }());
    var BottomSheetOverviewExampleSheet = /** @class */ (function () {
        function BottomSheetOverviewExampleSheet(_bottomSheetRef) {
            this._bottomSheetRef = _bottomSheetRef;
        }
        BottomSheetOverviewExampleSheet.prototype.openLink = function (event) {
            this._bottomSheetRef.dismiss();
            event.preventDefault();
        };
        BottomSheetOverviewExampleSheet = tslib_1.__decorate([
            core.Component({
                selector: 'bottom-sheet-overview-example-sheet',
                template: "<mat-nav-list>\n  <a href=\"https://keep.google.com/\" mat-list-item (click)=\"openLink($event)\">\n    <span mat-line>Google Keep</span>\n    <span mat-line>Add to a note</span>\n  </a>\n\n  <a href=\"https://docs.google.com/\" mat-list-item (click)=\"openLink($event)\">\n    <span mat-line>Google Docs</span>\n    <span mat-line>Embed in a document</span>\n  </a>\n\n  <a href=\"https://plus.google.com/\" mat-list-item (click)=\"openLink($event)\">\n    <span mat-line>Google Plus</span>\n    <span mat-line>Share with your friends</span>\n  </a>\n\n  <a href=\"https://hangouts.google.com/\" mat-list-item (click)=\"openLink($event)\">\n    <span mat-line>Google Hangouts</span>\n    <span mat-line>Show to your coworkers</span>\n  </a>\n</mat-nav-list>\n"
            }),
            tslib_1.__metadata("design:paramtypes", [bottomSheet.MatBottomSheetRef])
        ], BottomSheetOverviewExampleSheet);
        return BottomSheetOverviewExampleSheet;
    }());

    /**
     * @title Basic buttons
     */
    var ButtonOverviewExample = /** @class */ (function () {
        function ButtonOverviewExample() {
        }
        ButtonOverviewExample = tslib_1.__decorate([
            core.Component({
                selector: 'button-overview-example',
                template: "<button mat-button>Click me!</button>\n",
                styles: ["/** No CSS for this example */\n"]
            })
        ], ButtonOverviewExample);
        return ButtonOverviewExample;
    }());

    /**
     * @title Button toggle appearance
     */
    var ButtonToggleAppearanceExample = /** @class */ (function () {
        function ButtonToggleAppearanceExample() {
        }
        ButtonToggleAppearanceExample = tslib_1.__decorate([
            core.Component({
                selector: 'button-toggle-appearance-example',
                template: "<p>\n  Default appearance:\n  <mat-button-toggle-group name=\"fontStyle\" aria-label=\"Font Style\">\n    <mat-button-toggle value=\"bold\">Bold</mat-button-toggle>\n    <mat-button-toggle value=\"italic\">Italic</mat-button-toggle>\n    <mat-button-toggle value=\"underline\">Underline</mat-button-toggle>\n  </mat-button-toggle-group>\n</p>\n\n<p>\n  Legacy appearance:\n  <mat-button-toggle-group appearance=\"legacy\" name=\"fontStyle\" aria-label=\"Font Style\">\n    <mat-button-toggle value=\"bold\">Bold</mat-button-toggle>\n    <mat-button-toggle value=\"italic\">Italic</mat-button-toggle>\n    <mat-button-toggle value=\"underline\">Underline</mat-button-toggle>\n  </mat-button-toggle-group>\n</p>\n",
                styles: ["mat-button-toggle-group {\n  margin-left: 12px;\n}\n"]
            })
        ], ButtonToggleAppearanceExample);
        return ButtonToggleAppearanceExample;
    }());

    /**
     * @title Exclusive selection
     */
    var ButtonToggleExclusiveExample = /** @class */ (function () {
        function ButtonToggleExclusiveExample() {
        }
        ButtonToggleExclusiveExample = tslib_1.__decorate([
            core.Component({
                selector: 'button-toggle-exclusive-example',
                template: "<mat-button-toggle-group #group=\"matButtonToggleGroup\">\n  <mat-button-toggle value=\"left\" aria-label=\"Text align left\">\n    <mat-icon>format_align_left</mat-icon>\n  </mat-button-toggle>\n  <mat-button-toggle value=\"center\" aria-label=\"Text align center\">\n    <mat-icon>format_align_center</mat-icon>\n  </mat-button-toggle>\n  <mat-button-toggle value=\"right\" aria-label=\"Text align right\">\n    <mat-icon>format_align_right</mat-icon>\n  </mat-button-toggle>\n  <mat-button-toggle value=\"justify\" disabled aria-label=\"Text align justify\">\n    <mat-icon>format_align_justify</mat-icon>\n  </mat-button-toggle>\n</mat-button-toggle-group>\n<div class=\"example-selected-value\">Selected value: {{group.value}}</div>\n",
                styles: [".example-selected-value {\n  margin: 15px 0;\n}\n"]
            })
        ], ButtonToggleExclusiveExample);
        return ButtonToggleExclusiveExample;
    }());

    /**
     * @title Basic button-toggles
     */
    var ButtonToggleOverviewExample = /** @class */ (function () {
        function ButtonToggleOverviewExample() {
        }
        ButtonToggleOverviewExample = tslib_1.__decorate([
            core.Component({
                selector: 'button-toggle-overview-example',
                template: "<mat-button-toggle-group name=\"fontStyle\" aria-label=\"Font Style\">\n  <mat-button-toggle value=\"bold\">Bold</mat-button-toggle>\n  <mat-button-toggle value=\"italic\">Italic</mat-button-toggle>\n  <mat-button-toggle value=\"underline\">Underline</mat-button-toggle>\n</mat-button-toggle-group>\n",
                styles: ["/** No CSS for this example */\n"]
            })
        ], ButtonToggleOverviewExample);
        return ButtonToggleOverviewExample;
    }());

    /**
     * @title Button varieties
     */
    var ButtonTypesExample = /** @class */ (function () {
        function ButtonTypesExample() {
        }
        ButtonTypesExample = tslib_1.__decorate([
            core.Component({
                selector: 'button-types-example',
                template: "<h3>Basic Buttons</h3>\n<div class=\"example-button-row\">\n  <button mat-button>Basic</button>\n  <button mat-button color=\"primary\">Primary</button>\n  <button mat-button color=\"accent\">Accent</button>\n  <button mat-button color=\"warn\">Warn</button>\n  <button mat-button disabled>Disabled</button>\n  <a mat-button routerLink=\".\">Link</a>\n</div>\n\n<h3>Raised Buttons</h3>\n<div class=\"example-button-row\">\n  <button mat-raised-button>Basic</button>\n  <button mat-raised-button color=\"primary\">Primary</button>\n  <button mat-raised-button color=\"accent\">Accent</button>\n  <button mat-raised-button color=\"warn\">Warn</button>\n  <button mat-raised-button disabled>Disabled</button>\n  <a mat-raised-button routerLink=\".\">Link</a>\n</div>\n\n<h3>Stroked Buttons</h3>\n<div class=\"example-button-row\">\n  <button mat-stroked-button>Basic</button>\n  <button mat-stroked-button color=\"primary\">Primary</button>\n  <button mat-stroked-button color=\"accent\">Accent</button>\n  <button mat-stroked-button color=\"warn\">Warn</button>\n  <button mat-stroked-button disabled>Disabled</button>\n  <a mat-stroked-button routerLink=\".\">Link</a>\n</div>\n\n<h3>Flat Buttons</h3>\n<div class=\"example-button-row\">\n  <button mat-flat-button>Basic</button>\n  <button mat-flat-button color=\"primary\">Primary</button>\n  <button mat-flat-button color=\"accent\">Accent</button>\n  <button mat-flat-button color=\"warn\">Warn</button>\n  <button mat-flat-button disabled>Disabled</button>\n  <a mat-flat-button routerLink=\".\">Link</a>\n</div>\n\n<h3>Icon Buttons</h3>\n<div class=\"example-button-row\">\n  <button mat-icon-button aria-label=\"Example icon-button with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <button mat-icon-button color=\"primary\" aria-label=\"Example icon-button with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <button mat-icon-button color=\"accent\" aria-label=\"Example icon-button with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <button mat-icon-button color=\"warn\" aria-label=\"Example icon-button with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <button mat-icon-button disabled aria-label=\"Example icon-button with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n</div>\n\n<h3>Fab Buttons</h3>\n<div class=\"example-button-row\">\n  <button mat-fab>Basic</button>\n  <button mat-fab color=\"primary\">Primary</button>\n  <button mat-fab color=\"accent\">Accent</button>\n  <button mat-fab color=\"warn\">Warn</button>\n  <button mat-fab disabled>Disabled</button>\n  <button mat-fab aria-label=\"Example icon-button with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <a mat-fab routerLink=\".\">Link</a>\n</div>\n\n<h3>Mini Fab Buttons</h3>\n<div class=\"example-button-row\">\n  <button mat-mini-fab>Basic</button>\n  <button mat-mini-fab color=\"primary\">Primary</button>\n  <button mat-mini-fab color=\"accent\">Accent</button>\n  <button mat-mini-fab color=\"warn\">Warn</button>\n  <button mat-mini-fab disabled>Disabled</button>\n  <button mat-mini-fab aria-label=\"Example icon-button with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <a mat-mini-fab routerLink=\".\">Link</a>\n</div>\n",
                styles: [".example-button-row button,\n.example-button-row a {\n  margin-right: 8px;\n}\n"]
            })
        ], ButtonTypesExample);
        return ButtonTypesExample;
    }());

    /**
     * @title Card with multiple sections
     */
    var CardFancyExample = /** @class */ (function () {
        function CardFancyExample() {
        }
        CardFancyExample = tslib_1.__decorate([
            core.Component({
                selector: 'card-fancy-example',
                template: "<mat-card class=\"example-card\">\n  <mat-card-header>\n    <div mat-card-avatar class=\"example-header-image\"></div>\n    <mat-card-title>Shiba Inu</mat-card-title>\n    <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n  </mat-card-header>\n  <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\">\n  <mat-card-content>\n    <p>\n      The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\n      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\n      bred for hunting.\n    </p>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-button>LIKE</button>\n    <button mat-button>SHARE</button>\n  </mat-card-actions>\n</mat-card>\n",
                styles: [".example-card {\n  max-width: 400px;\n}\n\n.example-header-image {\n  background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\n  background-size: cover;\n}\n"]
            })
        ], CardFancyExample);
        return CardFancyExample;
    }());

    /**
     * @title Basic cards
     */
    var CardOverviewExample = /** @class */ (function () {
        function CardOverviewExample() {
        }
        CardOverviewExample = tslib_1.__decorate([
            core.Component({
                selector: 'card-overview-example',
                template: "<mat-card>Simple card</mat-card>\n",
                styles: ["/** No CSS for this example */\n"]
            })
        ], CardOverviewExample);
        return CardOverviewExample;
    }());

    /** @title A custom CDK stepper without a form */
    var CdkCustomStepperWithoutFormExample = /** @class */ (function () {
        function CdkCustomStepperWithoutFormExample() {
        }
        CdkCustomStepperWithoutFormExample = tslib_1.__decorate([
            core.Component({
                selector: 'cdk-custom-stepper-without-form-example',
                template: "<example-custom-stepper>\n  <cdk-step> <p>This is any content of \"Step 1\"</p> </cdk-step>\n  <cdk-step> <p>This is any content of \"Step 2\"</p> </cdk-step>\n</example-custom-stepper>\n",
                styles: [""]
            })
        ], CdkCustomStepperWithoutFormExample);
        return CdkCustomStepperWithoutFormExample;
    }());
    /** Custom CDK stepper component */
    var CustomStepper = /** @class */ (function (_super) {
        tslib_1.__extends(CustomStepper, _super);
        function CustomStepper() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        CustomStepper_1 = CustomStepper;
        CustomStepper.prototype.onClick = function (index) {
            this.selectedIndex = index;
        };
        var CustomStepper_1;
        CustomStepper = CustomStepper_1 = tslib_1.__decorate([
            core.Component({
                selector: 'example-custom-stepper',
                template: "<section class=\"example-container\">\n  <header>\n    <h2>Step {{ selectedIndex + 1 }}/{{ steps.length }}</h2>\n  </header>\n\n  <div [style.display]=\"selected ? 'block' : 'none'\">\n    <ng-container [ngTemplateOutlet]=\"selected.content\"></ng-container>\n  </div>\n\n  <footer class=\"example-step-navigation-bar\">\n    <button class=\"example-nav-button\" cdkStepperPrevious>&larr;</button>\n    <button\n      class=\"example-step\"\n      *ngFor=\"let step of steps; let i = index\"\n      [ngClass]=\"{ 'example-active': selectedIndex === i }\"\n      (click)=\"onClick(i)\"\n    >\n      Step {{ i + 1 }}\n    </button>\n    <button class=\"example-nav-button\" cdkStepperNext>&rarr;</button>\n  </footer>\n</section>\n",
                providers: [{ provide: stepper.CdkStepper, useExisting: CustomStepper_1 }],
                styles: [".example-container {\n  border: 1px solid black;\n  padding: 10px;\n  margin: 10px;\n}\n\n.example-step-navigation-bar {\n  display: flex;\n  justify-content: flex-start;\n  margin-top: 10px;\n}\n\n.example-active {\n  color: blue;\n}\n\n.example-step {\n  background: transparent;\n  border: 0;\n  margin: 0 10px;\n  padding: 10px;\n  color: black;\n}\n\n.example-step.example-active {\n  color: blue;\n  border-bottom: 1px solid blue;\n}\n\n.example-nav-button {\n  background: transparent;\n  border: 0;\n}\n"]
            })
        ], CustomStepper);
        return CustomStepper;
    }(stepper.CdkStepper));

    /**
     * @title Drag&Drop position locking
     */
    var CdkDragDropAxisLockExample = /** @class */ (function () {
        function CdkDragDropAxisLockExample() {
        }
        CdkDragDropAxisLockExample = tslib_1.__decorate([
            core.Component({
                selector: 'cdk-drag-drop-axis-lock-example',
                template: "<div class=\"example-box\" cdkDragLockAxis=\"y\" cdkDrag>\n  I can only be dragged up/down\n</div>\n\n<div class=\"example-box\" cdkDragLockAxis=\"x\" cdkDrag>\n  I can only be dragged left/right\n</div>\n",
                styles: [".example-box {\n  width: 200px;\n  height: 200px;\n  border: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  cursor: move;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  background: #fff;\n  border-radius: 4px;\n  margin-right: 25px;\n  position: relative;\n  z-index: 1;\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),\n              0 2px 2px 0 rgba(0, 0, 0, 0.14),\n              0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n.example-box:active {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n"]
            })
        ], CdkDragDropAxisLockExample);
        return CdkDragDropAxisLockExample;
    }());

    /**
     * @title Drag&Drop boundary
     */
    var CdkDragDropBoundaryExample = /** @class */ (function () {
        function CdkDragDropBoundaryExample() {
        }
        CdkDragDropBoundaryExample = tslib_1.__decorate([
            core.Component({
                selector: 'cdk-drag-drop-boundary-example',
                template: "<div class=\"example-boundary\">\n  <div class=\"example-box\" cdkDragBoundary=\".example-boundary\" cdkDrag>\n    I can only be dragged within the dotted container\n  </div>\n</div>\n\n",
                styles: [".example-box {\n  width: 200px;\n  height: 200px;\n  border: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  cursor: move;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  background: #fff;\n  border-radius: 4px;\n  margin-right: 25px;\n  position: relative;\n  z-index: 1;\n  box-sizing: border-box;\n  padding: 10px;\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),\n              0 2px 2px 0 rgba(0, 0, 0, 0.14),\n              0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n.example-box:active {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.example-boundary {\n  width: 400px;\n  height: 400px;\n  max-width: 100%;\n  border: dotted #ccc 2px;\n}\n"]
            })
        ], CdkDragDropBoundaryExample);
        return CdkDragDropBoundaryExample;
    }());

    /**
     * @title Drag&Drop connected sorting group
     */
    var CdkDragDropConnectedSortingGroupExample = /** @class */ (function () {
        function CdkDragDropConnectedSortingGroupExample() {
            this.todo = [
                'Get to work',
                'Pick up groceries',
                'Go home',
                'Fall asleep'
            ];
            this.done = [
                'Get up',
                'Brush teeth',
                'Take a shower',
                'Check e-mail',
                'Walk dog'
            ];
        }
        CdkDragDropConnectedSortingGroupExample.prototype.drop = function (event) {
            if (event.previousContainer === event.container) {
                dragDrop.moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
            }
            else {
                dragDrop.transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
            }
        };
        CdkDragDropConnectedSortingGroupExample = tslib_1.__decorate([
            core.Component({
                selector: 'cdk-drag-drop-connected-sorting-group-example',
                template: "<div cdkDropListGroup>\n  <div class=\"example-container\">\n    <h2>To do</h2>\n\n    <div\n      cdkDropList\n      [cdkDropListData]=\"todo\"\n      class=\"example-list\"\n      (cdkDropListDropped)=\"drop($event)\">\n      <div class=\"example-box\" *ngFor=\"let item of todo\" cdkDrag>{{item}}</div>\n    </div>\n  </div>\n\n  <div class=\"example-container\">\n    <h2>Done</h2>\n\n    <div\n      cdkDropList\n      [cdkDropListData]=\"done\"\n      class=\"example-list\"\n      (cdkDropListDropped)=\"drop($event)\">\n      <div class=\"example-box\" *ngFor=\"let item of done\" cdkDrag>{{item}}</div>\n    </div>\n  </div>\n</div>\n",
                styles: [".example-container {\n  width: 400px;\n  max-width: 100%;\n  margin: 0 25px 25px 0;\n  display: inline-block;\n  vertical-align: top;\n}\n\n.example-list {\n  border: solid 1px #ccc;\n  min-height: 60px;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n  display: block;\n}\n\n.example-box {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n"]
            })
        ], CdkDragDropConnectedSortingGroupExample);
        return CdkDragDropConnectedSortingGroupExample;
    }());

    /**
     * @title Drag&Drop connected sorting
     */
    var CdkDragDropConnectedSortingExample = /** @class */ (function () {
        function CdkDragDropConnectedSortingExample() {
            this.todo = [
                'Get to work',
                'Pick up groceries',
                'Go home',
                'Fall asleep'
            ];
            this.done = [
                'Get up',
                'Brush teeth',
                'Take a shower',
                'Check e-mail',
                'Walk dog'
            ];
        }
        CdkDragDropConnectedSortingExample.prototype.drop = function (event) {
            if (event.previousContainer === event.container) {
                dragDrop.moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
            }
            else {
                dragDrop.transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
            }
        };
        CdkDragDropConnectedSortingExample = tslib_1.__decorate([
            core.Component({
                selector: 'cdk-drag-drop-connected-sorting-example',
                template: "<div class=\"example-container\">\n  <h2>To do</h2>\n\n  <div\n    cdkDropList\n    #todoList=\"cdkDropList\"\n    [cdkDropListData]=\"todo\"\n    [cdkDropListConnectedTo]=\"[doneList]\"\n    class=\"example-list\"\n    (cdkDropListDropped)=\"drop($event)\">\n    <div class=\"example-box\" *ngFor=\"let item of todo\" cdkDrag>{{item}}</div>\n  </div>\n</div>\n\n<div class=\"example-container\">\n  <h2>Done</h2>\n\n  <div\n    cdkDropList\n    #doneList=\"cdkDropList\"\n    [cdkDropListData]=\"done\"\n    [cdkDropListConnectedTo]=\"[todoList]\"\n    class=\"example-list\"\n    (cdkDropListDropped)=\"drop($event)\">\n    <div class=\"example-box\" *ngFor=\"let item of done\" cdkDrag>{{item}}</div>\n  </div>\n</div>\n\n",
                styles: [".example-container {\n  width: 400px;\n  max-width: 100%;\n  margin: 0 25px 25px 0;\n  display: inline-block;\n  vertical-align: top;\n}\n\n.example-list {\n  border: solid 1px #ccc;\n  min-height: 60px;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n  display: block;\n}\n\n.example-box {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n"]
            })
        ], CdkDragDropConnectedSortingExample);
        return CdkDragDropConnectedSortingExample;
    }());

    /**
     * @title Drag&Drop custom placeholer
     */
    var CdkDragDropCustomPlaceholderExample = /** @class */ (function () {
        function CdkDragDropCustomPlaceholderExample() {
            this.movies = [
                'Episode I - The Phantom Menace',
                'Episode II - Attack of the Clones',
                'Episode III - Revenge of the Sith',
                'Episode IV - A New Hope',
                'Episode V - The Empire Strikes Back',
                'Episode VI - Return of the Jedi',
                'Episode VII - The Force Awakens',
                'Episode VIII - The Last Jedi'
            ];
        }
        CdkDragDropCustomPlaceholderExample.prototype.drop = function (event) {
            dragDrop.moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
        };
        CdkDragDropCustomPlaceholderExample = tslib_1.__decorate([
            core.Component({
                selector: 'cdk-drag-drop-custom-placeholder-example',
                template: "<div cdkDropList class=\"example-list\" (cdkDropListDropped)=\"drop($event)\">\n  <div class=\"example-box\" *ngFor=\"let movie of movies\" cdkDrag>\n    <div class=\"example-custom-placeholder\" *cdkDragPlaceholder></div>\n    {{movie}}\n  </div>\n</div>\n",
                styles: [".example-list {\n  width: 500px;\n  max-width: 100%;\n  border: solid 1px #ccc;\n  min-height: 60px;\n  display: block;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n}\n\n.example-box {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-custom-placeholder {\n  background: #ccc;\n  border: dotted 3px #999;\n  min-height: 60px;\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n"]
            })
        ], CdkDragDropCustomPlaceholderExample);
        return CdkDragDropCustomPlaceholderExample;
    }());

    /**
     * @title Drag&Drop custom preview
     */
    var CdkDragDropCustomPreviewExample = /** @class */ (function () {
        function CdkDragDropCustomPreviewExample() {
            // tslint:disable:max-line-length
            this.movies = [
                {
                    title: 'Episode I - The Phantom Menace',
                    poster: 'https://upload.wikimedia.org/wikipedia/en/4/40/Star_Wars_Phantom_Menace_poster.jpg'
                },
                {
                    title: 'Episode II - Attack of the Clones',
                    poster: 'https://upload.wikimedia.org/wikipedia/en/3/32/Star_Wars_-_Episode_II_Attack_of_the_Clones_%28movie_poster%29.jpg'
                },
                {
                    title: 'Episode III - Revenge of the Sith',
                    poster: 'https://upload.wikimedia.org/wikipedia/en/9/93/Star_Wars_Episode_III_Revenge_of_the_Sith_poster.jpg'
                },
                {
                    title: 'Episode IV - A New Hope',
                    poster: 'https://upload.wikimedia.org/wikipedia/en/8/87/StarWarsMoviePoster1977.jpg'
                },
                {
                    title: 'Episode V - The Empire Strikes Back',
                    poster: 'https://upload.wikimedia.org/wikipedia/en/3/3c/SW_-_Empire_Strikes_Back.jpg'
                },
                {
                    title: 'Episode VI - Return of the Jedi',
                    poster: 'https://upload.wikimedia.org/wikipedia/en/b/b2/ReturnOfTheJediPoster1983.jpg'
                },
                {
                    title: 'Episode VII - The Force Awakens',
                    poster: 'https://upload.wikimedia.org/wikipedia/en/a/a2/Star_Wars_The_Force_Awakens_Theatrical_Poster.jpg'
                },
                {
                    title: 'Episode VIII - The Last Jedi',
                    poster: 'https://upload.wikimedia.org/wikipedia/en/7/7f/Star_Wars_The_Last_Jedi.jpg'
                }
            ];
        }
        // tslint:enable:max-line-length
        CdkDragDropCustomPreviewExample.prototype.drop = function (event) {
            dragDrop.moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
        };
        CdkDragDropCustomPreviewExample = tslib_1.__decorate([
            core.Component({
                selector: 'cdk-drag-drop-custom-preview-example',
                template: "<div cdkDropList class=\"example-list\" (cdkDropListDropped)=\"drop($event)\">\n  <div class=\"example-box\" *ngFor=\"let movie of movies\" cdkDrag>\n    {{movie.title}}\n    <img *cdkDragPreview [src]=\"movie.poster\" [alt]=\"movie.title\">\n  </div>\n</div>\n",
                styles: [".example-list {\n  width: 500px;\n  max-width: 100%;\n  border: solid 1px #ccc;\n  min-height: 60px;\n  display: block;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n}\n\n.example-box {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n"]
            })
        ], CdkDragDropCustomPreviewExample);
        return CdkDragDropCustomPreviewExample;
    }());

    /**
     * @title Delayed dragging
     */
    var CdkDragDropDelayExample = /** @class */ (function () {
        function CdkDragDropDelayExample() {
        }
        CdkDragDropDelayExample = tslib_1.__decorate([
            core.Component({
                selector: 'cdk-drag-drop-delay-example',
                template: "<div class=\"example-box\" cdkDrag [cdkDragStartDelay]=\"1000\">\n  Dragging starts after one second\n</div>\n",
                styles: [".example-box {\n  width: 200px;\n  height: 200px;\n  border: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  cursor: move;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  background: #fff;\n  border-radius: 4px;\n  position: relative;\n  z-index: 1;\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),\n              0 2px 2px 0 rgba(0, 0, 0, 0.14),\n              0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n.example-box:active {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n"]
            })
        ], CdkDragDropDelayExample);
        return CdkDragDropDelayExample;
    }());

    /**
     * @title Drag&Drop disabled sorting
     */
    var CdkDragDropDisabledSortingExample = /** @class */ (function () {
        function CdkDragDropDisabledSortingExample() {
            this.items = [
                'Carrots',
                'Tomatoes',
                'Onions',
                'Apples',
                'Avocados'
            ];
            this.basket = [
                'Oranges',
                'Bananas',
                'Cucumbers'
            ];
        }
        CdkDragDropDisabledSortingExample.prototype.drop = function (event) {
            if (event.previousContainer === event.container) {
                dragDrop.moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
            }
            else {
                dragDrop.transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
            }
        };
        CdkDragDropDisabledSortingExample = tslib_1.__decorate([
            core.Component({
                selector: 'cdk-drag-drop-disabled-sorting-example',
                template: "<div cdkDropListGroup>\n  <div class=\"example-container\">\n    <h2>Available items</h2>\n\n    <div\n      cdkDropList\n      [cdkDropListData]=\"items\"\n      class=\"example-list\"\n      cdkDropListSortingDisabled\n      (cdkDropListDropped)=\"drop($event)\">\n      <div class=\"example-box\" *ngFor=\"let item of items\" cdkDrag>{{item}}</div>\n    </div>\n  </div>\n\n  <div class=\"example-container\">\n    <h2>Shopping basket</h2>\n\n    <div\n      cdkDropList\n      [cdkDropListData]=\"basket\"\n      class=\"example-list\"\n      (cdkDropListDropped)=\"drop($event)\">\n      <div class=\"example-box\" *ngFor=\"let item of basket\" cdkDrag>{{item}}</div>\n    </div>\n  </div>\n</div>\n",
                styles: [".example-container {\n  width: 400px;\n  max-width: 100%;\n  margin: 0 25px 25px 0;\n  display: inline-block;\n  vertical-align: top;\n}\n\n.example-list {\n  border: solid 1px #ccc;\n  min-height: 60px;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n  display: block;\n}\n\n.example-box {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n"]
            })
        ], CdkDragDropDisabledSortingExample);
        return CdkDragDropDisabledSortingExample;
    }());

    /**
     * @title Drag&Drop disabled
     */
    var CdkDragDropDisabledExample = /** @class */ (function () {
        function CdkDragDropDisabledExample() {
            this.items = [
                { value: 'I can be dragged', disabled: false },
                { value: 'I cannot be dragged', disabled: true },
                { value: 'I can also be dragged', disabled: false }
            ];
        }
        CdkDragDropDisabledExample.prototype.drop = function (event) {
            dragDrop.moveItemInArray(this.items, event.previousIndex, event.currentIndex);
        };
        CdkDragDropDisabledExample = tslib_1.__decorate([
            core.Component({
                selector: 'cdk-drag-drop-disabled-example',
                template: "<div cdkDropList class=\"example-list\" (cdkDropListDropped)=\"drop($event)\">\n  <div\n    class=\"example-box\"\n    *ngFor=\"let item of items\"\n    cdkDrag\n    [cdkDragDisabled]=\"item.disabled\">{{item.value}}</div>\n</div>\n",
                styles: [".example-list {\n  width: 500px;\n  max-width: 100%;\n  border: solid 1px #ccc;\n  min-height: 60px;\n  display: block;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n}\n\n.example-box {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n\n.example-box.cdk-drag-disabled {\n  background: #ccc;\n  cursor: default;\n}\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n"]
            })
        ], CdkDragDropDisabledExample);
        return CdkDragDropDisabledExample;
    }());

    /**
     * @title Drag&Drop enter predicate
     */
    var CdkDragDropEnterPredicateExample = /** @class */ (function () {
        function CdkDragDropEnterPredicateExample() {
            this.all = [1, 2, 3, 4, 5, 6, 7, 8, 9];
            this.even = [10];
        }
        CdkDragDropEnterPredicateExample.prototype.drop = function (event) {
            if (event.previousContainer === event.container) {
                dragDrop.moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
            }
            else {
                dragDrop.transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
            }
        };
        /** Predicate function that only allows even numbers to be dropped into a list. */
        CdkDragDropEnterPredicateExample.prototype.evenPredicate = function (item) {
            return item.data % 2 === 0;
        };
        /** Predicate function that doesn't allow items to be dropped into a list. */
        CdkDragDropEnterPredicateExample.prototype.noReturnPredicate = function () {
            return false;
        };
        CdkDragDropEnterPredicateExample = tslib_1.__decorate([
            core.Component({
                selector: 'cdk-drag-drop-enter-predicate-example',
                template: "<div class=\"example-container\">\n  <h2>Available numbers</h2>\n\n  <div\n    id=\"all\"\n    cdkDropList\n    [cdkDropListData]=\"all\"\n    cdkDropListConnectedTo=\"even\"\n    class=\"example-list\"\n    (cdkDropListDropped)=\"drop($event)\"\n    [cdkDropListEnterPredicate]=\"noReturnPredicate\">\n    <div\n      class=\"example-box\"\n      *ngFor=\"let number of all\"\n      [cdkDragData]=\"number\"\n      cdkDrag>{{number}}</div>\n  </div>\n</div>\n\n<div class=\"example-container\">\n  <h2>Even numbers</h2>\n\n  <div\n    id=\"even\"\n    cdkDropList\n    [cdkDropListData]=\"even\"\n    cdkDropListConnectedTo=\"all\"\n    class=\"example-list\"\n    (cdkDropListDropped)=\"drop($event)\"\n    [cdkDropListEnterPredicate]=\"evenPredicate\">\n    <div\n      class=\"example-box\"\n      *ngFor=\"let number of even\"\n      cdkDrag\n      [cdkDragData]=\"number\">{{number}}</div>\n  </div>\n</div>\n\n",
                styles: [".example-container {\n  width: 400px;\n  max-width: 100%;\n  margin: 0 25px 25px 0;\n  display: inline-block;\n  vertical-align: top;\n}\n\n.example-list {\n  border: solid 1px #ccc;\n  min-height: 60px;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n  display: block;\n}\n\n.example-box {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n"]
            })
        ], CdkDragDropEnterPredicateExample);
        return CdkDragDropEnterPredicateExample;
    }());

    /**
     * @title Programmatically setting the free drag position
     */
    var CdkDragDropFreeDragPositionExample = /** @class */ (function () {
        function CdkDragDropFreeDragPositionExample() {
            this.dragPosition = { x: 0, y: 0 };
        }
        CdkDragDropFreeDragPositionExample.prototype.changePosition = function () {
            this.dragPosition = { x: this.dragPosition.x + 50, y: this.dragPosition.y + 50 };
        };
        CdkDragDropFreeDragPositionExample = tslib_1.__decorate([
            core.Component({
                selector: 'cdk-drag-drop-free-drag-position-example',
                template: "<p>\n  <button (click)=\"changePosition()\">Change element position</button>\n</p>\n\n<div class=\"example-box\" cdkDrag [cdkDragFreeDragPosition]=\"dragPosition\">\n  Drag me around\n</div>\n",
                styles: [".example-box {\n  width: 200px;\n  height: 200px;\n  border: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  cursor: move;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  background: #fff;\n  border-radius: 4px;\n  position: relative;\n  z-index: 1;\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),\n              0 2px 2px 0 rgba(0, 0, 0, 0.14),\n              0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n.example-box:active {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n"]
            })
        ], CdkDragDropFreeDragPositionExample);
        return CdkDragDropFreeDragPositionExample;
    }());

    /**
     * @title Drag&Drop with a handle
     */
    var CdkDragDropHandleExample = /** @class */ (function () {
        function CdkDragDropHandleExample() {
        }
        CdkDragDropHandleExample = tslib_1.__decorate([
            core.Component({
                selector: 'cdk-drag-drop-handle-example',
                template: "<div class=\"example-box\" cdkDrag>\n  I can only be dragged using the handle\n\n  <div class=\"example-handle\" cdkDragHandle>\n    <svg width=\"24px\" fill=\"currentColor\" viewBox=\"0 0 24 24\">\n      <path d=\"M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2l-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z\"></path>\n      <path d=\"M0 0h24v24H0z\" fill=\"none\"></path>\n    </svg>\n  </div>\n</div>\n",
                styles: [".example-box {\n  width: 200px;\n  height: 200px;\n  padding: 10px;\n  box-sizing: border-box;\n  border: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  background: #fff;\n  border-radius: 4px;\n  position: relative;\n  z-index: 1;\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),\n              0 2px 2px 0 rgba(0, 0, 0, 0.14),\n              0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n.example-box:active {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.example-handle {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  color: #ccc;\n  cursor: move;\n  width: 24px;\n  height: 24px;\n}\n"]
            })
        ], CdkDragDropHandleExample);
        return CdkDragDropHandleExample;
    }());

    /**
     * @title Drag&Drop horizontal sorting
     */
    var CdkDragDropHorizontalSortingExample = /** @class */ (function () {
        function CdkDragDropHorizontalSortingExample() {
            this.timePeriods = [
                'Bronze age',
                'Iron age',
                'Middle ages',
                'Early modern period',
                'Long nineteenth century'
            ];
        }
        CdkDragDropHorizontalSortingExample.prototype.drop = function (event) {
            dragDrop.moveItemInArray(this.timePeriods, event.previousIndex, event.currentIndex);
        };
        CdkDragDropHorizontalSortingExample = tslib_1.__decorate([
            core.Component({
                selector: 'cdk-drag-drop-horizontal-sorting-example',
                template: "<div cdkDropList cdkDropListOrientation=\"horizontal\" class=\"example-list\" (cdkDropListDropped)=\"drop($event)\">\n  <div class=\"example-box\" *ngFor=\"let timePeriod of timePeriods\" cdkDrag>{{timePeriod}}</div>\n</div>\n",
                styles: [".example-list {\n  width: 1000px;\n  max-width: 100%;\n  border: solid 1px #ccc;\n  min-height: 60px;\n  display: flex;\n  flex-direction: row;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n}\n\n.example-box {\n  padding: 20px 10px;\n  border-right: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n  flex-grow: 1;\n  flex-basis: 0;\n}\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n"]
            })
        ], CdkDragDropHorizontalSortingExample);
        return CdkDragDropHorizontalSortingExample;
    }());

    /**
     * @title Basic Drag&Drop
     */
    var CdkDragDropOverviewExample = /** @class */ (function () {
        function CdkDragDropOverviewExample() {
        }
        CdkDragDropOverviewExample = tslib_1.__decorate([
            core.Component({
                selector: 'cdk-drag-drop-overview-example',
                template: "<div class=\"example-box\" cdkDrag>\n  Drag me around\n</div>\n",
                styles: [".example-box {\n  width: 200px;\n  height: 200px;\n  border: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  cursor: move;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  background: #fff;\n  border-radius: 4px;\n  position: relative;\n  z-index: 1;\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),\n              0 2px 2px 0 rgba(0, 0, 0, 0.14),\n              0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n.example-box:active {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n"]
            })
        ], CdkDragDropOverviewExample);
        return CdkDragDropOverviewExample;
    }());

    /**
     * @title Drag&Drop with alternate root element
     */
    var CdkDragDropRootElementExample = /** @class */ (function () {
        function CdkDragDropRootElementExample(_overlay, _viewContainerRef) {
            this._overlay = _overlay;
            this._viewContainerRef = _viewContainerRef;
        }
        CdkDragDropRootElementExample.prototype.ngAfterViewInit = function () {
            var _this = this;
            this._portal = new portal.TemplatePortal(this._dialogTemplate, this._viewContainerRef);
            this._overlayRef = this._overlay.create({
                positionStrategy: this._overlay.position().global().centerHorizontally().centerVertically(),
                hasBackdrop: true
            });
            this._overlayRef.backdropClick().subscribe(function () { return _this._overlayRef.detach(); });
        };
        CdkDragDropRootElementExample.prototype.ngOnDestroy = function () {
            this._overlayRef.dispose();
        };
        CdkDragDropRootElementExample.prototype.openDialog = function () {
            this._overlayRef.attach(this._portal);
        };
        tslib_1.__decorate([
            core.ViewChild(core.TemplateRef, { static: false }),
            tslib_1.__metadata("design:type", core.TemplateRef)
        ], CdkDragDropRootElementExample.prototype, "_dialogTemplate", void 0);
        CdkDragDropRootElementExample = tslib_1.__decorate([
            core.Component({
                selector: 'cdk-drag-drop-root-element-example',
                template: "<button (click)=\"openDialog()\">Open a draggable dialog</button>\n\n<ng-template>\n  <div class=\"example-dialog-content\" cdkDrag cdkDragRootElement=\".cdk-overlay-pane\">\n    Drag the dialog around!\n  </div>\n</ng-template>\n",
                styles: [".example-dialog-content {\n  width: 200px;\n  height: 200px;\n  border: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  cursor: move;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #fff;\n  border-radius: 4px;\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),\n              0 2px 2px 0 rgba(0, 0, 0, 0.14),\n              0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n.example-dialog-content:active {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n"]
            }),
            tslib_1.__metadata("design:paramtypes", [overlay.Overlay, core.ViewContainerRef])
        ], CdkDragDropRootElementExample);
        return CdkDragDropRootElementExample;
    }());

    /**
     * @title Drag&Drop sorting
     */
    var CdkDragDropSortingExample = /** @class */ (function () {
        function CdkDragDropSortingExample() {
            this.movies = [
                'Episode I - The Phantom Menace',
                'Episode II - Attack of the Clones',
                'Episode III - Revenge of the Sith',
                'Episode IV - A New Hope',
                'Episode V - The Empire Strikes Back',
                'Episode VI - Return of the Jedi',
                'Episode VII - The Force Awakens',
                'Episode VIII - The Last Jedi'
            ];
        }
        CdkDragDropSortingExample.prototype.drop = function (event) {
            dragDrop.moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
        };
        CdkDragDropSortingExample = tslib_1.__decorate([
            core.Component({
                selector: 'cdk-drag-drop-sorting-example',
                template: "<div cdkDropList class=\"example-list\" (cdkDropListDropped)=\"drop($event)\">\n  <div class=\"example-box\" *ngFor=\"let movie of movies\" cdkDrag>{{movie}}</div>\n</div>\n",
                styles: [".example-list {\n  width: 500px;\n  max-width: 100%;\n  border: solid 1px #ccc;\n  min-height: 60px;\n  display: block;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n}\n\n.example-box {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n"]
            })
        ], CdkDragDropSortingExample);
        return CdkDragDropSortingExample;
    }());

    /**
     * @title Platform overview
     */
    var CdkPlatformOverviewExample = /** @class */ (function () {
        function CdkPlatformOverviewExample(platform$1) {
            this.platform = platform$1;
            this.supportedInputTypes = Array.from(platform.getSupportedInputTypes()).join(', ');
            this.supportsPassiveEventListeners = platform.supportsPassiveEventListeners();
            this.supportsScrollBehavior = platform.supportsScrollBehavior();
        }
        CdkPlatformOverviewExample = tslib_1.__decorate([
            core.Component({
                selector: 'cdk-platform-overview-example',
                template: "<h3>Platform information:</h3>\n<p>Is Android: {{platform.ANDROID}}</p>\n<p>Is iOS: {{platform.IOS}}</p>\n<p>Is Firefox: {{platform.FIREFOX}}</p>\n<p>Is Blink: {{platform.BLINK}}</p>\n<p>Is Webkit: {{platform.WEBKIT}}</p>\n<p>Is Trident: {{platform.TRIDENT}}</p>\n<p>Is Edge: {{platform.EDGE}}</p>\n<p>Supported input types: {{supportedInputTypes}}</p>\n<p>Supports passive event listeners: {{supportsPassiveEventListeners}}</p>\n<p>Supports scroll behavior: {{supportsScrollBehavior}}</p>\n",
                styles: ["/** No CSS for this example */\n"]
            }),
            tslib_1.__metadata("design:paramtypes", [platform.Platform])
        ], CdkPlatformOverviewExample);
        return CdkPlatformOverviewExample;
    }());

    var ELEMENT_DATA = [
        { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
        { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
        { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
        { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
        { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
        { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
        { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
        { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
        { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
        { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
        { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
        { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
        { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
        { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
        { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
        { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
        { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
        { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
        { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
        { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
    ];
    /**
     * @title CDK Popover Edit on a flex cdk-table.
     */
    var CdkPopoverEditCdkTableFlexExample = /** @class */ (function () {
        function CdkPopoverEditCdkTableFlexExample() {
            this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
            this.dataSource = new ExampleDataSource();
            this.preservedNameValues = new WeakMap();
            this.preservedWeightValues = new WeakMap();
        }
        CdkPopoverEditCdkTableFlexExample.prototype.onSubmitName = function (element, f) {
            if (!f.valid) {
                return;
            }
            element.name = f.value.name;
        };
        CdkPopoverEditCdkTableFlexExample.prototype.onSubmitWeight = function (element, f) {
            if (!f.valid) {
                return;
            }
            element.weight = f.value.weight;
        };
        CdkPopoverEditCdkTableFlexExample = tslib_1.__decorate([
            core.Component({
                selector: 'cdk-popover-edit-cdk-table-flex-example',
                template: "<cdk-table class=\"example-table\" editable [dataSource]=\"dataSource\">\n  <!--\n    This edit lens is specified outside of the cell and must explicitly declare\n    its context. It could be reused in multiple cells.\n  -->\n  <ng-template #weightEdit let-element>\n    <div style=\"background-color: white;\">\n      <form #f=\"ngForm\"\n          cdkEditControl\n          (ngSubmit)=\"onSubmitWeight(element, f)\"\n          [cdkEditControlPreservedFormValue]=\"preservedWeightValues.get(element)\"\n          (cdkEditControlPreservedFormValueChange)=\"preservedWeightValues.set(element, $event)\">\n        Edit b:\n        <input type=\"number\" [ngModel]=\"element.weight\" name=\"weight\" required>\n        <br>\n        <button type=\"submit\">Confirm</button>\n        <button cdkEditRevert>Revert</button>\n        <button cdkEditClose>Close</button>\n      </form>\n    </div>\n  </ng-template>\n\n  <!-- Position Column -->\n  <ng-container cdkColumnDef=\"position\">\n    <cdk-header-cell *cdkHeaderCellDef> No. </cdk-header-cell>\n    <cdk-cell *cdkCellDef=\"let element\"> {{element.position}} </cdk-cell>\n  </ng-container>\n\n  <!-- Name Column -->\n  <ng-container cdkColumnDef=\"name\">\n    <cdk-header-cell *cdkHeaderCellDef> Name </cdk-header-cell>\n    <cdk-cell *cdkCellDef=\"let element\"\n        [cdkPopoverEdit]=\"nameEdit\">\n      {{element.name}}\n      \n      <!-- This edit is defined in the cell and can implicitly access element -->\n      <ng-template #nameEdit>\n        <div style=\"background-color: white;\">\n          <form #f=\"ngForm\"\n              cdkEditControl\n              (ngSubmit)=\"onSubmitName(element, f)\"\n              [cdkEditControlPreservedFormValue]=\"preservedNameValues.get(element)\"\n              (cdkEditControlPreservedFormValueChange)=\"preservedNameValues.set(element, $event)\">\n            Edit a:\n            <input [ngModel]=\"element.name\" name=\"name\" required>\n            <br>\n            <button type=\"submit\">Confirm</button>\n            <button cdkEditRevert>Revert</button>\n            <button cdkEditClose>Close</button>\n          </form>\n        </div>\n      </ng-template>\n\n      <span *cdkRowHoverContent>\n        <button cdkEditOpen>Edit</button>\n      </span>\n    </cdk-cell>\n  </ng-container>\n\n  <!-- Weight Column -->\n  <ng-container cdkColumnDef=\"weight\">\n    <cdk-header-cell *cdkHeaderCellDef> Weight </cdk-header-cell>\n    <cdk-cell *cdkCellDef=\"let element\"\n        [cdkPopoverEdit]=\"weightEdit\" [cdkPopoverEditContext]=\"element\">\n      {{element.weight}}\n      \n      <span *cdkRowHoverContent>\n        <button cdkEditOpen>Edit</button>\n      </span>\n    </cdk-cell>\n  </ng-container>\n\n  <!-- Symbol Column -->\n  <ng-container cdkColumnDef=\"symbol\">\n    <cdk-header-cell *cdkHeaderCellDef> Symbol </cdk-header-cell>\n    <cdk-cell *cdkCellDef=\"let element\"> {{element.symbol}} </cdk-cell>\n  </ng-container>\n\n  <cdk-header-row *cdkHeaderRowDef=\"displayedColumns\"></cdk-header-row>\n  <cdk-row *cdkRowDef=\"let row; columns: displayedColumns;\"></cdk-row>\n</cdk-table>\n",
                styles: ["/**\n * Add basic flex styling so that the cells evenly space themselves in the row.\n */\n.example-table cdk-row, cdk-header-row, cdk-footer-row {\n  display: flex;\n}\n\n.example-table cdk-cell, cdk-header-cell, cdk-footer-cell {\n  flex: 1;\n}\n"]
            })
        ], CdkPopoverEditCdkTableFlexExample);
        return CdkPopoverEditCdkTableFlexExample;
    }());
    /**
     * Data source to provide what data should be rendered in the table. Note that the data source
     * can retrieve its data in any way. In this case, the data source is provided a reference
     * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
     * the underlying data. Instead, it only needs to take the data and send the table exactly what
     * should be rendered.
     */
    var ExampleDataSource = /** @class */ (function (_super) {
        tslib_1.__extends(ExampleDataSource, _super);
        function ExampleDataSource() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /** Stream of data that is provided to the table. */
            _this.data = new rxjs.BehaviorSubject(ELEMENT_DATA);
            return _this;
        }
        /** Connect function called by the table to retrieve one stream containing the data to render. */
        ExampleDataSource.prototype.connect = function () {
            return this.data;
        };
        ExampleDataSource.prototype.disconnect = function () { };
        return ExampleDataSource;
    }(collections.DataSource));

    var ELEMENT_DATA$1 = [
        { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
        { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
        { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
        { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
        { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
        { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
        { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
        { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
        { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
        { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
        { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
        { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
        { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
        { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
        { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
        { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
        { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
        { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
        { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
        { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
    ];
    /**
     * @title CDK Popover Edit on a CDK data-table
     */
    var CdkPopoverEditCdkTableExample = /** @class */ (function () {
        function CdkPopoverEditCdkTableExample() {
            this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
            this.dataSource = new ExampleDataSource$1();
            this.preservedNameValues = new WeakMap();
            this.preservedWeightValues = new WeakMap();
        }
        CdkPopoverEditCdkTableExample.prototype.onSubmitName = function (element, f) {
            if (!f.valid) {
                return;
            }
            element.name = f.value.name;
        };
        CdkPopoverEditCdkTableExample.prototype.onSubmitWeight = function (element, f) {
            if (!f.valid) {
                return;
            }
            element.weight = f.value.weight;
        };
        CdkPopoverEditCdkTableExample = tslib_1.__decorate([
            core.Component({
                selector: 'cdk-popover-edit-cdk-table-example',
                template: "<table class=\"example-table\" cdk-table editable [dataSource]=\"dataSource\">\n  <!--\n    This edit lens is specified outside of the cell and must explicitly declare\n    its context. It could be reused in multiple cells.\n  -->\n  <ng-template #weightEdit let-element>\n    <div style=\"background-color: white;\">\n      <form #f=\"ngForm\"\n          cdkEditControl\n          (ngSubmit)=\"onSubmitWeight(element, f)\"\n          [cdkEditControlPreservedFormValue]=\"preservedWeightValues.get(element)\"\n          (cdkEditControlPreservedFormValueChange)=\"preservedWeightValues.set(element, $event)\">\n        Edit b:\n        <input type=\"number\" [ngModel]=\"element.weight\" name=\"weight\" required>\n        <br>\n        <button type=\"submit\">Confirm</button>\n        <button cdkEditRevert cdkEditClose>Revert and close</button>\n      </form>\n    </div>\n  </ng-template>\n\n  <!-- Position Column -->\n  <ng-container cdkColumnDef=\"position\">\n    <th cdk-header-cell *cdkHeaderCellDef> No. </th>\n    <td cdk-cell *cdkCellDef=\"let element\"> {{element.position}} </td>\n  </ng-container>\n\n  <!-- Name Column -->\n  <ng-container cdkColumnDef=\"name\">\n    <th cdk-header-cell *cdkHeaderCellDef> Name </th>\n    <td cdk-cell *cdkCellDef=\"let element\"\n        [cdkPopoverEdit]=\"nameEdit\">\n      {{element.name}}\n      \n      <!-- This edit is defined in the cell and can implicitly access element -->\n      <ng-template #nameEdit>\n        <div style=\"background-color: white;\">\n          <form #f=\"ngForm\"\n              cdkEditControl\n              (ngSubmit)=\"onSubmitName(element, f)\"\n              [cdkEditControlPreservedFormValue]=\"preservedNameValues.get(element)\"\n              (cdkEditControlPreservedFormValueChange)=\"preservedNameValues.set(element, $event)\">\n            Edit a:\n            <input [ngModel]=\"element.name\" name=\"name\" required>\n            <br>\n            <button type=\"submit\">Confirm</button>\n            <button cdkEditRevert>Revert</button>\n            <button cdkEditClose>Close</button>\n          </form>\n        </div>\n      </ng-template>\n\n      <span *cdkRowHoverContent>\n        <button cdkEditOpen>Edit</button>\n      </span>\n    </td>\n  </ng-container>\n\n  <!-- Weight Column -->\n  <ng-container cdkColumnDef=\"weight\">\n    <th cdk-header-cell *cdkHeaderCellDef> Weight </th>\n    <td cdk-cell *cdkCellDef=\"let element\"\n        [cdkPopoverEdit]=\"weightEdit\" [cdkPopoverEditContext]=\"element\">\n      {{element.weight}}\n      \n      <span *cdkRowHoverContent>\n        <button cdkEditOpen>Edit</button>\n      </span>\n    </td>\n  </ng-container>\n\n  <!-- Symbol Column -->\n  <ng-container cdkColumnDef=\"symbol\">\n    <th cdk-header-cell *cdkHeaderCellDef> Symbol </th>\n    <td cdk-cell *cdkCellDef=\"let element\"> {{element.symbol}} </td>\n  </ng-container>\n\n  <tr cdk-header-row *cdkHeaderRowDef=\"displayedColumns\"></tr>\n  <tr cdk-row *cdkRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>\n",
                styles: [".example-table {\n  width: 100%;\n}\n\n.example-table th {\n  text-align: left;\n}\n\n.example-table td,\n.example-table th {\n  width: 25%;\n}\n"]
            })
        ], CdkPopoverEditCdkTableExample);
        return CdkPopoverEditCdkTableExample;
    }());
    /**
     * Data source to provide what data should be rendered in the table. Note that the data source
     * can retrieve its data in any way. In this case, the data source is provided a reference
     * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
     * the underlying data. Instead, it only needs to take the data and send the table exactly what
     * should be rendered.
     */
    var ExampleDataSource$1 = /** @class */ (function (_super) {
        tslib_1.__extends(ExampleDataSource, _super);
        function ExampleDataSource() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /** Stream of data that is provided to the table. */
            _this.data = new rxjs.BehaviorSubject(ELEMENT_DATA$1);
            return _this;
        }
        /** Connect function called by the table to retrieve one stream containing the data to render. */
        ExampleDataSource.prototype.connect = function () {
            return this.data;
        };
        ExampleDataSource.prototype.disconnect = function () { };
        return ExampleDataSource;
    }(collections.DataSource));

    var PERSON_DATA = [
        { id: 1, firstName: 'Terra', middleName: 'Maduin', lastName: 'Branford' },
        { id: 2, firstName: 'Locke', middleName: '', lastName: 'Cole' },
        { id: 3, firstName: 'Celes', middleName: 'Gestahl', lastName: 'Chere' },
        { id: 4, firstName: 'Edgar', middleName: 'Roni', lastName: 'Figaro' },
        { id: 5, firstName: 'Sabin', middleName: 'Rene', lastName: 'Figaro' },
        { id: 6, firstName: 'Clyde', middleName: '"Shadow"', lastName: 'Arrowny' },
        { id: 7, firstName: 'Setzer', middleName: '', lastName: 'Gabbiani' },
        { id: 8, firstName: 'Cid', middleName: 'Del Norte', lastName: 'Marquez' },
        { id: 9, firstName: 'Mog', middleName: '', lastName: 'McMoogle' },
    ];
    /**
     * @title CDK Popover Edit spanning multiple columns on an HTML data-table
     */
    var CdkPopoverEditCellSpanVanillaTableExample = /** @class */ (function () {
        function CdkPopoverEditCellSpanVanillaTableExample() {
            this.preservedValues = new WeakMap();
            this.persons = PERSON_DATA;
        }
        CdkPopoverEditCellSpanVanillaTableExample.prototype.onSubmit = function (person, f) {
            if (!f.valid) {
                return;
            }
            person.firstName = f.value['firstName'];
            person.middleName = f.value['middleName'];
            person.lastName = f.value['lastName'];
        };
        CdkPopoverEditCellSpanVanillaTableExample = tslib_1.__decorate([
            core.Component({
                selector: 'cdk-popover-edit-cell-span-vanilla-table-example',
                template: "<table editable class=\"example-table\">\n  <!--\n    This edit lens is specified outside of the cell and must explicitly declare\n    its context. It could be reused in multiple cells.\n  -->\n  <ng-template #nameEdit let-ctx>\n    <div style=\"background-color: #ddd; width: 100%\">\n      <form #f=\"ngForm\"\n          cdkEditControl\n          (ngSubmit)=\"onSubmit(ctx.person, f)\"\n          [cdkEditControlPreservedFormValue]=\"preservedValues.get(ctx.person)\"\n          (cdkEditControlPreservedFormValueChange)=\"preservedValues.set(ctx.person, $event)\">\n        <div class=\"example-input-container\">\n          <input [ngModel]=\"ctx.person.firstName\" name=\"firstName\" required\n              [attr.cdkFocusInitial]=\"ctx.focus === 'firstName' || null\">\n          <input [ngModel]=\"ctx.person.middleName\" name=\"middleName\"\n              [attr.cdkFocusInitial]=\"ctx.focus === 'middleName' || null\">\n          <input [ngModel]=\"ctx.person.lastName\" name=\"lastName\" required\n              [attr.cdkFocusInitial]=\"ctx.focus === 'lastName' || null\">\n        </div>\n        <br>\n        <br>\n        <button type=\"submit\">Confirm</button>\n        <button cdkEditRevert>Revert</button>\n        <button cdkEditClose>Close</button>\n      </form>\n    </div>\n  </ng-template>\n  \n  <tr>\n    <th> No. </th>\n    <th> First name </th>\n    <th> Middle name </th>\n    <th> Last name </th>\n  </tr>\n  \n  <tr *ngFor=\"let person of persons\">\n    <td> {{person.id}} </td>\n\n    <td [cdkPopoverEdit]=\"nameEdit\"\n        [cdkPopoverEditContext]=\"{person: person, focus: 'firstName'}\"\n        [cdkPopoverEditColspan]=\"{after: 2}\">\n      {{person.firstName}}\n      \n      <span *cdkRowHoverContent>\n        <button cdkEditOpen>Edit</button>\n      </span>\n    </td>\n    \n    <td [cdkPopoverEdit]=\"nameEdit\"\n        [cdkPopoverEditContext]=\"{person: person, focus: 'middleName'}\"\n        [cdkPopoverEditColspan]=\"{before: 1, after: 1}\">\n      {{person.middleName}}\n      \n      <span *cdkRowHoverContent>\n        <button cdkEditOpen>Edit</button>\n      </span>\n    </td>\n    \n    <td [cdkPopoverEdit]=\"nameEdit\"\n        [cdkPopoverEditContext]=\"{person: person, focus: 'lastName'}\"\n        [cdkPopoverEditColspan]=\"{before: 2}\">\n      {{person.lastName}}\n      \n      <span *cdkRowHoverContent>\n        <button cdkEditOpen>Edit</button>\n      </span>\n    </td>\n  </tr>\n</table>\n",
                styles: [".example-table {\n  width: 100%;\n}\n\n.example-table th {\n  text-align: left;\n}\n\n.example-table td,\n.example-table th {\n  min-width: 300px;\n  width: 25%;\n}\n\n.example-input-container {\n  display: flex;\n  justify-content: stretch;\n}\n\n.example-input-container input {\n  flex: 1;\n  font-size: 14px;\n}\n"]
            })
        ], CdkPopoverEditCellSpanVanillaTableExample);
        return CdkPopoverEditCellSpanVanillaTableExample;
    }());

    var ELEMENT_DATA$2 = [
        { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
        { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
        { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
        { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
        { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
        { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
        { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
        { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
        { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
        { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
        { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
        { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
        { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
        { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
        { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
        { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
        { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
        { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
        { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
        { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
    ];
    /**
     * @title CDK Popover Edit with spreadsheet-like configuration on an HTML data-table
     */
    var CdkPopoverEditTabOutVanillaTableExample = /** @class */ (function () {
        function CdkPopoverEditTabOutVanillaTableExample() {
            this.preservedNameValues = new WeakMap();
            this.preservedWeightValues = new WeakMap();
            this.elements = ELEMENT_DATA$2;
        }
        CdkPopoverEditTabOutVanillaTableExample.prototype.onSubmitName = function (element, f) {
            if (!f.valid) {
                return;
            }
            element.name = f.value.name;
        };
        CdkPopoverEditTabOutVanillaTableExample.prototype.onSubmitWeight = function (element, f) {
            if (!f.valid) {
                return;
            }
            element.weight = f.value.weight;
        };
        CdkPopoverEditTabOutVanillaTableExample = tslib_1.__decorate([
            core.Component({
                selector: 'cdk-popover-edit-tab-out-vanilla-table-example',
                template: "<table editable class=\"example-table\">\n  <!--\n    This edit lens is specified outside of the cell and must explicitly declare\n    its context. It could be reused in multiple cells.\n  -->\n  <ng-template #weightEdit let-element>\n    <div style=\"background-color: white; width: 100%\">\n      <form #f=\"ngForm\"\n          cdkEditControl\n          cdkEditControlClickOutBehavior=\"submit\"\n          (ngSubmit)=\"onSubmitWeight(element, f)\"\n          [cdkEditControlPreservedFormValue]=\"preservedWeightValues.get(element)\"\n          (cdkEditControlPreservedFormValueChange)=\"preservedWeightValues.set(element, $event)\">\n        <input type=\"number\" [ngModel]=\"element.weight\" name=\"weight\" required>\n      </form>\n    </div>\n  </ng-template>\n  \n  <tr>\n    <th> No. </th>\n    <th> Name </th>\n    <th> Weight </th>\n    <th> Symbol </th>\n  </tr>\n  \n  <tr *ngFor=\"let element of elements\">\n    <td> {{element.position}} </td>\n    \n    <td [cdkPopoverEdit]=\"nameEdit\" cdkPopoverEditTabOut cdkEditOpen>\n      {{element.name}}\n      \n      <!-- This edit is defined in the cell and can implicitly access element -->\n      <ng-template #nameEdit>\n        <div style=\"background-color: white; width: 100%\">\n          <form #f=\"ngForm\"\n              cdkEditControl\n              cdkEditControlClickOutBehavior=\"submit\"\n              (ngSubmit)=\"onSubmitName(element, f)\"\n              [cdkEditControlPreservedFormValue]=\"preservedNameValues.get(element)\"\n              (cdkEditControlPreservedFormValueChange)=\"preservedNameValues.set(element, $event)\">\n            <input [ngModel]=\"element.name\" name=\"name\" required>\n            <br>\n            <button type=\"submit\">Confirm</button>\n          </form>\n        </div>\n      </ng-template>\n    </td>\n\n    <td [cdkPopoverEdit]=\"weightEdit\" [cdkPopoverEditContext]=\"element\"\n        cdkPopoverEditTabOut cdkEditOpen>\n      {{element.weight}}\n    </td>\n\n    <td> {{element.symbol}} </td>\n  </tr>\n</table>\n",
                styles: [".example-table {\n  width: 100%;\n}\n\n.example-table th {\n  text-align: left;\n}\n\n.example-table td,\n.example-table th {\n  min-width: 300px;\n  width: 25%;\n}\n"]
            })
        ], CdkPopoverEditTabOutVanillaTableExample);
        return CdkPopoverEditTabOutVanillaTableExample;
    }());

    var ELEMENT_DATA$3 = [
        { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
        { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
        { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
        { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
        { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
        { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
        { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
        { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
        { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
        { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
        { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
        { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
        { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
        { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
        { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
        { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
        { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
        { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
        { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
        { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
    ];
    /**
     * @title CDK Popover Edit on an HTML data-table
     */
    var CdkPopoverEditVanillaTableExample = /** @class */ (function () {
        function CdkPopoverEditVanillaTableExample() {
            this.preservedNameValues = new WeakMap();
            this.preservedWeightValues = new WeakMap();
            this.elements = ELEMENT_DATA$3;
        }
        CdkPopoverEditVanillaTableExample.prototype.onSubmitName = function (element, f) {
            if (!f.valid) {
                return;
            }
            element.name = f.value.name;
        };
        CdkPopoverEditVanillaTableExample.prototype.onSubmitWeight = function (element, f) {
            if (!f.valid) {
                return;
            }
            element.weight = f.value.weight;
        };
        CdkPopoverEditVanillaTableExample = tslib_1.__decorate([
            core.Component({
                selector: 'cdk-popover-edit-vanilla-table-example',
                template: "<table editable class=\"example-table\">\n  <!--\n    This edit lens is specified outside of the cell and must explicitly declare\n    its context. It could be reused in multiple cells.\n  -->\n  <ng-template #weightEdit let-element>\n    <div style=\"background-color: white; width: 100%\">\n      <form #f=\"ngForm\"\n          cdkEditControl\n          (ngSubmit)=\"onSubmitWeight(element, f)\"\n          [cdkEditControlPreservedFormValue]=\"preservedWeightValues.get(element)\"\n          (cdkEditControlPreservedFormValueChange)=\"preservedWeightValues.set(element, $event)\">\n        Edit b:\n        <input type=\"number\" [ngModel]=\"element.weight\" name=\"weight\" required>\n        <br>\n        <button type=\"submit\">Confirm</button>\n        <button cdkEditRevert>Revert</button>\n        <button cdkEditClose>Close</button>\n      </form>\n    </div>\n  </ng-template>\n  \n  <tr>\n    <th> No. </th>\n    <th> Name </th>\n    <th> Weight </th>\n    <th> Symbol </th>\n  </tr>\n  \n  <tr *ngFor=\"let element of elements\">\n    <td> {{element.position}} </td>\n    \n    <td [cdkPopoverEdit]=\"nameEdit\">\n      {{element.name}}\n      \n      <!-- This edit is defined in the cell and can implicitly access element -->\n      <ng-template #nameEdit>\n        <div style=\"background-color: white; width: 100%\">\n          <form #f=\"ngForm\"\n              cdkEditControl\n              (ngSubmit)=\"onSubmitName(element, f)\"\n              [cdkEditControlPreservedFormValue]=\"preservedNameValues.get(element)\"\n              (cdkEditControlPreservedFormValueChange)=\"preservedNameValues.set(element, $event)\">\n            Edit a:\n            <input [ngModel]=\"element.name\" name=\"name\" required>\n            <br>\n            <button type=\"submit\">Confirm</button>\n            <button cdkEditRevert>Revert</button>\n            <button cdkEditClose>Close</button>\n          </form>\n        </div>\n      </ng-template>\n\n      <span *cdkRowHoverContent>\n        <button cdkEditOpen>Edit</button>\n      </span>\n    </td>\n\n    <td [cdkPopoverEdit]=\"weightEdit\" [cdkPopoverEditContext]=\"element\">\n      {{element.weight}}\n      \n      <span *cdkRowHoverContent>\n        <button cdkEditOpen>Edit</button>\n      </span>\n    </td>\n\n    <td> {{element.symbol}} </td>\n  </tr>\n</table>\n",
                styles: [".example-table {\n  width: 100%;\n}\n\n.example-table th {\n  text-align: left;\n}\n\n.example-table td,\n.example-table th {\n  min-width: 300px;\n  width: 25%;\n}\n"]
            })
        ], CdkPopoverEditVanillaTableExample);
        return CdkPopoverEditVanillaTableExample;
    }());

    /**
     * @title Portal overview
     */
    var CdkPortalOverviewExample = /** @class */ (function () {
        function CdkPortalOverviewExample(_viewContainerRef) {
            this._viewContainerRef = _viewContainerRef;
        }
        CdkPortalOverviewExample.prototype.ngAfterViewInit = function () {
            this.componentPortal = new portal.ComponentPortal(ComponentPortalExample);
            this.templatePortal = new portal.TemplatePortal(this.templatePortalContent, this._viewContainerRef);
        };
        tslib_1.__decorate([
            core.ViewChild('templatePortalContent', { static: false }),
            tslib_1.__metadata("design:type", core.TemplateRef)
        ], CdkPortalOverviewExample.prototype, "templatePortalContent", void 0);
        CdkPortalOverviewExample = tslib_1.__decorate([
            core.Component({
                selector: 'cdk-portal-overview-example',
                template: "<h2>The portal outlet is below:</h2>\n<div class=\"example-portal-outlet\">\n  <ng-template [cdkPortalOutlet]=\"selectedPortal\"></ng-template>\n</div>\n<ng-template #templatePortalContent>Hello, this is a template portal</ng-template>\n\n<button (click)=\"selectedPortal = componentPortal\">Render component portal</button>\n<button (click)=\"selectedPortal = templatePortal\">Render template portal</button>\n",
                styles: [".example-portal-outlet {\n  margin-bottom: 10px;\n  padding: 10px;\n  border: 1px dashed black;\n  width: 250px;\n  height: 250px;\n}\n"]
            }),
            tslib_1.__metadata("design:paramtypes", [core.ViewContainerRef])
        ], CdkPortalOverviewExample);
        return CdkPortalOverviewExample;
    }());
    var ComponentPortalExample = /** @class */ (function () {
        function ComponentPortalExample() {
        }
        ComponentPortalExample = tslib_1.__decorate([
            core.Component({
                selector: 'component-portal-example',
                template: 'Hello, this is a component portal'
            })
        ], ComponentPortalExample);
        return ComponentPortalExample;
    }());

    var ELEMENT_DATA$4 = [
        { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
        { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
        { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
        { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
        { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
        { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
        { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
        { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
        { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
        { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
    ];
    /**
     * @title Basic use of `<cdk-table>` (uses display flex)
     */
    var CdkTableBasicFlexExample = /** @class */ (function () {
        function CdkTableBasicFlexExample() {
            this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
            this.dataSource = new ExampleDataSource$2();
        }
        CdkTableBasicFlexExample = tslib_1.__decorate([
            core.Component({
                selector: 'cdk-table-basic-flex-example',
                template: "<cdk-table [dataSource]=\"dataSource\">\n  <!-- Position Column -->\n  <ng-container cdkColumnDef=\"position\">\n    <cdk-header-cell *cdkHeaderCellDef> No. </cdk-header-cell>\n    <cdk-cell *cdkCellDef=\"let element\"> {{element.position}} </cdk-cell>\n  </ng-container>\n\n  <!-- Name Column -->\n  <ng-container cdkColumnDef=\"name\">\n    <cdk-header-cell *cdkHeaderCellDef> Name </cdk-header-cell>\n    <cdk-cell *cdkCellDef=\"let element\"> {{element.name}} </cdk-cell>\n  </ng-container>\n\n  <!-- Weight Column -->\n  <ng-container cdkColumnDef=\"weight\">\n    <cdk-header-cell *cdkHeaderCellDef> Weight </cdk-header-cell>\n    <cdk-cell *cdkCellDef=\"let element\"> {{element.weight}} </cdk-cell>\n  </ng-container>\n\n  <!-- Symbol Column -->\n  <ng-container cdkColumnDef=\"symbol\">\n    <cdk-header-cell *cdkHeaderCellDef> Symbol </cdk-header-cell>\n    <cdk-cell *cdkCellDef=\"let element\"> {{element.symbol}} </cdk-cell>\n  </ng-container>\n\n  <cdk-header-row *cdkHeaderRowDef=\"displayedColumns\"></cdk-header-row>\n  <cdk-row *cdkRowDef=\"let row; columns: displayedColumns;\"></cdk-row>\n</cdk-table>\n",
                styles: ["/**\n * Add basic flex styling so that the cells evenly space themselves in the row.\n */\ncdk-row, cdk-header-row, cdk-footer-row {\n  display: flex;\n}\n\ncdk-cell, cdk-header-cell, cdk-footer-cell {\n  flex: 1;\n}\n"]
            })
        ], CdkTableBasicFlexExample);
        return CdkTableBasicFlexExample;
    }());
    /**
     * Data source to provide what data should be rendered in the table. Note that the data source
     * can retrieve its data in any way. In this case, the data source is provided a reference
     * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
     * the underlying data. Instead, it only needs to take the data and send the table exactly what
     * should be rendered.
     */
    var ExampleDataSource$2 = /** @class */ (function (_super) {
        tslib_1.__extends(ExampleDataSource, _super);
        function ExampleDataSource() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /** Stream of data that is provided to the table. */
            _this.data = new rxjs.BehaviorSubject(ELEMENT_DATA$4);
            return _this;
        }
        /** Connect function called by the table to retrieve one stream containing the data to render. */
        ExampleDataSource.prototype.connect = function () {
            return this.data;
        };
        ExampleDataSource.prototype.disconnect = function () { };
        return ExampleDataSource;
    }(collections.DataSource));

    var ELEMENT_DATA$5 = [
        { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
        { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
        { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
        { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
        { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
        { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
        { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
        { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
        { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
        { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
    ];
    /**
     * @title Basic CDK data-table
     */
    var CdkTableBasicExample = /** @class */ (function () {
        function CdkTableBasicExample() {
            this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
            this.dataSource = new ExampleDataSource$3();
        }
        CdkTableBasicExample = tslib_1.__decorate([
            core.Component({
                selector: 'cdk-table-basic-example',
                template: "<table cdk-table [dataSource]=\"dataSource\">\n  <!-- Position Column -->\n  <ng-container cdkColumnDef=\"position\">\n    <th cdk-header-cell *cdkHeaderCellDef> No. </th>\n    <td cdk-cell *cdkCellDef=\"let element\"> {{element.position}} </td>\n  </ng-container>\n\n  <!-- Name Column -->\n  <ng-container cdkColumnDef=\"name\">\n    <th cdk-header-cell *cdkHeaderCellDef> Name </th>\n    <td cdk-cell *cdkCellDef=\"let element\"> {{element.name}} </td>\n  </ng-container>\n\n  <!-- Weight Column -->\n  <ng-container cdkColumnDef=\"weight\">\n    <th cdk-header-cell *cdkHeaderCellDef> Weight </th>\n    <td cdk-cell *cdkCellDef=\"let element\"> {{element.weight}} </td>\n  </ng-container>\n\n  <!-- Symbol Column -->\n  <ng-container cdkColumnDef=\"symbol\">\n    <th cdk-header-cell *cdkHeaderCellDef> Symbol </th>\n    <td cdk-cell *cdkCellDef=\"let element\"> {{element.symbol}} </td>\n  </ng-container>\n\n  <tr cdk-header-row *cdkHeaderRowDef=\"displayedColumns\"></tr>\n  <tr cdk-row *cdkRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>\n",
                styles: ["table {\n  width: 100%;\n}\n\nth {\n  text-align: left;\n}\n"]
            })
        ], CdkTableBasicExample);
        return CdkTableBasicExample;
    }());
    /**
     * Data source to provide what data should be rendered in the table. Note that the data source
     * can retrieve its data in any way. In this case, the data source is provided a reference
     * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
     * the underlying data. Instead, it only needs to take the data and send the table exactly what
     * should be rendered.
     */
    var ExampleDataSource$3 = /** @class */ (function (_super) {
        tslib_1.__extends(ExampleDataSource, _super);
        function ExampleDataSource() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /** Stream of data that is provided to the table. */
            _this.data = new rxjs.BehaviorSubject(ELEMENT_DATA$5);
            return _this;
        }
        /** Connect function called by the table to retrieve one stream containing the data to render. */
        ExampleDataSource.prototype.connect = function () {
            return this.data;
        };
        ExampleDataSource.prototype.disconnect = function () { };
        return ExampleDataSource;
    }(collections.DataSource));

    var TREE_DATA = [
        {
            name: 'Fruit',
            expandable: true,
            level: 0,
        }, {
            name: 'Apple',
            expandable: false,
            level: 1,
        }, {
            name: 'Banana',
            expandable: false,
            level: 1,
        }, {
            name: 'Fruit loops',
            expandable: false,
            level: 1,
        }, {
            name: 'Vegetables',
            expandable: true,
            level: 0,
        }, {
            name: 'Green',
            expandable: true,
            level: 1,
        }, {
            name: 'Broccoli',
            expandable: false,
            level: 2,
        }, {
            name: 'Brussel sprouts',
            expandable: false,
            level: 2,
        }, {
            name: 'Orange',
            expandable: true,
            level: 1,
        }, {
            name: 'Pumpkins',
            expandable: false,
            level: 2,
        }, {
            name: 'Carrots',
            expandable: false,
            level: 2,
        }
    ];
    /**
     * @title Tree with flat nodes
     */
    var CdkTreeFlatExample = /** @class */ (function () {
        function CdkTreeFlatExample() {
            this.treeControl = new tree.FlatTreeControl(function (node) { return node.level; }, function (node) { return node.expandable; });
            this.dataSource = new collections.ArrayDataSource(TREE_DATA);
            this.hasChild = function (_, node) { return node.expandable; };
        }
        CdkTreeFlatExample.prototype.getParentNode = function (node) {
            var nodeIndex = TREE_DATA.indexOf(node);
            for (var i = nodeIndex - 1; i >= 0; i--) {
                if (TREE_DATA[i].level === node.level - 1) {
                    return TREE_DATA[i];
                }
            }
            return null;
        };
        CdkTreeFlatExample.prototype.shouldRender = function (node) {
            var parent = this.getParentNode(node);
            return !parent || parent.isExpanded;
        };
        CdkTreeFlatExample = tslib_1.__decorate([
            core.Component({
                selector: 'cdk-tree-flat-example',
                template: "<cdk-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n  <!-- This is the tree node template for leaf nodes -->\n  <cdk-tree-node *cdkTreeNodeDef=\"let node\" cdkTreeNodePadding\n                 [style.display]=\"shouldRender(node) ? 'flex' : 'none'\"\n                 class=\"example-tree-node\">\n    <!-- use a disabled button to provide padding for tree leaf -->\n    <button mat-icon-button disabled></button>\n    {{node.name}}\n  </cdk-tree-node>\n  <!-- This is the tree node template for expandable nodes -->\n  <cdk-tree-node *cdkTreeNodeDef=\"let node; when: hasChild\" cdkTreeNodePadding\n                 [style.display]=\"shouldRender(node) ? 'flex' : 'none'\"\n                 class=\"example-tree-node\">\n    <button mat-icon-button cdkTreeNodeToggle\n            [attr.aria-label]=\"'toggle ' + node.filename\"\n            (click)=\"node.isExpanded = !node.isExpanded\"\n            [style.visibility]=\"node.expandable ? 'visible' : 'hidden'\">\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    {{node.name}}\n  </cdk-tree-node>\n</cdk-tree>\n",
                styles: [".example-tree-node {\n  display: flex;\n  align-items: center;\n}\n"]
            })
        ], CdkTreeFlatExample);
        return CdkTreeFlatExample;
    }());

    var TREE_DATA$1 = [
        {
            name: 'Fruit',
            children: [
                { name: 'Apple' },
                { name: 'Banana' },
                { name: 'Fruit loops' },
            ]
        }, {
            name: 'Vegetables',
            children: [
                {
                    name: 'Green',
                    children: [
                        { name: 'Broccoli' },
                        { name: 'Brussel sprouts' },
                    ]
                }, {
                    name: 'Orange',
                    children: [
                        { name: 'Pumpkins' },
                        { name: 'Carrots' },
                    ]
                },
            ]
        },
    ];
    /**
     * @title Tree with nested nodes
     */
    var CdkTreeNestedExample = /** @class */ (function () {
        function CdkTreeNestedExample() {
            this.treeControl = new tree.NestedTreeControl(function (node) { return node.children; });
            this.dataSource = new collections.ArrayDataSource(TREE_DATA$1);
            this.hasChild = function (_, node) { return !!node.children && node.children.length > 0; };
        }
        CdkTreeNestedExample = tslib_1.__decorate([
            core.Component({
                selector: 'cdk-tree-nested-example',
                template: "<cdk-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n  <!-- This is the tree node template for leaf nodes -->\n  <cdk-nested-tree-node *cdkTreeNodeDef=\"let node\" class=\"example-tree-node\">\n    <!-- use a disabled button to provide padding for tree leaf -->\n    <button mat-icon-button disabled></button>\n    {{node.name}}\n  </cdk-nested-tree-node>\n  <!-- This is the tree node template for expandable nodes -->\n  <cdk-nested-tree-node *cdkTreeNodeDef=\"let node; when: hasChild\" class=\"example-tree-node\">\n    <button mat-icon-button [attr.aria-label]=\"'toggle ' + node.name\" cdkTreeNodeToggle>\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    {{node.name}}\n    <div [class.example-tree-invisible]=\"!treeControl.isExpanded(node)\">\n      <ng-container cdkTreeNodeOutlet></ng-container>\n    </div>\n  </cdk-nested-tree-node>\n</cdk-tree>\n",
                styles: [".example-tree-invisible {\n  display: none;\n}\n\n.example-tree ul,\n.example-tree li {\n  margin-top: 0;\n  margin-bottom: 0;\n  list-style-type: none;\n}\n.example-tree-node {\n  display: block;\n}\n\n.example-tree-node .example-tree-node {\n  padding-left: 40px;\n}\n"]
            })
        ], CdkTreeNestedExample);
        return CdkTreeNestedExample;
    }());

    /** @title Virtual scroll context variables */
    var CdkVirtualScrollContextExample = /** @class */ (function () {
        function CdkVirtualScrollContextExample() {
            this.items = Array.from({ length: 100000 }).map(function (_, i) { return "Item #" + i; });
        }
        CdkVirtualScrollContextExample = tslib_1.__decorate([
            core.Component({
                selector: 'cdk-virtual-scroll-context-example',
                template: "<cdk-virtual-scroll-viewport [itemSize]=\"18 * 7\" class=\"example-viewport\">\n  <div *cdkVirtualFor=\"let item of items;\n                       let index = index;\n                       let count = count;\n                       let first = first;\n                       let last = last;\n                       let even = even;\n                       let odd = odd;\" [class.example-alternate]=\"odd\">\n    <div class=\"example-item-detail\">Item: {{item}}</div>\n    <div class=\"example-item-detail\">Index: {{index}}</div>\n    <div class=\"example-item-detail\">Count: {{count}}</div>\n    <div class=\"example-item-detail\">First: {{first ? 'Yes' : 'No'}}</div>\n    <div class=\"example-item-detail\">Last: {{last ? 'Yes' : 'No'}}</div>\n    <div class=\"example-item-detail\">Even: {{even ? 'Yes' : 'No'}}</div>\n    <div class=\"example-item-detail\">Odd: {{odd ? 'Yes' : 'No'}}</div>\n  </div>\n</cdk-virtual-scroll-viewport>\n",
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                styles: [".example-viewport {\n  height: 200px;\n  width: 200px;\n  border: 1px solid black;\n}\n\n.example-item-detail {\n  height: 18px;\n}\n\n.example-alternate {\n  background: rgba(127, 127, 127, 0.3);\n}\n"]
            })
        ], CdkVirtualScrollContextExample);
        return CdkVirtualScrollContextExample;
    }());

    var CustomVirtualScrollStrategy = /** @class */ (function (_super) {
        tslib_1.__extends(CustomVirtualScrollStrategy, _super);
        function CustomVirtualScrollStrategy() {
            return _super.call(this, 50, 250, 500) || this;
        }
        return CustomVirtualScrollStrategy;
    }(scrolling.FixedSizeVirtualScrollStrategy));
    /** @title Virtual scroll with a custom strategy */
    var CdkVirtualScrollCustomStrategyExample = /** @class */ (function () {
        function CdkVirtualScrollCustomStrategyExample() {
            this.items = Array.from({ length: 100000 }).map(function (_, i) { return "Item #" + i; });
        }
        CdkVirtualScrollCustomStrategyExample = tslib_1.__decorate([
            core.Component({
                selector: 'cdk-virtual-scroll-custom-strategy-example',
                template: "<cdk-virtual-scroll-viewport class=\"example-viewport\">\n  <div *cdkVirtualFor=\"let item of items\" class=\"example-item\">{{item}}</div>\n</cdk-virtual-scroll-viewport>\n",
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                providers: [{ provide: scrolling.VIRTUAL_SCROLL_STRATEGY, useClass: CustomVirtualScrollStrategy }],
                styles: [".example-viewport {\n  height: 200px;\n  width: 200px;\n  border: 1px solid black;\n}\n\n.example-item {\n  height: 50px;\n}\n"]
            })
        ], CdkVirtualScrollCustomStrategyExample);
        return CdkVirtualScrollCustomStrategyExample;
    }());

    /** @title Virtual scroll with a custom data source */
    var CdkVirtualScrollDataSourceExample = /** @class */ (function () {
        function CdkVirtualScrollDataSourceExample() {
            this.ds = new MyDataSource();
        }
        CdkVirtualScrollDataSourceExample = tslib_1.__decorate([
            core.Component({
                selector: 'cdk-virtual-scroll-data-source-example',
                template: "<cdk-virtual-scroll-viewport itemSize=\"50\" class=\"example-viewport\">\n  <div *cdkVirtualFor=\"let item of ds\" class=\"example-item\">{{item || 'Loading...'}}</div>\n</cdk-virtual-scroll-viewport>\n",
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                styles: [".example-viewport {\n  height: 200px;\n  width: 200px;\n  border: 1px solid black;\n}\n\n.example-item {\n  height: 50px;\n}\n"]
            })
        ], CdkVirtualScrollDataSourceExample);
        return CdkVirtualScrollDataSourceExample;
    }());
    var MyDataSource = /** @class */ (function (_super) {
        tslib_1.__extends(MyDataSource, _super);
        function MyDataSource() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._length = 100000;
            _this._pageSize = 100;
            _this._cachedData = Array.from({ length: _this._length });
            _this._fetchedPages = new Set();
            _this._dataStream = new rxjs.BehaviorSubject(_this._cachedData);
            _this._subscription = new rxjs.Subscription();
            return _this;
        }
        MyDataSource.prototype.connect = function (collectionViewer) {
            var _this = this;
            this._subscription.add(collectionViewer.viewChange.subscribe(function (range) {
                var startPage = _this._getPageForIndex(range.start);
                var endPage = _this._getPageForIndex(range.end - 1);
                for (var i = startPage; i <= endPage; i++) {
                    _this._fetchPage(i);
                }
            }));
            return this._dataStream;
        };
        MyDataSource.prototype.disconnect = function () {
            this._subscription.unsubscribe();
        };
        MyDataSource.prototype._getPageForIndex = function (index) {
            return Math.floor(index / this._pageSize);
        };
        MyDataSource.prototype._fetchPage = function (page) {
            var _this = this;
            if (this._fetchedPages.has(page)) {
                return;
            }
            this._fetchedPages.add(page);
            // Use `setTimeout` to simulate fetching data from server.
            setTimeout(function () {
                var _a;
                (_a = _this._cachedData).splice.apply(_a, tslib_1.__spread([page * _this._pageSize, _this._pageSize], Array.from({ length: _this._pageSize })
                    .map(function (_, i) { return "Item #" + (page * _this._pageSize + i); })));
                _this._dataStream.next(_this._cachedData);
            }, Math.random() * 1000 + 200);
        };
        return MyDataSource;
    }(collections.DataSource));

    /** @title Virtual scrolling `<dl>` */
    var CdkVirtualScrollDlExample = /** @class */ (function () {
        function CdkVirtualScrollDlExample() {
            this.states = [
                { name: 'Alabama', capital: 'Montgomery' },
                { name: 'Alaska', capital: 'Juneau' },
                { name: 'Arizona', capital: 'Phoenix' },
                { name: 'Arkansas', capital: 'Little Rock' },
                { name: 'California', capital: 'Sacramento' },
                { name: 'Colorado', capital: 'Denver' },
                { name: 'Connecticut', capital: 'Hartford' },
                { name: 'Delaware', capital: 'Dover' },
                { name: 'Florida', capital: 'Tallahassee' },
                { name: 'Georgia', capital: 'Atlanta' },
                { name: 'Hawaii', capital: 'Honolulu' },
                { name: 'Idaho', capital: 'Boise' },
                { name: 'Illinois', capital: 'Springfield' },
                { name: 'Indiana', capital: 'Indianapolis' },
                { name: 'Iowa', capital: 'Des Moines' },
                { name: 'Kansas', capital: 'Topeka' },
                { name: 'Kentucky', capital: 'Frankfort' },
                { name: 'Louisiana', capital: 'Baton Rouge' },
                { name: 'Maine', capital: 'Augusta' },
                { name: 'Maryland', capital: 'Annapolis' },
                { name: 'Massachusetts', capital: 'Boston' },
                { name: 'Michigan', capital: 'Lansing' },
                { name: 'Minnesota', capital: 'St. Paul' },
                { name: 'Mississippi', capital: 'Jackson' },
                { name: 'Missouri', capital: 'Jefferson City' },
                { name: 'Montana', capital: 'Helena' },
                { name: 'Nebraska', capital: 'Lincoln' },
                { name: 'Nevada', capital: 'Carson City' },
                { name: 'New Hampshire', capital: 'Concord' },
                { name: 'New Jersey', capital: 'Trenton' },
                { name: 'New Mexico', capital: 'Santa Fe' },
                { name: 'New York', capital: 'Albany' },
                { name: 'North Carolina', capital: 'Raleigh' },
                { name: 'North Dakota', capital: 'Bismarck' },
                { name: 'Ohio', capital: 'Columbus' },
                { name: 'Oklahoma', capital: 'Oklahoma City' },
                { name: 'Oregon', capital: 'Salem' },
                { name: 'Pennsylvania', capital: 'Harrisburg' },
                { name: 'Rhode Island', capital: 'Providence' },
                { name: 'South Carolina', capital: 'Columbia' },
                { name: 'South Dakota', capital: 'Pierre' },
                { name: 'Tennessee', capital: 'Nashville' },
                { name: 'Texas', capital: 'Austin' },
                { name: 'Utah', capital: 'Salt Lake City' },
                { name: 'Vermont', capital: 'Montpelier' },
                { name: 'Virginia', capital: 'Richmond' },
                { name: 'Washington', capital: 'Olympia' },
                { name: 'West Virginia', capital: 'Charleston' },
                { name: 'Wisconsin', capital: 'Madison' },
                { name: 'Wyoming', capital: 'Cheyenne' },
            ];
        }
        CdkVirtualScrollDlExample = tslib_1.__decorate([
            core.Component({
                selector: 'cdk-virtual-scroll-dl-example',
                template: "<cdk-virtual-scroll-viewport class=\"example-viewport\" itemSize=\"60\">\n  <dl class=\"example-dl\">\n    <ng-container *cdkVirtualFor=\"let state of states\">\n      <dt class=\"example-dt\">{{state.name}}</dt>\n      <dd class=\"example-dd\">{{state.capital}}</dd>\n    </ng-container>\n  </dl>\n</cdk-virtual-scroll-viewport>\n",
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                styles: [".example-viewport {\n  height: 200px;\n  width: 200px;\n  border: 1px solid black;\n}\n\n.example-dt {\n  height: 30px;\n  font-weight: bold;\n}\n\n.example-dd {\n  height: 30px;\n}\n"]
            })
        ], CdkVirtualScrollDlExample);
        return CdkVirtualScrollDlExample;
    }());

    /** @title Fixed size virtual scroll with custom buffer parameters */
    var CdkVirtualScrollFixedBufferExample = /** @class */ (function () {
        function CdkVirtualScrollFixedBufferExample() {
            this.items = Array.from({ length: 100000 }).map(function (_, i) { return "Item #" + i; });
        }
        CdkVirtualScrollFixedBufferExample = tslib_1.__decorate([
            core.Component({
                selector: 'cdk-virtual-scroll-fixed-buffer-example',
                template: "<cdk-virtual-scroll-viewport itemSize=\"50\" minBufferPx=\"200\" maxBufferPx=\"400\"\n                             class=\"example-viewport\">\n  <div *cdkVirtualFor=\"let item of items\" class=\"example-item\">{{item}}</div>\n</cdk-virtual-scroll-viewport>\n",
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                styles: [".example-viewport {\n  height: 200px;\n  width: 200px;\n  border: 1px solid black;\n}\n\n.example-item {\n  height: 50px;\n}\n"]
            })
        ], CdkVirtualScrollFixedBufferExample);
        return CdkVirtualScrollFixedBufferExample;
    }());

    /** @title Horizontal virtual scroll */
    var CdkVirtualScrollHorizontalExample = /** @class */ (function () {
        function CdkVirtualScrollHorizontalExample() {
            this.items = Array.from({ length: 100000 }).map(function (_, i) { return "Item #" + i; });
        }
        CdkVirtualScrollHorizontalExample = tslib_1.__decorate([
            core.Component({
                selector: 'cdk-virtual-scroll-horizontal-example',
                template: "<div class=\"cdk-virtual-scroll-data-source-example\">\n  <cdk-virtual-scroll-viewport orientation=\"horizontal\" itemSize=\"50\" class=\"example-viewport\">\n    <div *cdkVirtualFor=\"let item of items\" class=\"example-item\">{{item}}</div>\n  </cdk-virtual-scroll-viewport>\n</div>\n",
                encapsulation: core.ViewEncapsulation.None,
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                styles: [".cdk-virtual-scroll-data-source-example .example-viewport {\n  height: 200px;\n  width: 200px;\n  border: 1px solid black;\n}\n\n.cdk-virtual-scroll-data-source-example .example-viewport .cdk-virtual-scroll-content-wrapper {\n  display: flex;\n  flex-direction: row;\n}\n\n.cdk-virtual-scroll-data-source-example .example-item {\n  width: 50px;\n  height: 100%;\n  writing-mode: vertical-lr;\n}\n"]
            })
        ], CdkVirtualScrollHorizontalExample);
        return CdkVirtualScrollHorizontalExample;
    }());

    /** @title Basic virtual scroll */
    var CdkVirtualScrollOverviewExample = /** @class */ (function () {
        function CdkVirtualScrollOverviewExample() {
            this.items = Array.from({ length: 100000 }).map(function (_, i) { return "Item #" + i; });
        }
        CdkVirtualScrollOverviewExample = tslib_1.__decorate([
            core.Component({
                selector: 'cdk-virtual-scroll-overview-example',
                template: "<cdk-virtual-scroll-viewport itemSize=\"50\" class=\"example-viewport\">\n  <div *cdkVirtualFor=\"let item of items\" class=\"example-item\">{{item}}</div>\n</cdk-virtual-scroll-viewport>\n",
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                styles: [".example-viewport {\n  height: 200px;\n  width: 200px;\n  border: 1px solid black;\n}\n\n.example-item {\n  height: 50px;\n}\n"]
            })
        ], CdkVirtualScrollOverviewExample);
        return CdkVirtualScrollOverviewExample;
    }());

    /** @title Virtual scroll with no template caching */
    var CdkVirtualScrollTemplateCacheExample = /** @class */ (function () {
        function CdkVirtualScrollTemplateCacheExample() {
            this.items = Array.from({ length: 100000 }).map(function (_, i) { return "Item #" + i; });
        }
        CdkVirtualScrollTemplateCacheExample = tslib_1.__decorate([
            core.Component({
                selector: 'cdk-virtual-scroll-template-cache-example',
                template: "<cdk-virtual-scroll-viewport itemSize=\"50\" class=\"example-viewport\">\n  <div *cdkVirtualFor=\"let item of items; templateCacheSize: 0\" class=\"example-item\">{{item}}</div>\n</cdk-virtual-scroll-viewport>\n",
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                styles: [".example-viewport {\n  height: 200px;\n  width: 200px;\n  border: 1px solid black;\n}\n\n.example-item {\n  height: 50px;\n}\n"]
            })
        ], CdkVirtualScrollTemplateCacheExample);
        return CdkVirtualScrollTemplateCacheExample;
    }());

    /**
     * @title Configurable checkbox
     */
    var CheckboxConfigurableExample = /** @class */ (function () {
        function CheckboxConfigurableExample() {
            this.checked = false;
            this.indeterminate = false;
            this.labelPosition = 'after';
            this.disabled = false;
        }
        CheckboxConfigurableExample = tslib_1.__decorate([
            core.Component({
                selector: 'checkbox-configurable-example',
                template: "<mat-card>\n  <mat-card-content>\n    <h2 class=\"example-h2\">Checkbox configuration</h2>\n\n    <section class=\"example-section\">\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"checked\">Checked</mat-checkbox>\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"indeterminate\">Indeterminate</mat-checkbox>\n    </section>\n\n    <section class=\"example-section\">\n      <label class=\"example-margin\">Align:</label>\n      <mat-radio-group [(ngModel)]=\"labelPosition\">\n        <mat-radio-button class=\"example-margin\" value=\"after\">After</mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"before\">Before</mat-radio-button>\n      </mat-radio-group>\n    </section>\n\n    <section class=\"example-section\">\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"disabled\">Disabled</mat-checkbox>\n    </section>\n  </mat-card-content>\n</mat-card>\n\n<mat-card class=\"result\">\n  <mat-card-content>\n    <h2 class=\"example-h2\">Result</h2>\n\n    <section class=\"example-section\">\n      <mat-checkbox\n          class=\"example-margin\"\n          [(ngModel)]=\"checked\"\n          [(indeterminate)]=\"indeterminate\"\n          [labelPosition]=\"labelPosition\"\n          [disabled]=\"disabled\">\n        I'm a checkbox\n      </mat-checkbox>\n    </section>\n  </mat-card-content>\n</mat-card>\n\n",
                styles: [".example-h2 {\n  margin: 10px;\n}\n\n.example-section {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n\n.example-margin {\n  margin: 0 10px;\n}\n"]
            })
        ], CheckboxConfigurableExample);
        return CheckboxConfigurableExample;
    }());

    /**
     * @title Basic checkboxes
     */
    var CheckboxOverviewExample = /** @class */ (function () {
        function CheckboxOverviewExample() {
        }
        CheckboxOverviewExample = tslib_1.__decorate([
            core.Component({
                selector: 'checkbox-overview-example',
                template: "<mat-checkbox>Check me!</mat-checkbox>\n",
                styles: ["/** No CSS for this example */\n"]
            })
        ], CheckboxOverviewExample);
        return CheckboxOverviewExample;
    }());

    /**
     * @title Chips Autocomplete
     */
    var ChipsAutocompleteExample = /** @class */ (function () {
        function ChipsAutocompleteExample() {
            var _this = this;
            this.visible = true;
            this.selectable = true;
            this.removable = true;
            this.addOnBlur = true;
            this.separatorKeysCodes = [keycodes.ENTER, keycodes.COMMA];
            this.fruitCtrl = new forms.FormControl();
            this.fruits = ['Lemon'];
            this.allFruits = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];
            this.filteredFruits = this.fruitCtrl.valueChanges.pipe(operators.startWith(null), operators.map(function (fruit) { return fruit ? _this._filter(fruit) : _this.allFruits.slice(); }));
        }
        ChipsAutocompleteExample.prototype.add = function (event) {
            // Add fruit only when MatAutocomplete is not open
            // To make sure this does not conflict with OptionSelected Event
            if (!this.matAutocomplete.isOpen) {
                var input = event.input;
                var value = event.value;
                // Add our fruit
                if ((value || '').trim()) {
                    this.fruits.push(value.trim());
                }
                // Reset the input value
                if (input) {
                    input.value = '';
                }
                this.fruitCtrl.setValue(null);
            }
        };
        ChipsAutocompleteExample.prototype.remove = function (fruit) {
            var index = this.fruits.indexOf(fruit);
            if (index >= 0) {
                this.fruits.splice(index, 1);
            }
        };
        ChipsAutocompleteExample.prototype.selected = function (event) {
            this.fruits.push(event.option.viewValue);
            this.fruitInput.nativeElement.value = '';
            this.fruitCtrl.setValue(null);
        };
        ChipsAutocompleteExample.prototype._filter = function (value) {
            var filterValue = value.toLowerCase();
            return this.allFruits.filter(function (fruit) { return fruit.toLowerCase().indexOf(filterValue) === 0; });
        };
        tslib_1.__decorate([
            core.ViewChild('fruitInput', { static: false }),
            tslib_1.__metadata("design:type", core.ElementRef)
        ], ChipsAutocompleteExample.prototype, "fruitInput", void 0);
        tslib_1.__decorate([
            core.ViewChild('auto', { static: false }),
            tslib_1.__metadata("design:type", autocomplete.MatAutocomplete)
        ], ChipsAutocompleteExample.prototype, "matAutocomplete", void 0);
        ChipsAutocompleteExample = tslib_1.__decorate([
            core.Component({
                selector: 'chips-autocomplete-example',
                template: "<mat-form-field class=\"example-chip-list\">\n  <mat-chip-list #chipList aria-label=\"Fruit selection\">\n    <mat-chip\n      *ngFor=\"let fruit of fruits\"\n      [selectable]=\"selectable\"\n      [removable]=\"removable\"\n      (removed)=\"remove(fruit)\">\n      {{fruit}}\n      <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\n    </mat-chip>\n    <input\n      placeholder=\"New fruit...\"\n      #fruitInput\n      [formControl]=\"fruitCtrl\"\n      [matAutocomplete]=\"auto\"\n      [matChipInputFor]=\"chipList\"\n      [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n      [matChipInputAddOnBlur]=\"addOnBlur\"\n      (matChipInputTokenEnd)=\"add($event)\">\n  </mat-chip-list>\n  <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"selected($event)\">\n    <mat-option *ngFor=\"let fruit of filteredFruits | async\" [value]=\"fruit\">\n      {{fruit}}\n    </mat-option>\n  </mat-autocomplete>\n</mat-form-field>\n",
                styles: [".example-chip-list {\n  width: 100%;\n}\n"]
            }),
            tslib_1.__metadata("design:paramtypes", [])
        ], ChipsAutocompleteExample);
        return ChipsAutocompleteExample;
    }());

    /**
     * @title Chips Drag and Drop
     */
    var ChipsDragDropExample = /** @class */ (function () {
        function ChipsDragDropExample() {
            this.vegetables = [
                { name: 'apple' },
                { name: 'banana' },
                { name: 'strawberry' },
                { name: 'orange' },
                { name: 'kiwi' },
                { name: 'cherry' },
            ];
        }
        ChipsDragDropExample.prototype.drop = function (event) {
            dragDrop.moveItemInArray(this.vegetables, event.previousIndex, event.currentIndex);
        };
        ChipsDragDropExample = tslib_1.__decorate([
            core.Component({
                selector: 'chips-drag-drop-example',
                template: "<mat-chip-list\n  class=\"example-chip\"\n  cdkDropList \n  cdkDropListOrientation=\"horizontal\"\n  (cdkDropListDropped)=\"drop($event)\">\n  <mat-chip\n    class=\"example-box\"\n    cdkDrag\n    *ngFor=\"let vegetable of vegetables\">\n    {{vegetable.name}}\n  </mat-chip>\n</mat-chip-list>\n",
                styles: [".example-box.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-chip .cdk-drop-list-dragging {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n"]
            })
        ], ChipsDragDropExample);
        return ChipsDragDropExample;
    }());

    /**
     * @title Chips with input
     */
    var ChipsInputExample = /** @class */ (function () {
        function ChipsInputExample() {
            this.visible = true;
            this.selectable = true;
            this.removable = true;
            this.addOnBlur = true;
            this.separatorKeysCodes = [keycodes.ENTER, keycodes.COMMA];
            this.fruits = [
                { name: 'Lemon' },
                { name: 'Lime' },
                { name: 'Apple' },
            ];
        }
        ChipsInputExample.prototype.add = function (event) {
            var input = event.input;
            var value = event.value;
            // Add our fruit
            if ((value || '').trim()) {
                this.fruits.push({ name: value.trim() });
            }
            // Reset the input value
            if (input) {
                input.value = '';
            }
        };
        ChipsInputExample.prototype.remove = function (fruit) {
            var index = this.fruits.indexOf(fruit);
            if (index >= 0) {
                this.fruits.splice(index, 1);
            }
        };
        ChipsInputExample = tslib_1.__decorate([
            core.Component({
                selector: 'chips-input-example',
                template: "<mat-form-field class=\"example-chip-list\">\n  <mat-chip-list #chipList aria-label=\"Fruit selection\">\n    <mat-chip *ngFor=\"let fruit of fruits\" [selectable]=\"selectable\"\n             [removable]=\"removable\" (removed)=\"remove(fruit)\">\n      {{fruit.name}}\n      <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\n    </mat-chip>\n    <input placeholder=\"New fruit...\"\n           [matChipInputFor]=\"chipList\"\n           [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n           [matChipInputAddOnBlur]=\"addOnBlur\"\n           (matChipInputTokenEnd)=\"add($event)\">\n  </mat-chip-list>\n</mat-form-field>\n",
                styles: [".example-chip-list {\n  width: 100%;\n}\n"]
            })
        ], ChipsInputExample);
        return ChipsInputExample;
    }());

    /**
     * @title Basic chips
     */
    var ChipsOverviewExample = /** @class */ (function () {
        function ChipsOverviewExample() {
        }
        ChipsOverviewExample = tslib_1.__decorate([
            core.Component({
                selector: 'chips-overview-example',
                template: "<mat-chip-list aria-label=\"Fish selection\">\n  <mat-chip>One fish</mat-chip>\n  <mat-chip>Two fish</mat-chip>\n  <mat-chip color=\"primary\" selected>Primary fish</mat-chip>\n  <mat-chip color=\"accent\" selected>Accent fish</mat-chip>\n</mat-chip-list>\n",
                styles: ["/** No CSS for this example */\n"]
            })
        ], ChipsOverviewExample);
        return ChipsOverviewExample;
    }());

    /**
     * @title Stacked chips
     */
    var ChipsStackedExample = /** @class */ (function () {
        function ChipsStackedExample() {
            this.availableColors = [
                { name: 'none', color: undefined },
                { name: 'Primary', color: 'primary' },
                { name: 'Accent', color: 'accent' },
                { name: 'Warn', color: 'warn' }
            ];
        }
        ChipsStackedExample = tslib_1.__decorate([
            core.Component({
                selector: 'chips-stacked-example',
                template: "<mat-chip-list class=\"mat-chip-list-stacked\" aria-label=\"Color selection\">\n  <mat-chip *ngFor=\"let chip of availableColors\" selected [color]=\"chip.color\">\n    {{chip.name}}\n  </mat-chip>\n</mat-chip-list>\n",
                styles: ["mat-chip {\n  max-width: 200px;\n}\n"]
            })
        ], ChipsStackedExample);
        return ChipsStackedExample;
    }());

    /** @title Datepicker open method */
    var DatepickerApiExample = /** @class */ (function () {
        function DatepickerApiExample() {
        }
        DatepickerApiExample = tslib_1.__decorate([
            core.Component({
                selector: 'datepicker-api-example',
                template: "<mat-form-field class=\"example-full-width\">\n  <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\">\n  <mat-datepicker #picker></mat-datepicker>\n</mat-form-field>\n<button mat-raised-button (click)=\"picker.open()\">Open</button>\n",
                styles: ["mat-form-field {\n  margin-right: 12px;\n}\n"]
            })
        ], DatepickerApiExample);
        return DatepickerApiExample;
    }());

    /** @title Datepicker palette colors */
    var DatepickerColorExample = /** @class */ (function () {
        function DatepickerColorExample() {
        }
        DatepickerColorExample = tslib_1.__decorate([
            core.Component({
                selector: 'datepicker-color-example',
                template: "<mat-form-field color=\"accent\">\n  <mat-label>Inherited calendar color</mat-label>\n  <input matInput [matDatepicker]=\"picker1\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n  <mat-datepicker #picker1></mat-datepicker>\n</mat-form-field>\n\n<mat-form-field color=\"accent\">\n  <mat-label>Custom calendar color</mat-label>\n  <input matInput [matDatepicker]=\"picker2\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n  <mat-datepicker #picker2 color=\"primary\"></mat-datepicker>\n</mat-form-field>\n",
                styles: ["mat-form-field {\n  margin-right: 12px;\n}\n"]
            })
        ], DatepickerColorExample);
        return DatepickerColorExample;
    }());

    /** @title Datepicker with custom calendar header */
    var DatepickerCustomHeaderExample = /** @class */ (function () {
        function DatepickerCustomHeaderExample() {
            this.exampleHeader = ExampleHeader;
        }
        DatepickerCustomHeaderExample = tslib_1.__decorate([
            core.Component({
                selector: 'datepicker-custom-header-example',
                template: "<mat-form-field>\n  <mat-label>Custom calendar header</mat-label>\n  <input matInput [matDatepicker]=\"picker\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-datepicker #picker [calendarHeaderComponent]=\"exampleHeader\"></mat-datepicker>\n</mat-form-field>\n",
                changeDetection: core.ChangeDetectionStrategy.OnPush
            })
        ], DatepickerCustomHeaderExample);
        return DatepickerCustomHeaderExample;
    }());
    /** Custom header component for datepicker. */
    var ExampleHeader = /** @class */ (function () {
        function ExampleHeader(_calendar, _dateAdapter, _dateFormats, cdr) {
            this._calendar = _calendar;
            this._dateAdapter = _dateAdapter;
            this._dateFormats = _dateFormats;
            this._destroyed = new rxjs.Subject();
            _calendar.stateChanges
                .pipe(operators.takeUntil(this._destroyed))
                .subscribe(function () { return cdr.markForCheck(); });
        }
        ExampleHeader.prototype.ngOnDestroy = function () {
            this._destroyed.next();
            this._destroyed.complete();
        };
        Object.defineProperty(ExampleHeader.prototype, "periodLabel", {
            get: function () {
                return this._dateAdapter
                    .format(this._calendar.activeDate, this._dateFormats.display.monthYearLabel)
                    .toLocaleUpperCase();
            },
            enumerable: true,
            configurable: true
        });
        ExampleHeader.prototype.previousClicked = function (mode) {
            this._calendar.activeDate = mode === 'month' ?
                this._dateAdapter.addCalendarMonths(this._calendar.activeDate, -1) :
                this._dateAdapter.addCalendarYears(this._calendar.activeDate, -1);
        };
        ExampleHeader.prototype.nextClicked = function (mode) {
            this._calendar.activeDate = mode === 'month' ?
                this._dateAdapter.addCalendarMonths(this._calendar.activeDate, 1) :
                this._dateAdapter.addCalendarYears(this._calendar.activeDate, 1);
        };
        ExampleHeader = tslib_1.__decorate([
            core.Component({
                selector: 'example-header',
                template: "\n    <div class=\"example-header\">\n      <button mat-icon-button class=\"example-double-arrow\" (click)=\"previousClicked('year')\">\n        <mat-icon>keyboard_arrow_left</mat-icon>\n        <mat-icon>keyboard_arrow_left</mat-icon>\n      </button>\n      <button mat-icon-button (click)=\"previousClicked('month')\">\n        <mat-icon>keyboard_arrow_left</mat-icon>\n      </button>\n      <span class=\"example-header-label\">{{periodLabel}}</span>\n      <button mat-icon-button (click)=\"nextClicked('month')\">\n        <mat-icon>keyboard_arrow_right</mat-icon>\n      </button>\n      <button mat-icon-button class=\"example-double-arrow\" (click)=\"nextClicked('year')\">\n        <mat-icon>keyboard_arrow_right</mat-icon>\n        <mat-icon>keyboard_arrow_right</mat-icon>\n      </button>\n    </div>\n  ",
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                styles: ["\n    .example-header {\n      display: flex;\n      align-items: center;\n      padding: 0.5em;\n    }\n\n    .example-header-label {\n      flex: 1;\n      height: 1em;\n      font-weight: 500;\n      text-align: center;\n    }\n\n    .example-double-arrow .mat-icon {\n      margin: -22%;\n    }\n  "]
            }),
            tslib_1.__param(2, core.Inject(core$1.MAT_DATE_FORMATS)),
            tslib_1.__metadata("design:paramtypes", [datepicker.MatCalendar, core$1.DateAdapter, Object, core.ChangeDetectorRef])
        ], ExampleHeader);
        return ExampleHeader;
    }());

    /** @title Datepicker with custom icon */
    var DatepickerCustomIconExample = /** @class */ (function () {
        function DatepickerCustomIconExample() {
        }
        DatepickerCustomIconExample = tslib_1.__decorate([
            core.Component({
                selector: 'datepicker-custom-icon-example',
                template: "<mat-form-field class=\"example-full-width\">\n  <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker\">\n    <mat-icon matDatepickerToggleIcon>keyboard_arrow_down</mat-icon>\n  </mat-datepicker-toggle>\n  <mat-datepicker #picker></mat-datepicker>\n</mat-form-field>\n",
                styles: ["/** No CSS for this example */\n"]
            })
        ], DatepickerCustomIconExample);
        return DatepickerCustomIconExample;
    }());

    /** @title Datepicker with custom date classes */
    var DatepickerDateClassExample = /** @class */ (function () {
        function DatepickerDateClassExample() {
            this.dateClass = function (d) {
                var date = d.getDate();
                // Highlight the 1st and 20th day of each month.
                return (date === 1 || date === 20) ? 'example-custom-date-class' : undefined;
            };
        }
        DatepickerDateClassExample = tslib_1.__decorate([
            core.Component({
                selector: 'datepicker-date-class-example',
                template: "<mat-form-field class=\"example-full-width\">\n  <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-datepicker [dateClass]=\"dateClass\" #picker></mat-datepicker>\n</mat-form-field>\n",
                encapsulation: core.ViewEncapsulation.None,
                styles: [".example-custom-date-class {\n  background: orange;\n  border-radius: 100%;\n}\n"]
            })
        ], DatepickerDateClassExample);
        return DatepickerDateClassExample;
    }());

    /** @title Disabled datepicker */
    var DatepickerDisabledExample = /** @class */ (function () {
        function DatepickerDisabledExample() {
        }
        DatepickerDisabledExample = tslib_1.__decorate([
            core.Component({
                selector: 'datepicker-disabled-example',
                template: "<p>\n  <mat-form-field>\n    <input matInput [matDatepicker]=\"dp1\" placeholder=\"Completely disabled\" disabled>\n    <mat-datepicker-toggle matSuffix [for]=\"dp1\"></mat-datepicker-toggle>\n    <mat-datepicker #dp1></mat-datepicker>\n  </mat-form-field>\n</p>\n\n<p>\n  <mat-form-field>\n    <input matInput [matDatepicker]=\"dp2\" placeholder=\"Popup disabled\">\n    <mat-datepicker-toggle matSuffix [for]=\"dp2\" disabled></mat-datepicker-toggle>\n    <mat-datepicker #dp2></mat-datepicker>\n  </mat-form-field>\n</p>\n\n<p>\n  <mat-form-field>\n    <input matInput [matDatepicker]=\"dp3\" placeholder=\"Input disabled\" disabled>\n    <mat-datepicker-toggle matSuffix [for]=\"dp3\"></mat-datepicker-toggle>\n    <mat-datepicker #dp3 disabled=\"false\"></mat-datepicker>\n  </mat-form-field>\n</p>\n",
                styles: ["/** No CSS for this example */\n"]
            })
        ], DatepickerDisabledExample);
        return DatepickerDisabledExample;
    }());

    /** @title Datepicker input and change events */
    var DatepickerEventsExample = /** @class */ (function () {
        function DatepickerEventsExample() {
            this.events = [];
        }
        DatepickerEventsExample.prototype.addEvent = function (type, event) {
            this.events.push(type + ": " + event.value);
        };
        DatepickerEventsExample = tslib_1.__decorate([
            core.Component({
                selector: 'datepicker-events-example',
                template: "<mat-form-field>\n  <input matInput [matDatepicker]=\"picker\" placeholder=\"Input & change events\"\n         (dateInput)=\"addEvent('input', $event)\" (dateChange)=\"addEvent('change', $event)\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-datepicker #picker></mat-datepicker>\n</mat-form-field>\n\n<div class=\"example-events\">\n  <div *ngFor=\"let e of events\">{{e}}</div>\n</div>\n",
                styles: [".example-events {\n  width: 400px;\n  height: 200px;\n  border: 1px solid #555;\n  overflow: auto;\n}\n"]
            })
        ], DatepickerEventsExample);
        return DatepickerEventsExample;
    }());

    /** @title Datepicker with filter validation */
    var DatepickerFilterExample = /** @class */ (function () {
        function DatepickerFilterExample() {
            this.myFilter = function (d) {
                var day = d.getDay();
                // Prevent Saturday and Sunday from being selected.
                return day !== 0 && day !== 6;
            };
        }
        DatepickerFilterExample = tslib_1.__decorate([
            core.Component({
                selector: 'datepicker-filter-example',
                template: "<mat-form-field class=\"example-full-width\">\n  <input matInput [matDatepickerFilter]=\"myFilter\" [matDatepicker]=\"picker\" placeholder=\"Choose a date\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-datepicker #picker></mat-datepicker>\n</mat-form-field>\n",
                styles: ["/** No CSS for this example */\n"]
            })
        ], DatepickerFilterExample);
        return DatepickerFilterExample;
    }());

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var moment = _rollupMoment__default || _rollupMoment;
    /** InjectionToken for moment date adapter to configure options. */
    var MAT_MOMENT_DATE_ADAPTER_OPTIONS = new core.InjectionToken('MAT_MOMENT_DATE_ADAPTER_OPTIONS', {
        providedIn: 'root',
        factory: MAT_MOMENT_DATE_ADAPTER_OPTIONS_FACTORY
    });
    /** @docs-private */
    function MAT_MOMENT_DATE_ADAPTER_OPTIONS_FACTORY() {
        return {
            useUtc: false
        };
    }
    /** Creates an array and fills it with values. */
    function range(length, valueFunction) {
        var valuesArray = Array(length);
        for (var i = 0; i < length; i++) {
            valuesArray[i] = valueFunction(i);
        }
        return valuesArray;
    }
    /** Adapts Moment.js Dates for use with Angular Material. */
    var MomentDateAdapter = /** @class */ (function (_super) {
        tslib_1.__extends(MomentDateAdapter, _super);
        function MomentDateAdapter(dateLocale, _options) {
            var _this = _super.call(this) || this;
            _this._options = _options;
            _this.setLocale(dateLocale || moment.locale());
            return _this;
        }
        MomentDateAdapter.prototype.setLocale = function (locale) {
            var _this = this;
            _super.prototype.setLocale.call(this, locale);
            var momentLocaleData = moment.localeData(locale);
            this._localeData = {
                firstDayOfWeek: momentLocaleData.firstDayOfWeek(),
                longMonths: momentLocaleData.months(),
                shortMonths: momentLocaleData.monthsShort(),
                dates: range(31, function (i) { return _this.createDate(2017, 0, i + 1).format('D'); }),
                longDaysOfWeek: momentLocaleData.weekdays(),
                shortDaysOfWeek: momentLocaleData.weekdaysShort(),
                narrowDaysOfWeek: momentLocaleData.weekdaysMin(),
            };
        };
        MomentDateAdapter.prototype.getYear = function (date) {
            return this.clone(date).year();
        };
        MomentDateAdapter.prototype.getMonth = function (date) {
            return this.clone(date).month();
        };
        MomentDateAdapter.prototype.getDate = function (date) {
            return this.clone(date).date();
        };
        MomentDateAdapter.prototype.getDayOfWeek = function (date) {
            return this.clone(date).day();
        };
        MomentDateAdapter.prototype.getMonthNames = function (style) {
            // Moment.js doesn't support narrow month names, so we just use short if narrow is requested.
            return style == 'long' ? this._localeData.longMonths : this._localeData.shortMonths;
        };
        MomentDateAdapter.prototype.getDateNames = function () {
            return this._localeData.dates;
        };
        MomentDateAdapter.prototype.getDayOfWeekNames = function (style) {
            if (style == 'long') {
                return this._localeData.longDaysOfWeek;
            }
            if (style == 'short') {
                return this._localeData.shortDaysOfWeek;
            }
            return this._localeData.narrowDaysOfWeek;
        };
        MomentDateAdapter.prototype.getYearName = function (date) {
            return this.clone(date).format('YYYY');
        };
        MomentDateAdapter.prototype.getFirstDayOfWeek = function () {
            return this._localeData.firstDayOfWeek;
        };
        MomentDateAdapter.prototype.getNumDaysInMonth = function (date) {
            return this.clone(date).daysInMonth();
        };
        MomentDateAdapter.prototype.clone = function (date) {
            return date.clone().locale(this.locale);
        };
        MomentDateAdapter.prototype.createDate = function (year, month, date) {
            // Moment.js will create an invalid date if any of the components are out of bounds, but we
            // explicitly check each case so we can throw more descriptive errors.
            if (month < 0 || month > 11) {
                throw Error("Invalid month index \"" + month + "\". Month index has to be between 0 and 11.");
            }
            if (date < 1) {
                throw Error("Invalid date \"" + date + "\". Date has to be greater than 0.");
            }
            var result = this._createMoment({ year: year, month: month, date: date }).locale(this.locale);
            // If the result isn't valid, the date must have been out of bounds for this month.
            if (!result.isValid()) {
                throw Error("Invalid date \"" + date + "\" for month with index \"" + month + "\".");
            }
            return result;
        };
        MomentDateAdapter.prototype.today = function () {
            return this._createMoment().locale(this.locale);
        };
        MomentDateAdapter.prototype.parse = function (value, parseFormat) {
            if (value && typeof value == 'string') {
                return this._createMoment(value, parseFormat, this.locale);
            }
            return value ? this._createMoment(value).locale(this.locale) : null;
        };
        MomentDateAdapter.prototype.format = function (date, displayFormat) {
            date = this.clone(date);
            if (!this.isValid(date)) {
                throw Error('MomentDateAdapter: Cannot format invalid date.');
            }
            return date.format(displayFormat);
        };
        MomentDateAdapter.prototype.addCalendarYears = function (date, years) {
            return this.clone(date).add({ years: years });
        };
        MomentDateAdapter.prototype.addCalendarMonths = function (date, months) {
            return this.clone(date).add({ months: months });
        };
        MomentDateAdapter.prototype.addCalendarDays = function (date, days) {
            return this.clone(date).add({ days: days });
        };
        MomentDateAdapter.prototype.toIso8601 = function (date) {
            return this.clone(date).format();
        };
        /**
         * Returns the given value if given a valid Moment or null. Deserializes valid ISO 8601 strings
         * (https://www.ietf.org/rfc/rfc3339.txt) and valid Date objects into valid Moments and empty
         * string into null. Returns an invalid date for all other values.
         */
        MomentDateAdapter.prototype.deserialize = function (value) {
            var date;
            if (value instanceof Date) {
                date = this._createMoment(value).locale(this.locale);
            }
            else if (this.isDateInstance(value)) {
                // Note: assumes that cloning also sets the correct locale.
                return this.clone(value);
            }
            if (typeof value === 'string') {
                if (!value) {
                    return null;
                }
                date = this._createMoment(value, moment.ISO_8601).locale(this.locale);
            }
            if (date && this.isValid(date)) {
                return this._createMoment(date).locale(this.locale);
            }
            return _super.prototype.deserialize.call(this, value);
        };
        MomentDateAdapter.prototype.isDateInstance = function (obj) {
            return moment.isMoment(obj);
        };
        MomentDateAdapter.prototype.isValid = function (date) {
            return this.clone(date).isValid();
        };
        MomentDateAdapter.prototype.invalid = function () {
            return moment.invalid();
        };
        /** Creates a Moment instance while respecting the current UTC settings. */
        MomentDateAdapter.prototype._createMoment = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return (this._options && this._options.useUtc) ? moment.utc.apply(moment, tslib_1.__spread(args)) : moment.apply(void 0, tslib_1.__spread(args));
        };
        MomentDateAdapter = tslib_1.__decorate([
            core.Injectable(),
            tslib_1.__param(0, core.Optional()), tslib_1.__param(0, core.Inject(core$1.MAT_DATE_LOCALE)),
            tslib_1.__param(1, core.Optional()), tslib_1.__param(1, core.Inject(MAT_MOMENT_DATE_ADAPTER_OPTIONS)),
            tslib_1.__metadata("design:paramtypes", [String, Object])
        ], MomentDateAdapter);
        return MomentDateAdapter;
    }(core$1.DateAdapter));

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var MAT_MOMENT_DATE_FORMATS = {
        parse: {
            dateInput: 'l',
        },
        display: {
            dateInput: 'l',
            monthYearLabel: 'MMM YYYY',
            dateA11yLabel: 'LL',
            monthYearA11yLabel: 'MMMM YYYY',
        },
    };

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var MomentDateModule = /** @class */ (function () {
        function MomentDateModule() {
        }
        MomentDateModule = tslib_1.__decorate([
            core.NgModule({
                providers: [
                    {
                        provide: core$1.DateAdapter,
                        useClass: MomentDateAdapter,
                        deps: [core$1.MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
                    }
                ],
            })
        ], MomentDateModule);
        return MomentDateModule;
    }());
    var ɵ0 = MAT_MOMENT_DATE_FORMATS;
    var MatMomentDateModule = /** @class */ (function () {
        function MatMomentDateModule() {
        }
        MatMomentDateModule = tslib_1.__decorate([
            core.NgModule({
                imports: [MomentDateModule],
                providers: [{ provide: core$1.MAT_DATE_FORMATS, useValue: ɵ0 }],
            })
        ], MatMomentDateModule);
        return MatMomentDateModule;
    }());

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    var moment$1 = _rollupMoment__default || _rollupMoment;
    // See the Moment.js docs for the meaning of these formats:
    // https://momentjs.com/docs/#/displaying/format/
    var MY_FORMATS = {
        parse: {
            dateInput: 'LL',
        },
        display: {
            dateInput: 'LL',
            monthYearLabel: 'MMM YYYY',
            dateA11yLabel: 'LL',
            monthYearA11yLabel: 'MMMM YYYY',
        },
    };
    /** @title Datepicker with custom formats */
    var DatepickerFormatsExample = /** @class */ (function () {
        function DatepickerFormatsExample() {
            this.date = new forms.FormControl(moment$1());
        }
        DatepickerFormatsExample = tslib_1.__decorate([
            core.Component({
                selector: 'datepicker-formats-example',
                template: "<mat-form-field>\n  <input matInput [matDatepicker]=\"dp\" placeholder=\"Verbose datepicker\" [formControl]=\"date\">\n  <mat-datepicker-toggle matSuffix [for]=\"dp\"></mat-datepicker-toggle>\n  <mat-datepicker #dp></mat-datepicker>\n</mat-form-field>\n",
                providers: [
                    // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                    // application's root module. We provide it at the component level here, due to limitations of
                    // our example generation script.
                    { provide: core$1.DateAdapter, useClass: MomentDateAdapter, deps: [core$1.MAT_DATE_LOCALE] },
                    { provide: core$1.MAT_DATE_FORMATS, useValue: MY_FORMATS },
                ],
                styles: ["/** No CSS for this example */\n"]
            })
        ], DatepickerFormatsExample);
        return DatepickerFormatsExample;
    }());

    var ɵ0$1 = MAT_MOMENT_DATE_FORMATS;
    /** @title Datepicker with different locale */
    var DatepickerLocaleExample = /** @class */ (function () {
        function DatepickerLocaleExample(_adapter) {
            this._adapter = _adapter;
        }
        DatepickerLocaleExample.prototype.french = function () {
            this._adapter.setLocale('fr');
        };
        DatepickerLocaleExample = tslib_1.__decorate([
            core.Component({
                selector: 'datepicker-locale-example',
                template: "<mat-form-field>\n  <input matInput [matDatepicker]=\"dp\" placeholder=\"Different locale\">\n  <mat-datepicker-toggle matSuffix [for]=\"dp\"></mat-datepicker-toggle>\n  <mat-datepicker #dp></mat-datepicker>\n</mat-form-field>\n\n<button mat-button (click)=\"french()\">Dynamically switch to French</button>\n",
                providers: [
                    // The locale would typically be provided on the root module of your application. We do it at
                    // the component level here, due to limitations of our example generation script.
                    { provide: core$1.MAT_DATE_LOCALE, useValue: 'ja-JP' },
                    // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
                    // `MatMomentDateModule` in your applications root module. We provide it at the component level
                    // here, due to limitations of our example generation script.
                    { provide: core$1.DateAdapter, useClass: MomentDateAdapter, deps: [core$1.MAT_DATE_LOCALE] },
                    { provide: core$1.MAT_DATE_FORMATS, useValue: ɵ0$1 },
                ],
                styles: ["mat-form-field {\n  margin-right: 12px;\n}\n"]
            }),
            tslib_1.__metadata("design:paramtypes", [core$1.DateAdapter])
        ], DatepickerLocaleExample);
        return DatepickerLocaleExample;
    }());

    /** @title Datepicker with min & max validation */
    var DatepickerMinMaxExample = /** @class */ (function () {
        function DatepickerMinMaxExample() {
            this.minDate = new Date(2000, 0, 1);
            this.maxDate = new Date(2020, 0, 1);
        }
        DatepickerMinMaxExample = tslib_1.__decorate([
            core.Component({
                selector: 'datepicker-min-max-example',
                template: "<mat-form-field class=\"example-full-width\">\n  <input matInput [min]=\"minDate\" [max]=\"maxDate\" [matDatepicker]=\"picker\" placeholder=\"Choose a date\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-datepicker #picker></mat-datepicker>\n</mat-form-field>\n",
                styles: ["/** No CSS for this example */\n"]
            })
        ], DatepickerMinMaxExample);
        return DatepickerMinMaxExample;
    }());

    var moment$2 = _rollupMoment__default || _rollupMoment;
    var ɵ0$2 = MAT_MOMENT_DATE_FORMATS;
    /** @title Datepicker that uses Moment.js dates */
    var DatepickerMomentExample = /** @class */ (function () {
        function DatepickerMomentExample() {
            // Datepicker takes `Moment` objects instead of `Date` objects.
            this.date = new forms.FormControl(moment$2([2017, 0, 1]));
        }
        DatepickerMomentExample = tslib_1.__decorate([
            core.Component({
                selector: 'datepicker-moment-example',
                template: "<mat-form-field>\n  <input matInput [matDatepicker]=\"dp\" placeholder=\"Moment.js datepicker\" [formControl]=\"date\">\n  <mat-datepicker-toggle matSuffix [for]=\"dp\"></mat-datepicker-toggle>\n  <mat-datepicker #dp></mat-datepicker>\n</mat-form-field>\n",
                providers: [
                    // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
                    // `MatMomentDateModule` in your applications root module. We provide it at the component level
                    // here, due to limitations of our example generation script.
                    { provide: core$1.DateAdapter, useClass: MomentDateAdapter, deps: [core$1.MAT_DATE_LOCALE] },
                    { provide: core$1.MAT_DATE_FORMATS, useValue: ɵ0$2 },
                ],
                styles: ["/** No CSS for this example */\n"]
            })
        ], DatepickerMomentExample);
        return DatepickerMomentExample;
    }());

    /** @title Basic datepicker */
    var DatepickerOverviewExample = /** @class */ (function () {
        function DatepickerOverviewExample() {
        }
        DatepickerOverviewExample = tslib_1.__decorate([
            core.Component({
                selector: 'datepicker-overview-example',
                template: "<mat-form-field>\n  <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-datepicker #picker></mat-datepicker>\n</mat-form-field>\n",
                styles: ["/** No CSS for this example */\n"]
            })
        ], DatepickerOverviewExample);
        return DatepickerOverviewExample;
    }());

    /** @title Datepicker start date */
    var DatepickerStartViewExample = /** @class */ (function () {
        function DatepickerStartViewExample() {
            this.startDate = new Date(1990, 0, 1);
        }
        DatepickerStartViewExample = tslib_1.__decorate([
            core.Component({
                selector: 'datepicker-start-view-example',
                template: "<mat-form-field>\n  <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-datepicker #picker startView=\"year\" [startAt]=\"startDate\"></mat-datepicker>\n</mat-form-field>\n",
                styles: ["/** No CSS for this example */\n"]
            })
        ], DatepickerStartViewExample);
        return DatepickerStartViewExample;
    }());

    /** @title Datepicker touch UI */
    var DatepickerTouchExample = /** @class */ (function () {
        function DatepickerTouchExample() {
        }
        DatepickerTouchExample = tslib_1.__decorate([
            core.Component({
                selector: 'datepicker-touch-example',
                template: "<mat-form-field class=\"example-full-width\">\n  <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-datepicker touchUi #picker></mat-datepicker>\n</mat-form-field>\n",
                styles: ["/** No CSS for this example */\n"]
            })
        ], DatepickerTouchExample);
        return DatepickerTouchExample;
    }());

    /** @title Datepicker selected value */
    var DatepickerValueExample = /** @class */ (function () {
        function DatepickerValueExample() {
            this.date = new forms.FormControl(new Date());
            this.serializedDate = new forms.FormControl((new Date()).toISOString());
        }
        DatepickerValueExample = tslib_1.__decorate([
            core.Component({
                selector: 'datepicker-value-example',
                template: "<mat-form-field>\n  <input matInput [matDatepicker]=\"picker1\" placeholder=\"Angular forms\" [formControl]=\"date\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n  <mat-datepicker #picker1></mat-datepicker>\n</mat-form-field>\n\n<mat-form-field>\n  <input matInput [matDatepicker]=\"picker2\" placeholder=\"Angular forms (w/ deserialization)\"\n         [formControl]=\"serializedDate\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n  <mat-datepicker #picker2></mat-datepicker>\n</mat-form-field>\n\n<mat-form-field>\n  <input matInput [matDatepicker]=\"picker3\" placeholder=\"Value binding\" [value]=\"date.value\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker3\"></mat-datepicker-toggle>\n  <mat-datepicker #picker3></mat-datepicker>\n</mat-form-field>\n",
                styles: ["mat-form-field {\n  margin-right: 12px;\n}\n"]
            })
        ], DatepickerValueExample);
        return DatepickerValueExample;
    }());

    var moment$3 = _rollupMoment__default || _rollupMoment;
    // See the Moment.js docs for the meaning of these formats:
    // https://momentjs.com/docs/#/displaying/format/
    var MY_FORMATS$1 = {
        parse: {
            dateInput: 'MM/YYYY',
        },
        display: {
            dateInput: 'MM/YYYY',
            monthYearLabel: 'MMM YYYY',
            dateA11yLabel: 'LL',
            monthYearA11yLabel: 'MMMM YYYY',
        },
    };
    /** @title Datepicker emulating a Year and month picker */
    var DatepickerViewsSelectionExample = /** @class */ (function () {
        function DatepickerViewsSelectionExample() {
            this.date = new forms.FormControl(moment$3());
        }
        DatepickerViewsSelectionExample.prototype.chosenYearHandler = function (normalizedYear) {
            var ctrlValue = this.date.value;
            ctrlValue.year(normalizedYear.year());
            this.date.setValue(ctrlValue);
        };
        DatepickerViewsSelectionExample.prototype.chosenMonthHandler = function (normalizedMonth, datepicker) {
            var ctrlValue = this.date.value;
            ctrlValue.month(normalizedMonth.month());
            this.date.setValue(ctrlValue);
            datepicker.close();
        };
        DatepickerViewsSelectionExample = tslib_1.__decorate([
            core.Component({
                selector: 'datepicker-views-selection-example',
                template: "<mat-form-field>\n  <input matInput [matDatepicker]=\"dp\" placeholder=\"Month and Year\" [formControl]=\"date\">\n  <mat-datepicker-toggle matSuffix [for]=\"dp\"></mat-datepicker-toggle>\n  <mat-datepicker #dp\n                  startView=\"multi-year\"\n                  (yearSelected)=\"chosenYearHandler($event)\"\n                  (monthSelected)=\"chosenMonthHandler($event, dp)\"\n                  panelClass=\"example-month-picker\">\n  </mat-datepicker>\n</mat-form-field>\n",
                providers: [
                    // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                    // application's root module. We provide it at the component level here, due to limitations of
                    // our example generation script.
                    { provide: core$1.DateAdapter, useClass: MomentDateAdapter, deps: [core$1.MAT_DATE_LOCALE] },
                    { provide: core$1.MAT_DATE_FORMATS, useValue: MY_FORMATS$1 },
                ],
                styles: [".example-month-picker .mat-calendar-period-button {\n  pointer-events: none;\n}\n\n.example-month-picker .mat-calendar-arrow {\n  display: none;\n}\n"]
            })
        ], DatepickerViewsSelectionExample);
        return DatepickerViewsSelectionExample;
    }());

    /**
     * @title Dialog with header, scrollable content and actions
     */
    var DialogContentExample = /** @class */ (function () {
        function DialogContentExample(dialog) {
            this.dialog = dialog;
        }
        DialogContentExample.prototype.openDialog = function () {
            var dialogRef = this.dialog.open(DialogContentExampleDialog);
            dialogRef.afterClosed().subscribe(function (result) {
                console.log("Dialog result: " + result);
            });
        };
        DialogContentExample = tslib_1.__decorate([
            core.Component({
                selector: 'dialog-content-example',
                template: "<button mat-button (click)=\"openDialog()\">Open dialog</button>\n",
                styles: ["/** No CSS for this example */\n"]
            }),
            tslib_1.__metadata("design:paramtypes", [dialog.MatDialog])
        ], DialogContentExample);
        return DialogContentExample;
    }());
    var DialogContentExampleDialog = /** @class */ (function () {
        function DialogContentExampleDialog() {
        }
        DialogContentExampleDialog = tslib_1.__decorate([
            core.Component({
                selector: 'dialog-content-example-dialog',
                template: "<h2 mat-dialog-title>Install Angular</h2>\n<mat-dialog-content class=\"mat-typography\">\n  <h3>Develop across all platforms</h3>\n  <p>Learn one way to build applications with Angular and reuse your code and abilities to build\n    apps for any deployment target. For web, mobile web, native mobile and native desktop.</p>\n\n  <h3>Speed &amp; Performance</h3>\n  <p>Achieve the maximum speed possible on the Web Platform today, and take it further, via Web\n    Workers and server-side rendering. Angular puts you in control over scalability. Meet huge\n    data requirements by building data models on RxJS, Immutable.js or another push-model.</p>\n\n  <h3>Incredible tooling</h3>\n  <p>Build features quickly with simple, declarative templates. Extend the template language with\n    your own components and use a wide array of existing components. Get immediate Angular-specific\n    help and feedback with nearly every IDE and editor. All this comes together so you can focus\n    on building amazing apps rather than trying to make the code work.</p>\n\n  <h3>Loved by millions</h3>\n  <p>From prototype through global deployment, Angular delivers the productivity and scalable\n    infrastructure that supports Google's largest applications.</p>\n\n  <h3>What is Angular?</h3>\n\n  <p>Angular is a platform that makes it easy to build applications with the web. Angular\n    combines declarative templates, dependency injection, end to end tooling, and integrated\n    best practices to solve development challenges. Angular empowers developers to build\n    applications that live on the web, mobile, or the desktop</p>\n\n  <h3>Architecture overview</h3>\n\n  <p>Angular is a platform and framework for building client applications in HTML and TypeScript.\n  Angular is itself written in TypeScript. It implements core and optional functionality as a\n  set of TypeScript libraries that you import into your apps.</p>\n\n  <p>The basic building blocks of an Angular application are NgModules, which provide a compilation\n  context for components. NgModules collect related code into functional sets; an Angular app is\n  defined by a set of NgModules. An app always has at least a root module that enables\n  bootstrapping, and typically has many more feature modules.</p>\n\n  <p>Components define views, which are sets of screen elements that Angular can choose among and\n  modify according to your program logic and data. Every app has at least a root component.</p>\n\n  <p>Components use services, which provide specific functionality not directly related to views.\n  Service providers can be injected into components as dependencies, making your code modular,\n  reusable, and efficient.</p>\n\n  <p>Both components and services are simply classes, with decorators that mark their type and\n  provide metadata that tells Angular how to use them.</p>\n\n  <p>The metadata for a component class associates it with a template that defines a view. A\n  template combines ordinary HTML with Angular directives and binding markup that allow Angular\n  to modify the HTML before rendering it for display.</p>\n\n  <p>The metadata for a service class provides the information Angular needs to make it available\n  to components through Dependency Injection (DI).</p>\n\n  <p>An app's components typically define many views, arranged hierarchically. Angular provides\n  the Router service to help you define navigation paths among views. The router provides\n  sophisticated in-browser navigational capabilities.</p>\n</mat-dialog-content>\n<mat-dialog-actions align=\"end\">\n  <button mat-button mat-dialog-close>Cancel</button>\n  <button mat-button [mat-dialog-close]=\"true\" cdkFocusInitial>Install</button>\n</mat-dialog-actions>\n"
            })
        ], DialogContentExampleDialog);
        return DialogContentExampleDialog;
    }());

    /**
     * @title Injecting data when opening a dialog
     */
    var DialogDataExample = /** @class */ (function () {
        function DialogDataExample(dialog) {
            this.dialog = dialog;
        }
        DialogDataExample.prototype.openDialog = function () {
            this.dialog.open(DialogDataExampleDialog, {
                data: {
                    animal: 'panda'
                }
            });
        };
        DialogDataExample = tslib_1.__decorate([
            core.Component({
                selector: 'dialog-data-example',
                template: "<button mat-button (click)=\"openDialog()\">Open dialog</button>\n",
                styles: ["/** No CSS for this example */\n"]
            }),
            tslib_1.__metadata("design:paramtypes", [dialog.MatDialog])
        ], DialogDataExample);
        return DialogDataExample;
    }());
    var DialogDataExampleDialog = /** @class */ (function () {
        function DialogDataExampleDialog(data) {
            this.data = data;
        }
        DialogDataExampleDialog = tslib_1.__decorate([
            core.Component({
                selector: 'dialog-data-example-dialog',
                template: "<h1 mat-dialog-title>Favorite Animal</h1>\n<div mat-dialog-content>\n  My favorite animal is:\n  <ul>\n    <li>\n      <span *ngIf=\"data.animal === 'panda'\">&#10003;</span> Panda\n    </li>\n    <li>\n      <span *ngIf=\"data.animal === 'unicorn'\">&#10003;</span> Unicorn\n    </li>\n    <li>\n      <span *ngIf=\"data.animal === 'lion'\">&#10003;</span> Lion\n    </li>\n  </ul>\n</div>\n"
            }),
            tslib_1.__param(0, core.Inject(dialog.MAT_DIALOG_DATA)),
            tslib_1.__metadata("design:paramtypes", [Object])
        ], DialogDataExampleDialog);
        return DialogDataExampleDialog;
    }());

    /**
     * @title Dialog elements
     */
    var DialogElementsExample = /** @class */ (function () {
        function DialogElementsExample(dialog) {
            this.dialog = dialog;
        }
        DialogElementsExample.prototype.openDialog = function () {
            this.dialog.open(DialogElementsExampleDialog);
        };
        DialogElementsExample = tslib_1.__decorate([
            core.Component({
                selector: 'dialog-elements-example',
                template: "<button mat-button (click)=\"openDialog()\">Launch dialog</button>\n",
                styles: ["/** No CSS for this example */\n"]
            }),
            tslib_1.__metadata("design:paramtypes", [dialog.MatDialog])
        ], DialogElementsExample);
        return DialogElementsExample;
    }());
    var DialogElementsExampleDialog = /** @class */ (function () {
        function DialogElementsExampleDialog() {
        }
        DialogElementsExampleDialog = tslib_1.__decorate([
            core.Component({
                selector: 'dialog-elements-example-dialog',
                template: "<h1 mat-dialog-title>Dialog with elements</h1>\n<div mat-dialog-content>This dialog showcases the title, close, content and actions elements.</div>\n<div mat-dialog-actions>\n  <button mat-button mat-dialog-close>Close</button>\n</div>\n"
            })
        ], DialogElementsExampleDialog);
        return DialogElementsExampleDialog;
    }());

    /**
     * @title Dialog Overview
     */
    var DialogOverviewExample = /** @class */ (function () {
        function DialogOverviewExample(dialog) {
            this.dialog = dialog;
        }
        DialogOverviewExample.prototype.openDialog = function () {
            var _this = this;
            var dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
                width: '250px',
                data: { name: this.name, animal: this.animal }
            });
            dialogRef.afterClosed().subscribe(function (result) {
                console.log('The dialog was closed');
                _this.animal = result;
            });
        };
        DialogOverviewExample = tslib_1.__decorate([
            core.Component({
                selector: 'dialog-overview-example',
                template: "<ol>\n  <li>\n    <mat-form-field>\n      <input matInput [(ngModel)]=\"name\" placeholder=\"What's your name?\">\n    </mat-form-field>\n  </li>\n  <li>\n    <button mat-raised-button (click)=\"openDialog()\">Pick one</button>\n  </li>\n  <li *ngIf=\"animal\">\n    You chose: <i>{{animal}}</i>\n  </li>\n</ol>\n",
                styles: ["/** No CSS for this example */\n"]
            }),
            tslib_1.__metadata("design:paramtypes", [dialog.MatDialog])
        ], DialogOverviewExample);
        return DialogOverviewExample;
    }());
    var DialogOverviewExampleDialog = /** @class */ (function () {
        function DialogOverviewExampleDialog(dialogRef, data) {
            this.dialogRef = dialogRef;
            this.data = data;
        }
        DialogOverviewExampleDialog.prototype.onNoClick = function () {
            this.dialogRef.close();
        };
        DialogOverviewExampleDialog = tslib_1.__decorate([
            core.Component({
                selector: 'dialog-overview-example-dialog',
                template: "<h1 mat-dialog-title>Hi {{data.name}}</h1>\n<div mat-dialog-content>\n  <p>What's your favorite animal?</p>\n  <mat-form-field>\n    <input matInput [(ngModel)]=\"data.animal\">\n  </mat-form-field>\n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"onNoClick()\">No Thanks</button>\n  <button mat-button [mat-dialog-close]=\"data.animal\" cdkFocusInitial>Ok</button>\n</div>\n"
            }),
            tslib_1.__param(1, core.Inject(dialog.MAT_DIALOG_DATA)),
            tslib_1.__metadata("design:paramtypes", [dialog.MatDialogRef, Object])
        ], DialogOverviewExampleDialog);
        return DialogOverviewExampleDialog;
    }());

    /**
     * @title Basic divider
     */
    var DividerOverviewExample = /** @class */ (function () {
        function DividerOverviewExample() {
        }
        DividerOverviewExample = tslib_1.__decorate([
            core.Component({
                selector: 'divider-overview-example',
                template: "<mat-list>\n  <mat-list-item>Item 1</mat-list-item>\n  <mat-divider></mat-divider>\n  <mat-list-item>Item 2</mat-list-item>\n  <mat-divider></mat-divider>\n  <mat-list-item>Item 3</mat-list-item>\n</mat-list>\n",
                styles: ["/** No CSS for this example */\n"]
            })
        ], DividerOverviewExample);
        return DividerOverviewExample;
    }());

    /**
     * @title Elevation CSS classes
     */
    var ElevationOverviewExample = /** @class */ (function () {
        function ElevationOverviewExample() {
            this.isActive = false;
        }
        ElevationOverviewExample = tslib_1.__decorate([
            core.Component({
                selector: 'elevation-overview-example',
                template: "<div class=\"example-container\"\n    [class.mat-elevation-z2]=\"!isActive\"\n    [class.mat-elevation-z8]=\"isActive\">\n  Example\n</div>\n\n<button mat-button (click)=\"isActive = !isActive\">Toggle Elevation</button>\n",
                styles: [".example-container {\n  padding: 16px;\n  margin-bottom: 16px;\n}\n"]
            })
        ], ElevationOverviewExample);
        return ElevationOverviewExample;
    }());

    /**
     * @title Accordion with expand/collapse all toggles
     */
    var ExpansionExpandCollapseAllExample = /** @class */ (function () {
        function ExpansionExpandCollapseAllExample() {
        }
        tslib_1.__decorate([
            core.ViewChild(expansion.MatAccordion, { static: false }),
            tslib_1.__metadata("design:type", expansion.MatAccordion)
        ], ExpansionExpandCollapseAllExample.prototype, "accordion", void 0);
        ExpansionExpandCollapseAllExample = tslib_1.__decorate([
            core.Component({
                selector: 'expansion-toggle-all-example',
                template: "<div class=\"example-action-buttons\">\n  <button mat-button (click)=\"accordion.openAll()\">Expand All</button>\n  <button mat-button (click)=\"accordion.closeAll()\">Collapse All</button>\n</div>\n<mat-accordion class=\"example-headers-align\" multi>\n  <mat-expansion-panel>\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        Personal data\n      </mat-panel-title>\n      <mat-panel-description>\n        Type your name and age\n        <mat-icon>account_circle</mat-icon>\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n\n    <mat-form-field>\n      <input matInput placeholder=\"First name\">\n    </mat-form-field>\n\n    <mat-form-field>\n      <input matInput type=\"number\" min=\"1\" placeholder=\"Age\">\n    </mat-form-field>\n\n  </mat-expansion-panel>\n\n  <mat-expansion-panel disabled>\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        Destination\n      </mat-panel-title>\n      <mat-panel-description>\n        Type the country name\n        <mat-icon>map</mat-icon>\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n\n    <mat-form-field>\n      <input matInput placeholder=\"Country\">\n    </mat-form-field>\n  </mat-expansion-panel>\n\n  <mat-expansion-panel>\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        Day of the trip\n      </mat-panel-title>\n      <mat-panel-description>\n        Inform the date you wish to travel\n        <mat-icon>date_range</mat-icon>\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n\n    <mat-form-field>\n      <input matInput placeholder=\"Date\" [matDatepicker]=\"picker\" (focus)=\"picker.open()\" readonly>\n    </mat-form-field>\n    <mat-datepicker #picker></mat-datepicker>\n  </mat-expansion-panel>\n</mat-accordion>\n",
                styles: [".example-action-buttons {\n  padding-bottom: 20px;\n}\n\n.example-headers-align .mat-expansion-panel-header-title,\n.example-headers-align .mat-expansion-panel-header-description {\n  flex-basis: 0;\n}\n\n.example-headers-align .mat-expansion-panel-header-description {\n  justify-content: space-between;\n  align-items: center;\n}\n"]
            })
        ], ExpansionExpandCollapseAllExample);
        return ExpansionExpandCollapseAllExample;
    }());

    /**
     * @title Basic expansion panel
     */
    var ExpansionOverviewExample = /** @class */ (function () {
        function ExpansionOverviewExample() {
            this.panelOpenState = false;
        }
        ExpansionOverviewExample = tslib_1.__decorate([
            core.Component({
                selector: 'expansion-overview-example',
                template: "<mat-accordion>\n  <mat-expansion-panel>\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        Personal data\n      </mat-panel-title>\n      <mat-panel-description>\n        Type your name and age\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n\n    <mat-form-field>\n      <input matInput placeholder=\"First name\">\n    </mat-form-field>\n\n    <mat-form-field>\n      <input matInput placeholder=\"Age\">\n    </mat-form-field>\n  </mat-expansion-panel>\n  <mat-expansion-panel (opened)=\"panelOpenState = true\"\n                       (closed)=\"panelOpenState = false\">\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        Self aware panel\n      </mat-panel-title>\n      <mat-panel-description>\n        Currently I am {{panelOpenState ? 'open' : 'closed'}}\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n    <p>I'm visible because I am open</p>\n  </mat-expansion-panel>\n</mat-accordion>\n",
                styles: ["/** No CSS for this example */\n"]
            })
        ], ExpansionOverviewExample);
        return ExpansionOverviewExample;
    }());

    /**
     * @title Expansion panel as accordion
     */
    var ExpansionStepsExample = /** @class */ (function () {
        function ExpansionStepsExample() {
            this.step = 0;
        }
        ExpansionStepsExample.prototype.setStep = function (index) {
            this.step = index;
        };
        ExpansionStepsExample.prototype.nextStep = function () {
            this.step++;
        };
        ExpansionStepsExample.prototype.prevStep = function () {
            this.step--;
        };
        ExpansionStepsExample = tslib_1.__decorate([
            core.Component({
                selector: 'expansion-steps-example',
                template: "<mat-accordion class=\"example-headers-align\">\n  <mat-expansion-panel [expanded]=\"step === 0\" (opened)=\"setStep(0)\" hideToggle>\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        Personal data\n      </mat-panel-title>\n      <mat-panel-description>\n        Type your name and age\n        <mat-icon>account_circle</mat-icon>\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n\n    <mat-form-field>\n      <input matInput placeholder=\"First name\">\n    </mat-form-field>\n\n    <mat-form-field>\n      <input matInput type=\"number\" min=\"1\" placeholder=\"Age\">\n    </mat-form-field>\n\n    <mat-action-row>\n      <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>\n    </mat-action-row>\n  </mat-expansion-panel>\n\n  <mat-expansion-panel [expanded]=\"step === 1\" (opened)=\"setStep(1)\" hideToggle>\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        Destination\n      </mat-panel-title>\n      <mat-panel-description>\n        Type the country name\n        <mat-icon>map</mat-icon>\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n\n    <mat-form-field>\n      <input matInput placeholder=\"Country\">\n    </mat-form-field>\n\n    <mat-action-row>\n      <button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\n      <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>\n    </mat-action-row>\n  </mat-expansion-panel>\n\n  <mat-expansion-panel [expanded]=\"step === 2\" (opened)=\"setStep(2)\" hideToggle>\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        Day of the trip\n      </mat-panel-title>\n      <mat-panel-description>\n        Inform the date you wish to travel\n        <mat-icon>date_range</mat-icon>\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n\n    <mat-form-field>\n      <input matInput placeholder=\"Date\" [matDatepicker]=\"picker\" (focus)=\"picker.open()\" readonly>\n    </mat-form-field>\n    <mat-datepicker #picker></mat-datepicker>\n\n    <mat-action-row>\n      <button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\n      <button mat-button color=\"primary\" (click)=\"nextStep()\">End</button>\n    </mat-action-row>\n  </mat-expansion-panel>\n\n</mat-accordion>\n",
                styles: [".example-headers-align .mat-expansion-panel-header-title,\n.example-headers-align .mat-expansion-panel-header-description {\n  flex-basis: 0;\n}\n\n.example-headers-align .mat-expansion-panel-header-description {\n  justify-content: space-between;\n  align-items: center;\n}\n\nmat-form-field {\n  margin-right: 12px;\n}\n"]
            })
        ], ExpansionStepsExample);
        return ExpansionStepsExample;
    }());

    /** @title Monitoring focus with FocusMonitor */
    var FocusMonitorDirectivesExample = /** @class */ (function () {
        function FocusMonitorDirectivesExample(_ngZone, _cdr) {
            this._ngZone = _ngZone;
            this._cdr = _cdr;
            this.elementOrigin = this.formatOrigin(null);
            this.subtreeOrigin = this.formatOrigin(null);
        }
        FocusMonitorDirectivesExample.prototype.formatOrigin = function (origin) {
            return origin ? origin + ' focused' : 'blurred';
        };
        // Workaround for the fact that (cdkFocusChange) emits outside NgZone.
        FocusMonitorDirectivesExample.prototype.markForCheck = function () {
            var _this = this;
            this._ngZone.run(function () { return _this._cdr.markForCheck(); });
        };
        FocusMonitorDirectivesExample = tslib_1.__decorate([
            core.Component({
                selector: 'focus-monitor-directives-example',
                template: "<div class=\"example-focus-monitor\">\n  <button cdkMonitorSubtreeFocus\n          (cdkFocusChange)=\"elementOrigin = formatOrigin($event); markForCheck()\">\n    Focus Monitored Element ({{elementOrigin}})\n  </button>\n</div>\n\n<div class=\"example-focus-monitor\">\n  <div cdkMonitorSubtreeFocus\n       (cdkFocusChange)=\"subtreeOrigin = formatOrigin($event); markForCheck()\">\n    <p>Focus Monitored Subtree ({{subtreeOrigin}})</p>\n    <button>Child Button 1</button>\n    <button>Child Button 2</button>\n  </div>\n</div>\n",
                styles: [".example-focus-monitor {\n  padding: 20px;\n}\n\n.example-focus-monitor .cdk-mouse-focused {\n  background: rgba(255, 0, 0, 0.5);\n}\n\n.example-focus-monitor .cdk-keyboard-focused {\n  background: rgba(0, 255, 0, 0.5);\n}\n\n.example-focus-monitor .cdk-touch-focused {\n  background: rgba(0, 0, 255, 0.5);\n}\n\n.example-focus-monitor .cdk-program-focused {\n  background: rgba(255, 0, 255, 0.5);\n}\n\nbutton {\n  margin-right: 12px;\n}\n"]
            }),
            tslib_1.__metadata("design:paramtypes", [core.NgZone, core.ChangeDetectorRef])
        ], FocusMonitorDirectivesExample);
        return FocusMonitorDirectivesExample;
    }());

    /** @title Focusing with a specific FocusOrigin */
    var FocusMonitorFocusViaExample = /** @class */ (function () {
        function FocusMonitorFocusViaExample(focusMonitor, _cdr, _ngZone) {
            this.focusMonitor = focusMonitor;
            this._cdr = _cdr;
            this._ngZone = _ngZone;
            this.origin = this.formatOrigin(null);
        }
        FocusMonitorFocusViaExample.prototype.ngAfterViewInit = function () {
            var _this = this;
            this.focusMonitor.monitor(this.monitoredEl)
                .subscribe(function (origin) { return _this._ngZone.run(function () {
                _this.origin = _this.formatOrigin(origin);
                _this._cdr.markForCheck();
            }); });
        };
        FocusMonitorFocusViaExample.prototype.ngOnDestroy = function () {
            this.focusMonitor.stopMonitoring(this.monitoredEl);
        };
        FocusMonitorFocusViaExample.prototype.formatOrigin = function (origin) {
            return origin ? origin + ' focused' : 'blurred';
        };
        tslib_1.__decorate([
            core.ViewChild('monitored', { static: false }),
            tslib_1.__metadata("design:type", core.ElementRef)
        ], FocusMonitorFocusViaExample.prototype, "monitoredEl", void 0);
        FocusMonitorFocusViaExample = tslib_1.__decorate([
            core.Component({
                selector: 'focus-monitor-focus-via-example',
                template: "<div class=\"example-focus-monitor\">\n  <button #monitored>1. Focus Monitored Element ({{origin}})</button>\n  <button #unmonitored>2. Not Monitored</button>\n</div>\n\n<mat-form-field>\n  <mat-label>Simulated focus origin</mat-label>\n  <mat-select #simulatedOrigin value=\"mouse\">\n    <mat-option value=\"mouse\">Mouse</mat-option>\n    <mat-option value=\"keyboard\">Keyboard</mat-option>\n    <mat-option value=\"touch\">Touch</mat-option>\n    <mat-option value=\"program\">Programmatic</mat-option>\n  </mat-select>\n</mat-form-field>\n\n<button (click)=\"focusMonitor.focusVia(monitored, simulatedOrigin.value)\">\n  Focus button #1\n</button>\n<button (click)=\"focusMonitor.focusVia(unmonitored, simulatedOrigin.value)\">\n  Focus button #2\n</button>\n",
                styles: [".example-focus-monitor {\n  padding: 20px;\n}\n\n.example-focus-monitor .cdk-mouse-focused {\n  background: rgba(255, 0, 0, 0.5);\n}\n\n.example-focus-monitor .cdk-keyboard-focused {\n  background: rgba(0, 255, 0, 0.5);\n}\n\n.example-focus-monitor .cdk-touch-focused {\n  background: rgba(0, 0, 255, 0.5);\n}\n\n.example-focus-monitor .cdk-program-focused {\n  background: rgba(255, 0, 255, 0.5);\n}\n\n.example-focus-monitor button:focus {\n  box-shadow: 0 0 30px cyan;\n}\n\nmat-form-field,\nbutton {\n  margin-right: 12px;\n}\n"]
            }),
            tslib_1.__metadata("design:paramtypes", [a11y.FocusMonitor,
                core.ChangeDetectorRef,
                core.NgZone])
        ], FocusMonitorFocusViaExample);
        return FocusMonitorFocusViaExample;
    }());

    /** @title Monitoring focus with FocusMonitor */
    var FocusMonitorOverviewExample = /** @class */ (function () {
        function FocusMonitorOverviewExample(_focusMonitor, _cdr, _ngZone) {
            this._focusMonitor = _focusMonitor;
            this._cdr = _cdr;
            this._ngZone = _ngZone;
            this.elementOrigin = this.formatOrigin(null);
            this.subtreeOrigin = this.formatOrigin(null);
        }
        FocusMonitorOverviewExample.prototype.ngAfterViewInit = function () {
            var _this = this;
            this._focusMonitor.monitor(this.element)
                .subscribe(function (origin) { return _this._ngZone.run(function () {
                _this.elementOrigin = _this.formatOrigin(origin);
                _this._cdr.markForCheck();
            }); });
            this._focusMonitor.monitor(this.subtree, true)
                .subscribe(function (origin) { return _this._ngZone.run(function () {
                _this.subtreeOrigin = _this.formatOrigin(origin);
                _this._cdr.markForCheck();
            }); });
        };
        FocusMonitorOverviewExample.prototype.ngOnDestroy = function () {
            this._focusMonitor.stopMonitoring(this.element);
            this._focusMonitor.stopMonitoring(this.subtree);
        };
        FocusMonitorOverviewExample.prototype.formatOrigin = function (origin) {
            return origin ? origin + ' focused' : 'blurred';
        };
        tslib_1.__decorate([
            core.ViewChild('element', { static: false }),
            tslib_1.__metadata("design:type", core.ElementRef)
        ], FocusMonitorOverviewExample.prototype, "element", void 0);
        tslib_1.__decorate([
            core.ViewChild('subtree', { static: false }),
            tslib_1.__metadata("design:type", core.ElementRef)
        ], FocusMonitorOverviewExample.prototype, "subtree", void 0);
        FocusMonitorOverviewExample = tslib_1.__decorate([
            core.Component({
                selector: 'focus-monitor-overview-example',
                template: "<div class=\"example-focus-monitor\">\n  <button #element>Focus Monitored Element ({{elementOrigin}})</button>\n</div>\n\n<div class=\"example-focus-monitor\">\n  <div #subtree>\n    <p>Focus Monitored Subtree ({{subtreeOrigin}})</p>\n    <button>Child Button 1</button>\n    <button>Child Button 2</button>\n  </div>\n</div>\n",
                styles: [".example-focus-monitor {\n  padding: 20px;\n}\n\n.example-focus-monitor .cdk-mouse-focused {\n  background: rgba(255, 0, 0, 0.5);\n}\n\n.example-focus-monitor .cdk-keyboard-focused {\n  background: rgba(0, 255, 0, 0.5);\n}\n\n.example-focus-monitor .cdk-touch-focused {\n  background: rgba(0, 0, 255, 0.5);\n}\n\n.example-focus-monitor .cdk-program-focused {\n  background: rgba(255, 0, 255, 0.5);\n}\n\nbutton {\n  margin-right: 12px;\n}\n"]
            }),
            tslib_1.__metadata("design:paramtypes", [a11y.FocusMonitor,
                core.ChangeDetectorRef,
                core.NgZone])
        ], FocusMonitorOverviewExample);
        return FocusMonitorOverviewExample;
    }());

    /** @title Form field appearance variants */
    var FormFieldAppearanceExample = /** @class */ (function () {
        function FormFieldAppearanceExample() {
        }
        FormFieldAppearanceExample = tslib_1.__decorate([
            core.Component({
                selector: 'form-field-appearance-example',
                template: "<p>\n  <mat-form-field appearance=\"legacy\">\n    <mat-label>Legacy form field</mat-label>\n    <input matInput placeholder=\"Placeholder\">\n    <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\n    <mat-hint>Hint</mat-hint>\n  </mat-form-field>\n</p>\n<p>\n  <mat-form-field appearance=\"standard\">\n    <mat-label>Standard form field</mat-label>\n    <input matInput placeholder=\"Placeholder\">\n    <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\n    <mat-hint>Hint</mat-hint>\n  </mat-form-field>\n</p>\n<p>\n  <mat-form-field appearance=\"fill\">\n    <mat-label>Fill form field</mat-label>\n    <input matInput placeholder=\"Placeholder\">\n    <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\n    <mat-hint>Hint</mat-hint>\n  </mat-form-field>\n</p>\n<p>\n  <mat-form-field appearance=\"outline\">\n    <mat-label>Outline form field</mat-label>\n    <input matInput placeholder=\"Placeholder\">\n    <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\n    <mat-hint>Hint</mat-hint>\n  </mat-form-field>\n</p>\n",
                styles: ["/** No CSS for this example */\n"]
            })
        ], FormFieldAppearanceExample);
        return FormFieldAppearanceExample;
    }());

    /** @title Form field with custom telephone number input control. */
    var FormFieldCustomControlExample = /** @class */ (function () {
        function FormFieldCustomControlExample() {
        }
        FormFieldCustomControlExample = tslib_1.__decorate([
            core.Component({
                selector: 'form-field-custom-control-example',
                template: "<mat-form-field>\n  <example-tel-input placeholder=\"Phone number\" required></example-tel-input>\n  <mat-icon matSuffix>phone</mat-icon>\n  <mat-hint>Include area code</mat-hint>\n</mat-form-field>\n",
                styles: ["/** No CSS for this example */\n"]
            })
        ], FormFieldCustomControlExample);
        return FormFieldCustomControlExample;
    }());
    /** Data structure for holding telephone number. */
    var MyTel = /** @class */ (function () {
        function MyTel(area, exchange, subscriber) {
            this.area = area;
            this.exchange = exchange;
            this.subscriber = subscriber;
        }
        return MyTel;
    }());
    /** Custom `MatFormFieldControl` for telephone number input. */
    var MyTelInput = /** @class */ (function () {
        function MyTelInput(formBuilder, _focusMonitor, _elementRef, ngControl) {
            var _this = this;
            this._focusMonitor = _focusMonitor;
            this._elementRef = _elementRef;
            this.ngControl = ngControl;
            this.stateChanges = new rxjs.Subject();
            this.focused = false;
            this.errorState = false;
            this.controlType = 'example-tel-input';
            this.id = "example-tel-input-" + MyTelInput_1.nextId++;
            this.describedBy = '';
            this.onChange = function (_) { };
            this.onTouched = function () { };
            this._required = false;
            this._disabled = false;
            this.parts = formBuilder.group({
                area: '',
                exchange: '',
                subscriber: '',
            });
            _focusMonitor.monitor(_elementRef, true).subscribe(function (origin) {
                if (_this.focused && !origin) {
                    _this.onTouched();
                }
                _this.focused = !!origin;
                _this.stateChanges.next();
            });
            if (this.ngControl != null) {
                this.ngControl.valueAccessor = this;
            }
        }
        MyTelInput_1 = MyTelInput;
        Object.defineProperty(MyTelInput.prototype, "empty", {
            get: function () {
                var _a = this.parts.value, area = _a.area, exchange = _a.exchange, subscriber = _a.subscriber;
                return !area && !exchange && !subscriber;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MyTelInput.prototype, "shouldLabelFloat", {
            get: function () { return this.focused || !this.empty; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MyTelInput.prototype, "placeholder", {
            get: function () { return this._placeholder; },
            set: function (value) {
                this._placeholder = value;
                this.stateChanges.next();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MyTelInput.prototype, "required", {
            get: function () { return this._required; },
            set: function (value) {
                this._required = coercion.coerceBooleanProperty(value);
                this.stateChanges.next();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MyTelInput.prototype, "disabled", {
            get: function () { return this._disabled; },
            set: function (value) {
                this._disabled = coercion.coerceBooleanProperty(value);
                this._disabled ? this.parts.disable() : this.parts.enable();
                this.stateChanges.next();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MyTelInput.prototype, "value", {
            get: function () {
                var _a = this.parts.value, area = _a.area, exchange = _a.exchange, subscriber = _a.subscriber;
                if (area.length === 3 && exchange.length === 3 && subscriber.length === 4) {
                    return new MyTel(area, exchange, subscriber);
                }
                return null;
            },
            set: function (tel) {
                var _a = tel || new MyTel('', '', ''), area = _a.area, exchange = _a.exchange, subscriber = _a.subscriber;
                this.parts.setValue({ area: area, exchange: exchange, subscriber: subscriber });
                this.stateChanges.next();
            },
            enumerable: true,
            configurable: true
        });
        MyTelInput.prototype.ngOnDestroy = function () {
            this.stateChanges.complete();
            this._focusMonitor.stopMonitoring(this._elementRef);
        };
        MyTelInput.prototype.setDescribedByIds = function (ids) {
            this.describedBy = ids.join(' ');
        };
        MyTelInput.prototype.onContainerClick = function (event) {
            if (event.target.tagName.toLowerCase() != 'input') {
                this._elementRef.nativeElement.querySelector('input').focus();
            }
        };
        MyTelInput.prototype.writeValue = function (tel) {
            this.value = tel;
        };
        MyTelInput.prototype.registerOnChange = function (fn) {
            this.onChange = fn;
        };
        MyTelInput.prototype.registerOnTouched = function (fn) {
            this.onTouched = fn;
        };
        MyTelInput.prototype.setDisabledState = function (isDisabled) {
            this.disabled = isDisabled;
        };
        MyTelInput.prototype._handleInput = function () {
            this.onChange(this.parts.value);
        };
        var MyTelInput_1;
        MyTelInput.nextId = 0;
        tslib_1.__decorate([
            core.Input(),
            tslib_1.__metadata("design:type", String),
            tslib_1.__metadata("design:paramtypes", [String])
        ], MyTelInput.prototype, "placeholder", null);
        tslib_1.__decorate([
            core.Input(),
            tslib_1.__metadata("design:type", Boolean),
            tslib_1.__metadata("design:paramtypes", [Boolean])
        ], MyTelInput.prototype, "required", null);
        tslib_1.__decorate([
            core.Input(),
            tslib_1.__metadata("design:type", Boolean),
            tslib_1.__metadata("design:paramtypes", [Boolean])
        ], MyTelInput.prototype, "disabled", null);
        tslib_1.__decorate([
            core.Input(),
            tslib_1.__metadata("design:type", Object),
            tslib_1.__metadata("design:paramtypes", [Object])
        ], MyTelInput.prototype, "value", null);
        MyTelInput = MyTelInput_1 = tslib_1.__decorate([
            core.Component({
                selector: 'example-tel-input',
                template: "<div [formGroup]=\"parts\" class=\"example-tel-input-container\">\n  <input class=\"example-tel-input-element\" formControlName=\"area\" size=\"3\" aria-label=\"Area code\" (input)=\"_handleInput()\">\n  <span class=\"example-tel-input-spacer\">&ndash;</span>\n  <input class=\"example-tel-input-element\" formControlName=\"exchange\" size=\"3\" aria-label=\"Exchange code\" (input)=\"_handleInput()\">\n  <span class=\"example-tel-input-spacer\">&ndash;</span>\n  <input class=\"example-tel-input-element\" formControlName=\"subscriber\" size=\"4\" aria-label=\"Subscriber number\" (input)=\"_handleInput()\">\n</div>\n",
                providers: [{ provide: formField.MatFormFieldControl, useExisting: MyTelInput_1 }],
                host: {
                    '[class.example-floating]': 'shouldLabelFloat',
                    '[id]': 'id',
                    '[attr.aria-describedby]': 'describedBy',
                },
                styles: [".example-tel-input-container {\n  display: flex;\n}\n\n.example-tel-input-element {\n  border: none;\n  background: none;\n  padding: 0;\n  outline: none;\n  font: inherit;\n  text-align: center;\n}\n\n.example-tel-input-spacer {\n  opacity: 0;\n  transition: opacity 200ms;\n}\n\n:host.example-floating .example-tel-input-spacer {\n  opacity: 1;\n}\n"]
            }),
            tslib_1.__param(3, core.Optional()), tslib_1.__param(3, core.Self()),
            tslib_1.__metadata("design:paramtypes", [forms.FormBuilder,
                a11y.FocusMonitor,
                core.ElementRef,
                forms.NgControl])
        ], MyTelInput);
        return MyTelInput;
    }());

    /** @title Form field with error messages */
    var FormFieldErrorExample = /** @class */ (function () {
        function FormFieldErrorExample() {
            this.email = new forms.FormControl('', [forms.Validators.required, forms.Validators.email]);
        }
        FormFieldErrorExample.prototype.getErrorMessage = function () {
            return this.email.hasError('required') ? 'You must enter a value' :
                this.email.hasError('email') ? 'Not a valid email' :
                    '';
        };
        FormFieldErrorExample = tslib_1.__decorate([
            core.Component({
                selector: 'form-field-error-example',
                template: "<div class=\"example-container\">\n  <mat-form-field>\n    <input matInput placeholder=\"Enter your email\" [formControl]=\"email\" required>\n    <mat-error *ngIf=\"email.invalid\">{{getErrorMessage()}}</mat-error>\n  </mat-form-field>\n</div>\n",
                styles: [".example-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.example-container > * {\n  width: 100%;\n}\n"]
            })
        ], FormFieldErrorExample);
        return FormFieldErrorExample;
    }());

    /** @title Form field with hints */
    var FormFieldHintExample = /** @class */ (function () {
        function FormFieldHintExample() {
        }
        FormFieldHintExample = tslib_1.__decorate([
            core.Component({
                selector: 'form-field-hint-example',
                template: "<div class=\"example-container\">\n  <mat-form-field hintLabel=\"Max 10 characters\">\n    <input matInput #input maxlength=\"10\" placeholder=\"Enter some input\">\n    <mat-hint align=\"end\">{{input.value?.length || 0}}/10</mat-hint>\n  </mat-form-field>\n\n  <mat-form-field>\n    <mat-select placeholder=\"Select me\">\n      <mat-option value=\"option\">Option</mat-option>\n    </mat-select>\n    <mat-hint align=\"end\">Here's the dropdown arrow ^</mat-hint>\n  </mat-form-field>\n</div>\n",
                styles: [".example-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.example-container > * {\n  width: 100%;\n}\n"]
            })
        ], FormFieldHintExample);
        return FormFieldHintExample;
    }());

    /** @title Form field with label */
    var FormFieldLabelExample = /** @class */ (function () {
        function FormFieldLabelExample(fb) {
            this.options = fb.group({
                hideRequired: false,
                floatLabel: 'auto',
            });
        }
        FormFieldLabelExample = tslib_1.__decorate([
            core.Component({
                selector: 'form-field-label-example',
                template: "<div class=\"example-container\">\n  <form class=\"example-container\" [formGroup]=\"options\">\n    <mat-checkbox formControlName=\"hideRequired\">Hide required marker</mat-checkbox>\n    <div>\n      <label>Float label: </label>\n      <mat-radio-group formControlName=\"floatLabel\">\n        <mat-radio-button value=\"auto\">Auto</mat-radio-button>\n        <mat-radio-button value=\"always\">Always</mat-radio-button>\n        <mat-radio-button value=\"never\">Never</mat-radio-button>\n      </mat-radio-group>\n    </div>\n  </form>\n\n  <mat-form-field\n      [hideRequiredMarker]=\"options.value.hideRequired\"\n      [floatLabel]=\"options.value.floatLabel\">\n    <input matInput placeholder=\"Simple placeholder\" required>\n  </mat-form-field>\n\n  <mat-form-field [floatLabel]=\"options.value.floatLabel\">\n    <mat-label>Both a label and a placeholder</mat-label>\n    <input matInput placeholder=\"Simple placeholder\">\n  </mat-form-field>\n\n  <mat-form-field\n      [hideRequiredMarker]=\"options.value.hideRequired\"\n      [floatLabel]=\"options.value.floatLabel\">\n    <mat-select required>\n      <mat-option>-- None --</mat-option>\n      <mat-option value=\"option\">Option</mat-option>\n    </mat-select>\n    <mat-label><mat-icon>favorite</mat-icon> <b> Fancy</b> <i> label</i></mat-label>\n  </mat-form-field>\n</div>\n",
                styles: [".example-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.example-container > * {\n  width: 100%;\n}\n\n.example-container form {\n  margin-bottom: 20px;\n}\n\n.example-container form > * {\n  margin: 5px 0;\n}\n\n.example-container .mat-radio-button {\n  margin: 0 12px;\n}\n"]
            }),
            tslib_1.__metadata("design:paramtypes", [forms.FormBuilder])
        ], FormFieldLabelExample);
        return FormFieldLabelExample;
    }());

    /** @title Simple form field */
    var FormFieldOverviewExample = /** @class */ (function () {
        function FormFieldOverviewExample() {
        }
        FormFieldOverviewExample = tslib_1.__decorate([
            core.Component({
                selector: 'form-field-overview-example',
                template: "<div class=\"example-container\">\n  <mat-form-field>\n    <input matInput placeholder=\"Input\">\n  </mat-form-field>\n\n  <mat-form-field>\n    <textarea matInput placeholder=\"Textarea\"></textarea>\n  </mat-form-field>\n\n  <mat-form-field>\n    <mat-select placeholder=\"Select\">\n      <mat-option value=\"option\">Option</mat-option>\n    </mat-select>\n  </mat-form-field>\n</div>\n",
                styles: [".example-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.example-container > * {\n  width: 100%;\n}\n"]
            })
        ], FormFieldOverviewExample);
        return FormFieldOverviewExample;
    }());

    /** @title Form field with prefix & suffix */
    var FormFieldPrefixSuffixExample = /** @class */ (function () {
        function FormFieldPrefixSuffixExample() {
            this.hide = true;
        }
        FormFieldPrefixSuffixExample = tslib_1.__decorate([
            core.Component({
                selector: 'form-field-prefix-suffix-example',
                template: "<div class=\"example-container\">\n  <mat-form-field>\n    <input matInput placeholder=\"Enter your password\" [type]=\"hide ? 'password' : 'text'\">\n    <button mat-icon-button matSuffix (click)=\"hide = !hide\" [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\">\n    <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n    </button>\n  </mat-form-field>\n\n  <mat-form-field>\n    <input matInput placeholder=\"Amount\" type=\"number\" class=\"example-right-align\">\n    <span matPrefix>$&nbsp;</span>\n    <span matSuffix>.00</span>\n  </mat-form-field>\n</div>\n",
                styles: [".example-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.example-container > * {\n  width: 100%;\n}\n\n.example-right-align {\n  text-align: right;\n}\n\ninput.example-right-align::-webkit-outer-spin-button,\ninput.example-right-align::-webkit-inner-spin-button {\n  display: none;\n}\n\ninput.example-right-align {\n  -moz-appearance: textfield;\n}\n"]
            })
        ], FormFieldPrefixSuffixExample);
        return FormFieldPrefixSuffixExample;
    }());

    /** @title Form field theming */
    var FormFieldThemingExample = /** @class */ (function () {
        function FormFieldThemingExample(fb) {
            this.options = fb.group({
                color: 'primary',
                fontSize: [16, forms.Validators.min(10)],
            });
        }
        FormFieldThemingExample.prototype.getFontSize = function () {
            return Math.max(10, this.options.value.fontSize);
        };
        FormFieldThemingExample = tslib_1.__decorate([
            core.Component({
                selector: 'form-field-theming-example',
                template: "<form class=\"example-container\" [formGroup]=\"options\" [style.fontSize.px]=\"getFontSize()\">\n  <mat-form-field [color]=\"options.value.color\">\n    <mat-select placeholder=\"Color\" formControlName=\"color\">\n      <mat-option value=\"primary\">Primary</mat-option>\n      <mat-option value=\"accent\">Accent</mat-option>\n      <mat-option value=\"warn\">Warn</mat-option>\n    </mat-select>\n  </mat-form-field>\n\n  <mat-form-field [color]=\"options.value.color\">\n    <input matInput type=\"number\" placeholder=\"Font size (px)\" formControlName=\"fontSize\" min=\"10\">\n    <mat-error *ngIf=\"options.get('fontSize')?.invalid\">Min size: 10px</mat-error>\n  </mat-form-field>\n</form>\n",
                styles: [".example-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.example-container > * {\n  width: 100%;\n}\n"]
            }),
            tslib_1.__metadata("design:paramtypes", [forms.FormBuilder])
        ], FormFieldThemingExample);
        return FormFieldThemingExample;
    }());

    /**
     * @title Dynamic grid-list
     */
    var GridListDynamicExample = /** @class */ (function () {
        function GridListDynamicExample() {
            this.tiles = [
                { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
                { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
                { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
                { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
            ];
        }
        GridListDynamicExample = tslib_1.__decorate([
            core.Component({
                selector: 'grid-list-dynamic-example',
                template: "<mat-grid-list cols=\"4\" rowHeight=\"100px\">\n  <mat-grid-tile\n      *ngFor=\"let tile of tiles\"\n      [colspan]=\"tile.cols\"\n      [rowspan]=\"tile.rows\"\n      [style.background]=\"tile.color\">\n    {{tile.text}}\n  </mat-grid-tile>\n</mat-grid-list>\n",
                styles: ["/** No CSS for this example */\n"]
            })
        ], GridListDynamicExample);
        return GridListDynamicExample;
    }());

    /**
     * @title Basic grid-list
     */
    var GridListOverviewExample = /** @class */ (function () {
        function GridListOverviewExample() {
        }
        GridListOverviewExample = tslib_1.__decorate([
            core.Component({
                selector: 'grid-list-overview-example',
                template: "<mat-grid-list cols=\"2\" rowHeight=\"2:1\">\n  <mat-grid-tile>1</mat-grid-tile>\n  <mat-grid-tile>2</mat-grid-tile>\n  <mat-grid-tile>3</mat-grid-tile>\n  <mat-grid-tile>4</mat-grid-tile>\n</mat-grid-list>\n",
                styles: ["mat-grid-tile {\n  background: lightblue;\n}\n"]
            })
        ], GridListOverviewExample);
        return GridListOverviewExample;
    }());

    /**
     * @title Basic icons
     */
    var IconOverviewExample = /** @class */ (function () {
        function IconOverviewExample() {
        }
        IconOverviewExample = tslib_1.__decorate([
            core.Component({
                selector: 'icon-overview-example',
                template: "<mat-icon aria-hidden=\"false\" aria-label=\"Example home icon\">home</mat-icon>\n",
                styles: ["/** No CSS for this example */\n"]
            })
        ], IconOverviewExample);
        return IconOverviewExample;
    }());

    /**
     * @title SVG icons
     */
    var IconSvgExample = /** @class */ (function () {
        function IconSvgExample(iconRegistry, sanitizer) {
            iconRegistry.addSvgIcon('thumbs-up', sanitizer.bypassSecurityTrustResourceUrl('assets/img/examples/thumbup-icon.svg'));
        }
        IconSvgExample = tslib_1.__decorate([
            core.Component({
                selector: 'icon-svg-example',
                template: "<mat-icon svgIcon=\"thumbs-up\" aria-hidden=\"false\" aria-label=\"Example thumbs up SVG icon\"></mat-icon>\n",
                styles: ["/** No CSS for this example */\n"]
            }),
            tslib_1.__metadata("design:paramtypes", [icon.MatIconRegistry, platformBrowser.DomSanitizer])
        ], IconSvgExample);
        return IconSvgExample;
    }());

    /**
     * @title Input with a clear button
     */
    var InputClearableExample = /** @class */ (function () {
        function InputClearableExample() {
            this.value = 'Clear me';
        }
        InputClearableExample = tslib_1.__decorate([
            core.Component({
                selector: 'input-clearable-example',
                template: "<mat-form-field class=\"example-form-field\">\n  <input matInput type=\"text\" placeholder=\"Clearable input\" [(ngModel)]=\"value\">\n  <button mat-button *ngIf=\"value\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"value=''\">\n    <mat-icon>close</mat-icon>\n  </button>\n</mat-form-field>\n",
                styles: [".example-form-field {\n  width: 200px;\n}\n"]
            })
        ], InputClearableExample);
        return InputClearableExample;
    }());

    /** Error when invalid control is dirty, touched, or submitted. */
    var MyErrorStateMatcher = /** @class */ (function () {
        function MyErrorStateMatcher() {
        }
        MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
            var isSubmitted = form && form.submitted;
            return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
        };
        return MyErrorStateMatcher;
    }());
    /** @title Input with a custom ErrorStateMatcher */
    var InputErrorStateMatcherExample = /** @class */ (function () {
        function InputErrorStateMatcherExample() {
            this.emailFormControl = new forms.FormControl('', [
                forms.Validators.required,
                forms.Validators.email,
            ]);
            this.matcher = new MyErrorStateMatcher();
        }
        InputErrorStateMatcherExample = tslib_1.__decorate([
            core.Component({
                selector: 'input-error-state-matcher-example',
                template: "<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Email\" [formControl]=\"emailFormControl\"\n           [errorStateMatcher]=\"matcher\">\n    <mat-hint>Errors appear instantly!</mat-hint>\n    <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\n      Please enter a valid email address\n    </mat-error>\n    <mat-error *ngIf=\"emailFormControl.hasError('required')\">\n      Email is <strong>required</strong>\n    </mat-error>\n  </mat-form-field>\n</form>\n",
                styles: [".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n"]
            })
        ], InputErrorStateMatcherExample);
        return InputErrorStateMatcherExample;
    }());

    /**
     * @title Input with error messages
     */
    var InputErrorsExample = /** @class */ (function () {
        function InputErrorsExample() {
            this.emailFormControl = new forms.FormControl('', [
                forms.Validators.required,
                forms.Validators.email,
            ]);
        }
        InputErrorsExample = tslib_1.__decorate([
            core.Component({
                selector: 'input-errors-example',
                template: "<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Email\" [formControl]=\"emailFormControl\">\n    <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\n      Please enter a valid email address\n    </mat-error>\n    <mat-error *ngIf=\"emailFormControl.hasError('required')\">\n      Email is <strong>required</strong>\n    </mat-error>\n  </mat-form-field>\n</form>\n",
                styles: [".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n"]
            })
        ], InputErrorsExample);
        return InputErrorsExample;
    }());

    /**
     * @title Inputs in a form
     */
    var InputFormExample = /** @class */ (function () {
        function InputFormExample() {
        }
        InputFormExample = tslib_1.__decorate([
            core.Component({
                selector: 'input-form-example',
                template: "<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Company (disabled)\" disabled value=\"Google\">\n  </mat-form-field>\n\n  <table class=\"example-full-width\" cellspacing=\"0\"><tr>\n    <td><mat-form-field class=\"example-full-width\">\n      <input matInput placeholder=\"First name\">\n    </mat-form-field></td>\n    <td><mat-form-field class=\"example-full-width\">\n      <input matInput placeholder=\"Long Last Name That Will Be Truncated\">\n    </mat-form-field></td>\n  </tr></table>\n\n  <p>\n    <mat-form-field class=\"example-full-width\">\n      <textarea matInput placeholder=\"Address\">1600 Amphitheatre Pkwy</textarea>\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\">\n      <textarea matInput placeholder=\"Address 2\"></textarea>\n    </mat-form-field>\n  </p>\n\n  <table class=\"example-full-width\" cellspacing=\"0\"><tr>\n    <td><mat-form-field class=\"example-full-width\">\n      <input matInput placeholder=\"City\">\n    </mat-form-field></td>\n    <td><mat-form-field class=\"example-full-width\">\n      <input matInput placeholder=\"State\">\n    </mat-form-field></td>\n    <td><mat-form-field class=\"example-full-width\">\n      <input matInput #postalCode maxlength=\"5\" placeholder=\"Postal Code\" value=\"94043\">\n      <mat-hint align=\"end\">{{postalCode.value.length}} / 5</mat-hint>\n    </mat-form-field></td>\n  </tr></table>\n</form>\n",
                styles: [".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n\ntd {\n  padding-right: 8px;\n}\n"]
            })
        ], InputFormExample);
        return InputFormExample;
    }());

    /**
     * @title Input with hints
     */
    var InputHintExample = /** @class */ (function () {
        function InputHintExample() {
        }
        InputHintExample = tslib_1.__decorate([
            core.Component({
                selector: 'input-hint-example',
                template: "<form class=\"example-form\">\n\n  <mat-form-field class=\"example-full-width\">\n    <input matInput #message maxlength=\"256\" placeholder=\"Message\">\n    <mat-hint align=\"start\"><strong>Don't disclose personal info</strong> </mat-hint>\n    <mat-hint align=\"end\">{{message.value.length}} / 256</mat-hint>\n  </mat-form-field>\n  \n</form>\n",
                styles: [".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n"]
            })
        ], InputHintExample);
        return InputHintExample;
    }());

    /**
     * @title Basic Inputs
     */
    var InputOverviewExample = /** @class */ (function () {
        function InputOverviewExample() {
        }
        InputOverviewExample = tslib_1.__decorate([
            core.Component({
                selector: 'input-overview-example',
                template: "<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Favorite food\" value=\"Sushi\">\n  </mat-form-field>\n\n  <mat-form-field class=\"example-full-width\">\n    <textarea matInput placeholder=\"Leave a comment\"></textarea>\n  </mat-form-field>\n</form>\n",
                styles: [".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n"]
            })
        ], InputOverviewExample);
        return InputOverviewExample;
    }());

    /**
     * @title Inputs with prefixes and suffixes
     */
    var InputPrefixSuffixExample = /** @class */ (function () {
        function InputPrefixSuffixExample() {
        }
        InputPrefixSuffixExample = tslib_1.__decorate([
            core.Component({
                selector: 'input-prefix-suffix-example',
                template: "<form class=\"example-form\">\n\n  <mat-form-field class=\"example-full-width\">\n    <span matPrefix>+1 &nbsp;</span>\n    <input type=\"tel\" matInput placeholder=\"Telephone\">\n    <mat-icon matSuffix>mode_edit</mat-icon>\n  </mat-form-field>\n  \n</form>\n",
                styles: [".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n"]
            })
        ], InputPrefixSuffixExample);
        return InputPrefixSuffixExample;
    }());

    /**
     * @title Basic list
     */
    var ListOverviewExample = /** @class */ (function () {
        function ListOverviewExample() {
        }
        ListOverviewExample = tslib_1.__decorate([
            core.Component({
                selector: 'list-overview-example',
                template: "<mat-list role=\"list\">\n  <mat-list-item role=\"listitem\">Item 1</mat-list-item>\n  <mat-list-item role=\"listitem\">Item 2</mat-list-item>\n  <mat-list-item role=\"listitem\">Item 3</mat-list-item>\n</mat-list>\n",
                styles: ["/** No CSS for this example */\n"]
            })
        ], ListOverviewExample);
        return ListOverviewExample;
    }());

    /**
     * @title List with sections
     */
    var ListSectionsExample = /** @class */ (function () {
        function ListSectionsExample() {
            this.folders = [
                {
                    name: 'Photos',
                    updated: new Date('1/1/16'),
                },
                {
                    name: 'Recipes',
                    updated: new Date('1/17/16'),
                },
                {
                    name: 'Work',
                    updated: new Date('1/28/16'),
                }
            ];
            this.notes = [
                {
                    name: 'Vacation Itinerary',
                    updated: new Date('2/20/16'),
                },
                {
                    name: 'Kitchen Remodel',
                    updated: new Date('1/18/16'),
                }
            ];
        }
        ListSectionsExample = tslib_1.__decorate([
            core.Component({
                selector: 'list-sections-example',
                template: "<mat-list>\n  <h3 mat-subheader>Folders</h3>\n  <mat-list-item *ngFor=\"let folder of folders\">\n    <mat-icon mat-list-icon>folder</mat-icon>\n    <h4 mat-line>{{folder.name}}</h4>\n    <p mat-line> {{folder.updated | date}} </p>\n  </mat-list-item>\n  <mat-divider></mat-divider>\n  <h3 mat-subheader>Notes</h3>\n  <mat-list-item *ngFor=\"let note of notes\">\n    <mat-icon mat-list-icon>note</mat-icon>\n    <h4 mat-line>{{note.name}}</h4>\n    <p mat-line> {{note.updated | date}} </p>\n  </mat-list-item>\n</mat-list>\n",
                styles: [".mat-list-icon {\n  color: rgba(0, 0, 0, 0.54);\n}\n"]
            })
        ], ListSectionsExample);
        return ListSectionsExample;
    }());

    /**
     * @title List with selection
     */
    var ListSelectionExample = /** @class */ (function () {
        function ListSelectionExample() {
            this.typesOfShoes = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
        }
        ListSelectionExample = tslib_1.__decorate([
            core.Component({
                selector: 'list-selection-example',
                template: "<mat-selection-list #shoes>\n  <mat-list-option *ngFor=\"let shoe of typesOfShoes\">\n    {{shoe}}\n  </mat-list-option>\n</mat-selection-list>\n\n<p>\n  Options selected: {{shoes.selectedOptions.selected.length}}\n</p>\n",
                styles: ["/** No styles for this example. */\n"]
            })
        ], ListSelectionExample);
        return ListSelectionExample;
    }());

    /**
     * @title Menu with icons
     */
    var MenuIconsExample = /** @class */ (function () {
        function MenuIconsExample() {
        }
        MenuIconsExample = tslib_1.__decorate([
            core.Component({
                selector: 'menu-icons-example',
                template: "<button mat-icon-button [matMenuTriggerFor]=\"menu\" aria-label=\"Example icon-button with a menu\">\n  <mat-icon>more_vert</mat-icon>\n</button>\n<mat-menu #menu=\"matMenu\">\n  <button mat-menu-item>\n    <mat-icon>dialpad</mat-icon>\n    <span>Redial</span>\n  </button>\n  <button mat-menu-item disabled>\n    <mat-icon>voicemail</mat-icon>\n    <span>Check voice mail</span>\n  </button>\n  <button mat-menu-item>\n    <mat-icon>notifications_off</mat-icon>\n    <span>Disable alerts</span>\n  </button>\n</mat-menu>\n",
                styles: ["/** No CSS for this example */\n"]
            })
        ], MenuIconsExample);
        return MenuIconsExample;
    }());

    /**
     * @title Basic menu
     */
    var MenuOverviewExample = /** @class */ (function () {
        function MenuOverviewExample() {
        }
        MenuOverviewExample = tslib_1.__decorate([
            core.Component({
                selector: 'menu-overview-example',
                template: "<button mat-button [matMenuTriggerFor]=\"menu\">Menu</button>\n<mat-menu #menu=\"matMenu\">\n  <button mat-menu-item>Item 1</button>\n  <button mat-menu-item>Item 2</button>\n</mat-menu>\n",
                styles: ["/** No CSS for this example */\n"]
            })
        ], MenuOverviewExample);
        return MenuOverviewExample;
    }());

    /**
     * @title Menu positioning
     */
    var MenuPositionExample = /** @class */ (function () {
        function MenuPositionExample() {
        }
        MenuPositionExample = tslib_1.__decorate([
            core.Component({
                selector: 'menu-position-example',
                template: "<button mat-button [matMenuTriggerFor]=\"aboveMenu\">Above</button>\n<mat-menu #aboveMenu=\"matMenu\" yPosition=\"above\">\n  <button mat-menu-item>Item 1</button>\n  <button mat-menu-item>Item 2</button>\n</mat-menu>\n\n<button mat-button [matMenuTriggerFor]=\"belowMenu\">Below</button>\n<mat-menu #belowMenu=\"matMenu\" yPosition=\"below\">\n  <button mat-menu-item>Item 1</button>\n  <button mat-menu-item>Item 2</button>\n</mat-menu>\n\n<button mat-button [matMenuTriggerFor]=\"beforeMenu\">Before</button>\n<mat-menu #beforeMenu=\"matMenu\" xPosition=\"before\">\n  <button mat-menu-item>Item 1</button>\n  <button mat-menu-item>Item 2</button>\n</mat-menu>\n\n\n<button mat-button [matMenuTriggerFor]=\"afterMenu\">After</button>\n<mat-menu #afterMenu=\"matMenu\" xPosition=\"after\">\n  <button mat-menu-item>Item 1</button>\n  <button mat-menu-item>Item 2</button>\n</mat-menu>\n",
                styles: ["/** No CSS for this example */\n"]
            })
        ], MenuPositionExample);
        return MenuPositionExample;
    }());

    /**
     * @title Nested menu
     */
    var NestedMenuExample = /** @class */ (function () {
        function NestedMenuExample() {
        }
        NestedMenuExample = tslib_1.__decorate([
            core.Component({
                selector: 'nested-menu-example',
                template: "<button mat-button [matMenuTriggerFor]=\"animals\">Animal index</button>\r\n\r\n<mat-menu #animals=\"matMenu\">\r\n  <button mat-menu-item [matMenuTriggerFor]=\"vertebrates\">Vertebrates</button>\r\n  <button mat-menu-item [matMenuTriggerFor]=\"invertebrates\">Invertebrates</button>\r\n</mat-menu>\r\n\r\n<mat-menu #vertebrates=\"matMenu\">\r\n  <button mat-menu-item [matMenuTriggerFor]=\"fish\">Fishes</button>\r\n  <button mat-menu-item [matMenuTriggerFor]=\"amphibians\">Amphibians</button>\r\n  <button mat-menu-item [matMenuTriggerFor]=\"reptiles\">Reptiles</button>\r\n  <button mat-menu-item>Birds</button>\r\n  <button mat-menu-item>Mammals</button>\r\n</mat-menu>\r\n\r\n<mat-menu #invertebrates=\"matMenu\">\r\n  <button mat-menu-item>Insects</button>\r\n  <button mat-menu-item>Molluscs</button>\r\n  <button mat-menu-item>Crustaceans</button>\r\n  <button mat-menu-item>Corals</button>\r\n  <button mat-menu-item>Arachnids</button>\r\n  <button mat-menu-item>Velvet worms</button>\r\n  <button mat-menu-item>Horseshoe crabs</button>\r\n</mat-menu>\r\n\r\n<mat-menu #fish=\"matMenu\">\r\n  <button mat-menu-item>Baikal oilfish</button>\r\n  <button mat-menu-item>Bala shark</button>\r\n  <button mat-menu-item>Ballan wrasse</button>\r\n  <button mat-menu-item>Bamboo shark</button>\r\n  <button mat-menu-item>Banded killifish</button>\r\n</mat-menu>\r\n\r\n<mat-menu #amphibians=\"matMenu\">\r\n  <button mat-menu-item>Sonoran desert toad</button>\r\n  <button mat-menu-item>Western toad</button>\r\n  <button mat-menu-item>Arroyo toad</button>\r\n  <button mat-menu-item>Yosemite toad</button>\r\n</mat-menu>\r\n\r\n<mat-menu #reptiles=\"matMenu\">\r\n  <button mat-menu-item>Banded Day Gecko</button>\r\n  <button mat-menu-item>Banded Gila Monster</button>\r\n  <button mat-menu-item>Black Tree Monitor</button>\r\n  <button mat-menu-item>Blue Spiny Lizard</button>\r\n  <button mat-menu-item disabled>Velociraptor</button>\r\n</mat-menu>\r\n",
                styles: ["/** No CSS for this example */\n"]
            })
        ], NestedMenuExample);
        return NestedMenuExample;
    }());

    /**
     * @title Configurable paginator
     */
    var PaginatorConfigurableExample = /** @class */ (function () {
        function PaginatorConfigurableExample() {
            // MatPaginator Inputs
            this.length = 100;
            this.pageSize = 10;
            this.pageSizeOptions = [5, 10, 25, 100];
        }
        PaginatorConfigurableExample.prototype.setPageSizeOptions = function (setPageSizeOptionsInput) {
            this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(function (str) { return +str; });
        };
        PaginatorConfigurableExample = tslib_1.__decorate([
            core.Component({
                selector: 'paginator-configurable-example',
                template: "<mat-form-field>\n  List length:\n  <input matInput [(ngModel)]=\"length\">\n</mat-form-field>\n\n<mat-form-field>\n  Page size:\n  <input matInput [(ngModel)]=\"pageSize\">\n</mat-form-field>\n<mat-form-field>\n  Page size options:\n  <input matInput\n         [ngModel]=\"pageSizeOptions\"\n         (ngModelChange)=\"setPageSizeOptions($event)\">\n</mat-form-field>\n\n<mat-paginator [length]=\"length\"\n              [pageSize]=\"pageSize\"\n              [pageSizeOptions]=\"pageSizeOptions\"\n              (page)=\"pageEvent = $event\">\n</mat-paginator>\n\n<div *ngIf=\"pageEvent\">\n  <h5>Page Change Event Properties</h5>\n  <div>List length: {{pageEvent.length}}</div>\n  <div>Page size: {{pageEvent.pageSize}}</div>\n  <div>Page index: {{pageEvent.pageIndex}}</div>\n</div>\n",
                styles: ["mat-form-field {\n  margin-right: 12px;\n}\n"]
            })
        ], PaginatorConfigurableExample);
        return PaginatorConfigurableExample;
    }());

    /**
     * @title Paginator
     */
    var PaginatorOverviewExample = /** @class */ (function () {
        function PaginatorOverviewExample() {
        }
        PaginatorOverviewExample = tslib_1.__decorate([
            core.Component({
                selector: 'paginator-overview-example',
                template: "<mat-paginator [length]=\"100\"\n              [pageSize]=\"10\"\n              [pageSizeOptions]=\"[5, 10, 25, 100]\">\n</mat-paginator>\n",
                styles: ["/** No CSS for this example */\n"]
            })
        ], PaginatorOverviewExample);
        return PaginatorOverviewExample;
    }());

    var PERSON_DATA$1 = [
        { id: 1, firstName: 'Terra', middleName: 'Maduin', lastName: 'Branford' },
        { id: 2, firstName: 'Locke', middleName: '', lastName: 'Cole' },
        { id: 3, firstName: 'Celes', middleName: 'Gestahl', lastName: 'Chere' },
        { id: 4, firstName: 'Edgar', middleName: 'Roni', lastName: 'Figaro' },
        { id: 5, firstName: 'Sabin', middleName: 'Rene', lastName: 'Figaro' },
        { id: 6, firstName: 'Clyde', middleName: '"Shadow"', lastName: 'Arrowny' },
        { id: 7, firstName: 'Setzer', middleName: '', lastName: 'Gabbiani' },
        { id: 8, firstName: 'Cid', middleName: 'Del Norte', lastName: 'Marquez' },
        { id: 9, firstName: 'Mog', middleName: '', lastName: 'McMoogle' },
    ];
    /**
     * @title Material Popover Edit spanning multiple columns on a Material data-table
     */
    var PopoverEditCellSpanMatTableExample = /** @class */ (function () {
        function PopoverEditCellSpanMatTableExample() {
            this.displayedColumns = ['id', 'firstName', 'middleName', 'lastName'];
            this.dataSource = new ExampleDataSource$4();
            this.preservedValues = new WeakMap();
        }
        PopoverEditCellSpanMatTableExample.prototype.onSubmit = function (person, f) {
            if (!f.valid) {
                return;
            }
            person.firstName = f.value['firstName'];
            person.middleName = f.value['middleName'];
            person.lastName = f.value['lastName'];
        };
        PopoverEditCellSpanMatTableExample = tslib_1.__decorate([
            core.Component({
                selector: 'popover-edit-cell-span-mat-table-example',
                template: "<table class=\"example-table\" mat-table editable [dataSource]=\"dataSource\">\n  <ng-template #nameEdit let-ctx>\n    <div>\n      <form #f=\"ngForm\"\n          matEditLens\n          (ngSubmit)=\"onSubmit(ctx.person, f)\"\n          [matEditLensPreservedFormValue]=\"preservedValues.get(ctx.person)\"\n          (matEditLensPreservedFormValueChange)=\"preservedValues.set(ctx.person, $event)\">\n        <div mat-edit-content class=\"example-input-container\">\n          <mat-form-field>\n            <input matInput [ngModel]=\"ctx.person.firstName\" name=\"firstName\" required\n                [attr.cdkFocusInitial]=\"ctx.focus === 'firstName' || null\">\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput [ngModel]=\"ctx.person.middleName\" name=\"middleName\"\n                [attr.cdkFocusInitial]=\"ctx.focus === 'middleName' || null\">\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput [ngModel]=\"ctx.person.lastName\" name=\"lastName\" required\n                [attr.cdkFocusInitial]=\"ctx.focus === 'lastName' || null\">\n          </mat-form-field>\n        </div>\n\n        <div mat-edit-actions>\n          <button mat-button type=\"submit\">Confirm</button>\n          <button mat-button cdkEditRevert>Revert</button>\n          <button mat-button cdkEditClose>Close</button>\n        </div>\n      </form>\n    </div>\n  </ng-template>\n\n  <!-- Position Column -->\n  <ng-container matColumnDef=\"id\">\n    <th mat-header-cell *matHeaderCellDef> No. </th>\n    <td mat-cell *matCellDef=\"let person\"> {{person.id}} </td>\n  </ng-container>\n\n  <!-- Name Column -->\n  <ng-container matColumnDef=\"firstName\">\n    <th mat-header-cell *matHeaderCellDef> First Name </th>\n    <td mat-cell *matCellDef=\"let person\"\n        [matPopoverEdit]=\"nameEdit\"\n        [matPopoverEditContext]=\"{person: person, focus: 'firstName'}\"\n        [matPopoverEditColspan]=\"{after: 2}\">\n      {{person.firstName}}\n\n      <span *matRowHoverContent>\n        <button mat-icon-button matEditOpen><mat-icon>edit</mat-icon></button>\n      </span>\n    </td>\n  </ng-container>\n\n  <!-- Weight Column -->\n  <ng-container matColumnDef=\"middleName\">\n    <th mat-header-cell *matHeaderCellDef> Middle Name </th>\n    <td mat-cell *matCellDef=\"let person\"\n        [matPopoverEdit]=\"nameEdit\"\n        [matPopoverEditContext]=\"{person: person, focus: 'middleName'}\"\n        [matPopoverEditColspan]=\"{before:1 , after: 1}\">\n      {{person.middleName}}\n\n      <span *matRowHoverContent>\n        <button mat-icon-button matEditOpen><mat-icon>edit</mat-icon></button>\n      </span>\n    </td>\n  </ng-container>\n\n  <!-- Symbol Column -->\n  <ng-container matColumnDef=\"lastName\">\n    <th mat-header-cell *matHeaderCellDef> Last Name </th>\n    <td mat-cell *matCellDef=\"let person\"\n        [matPopoverEdit]=\"nameEdit\"\n        [matPopoverEditContext]=\"{person: person, focus: 'lastName'}\"\n        [matPopoverEditColspan]=\"{before: 2}\">\n      {{person.lastName}}\n\n      <span *matRowHoverContent>\n        <button mat-icon-button matEditOpen><mat-icon>edit</mat-icon></button>\n      </span>\n    </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>\n",
                styles: [".example-table {\n  width: 100%;\n}\n\n.example-table th {\n  text-align: left;\n}\n\n.example-table td,\n.example-table th {\n  min-width: 300px;\n  width: 25%;\n}\n\n.example-input-container {\n  display: flex;\n  justify-content: stretch;\n}\n\n.example-input-container mat-form-field {\n  flex: 1;\n}\n"]
            })
        ], PopoverEditCellSpanMatTableExample);
        return PopoverEditCellSpanMatTableExample;
    }());
    /**
     * Data source to provide what data should be rendered in the table. Note that the data source
     * can retrieve its data in any way. In this case, the data source is provided a reference
     * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
     * the underlying data. Instead, it only needs to take the data and send the table exactly what
     * should be rendered.
     */
    var ExampleDataSource$4 = /** @class */ (function (_super) {
        tslib_1.__extends(ExampleDataSource, _super);
        function ExampleDataSource() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /** Stream of data that is provided to the table. */
            _this.data = new rxjs.BehaviorSubject(PERSON_DATA$1);
            return _this;
        }
        /** Connect function called by the table to retrieve one stream containing the data to render. */
        ExampleDataSource.prototype.connect = function () {
            return this.data;
        };
        ExampleDataSource.prototype.disconnect = function () { };
        return ExampleDataSource;
    }(collections.DataSource));

    var ELEMENT_DATA$6 = [
        { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
        { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
        { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
        { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
        { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
        { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
        { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
        { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
        { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
        { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
        { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
        { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
        { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
        { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
        { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
        { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
        { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
        { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
        { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
        { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
    ];
    /**
     * @title Material Popover Edit on a flex Material data-table
     */
    var PopoverEditMatTableFlexExample = /** @class */ (function () {
        function PopoverEditMatTableFlexExample() {
            this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
            this.dataSource = new ExampleDataSource$5();
            this.preservedNameValues = new WeakMap();
            this.preservedWeightValues = new WeakMap();
        }
        PopoverEditMatTableFlexExample.prototype.onSubmitName = function (element, f) {
            if (!f.valid) {
                return;
            }
            element.name = f.value.name;
        };
        PopoverEditMatTableFlexExample.prototype.onSubmitWeight = function (element, f) {
            if (!f.valid) {
                return;
            }
            element.weight = f.value.weight;
        };
        PopoverEditMatTableFlexExample = tslib_1.__decorate([
            core.Component({
                selector: 'popover-edit-mat-table-flex-example',
                template: "<mat-table class=\"example-table\" editable [dataSource]=\"dataSource\">\n  <!--\n    This edit lens is specified outside of the cell and must explicitly declare\n    its context. It could be reused in multiple cells.\n  -->\n  <ng-template #weightEdit let-element>\n    <div>\n      <form #f=\"ngForm\"\n          matEditLens\n          (ngSubmit)=\"onSubmitWeight(element, f)\"\n          [matEditLensPreservedFormValue]=\"preservedWeightValues.get(element)\"\n          (matEditLensPreservedFormValueChange)=\"preservedWeightValues.set(element, $event)\">\n        <div mat-edit-content>\n          <mat-form-field>\n            <input matInput type=\"number\" [ngModel]=\"element.weight\" name=\"weight\" required>\n          </mat-form-field>\n        </div>\n      </form>\n    </div>\n  </ng-template>\n\n  <!-- Position Column -->\n  <ng-container matColumnDef=\"position\">\n    <mat-header-cell *matHeaderCellDef> No. </mat-header-cell>\n    <mat-cell *matCellDef=\"let element\"> {{element.position}} </mat-cell>\n  </ng-container>\n\n  <!-- Name Column -->\n  <ng-container matColumnDef=\"name\">\n    <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\n    <mat-cell *matCellDef=\"let element\"\n        [matPopoverEdit]=\"nameEdit\">\n      {{element.name}}\n      \n      <!-- This edit is defined in the cell and can implicitly access element -->\n      <ng-template #nameEdit>\n        <div>\n          <form #f=\"ngForm\"\n              matEditLens\n              (ngSubmit)=\"onSubmitName(element, f)\"\n              [matEditLensPreservedFormValue]=\"preservedNameValues.get(element)\"\n              (matEditLensPreservedFormValueChange)=\"preservedNameValues.set(element, $event)\">\n            <h2 mat-edit-title>Name</h2>\n            <div mat-edit-content>\n              <mat-form-field>\n                <input matInput [ngModel]=\"element.name\" name=\"name\" required>\n              </mat-form-field>\n            </div>\n            <div mat-edit-actions>\n              <button mat-button type=\"submit\">Confirm</button>\n              <button mat-button matEditRevert>Revert</button>\n              <button mat-button matEditClose>Close</button>\n            </div>\n          </form>\n        </div>\n      </ng-template>\n\n      <span *matRowHoverContent>\n        <button mat-icon-button matEditOpen><mat-icon>edit</mat-icon></button>\n      </span>\n    </mat-cell>\n  </ng-container>\n\n  <!-- Weight Column -->\n  <ng-container matColumnDef=\"weight\">\n    <mat-header-cell *matHeaderCellDef> Weight </mat-header-cell>\n    <mat-cell *matCellDef=\"let element\"\n        [matPopoverEdit]=\"weightEdit\" [matPopoverEditContext]=\"element\">\n      {{element.weight}}\n      \n      <span *matRowHoverContent>\n        <button mat-icon-button matEditOpen><mat-icon>edit</mat-icon></button>\n      </span>\n      </mat-cell>\n  </ng-container>\n\n  <!-- Symbol Column -->\n  <ng-container matColumnDef=\"symbol\">\n    <mat-header-cell *matHeaderCellDef> Symbol </mat-header-cell>\n    <mat-cell *matCellDef=\"let element\"> {{element.symbol}} </mat-cell>\n  </ng-container>\n\n  <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n  <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n</mat-table>\n",
                styles: [".example-table {\n  width: 100%;\n}\n\n/*.example-table th {\n  text-align: left;\n}\n\n.example-table td,\n.example-table th {\n  width: 25%;\n}*/\n"]
            })
        ], PopoverEditMatTableFlexExample);
        return PopoverEditMatTableFlexExample;
    }());
    /**
     * Data source to provide what data should be rendered in the table. Note that the data source
     * can retrieve its data in any way. In this case, the data source is provided a reference
     * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
     * the underlying data. Instead, it only needs to take the data and send the table exactly what
     * should be rendered.
     */
    var ExampleDataSource$5 = /** @class */ (function (_super) {
        tslib_1.__extends(ExampleDataSource, _super);
        function ExampleDataSource() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /** Stream of data that is provided to the table. */
            _this.data = new rxjs.BehaviorSubject(ELEMENT_DATA$6);
            return _this;
        }
        /** Connect function called by the table to retrieve one stream containing the data to render. */
        ExampleDataSource.prototype.connect = function () {
            return this.data;
        };
        ExampleDataSource.prototype.disconnect = function () { };
        return ExampleDataSource;
    }(collections.DataSource));

    var ELEMENT_DATA$7 = [
        { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
        { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
        { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
        { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
        { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
        { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
        { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
        { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
        { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
        { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
        { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
        { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
        { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
        { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
        { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
        { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
        { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
        { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
        { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
        { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
    ];
    /**
     * @title Material Popover Edit on a Material data-table
     */
    var PopoverEditMatTableExample = /** @class */ (function () {
        function PopoverEditMatTableExample(_snackBar) {
            this._snackBar = _snackBar;
            this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
            this.dataSource = new ExampleDataSource$6();
            this.nameValues = new popoverEdit.FormValueContainer();
            this.weightValues = new popoverEdit.FormValueContainer();
        }
        PopoverEditMatTableExample.prototype.onSubmitName = function (element, f) {
            if (!f.valid) {
                return;
            }
            element.name = f.value.name;
        };
        PopoverEditMatTableExample.prototype.onSubmitWeight = function (element, f) {
            if (!f.valid) {
                return;
            }
            element.weight = f.value.weight;
        };
        PopoverEditMatTableExample.prototype.goodJob = function (element) {
            this._snackBar.open("Way to go, " + element.name + "!", undefined, { duration: 2000 });
        };
        PopoverEditMatTableExample.prototype.badJob = function (element) {
            this._snackBar.open("You have failed me for the last time, #" + element.position + ".", undefined, { duration: 2000 });
        };
        PopoverEditMatTableExample = tslib_1.__decorate([
            core.Component({
                selector: 'popover-edit-mat-table-example',
                template: "<table class=\"example-table\" mat-table editable [dataSource]=\"dataSource\">\n  <!--\n    This edit lens is specified outside of the cell and must explicitly declare\n    its context. It could be reused in multiple cells.\n  -->\n  <ng-template #weightEdit let-element>\n    <div>\n      <form #f=\"ngForm\"\n          matEditLens\n          (ngSubmit)=\"onSubmitWeight(element, f)\"\n          [(matEditLensPreservedFormValue)]=\"weightValues.for(element).value\">\n        <div mat-edit-content>\n          <mat-form-field>\n            <input matInput type=\"number\" [ngModel]=\"element.weight\" name=\"weight\" required>\n          </mat-form-field>\n        </div>\n      </form>\n    </div>\n  </ng-template>\n\n  <!-- Position Column -->\n  <ng-container matColumnDef=\"position\">\n    <th mat-header-cell *matHeaderCellDef> No. </th>\n    <td mat-cell *matCellDef=\"let element\">\n      {{element.position}}\n\n      <!-- Row hover content in a non-edit cell. -->\n      <span *matRowHoverContent>\n        <button mat-icon-button (click)=\"goodJob(element)\">\n          <mat-icon>thumb_up</mat-icon>\n        </button>\n        <button mat-icon-button (click)=\"badJob(element)\">\n          <mat-icon>thumb_down</mat-icon>\n        </button>\n      </span>\n    </td>\n  </ng-container>\n\n  <!-- Name Column -->\n  <ng-container matColumnDef=\"name\">\n    <th mat-header-cell *matHeaderCellDef> Name </th>\n    <td mat-cell *matCellDef=\"let element\"\n        [matPopoverEdit]=\"nameEdit\">\n      {{element.name}}\n      \n      <!-- This edit is defined in the cell and can implicitly access element -->\n      <ng-template #nameEdit>\n        <div>\n          <form #f=\"ngForm\"\n              matEditLens\n              (ngSubmit)=\"onSubmitName(element, f)\"\n              [(matEditLensPreservedFormValue)]=\"nameValues.for(element).value\">\n            <h2 mat-edit-title>Name</h2>\n            <div mat-edit-content>\n              <mat-form-field>\n                <input matInput [ngModel]=\"element.name\" name=\"name\" required>\n              </mat-form-field>\n            </div>\n            <div mat-edit-actions>\n              <button mat-button type=\"submit\">Confirm</button>\n              <button mat-button matEditRevert>Revert</button>\n              <button mat-button matEditClose>Close</button>\n            </div>\n          </form>\n        </div>\n      </ng-template>\n\n      <span *matRowHoverContent>\n        <button mat-icon-button matEditOpen><mat-icon>edit</mat-icon></button>\n      </span>\n    </td>\n  </ng-container>\n\n  <!-- Weight Column -->\n  <ng-container matColumnDef=\"weight\">\n    <th mat-header-cell *matHeaderCellDef> Weight </th>\n    <td mat-cell *matCellDef=\"let element\"\n        [matPopoverEdit]=\"weightEdit\" [matPopoverEditContext]=\"element\">\n      {{element.weight}}\n      \n      <span *matRowHoverContent>\n        <button mat-icon-button matEditOpen><mat-icon>edit</mat-icon></button>\n      </span>\n    </td>\n  </ng-container>\n\n  <!-- Symbol Column -->\n  <ng-container matColumnDef=\"symbol\">\n    <th mat-header-cell *matHeaderCellDef> Symbol </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>\n",
                styles: [".example-table {\n  width: 100%;\n}\n\n.example-table th {\n  text-align: left;\n}\n\n.example-table td,\n.example-table th {\n  width: 25%;\n}\n"]
            }),
            tslib_1.__metadata("design:paramtypes", [snackBar.MatSnackBar])
        ], PopoverEditMatTableExample);
        return PopoverEditMatTableExample;
    }());
    /**
     * Data source to provide what data should be rendered in the table. Note that the data source
     * can retrieve its data in any way. In this case, the data source is provided a reference
     * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
     * the underlying data. Instead, it only needs to take the data and send the table exactly what
     * should be rendered.
     */
    var ExampleDataSource$6 = /** @class */ (function (_super) {
        tslib_1.__extends(ExampleDataSource, _super);
        function ExampleDataSource() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /** Stream of data that is provided to the table. */
            _this.data = new rxjs.BehaviorSubject(ELEMENT_DATA$7);
            return _this;
        }
        /** Connect function called by the table to retrieve one stream containing the data to render. */
        ExampleDataSource.prototype.connect = function () {
            return this.data;
        };
        ExampleDataSource.prototype.disconnect = function () { };
        return ExampleDataSource;
    }(collections.DataSource));

    var ELEMENT_DATA$8 = [
        { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
        { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
        { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
        { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
        { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
        { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
        { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
        { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
        { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
        { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
        { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
        { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
        { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
        { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
        { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
        { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
        { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
        { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
        { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
        { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
    ];
    /**
     * @title Material Popover Edit with spreadsheet-like configuration on a Material data-table
     */
    var PopoverEditTabOutMatTableExample = /** @class */ (function () {
        function PopoverEditTabOutMatTableExample() {
            this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
            this.dataSource = new ExampleDataSource$7();
            this.preservedNameValues = new WeakMap();
            this.preservedWeightValues = new WeakMap();
        }
        PopoverEditTabOutMatTableExample.prototype.onSubmitName = function (element, f) {
            if (!f.valid) {
                return;
            }
            element.name = f.value.name;
        };
        PopoverEditTabOutMatTableExample.prototype.onSubmitWeight = function (element, f) {
            if (!f.valid) {
                return;
            }
            element.weight = f.value.weight;
        };
        PopoverEditTabOutMatTableExample = tslib_1.__decorate([
            core.Component({
                selector: 'popover-edit-tab-out-mat-table-example',
                template: "<table class=\"example-table\" mat-table editable [dataSource]=\"dataSource\">\n  <!--\n    This edit lens is specified outside of the cell and must explicitly declare\n    its context. It could be reused in multiple cells.\n  -->\n  <ng-template #weightEdit let-element>\n    <div>\n      <form #f=\"ngForm\"\n          matEditLens\n          matEditLensClickOutBehavior=\"submit\"\n          (ngSubmit)=\"onSubmitWeight(element, f)\"\n          [matEditLensPreservedFormValue]=\"preservedWeightValues.get(element)\"\n          (matEditLensPreservedFormValueChange)=\"preservedWeightValues.set(element, $event)\">\n        <div mat-edit-content>\n          <mat-form-field>\n            <input matInput type=\"number\" [ngModel]=\"element.weight\" name=\"weight\" required>\n          </mat-form-field>\n        </div>\n      </form>\n    </div>\n  </ng-template>\n\n  <!-- Position Column -->\n  <ng-container matColumnDef=\"position\">\n    <th mat-header-cell *matHeaderCellDef> No. </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n  </ng-container>\n\n  <!-- Name Column -->\n  <ng-container matColumnDef=\"name\">\n    <th mat-header-cell *matHeaderCellDef> Name </th>\n    <td mat-cell *matCellDef=\"let element\"\n        [matPopoverEdit]=\"nameEdit\" matPopoverEditTabOut\n        matEditOpen>\n      {{element.name}}\n      \n      <!-- This edit is defined in the cell and can implicitly access element -->\n      <ng-template #nameEdit>\n        <div>\n          <form #f=\"ngForm\"\n              matEditLens\n              matEditLensClickOutBehavior=\"submit\"\n              (ngSubmit)=\"onSubmitName(element, f)\"\n              [matEditLensPreservedFormValue]=\"preservedNameValues.get(element)\"\n              (matEditLensPreservedFormValueChange)=\"preservedNameValues.set(element, $event)\">\n            <div mat-edit-content>\n              <mat-form-field>\n                <input matInput [ngModel]=\"element.name\" name=\"name\" required>\n              </mat-form-field>\n            </div>\n          </form>\n        </div>\n      </ng-template>\n\n      <span *matRowHoverContent>\n        <mat-icon>edit</mat-icon>\n      </span>\n    </td>\n  </ng-container>\n\n  <!-- Weight Column -->\n  <ng-container matColumnDef=\"weight\">\n    <th mat-header-cell *matHeaderCellDef> Weight </th>\n    <td mat-cell *matCellDef=\"let element\"\n        [matPopoverEdit]=\"weightEdit\" matPopoverEditTabOut\n        [matPopoverEditContext]=\"element\"\n        matEditOpen>\n      {{element.weight}}\n      \n      <span *matRowHoverContent>\n        <mat-icon>edit</mat-icon>\n      </span>\n    </td>\n  </ng-container>\n\n  <!-- Symbol Column -->\n  <ng-container matColumnDef=\"symbol\">\n    <th mat-header-cell *matHeaderCellDef> Symbol </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>\n",
                styles: [".example-table {\n  width: 100%;\n}\n\n.example-table th {\n  text-align: left;\n}\n\n.example-table td,\n.example-table th {\n  width: 25%;\n}\n"]
            })
        ], PopoverEditTabOutMatTableExample);
        return PopoverEditTabOutMatTableExample;
    }());
    /**
     * Data source to provide what data should be rendered in the table. Note that the data source
     * can retrieve its data in any way. In this case, the data source is provided a reference
     * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
     * the underlying data. Instead, it only needs to take the data and send the table exactly what
     * should be rendered.
     */
    var ExampleDataSource$7 = /** @class */ (function (_super) {
        tslib_1.__extends(ExampleDataSource, _super);
        function ExampleDataSource() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /** Stream of data that is provided to the table. */
            _this.data = new rxjs.BehaviorSubject(ELEMENT_DATA$8);
            return _this;
        }
        /** Connect function called by the table to retrieve one stream containing the data to render. */
        ExampleDataSource.prototype.connect = function () {
            return this.data;
        };
        ExampleDataSource.prototype.disconnect = function () { };
        return ExampleDataSource;
    }(collections.DataSource));

    /**
     * @title Buffer progress-bar
     */
    var ProgressBarBufferExample = /** @class */ (function () {
        function ProgressBarBufferExample() {
        }
        ProgressBarBufferExample = tslib_1.__decorate([
            core.Component({
                selector: 'progress-bar-buffer-example',
                template: "<mat-progress-bar mode=\"buffer\"></mat-progress-bar>\n",
                styles: ["/** No CSS for this example */\n"]
            })
        ], ProgressBarBufferExample);
        return ProgressBarBufferExample;
    }());

    /**
     * @title Configurable progress-bar
     */
    var ProgressBarConfigurableExample = /** @class */ (function () {
        function ProgressBarConfigurableExample() {
            this.color = 'primary';
            this.mode = 'determinate';
            this.value = 50;
            this.bufferValue = 75;
        }
        ProgressBarConfigurableExample = tslib_1.__decorate([
            core.Component({
                selector: 'progress-bar-configurable-example',
                template: "<mat-card>\n  <mat-card-content>\n    <h2 class=\"example-h2\">Progress bar configuration</h2>\n\n    <section class=\"example-section\">\n      <label class=\"example-margin\">Color:</label>\n      <mat-radio-group [(ngModel)]=\"color\">\n        <mat-radio-button class=\"example-margin\" value=\"primary\">\n          Primary\n        </mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"accent\">\n          Accent\n        </mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"warn\">\n          Warn\n        </mat-radio-button>\n      </mat-radio-group>\n    </section>\n\n    <section class=\"example-section\">\n      <label class=\"example-margin\">Mode:</label>\n      <mat-radio-group [(ngModel)]=\"mode\">\n        <mat-radio-button class=\"example-margin\" value=\"determinate\">\n          Determinate\n        </mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"indeterminate\">\n          Indeterminate\n        </mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"buffer\">\n          Buffer\n        </mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"query\">\n          Query\n        </mat-radio-button>\n      </mat-radio-group>\n    </section>\n\n    <section class=\"example-section\" *ngIf=\"mode === 'determinate' || mode === 'buffer'\">\n      <label class=\"example-margin\">Progress:</label>\n      <mat-slider class=\"example-margin\" [(ngModel)]=\"value\"></mat-slider>\n    </section>\n    <section class=\"example-section\" *ngIf=\"mode === 'buffer'\">\n      <label class=\"example-margin\">Buffer:</label>\n      <mat-slider class=\"example-margin\" [(ngModel)]=\"bufferValue\"></mat-slider>\n    </section>\n  </mat-card-content>\n</mat-card>\n\n<mat-card>\n  <mat-card-content>\n    <h2 class=\"example-h2\">Result</h2>\n\n    <section class=\"example-section\">\n      <mat-progress-bar\n          class=\"example-margin\"\n          [color]=\"color\"\n          [mode]=\"mode\"\n          [value]=\"value\"\n          [bufferValue]=\"bufferValue\">\n      </mat-progress-bar>\n    </section>\n  </mat-card-content>\n</mat-card>\n",
                styles: [".example-h2 {\n  margin: 10px;\n}\n\n.example-section {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n\n.example-margin {\n  margin: 0 10px;\n}\n"]
            })
        ], ProgressBarConfigurableExample);
        return ProgressBarConfigurableExample;
    }());

    /**
     * @title Determinate progress-bar
     */
    var ProgressBarDeterminateExample = /** @class */ (function () {
        function ProgressBarDeterminateExample() {
        }
        ProgressBarDeterminateExample = tslib_1.__decorate([
            core.Component({
                selector: 'progress-bar-determinate-example',
                template: "<mat-progress-bar mode=\"determinate\" value=\"40\"></mat-progress-bar>\n",
                styles: ["/** No CSS for this example */\n"]
            })
        ], ProgressBarDeterminateExample);
        return ProgressBarDeterminateExample;
    }());

    /**
     * @title Indeterminate progress-bar
     */
    var ProgressBarIndeterminateExample = /** @class */ (function () {
        function ProgressBarIndeterminateExample() {
        }
        ProgressBarIndeterminateExample = tslib_1.__decorate([
            core.Component({
                selector: 'progress-bar-indeterminate-example',
                template: "<mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n",
                styles: ["/** No CSS for this example */\n"]
            })
        ], ProgressBarIndeterminateExample);
        return ProgressBarIndeterminateExample;
    }());

    /**
     * @title Query progress-bar
     */
    var ProgressBarQueryExample = /** @class */ (function () {
        function ProgressBarQueryExample() {
        }
        ProgressBarQueryExample = tslib_1.__decorate([
            core.Component({
                selector: 'progress-bar-query-example',
                template: "<mat-progress-bar mode=\"query\"></mat-progress-bar>\n",
                styles: ["/** No CSS for this example */\n"]
            })
        ], ProgressBarQueryExample);
        return ProgressBarQueryExample;
    }());

    /**
     * @title Configurable progress spinner
     */
    var ProgressSpinnerConfigurableExample = /** @class */ (function () {
        function ProgressSpinnerConfigurableExample() {
            this.color = 'primary';
            this.mode = 'determinate';
            this.value = 50;
        }
        ProgressSpinnerConfigurableExample = tslib_1.__decorate([
            core.Component({
                selector: 'progress-spinner-configurable-example',
                template: "<mat-card>\n  <mat-card-content>\n    <h2 class=\"example-h2\">Progress spinner configuration</h2>\n\n    <section class=\"example-section\">\n      <label class=\"example-margin\">Color:</label>\n      <mat-radio-group [(ngModel)]=\"color\">\n        <mat-radio-button class=\"example-margin\" value=\"primary\">\n          Primary\n        </mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"accent\">\n          Accent\n        </mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"warn\">\n          Warn\n        </mat-radio-button>\n      </mat-radio-group>\n    </section>\n\n    <section class=\"example-section\">\n      <label class=\"example-margin\">Mode:</label>\n      <mat-radio-group [(ngModel)]=\"mode\">\n        <mat-radio-button class=\"example-margin\" value=\"determinate\">\n          Determinate\n        </mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"indeterminate\">\n          Indeterminate\n        </mat-radio-button>\n      </mat-radio-group>\n    </section>\n\n    <section class=\"example-section\" *ngIf=\"mode === 'determinate'\">\n      <label class=\"example-margin\">Progress:</label>\n      <mat-slider class=\"example-margin\" [(ngModel)]=\"value\"></mat-slider>\n    </section>\n  </mat-card-content>\n</mat-card>\n<mat-card>\n  <mat-card-content>\n    <h2 class=\"example-h2\">Result</h2>\n\n    <mat-progress-spinner\n        class=\"example-margin\"\n        [color]=\"color\"\n        [mode]=\"mode\"\n        [value]=\"value\">\n    </mat-progress-spinner>\n  </mat-card-content>\n</mat-card>\n",
                styles: [".example-h2 {\n  margin: 10px;\n}\n\n.example-section {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n\n.example-margin {\n  margin: 0 10px;\n}\n"]
            })
        ], ProgressSpinnerConfigurableExample);
        return ProgressSpinnerConfigurableExample;
    }());

    /**
     * @title Basic progress-spinner
     */
    var ProgressSpinnerOverviewExample = /** @class */ (function () {
        function ProgressSpinnerOverviewExample() {
        }
        ProgressSpinnerOverviewExample = tslib_1.__decorate([
            core.Component({
                selector: 'progress-spinner-overview-example',
                template: "<mat-spinner></mat-spinner>\n",
                styles: ["/** No CSS for this example */\n"]
            })
        ], ProgressSpinnerOverviewExample);
        return ProgressSpinnerOverviewExample;
    }());

    /**
     * @title Radios with ngModel
     */
    var RadioNgModelExample = /** @class */ (function () {
        function RadioNgModelExample() {
            this.seasons = ['Winter', 'Spring', 'Summer', 'Autumn'];
        }
        RadioNgModelExample = tslib_1.__decorate([
            core.Component({
                selector: 'radio-ng-model-example',
                template: "<label id=\"example-radio-group-label\">Pick your favorite season</label>\n<mat-radio-group\n  aria-labelledby=\"example-radio-group-label\"\n  class=\"example-radio-group\"\n  [(ngModel)]=\"favoriteSeason\">\n  <mat-radio-button class=\"example-radio-button\" *ngFor=\"let season of seasons\" [value]=\"season\">\n    {{season}}\n  </mat-radio-button>\n</mat-radio-group>\n<div>Your favorite season is: {{favoriteSeason}}</div>\n",
                styles: [".example-radio-group {\n  display: flex;\n  flex-direction: column;\n  margin: 15px 0;\n}\n\n.example-radio-button {\n  margin: 5px;\n}\n"]
            })
        ], RadioNgModelExample);
        return RadioNgModelExample;
    }());

    /**
     * @title Basic radios
     */
    var RadioOverviewExample = /** @class */ (function () {
        function RadioOverviewExample() {
        }
        RadioOverviewExample = tslib_1.__decorate([
            core.Component({
                selector: 'radio-overview-example',
                template: "<mat-radio-group aria-label=\"Select an option\">\n  <mat-radio-button value=\"1\">Option 1</mat-radio-button>\n  <mat-radio-button value=\"2\">Option 2</mat-radio-button>\n</mat-radio-group>\n",
                styles: [".mat-radio-button ~ .mat-radio-button {\n  margin-left: 16px;\n}\n"]
            })
        ], RadioOverviewExample);
        return RadioOverviewExample;
    }());

    /**
     * @title MatRipple basic usage
     */
    var RippleOverviewExample = /** @class */ (function () {
        function RippleOverviewExample() {
            this.centered = false;
            this.disabled = false;
            this.unbounded = false;
        }
        RippleOverviewExample = tslib_1.__decorate([
            core.Component({
                selector: 'ripple-overview-example',
                template: "<mat-checkbox [(ngModel)]=\"centered\" class=\"example-ripple-checkbox\">Centered</mat-checkbox>\n<mat-checkbox [(ngModel)]=\"disabled\" class=\"example-ripple-checkbox\">Disabled</mat-checkbox>\n<mat-checkbox [(ngModel)]=\"unbounded\" class=\"example-ripple-checkbox\">Unbounded</mat-checkbox>\n\n<mat-form-field class=\"example-ripple-form-field\">\n  <input matInput [(ngModel)]=\"radius\" type=\"number\" placeholder=\"Radius\">\n</mat-form-field>\n<mat-form-field class=\"example-ripple-form-field\">\n  <input matInput [(ngModel)]=\"color\" type=\"text\" placeholder=\"Color\">\n</mat-form-field>\n\n\n<div class=\"example-ripple-container mat-elevation-z4\"\n     matRipple\n     [matRippleCentered]=\"centered\"\n     [matRippleDisabled]=\"disabled\"\n     [matRippleUnbounded]=\"unbounded\"\n     [matRippleRadius]=\"radius\"\n     [matRippleColor]=\"color\">\n  Click me\n</div>\n",
                styles: [".example-ripple-container {\n  cursor: pointer;\n  text-align: center;\n\n  width: 300px;\n  height: 300px;\n  line-height: 300px;\n\n  user-select: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n\n  -webkit-user-drag: none;\n  -webkit-tap-highlight-color: transparent;\n}\n\n/** Styles to make the demo look better. */\n.example-ripple-checkbox {\n  margin: 6px 12px 6px 0;\n}\n\n.example-ripple-form-field {\n  margin: 0 12px 0 0;\n}\n"]
            })
        ], RippleOverviewExample);
        return RippleOverviewExample;
    }());

    /** @title Select with custom trigger text */
    var SelectCustomTriggerExample = /** @class */ (function () {
        function SelectCustomTriggerExample() {
            this.toppings = new forms.FormControl();
            this.toppingList = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
        }
        SelectCustomTriggerExample = tslib_1.__decorate([
            core.Component({
                selector: 'select-custom-trigger-example',
                template: "<mat-form-field>\n  <mat-select placeholder=\"Toppings\" [formControl]=\"toppings\" multiple>\n    <mat-select-trigger>\n      {{toppings.value ? toppings.value[0] : ''}}\n      <span *ngIf=\"toppings.value?.length > 1\" class=\"example-additional-selection\">\n        (+{{toppings.value.length - 1}} {{toppings.value?.length === 2 ? 'other' : 'others'}})\n      </span>\n    </mat-select-trigger>\n    <mat-option *ngFor=\"let topping of toppingList\" [value]=\"topping\">{{topping}}</mat-option>\n  </mat-select>\n</mat-form-field>\n",
                styles: [".example-additional-selection {\n  opacity: 0.75;\n  font-size: 0.75em;\n}\n"]
            })
        ], SelectCustomTriggerExample);
        return SelectCustomTriggerExample;
    }());

    /** @title Disabled select */
    var SelectDisabledExample = /** @class */ (function () {
        function SelectDisabledExample() {
            this.disableSelect = new forms.FormControl(false);
        }
        SelectDisabledExample = tslib_1.__decorate([
            core.Component({
                selector: 'select-disabled-example',
                template: "<p>\n  <mat-checkbox [formControl]=\"disableSelect\">Disable select</mat-checkbox>\n</p>\n\n<h4>mat-select</h4>\n<mat-form-field>\n  <mat-label>Choose an option</mat-label>\n  <mat-select [disabled]=\"disableSelect.value\">\n    <mat-option value=\"option1\">Option 1</mat-option>\n    <mat-option value=\"option2\" disabled>Option 2 (disabled)</mat-option>\n    <mat-option value=\"option3\">Option 3</mat-option>\n  </mat-select>\n</mat-form-field>\n\n<h4>native html select</h4>\n<mat-form-field>\n  <mat-label>Choose an option</mat-label>\n  <select matNativeControl [disabled]=\"disableSelect.value\">\n    <option value=\"\" selected></option>\n    <option value=\"volvo\">Volvo</option>\n    <option value=\"saab\" disabled>Saab</option>\n    <option value=\"mercedes\">Mercedes</option>\n    <option value=\"audi\">Audi</option>\n  </select>\n</mat-form-field>\n\n",
                styles: ["/** No CSS for this example */\n"]
            })
        ], SelectDisabledExample);
        return SelectDisabledExample;
    }());

    /** Error when invalid control is dirty, touched, or submitted. */
    var MyErrorStateMatcher$1 = /** @class */ (function () {
        function MyErrorStateMatcher() {
        }
        MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
            var isSubmitted = form && form.submitted;
            return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
        };
        return MyErrorStateMatcher;
    }());
    /** @title Select with a custom ErrorStateMatcher */
    var SelectErrorStateMatcherExample = /** @class */ (function () {
        function SelectErrorStateMatcherExample() {
            this.selected = new forms.FormControl('valid', [
                forms.Validators.required,
                forms.Validators.pattern('valid'),
            ]);
            this.selectFormControl = new forms.FormControl('valid', [
                forms.Validators.required,
                forms.Validators.pattern('valid'),
            ]);
            this.nativeSelectFormControl = new forms.FormControl('valid', [
                forms.Validators.required,
                forms.Validators.pattern('valid'),
            ]);
            this.matcher = new MyErrorStateMatcher$1();
        }
        SelectErrorStateMatcherExample = tslib_1.__decorate([
            core.Component({
                selector: 'select-error-state-matcher-example',
                template: "<h4>mat-select</h4>\n<mat-form-field>\n  <mat-label>Choose one</mat-label>\n  <mat-select [formControl]=\"selected\" [errorStateMatcher]=\"matcher\">\n    <mat-option>Clear</mat-option>\n    <mat-option value=\"valid\">Valid option</mat-option>\n    <mat-option value=\"invalid\">Invalid option</mat-option>\n  </mat-select>\n  <mat-hint>Errors appear instantly!</mat-hint>\n  <mat-error *ngIf=\"selected.hasError('required')\">You must make a selection</mat-error>\n  <mat-error *ngIf=\"selected.hasError('pattern') && !selected.hasError('required')\">\n    Your selection is invalid\n  </mat-error>\n</mat-form-field>\n\n<h4>native html select</h4>\n<mat-form-field class=\"demo-full-width\">\n  <mat-label>Choose one</mat-label>\n  <select matNativeControl [formControl]=\"nativeSelectFormControl\" [errorStateMatcher]=\"matcher\">\n    <option value=\"\"></option>\n    <option value=\"valid\" selected>Valid option</option>\n    <option value=\"invalid\">Invalid option</option>\n  </select>\n  <mat-error *ngIf=\"nativeSelectFormControl.hasError('required')\">You must make a selection</mat-error>\n  <mat-error *ngIf=\"nativeSelectFormControl.hasError('pattern') && !nativeSelectFormControl.hasError('required')\">\n    Your selection is invalid\n  </mat-error>\n</mat-form-field>\n",
                styles: ["/** No CSS for this example */\n"]
            })
        ], SelectErrorStateMatcherExample);
        return SelectErrorStateMatcherExample;
    }());

    /**
     * @title Select in a form
     */
    var SelectFormExample = /** @class */ (function () {
        function SelectFormExample() {
            this.foods = [
                { value: 'steak-0', viewValue: 'Steak' },
                { value: 'pizza-1', viewValue: 'Pizza' },
                { value: 'tacos-2', viewValue: 'Tacos' }
            ];
            this.cars = [
                { value: 'volvo', viewValue: 'Volvo' },
                { value: 'saab', viewValue: 'Saab' },
                { value: 'mercedes', viewValue: 'Mercedes' }
            ];
        }
        SelectFormExample = tslib_1.__decorate([
            core.Component({
                selector: 'select-form-example',
                template: "<form>\n  <h4>mat-select</h4>\n  <mat-form-field>\n    <mat-label>Favorite food</mat-label>\n    <mat-select [(ngModel)]=\"selectedValue\" name=\"food\">\n      <mat-option *ngFor=\"let food of foods\" [value]=\"food.value\">\n        {{food.viewValue}}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n  <p> Selected food: {{selectedValue}} </p>\n  <h4>native html select</h4>\n  <mat-form-field>\n    <mat-label>Favorite car</mat-label>\n    <select matNativeControl [(ngModel)]=\"selectedCar\" name=\"car\">\n      <option value=\"\" selected></option>\n      <option *ngFor=\"let car of cars\" [value]=\"car.value\">\n        {{car.viewValue}}\n      </option>\n    </select>\n  </mat-form-field>\n  <p> Selected car: {{selectedCar}} </p>\n</form>\n",
                styles: ["/** No CSS for this example */\n"]
            })
        ], SelectFormExample);
        return SelectFormExample;
    }());

    /** @title Select with form field features */
    var SelectHintErrorExample = /** @class */ (function () {
        function SelectHintErrorExample() {
            this.animalControl = new forms.FormControl('', [forms.Validators.required]);
            this.selectFormControl = new forms.FormControl('', forms.Validators.required);
            this.animals = [
                { name: 'Dog', sound: 'Woof!' },
                { name: 'Cat', sound: 'Meow!' },
                { name: 'Cow', sound: 'Moo!' },
                { name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!' },
            ];
        }
        SelectHintErrorExample = tslib_1.__decorate([
            core.Component({
                selector: 'select-hint-error-example',
                template: "<h4>mat select</h4>\n<mat-form-field>\n  <mat-label>Favorite animal</mat-label>\n  <mat-select [formControl]=\"animalControl\" required>\n    <mat-option>--</mat-option>\n    <mat-option *ngFor=\"let animal of animals\" [value]=\"animal\">\n      {{animal.name}}\n    </mat-option>\n  </mat-select>\n  <mat-error *ngIf=\"animalControl.hasError('required')\">Please choose an animal</mat-error>\n  <mat-hint>{{animalControl.value?.sound}}</mat-hint>\n</mat-form-field>\n\n<h4>native html select</h4>\n<mat-form-field>\n  <mat-label>Select your car (required)</mat-label>\n  <select matNativeControl required [formControl]=\"selectFormControl\">\n    <option label=\"--select something --\"></option>\n    <option value=\"saab\">Saab</option>\n    <option value=\"mercedes\">Mercedes</option>\n    <option value=\"audi\">Audi</option>\n  </select>\n  <mat-error *ngIf=\"selectFormControl.hasError('required')\">\n    This field is required\n  </mat-error>\n  <mat-hint>You can pick up your favorite car here</mat-hint>\n</mat-form-field>\n\n",
                styles: ["/** No CSS for this example */\n"]
            })
        ], SelectHintErrorExample);
        return SelectHintErrorExample;
    }());

    /** @title Select with multiple selection */
    var SelectMultipleExample = /** @class */ (function () {
        function SelectMultipleExample() {
            this.toppings = new forms.FormControl();
            this.toppingList = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
        }
        SelectMultipleExample = tslib_1.__decorate([
            core.Component({
                selector: 'select-multiple-example',
                template: "<mat-form-field>\n  <mat-label>Toppings</mat-label>\n  <mat-select [formControl]=\"toppings\" multiple>\n    <mat-option *ngFor=\"let topping of toppingList\" [value]=\"topping\">{{topping}}</mat-option>\n  </mat-select>\n</mat-form-field>\n",
                styles: ["/** No CSS for this example */\n"]
            })
        ], SelectMultipleExample);
        return SelectMultipleExample;
    }());

    /** @title Select with no option ripple */
    var SelectNoRippleExample = /** @class */ (function () {
        function SelectNoRippleExample() {
        }
        SelectNoRippleExample = tslib_1.__decorate([
            core.Component({
                selector: 'select-no-ripple-example',
                template: "<mat-form-field>\n  <mat-label>Select an option</mat-label>\n  <mat-select disableRipple>\n    <mat-option value=\"1\">Option 1</mat-option>\n    <mat-option value=\"2\">Option 2</mat-option>\n    <mat-option value=\"3\">Option 3</mat-option>\n  </mat-select>\n</mat-form-field>\n",
                styles: ["/** No CSS for this example */\n"]
            })
        ], SelectNoRippleExample);
        return SelectNoRippleExample;
    }());

    /** @title Select with option groups */
    var SelectOptgroupExample = /** @class */ (function () {
        function SelectOptgroupExample() {
            this.pokemonControl = new forms.FormControl();
            this.pokemonGroups = [
                {
                    name: 'Grass',
                    pokemon: [
                        { value: 'bulbasaur-0', viewValue: 'Bulbasaur' },
                        { value: 'oddish-1', viewValue: 'Oddish' },
                        { value: 'bellsprout-2', viewValue: 'Bellsprout' }
                    ]
                },
                {
                    name: 'Water',
                    pokemon: [
                        { value: 'squirtle-3', viewValue: 'Squirtle' },
                        { value: 'psyduck-4', viewValue: 'Psyduck' },
                        { value: 'horsea-5', viewValue: 'Horsea' }
                    ]
                },
                {
                    name: 'Fire',
                    disabled: true,
                    pokemon: [
                        { value: 'charmander-6', viewValue: 'Charmander' },
                        { value: 'vulpix-7', viewValue: 'Vulpix' },
                        { value: 'flareon-8', viewValue: 'Flareon' }
                    ]
                },
                {
                    name: 'Psychic',
                    pokemon: [
                        { value: 'mew-9', viewValue: 'Mew' },
                        { value: 'mewtwo-10', viewValue: 'Mewtwo' },
                    ]
                }
            ];
        }
        SelectOptgroupExample = tslib_1.__decorate([
            core.Component({
                selector: 'select-optgroup-example',
                template: "<h4>mat-select</h4>\n<mat-form-field>\n  <mat-label>Pokemon</mat-label>\n  <mat-select [formControl]=\"pokemonControl\">\n    <mat-option>-- None --</mat-option>\n    <mat-optgroup *ngFor=\"let group of pokemonGroups\" [label]=\"group.name\"\n                  [disabled]=\"group.disabled\">\n      <mat-option *ngFor=\"let pokemon of group.pokemon\" [value]=\"pokemon.value\">\n        {{pokemon.viewValue}}\n      </mat-option>\n    </mat-optgroup>\n  </mat-select>\n</mat-form-field>\n\n<h4>native html select</h4>\n<mat-form-field>\n  <mat-label>Cars</mat-label>\n  <select matNativeControl>\n    <optgroup label=\"Swedish Cars\">\n      <option value=\"volvo\">volvo</option>\n      <option value=\"saab\">Saab</option>\n    </optgroup>\n    <optgroup label=\"German Cars\">\n      <option value=\"mercedes\">Mercedes</option>\n      <option value=\"audi\">Audi</option>\n    </optgroup>\n  </select>\n</mat-form-field>\n",
                styles: ["/** No CSS for this example */\n"]
            })
        ], SelectOptgroupExample);
        return SelectOptgroupExample;
    }());

    /**
     * @title Basic select
     */
    var SelectOverviewExample = /** @class */ (function () {
        function SelectOverviewExample() {
            this.foods = [
                { value: 'steak-0', viewValue: 'Steak' },
                { value: 'pizza-1', viewValue: 'Pizza' },
                { value: 'tacos-2', viewValue: 'Tacos' }
            ];
        }
        SelectOverviewExample = tslib_1.__decorate([
            core.Component({
                selector: 'select-overview-example',
                template: "<h4>Basic mat-select</h4>\n<mat-form-field>\n  <mat-label>Favorite food</mat-label>\n  <mat-select>\n    <mat-option *ngFor=\"let food of foods\" [value]=\"food.value\">\n      {{food.viewValue}}\n    </mat-option>\n  </mat-select>\n</mat-form-field>\n\n<h4>Basic native select</h4>\n<mat-form-field>\n  <mat-label>Cars</mat-label>\n  <select matNativeControl required>\n    <option value=\"volvo\">Volvo</option>\n    <option value=\"saab\">Saab</option>\n    <option value=\"mercedes\">Mercedes</option>\n    <option value=\"audi\">Audi</option>\n  </select>\n</mat-form-field>\n",
                styles: ["/** No CSS for this example */\n"]
            })
        ], SelectOverviewExample);
        return SelectOverviewExample;
    }());

    /**
     * @title Select with custom panel styling
     */
    var SelectPanelClassExample = /** @class */ (function () {
        function SelectPanelClassExample() {
            this.panelColor = new forms.FormControl('red');
        }
        SelectPanelClassExample = tslib_1.__decorate([
            core.Component({
                selector: 'select-panel-class-example',
                template: "<mat-form-field>\n  <mat-label>Panel color</mat-label>\n  <mat-select [formControl]=\"panelColor\"\n              panelClass=\"example-panel-{{panelColor.value}}\">\n    <mat-option value=\"red\">Red</mat-option>\n    <mat-option value=\"green\">Green</mat-option>\n    <mat-option value=\"blue\">Blue</mat-option>\n  </mat-select>\n</mat-form-field>\n",
                // Encapsulation has to be disabled in order for the
                // component style to apply to the select panel.
                encapsulation: core.ViewEncapsulation.None,
                styles: [".example-panel-red.mat-select-panel {\n  background: rgba(255, 0, 0, 0.5);\n}\n\n.example-panel-green.mat-select-panel {\n  background: rgba(0, 255, 0, 0.5);\n}\n\n.example-panel-blue.mat-select-panel {\n  background: rgba(0, 0, 255, 0.5);\n}\n"]
            })
        ], SelectPanelClassExample);
        return SelectPanelClassExample;
    }());

    /** @title Select with reset option */
    var SelectResetExample = /** @class */ (function () {
        function SelectResetExample() {
            this.states = [
                'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
                'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
                'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
                'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
                'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
                'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
                'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
            ];
        }
        SelectResetExample = tslib_1.__decorate([
            core.Component({
                selector: 'select-reset-example',
                template: "<h4>mat-select</h4>\n<mat-form-field>\n  <mat-label>State</mat-label>\n  <mat-select>\n    <mat-option>None</mat-option>\n    <mat-option *ngFor=\"let state of states\" [value]=\"state\">{{state}}</mat-option>\n  </mat-select>\n</mat-form-field>\n\n<h4>native html select</h4>\n<mat-form-field>\n  <mat-label>Select your car</mat-label>\n  <select matNativeControl id=\"mySelectId\">\n    <option value=\"\" disabled selected></option>\n    <option value=\"volvo\">Volvo</option>\n    <option value=\"saab\">Saab</option>\n    <option value=\"mercedes\">Mercedes</option>\n    <option value=\"audi\">Audi</option>\n  </select>\n</mat-form-field>\n",
                styles: ["/** No CSS for this example */\n"]
            })
        ], SelectResetExample);
        return SelectResetExample;
    }());

    /** @title Select with 2-way value binding */
    var SelectValueBindingExample = /** @class */ (function () {
        function SelectValueBindingExample() {
            this.selected = 'option2';
        }
        SelectValueBindingExample = tslib_1.__decorate([
            core.Component({
                selector: 'select-value-binding-example',
                template: "<mat-form-field>\n  <mat-label>Select an option</mat-label>\n  <mat-select [(value)]=\"selected\">\n    <mat-option>None</mat-option>\n    <mat-option value=\"option1\">Option 1</mat-option>\n    <mat-option value=\"option2\">Option 2</mat-option>\n    <mat-option value=\"option3\">Option 3</mat-option>\n  </mat-select>\n</mat-form-field>\n\n<p>You selected: {{selected}}</p>\n",
                styles: ["/** No CSS for this example */\n"]
            })
        ], SelectValueBindingExample);
        return SelectValueBindingExample;
    }());

    /**
     * @title Autosize sidenav
     */
    var SidenavAutosizeExample = /** @class */ (function () {
        function SidenavAutosizeExample() {
            this.showFiller = false;
        }
        SidenavAutosizeExample = tslib_1.__decorate([
            core.Component({
                selector: 'sidenav-autosize-example',
                template: "<mat-drawer-container class=\"example-container\" autosize>\n  <mat-drawer #drawer class=\"example-sidenav\" mode=\"side\">\n    <p>Auto-resizing sidenav</p>\n    <p *ngIf=\"showFiller\">Lorem, ipsum dolor sit amet consectetur.</p>\n    <button (click)=\"showFiller = !showFiller\" mat-raised-button>\n      Toggle extra text\n    </button>\n  </mat-drawer>\n\n  <div class=\"example-sidenav-content\">\n    <button type=\"button\" mat-button (click)=\"drawer.toggle()\">\n      Toggle sidenav\n    </button>\n  </div>\n\n</mat-drawer-container>\n",
                styles: [".example-container {\n  width: 500px;\n  height: 300px;\n  border: 1px solid rgba(0, 0, 0, 0.5);\n}\n\n.example-sidenav-content {\n  display: flex;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n}\n\n.example-sidenav {\n  padding: 20px;\n}\n"]
            })
        ], SidenavAutosizeExample);
        return SidenavAutosizeExample;
    }());

    /** @title Drawer with explicit backdrop setting */
    var SidenavBackdropExample = /** @class */ (function () {
        function SidenavBackdropExample() {
        }
        SidenavBackdropExample = tslib_1.__decorate([
            core.Component({
                selector: 'sidenav-backdrop-example',
                template: "<mat-drawer-container class=\"example-container\" [hasBackdrop]=\"hasBackdrop.value\">\n  <mat-drawer #drawer [mode]=\"mode.value\">I'm a drawer</mat-drawer>\n  <mat-drawer-content>\n    <mat-form-field>\n      <mat-label>Sidenav mode</mat-label>\n      <mat-select #mode value=\"side\">\n        <mat-option value=\"side\">Side</mat-option>\n        <mat-option value=\"over\">Over</mat-option>\n        <mat-option value=\"push\">Push</mat-option>\n      </mat-select>\n    </mat-form-field>\n    <mat-form-field>\n      <mat-label>Has backdrop</mat-label>\n      <mat-select #hasBackdrop>\n        <mat-option>Unset</mat-option>\n        <mat-option [value]=\"true\">True</mat-option>\n        <mat-option [value]=\"false\">False</mat-option>\n      </mat-select>\n    </mat-form-field>\n    <button mat-raised-button (click)=\"drawer.toggle()\">Toggle drawer</button>\n  </mat-drawer-content>\n</mat-drawer-container>\n",
                styles: [".example-container {\n  width: 400px;\n  height: 200px;\n  margin: 12px;\n  border: 1px solid #555;\n}\n\nmat-drawer-content {\n  padding: 12px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n"]
            })
        ], SidenavBackdropExample);
        return SidenavBackdropExample;
    }());

    /** @title Sidenav with custom escape and backdrop click behavior */
    var SidenavDisableCloseExample = /** @class */ (function () {
        function SidenavDisableCloseExample() {
            this.reason = '';
            this.shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(function (h) { return h.test(window.location.host); });
        }
        SidenavDisableCloseExample.prototype.close = function (reason) {
            this.reason = reason;
            this.sidenav.close();
        };
        tslib_1.__decorate([
            core.ViewChild('sidenav', { static: false }),
            tslib_1.__metadata("design:type", sidenav.MatSidenav)
        ], SidenavDisableCloseExample.prototype, "sidenav", void 0);
        SidenavDisableCloseExample = tslib_1.__decorate([
            core.Component({
                selector: 'sidenav-disable-close-example',
                template: "<mat-sidenav-container\n    class=\"example-container\" (backdropClick)=\"close('backdrop')\" *ngIf=\"shouldRun\">\n  <mat-sidenav #sidenav (keydown.escape)=\"close('escape')\" disableClose>\n    <p><button mat-button (click)=\"close('toggle button')\">Toggle</button></p>\n  </mat-sidenav>\n\n  <mat-sidenav-content>\n    <p><button mat-button (click)=\"sidenav.open()\">Open</button></p>\n    <p>Closed due to: {{reason}}</p>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n\n<div *ngIf=\"!shouldRun\">Please open on Stackblitz to see result</div>\n",
                styles: [".example-container {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n"]
            })
        ], SidenavDisableCloseExample);
        return SidenavDisableCloseExample;
    }());

    /** @title Basic drawer */
    var SidenavDrawerOverviewExample = /** @class */ (function () {
        function SidenavDrawerOverviewExample() {
        }
        SidenavDrawerOverviewExample = tslib_1.__decorate([
            core.Component({
                selector: 'sidenav-drawer-overview-example',
                template: "<mat-drawer-container class=\"example-container\">\n  <mat-drawer mode=\"side\" opened>Drawer content</mat-drawer>\n  <mat-drawer-content>Main content</mat-drawer-content>\n</mat-drawer-container>\n",
                styles: [".example-container {\n  width: 400px;\n  height: 200px;\n  margin: 10px;\n  border: 1px solid #555;\n}\n"]
            })
        ], SidenavDrawerOverviewExample);
        return SidenavDrawerOverviewExample;
    }());

    /** @title Fixed sidenav */
    var SidenavFixedExample = /** @class */ (function () {
        function SidenavFixedExample(fb) {
            this.shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(function (h) { return h.test(window.location.host); });
            this.options = fb.group({
                bottom: 0,
                fixed: false,
                top: 0
            });
        }
        SidenavFixedExample = tslib_1.__decorate([
            core.Component({
                selector: 'sidenav-fixed-example',
                template: "<ng-container *ngIf=\"shouldRun\">\n  <mat-toolbar class=\"example-header\">Header</mat-toolbar>\n\n  <mat-sidenav-container class=\"example-container\">\n    <mat-sidenav #sidenav mode=\"side\" opened class=\"example-sidenav\"\n                 [fixedInViewport]=\"options.value.fixed\" [fixedTopGap]=\"options.value.top\"\n                 [fixedBottomGap]=\"options.value.bottom\">\n      {{options.value.fixed ? 'Fixed' : 'Non-fixed'}} Sidenav\n    </mat-sidenav>\n\n    <mat-sidenav-content [formGroup]=\"options\">\n      <p><mat-checkbox formControlName=\"fixed\">Fixed</mat-checkbox></p>\n      <p><mat-form-field>\n        <input matInput type=\"number\" formControlName=\"top\" placeholder=\"Top gap\">\n      </mat-form-field></p>\n      <p><mat-form-field>\n        <input matInput type=\"number\" formControlName=\"bottom\" placeholder=\"Bottom gap\">\n      </mat-form-field></p>\n      <p><button mat-button (click)=\"sidenav.toggle()\">Toggle</button></p>\n    </mat-sidenav-content>\n  </mat-sidenav-container>\n\n  <mat-toolbar class=\"example-footer\">Footer</mat-toolbar>\n</ng-container>\n\n<div *ngIf=\"!shouldRun\">Please open on Stackblitz to see result</div>\n",
                styles: [".example-container {\n  position: absolute;\n  top: 60px;\n  bottom: 60px;\n  left: 0;\n  right: 0;\n}\n\n.example-sidenav {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 200px;\n  background: rgba(255, 0, 0, 0.5);\n}\n\n.example-header {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n}\n\n.example-footer {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n"]
            }),
            tslib_1.__metadata("design:paramtypes", [forms.FormBuilder])
        ], SidenavFixedExample);
        return SidenavFixedExample;
    }());

    /** @title Sidenav with configurable mode */
    var SidenavModeExample = /** @class */ (function () {
        function SidenavModeExample() {
            this.mode = new forms.FormControl('over');
            this.shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(function (h) { return h.test(window.location.host); });
        }
        SidenavModeExample = tslib_1.__decorate([
            core.Component({
                selector: 'sidenav-mode-example',
                template: "<mat-sidenav-container class=\"example-container\" *ngIf=\"shouldRun\">\n  <mat-sidenav #sidenav [mode]=\"mode.value\">\n    <p><button mat-button (click)=\"sidenav.toggle()\">Toggle</button></p>\n    <p>\n      <mat-radio-group class=\"example-radio-group\" [formControl]=\"mode\">\n        <label>Mode:</label>\n        <mat-radio-button value=\"over\">Over</mat-radio-button>\n        <mat-radio-button value=\"side\">Side</mat-radio-button>\n        <mat-radio-button value=\"push\">Push</mat-radio-button>\n      </mat-radio-group>\n    </p>\n  </mat-sidenav>\n\n  <mat-sidenav-content>\n    <p><button mat-button (click)=\"sidenav.toggle()\">Toggle</button></p>\n    <p>\n      <mat-radio-group class=\"example-radio-group\" [formControl]=\"mode\">\n        <label>Mode:</label>\n        <mat-radio-button value=\"over\">Over</mat-radio-button>\n        <mat-radio-button value=\"side\">Side</mat-radio-button>\n        <mat-radio-button value=\"push\">Push</mat-radio-button>\n      </mat-radio-group>\n    </p>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n\n<div *ngIf=\"!shouldRun\">Please open on Stackblitz to see result</div>\n",
                styles: [".example-container {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.example-radio-group {\n  display: block;\n  border: 1px solid #555;\n  margin: 20px;\n  padding: 10px;\n}\n"]
            })
        ], SidenavModeExample);
        return SidenavModeExample;
    }());

    /** @title Sidenav open & close behavior */
    var SidenavOpenCloseExample = /** @class */ (function () {
        function SidenavOpenCloseExample() {
            this.events = [];
            this.shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(function (h) { return h.test(window.location.host); });
        }
        SidenavOpenCloseExample = tslib_1.__decorate([
            core.Component({
                selector: 'sidenav-open-close-example',
                template: "<mat-sidenav-container class=\"example-container\" *ngIf=\"shouldRun\">\n  <mat-sidenav #sidenav mode=\"side\" [(opened)]=\"opened\" (opened)=\"events.push('open!')\"\n               (closed)=\"events.push('close!')\">\n    Sidenav content\n  </mat-sidenav>\n\n  <mat-sidenav-content>\n    <p><mat-checkbox [(ngModel)]=\"opened\">sidenav.opened</mat-checkbox></p>\n    <p><button mat-button (click)=\"sidenav.toggle()\">sidenav.toggle()</button></p>\n    <p>Events:</p>\n    <div class=\"example-events\">\n      <div *ngFor=\"let e of events\">{{e}}</div>\n    </div>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n\n<div *ngIf=\"!shouldRun\">Please open on Stackblitz to see result</div>\n",
                styles: [".example-container {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.example-events {\n  width: 300px;\n  height: 200px;\n  overflow: auto;\n  border: 1px solid #555;\n}\n"]
            })
        ], SidenavOpenCloseExample);
        return SidenavOpenCloseExample;
    }());

    /** @title Basic sidenav */
    var SidenavOverviewExample = /** @class */ (function () {
        function SidenavOverviewExample() {
            this.shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(function (h) { return h.test(window.location.host); });
        }
        SidenavOverviewExample = tslib_1.__decorate([
            core.Component({
                selector: 'sidenav-overview-example',
                template: "<mat-sidenav-container class=\"example-container\" *ngIf=\"shouldRun\">\n  <mat-sidenav mode=\"side\" opened>Sidenav content</mat-sidenav>\n  <mat-sidenav-content>Main content</mat-sidenav-content>\n</mat-sidenav-container>\n\n<div *ngIf=\"!shouldRun\">Please open on Stackblitz to see result</div>\n",
                styles: [".example-container {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: #eee;\n}\n"]
            })
        ], SidenavOverviewExample);
        return SidenavOverviewExample;
    }());

    /** @title Implicit main content with two sidenavs */
    var SidenavPositionExample = /** @class */ (function () {
        function SidenavPositionExample() {
            this.shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(function (h) { return h.test(window.location.host); });
        }
        SidenavPositionExample = tslib_1.__decorate([
            core.Component({
                selector: 'sidenav-position-example',
                template: "<mat-sidenav-container class=\"example-container\" *ngIf=\"shouldRun\">\n  <mat-sidenav opened mode=\"side\">Start content</mat-sidenav>\n  <mat-sidenav opened mode=\"side\" position=\"end\">End content</mat-sidenav>\n  Implicit main content\n</mat-sidenav-container>\n\n<div *ngIf=\"!shouldRun\">Please open on Stackblitz to see result</div>\n",
                styles: [".example-container {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n"]
            })
        ], SidenavPositionExample);
        return SidenavPositionExample;
    }());

    /** @title Responsive sidenav */
    var SidenavResponsiveExample = /** @class */ (function () {
        function SidenavResponsiveExample(changeDetectorRef, media) {
            this.fillerNav = Array.from({ length: 50 }, function (_, i) { return "Nav Item " + (i + 1); });
            this.fillerContent = Array.from({ length: 50 }, function () {
                return "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco\n       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in\n       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat\n       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
            });
            this.shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(function (h) { return h.test(window.location.host); });
            this.mobileQuery = media.matchMedia('(max-width: 600px)');
            this._mobileQueryListener = function () { return changeDetectorRef.detectChanges(); };
            this.mobileQuery.addListener(this._mobileQueryListener);
        }
        SidenavResponsiveExample.prototype.ngOnDestroy = function () {
            this.mobileQuery.removeListener(this._mobileQueryListener);
        };
        SidenavResponsiveExample = tslib_1.__decorate([
            core.Component({
                selector: 'sidenav-responsive-example',
                template: "<div class=\"example-container\" [class.example-is-mobile]=\"mobileQuery.matches\" *ngIf=\"shouldRun\">\n  <mat-toolbar color=\"primary\" class=\"example-toolbar\">\n    <button mat-icon-button (click)=\"snav.toggle()\"><mat-icon>menu</mat-icon></button>\n    <h1 class=\"example-app-name\">Responsive App</h1>\n  </mat-toolbar>\n\n  <mat-sidenav-container class=\"example-sidenav-container\"\n                         [style.marginTop.px]=\"mobileQuery.matches ? 56 : 0\">\n    <mat-sidenav #snav [mode]=\"mobileQuery.matches ? 'over' : 'side'\"\n                 [fixedInViewport]=\"mobileQuery.matches\" fixedTopGap=\"56\">\n      <mat-nav-list>\n        <a mat-list-item routerLink=\".\" *ngFor=\"let nav of fillerNav\">{{nav}}</a>\n      </mat-nav-list>\n    </mat-sidenav>\n\n    <mat-sidenav-content>\n      <p *ngFor=\"let content of fillerContent\">{{content}}</p>\n    </mat-sidenav-content>\n  </mat-sidenav-container>\n</div>\n\n<div *ngIf=\"!shouldRun\">Please open on Stackblitz to see result</div>\n",
                styles: [".example-container {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.example-is-mobile .example-toolbar {\n  position: fixed;\n  /* Make sure the toolbar will stay on top of the content as it scrolls past. */\n  z-index: 2;\n}\n\nh1.example-app-name {\n  margin-left: 8px;\n}\n\n.example-sidenav-container {\n  /* When the sidenav is not fixed, stretch the sidenav container to fill the available space. This\n     causes `<mat-sidenav-content>` to act as our scrolling element for desktop layouts. */\n  flex: 1;\n}\n\n.example-is-mobile .example-sidenav-container {\n  /* When the sidenav is fixed, don't constrain the height of the sidenav container. This allows the\n     `<body>` to be our scrolling element for mobile layouts. */\n  flex: 1 0 auto;\n}\n"]
            }),
            tslib_1.__metadata("design:paramtypes", [core.ChangeDetectorRef, layout.MediaMatcher])
        ], SidenavResponsiveExample);
        return SidenavResponsiveExample;
    }());

    /**
     * @title Configurable slide-toggle
     */
    var SlideToggleConfigurableExample = /** @class */ (function () {
        function SlideToggleConfigurableExample() {
            this.color = 'accent';
            this.checked = false;
            this.disabled = false;
        }
        SlideToggleConfigurableExample = tslib_1.__decorate([
            core.Component({
                selector: 'slide-toggle-configurable-example',
                template: "<mat-card>\n  <mat-card-content>\n    <h2 class=\"example-h2\">Slider configuration</h2>\n\n    <section class=\"example-section\">\n      <label class=\"example-margin\">Color:</label>\n      <mat-radio-group [(ngModel)]=\"color\">\n        <mat-radio-button class=\"example-margin\" value=\"primary\">\n          Primary\n        </mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"accent\">\n          Accent\n        </mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"warn\">\n          Warn\n        </mat-radio-button>\n      </mat-radio-group>\n    </section>\n\n    <section class=\"example-section\">\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"checked\">Checked</mat-checkbox>\n    </section>\n\n    <section class=\"example-section\">\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"disabled\">Disabled</mat-checkbox>\n    </section>\n  </mat-card-content>\n</mat-card>\n\n<mat-card class=\"result\">\n  <mat-card-content>\n    <h2 class=\"example-h2\">Result</h2>\n\n    <section class=\"example-section\">\n      <mat-slide-toggle\n          class=\"example-margin\"\n          [color]=\"color\"\n          [checked]=\"checked\"\n          [disabled]=\"disabled\">\n        Slide me!\n      </mat-slide-toggle>\n    </section>\n  </mat-card-content>\n</mat-card>\n",
                styles: [".example-h2 {\n  margin: 10px;\n}\n\n.example-section {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n\n.example-margin {\n  margin: 10px;\n}\n"]
            })
        ], SlideToggleConfigurableExample);
        return SlideToggleConfigurableExample;
    }());

    /**
     * @title Slide-toggle with forms
     */
    var SlideToggleFormsExample = /** @class */ (function () {
        function SlideToggleFormsExample(formBuilder) {
            this.isChecked = true;
            this.formGroup = formBuilder.group({
                enableWifi: '',
                acceptTerms: ['', forms.Validators.requiredTrue]
            });
        }
        SlideToggleFormsExample.prototype.onFormSubmit = function () {
            alert(JSON.stringify(this.formGroup.value, null, 2));
        };
        SlideToggleFormsExample = tslib_1.__decorate([
            core.Component({
                selector: 'slide-toggle-forms-example',
                template: "<p>Slide Toggle using a simple NgModel.</p>\n\n<mat-slide-toggle [(ngModel)]=\"isChecked\">Slide Toggle Checked: {{isChecked}}</mat-slide-toggle>\n\n<p>Slide Toggle inside of a Template-driven form</p>\n\n<form class=\"example-form\" #form=\"ngForm\" (ngSubmit)=\"onFormSubmit()\" ngNativeValidate>\n\n  <mat-slide-toggle ngModel name=\"enableWifi\">Enable Wifi</mat-slide-toggle>\n  <mat-slide-toggle ngModel name=\"acceptTerms\" required>Accept Terms of Service</mat-slide-toggle>\n\n  <button mat-raised-button type=\"submit\">Save Settings</button>\n</form>\n\n<p>Slide Toggle inside of a Reactive form</p>\n\n<form class=\"example-form\" [formGroup]=\"formGroup\" (ngSubmit)=\"onFormSubmit()\" ngNativeValidate>\n\n  <mat-slide-toggle formControlName=\"enableWifi\">Enable Wifi</mat-slide-toggle>\n  <mat-slide-toggle formControlName=\"acceptTerms\">Accept Terms of Service</mat-slide-toggle>\n\n  <p>Form Group Status: {{formGroup.status}}</p>\n\n  <button mat-rasied-button type=\"submit\">Save Settings</button>\n</form>\n",
                styles: [".example-form mat-slide-toggle {\n  margin: 8px 0;\n  display: block;\n}\n"]
            }),
            tslib_1.__metadata("design:paramtypes", [forms.FormBuilder])
        ], SlideToggleFormsExample);
        return SlideToggleFormsExample;
    }());

    /**
     * @title Basic slide-toggles
     */
    var SlideToggleOverviewExample = /** @class */ (function () {
        function SlideToggleOverviewExample() {
        }
        SlideToggleOverviewExample = tslib_1.__decorate([
            core.Component({
                selector: 'slide-toggle-overview-example',
                template: "<mat-slide-toggle>Slide me!</mat-slide-toggle>\n",
                styles: ["/** No CSS for this example */\n"]
            })
        ], SlideToggleOverviewExample);
        return SlideToggleOverviewExample;
    }());

    /**
     * @title Configurable slider
     */
    var SliderConfigurableExample = /** @class */ (function () {
        function SliderConfigurableExample() {
            this.autoTicks = false;
            this.disabled = false;
            this.invert = false;
            this.max = 100;
            this.min = 0;
            this.showTicks = false;
            this.step = 1;
            this.thumbLabel = false;
            this.value = 0;
            this.vertical = false;
            this._tickInterval = 1;
        }
        Object.defineProperty(SliderConfigurableExample.prototype, "tickInterval", {
            get: function () {
                return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : 0;
            },
            set: function (value) {
                this._tickInterval = coercion.coerceNumberProperty(value);
            },
            enumerable: true,
            configurable: true
        });
        SliderConfigurableExample = tslib_1.__decorate([
            core.Component({
                selector: 'slider-configurable-example',
                template: "<mat-card>\n  <mat-card-content>\n    <h2 class=\"example-h2\">Slider configuration</h2>\n\n    <section class=\"example-section\">\n      <mat-form-field class=\"example-margin\">\n        <input matInput type=\"number\" placeholder=\"Value\" [(ngModel)]=\"value\">\n      </mat-form-field>\n      <mat-form-field class=\"example-margin\">\n        <input matInput type=\"number\" placeholder=\"Min value\" [(ngModel)]=\"min\">\n      </mat-form-field>\n      <mat-form-field class=\"example-margin\">\n        <input matInput type=\"number\" placeholder=\"Max value\" [(ngModel)]=\"max\">\n      </mat-form-field>\n      <mat-form-field class=\"example-margin\">\n        <input matInput type=\"number\" placeholder=\"Step size\" [(ngModel)]=\"step\">\n      </mat-form-field>\n    </section>\n\n    <section class=\"example-section\">\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"showTicks\">Show ticks</mat-checkbox>\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"autoTicks\" *ngIf=\"showTicks\">\n        Auto ticks\n      </mat-checkbox>\n      <mat-form-field class=\"example-margin\" *ngIf=\"showTicks && !autoTicks\">\n        <input matInput type=\"number\" placeholder=\"Tick interval\" [(ngModel)]=\"tickInterval\">\n      </mat-form-field>\n    </section>\n\n    <section class=\"example-section\">\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"thumbLabel\">Show thumb label</mat-checkbox>\n    </section>\n\n    <section class=\"example-section\">\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"vertical\">Vertical</mat-checkbox>\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"invert\">Inverted</mat-checkbox>\n    </section>\n\n    <section class=\"example-section\">\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"disabled\">Disabled</mat-checkbox>\n    </section>\n\n  </mat-card-content>\n</mat-card>\n\n<mat-card class=\"result\">\n  <mat-card-content>\n    <h2 class=\"example-h2\">Result</h2>\n\n    <mat-slider\n        class=\"example-margin\"\n        [disabled]=\"disabled\"\n        [invert]=\"invert\"\n        [max]=\"max\"\n        [min]=\"min\"\n        [step]=\"step\"\n        [thumbLabel]=\"thumbLabel\"\n        [tickInterval]=\"tickInterval\"\n        [(ngModel)]=\"value\"\n        [vertical]=\"vertical\">\n    </mat-slider>\n  </mat-card-content>\n</mat-card>\n",
                styles: [".example-h2 {\n  margin: 10px;\n}\n\n.example-section {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n\n.example-margin {\n  margin: 10px;\n}\n\n.mat-slider-horizontal {\n  width: 300px;\n}\n\n.mat-slider-vertical {\n  height: 300px;\n}\n"]
            })
        ], SliderConfigurableExample);
        return SliderConfigurableExample;
    }());

    /**
     * @title Slider with custom thumb label formatting.
     */
    var SliderFormattingExample = /** @class */ (function () {
        function SliderFormattingExample() {
        }
        SliderFormattingExample.prototype.formatLabel = function (value) {
            if (!value) {
                return 0;
            }
            if (value >= 1000) {
                return Math.round(value / 1000) + 'k';
            }
            return value;
        };
        SliderFormattingExample = tslib_1.__decorate([
            core.Component({
                selector: 'slider-formatting-example',
                template: "<mat-slider\n  thumbLabel\n  [displayWith]=\"formatLabel\"\n  tickInterval=\"1000\"\n  min=\"1\"\n  max=\"100000\"></mat-slider>\n",
                styles: ["mat-slider {\n  width: 300px;\n}\n"]
            })
        ], SliderFormattingExample);
        return SliderFormattingExample;
    }());

    /**
     * @title Basic slider
     */
    var SliderOverviewExample = /** @class */ (function () {
        function SliderOverviewExample() {
        }
        SliderOverviewExample = tslib_1.__decorate([
            core.Component({
                selector: 'slider-overview-example',
                template: "<mat-slider></mat-slider>\n",
                styles: ["/** No CSS for this example */\nmat-slider {\n  width: 300px;\n}\n"]
            })
        ], SliderOverviewExample);
        return SliderOverviewExample;
    }());

    /**
     * @title Snack-bar with a custom component
     */
    var SnackBarComponentExample = /** @class */ (function () {
        function SnackBarComponentExample(_snackBar) {
            this._snackBar = _snackBar;
            this.durationInSeconds = 5;
        }
        SnackBarComponentExample.prototype.openSnackBar = function () {
            this._snackBar.openFromComponent(PizzaPartyComponent, {
                duration: this.durationInSeconds * 1000,
            });
        };
        SnackBarComponentExample = tslib_1.__decorate([
            core.Component({
                selector: 'snack-bar-component-example',
                template: "<mat-form-field>\n  <mat-label>Snack bar duration (seconds)</mat-label>\n  <input type=\"number\" [(ngModel)]=\"durationInSeconds\" matInput>\n</mat-form-field>\n\n<button mat-button (click)=\"openSnackBar()\" aria-label=\"Show an example snack-bar\">\n  Pizza party\n</button>\n",
                styles: ["/** No CSS for this example */\n"]
            }),
            tslib_1.__metadata("design:paramtypes", [snackBar.MatSnackBar])
        ], SnackBarComponentExample);
        return SnackBarComponentExample;
    }());
    var PizzaPartyComponent = /** @class */ (function () {
        function PizzaPartyComponent() {
        }
        PizzaPartyComponent = tslib_1.__decorate([
            core.Component({
                selector: 'snack-bar-component-example-snack',
                template: "<span class=\"example-pizza-party\">\n  Pizza party!!! \uD83C\uDF55\n</span>\n",
                styles: ["\n    .example-pizza-party {\n      color: hotpink;\n    }\n  "]
            })
        ], PizzaPartyComponent);
        return PizzaPartyComponent;
    }());

    /**
     * @title Basic snack-bar
     */
    var SnackBarOverviewExample = /** @class */ (function () {
        function SnackBarOverviewExample(_snackBar) {
            this._snackBar = _snackBar;
        }
        SnackBarOverviewExample.prototype.openSnackBar = function (message, action) {
            this._snackBar.open(message, action, {
                duration: 2000,
            });
        };
        SnackBarOverviewExample = tslib_1.__decorate([
            core.Component({
                selector: 'snack-bar-overview-example',
                template: "<mat-form-field>\n  <input matInput value=\"Disco party!\" placeholder=\"Message\" #message>\n</mat-form-field>\n\n<mat-form-field>\n  <input matInput value=\"Dance\" placeholder=\"Action\" #action>\n</mat-form-field>\n\n<button mat-button (click)=\"openSnackBar(message.value, action.value)\">Show snack-bar</button>\n",
                styles: ["mat-form-field {\n  margin-right: 12px;\n}\n"]
            }),
            tslib_1.__metadata("design:paramtypes", [snackBar.MatSnackBar])
        ], SnackBarOverviewExample);
        return SnackBarOverviewExample;
    }());

    /**
     * @title Snack-bar with configurable position
     */
    var SnackBarPositionExample = /** @class */ (function () {
        function SnackBarPositionExample(_snackBar) {
            this._snackBar = _snackBar;
            this.horizontalPosition = 'start';
            this.verticalPosition = 'bottom';
        }
        SnackBarPositionExample.prototype.openSnackBar = function () {
            this._snackBar.open('Canonball!!', 'End now', {
                duration: 500,
                horizontalPosition: this.horizontalPosition,
                verticalPosition: this.verticalPosition,
            });
        };
        SnackBarPositionExample = tslib_1.__decorate([
            core.Component({
                selector: 'snack-bar-position-example',
                template: "<mat-form-field>\n  <mat-select placeholder=\"Horizontal position\" [(value)]=\"horizontalPosition\">\n    <mat-option value=\"start\">Start</mat-option>\n    <mat-option value=\"center\">Center</mat-option>\n    <mat-option value=\"end\">End</mat-option>\n    <mat-option value=\"left\">Left</mat-option>\n    <mat-option value=\"right\">Right</mat-option>\n  </mat-select>\n</mat-form-field>\n<mat-form-field>\n  <mat-select placeholder=\"Vertical position\" [(value)]=\"verticalPosition\">\n    <mat-option value=\"top\">Top</mat-option>\n    <mat-option value=\"bottom\">Bottom</mat-option>\n  </mat-select>\n</mat-form-field>\n\n<button mat-button (click)=\"openSnackBar()\" aria-label=\"Show an example snack-bar\">\n  Pool party!\n</button>\n",
                styles: ["mat-form-field {\n  margin-right: 12px;\n}\n"]
            }),
            tslib_1.__metadata("design:paramtypes", [snackBar.MatSnackBar])
        ], SnackBarPositionExample);
        return SnackBarPositionExample;
    }());

    /**
     * @title Sorting overview
     */
    var SortOverviewExample = /** @class */ (function () {
        function SortOverviewExample() {
            this.desserts = [
                { name: 'Frozen yogurt', calories: 159, fat: 6, carbs: 24, protein: 4 },
                { name: 'Ice cream sandwich', calories: 237, fat: 9, carbs: 37, protein: 4 },
                { name: 'Eclair', calories: 262, fat: 16, carbs: 24, protein: 6 },
                { name: 'Cupcake', calories: 305, fat: 4, carbs: 67, protein: 4 },
                { name: 'Gingerbread', calories: 356, fat: 16, carbs: 49, protein: 4 },
            ];
            this.sortedData = this.desserts.slice();
        }
        SortOverviewExample.prototype.sortData = function (sort) {
            var data = this.desserts.slice();
            if (!sort.active || sort.direction === '') {
                this.sortedData = data;
                return;
            }
            this.sortedData = data.sort(function (a, b) {
                var isAsc = sort.direction === 'asc';
                switch (sort.active) {
                    case 'name': return compare(a.name, b.name, isAsc);
                    case 'calories': return compare(a.calories, b.calories, isAsc);
                    case 'fat': return compare(a.fat, b.fat, isAsc);
                    case 'carbs': return compare(a.carbs, b.carbs, isAsc);
                    case 'protein': return compare(a.protein, b.protein, isAsc);
                    default: return 0;
                }
            });
        };
        SortOverviewExample = tslib_1.__decorate([
            core.Component({
                selector: 'sort-overview-example',
                template: "<table matSort (matSortChange)=\"sortData($event)\">\n  <tr>\n    <th mat-sort-header=\"name\">Dessert (100g)</th>\n    <th mat-sort-header=\"calories\">Calories</th>\n    <th mat-sort-header=\"fat\">Fat (g)</th>\n    <th mat-sort-header=\"carbs\">Carbs (g)</th>\n    <th mat-sort-header=\"protein\">Protein (g)</th>\n  </tr>\n\n  <tr *ngFor=\"let dessert of sortedData\">\n    <td>{{dessert.name}}</td>\n    <td>{{dessert.calories}}</td>\n    <td>{{dessert.fat}}</td>\n    <td>{{dessert.carbs}}</td>\n    <td>{{dessert.protein}}</td>\n  </tr>\n</table>\n",
                styles: [".mat-sort-header-container {\n  align-items: center;\n}\n"]
            }),
            tslib_1.__metadata("design:paramtypes", [])
        ], SortOverviewExample);
        return SortOverviewExample;
    }());
    function compare(a, b, isAsc) {
        return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }

    /**
     * @title Stepper with editable steps
     */
    var StepperEditableExample = /** @class */ (function () {
        function StepperEditableExample(_formBuilder) {
            this._formBuilder = _formBuilder;
            this.isEditable = false;
        }
        StepperEditableExample.prototype.ngOnInit = function () {
            this.firstFormGroup = this._formBuilder.group({
                firstCtrl: ['', forms.Validators.required]
            });
            this.secondFormGroup = this._formBuilder.group({
                secondCtrl: ['', forms.Validators.required]
            });
        };
        StepperEditableExample = tslib_1.__decorate([
            core.Component({
                selector: 'stepper-editable-example',
                template: "<button mat-raised-button (click)=\"isEditable = !isEditable\">\n  {{!isEditable ? 'Enable edit mode' : 'Disable edit mode'}}\n</button>\n\n<mat-horizontal-stepper linear #stepper>\n  <mat-step [stepControl]=\"firstFormGroup\" [editable]=\"isEditable\">\n    <form [formGroup]=\"firstFormGroup\">\n      <ng-template matStepLabel>Fill out your name</ng-template>\n      <mat-form-field>\n        <input matInput placeholder=\"Last name, First name\" formControlName=\"firstCtrl\" required>\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step [stepControl]=\"secondFormGroup\" [editable]=\"isEditable\">\n    <form [formGroup]=\"secondFormGroup\">\n      <ng-template matStepLabel>Fill out your address</ng-template>\n      <mat-form-field>\n        <input matInput placeholder=\"Address\" formControlName=\"secondCtrl\" required>\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperPrevious>Back</button>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step>\n    <ng-template matStepLabel>Done</ng-template>\n    You are now done.\n    <div>\n      <button mat-button matStepperPrevious>Back</button>\n      <button mat-button (click)=\"stepper.reset()\">Reset</button>\n    </div>\n  </mat-step>\n</mat-horizontal-stepper>\n",
                styles: ["/** No CSS for this example */\n"]
            }),
            tslib_1.__metadata("design:paramtypes", [forms.FormBuilder])
        ], StepperEditableExample);
        return StepperEditableExample;
    }());

    var ɵ0$3 = { showError: true };
    /**
     * @title Stepper that displays errors in the steps
     */
    var StepperErrorsExample = /** @class */ (function () {
        function StepperErrorsExample(_formBuilder) {
            this._formBuilder = _formBuilder;
        }
        StepperErrorsExample.prototype.ngOnInit = function () {
            this.firstFormGroup = this._formBuilder.group({
                firstCtrl: ['', forms.Validators.required]
            });
            this.secondFormGroup = this._formBuilder.group({
                secondCtrl: ['', forms.Validators.required]
            });
        };
        StepperErrorsExample = tslib_1.__decorate([
            core.Component({
                selector: 'stepper-errors-example',
                template: "<mat-horizontal-stepper linear #stepper>\n  <mat-step [stepControl]=\"firstFormGroup\" errorMessage=\"Name is required.\">\n    <form [formGroup]=\"firstFormGroup\">\n      <ng-template matStepLabel>Fill out your name</ng-template>\n      <mat-form-field>\n        <input matInput placeholder=\"Last name, First name\" formControlName=\"firstCtrl\" required>\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step [stepControl]=\"secondFormGroup\" errorMessage=\"Address is required.\">\n    <form [formGroup]=\"secondFormGroup\">\n      <ng-template matStepLabel>Fill out your address</ng-template>\n      <mat-form-field>\n        <input matInput placeholder=\"Address\" formControlName=\"secondCtrl\" required>\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperPrevious>Back</button>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step>\n    <ng-template matStepLabel>Done</ng-template>\n    You are now done.\n    <div>\n      <button mat-button matStepperPrevious>Back</button>\n      <button mat-button (click)=\"stepper.reset()\">Reset</button>\n    </div>\n  </mat-step>\n</mat-horizontal-stepper>\n",
                providers: [{
                        provide: stepper.STEPPER_GLOBAL_OPTIONS, useValue: ɵ0$3
                    }],
                styles: [""]
            }),
            tslib_1.__metadata("design:paramtypes", [forms.FormBuilder])
        ], StepperErrorsExample);
        return StepperErrorsExample;
    }());

    /**
     * @title Stepper label bottom position
     */
    var StepperLabelPositionBottomExample = /** @class */ (function () {
        function StepperLabelPositionBottomExample(_formBuilder) {
            this._formBuilder = _formBuilder;
        }
        StepperLabelPositionBottomExample.prototype.ngOnInit = function () {
            this.firstFormGroup = this._formBuilder.group({
                firstCtrl: ['', forms.Validators.required]
            });
            this.secondFormGroup = this._formBuilder.group({
                secondCtrl: ['', forms.Validators.required]
            });
        };
        StepperLabelPositionBottomExample = tslib_1.__decorate([
            core.Component({
                selector: 'stepper-label-position-bottom-example',
                template: "<mat-horizontal-stepper labelPosition=\"bottom\" #stepper>\n    <mat-step [stepControl]=\"firstFormGroup\">\n        <form [formGroup]=\"firstFormGroup\">\n            <ng-template matStepLabel>Fill out your name</ng-template>\n            <mat-form-field>\n                <input matInput placeholder=\"Last name, First name\" formControlName=\"firstCtrl\" required>\n            </mat-form-field>\n            <div>\n                <button mat-button matStepperNext>Next</button>\n            </div>\n        </form>\n    </mat-step>\n    <mat-step [stepControl]=\"secondFormGroup\" optional>\n        <form [formGroup]=\"secondFormGroup\">\n            <ng-template matStepLabel>Fill out your address</ng-template>\n            <mat-form-field>\n                <input matInput placeholder=\"Address\" formControlName=\"secondCtrl\" required>\n            </mat-form-field>\n            <div>\n                <button mat-button matStepperPrevious>Back</button>\n                <button mat-button matStepperNext>Next</button>\n            </div>\n        </form>\n    </mat-step>\n    <mat-step>\n        <ng-template matStepLabel>Done</ng-template>\n        You are now done.\n        <div>\n            <button mat-button matStepperPrevious>Back</button>\n            <button mat-button (click)=\"stepper.reset()\">Reset</button>\n        </div>\n    </mat-step>\n</mat-horizontal-stepper>\n",
                styles: ["/** No CSS for this example */\n"]
            }),
            tslib_1.__metadata("design:paramtypes", [forms.FormBuilder])
        ], StepperLabelPositionBottomExample);
        return StepperLabelPositionBottomExample;
    }());

    /**
     * @title Stepper with optional steps
     */
    var StepperOptionalExample = /** @class */ (function () {
        function StepperOptionalExample(_formBuilder) {
            this._formBuilder = _formBuilder;
            this.isOptional = false;
        }
        StepperOptionalExample.prototype.ngOnInit = function () {
            this.firstFormGroup = this._formBuilder.group({
                firstCtrl: ['', forms.Validators.required]
            });
            this.secondFormGroup = this._formBuilder.group({
                secondCtrl: ''
            });
        };
        StepperOptionalExample = tslib_1.__decorate([
            core.Component({
                selector: 'stepper-optional-example',
                template: "<button mat-raised-button (click)=\"isOptional = !isOptional\">\n  {{!isOptional ? 'Enable optional steps' : 'Disable optional steps'}}\n</button>\n\n<mat-horizontal-stepper linear #stepper>\n  <mat-step [stepControl]=\"firstFormGroup\">\n    <form [formGroup]=\"firstFormGroup\">\n      <ng-template matStepLabel>Fill out your name</ng-template>\n      <mat-form-field>\n        <input matInput placeholder=\"Last name, First name\" formControlName=\"firstCtrl\" required>\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step [stepControl]=\"secondFormGroup\" [optional]=\"isOptional\">\n    <form [formGroup]=\"secondFormGroup\">\n      <ng-template matStepLabel>Fill out your address</ng-template>\n      <mat-form-field>\n        <input matInput placeholder=\"Address\" formControlName=\"secondCtrl\" required>\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperPrevious>Back</button>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step>\n    <ng-template matStepLabel>Done</ng-template>\n    You are now done.\n    <div>\n      <button mat-button matStepperPrevious>Back</button>\n      <button mat-button (click)=\"stepper.reset()\">Reset</button>\n    </div>\n  </mat-step>\n</mat-horizontal-stepper>\n",
                styles: ["/** No CSS for this example */\n"]
            }),
            tslib_1.__metadata("design:paramtypes", [forms.FormBuilder])
        ], StepperOptionalExample);
        return StepperOptionalExample;
    }());

    /**
     * @title Stepper overview
     */
    var StepperOverviewExample = /** @class */ (function () {
        function StepperOverviewExample(_formBuilder) {
            this._formBuilder = _formBuilder;
            this.isLinear = false;
        }
        StepperOverviewExample.prototype.ngOnInit = function () {
            this.firstFormGroup = this._formBuilder.group({
                firstCtrl: ['', forms.Validators.required]
            });
            this.secondFormGroup = this._formBuilder.group({
                secondCtrl: ['', forms.Validators.required]
            });
        };
        StepperOverviewExample = tslib_1.__decorate([
            core.Component({
                selector: 'stepper-overview-example',
                template: "<button mat-raised-button (click)=\"isLinear = !isLinear\" id=\"toggle-linear\">\n  {{!isLinear ? 'Enable linear mode' : 'Disable linear mode'}}\n</button>\n<mat-horizontal-stepper [linear]=\"isLinear\" #stepper>\n  <mat-step [stepControl]=\"firstFormGroup\">\n    <form [formGroup]=\"firstFormGroup\">\n      <ng-template matStepLabel>Fill out your name</ng-template>\n      <mat-form-field>\n        <input matInput placeholder=\"Last name, First name\" formControlName=\"firstCtrl\" required>\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step [stepControl]=\"secondFormGroup\">\n    <form [formGroup]=\"secondFormGroup\">\n      <ng-template matStepLabel>Fill out your address</ng-template>\n      <mat-form-field>\n        <input matInput placeholder=\"Address\" formControlName=\"secondCtrl\" required>\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperPrevious>Back</button>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step>\n    <ng-template matStepLabel>Done</ng-template>\n    You are now done.\n    <div>\n      <button mat-button matStepperPrevious>Back</button>\n      <button mat-button (click)=\"stepper.reset()\">Reset</button>\n    </div>\n  </mat-step>\n</mat-horizontal-stepper>\n",
                styles: ["/** No CSS for this example */\n"]
            }),
            tslib_1.__metadata("design:paramtypes", [forms.FormBuilder])
        ], StepperOverviewExample);
        return StepperOverviewExample;
    }());

    var ɵ0$4 = { displayDefaultIndicatorType: false };
    /**
     * @title Stepper with customized states
     */
    var StepperStatesExample = /** @class */ (function () {
        function StepperStatesExample(_formBuilder) {
            this._formBuilder = _formBuilder;
        }
        StepperStatesExample.prototype.ngOnInit = function () {
            this.firstFormGroup = this._formBuilder.group({
                firstCtrl: ['', forms.Validators.required]
            });
            this.secondFormGroup = this._formBuilder.group({
                secondCtrl: ['', forms.Validators.required]
            });
        };
        StepperStatesExample = tslib_1.__decorate([
            core.Component({
                selector: 'stepper-states-example',
                template: "<mat-horizontal-stepper #stepper>\n  <mat-step [stepControl]=\"firstFormGroup\">\n    <form [formGroup]=\"firstFormGroup\">\n      <ng-template matStepLabel>Fill out your name</ng-template>\n      <mat-form-field>\n        <input matInput placeholder=\"Last name, First name\" formControlName=\"firstCtrl\" required>\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step [stepControl]=\"secondFormGroup\">\n    <form [formGroup]=\"secondFormGroup\">\n      <ng-template matStepLabel>Fill out your address</ng-template>\n      <mat-form-field>\n        <input matInput placeholder=\"Address\" formControlName=\"secondCtrl\" required>\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperPrevious>Back</button>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step>\n    <ng-template matStepLabel>Done</ng-template>\n    You are now done.\n    <div>\n      <button mat-button matStepperPrevious>Back</button>\n      <button mat-button (click)=\"stepper.reset()\">Reset</button>\n    </div>\n  </mat-step>\n</mat-horizontal-stepper>\n\n<mat-horizontal-stepper>\n  <mat-step label=\"Step 1\" state=\"phone\">\n    <p>Put down your phones.</p>\n    <div>\n      <button mat-button matStepperNext>Next</button>\n    </div>\n  </mat-step>\n  <mat-step label=\"Step 2\" state=\"chat\">\n    <p>Socialize with each other.</p>\n    <div>\n      <button mat-button matStepperPrevious>Back</button>\n      <button mat-button matStepperNext>Next</button>\n    </div>\n  </mat-step>\n  <mat-step label=\"Step 3\">\n    <p>You're welcome.</p>\n  </mat-step>\n\n  <!-- Icon overrides. -->\n  <ng-template matStepperIcon=\"phone\">\n    <mat-icon>call_end</mat-icon>\n  </ng-template>\n  <ng-template matStepperIcon=\"chat\">\n    <mat-icon>forum</mat-icon>\n  </ng-template>\n</mat-horizontal-stepper>\n",
                providers: [{
                        provide: stepper.STEPPER_GLOBAL_OPTIONS, useValue: ɵ0$4
                    }],
                styles: [""]
            }),
            tslib_1.__metadata("design:paramtypes", [forms.FormBuilder])
        ], StepperStatesExample);
        return StepperStatesExample;
    }());

    /**
     * @title Stepper vertical
     */
    var StepperVerticalExample = /** @class */ (function () {
        function StepperVerticalExample(_formBuilder) {
            this._formBuilder = _formBuilder;
            this.isLinear = false;
        }
        StepperVerticalExample.prototype.ngOnInit = function () {
            this.firstFormGroup = this._formBuilder.group({
                firstCtrl: ['', forms.Validators.required]
            });
            this.secondFormGroup = this._formBuilder.group({
                secondCtrl: ['', forms.Validators.required]
            });
        };
        StepperVerticalExample = tslib_1.__decorate([
            core.Component({
                selector: 'stepper-vertical-example',
                template: "<button mat-raised-button (click)=\"isLinear = !isLinear\" id=\"toggle-linear\">\n  {{!isLinear ? 'Enable linear mode' : 'Disable linear mode'}}\n</button>\n<mat-vertical-stepper [linear]=\"isLinear\" #stepper>\n  <mat-step [stepControl]=\"firstFormGroup\">\n    <form [formGroup]=\"firstFormGroup\">\n      <ng-template matStepLabel>Fill out your name</ng-template>\n      <mat-form-field>\n        <input matInput placeholder=\"Last name, First name\" formControlName=\"firstCtrl\" required>\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step [stepControl]=\"secondFormGroup\">\n    <form [formGroup]=\"secondFormGroup\">\n      <ng-template matStepLabel>Fill out your address</ng-template>\n      <mat-form-field>\n        <input matInput placeholder=\"Address\" formControlName=\"secondCtrl\" required>\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperPrevious>Back</button>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step>\n    <ng-template matStepLabel>Done</ng-template>\n    You are now done.\n    <div>\n      <button mat-button matStepperPrevious>Back</button>\n      <button mat-button (click)=\"stepper.reset()\">Reset</button>\n    </div>\n  </mat-step>\n</mat-vertical-stepper>\n",
                styles: ["/** No CSS for this example */\n"]
            }),
            tslib_1.__metadata("design:paramtypes", [forms.FormBuilder])
        ], StepperVerticalExample);
        return StepperVerticalExample;
    }());

    /**
     * @title Tab group with aligned labels
     */
    var TabGroupAlignExample = /** @class */ (function () {
        function TabGroupAlignExample() {
        }
        TabGroupAlignExample = tslib_1.__decorate([
            core.Component({
                selector: 'tab-group-align-example',
                template: "<mat-tab-group mat-align-tabs=\"start\">\n  <mat-tab label=\"First\">Content 1</mat-tab>\n  <mat-tab label=\"Second\">Content 2</mat-tab>\n  <mat-tab label=\"Third\">Content 3</mat-tab>\n</mat-tab-group>\n\n<mat-tab-group mat-align-tabs=\"center\">\n  <mat-tab label=\"First\">Content 1</mat-tab>\n  <mat-tab label=\"Second\">Content 2</mat-tab>\n  <mat-tab label=\"Third\">Content 3</mat-tab>\n</mat-tab-group>\n\n<mat-tab-group mat-align-tabs=\"end\">\n  <mat-tab label=\"First\">Content 1</mat-tab>\n  <mat-tab label=\"Second\">Content 2</mat-tab>\n  <mat-tab label=\"Third\">Content 3</mat-tab>\n</mat-tab-group>\n",
                styles: [".mat-tab-group {\n  margin-bottom: 48px;\n}\n"]
            })
        ], TabGroupAlignExample);
        return TabGroupAlignExample;
    }());

    /**
     * @title Tab group animations
     */
    var TabGroupAnimationsExample = /** @class */ (function () {
        function TabGroupAnimationsExample() {
        }
        TabGroupAnimationsExample = tslib_1.__decorate([
            core.Component({
                selector: 'tab-group-animations-example',
                template: "<h3>No animation</h3>\n\n<mat-tab-group animationDuration=\"0ms\">\n  <mat-tab label=\"First\">Content 1</mat-tab>\n  <mat-tab label=\"Second\">Content 2</mat-tab>\n  <mat-tab label=\"Third\">Content 3</mat-tab>\n</mat-tab-group>\n\n<h3>Very slow animation</h3>\n<mat-tab-group animationDuration=\"2000ms\">\n  <mat-tab label=\"First\">Content 1</mat-tab>\n  <mat-tab label=\"Second\">Content 2</mat-tab>\n  <mat-tab label=\"Third\">Content 3</mat-tab>\n</mat-tab-group>\n",
                styles: [".mat-tab-group {\n  margin-bottom: 48px;\n}\n"]
            })
        ], TabGroupAnimationsExample);
        return TabGroupAnimationsExample;
    }());

    /**
     * @title Tab group with asynchronously loading tab contents
     */
    var TabGroupAsyncExample = /** @class */ (function () {
        function TabGroupAsyncExample() {
            this.asyncTabs = new rxjs.Observable(function (observer) {
                setTimeout(function () {
                    observer.next([
                        { label: 'First', content: 'Content 1' },
                        { label: 'Second', content: 'Content 2' },
                        { label: 'Third', content: 'Content 3' },
                    ]);
                }, 1000);
            });
        }
        TabGroupAsyncExample = tslib_1.__decorate([
            core.Component({
                selector: 'tab-group-async-example',
                template: "<ng-container *ngIf=\"(asyncTabs | async) === null\">\n  Loading tabs...\n</ng-container>\n\n<mat-tab-group>\n  <mat-tab *ngFor=\"let tab of asyncTabs | async\">\n    <ng-template mat-tab-label>{{tab.label}}</ng-template>\n    {{tab.content}}\n  </mat-tab>\n</mat-tab-group>\n",
                styles: ["/** No CSS for this example */\n"]
            }),
            tslib_1.__metadata("design:paramtypes", [])
        ], TabGroupAsyncExample);
        return TabGroupAsyncExample;
    }());

    /**
     * @title Basic use of the tab group
     */
    var TabGroupBasicExample = /** @class */ (function () {
        function TabGroupBasicExample() {
        }
        TabGroupBasicExample = tslib_1.__decorate([
            core.Component({
                selector: 'tab-group-basic-example',
                template: "<mat-tab-group>\n  <mat-tab label=\"First\"> Content 1 </mat-tab>\n  <mat-tab label=\"Second\"> Content 2 </mat-tab>\n  <mat-tab label=\"Third\"> Content 3 </mat-tab>\n</mat-tab-group>\n",
                styles: ["/** No CSS for this example */\n"]
            })
        ], TabGroupBasicExample);
        return TabGroupBasicExample;
    }());

    /**
     * @title Using tabs with a custom label template
     */
    var TabGroupCustomLabelExample = /** @class */ (function () {
        function TabGroupCustomLabelExample() {
        }
        TabGroupCustomLabelExample = tslib_1.__decorate([
            core.Component({
                selector: 'tab-group-custom-label-example',
                template: "<mat-tab-group>\n  <mat-tab>\n    <ng-template mat-tab-label>\n      <mat-icon class=\"example-tab-icon\">thumb_up</mat-icon>\n      First\n    </ng-template>\n    Content 1\n  </mat-tab>\n\n  <mat-tab>\n    <ng-template mat-tab-label>\n      <mat-icon class=\"example-tab-icon\">thumb_up</mat-icon>\n      Second\n    </ng-template>\n    Content 2\n  </mat-tab>\n\n  <mat-tab>\n    <ng-template mat-tab-label>\n      <mat-icon class=\"example-tab-icon\">thumb_up</mat-icon>\n      Third\n    </ng-template>\n\n    Content 3\n  </mat-tab>\n</mat-tab-group>\n",
                styles: [".example-tab-icon {\n  margin-right: 8px;\n}\n"]
            })
        ], TabGroupCustomLabelExample);
        return TabGroupCustomLabelExample;
    }());

    /**
     * @title Tab group with dynamic height based on tab contents
     */
    var TabGroupDynamicHeightExample = /** @class */ (function () {
        function TabGroupDynamicHeightExample() {
        }
        TabGroupDynamicHeightExample = tslib_1.__decorate([
            core.Component({
                selector: 'tab-group-dynamic-height-example',
                template: "<mat-tab-group dynamicHeight>\n  <mat-tab label=\"Short tab\">\n    <div class=\"example-small-box mat-elevation-z4\">\n      Small content\n    </div>\n  </mat-tab>\n  <mat-tab label=\"Long tab\">\n    <div class=\"example-large-box mat-elevation-z4\">\n      Large content\n    </div>\n  </mat-tab>\n</mat-tab-group>\n",
                styles: [".example-small-box, .example-large-box {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 16px;\n  padding: 16px;\n  border-radius: 8px;\n}\n\n.example-small-box {\n  height: 100px;\n  width: 100px;\n}\n\n.example-large-box {\n  height: 300px;\n  width: 300px;\n}\n"]
            })
        ], TabGroupDynamicHeightExample);
        return TabGroupDynamicHeightExample;
    }());

    /**
     * @title Tab group with dynamically changing tabs
     */
    var TabGroupDynamicExample = /** @class */ (function () {
        function TabGroupDynamicExample() {
            this.tabs = ['First', 'Second', 'Third'];
            this.selected = new forms.FormControl(0);
        }
        TabGroupDynamicExample.prototype.addTab = function (selectAfterAdding) {
            this.tabs.push('New');
            if (selectAfterAdding) {
                this.selected.setValue(this.tabs.length - 1);
            }
        };
        TabGroupDynamicExample.prototype.removeTab = function (index) {
            this.tabs.splice(index, 1);
        };
        TabGroupDynamicExample = tslib_1.__decorate([
            core.Component({
                selector: 'tab-group-dynamic-example',
                template: "<div>\n  <span class=\"example-input-label\"> Selected tab index: </span>\n  <mat-form-field>\n    <input matInput type=\"number\" [formControl]=\"selected\">\n  </mat-form-field>\n</div>\n\n<div>\n  <button mat-raised-button\n          class=\"example-add-tab-button\"\n          (click)=\"addTab(selectAfterAdding.checked)\">\n    Add new tab\n  </button>\n  <mat-checkbox #selectAfterAdding> Select tab after adding </mat-checkbox>\n</div>\n\n<mat-tab-group [selectedIndex]=\"selected.value\"\n               (selectedIndexChange)=\"selected.setValue($event)\">\n  <mat-tab *ngFor=\"let tab of tabs; let index = index\" [label]=\"tab\">\n    Contents for {{tab}} tab\n\n    <button mat-raised-button\n            class=\"example-delete-tab-button\"\n            [disabled]=\"tabs.length === 1\"\n            (click)=\"removeTab(index)\">\n      Delete Tab\n    </button>\n  </mat-tab>\n</mat-tab-group>\n",
                styles: [".example-input-label,\n.example-add-tab-button,\n.example-delete-tab-button {\n  margin: 8px;\n}\n"]
            })
        ], TabGroupDynamicExample);
        return TabGroupDynamicExample;
    }());

    /**
     * @title Tab group with the headers on the bottom
     */
    var TabGroupHeaderBelowExample = /** @class */ (function () {
        function TabGroupHeaderBelowExample() {
        }
        TabGroupHeaderBelowExample = tslib_1.__decorate([
            core.Component({
                selector: 'tab-group-header-below-example',
                template: "<mat-tab-group headerPosition=\"below\">\n  <mat-tab label=\"First\"> Content 1 </mat-tab>\n  <mat-tab label=\"Second\"> Content 2 </mat-tab>\n  <mat-tab label=\"Third\"> Content 3 </mat-tab>\n</mat-tab-group>\n",
                styles: ["/** No CSS for this example */\n"]
            })
        ], TabGroupHeaderBelowExample);
        return TabGroupHeaderBelowExample;
    }());

    /**
     * @title Tab group where the tab content is loaded lazily (when activated)
     */
    var TabGroupLazyLoadedExample = /** @class */ (function () {
        function TabGroupLazyLoadedExample() {
            this.tabLoadTimes = [];
        }
        TabGroupLazyLoadedExample.prototype.getTimeLoaded = function (index) {
            if (!this.tabLoadTimes[index]) {
                this.tabLoadTimes[index] = new Date();
            }
            return this.tabLoadTimes[index];
        };
        TabGroupLazyLoadedExample = tslib_1.__decorate([
            core.Component({
                selector: 'tab-group-lazy-loaded-example',
                template: "<mat-tab-group>\n  <mat-tab label=\"First\">\n    <ng-template matTabContent>\n      Content 1 - Loaded: {{getTimeLoaded(1) | date:'medium'}}\n    </ng-template>\n  </mat-tab>\n  <mat-tab label=\"Second\">\n    <ng-template matTabContent>\n      Content 2 - Loaded: {{getTimeLoaded(2) | date:'medium'}}\n    </ng-template>\n  </mat-tab>\n  <mat-tab label=\"Third\">\n    <ng-template matTabContent>\n      Content 3 - Loaded: {{getTimeLoaded(3) | date:'medium'}}\n    </ng-template>\n  </mat-tab>\n</mat-tab-group>\n",
                styles: ["/** No CSS for this example */\n"]
            })
        ], TabGroupLazyLoadedExample);
        return TabGroupLazyLoadedExample;
    }());

    /**
     * @title Tab group with stretched labels
     */
    var TabGroupStretchedExample = /** @class */ (function () {
        function TabGroupStretchedExample() {
        }
        TabGroupStretchedExample = tslib_1.__decorate([
            core.Component({
                selector: 'tab-group-stretched-example',
                template: "<mat-tab-group mat-stretch-tabs class=\"example-stretched-tabs mat-elevation-z4\">\n  <mat-tab label=\"First\"> Content 1 </mat-tab>\n  <mat-tab label=\"Second\"> Content 2 </mat-tab>\n  <mat-tab label=\"Third\"> Content 3 </mat-tab>\n</mat-tab-group>\n",
                styles: [".example-stretched-tabs {\n  max-width: 800px;\n}\n"]
            })
        ], TabGroupStretchedExample);
        return TabGroupStretchedExample;
    }());

    /**
     * @title Customizing the theme options on the tab group
     */
    var TabGroupThemeExample = /** @class */ (function () {
        function TabGroupThemeExample() {
        }
        TabGroupThemeExample = tslib_1.__decorate([
            core.Component({
                selector: 'tab-group-theme-example',
                template: "<div>\n  <mat-button-toggle-group #colorToggle=\"matButtonToggleGroup\"\n                           value=\"primary\"\n                           aria-label=\"Change color\">\n    <mat-button-toggle value=\"primary\"> Primary </mat-button-toggle>\n    <mat-button-toggle value=\"accent\"> Accent </mat-button-toggle>\n  </mat-button-toggle-group>\n  <span class=\"example-button-toggle-label\"> Color </span>\n</div>\n\n<div>\n  <mat-button-toggle-group #backgroundColorToggle=\"matButtonToggleGroup\"\n                           value=\"primary\"\n                           aria-label=\"Change color\">\n    <mat-button-toggle value=\"primary\"> Primary </mat-button-toggle>\n    <mat-button-toggle value=\"accent\"> Accent </mat-button-toggle>\n  </mat-button-toggle-group>\n  <span class=\"example-button-toggle-label\"> Background Color </span>\n</div>\n\n<mat-tab-group [color]=\"colorToggle.value\" [backgroundColor]=\"backgroundColorToggle.value\">\n  <mat-tab label=\"First\"> Content 1 </mat-tab>\n  <mat-tab label=\"Second\"> Content 2 </mat-tab>\n  <mat-tab label=\"Third\"> Content 3 </mat-tab>\n</mat-tab-group>\n",
                styles: [".example-button-toggle-label {\n  display: inline-block;\n  margin: 16px;\n}\n"]
            })
        ], TabGroupThemeExample);
        return TabGroupThemeExample;
    }());

    /**
     * @title Basic use of the tab nav bar
     */
    var TabNavBarBasicExample = /** @class */ (function () {
        function TabNavBarBasicExample() {
            this.links = ['First', 'Second', 'Third'];
            this.activeLink = this.links[0];
            this.background = '';
        }
        TabNavBarBasicExample.prototype.toggleBackground = function () {
            this.background = this.background ? '' : 'primary';
        };
        TabNavBarBasicExample.prototype.addLink = function () {
            this.links.push("Link " + (this.links.length + 1));
        };
        TabNavBarBasicExample = tslib_1.__decorate([
            core.Component({
                selector: 'tab-nav-bar-basic-example',
                template: "<nav mat-tab-nav-bar [backgroundColor]=\"background\">\n  <a mat-tab-link *ngFor=\"let link of links\"\n     (click)=\"activeLink = link\"\n     [active]=\"activeLink == link\"> {{link}} </a>\n  <a mat-tab-link disabled>Disabled Link</a>\n</nav>\n\n<button mat-raised-button class=\"example-action-button\" (click)=\"toggleBackground()\">\n  Toggle background\n</button>\n<button mat-raised-button class=\"example-action-button\" (click)=\"addLink()\">\n  Add link\n</button>\n",
                styles: [".example-action-button {\n  margin-top: 8px;\n  margin-right: 8px;\n}\n"]
            })
        ], TabNavBarBasicExample);
        return TabNavBarBasicExample;
    }());

    var ELEMENT_DATA$9 = [
        { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
        { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
        { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
        { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
        { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
        { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
        { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
        { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
        { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
        { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
    ];
    /**
     * @title Basic use of `<mat-table>` (uses display flex)
     */
    var TableBasicFlexExample = /** @class */ (function () {
        function TableBasicFlexExample() {
            this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
            this.dataSource = ELEMENT_DATA$9;
        }
        TableBasicFlexExample = tslib_1.__decorate([
            core.Component({
                selector: 'table-basic-flex-example',
                template: "<mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n  <!-- Position Column -->\n  <ng-container matColumnDef=\"position\">\n    <mat-header-cell *matHeaderCellDef> No. </mat-header-cell>\n    <mat-cell *matCellDef=\"let element\"> {{element.position}} </mat-cell>\n  </ng-container>\n\n  <!-- Name Column -->\n  <ng-container matColumnDef=\"name\">\n    <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\n    <mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\n  </ng-container>\n\n  <!-- Weight Column -->\n  <ng-container matColumnDef=\"weight\">\n    <mat-header-cell *matHeaderCellDef> Weight </mat-header-cell>\n    <mat-cell *matCellDef=\"let element\"> {{element.weight}} </mat-cell>\n  </ng-container>\n\n  <!-- Symbol Column -->\n  <ng-container matColumnDef=\"symbol\">\n    <mat-header-cell *matHeaderCellDef> Symbol </mat-header-cell>\n    <mat-cell *matCellDef=\"let element\"> {{element.symbol}} </mat-cell>\n  </ng-container>\n\n  <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n  <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n</mat-table>",
                styles: ["table {\n  width: 100%;\n}\n"]
            })
        ], TableBasicFlexExample);
        return TableBasicFlexExample;
    }());

    var ELEMENT_DATA$a = [
        { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
        { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
        { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
        { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
        { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
        { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
        { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
        { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
        { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
        { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
    ];
    /**
     * @title Basic use of `<table mat-table>`
     */
    var TableBasicExample = /** @class */ (function () {
        function TableBasicExample() {
            this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
            this.dataSource = ELEMENT_DATA$a;
        }
        TableBasicExample = tslib_1.__decorate([
            core.Component({
                selector: 'table-basic-example',
                template: "<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\n  <!--- Note that these columns can be defined in any order.\n        The actual rendered columns are set as a property on the row definition\" -->\n\n  <!-- Position Column -->\n  <ng-container matColumnDef=\"position\">\n    <th mat-header-cell *matHeaderCellDef> No. </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n  </ng-container>\n\n  <!-- Name Column -->\n  <ng-container matColumnDef=\"name\">\n    <th mat-header-cell *matHeaderCellDef> Name </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n  </ng-container>\n\n  <!-- Weight Column -->\n  <ng-container matColumnDef=\"weight\">\n    <th mat-header-cell *matHeaderCellDef> Weight </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\n  </ng-container>\n\n  <!-- Symbol Column -->\n  <ng-container matColumnDef=\"symbol\">\n    <th mat-header-cell *matHeaderCellDef> Symbol </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>\n\n",
                styles: ["table {\n  width: 100%;\n}\n"]
            })
        ], TableBasicExample);
        return TableBasicExample;
    }());

    var ELEMENT_DATA$b = [
        { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
        { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
        { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
        { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
        { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
        { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
        { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
        { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
        { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
        { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
    ];
    /**
     * @title Table dynamically changing the columns displayed
     */
    var TableDynamicColumnsExample = /** @class */ (function () {
        function TableDynamicColumnsExample() {
            this.displayedColumns = ['name', 'weight', 'symbol', 'position'];
            this.columnsToDisplay = this.displayedColumns.slice();
            this.data = ELEMENT_DATA$b;
        }
        TableDynamicColumnsExample.prototype.addColumn = function () {
            var randomColumn = Math.floor(Math.random() * this.displayedColumns.length);
            this.columnsToDisplay.push(this.displayedColumns[randomColumn]);
        };
        TableDynamicColumnsExample.prototype.removeColumn = function () {
            if (this.columnsToDisplay.length) {
                this.columnsToDisplay.pop();
            }
        };
        TableDynamicColumnsExample.prototype.shuffle = function () {
            var currentIndex = this.columnsToDisplay.length;
            while (0 !== currentIndex) {
                var randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;
                // Swap
                var temp = this.columnsToDisplay[currentIndex];
                this.columnsToDisplay[currentIndex] = this.columnsToDisplay[randomIndex];
                this.columnsToDisplay[randomIndex] = temp;
            }
        };
        TableDynamicColumnsExample = tslib_1.__decorate([
            core.Component({
                selector: 'table-dynamic-columns-example',
                template: "<button mat-raised-button (click)=\"addColumn()\"> Add column </button>\n<button mat-raised-button (click)=\"removeColumn()\"> Remove column </button>\n<button mat-raised-button (click)=\"shuffle()\"> Shuffle </button>\n\n<table mat-table [dataSource]=\"data\" class=\"mat-elevation-z8\">\n  <ng-container [matColumnDef]=\"column\" *ngFor=\"let column of displayedColumns\">\n    <th mat-header-cell *matHeaderCellDef> {{column}} </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element[column]}} </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"columnsToDisplay\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: columnsToDisplay;\"></tr>\n</table>\n",
                styles: ["table {\n  width: 100%;\n}\n\nbutton {\n  margin: 16px 8px;\n}\n"]
            })
        ], TableDynamicColumnsExample);
        return TableDynamicColumnsExample;
    }());

    /**
     * @title Table with expandable rows
     */
    var TableExpandableRowsExample = /** @class */ (function () {
        function TableExpandableRowsExample() {
            this.dataSource = ELEMENT_DATA$c;
            this.columnsToDisplay = ['name', 'weight', 'symbol', 'position'];
        }
        TableExpandableRowsExample = tslib_1.__decorate([
            core.Component({
                selector: 'table-expandable-rows-example',
                template: "<table mat-table\n       [dataSource]=\"dataSource\" multiTemplateDataRows\n       class=\"mat-elevation-z8\">\n  <ng-container matColumnDef=\"{{column}}\" *ngFor=\"let column of columnsToDisplay\">\n    <th mat-header-cell *matHeaderCellDef> {{column}} </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element[column]}} </td>\n  </ng-container>\n\n  <!-- Expanded Content Column - The detail row is made up of this one column that spans across all columns -->\n  <ng-container matColumnDef=\"expandedDetail\">\n    <td mat-cell *matCellDef=\"let element\" [attr.colspan]=\"columnsToDisplay.length\">\n      <div class=\"example-element-detail\"\n           [@detailExpand]=\"element == expandedElement ? 'expanded' : 'collapsed'\">\n        <div class=\"example-element-diagram\">\n          <div class=\"example-element-position\"> {{element.position}} </div>\n          <div class=\"example-element-symbol\"> {{element.symbol}} </div>\n          <div class=\"example-element-name\"> {{element.name}} </div>\n          <div class=\"example-element-weight\"> {{element.weight}} </div>\n        </div>\n        <div class=\"example-element-description\">\n          {{element.description}}\n          <span class=\"example-element-description-attribution\"> -- Wikipedia </span>\n        </div>\n      </div>\n    </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"columnsToDisplay\"></tr>\n  <tr mat-row *matRowDef=\"let element; columns: columnsToDisplay;\"\n      class=\"example-element-row\"\n      [class.example-expanded-row]=\"expandedElement === element\"\n      (click)=\"expandedElement = expandedElement === element ? null : element\">\n  </tr>\n  <tr mat-row *matRowDef=\"let row; columns: ['expandedDetail']\" class=\"example-detail-row\"></tr>\n</table>\n",
                animations: [
                    animations.trigger('detailExpand', [
                        animations.state('collapsed', animations.style({ height: '0px', minHeight: '0' })),
                        animations.state('expanded', animations.style({ height: '*' })),
                        animations.transition('expanded <=> collapsed', animations.animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
                    ]),
                ],
                styles: ["table {\n  width: 100%;\n}\n\ntr.example-detail-row {\n  height: 0;\n}\n\ntr.example-element-row:not(.example-expanded-row):hover {\n  background: #777;\n}\n\ntr.example-element-row:not(.example-expanded-row):active {\n  background: #efefef;\n}\n\n.example-element-row td {\n  border-bottom-width: 0;\n}\n\n.example-element-detail {\n  overflow: hidden;\n  display: flex;\n}\n\n.example-element-diagram {\n  min-width: 80px;\n  border: 2px solid black;\n  padding: 8px;\n  font-weight: lighter;\n  margin: 8px 0;\n  height: 104px;\n}\n\n.example-element-symbol {\n  font-weight: bold;\n  font-size: 40px;\n  line-height: normal;\n}\n\n.example-element-description {\n  padding: 16px;\n}\n\n.example-element-description-attribution {\n  opacity: 0.5;\n}\n"]
            })
        ], TableExpandableRowsExample);
        return TableExpandableRowsExample;
    }());
    var ELEMENT_DATA$c = [
        {
            position: 1,
            name: 'Hydrogen',
            weight: 1.0079,
            symbol: 'H',
            description: "Hydrogen is a chemical element with symbol H and atomic number 1. With a standard\n        atomic weight of 1.008, hydrogen is the lightest element on the periodic table."
        }, {
            position: 2,
            name: 'Helium',
            weight: 4.0026,
            symbol: 'He',
            description: "Helium is a chemical element with symbol He and atomic number 2. It is a\n        colorless, odorless, tasteless, non-toxic, inert, monatomic gas, the first in the noble gas\n        group in the periodic table. Its boiling point is the lowest among all the elements."
        }, {
            position: 3,
            name: 'Lithium',
            weight: 6.941,
            symbol: 'Li',
            description: "Lithium is a chemical element with symbol Li and atomic number 3. It is a soft,\n        silvery-white alkali metal. Under standard conditions, it is the lightest metal and the\n        lightest solid element."
        }, {
            position: 4,
            name: 'Beryllium',
            weight: 9.0122,
            symbol: 'Be',
            description: "Beryllium is a chemical element with symbol Be and atomic number 4. It is a\n        relatively rare element in the universe, usually occurring as a product of the spallation of\n        larger atomic nuclei that have collided with cosmic rays."
        }, {
            position: 5,
            name: 'Boron',
            weight: 10.811,
            symbol: 'B',
            description: "Boron is a chemical element with symbol B and atomic number 5. Produced entirely\n        by cosmic ray spallation and supernovae and not by stellar nucleosynthesis, it is a\n        low-abundance element in the Solar system and in the Earth's crust."
        }, {
            position: 6,
            name: 'Carbon',
            weight: 12.0107,
            symbol: 'C',
            description: "Carbon is a chemical element with symbol C and atomic number 6. It is nonmetallic\n        and tetravalent\u2014making four electrons available to form covalent chemical bonds. It belongs\n        to group 14 of the periodic table."
        }, {
            position: 7,
            name: 'Nitrogen',
            weight: 14.0067,
            symbol: 'N',
            description: "Nitrogen is a chemical element with symbol N and atomic number 7. It was first\n        discovered and isolated by Scottish physician Daniel Rutherford in 1772."
        }, {
            position: 8,
            name: 'Oxygen',
            weight: 15.9994,
            symbol: 'O',
            description: "Oxygen is a chemical element with symbol O and atomic number 8. It is a member of\n         the chalcogen group on the periodic table, a highly reactive nonmetal, and an oxidizing\n         agent that readily forms oxides with most elements as well as with other compounds."
        }, {
            position: 9,
            name: 'Fluorine',
            weight: 18.9984,
            symbol: 'F',
            description: "Fluorine is a chemical element with symbol F and atomic number 9. It is the\n        lightest halogen and exists as a highly toxic pale yellow diatomic gas at standard\n        conditions."
        }, {
            position: 10,
            name: 'Neon',
            weight: 20.1797,
            symbol: 'Ne',
            description: "Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.\n        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about\n        two-thirds the density of air."
        },
    ];

    var ELEMENT_DATA$d = [
        { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
        { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
        { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
        { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
        { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
        { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
        { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
        { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
        { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
        { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
    ];
    /**
     * @title Table with filtering
     */
    var TableFilteringExample = /** @class */ (function () {
        function TableFilteringExample() {
            this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
            this.dataSource = new table$1.MatTableDataSource(ELEMENT_DATA$d);
        }
        TableFilteringExample.prototype.applyFilter = function (filterValue) {
            this.dataSource.filter = filterValue.trim().toLowerCase();
        };
        TableFilteringExample = tslib_1.__decorate([
            core.Component({
                selector: 'table-filtering-example',
                template: "<mat-form-field>\n  <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n</mat-form-field>\n\n<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\n  <!-- Position Column -->\n  <ng-container matColumnDef=\"position\">\n    <th mat-header-cell *matHeaderCellDef> No. </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n  </ng-container>\n\n  <!-- Name Column -->\n  <ng-container matColumnDef=\"name\">\n    <th mat-header-cell *matHeaderCellDef> Name </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n  </ng-container>\n\n  <!-- Weight Column -->\n  <ng-container matColumnDef=\"weight\">\n    <th mat-header-cell *matHeaderCellDef> Weight </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\n  </ng-container>\n\n  <!-- Symbol Column -->\n  <ng-container matColumnDef=\"symbol\">\n    <th mat-header-cell *matHeaderCellDef> Symbol </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>\n",
                styles: ["/* Structure */\ntable {\n  width: 100%;\n}\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%;\n}\n"]
            })
        ], TableFilteringExample);
        return TableFilteringExample;
    }());

    /**
     * @title Footer row table
     */
    var TableFooterRowExample = /** @class */ (function () {
        function TableFooterRowExample() {
            this.displayedColumns = ['item', 'cost'];
            this.transactions = [
                { item: 'Beach ball', cost: 4 },
                { item: 'Towel', cost: 5 },
                { item: 'Frisbee', cost: 2 },
                { item: 'Sunscreen', cost: 4 },
                { item: 'Cooler', cost: 25 },
                { item: 'Swim suit', cost: 15 },
            ];
        }
        /** Gets the total cost of all transactions. */
        TableFooterRowExample.prototype.getTotalCost = function () {
            return this.transactions.map(function (t) { return t.cost; }).reduce(function (acc, value) { return acc + value; }, 0);
        };
        TableFooterRowExample = tslib_1.__decorate([
            core.Component({
                selector: 'table-footer-row-example',
                template: "<table mat-table [dataSource]=\"transactions\" class=\"mat-elevation-z8\">\n  <!-- Item Column -->\n  <ng-container matColumnDef=\"item\">\n    <th mat-header-cell *matHeaderCellDef> Item </th>\n    <td mat-cell *matCellDef=\"let transaction\"> {{transaction.item}} </td>\n    <td mat-footer-cell *matFooterCellDef> Total </td>\n  </ng-container>\n\n  <!-- Cost Column -->\n  <ng-container matColumnDef=\"cost\">\n    <th mat-header-cell *matHeaderCellDef> Cost </th>\n    <td mat-cell *matCellDef=\"let transaction\"> {{transaction.cost | currency}} </td>\n    <td mat-footer-cell *matFooterCellDef> {{getTotalCost() | currency}} </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  <tr mat-footer-row *matFooterRowDef=\"displayedColumns\"></tr>\n</table>\n",
                styles: ["table {\n  width: 100%;\n}\n\ntr.mat-footer-row {\n  font-weight: bold;\n}\n"]
            })
        ], TableFooterRowExample);
        return TableFooterRowExample;
    }());

    /**
     * @title Table retrieving data through HTTP
     */
    var TableHttpExample = /** @class */ (function () {
        function TableHttpExample(_httpClient) {
            this._httpClient = _httpClient;
            this.displayedColumns = ['created', 'state', 'number', 'title'];
            this.data = [];
            this.resultsLength = 0;
            this.isLoadingResults = true;
            this.isRateLimitReached = false;
        }
        TableHttpExample.prototype.ngAfterViewInit = function () {
            var _this = this;
            this.exampleDatabase = new ExampleHttpDatabase(this._httpClient);
            // If the user changes the sort order, reset back to the first page.
            this.sort.sortChange.subscribe(function () { return _this.paginator.pageIndex = 0; });
            rxjs.merge(this.sort.sortChange, this.paginator.page)
                .pipe(operators.startWith({}), operators.switchMap(function () {
                _this.isLoadingResults = true;
                return _this.exampleDatabase.getRepoIssues(_this.sort.active, _this.sort.direction, _this.paginator.pageIndex);
            }), operators.map(function (data) {
                // Flip flag to show that loading has finished.
                _this.isLoadingResults = false;
                _this.isRateLimitReached = false;
                _this.resultsLength = data.total_count;
                return data.items;
            }), operators.catchError(function () {
                _this.isLoadingResults = false;
                // Catch if the GitHub API has reached its rate limit. Return empty data.
                _this.isRateLimitReached = true;
                return rxjs.of([]);
            })).subscribe(function (data) { return _this.data = data; });
        };
        tslib_1.__decorate([
            core.ViewChild(paginator.MatPaginator, { static: false }),
            tslib_1.__metadata("design:type", paginator.MatPaginator)
        ], TableHttpExample.prototype, "paginator", void 0);
        tslib_1.__decorate([
            core.ViewChild(sort.MatSort, { static: false }),
            tslib_1.__metadata("design:type", sort.MatSort)
        ], TableHttpExample.prototype, "sort", void 0);
        TableHttpExample = tslib_1.__decorate([
            core.Component({
                selector: 'table-http-example',
                template: "<div class=\"example-container mat-elevation-z8\">\n  <div class=\"example-loading-shade\"\n       *ngIf=\"isLoadingResults || isRateLimitReached\">\n    <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\n    <div class=\"example-rate-limit-reached\" *ngIf=\"isRateLimitReached\">\n      GitHub's API rate limit has been reached. It will be reset in one minute.\n    </div>\n  </div>\n\n  <div class=\"example-table-container\">\n\n    <table mat-table [dataSource]=\"data\" class=\"example-table\"\n           matSort matSortActive=\"created\" matSortDisableClear matSortDirection=\"desc\">\n      <!-- Number Column -->\n      <ng-container matColumnDef=\"number\">\n        <th mat-header-cell *matHeaderCellDef>#</th>\n        <td mat-cell *matCellDef=\"let row\">{{row.number}}</td>\n      </ng-container>\n\n      <!-- Title Column -->\n      <ng-container matColumnDef=\"title\">\n        <th mat-header-cell *matHeaderCellDef>Title</th>\n        <td mat-cell *matCellDef=\"let row\">{{row.title}}</td>\n      </ng-container>\n\n      <!-- State Column -->\n      <ng-container matColumnDef=\"state\">\n        <th mat-header-cell *matHeaderCellDef>State</th>\n        <td mat-cell *matCellDef=\"let row\">{{row.state}}</td>\n      </ng-container>\n\n      <!-- Created Column -->\n      <ng-container matColumnDef=\"created\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header disableClear>\n          Created\n        </th>\n        <td mat-cell *matCellDef=\"let row\">{{row.created_at | date}}</td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n  </div>\n\n  <mat-paginator [length]=\"resultsLength\" [pageSize]=\"30\"></mat-paginator>\n</div>\n",
                styles: ["/* Structure */\n.example-container {\n  position: relative;\n  min-height: 200px;\n}\n\n.example-table-container {\n  position: relative;\n  max-height: 400px;\n  overflow: auto;\n}\n\ntable {\n  width: 100%;\n}\n\n.example-loading-shade {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 56px;\n  right: 0;\n  background: rgba(0, 0, 0, 0.15);\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.example-rate-limit-reached {\n  color: #980000;\n  max-width: 360px;\n  text-align: center;\n}\n\n/* Column Widths */\n.mat-column-number,\n.mat-column-state {\n  max-width: 64px;\n}\n\n.mat-column-created {\n  max-width: 124px;\n}\n"]
            }),
            tslib_1.__metadata("design:paramtypes", [http.HttpClient])
        ], TableHttpExample);
        return TableHttpExample;
    }());
    /** An example database that the data source uses to retrieve data for the table. */
    var ExampleHttpDatabase = /** @class */ (function () {
        function ExampleHttpDatabase(_httpClient) {
            this._httpClient = _httpClient;
        }
        ExampleHttpDatabase.prototype.getRepoIssues = function (sort, order, page) {
            var href = 'https://api.github.com/search/issues';
            var requestUrl = href + "?q=repo:angular/components&sort=" + sort + "&order=" + order + "&page=" + (page + 1);
            return this._httpClient.get(requestUrl);
        };
        return ExampleHttpDatabase;
    }());

    /**
     * @title Table with multiple header and footer rows
     */
    var TableMultipleHeaderFooterExample = /** @class */ (function () {
        function TableMultipleHeaderFooterExample() {
            this.displayedColumns = ['item', 'cost'];
            this.transactions = [
                { item: 'Beach ball', cost: 4 },
                { item: 'Towel', cost: 5 },
                { item: 'Frisbee', cost: 2 },
                { item: 'Sunscreen', cost: 4 },
                { item: 'Cooler', cost: 25 },
                { item: 'Swim suit', cost: 15 },
            ];
        }
        /** Gets the total cost of all transactions. */
        TableMultipleHeaderFooterExample.prototype.getTotalCost = function () {
            return this.transactions.map(function (t) { return t.cost; }).reduce(function (acc, value) { return acc + value; }, 0);
        };
        TableMultipleHeaderFooterExample = tslib_1.__decorate([
            core.Component({
                selector: 'table-multiple-header-footer-example',
                template: "<table mat-table [dataSource]=\"transactions\" class=\"mat-elevation-z8\">\n  <!-- Item Column -->\n  <ng-container matColumnDef=\"item\">\n    <th mat-header-cell *matHeaderCellDef> Item </th>\n    <td mat-cell *matCellDef=\"let transaction\"> {{transaction.item}} </td>\n    <td mat-footer-cell *matFooterCellDef> Total </td>\n  </ng-container>\n\n  <!-- Cost Column -->\n  <ng-container matColumnDef=\"cost\">\n    <th mat-header-cell *matHeaderCellDef> Cost </th>\n    <td mat-cell *matCellDef=\"let transaction\"> {{transaction.cost | currency}} </td>\n    <td mat-footer-cell *matFooterCellDef> {{getTotalCost() | currency}} </td>\n  </ng-container>\n\n  <!-- Item Description Column -->\n  <ng-container matColumnDef=\"item-description\">\n    <th mat-header-cell *matHeaderCellDef> Name of the item purchased </th>\n  </ng-container>\n\n  <!-- Cost Description Column -->\n  <ng-container matColumnDef=\"cost-description\">\n    <th mat-header-cell *matHeaderCellDef> Cost of the item in USD </th>\n  </ng-container>\n\n  <!-- Disclaimer column -->\n  <ng-container matColumnDef=\"disclaimer\">\n    <td mat-footer-cell *matFooterCellDef colspan=\"2\">\n      Please note that the cost of items displayed are completely and totally made up.\n    </td>\n  </ng-container>\n\n  <!-- The table will render two header rows, one data row per data object, and two footer rows. -->\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"\n      class=\"example-first-header-row\">\n  </tr>\n  <tr mat-header-row *matHeaderRowDef=\"['item-description', 'cost-description']\"\n      class=\"example-second-header-row\">\n  </tr>\n\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n  <tr mat-footer-row *matFooterRowDef=\"displayedColumns\" class=\"example-first-footer-row\"></tr>\n  <tr mat-footer-row *matFooterRowDef=\"['disclaimer']\" class=\"example-second-footer-row\"></tr>\n</table>\n",
                styles: ["table {\n  width: 100%;\n}\n\n.example-first-header-row th {\n  border-bottom: none;\n}\n\n.example-second-header-row {\n  font-style: italic;\n}\n\n.example-first-footer-row {\n  font-weight: bold;\n}\n\n.example-second-footer-row td {\n  color: #900000;\n}\n"]
            })
        ], TableMultipleHeaderFooterExample);
        return TableMultipleHeaderFooterExample;
    }());

    /** Constants used to fill up our data base. */
    var COLORS = [
        'maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple', 'fuchsia', 'lime', 'teal',
        'aqua', 'blue', 'navy', 'black', 'gray'
    ];
    var NAMES = [
        'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
        'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
    ];
    /**
     * @title Data table with sorting, pagination, and filtering.
     */
    var TableOverviewExample = /** @class */ (function () {
        function TableOverviewExample() {
            this.displayedColumns = ['id', 'name', 'progress', 'color'];
            // Create 100 users
            var users = Array.from({ length: 100 }, function (_, k) { return createNewUser(k + 1); });
            // Assign the data to the data source for the table to render
            this.dataSource = new table$1.MatTableDataSource(users);
        }
        TableOverviewExample.prototype.ngOnInit = function () {
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        };
        TableOverviewExample.prototype.applyFilter = function (filterValue) {
            this.dataSource.filter = filterValue.trim().toLowerCase();
            if (this.dataSource.paginator) {
                this.dataSource.paginator.firstPage();
            }
        };
        tslib_1.__decorate([
            core.ViewChild(paginator.MatPaginator, { static: true }),
            tslib_1.__metadata("design:type", paginator.MatPaginator)
        ], TableOverviewExample.prototype, "paginator", void 0);
        tslib_1.__decorate([
            core.ViewChild(sort.MatSort, { static: true }),
            tslib_1.__metadata("design:type", sort.MatSort)
        ], TableOverviewExample.prototype, "sort", void 0);
        TableOverviewExample = tslib_1.__decorate([
            core.Component({
                selector: 'table-overview-example',
                template: "<mat-form-field>\n  <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n</mat-form-field>\n\n<div class=\"mat-elevation-z8\">\n  <table mat-table [dataSource]=\"dataSource\" matSort>\n\n    <!-- ID Column -->\n    <ng-container matColumnDef=\"id\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> ID </th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.id}} </td>\n    </ng-container>\n\n    <!-- Progress Column -->\n    <ng-container matColumnDef=\"progress\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Progress </th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.progress}}% </td>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.name}} </td>\n    </ng-container>\n\n    <!-- Color Column -->\n    <ng-container matColumnDef=\"color\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Color </th>\n      <td mat-cell *matCellDef=\"let row\" [style.color]=\"row.color\"> {{row.color}} </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n    </tr>\n  </table>\n\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n</div>\n",
                styles: ["table {\n  width: 100%;\n}\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%;\n}\n\ntd, th {\n  width: 25%;\n}\n"]
            }),
            tslib_1.__metadata("design:paramtypes", [])
        ], TableOverviewExample);
        return TableOverviewExample;
    }());
    /** Builds and returns a new User. */
    function createNewUser(id) {
        var name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
            NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';
        return {
            id: id.toString(),
            name: name,
            progress: Math.round(Math.random() * 100).toString(),
            color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
        };
    }

    /**
     * @title Table with pagination
     */
    var TablePaginationExample = /** @class */ (function () {
        function TablePaginationExample() {
            this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
            this.dataSource = new table$1.MatTableDataSource(ELEMENT_DATA$e);
        }
        TablePaginationExample.prototype.ngOnInit = function () {
            this.dataSource.paginator = this.paginator;
        };
        tslib_1.__decorate([
            core.ViewChild(paginator.MatPaginator, { static: true }),
            tslib_1.__metadata("design:type", paginator.MatPaginator)
        ], TablePaginationExample.prototype, "paginator", void 0);
        TablePaginationExample = tslib_1.__decorate([
            core.Component({
                selector: 'table-pagination-example',
                template: "<div class=\"mat-elevation-z8\">\n  <table mat-table [dataSource]=\"dataSource\">\n\n    <!-- Position Column -->\n    <ng-container matColumnDef=\"position\">\n      <th mat-header-cell *matHeaderCellDef> No. </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell *matHeaderCellDef> Name </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n    </ng-container>\n\n    <!-- Weight Column -->\n    <ng-container matColumnDef=\"weight\">\n      <th mat-header-cell *matHeaderCellDef> Weight </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\n    </ng-container>\n\n    <!-- Symbol Column -->\n    <ng-container matColumnDef=\"symbol\">\n      <th mat-header-cell *matHeaderCellDef> Symbol </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n</div>\n",
                styles: ["table {\n  width: 100%;\n}\n"]
            })
        ], TablePaginationExample);
        return TablePaginationExample;
    }());
    var ELEMENT_DATA$e = [
        { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
        { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
        { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
        { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
        { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
        { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
        { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
        { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
        { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
        { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
        { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
        { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
        { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
        { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
        { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
        { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
        { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
        { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
        { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
        { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
    ];

    /**
     * @title Table showing each row context properties.
     */
    var TableRowContextExample = /** @class */ (function () {
        function TableRowContextExample() {
            this.displayedColumns = ['$implicit', 'index', 'count', 'first', 'last', 'even', 'odd'];
            this.data = ['one', 'two', 'three', 'four', 'five'];
        }
        TableRowContextExample = tslib_1.__decorate([
            core.Component({
                selector: 'table-row-context-example',
                template: "<table mat-table [dataSource]=\"data\" class=\"mat-elevation-z8\">\n  <!-- Index Column -->\n  <ng-container matColumnDef=\"$implicit\">\n    <th mat-header-cell *matHeaderCellDef> $implicit </th>\n    <td mat-cell *matCellDef=\"let data\"> {{data}} </td>\n  </ng-container>\n\n  <!-- Index Column -->\n  <ng-container matColumnDef=\"index\">\n    <th mat-header-cell *matHeaderCellDef> index </th>\n    <td mat-cell *matCellDef=\"let index = index\"> {{index}} </td>\n  </ng-container>\n\n  <!-- Index Column -->\n  <ng-container matColumnDef=\"count\">\n    <th mat-header-cell *matHeaderCellDef> count </th>\n    <td mat-cell *matCellDef=\"let count = count\"> {{count}} </td>\n  </ng-container>\n\n  <!-- Index Column -->\n  <ng-container matColumnDef=\"first\">\n    <th mat-header-cell *matHeaderCellDef> first </th>\n    <td mat-cell *matCellDef=\"let first = first\"> {{first}} </td>\n  </ng-container>\n\n  <!-- Index Column -->\n  <ng-container matColumnDef=\"last\">\n    <th mat-header-cell *matHeaderCellDef> last </th>\n    <td mat-cell *matCellDef=\"let last = last\"> {{last}} </td>\n  </ng-container>\n\n  <!-- Index Column -->\n  <ng-container matColumnDef=\"even\">\n    <th mat-header-cell *matHeaderCellDef> even </th>\n    <td mat-cell *matCellDef=\"let even = even\"> {{even}} </td>\n  </ng-container>\n\n  <!-- Index Column -->\n  <ng-container matColumnDef=\"odd\">\n    <th mat-header-cell *matHeaderCellDef> odd </th>\n    <td mat-cell *matCellDef=\"let odd = odd\"> {{odd}} </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>\n",
                styles: ["table {\n  width: 100%;\n}\n"]
            })
        ], TableRowContextExample);
        return TableRowContextExample;
    }());

    var ELEMENT_DATA$f = [
        { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
        { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
        { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
        { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
        { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
        { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
        { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
        { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
        { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
        { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
    ];
    /**
     * @title Table with selection
     */
    var TableSelectionExample = /** @class */ (function () {
        function TableSelectionExample() {
            this.displayedColumns = ['select', 'position', 'name', 'weight', 'symbol'];
            this.dataSource = new table$1.MatTableDataSource(ELEMENT_DATA$f);
            this.selection = new collections.SelectionModel(true, []);
        }
        /** Whether the number of selected elements matches the total number of rows. */
        TableSelectionExample.prototype.isAllSelected = function () {
            var numSelected = this.selection.selected.length;
            var numRows = this.dataSource.data.length;
            return numSelected === numRows;
        };
        /** Selects all rows if they are not all selected; otherwise clear selection. */
        TableSelectionExample.prototype.masterToggle = function () {
            var _this = this;
            this.isAllSelected() ?
                this.selection.clear() :
                this.dataSource.data.forEach(function (row) { return _this.selection.select(row); });
        };
        /** The label for the checkbox on the passed row */
        TableSelectionExample.prototype.checkboxLabel = function (row) {
            if (!row) {
                return (this.isAllSelected() ? 'select' : 'deselect') + " all";
            }
            return (this.selection.isSelected(row) ? 'deselect' : 'select') + " row " + (row.position + 1);
        };
        TableSelectionExample = tslib_1.__decorate([
            core.Component({
                selector: 'table-selection-example',
                template: "<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\n  <!-- Checkbox Column -->\n  <ng-container matColumnDef=\"select\">\n    <th mat-header-cell *matHeaderCellDef>\n      <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n                    [checked]=\"selection.hasValue() && isAllSelected()\"\n                    [indeterminate]=\"selection.hasValue() && !isAllSelected()\"\n                    [aria-label]=\"checkboxLabel()\">\n      </mat-checkbox>\n    </th>\n    <td mat-cell *matCellDef=\"let row\">\n      <mat-checkbox (click)=\"$event.stopPropagation()\"\n                    (change)=\"$event ? selection.toggle(row) : null\"\n                    [checked]=\"selection.isSelected(row)\"\n                    [aria-label]=\"checkboxLabel(row)\">\n      </mat-checkbox>\n    </td>\n  </ng-container>\n\n  <!-- Position Column -->\n  <ng-container matColumnDef=\"position\">\n    <th mat-header-cell *matHeaderCellDef> No. </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n  </ng-container>\n\n  <!-- Name Column -->\n  <ng-container matColumnDef=\"name\">\n    <th mat-header-cell *matHeaderCellDef> Name </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n  </ng-container>\n\n  <!-- Weight Column -->\n  <ng-container matColumnDef=\"weight\">\n    <th mat-header-cell *matHeaderCellDef> Weight </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\n  </ng-container>\n\n  <!-- Symbol Column -->\n  <ng-container matColumnDef=\"symbol\">\n    <th mat-header-cell *matHeaderCellDef> Symbol </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"\n      (click)=\"selection.toggle(row)\">\n  </tr>\n</table>\n",
                styles: ["table {\n  width: 100%;\n}\n"]
            })
        ], TableSelectionExample);
        return TableSelectionExample;
    }());

    var ELEMENT_DATA$g = [
        { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
        { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
        { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
        { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
        { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
        { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
        { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
        { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
        { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
        { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
    ];
    /**
     * @title Table with sorting
     */
    var TableSortingExample = /** @class */ (function () {
        function TableSortingExample() {
            this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
            this.dataSource = new table$1.MatTableDataSource(ELEMENT_DATA$g);
        }
        TableSortingExample.prototype.ngOnInit = function () {
            this.dataSource.sort = this.sort;
        };
        tslib_1.__decorate([
            core.ViewChild(sort.MatSort, { static: true }),
            tslib_1.__metadata("design:type", sort.MatSort)
        ], TableSortingExample.prototype, "sort", void 0);
        TableSortingExample = tslib_1.__decorate([
            core.Component({
                selector: 'table-sorting-example',
                template: "<table mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\n\n  <!-- Position Column -->\n  <ng-container matColumnDef=\"position\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> No. </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n  </ng-container>\n\n  <!-- Name Column -->\n  <ng-container matColumnDef=\"name\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n  </ng-container>\n\n  <!-- Weight Column -->\n  <ng-container matColumnDef=\"weight\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> Weight </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\n  </ng-container>\n\n  <!-- Symbol Column -->\n  <ng-container matColumnDef=\"symbol\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> Symbol </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>\n",
                styles: ["table {\n  width: 100%;\n}\n\nth.mat-sort-header-sorted {\n  color: black;\n}\n"]
            })
        ], TableSortingExample);
        return TableSortingExample;
    }());

    /**
     * @title Table with sticky columns
     */
    var TableStickyColumnsExample = /** @class */ (function () {
        function TableStickyColumnsExample() {
            this.displayedColumns = ['name', 'position', 'weight', 'symbol', 'position', 'weight', 'symbol', 'star'];
            this.dataSource = ELEMENT_DATA$h;
        }
        TableStickyColumnsExample = tslib_1.__decorate([
            core.Component({
                selector: 'table-sticky-columns-example',
                template: "<div class=\"example-container mat-elevation-z8\">\n  <table mat-table [dataSource]=\"dataSource\">\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"name\" sticky>\n      <th mat-header-cell *matHeaderCellDef> Name </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n    </ng-container>\n\n    <!-- Position Column -->\n    <ng-container matColumnDef=\"position\">\n      <th mat-header-cell *matHeaderCellDef> No. </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n    </ng-container>\n\n    <!-- Weight Column -->\n    <ng-container matColumnDef=\"weight\">\n      <th mat-header-cell *matHeaderCellDef> Weight </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\n    </ng-container>\n\n    <!-- Symbol Column -->\n    <ng-container matColumnDef=\"symbol\">\n      <th mat-header-cell *matHeaderCellDef> Symbol </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\n    </ng-container>\n\n    <!-- Star Column -->\n    <ng-container matColumnDef=\"star\" stickyEnd>\n      <th mat-header-cell *matHeaderCellDef></th>\n      <td mat-cell *matCellDef=\"let element\">\n        <mat-icon>more_vert</mat-icon>\n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n</div>\n",
                styles: [".example-container {\n  height: 400px;\n  width: 550px;\n  overflow: auto;\n}\n\ntable {\n  width: 800px;\n}\n\ntd.mat-column-star {\n  width: 20px;\n  padding-right: 8px;\n}\n\nth.mat-column-position, td.mat-column-position {\n  padding-left: 8px;\n}\n\n.mat-table-sticky:first-child {\n  border-right: 1px solid #e0e0e0;\n}\n\n.mat-table-sticky:last-child {\n  border-left: 1px solid #e0e0e0;\n}\n"]
            })
        ], TableStickyColumnsExample);
        return TableStickyColumnsExample;
    }());
    var ELEMENT_DATA$h = [
        { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
        { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
        { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
        { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
        { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
        { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
        { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
        { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
        { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
        { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
    ];

    /**
     * @title Flex-layout tables with toggle-able sticky headers, footers, and columns
     */
    var TableStickyComplexFlexExample = /** @class */ (function () {
        function TableStickyComplexFlexExample() {
            this.displayedColumns = [];
            this.dataSource = ELEMENT_DATA$i;
            this.tables = [0];
            this.displayedColumns.length = 24;
            this.displayedColumns.fill('filler');
            // The first two columns should be position and name; the last two columns: weight, symbol
            this.displayedColumns[0] = 'position';
            this.displayedColumns[1] = 'name';
            this.displayedColumns[22] = 'weight';
            this.displayedColumns[23] = 'symbol';
        }
        /** Whether the button toggle group contains the id as an active value. */
        TableStickyComplexFlexExample.prototype.isSticky = function (buttonToggleGroup, id) {
            return (buttonToggleGroup.value || []).indexOf(id) !== -1;
        };
        TableStickyComplexFlexExample = tslib_1.__decorate([
            core.Component({
                selector: 'table-sticky-complex-flex-example',
                template: "<div>\n  <button mat-raised-button (click)=\"tables.push(tables.length)\">Add table</button>\n  <button mat-raised-button (click)=\"tables.pop()\">Remove table</button>\n</div>\n\n<div>\n  Sticky Headers:\n  <mat-button-toggle-group multiple [value]=\"['header-1']\"\n                           #stickyHeaders=\"matButtonToggleGroup\"\n                           class=\"example-sticky-toggle-group\">\n    <mat-button-toggle value=\"header-1\"> Row 1 </mat-button-toggle>\n    <mat-button-toggle value=\"header-2\"> Row 2 </mat-button-toggle>\n  </mat-button-toggle-group>\n</div>\n\n<div>\n  Sticky Footers:\n  <mat-button-toggle-group multiple [value]=\"['footer-1']\"\n                           #stickyFooters=\"matButtonToggleGroup\"\n                           class=\"example-sticky-toggle-group\">\n    <mat-button-toggle value=\"footer-1\"> Row 1 </mat-button-toggle>\n    <mat-button-toggle value=\"footer-2\"> Row 2 </mat-button-toggle>\n  </mat-button-toggle-group>\n</div>\n\n<div>\n  Sticky Columns:\n  <mat-button-toggle-group multiple [value]=\"['position', 'symbol']\"\n                           #stickyColumns=\"matButtonToggleGroup\"\n                           class=\"example-sticky-toggle-group\">\n    <mat-button-toggle value=\"position\"> Position </mat-button-toggle>\n    <mat-button-toggle value=\"name\"> Name </mat-button-toggle>\n    <mat-button-toggle value=\"weight\"> Weight </mat-button-toggle>\n    <mat-button-toggle value=\"symbol\"> Symbol </mat-button-toggle>\n  </mat-button-toggle-group>\n</div>\n\n<div class=\"example-container mat-elevation-z8\">\n  <mat-table [dataSource]=\"dataSource\" *ngFor=\"let table of tables\">\n    <ng-container matColumnDef=\"position\" [sticky]=\"isSticky(stickyColumns, 'position')\">\n      <mat-header-cell *matHeaderCellDef> Position </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.position}} </mat-cell>\n      <mat-footer-cell *matFooterCellDef> Position Footer </mat-footer-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"name\" [sticky]=\"isSticky(stickyColumns, 'name')\">\n      <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\n      <mat-footer-cell *matFooterCellDef> Name Footer </mat-footer-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"weight\" [stickyEnd]=\"isSticky(stickyColumns, 'weight')\">\n      <mat-header-cell *matHeaderCellDef> Weight </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.weight}} </mat-cell>\n      <mat-footer-cell *matFooterCellDef> Weight Footer </mat-footer-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"symbol\" [stickyEnd]=\"isSticky(stickyColumns, 'symbol')\">\n      <mat-header-cell *matHeaderCellDef> Symbol </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.symbol}} </mat-cell>\n      <mat-footer-cell *matFooterCellDef> Symbol Footer </mat-footer-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"filler\">\n      <mat-header-cell *matHeaderCellDef> Filler header cell </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> Filler data cell </mat-cell>\n      <mat-footer-cell *matFooterCellDef> Filler footer cell </mat-footer-cell>\n    </ng-container>\n\n    <mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: isSticky(stickyHeaders, 'header-1')\"></mat-header-row>\n    <mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: isSticky(stickyHeaders, 'header-2')\"></mat-header-row>\n\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n\n    <mat-footer-row *matFooterRowDef=\"displayedColumns; sticky: isSticky(stickyFooters, 'footer-1')\"></mat-footer-row>\n    <mat-footer-row *matFooterRowDef=\"displayedColumns; sticky: isSticky(stickyFooters, 'footer-2')\"></mat-footer-row>\n  </mat-table>\n</div>\n",
                styles: [".example-container {\n  height: 400px;\n  overflow: auto;\n}\n\n.mat-table-sticky {\n  background: #59abfd;\n  opacity: 1;\n}\n\n.example-sticky-toggle-group {\n  margin: 8px;\n}\n\n.mat-column-filler {\n  padding: 0 8px;\n  font-size: 10px;\n  text-align: center;\n}\n\n.mat-header-cell, .mat-footer-cell, .mat-cell {\n  min-width: 80px;\n  box-sizing: border-box;\n}\n\n.mat-header-row, .mat-footer-row, .mat-row {\n  min-width: 1920px; /* 24 columns, 80px each */\n}\n"]
            }),
            tslib_1.__metadata("design:paramtypes", [])
        ], TableStickyComplexFlexExample);
        return TableStickyComplexFlexExample;
    }());
    var ELEMENT_DATA$i = [
        { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
        { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
        { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
        { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
        { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
        { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
        { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
        { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
        { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
        { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
    ];

    /**
     * @title Tables with toggle-able sticky headers, footers, and columns
     */
    var TableStickyComplexExample = /** @class */ (function () {
        function TableStickyComplexExample() {
            this.displayedColumns = [];
            this.dataSource = ELEMENT_DATA$j;
            this.tables = [0];
            this.displayedColumns.length = 24;
            this.displayedColumns.fill('filler');
            // The first two columns should be position and name; the last two columns: weight, symbol
            this.displayedColumns[0] = 'position';
            this.displayedColumns[1] = 'name';
            this.displayedColumns[22] = 'weight';
            this.displayedColumns[23] = 'symbol';
        }
        /** Whether the button toggle group contains the id as an active value. */
        TableStickyComplexExample.prototype.isSticky = function (buttonToggleGroup, id) {
            return (buttonToggleGroup.value || []).indexOf(id) !== -1;
        };
        TableStickyComplexExample = tslib_1.__decorate([
            core.Component({
                selector: 'table-sticky-complex-example',
                template: "<div>\n  <button mat-raised-button (click)=\"tables.push(tables.length)\">Add table</button>\n  <button mat-raised-button (click)=\"tables.pop()\">Remove table</button>\n</div>\n\n<div>\n  Sticky Headers:\n  <mat-button-toggle-group multiple [value]=\"['header-1']\"\n                           #stickyHeaders=\"matButtonToggleGroup\"\n                           class=\"example-sticky-toggle-group\">\n    <mat-button-toggle value=\"header-1\"> Row 1 </mat-button-toggle>\n    <mat-button-toggle value=\"header-2\"> Row 2 </mat-button-toggle>\n  </mat-button-toggle-group>\n</div>\n\n<div>\n  Sticky Footers:\n  <mat-button-toggle-group multiple [value]=\"['footer-1']\"\n                           #stickyFooters=\"matButtonToggleGroup\"\n                           class=\"example-sticky-toggle-group\">\n    <mat-button-toggle value=\"footer-1\"> Row 1 </mat-button-toggle>\n    <mat-button-toggle value=\"footer-2\"> Row 2 </mat-button-toggle>\n  </mat-button-toggle-group>\n</div>\n\n<div>\n  Sticky Columns:\n  <mat-button-toggle-group multiple [value]=\"['position', 'symbol']\"\n                           #stickyColumns=\"matButtonToggleGroup\"\n                           class=\"example-sticky-toggle-group\">\n    <mat-button-toggle value=\"position\"> Position </mat-button-toggle>\n    <mat-button-toggle value=\"name\"> Name </mat-button-toggle>\n    <mat-button-toggle value=\"weight\"> Weight </mat-button-toggle>\n    <mat-button-toggle value=\"symbol\"> Symbol </mat-button-toggle>\n  </mat-button-toggle-group>\n</div>\n\n<div class=\"example-container mat-elevation-z8\">\n  <table mat-table [dataSource]=\"dataSource\" *ngFor=\"let table of tables\">\n    <ng-container matColumnDef=\"position\" [sticky]=\"isSticky(stickyColumns, 'position')\">\n      <th mat-header-cell *matHeaderCellDef> Position </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n      <td mat-footer-cell *matFooterCellDef> Position Footer </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"name\" [sticky]=\"isSticky(stickyColumns, 'name')\">\n      <th mat-header-cell *matHeaderCellDef> Name </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n      <td mat-footer-cell *matFooterCellDef> Name Footer </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"weight\" [stickyEnd]=\"isSticky(stickyColumns, 'weight')\">\n      <th mat-header-cell *matHeaderCellDef> Weight </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\n      <td mat-footer-cell *matFooterCellDef> Weight Footer </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"symbol\" [stickyEnd]=\"isSticky(stickyColumns, 'symbol')\">\n      <th mat-header-cell *matHeaderCellDef> Symbol </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\n      <td mat-footer-cell *matFooterCellDef> Symbol Footer </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"filler\">\n      <th mat-header-cell *matHeaderCellDef> Filler header cell </th>\n      <td mat-cell *matCellDef=\"let element\"> Filler data cell </td>\n      <td mat-footer-cell *matFooterCellDef> Filler footer cell </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: isSticky(stickyHeaders, 'header-1')\"></tr>\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: isSticky(stickyHeaders, 'header-2')\"></tr>\n\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n    <tr mat-footer-row *matFooterRowDef=\"displayedColumns; sticky: isSticky(stickyFooters, 'footer-1')\"></tr>\n    <tr mat-footer-row *matFooterRowDef=\"displayedColumns; sticky: isSticky(stickyFooters, 'footer-2')\"></tr>\n  </table>\n</div>\n",
                styles: [".example-container {\n  height: 400px;\n  overflow: auto;\n}\n\n.mat-table-sticky {\n  background: #59abfd;\n  opacity: 1;\n}\n\n.example-sticky-toggle-group {\n  margin: 8px;\n}\n\n.mat-column-filler {\n  padding: 0 8px;\n  font-size: 10px;\n  text-align: center;\n}\n\n.mat-header-cell, .mat-footer-cell, .mat-cell {\n  min-width: 80px;\n  box-sizing: border-box;\n}\n"]
            }),
            tslib_1.__metadata("design:paramtypes", [])
        ], TableStickyComplexExample);
        return TableStickyComplexExample;
    }());
    var ELEMENT_DATA$j = [
        { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
        { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
        { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
        { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
        { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
        { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
        { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
        { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
        { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
        { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
    ];

    /**
     * @title Table with a sticky footer
     */
    var TableStickyFooterExample = /** @class */ (function () {
        function TableStickyFooterExample() {
            this.displayedColumns = ['item', 'cost'];
            this.transactions = [
                { item: 'Beach ball', cost: 4 },
                { item: 'Towel', cost: 5 },
                { item: 'Frisbee', cost: 2 },
                { item: 'Sunscreen', cost: 4 },
                { item: 'Cooler', cost: 25 },
                { item: 'Swim suit', cost: 15 },
            ];
        }
        /** Gets the total cost of all transactions. */
        TableStickyFooterExample.prototype.getTotalCost = function () {
            return this.transactions.map(function (t) { return t.cost; }).reduce(function (acc, value) { return acc + value; }, 0);
        };
        TableStickyFooterExample = tslib_1.__decorate([
            core.Component({
                selector: 'table-sticky-footer-example',
                template: "<div class=\"example-container mat-elevation-z8\">\n  <table mat-table [dataSource]=\"transactions\">\n    <!-- Item Column -->\n    <ng-container matColumnDef=\"item\">\n      <th mat-header-cell *matHeaderCellDef> Item </th>\n      <td mat-cell *matCellDef=\"let transaction\"> {{transaction.item}} </td>\n      <td mat-footer-cell *matFooterCellDef> Total </td>\n    </ng-container>\n\n    <!-- Cost Column -->\n    <ng-container matColumnDef=\"cost\">\n      <th mat-header-cell *matHeaderCellDef> Cost </th>\n      <td mat-cell *matCellDef=\"let transaction\"> {{transaction.cost | currency}} </td>\n      <td mat-footer-cell *matFooterCellDef> {{getTotalCost() | currency}} </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    <tr mat-footer-row *matFooterRowDef=\"displayedColumns; sticky: true\"></tr>\n  </table>\n</div>\n",
                styles: [".example-container {\n  height: 270px;\n  overflow: auto;\n}\n\ntable {\n  width: 100%;\n}\n\ntr.mat-footer-row {\n  font-weight: bold;\n}\n\n.mat-table-sticky {\n  border-top: 1px solid #e0e0e0;\n}\n"]
            })
        ], TableStickyFooterExample);
        return TableStickyFooterExample;
    }());

    /**
     * @title Table with sticky header
     */
    var TableStickyHeaderExample = /** @class */ (function () {
        function TableStickyHeaderExample() {
            this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
            this.dataSource = ELEMENT_DATA$k;
        }
        TableStickyHeaderExample = tslib_1.__decorate([
            core.Component({
                selector: 'table-sticky-header-example',
                template: "<div class=\"example-container mat-elevation-z8\">\n  <table mat-table [dataSource]=\"dataSource\">\n\n    <!-- Position Column -->\n    <ng-container matColumnDef=\"position\">\n      <th mat-header-cell *matHeaderCellDef> No. </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell *matHeaderCellDef> Name </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n    </ng-container>\n\n    <!-- Weight Column -->\n    <ng-container matColumnDef=\"weight\">\n      <th mat-header-cell *matHeaderCellDef> Weight </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\n    </ng-container>\n\n    <!-- Symbol Column -->\n    <ng-container matColumnDef=\"symbol\">\n      <th mat-header-cell *matHeaderCellDef> Symbol </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n</div>",
                styles: [".example-container {\n  height: 400px;\n  overflow: auto;\n}\n\ntable {\n  width: 100%;\n}\n"]
            })
        ], TableStickyHeaderExample);
        return TableStickyHeaderExample;
    }());
    var ELEMENT_DATA$k = [
        { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
        { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
        { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
        { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
        { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
        { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
        { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
        { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
        { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
        { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
    ];

    var ELEMENT_DATA$l = [
        { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
        { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
        { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
        { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
        { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
        { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
        { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
        { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
        { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
        { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
    ];
    /**
     * @title Use of 'mat-text-column' with various configurations of the interface.
     */
    var TableTextColumnAdvancedExample = /** @class */ (function () {
        function TableTextColumnAdvancedExample() {
            var _this = this;
            this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
            this.dataSource = new table$1.MatTableDataSource(ELEMENT_DATA$l);
            this.decimalPipe = new common.DecimalPipe('en-US');
            /** Data accessor function that transforms the weight value to have at most 2 decimal digits. */
            this.getWeight = function (data) { return _this.decimalPipe.transform(data.weight, '1.0-2'); };
        }
        TableTextColumnAdvancedExample = tslib_1.__decorate([
            core.Component({
                selector: 'table-text-column-advanced-example',
                template: "<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n  <mat-text-column name=\"position\" [headerText]=\"headerText\"></mat-text-column>\n\n  <!-- Change the header text. -->\n  <mat-text-column name=\"name\" headerText=\"Element\"></mat-text-column>\n\n  <!-- Provide a data accessor for getting the cell text values. -->\n  <mat-text-column name=\"weight\" [dataAccessor]=\"getWeight\"></mat-text-column>\n\n  <!-- Justify the content of the cells to the cell end. -->\n  <mat-text-column name=\"symbol\" justify=\"end\"></mat-text-column>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>\n",
                styles: ["table {\n  width: 100%;\n}\n"]
            })
        ], TableTextColumnAdvancedExample);
        return TableTextColumnAdvancedExample;
    }());

    var ELEMENT_DATA$m = [
        { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
        { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
        { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
        { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
        { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
        { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
        { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
        { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
        { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
        { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
    ];
    /**
     * @title Use of `mat-text-column` which can be used for simple columns that only need to display
     * a text value for the header and cells.
     */
    var TableTextColumnExample = /** @class */ (function () {
        function TableTextColumnExample() {
            this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
            this.dataSource = ELEMENT_DATA$m;
        }
        TableTextColumnExample = tslib_1.__decorate([
            core.Component({
                selector: 'table-text-column-example',
                template: "<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n  <mat-text-column name=\"position\"></mat-text-column>\n  <mat-text-column name=\"name\"></mat-text-column>\n  <mat-text-column name=\"weight\"></mat-text-column>\n  <mat-text-column name=\"symbol\"></mat-text-column>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>\n",
                styles: ["table {\n  width: 100%;\n}\n"]
            })
        ], TableTextColumnExample);
        return TableTextColumnExample;
    }());

    var ELEMENT_DATA$n = [
        { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
        { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
        { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
        { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
        { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
        { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
        { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
        { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
        { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
        { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
    ];
    /**
     * @title Table example that shows how to wrap a table component for definition and behavior reuse.
     */
    var TableWrappedExample = /** @class */ (function () {
        function TableWrappedExample() {
            this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
            this.dataSource = new table$1.MatTableDataSource(ELEMENT_DATA$n);
        }
        TableWrappedExample.prototype.ngOnInit = function () {
            this.dataSource.sort = this.sort;
        };
        tslib_1.__decorate([
            core.ViewChild('sort', { static: true }),
            tslib_1.__metadata("design:type", sort.MatSort)
        ], TableWrappedExample.prototype, "sort", void 0);
        TableWrappedExample = tslib_1.__decorate([
            core.Component({
                selector: 'table-wrapped-example',
                template: "<wrapper-table [dataSource]=\"dataSource\" [columns]=\"displayedColumns\"\n               matSort #sort=\"matSort\">\n  <!-- Custom column definition to be provided to the wrapper table. -->\n  <ng-container matColumnDef=\"name\">\n    <th mat-header-cell *matHeaderCellDef> Name </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n  </ng-container>\n\n  <!-- Custom row definitions to be provided to the wrapper table. -->\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns; \"></tr>\n</wrapper-table>\n",
                styles: ["table {\n  width: 100%;\n}\n"]
            })
        ], TableWrappedExample);
        return TableWrappedExample;
    }());
    /**
     * Table component that accepts column and row definitions in its content to be registered to the
     * table.
     */
    var WrapperTable = /** @class */ (function () {
        function WrapperTable() {
        }
        WrapperTable.prototype.ngAfterContentInit = function () {
            var _this = this;
            this.columnDefs.forEach(function (columnDef) { return _this.table.addColumnDef(columnDef); });
            this.rowDefs.forEach(function (rowDef) { return _this.table.addRowDef(rowDef); });
            this.headerRowDefs.forEach(function (headerRowDef) { return _this.table.addHeaderRowDef(headerRowDef); });
        };
        tslib_1.__decorate([
            core.ContentChildren(table$1.MatHeaderRowDef),
            tslib_1.__metadata("design:type", core.QueryList)
        ], WrapperTable.prototype, "headerRowDefs", void 0);
        tslib_1.__decorate([
            core.ContentChildren(table$1.MatRowDef),
            tslib_1.__metadata("design:type", core.QueryList)
        ], WrapperTable.prototype, "rowDefs", void 0);
        tslib_1.__decorate([
            core.ContentChildren(table$1.MatColumnDef),
            tslib_1.__metadata("design:type", core.QueryList)
        ], WrapperTable.prototype, "columnDefs", void 0);
        tslib_1.__decorate([
            core.ViewChild(table$1.MatTable, { static: true }),
            tslib_1.__metadata("design:type", table$1.MatTable)
        ], WrapperTable.prototype, "table", void 0);
        tslib_1.__decorate([
            core.Input(),
            tslib_1.__metadata("design:type", Array)
        ], WrapperTable.prototype, "columns", void 0);
        tslib_1.__decorate([
            core.Input(),
            tslib_1.__metadata("design:type", collections.DataSource)
        ], WrapperTable.prototype, "dataSource", void 0);
        WrapperTable = tslib_1.__decorate([
            core.Component({
                selector: 'wrapper-table',
                template: "<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n  <ng-content></ng-content>\n\n  <!-- Position Column -->\n  <ng-container matColumnDef=\"position\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> No. </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n  </ng-container>\n\n  <!-- Weight Column -->\n  <ng-container matColumnDef=\"weight\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> Weight </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\n  </ng-container>\n\n  <!-- Color Column -->\n  <ng-container matColumnDef=\"symbol\">\n    <th mat-header-cell *matHeaderCellDef> Symbol </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\n  </ng-container>\n</table>\n",
                styles: ["\n    table {\n      width: 100%;\n    }\n  "]
            })
        ], WrapperTable);
        return WrapperTable;
    }());

    /** @title Monitoring autofill state with cdkAutofill */
    var TextFieldAutofillDirectiveExample = /** @class */ (function () {
        function TextFieldAutofillDirectiveExample() {
        }
        TextFieldAutofillDirectiveExample = tslib_1.__decorate([
            core.Component({
                selector: 'text-field-autofill-directive-example',
                template: "<form>\n  <mat-form-field>\n    <mat-label>First name</mat-label>\n    <input matInput (cdkAutofill)=\"firstNameAutofilled = $event.isAutofilled\">\n    <mat-hint *ngIf=\"firstNameAutofilled\">Autofilled!</mat-hint>\n  </mat-form-field>\n  <mat-form-field>\n    <mat-label>Last name</mat-label>\n    <input matInput (cdkAutofill)=\"lastNameAutofilled = $event.isAutofilled\">\n    <mat-hint *ngIf=\"lastNameAutofilled\">Autofilled!</mat-hint>\n  </mat-form-field>\n  <button mat-raised-button>Submit</button>\n</form>\n",
                styles: ["mat-form-field {\n  margin-right: 12px;\n}\n"]
            })
        ], TextFieldAutofillDirectiveExample);
        return TextFieldAutofillDirectiveExample;
    }());

    /** @title Monitoring autofill state with AutofillMonitor */
    var TextFieldAutofillMonitorExample = /** @class */ (function () {
        function TextFieldAutofillMonitorExample(_autofill) {
            this._autofill = _autofill;
        }
        TextFieldAutofillMonitorExample.prototype.ngAfterViewInit = function () {
            var _this = this;
            this._autofill.monitor(this.firstName)
                .subscribe(function (e) { return _this.firstNameAutofilled = e.isAutofilled; });
            this._autofill.monitor(this.lastName)
                .subscribe(function (e) { return _this.lastNameAutofilled = e.isAutofilled; });
        };
        TextFieldAutofillMonitorExample.prototype.ngOnDestroy = function () {
            this._autofill.stopMonitoring(this.firstName);
            this._autofill.stopMonitoring(this.lastName);
        };
        tslib_1.__decorate([
            core.ViewChild('first', { read: core.ElementRef, static: false }),
            tslib_1.__metadata("design:type", core.ElementRef)
        ], TextFieldAutofillMonitorExample.prototype, "firstName", void 0);
        tslib_1.__decorate([
            core.ViewChild('last', { read: core.ElementRef, static: false }),
            tslib_1.__metadata("design:type", core.ElementRef)
        ], TextFieldAutofillMonitorExample.prototype, "lastName", void 0);
        TextFieldAutofillMonitorExample = tslib_1.__decorate([
            core.Component({
                selector: 'text-field-autofill-monitor-example',
                template: "<form>\n  <mat-form-field>\n    <mat-label>First name</mat-label>\n    <input matInput #first>\n    <mat-hint *ngIf=\"firstNameAutofilled\">Autofilled!</mat-hint>\n  </mat-form-field>\n  <mat-form-field>\n    <mat-label>Last name</mat-label>\n    <input matInput #last>\n    <mat-hint *ngIf=\"lastNameAutofilled\">Autofilled!</mat-hint>\n  </mat-form-field>\n  <button mat-raised-button>Submit</button>\n</form>\n",
                styles: ["mat-form-field {\n  margin-right: 12px;\n}\n"]
            }),
            tslib_1.__metadata("design:paramtypes", [textField.AutofillMonitor])
        ], TextFieldAutofillMonitorExample);
        return TextFieldAutofillMonitorExample;
    }());

    /** @title Auto-resizing textarea */
    var TextFieldAutosizeTextareaExample = /** @class */ (function () {
        function TextFieldAutosizeTextareaExample(_ngZone) {
            this._ngZone = _ngZone;
        }
        TextFieldAutosizeTextareaExample.prototype.triggerResize = function () {
            var _this = this;
            // Wait for changes to be applied, then trigger textarea resize.
            this._ngZone.onStable.pipe(operators.take(1))
                .subscribe(function () { return _this.autosize.resizeToFitContent(true); });
        };
        tslib_1.__decorate([
            core.ViewChild('autosize', { static: false }),
            tslib_1.__metadata("design:type", textField.CdkTextareaAutosize)
        ], TextFieldAutosizeTextareaExample.prototype, "autosize", void 0);
        TextFieldAutosizeTextareaExample = tslib_1.__decorate([
            core.Component({
                selector: 'text-field-autosize-textarea-example',
                template: "<mat-form-field>\n  <mat-label>Font size</mat-label>\n  <mat-select #fontSize value=\"16px\" (selectionChange)=\"triggerResize()\">\n    <mat-option value=\"10px\">10px</mat-option>\n    <mat-option value=\"12px\">12px</mat-option>\n    <mat-option value=\"14px\">14px</mat-option>\n    <mat-option value=\"16px\">16px</mat-option>\n    <mat-option value=\"18px\">18px</mat-option>\n    <mat-option value=\"20px\">20px</mat-option>\n  </mat-select>\n</mat-form-field>\n\n<mat-form-field [style.fontSize]=\"fontSize.value\">\n  <mat-label>Autosize textarea</mat-label>\n  <textarea matInput\n            cdkTextareaAutosize\n            #autosize=\"cdkTextareaAutosize\"\n            cdkAutosizeMinRows=\"1\"\n            cdkAutosizeMaxRows=\"5\"></textarea>\n</mat-form-field>\n",
                styles: ["mat-form-field {\n  margin-right: 12px;\n}\n"]
            }),
            tslib_1.__metadata("design:paramtypes", [core.NgZone])
        ], TextFieldAutosizeTextareaExample);
        return TextFieldAutosizeTextareaExample;
    }());

    /**
     * @title Multi-row toolbar
     */
    var ToolbarMultirowExample = /** @class */ (function () {
        function ToolbarMultirowExample() {
        }
        ToolbarMultirowExample = tslib_1.__decorate([
            core.Component({
                selector: 'toolbar-multirow-example',
                template: "<mat-toolbar color=\"primary\">\n  <mat-toolbar-row>\n    <span>Custom Toolbar</span>\n  </mat-toolbar-row>\n\n  <mat-toolbar-row>\n    <span>Second Line</span>\n    <span class=\"example-spacer\"></span>\n    <mat-icon class=\"example-icon\" aria-hidden=\"false\" aria-label=\"Example user verified icon\">verified_user</mat-icon>\n  </mat-toolbar-row>\n\n  <mat-toolbar-row>\n    <span>Third Line</span>\n    <span class=\"example-spacer\"></span>\n    <mat-icon class=\"example-icon\" aria-hidden=\"false\" aria-label=\"Example heart icon\">favorite</mat-icon>\n    <mat-icon class=\"example-icon\" aria-hidden=\"false\" aria-label=\"Example delete icon\">delete</mat-icon>\n  </mat-toolbar-row>\n</mat-toolbar>\n",
                styles: [".example-icon {\n  padding: 0 14px;\n}\n\n.example-spacer {\n  flex: 1 1 auto;\n}\n"]
            })
        ], ToolbarMultirowExample);
        return ToolbarMultirowExample;
    }());

    /**
     * @title Basic toolbar
     */
    var ToolbarOverviewExample = /** @class */ (function () {
        function ToolbarOverviewExample() {
        }
        ToolbarOverviewExample = tslib_1.__decorate([
            core.Component({
                selector: 'toolbar-overview-example',
                template: "<mat-toolbar>My App</mat-toolbar>\n",
                styles: ["/** No CSS for this example */\n"]
            })
        ], ToolbarOverviewExample);
        return ToolbarOverviewExample;
    }());

    /**
     * @title Tooltip that demonstrates auto-hiding when it clips out of its scrolling container.
     */
    var TooltipAutoHideExample = /** @class */ (function () {
        function TooltipAutoHideExample() {
            this.positionOptions = ['below', 'above', 'left', 'right'];
            this.position = new forms.FormControl(this.positionOptions[0]);
        }
        TooltipAutoHideExample = tslib_1.__decorate([
            core.Component({
                selector: 'tooltip-auto-hide-example',
                template: "<mat-form-field>\n  <mat-select placeholder=\"Tooltip position\" [formControl]=\"position\">\n    <mat-option *ngFor=\"let positionOption of positionOptions\" [value]=\"positionOption\">\n      {{positionOption}}\n    </mat-option>\n  </mat-select>\n</mat-form-field>\n\n<div class=\"example-container\" cdk-scrollable>\n  <button mat-raised-button #tooltip=\"matTooltip\"\n          matTooltip=\"Info about the action\"\n          [matTooltipPosition]=\"position.value\"\n          matTooltipHideDelay=\"100000\"\n          aria-label=\"Button that displays a tooltip that hides when scrolled out of the container\"\n          class=\"example-button\">\n    Action\n  </button>\n</div>\n",
                styles: [".example-button {\n  display: block;\n  margin: 80px auto 400px;\n}\n\n.example-container {\n  height: 200px;\n  overflow: auto;\n  border: 1px solid #ccc;\n}\n"]
            })
        ], TooltipAutoHideExample);
        return TooltipAutoHideExample;
    }());

    /**
     * @title Tooltip that can have a custom class applied.
     */
    var TooltipCustomClassExample = /** @class */ (function () {
        function TooltipCustomClassExample() {
        }
        TooltipCustomClassExample = tslib_1.__decorate([
            core.Component({
                selector: 'tooltip-custom-class-example',
                template: "<button mat-raised-button\n        matTooltip=\"Info about the action\"\n        matTooltipClass=\"example-tooltip-red\"\n        aria-label=\"Button that shows a red tooltip\"\n        class=\"example-button\">\n  Red-tooltip Action\n</button>\n",
                // Need to remove view encapsulation so that the custom tooltip style defined in
                // `tooltip-custom-class-example.css` will not be scoped to this component's view.
                encapsulation: core.ViewEncapsulation.None,
                styles: [".example-button {\n  margin-top: 16px;\n}\n\n.example-tooltip-red {\n  background: #b71c1c;\n}\n"]
            })
        ], TooltipCustomClassExample);
        return TooltipCustomClassExample;
    }());

    /**
     * @title Tooltip with a show and hide delay
     */
    var TooltipDelayExample = /** @class */ (function () {
        function TooltipDelayExample() {
            this.showDelay = new forms.FormControl(1000);
            this.hideDelay = new forms.FormControl(2000);
        }
        TooltipDelayExample = tslib_1.__decorate([
            core.Component({
                selector: 'tooltip-delay-example',
                template: "<mat-form-field class=\"example-user-input\">\n  <input matInput placeholder=\"Show delay (milliseconds)\"\n         type=\"number\"\n         aria-label=\"Adds a delay between hovering over the button and displaying the tooltip\"\n         [formControl]=\"showDelay\">\n</mat-form-field>\n\n<mat-form-field class=\"example-user-input\">\n  <input matInput placeholder=\"Hide delay (milliseconds)\"\n         type=\"number\"\n         aria-label=\"Adds a delay between hovering away from the button and hiding the tooltip\"\n         [formControl]=\"hideDelay\">\n</mat-form-field>\n\n<button mat-raised-button\n        matTooltip=\"Info about the action\"\n        [matTooltipShowDelay]=\"showDelay.value\"\n        [matTooltipHideDelay]=\"hideDelay.value\"\n        aria-label=\"Button that displays a tooltip with a customized delay in showing and hiding\">\n  Action\n</button>\n",
                styles: [".example-user-input {\n  display: block;\n  width: 150px;\n}\n"]
            })
        ], TooltipDelayExample);
        return TooltipDelayExample;
    }());

    /**
     * @title Tooltip that can be disabled
     */
    var TooltipDisabledExample = /** @class */ (function () {
        function TooltipDisabledExample() {
            this.disabled = new forms.FormControl(false);
        }
        TooltipDisabledExample = tslib_1.__decorate([
            core.Component({
                selector: 'tooltip-disabled-example',
                template: "<button mat-raised-button\n        matTooltip=\"Info about the action\"\n        [matTooltipDisabled]=\"disabled.value\"\n        aria-label=\"Button that displays a tooltip that can be programatically disabled\">\n  Action\n</button>\n\n<mat-checkbox [formControl]=\"disabled\" class=\"example-disabled-checkbox\">\n  Tooltip disabled\n</mat-checkbox>\n",
                styles: [".example-disabled-checkbox {\n  margin-left: 8px;\n}\n"]
            })
        ], TooltipDisabledExample);
        return TooltipDisabledExample;
    }());

    /**
     * @title Tooltip that can be manually shown/hidden.
     */
    var TooltipManualExample = /** @class */ (function () {
        function TooltipManualExample() {
        }
        TooltipManualExample = tslib_1.__decorate([
            core.Component({
                selector: 'tooltip-manual-example',
                template: "<div>\n  <span> Click the following buttons to... </span>\n  <button mat-button\n          (click)=\"tooltip.show()\"\n          aria-label=\"Show tooltip on the button at the end of this section\"\n          class=\"example-action-button\">\n    show\n  </button>\n  <button mat-button\n          (click)=\"tooltip.hide()\"\n          aria-label=\"Hide tooltip on the button at the end of this section\"\n          class=\"example-action-button\">\n    hide\n  </button>\n  <button mat-button\n          (click)=\"tooltip.toggle()\"\n          aria-label=\"Show/Hide tooltip on the button at the end of this section\"\n          class=\"example-action-button\">\n    toggle show/hide\n  </button>\n</div>\n\n<button mat-raised-button #tooltip=\"matTooltip\"\n        matTooltip=\"Info about the action\"\n        matTooltipPosition=\"right\"\n        aria-tooltip=\"Button that displays and hides a tooltip triggered by other buttons\">\n  Action\n</button>",
                styles: [".example-action-button {\n  margin-top: 16px;\n}\n"]
            })
        ], TooltipManualExample);
        return TooltipManualExample;
    }());

    /**
     * @title Tooltip with a changing message
     */
    var TooltipMessageExample = /** @class */ (function () {
        function TooltipMessageExample() {
            this.message = new forms.FormControl('Info about the action');
        }
        TooltipMessageExample = tslib_1.__decorate([
            core.Component({
                selector: 'tooltip-message-example',
                template: "<mat-form-field class=\"example-user-input\">\n  <input matInput placeholder=\"Tooltip message\" [formControl]=\"message\">\n</mat-form-field>\n\n<button mat-raised-button\n        [matTooltip]=\"message.value\"\n        aria-label=\"Button that displays a tooltip with a custom message\">\n  Action\n</button>\n",
                styles: [".example-user-input {\n  margin-right: 8px;\n}\n"]
            })
        ], TooltipMessageExample);
        return TooltipMessageExample;
    }());

    /** Custom options the configure the tooltip's default show/hide delays. */
    var myCustomTooltipDefaults = {
        showDelay: 1000,
        hideDelay: 1000,
        touchendHideDelay: 1000,
    };
    /**
     * @title Tooltip with a show and hide delay
     */
    var TooltipModifiedDefaultsExample = /** @class */ (function () {
        function TooltipModifiedDefaultsExample() {
        }
        TooltipModifiedDefaultsExample = tslib_1.__decorate([
            core.Component({
                selector: 'tooltip-modified-defaults-example',
                template: "<button mat-raised-button\n        matTooltip=\"By default, I delay\"\n        aria-label=\"Button that displays a tooltip that has custom delays through a default config\">\n  Button with delay-default tooltip\n</button>\n",
                providers: [
                    { provide: tooltip.MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: myCustomTooltipDefaults }
                ],
                styles: ["/** No CSS for this example */\n"]
            })
        ], TooltipModifiedDefaultsExample);
        return TooltipModifiedDefaultsExample;
    }());

    /**
     * @title Basic tooltip
     */
    var TooltipOverviewExample = /** @class */ (function () {
        function TooltipOverviewExample() {
        }
        TooltipOverviewExample = tslib_1.__decorate([
            core.Component({
                selector: 'tooltip-overview-example',
                template: "<button mat-raised-button\n        matTooltip=\"Info about the action\"\n        aria-label=\"Button that displays a tooltip when focused or hovered over\">\n  Action\n</button>\n",
                styles: ["/** No CSS for this example */\n"]
            })
        ], TooltipOverviewExample);
        return TooltipOverviewExample;
    }());

    /**
     * @title Tooltip with a custom position
     */
    var TooltipPositionExample = /** @class */ (function () {
        function TooltipPositionExample() {
            this.positionOptions = ['after', 'before', 'above', 'below', 'left', 'right'];
            this.position = new forms.FormControl(this.positionOptions[0]);
        }
        TooltipPositionExample = tslib_1.__decorate([
            core.Component({
                selector: 'tooltip-position-example',
                template: "<mat-form-field class=\"example-user-input\">\n  <mat-select placeholder=\"Tooltip position\" [formControl]=\"position\">\n    <mat-option *ngFor=\"let positionOption of positionOptions\" [value]=\"positionOption\">\n      {{positionOption}}\n    </mat-option>\n  </mat-select>\n</mat-form-field>\n\n<button mat-raised-button\n        matTooltip=\"Info about the action\"\n        [matTooltipPosition]=\"position.value\"\n        aria-label=\"Button that displays a tooltip in various positions\">\n  Action\n</button>\n",
                styles: [".example-user-input {\n  margin-right: 8px;\n}\n"]
            })
        ], TooltipPositionExample);
        return TooltipPositionExample;
    }());

    /**
     * Node for to-do item
     */
    var TodoItemNode = /** @class */ (function () {
        function TodoItemNode() {
        }
        return TodoItemNode;
    }());
    /** Flat to-do item node with expandable and level information */
    var TodoItemFlatNode = /** @class */ (function () {
        function TodoItemFlatNode() {
        }
        return TodoItemFlatNode;
    }());
    /**
     * The Json object for to-do list data.
     */
    var TREE_DATA$2 = {
        Groceries: {
            'Almond Meal flour': null,
            'Organic eggs': null,
            'Protein Powder': null,
            Fruits: {
                Apple: null,
                Berries: ['Blueberry', 'Raspberry'],
                Orange: null
            }
        },
        Reminders: [
            'Cook dinner',
            'Read the Material Design spec',
            'Upgrade Application to Angular'
        ]
    };
    /**
     * Checklist database, it can build a tree structured Json object.
     * Each node in Json object represents a to-do item or a category.
     * If a node is a category, it has children items and new items can be added under the category.
     */
    var ChecklistDatabase = /** @class */ (function () {
        function ChecklistDatabase() {
            this.dataChange = new rxjs.BehaviorSubject([]);
            this.initialize();
        }
        Object.defineProperty(ChecklistDatabase.prototype, "data", {
            get: function () { return this.dataChange.value; },
            enumerable: true,
            configurable: true
        });
        ChecklistDatabase.prototype.initialize = function () {
            // Build the tree nodes from Json object. The result is a list of `TodoItemNode` with nested
            //     file node as children.
            var data = this.buildFileTree(TREE_DATA$2, 0);
            // Notify the change.
            this.dataChange.next(data);
        };
        /**
         * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
         * The return value is the list of `TodoItemNode`.
         */
        ChecklistDatabase.prototype.buildFileTree = function (obj, level) {
            var _this = this;
            return Object.keys(obj).reduce(function (accumulator, key) {
                var value = obj[key];
                var node = new TodoItemNode();
                node.item = key;
                if (value != null) {
                    if (typeof value === 'object') {
                        node.children = _this.buildFileTree(value, level + 1);
                    }
                    else {
                        node.item = value;
                    }
                }
                return accumulator.concat(node);
            }, []);
        };
        /** Add an item to to-do list */
        ChecklistDatabase.prototype.insertItem = function (parent, name) {
            if (parent.children) {
                parent.children.push({ item: name });
                this.dataChange.next(this.data);
            }
        };
        ChecklistDatabase.prototype.updateItem = function (node, name) {
            node.item = name;
            this.dataChange.next(this.data);
        };
        ChecklistDatabase = tslib_1.__decorate([
            core.Injectable(),
            tslib_1.__metadata("design:paramtypes", [])
        ], ChecklistDatabase);
        return ChecklistDatabase;
    }());
    /**
     * @title Tree with checkboxes
     */
    var TreeChecklistExample = /** @class */ (function () {
        function TreeChecklistExample(_database) {
            var _this = this;
            this._database = _database;
            /** Map from flat node to nested node. This helps us finding the nested node to be modified */
            this.flatNodeMap = new Map();
            /** Map from nested node to flattened node. This helps us to keep the same object for selection */
            this.nestedNodeMap = new Map();
            /** A selected parent node to be inserted */
            this.selectedParent = null;
            /** The new item's name */
            this.newItemName = '';
            /** The selection for checklist */
            this.checklistSelection = new collections.SelectionModel(true /* multiple */);
            this.getLevel = function (node) { return node.level; };
            this.isExpandable = function (node) { return node.expandable; };
            this.getChildren = function (node) { return node.children; };
            this.hasChild = function (_, _nodeData) { return _nodeData.expandable; };
            this.hasNoContent = function (_, _nodeData) { return _nodeData.item === ''; };
            /**
             * Transformer to convert nested node to flat node. Record the nodes in maps for later use.
             */
            this.transformer = function (node, level) {
                var existingNode = _this.nestedNodeMap.get(node);
                var flatNode = existingNode && existingNode.item === node.item
                    ? existingNode
                    : new TodoItemFlatNode();
                flatNode.item = node.item;
                flatNode.level = level;
                flatNode.expandable = !!node.children;
                _this.flatNodeMap.set(flatNode, node);
                _this.nestedNodeMap.set(node, flatNode);
                return flatNode;
            };
            this.treeFlattener = new tree$1.MatTreeFlattener(this.transformer, this.getLevel, this.isExpandable, this.getChildren);
            this.treeControl = new tree.FlatTreeControl(this.getLevel, this.isExpandable);
            this.dataSource = new tree$1.MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
            _database.dataChange.subscribe(function (data) {
                _this.dataSource.data = data;
            });
        }
        /** Whether all the descendants of the node are selected. */
        TreeChecklistExample.prototype.descendantsAllSelected = function (node) {
            var _this = this;
            var descendants = this.treeControl.getDescendants(node);
            var descAllSelected = descendants.every(function (child) {
                return _this.checklistSelection.isSelected(child);
            });
            return descAllSelected;
        };
        /** Whether part of the descendants are selected */
        TreeChecklistExample.prototype.descendantsPartiallySelected = function (node) {
            var _this = this;
            var descendants = this.treeControl.getDescendants(node);
            var result = descendants.some(function (child) { return _this.checklistSelection.isSelected(child); });
            return result && !this.descendantsAllSelected(node);
        };
        /** Toggle the to-do item selection. Select/deselect all the descendants node */
        TreeChecklistExample.prototype.todoItemSelectionToggle = function (node) {
            var _this = this;
            var _a, _b;
            this.checklistSelection.toggle(node);
            var descendants = this.treeControl.getDescendants(node);
            this.checklistSelection.isSelected(node)
                ? (_a = this.checklistSelection).select.apply(_a, tslib_1.__spread(descendants)) : (_b = this.checklistSelection).deselect.apply(_b, tslib_1.__spread(descendants));
            // Force update for the parent
            descendants.every(function (child) {
                return _this.checklistSelection.isSelected(child);
            });
            this.checkAllParentsSelection(node);
        };
        /** Toggle a leaf to-do item selection. Check all the parents to see if they changed */
        TreeChecklistExample.prototype.todoLeafItemSelectionToggle = function (node) {
            this.checklistSelection.toggle(node);
            this.checkAllParentsSelection(node);
        };
        /* Checks all the parents when a leaf node is selected/unselected */
        TreeChecklistExample.prototype.checkAllParentsSelection = function (node) {
            var parent = this.getParentNode(node);
            while (parent) {
                this.checkRootNodeSelection(parent);
                parent = this.getParentNode(parent);
            }
        };
        /** Check root node checked state and change it accordingly */
        TreeChecklistExample.prototype.checkRootNodeSelection = function (node) {
            var _this = this;
            var nodeSelected = this.checklistSelection.isSelected(node);
            var descendants = this.treeControl.getDescendants(node);
            var descAllSelected = descendants.every(function (child) {
                return _this.checklistSelection.isSelected(child);
            });
            if (nodeSelected && !descAllSelected) {
                this.checklistSelection.deselect(node);
            }
            else if (!nodeSelected && descAllSelected) {
                this.checklistSelection.select(node);
            }
        };
        /* Get the parent node of a node */
        TreeChecklistExample.prototype.getParentNode = function (node) {
            var currentLevel = this.getLevel(node);
            if (currentLevel < 1) {
                return null;
            }
            var startIndex = this.treeControl.dataNodes.indexOf(node) - 1;
            for (var i = startIndex; i >= 0; i--) {
                var currentNode = this.treeControl.dataNodes[i];
                if (this.getLevel(currentNode) < currentLevel) {
                    return currentNode;
                }
            }
            return null;
        };
        /** Select the category so we can insert the new item. */
        TreeChecklistExample.prototype.addNewItem = function (node) {
            var parentNode = this.flatNodeMap.get(node);
            this._database.insertItem(parentNode, '');
            this.treeControl.expand(node);
        };
        /** Save the node to database */
        TreeChecklistExample.prototype.saveNode = function (node, itemValue) {
            var nestedNode = this.flatNodeMap.get(node);
            this._database.updateItem(nestedNode, itemValue);
        };
        TreeChecklistExample = tslib_1.__decorate([
            core.Component({
                selector: 'tree-checklist-example',
                template: "<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodeToggle matTreeNodePadding>\n    <button mat-icon-button disabled></button>\n    <mat-checkbox class=\"checklist-leaf-node\"\n                  [checked]=\"checklistSelection.isSelected(node)\"\n                  (change)=\"todoLeafItemSelectionToggle(node)\">{{node.item}}</mat-checkbox>\n  </mat-tree-node>\n\n  <mat-tree-node *matTreeNodeDef=\"let node; when: hasNoContent\" matTreeNodePadding>\n    <button mat-icon-button disabled></button>\n    <mat-form-field>\n      <input matInput #itemValue placeholder=\"New item...\">\n    </mat-form-field>\n    <button mat-button (click)=\"saveNode(node, itemValue.value)\">Save</button>\n  </mat-tree-node>\n\n  <mat-tree-node *matTreeNodeDef=\"let node; when: hasChild\" matTreeNodePadding>\n    <button mat-icon-button matTreeNodeToggle\n            [attr.aria-label]=\"'toggle ' + node.filename\">\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    <mat-checkbox [checked]=\"descendantsAllSelected(node)\"\n                  [indeterminate]=\"descendantsPartiallySelected(node)\"\n                  (change)=\"todoItemSelectionToggle(node)\">{{node.item}}</mat-checkbox>\n    <button mat-icon-button (click)=\"addNewItem(node)\"><mat-icon>add</mat-icon></button>\n  </mat-tree-node>\n</mat-tree>\n",
                providers: [ChecklistDatabase],
                styles: [""]
            }),
            tslib_1.__metadata("design:paramtypes", [ChecklistDatabase])
        ], TreeChecklistExample);
        return TreeChecklistExample;
    }());

    /** Flat node with expandable and level information */
    var DynamicFlatNode = /** @class */ (function () {
        function DynamicFlatNode(item, level, expandable, isLoading) {
            if (level === void 0) { level = 1; }
            if (expandable === void 0) { expandable = false; }
            if (isLoading === void 0) { isLoading = false; }
            this.item = item;
            this.level = level;
            this.expandable = expandable;
            this.isLoading = isLoading;
        }
        return DynamicFlatNode;
    }());
    /**
     * Database for dynamic data. When expanding a node in the tree, the data source will need to fetch
     * the descendants data from the database.
     */
    var DynamicDatabase = /** @class */ (function () {
        function DynamicDatabase() {
            this.dataMap = new Map([
                ['Fruits', ['Apple', 'Orange', 'Banana']],
                ['Vegetables', ['Tomato', 'Potato', 'Onion']],
                ['Apple', ['Fuji', 'Macintosh']],
                ['Onion', ['Yellow', 'White', 'Purple']]
            ]);
            this.rootLevelNodes = ['Fruits', 'Vegetables'];
        }
        /** Initial data from database */
        DynamicDatabase.prototype.initialData = function () {
            return this.rootLevelNodes.map(function (name) { return new DynamicFlatNode(name, 0, true); });
        };
        DynamicDatabase.prototype.getChildren = function (node) {
            return this.dataMap.get(node);
        };
        DynamicDatabase.prototype.isExpandable = function (node) {
            return this.dataMap.has(node);
        };
        return DynamicDatabase;
    }());
    /**
     * File database, it can build a tree structured Json object from string.
     * Each node in Json object represents a file or a directory. For a file, it has filename and type.
     * For a directory, it has filename and children (a list of files or directories).
     * The input will be a json object string, and the output is a list of `FileNode` with nested
     * structure.
     */
    var DynamicDataSource = /** @class */ (function () {
        function DynamicDataSource(_treeControl, _database) {
            this._treeControl = _treeControl;
            this._database = _database;
            this.dataChange = new rxjs.BehaviorSubject([]);
        }
        Object.defineProperty(DynamicDataSource.prototype, "data", {
            get: function () { return this.dataChange.value; },
            set: function (value) {
                this._treeControl.dataNodes = value;
                this.dataChange.next(value);
            },
            enumerable: true,
            configurable: true
        });
        DynamicDataSource.prototype.connect = function (collectionViewer) {
            var _this = this;
            this._treeControl.expansionModel.onChange.subscribe(function (change) {
                if (change.added ||
                    change.removed) {
                    _this.handleTreeControl(change);
                }
            });
            return rxjs.merge(collectionViewer.viewChange, this.dataChange).pipe(operators.map(function () { return _this.data; }));
        };
        /** Handle expand/collapse behaviors */
        DynamicDataSource.prototype.handleTreeControl = function (change) {
            var _this = this;
            if (change.added) {
                change.added.forEach(function (node) { return _this.toggleNode(node, true); });
            }
            if (change.removed) {
                change.removed.slice().reverse().forEach(function (node) { return _this.toggleNode(node, false); });
            }
        };
        /**
         * Toggle the node, remove from display list
         */
        DynamicDataSource.prototype.toggleNode = function (node, expand) {
            var _this = this;
            var children = this._database.getChildren(node.item);
            var index = this.data.indexOf(node);
            if (!children || index < 0) { // If no children, or cannot find the node, no op
                return;
            }
            node.isLoading = true;
            setTimeout(function () {
                var _a;
                if (expand) {
                    var nodes = children.map(function (name) {
                        return new DynamicFlatNode(name, node.level + 1, _this._database.isExpandable(name));
                    });
                    (_a = _this.data).splice.apply(_a, tslib_1.__spread([index + 1, 0], nodes));
                }
                else {
                    var count = 0;
                    for (var i = index + 1; i < _this.data.length
                        && _this.data[i].level > node.level; i++, count++) { }
                    _this.data.splice(index + 1, count);
                }
                // notify the change
                _this.dataChange.next(_this.data);
                node.isLoading = false;
            }, 1000);
        };
        DynamicDataSource = tslib_1.__decorate([
            core.Injectable(),
            tslib_1.__metadata("design:paramtypes", [tree.FlatTreeControl,
                DynamicDatabase])
        ], DynamicDataSource);
        return DynamicDataSource;
    }());
    /**
     * @title Tree with dynamic data
     */
    var TreeDynamicExample = /** @class */ (function () {
        function TreeDynamicExample(database) {
            this.getLevel = function (node) { return node.level; };
            this.isExpandable = function (node) { return node.expandable; };
            this.hasChild = function (_, _nodeData) { return _nodeData.expandable; };
            this.treeControl = new tree.FlatTreeControl(this.getLevel, this.isExpandable);
            this.dataSource = new DynamicDataSource(this.treeControl, database);
            this.dataSource.data = database.initialData();
        }
        TreeDynamicExample = tslib_1.__decorate([
            core.Component({
                selector: 'tree-dynamic-example',
                template: "<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodePadding>\n    <button mat-icon-button disabled></button>\n    {{node.item}}\n  </mat-tree-node>\n  <mat-tree-node *matTreeNodeDef=\"let node; when: hasChild\" matTreeNodePadding>\n    <button mat-icon-button\n            [attr.aria-label]=\"'toggle ' + node.filename\" matTreeNodeToggle>\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    {{node.item}}\n    <mat-progress-bar *ngIf=\"node.isLoading\"\n                      mode=\"indeterminate\"\n                      class=\"example-tree-progress-bar\"></mat-progress-bar>\n  </mat-tree-node>\n</mat-tree>\n",
                providers: [DynamicDatabase],
                styles: [".example-tree-progress-bar {\n  margin-left: 30px;\n}\n"]
            }),
            tslib_1.__metadata("design:paramtypes", [DynamicDatabase])
        ], TreeDynamicExample);
        return TreeDynamicExample;
    }());

    var TREE_DATA$3 = [
        {
            name: 'Fruit',
            children: [
                { name: 'Apple' },
                { name: 'Banana' },
                { name: 'Fruit loops' },
            ]
        }, {
            name: 'Vegetables',
            children: [
                {
                    name: 'Green',
                    children: [
                        { name: 'Broccoli' },
                        { name: 'Brussel sprouts' },
                    ]
                }, {
                    name: 'Orange',
                    children: [
                        { name: 'Pumpkins' },
                        { name: 'Carrots' },
                    ]
                },
            ]
        },
    ];
    /**
     * @title Tree with flat nodes
     */
    var TreeFlatOverviewExample = /** @class */ (function () {
        function TreeFlatOverviewExample() {
            this._transformer = function (node, level) {
                return {
                    expandable: !!node.children && node.children.length > 0,
                    name: node.name,
                    level: level,
                };
            };
            this.treeControl = new tree.FlatTreeControl(function (node) { return node.level; }, function (node) { return node.expandable; });
            this.treeFlattener = new tree$1.MatTreeFlattener(this._transformer, function (node) { return node.level; }, function (node) { return node.expandable; }, function (node) { return node.children; });
            this.dataSource = new tree$1.MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
            this.hasChild = function (_, node) { return node.expandable; };
            this.dataSource.data = TREE_DATA$3;
        }
        TreeFlatOverviewExample = tslib_1.__decorate([
            core.Component({
                selector: 'tree-flat-overview-example',
                template: "<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n  <!-- This is the tree node template for leaf nodes -->\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodePadding>\n    <!-- use a disabled button to provide padding for tree leaf -->\n    <button mat-icon-button disabled></button>\n    {{node.name}}\n  </mat-tree-node>\n  <!-- This is the tree node template for expandable nodes -->\n  <mat-tree-node *matTreeNodeDef=\"let node;when: hasChild\" matTreeNodePadding>\n    <button mat-icon-button matTreeNodeToggle\n            [attr.aria-label]=\"'toggle ' + node.name\">\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    {{node.name}}\n  </mat-tree-node>\n</mat-tree>\n",
                styles: [""]
            }),
            tslib_1.__metadata("design:paramtypes", [])
        ], TreeFlatOverviewExample);
        return TreeFlatOverviewExample;
    }());

    var LOAD_MORE = 'LOAD_MORE';
    /** Nested node */
    var LoadmoreNode = /** @class */ (function () {
        function LoadmoreNode(item, hasChildren, loadMoreParentItem) {
            if (hasChildren === void 0) { hasChildren = false; }
            if (loadMoreParentItem === void 0) { loadMoreParentItem = null; }
            this.item = item;
            this.hasChildren = hasChildren;
            this.loadMoreParentItem = loadMoreParentItem;
            this.childrenChange = new rxjs.BehaviorSubject([]);
        }
        Object.defineProperty(LoadmoreNode.prototype, "children", {
            get: function () {
                return this.childrenChange.value;
            },
            enumerable: true,
            configurable: true
        });
        return LoadmoreNode;
    }());
    /** Flat node with expandable and level information */
    var LoadmoreFlatNode = /** @class */ (function () {
        function LoadmoreFlatNode(item, level, expandable, loadMoreParentItem) {
            if (level === void 0) { level = 1; }
            if (expandable === void 0) { expandable = false; }
            if (loadMoreParentItem === void 0) { loadMoreParentItem = null; }
            this.item = item;
            this.level = level;
            this.expandable = expandable;
            this.loadMoreParentItem = loadMoreParentItem;
        }
        return LoadmoreFlatNode;
    }());
    /**
     * A database that only load part of the data initially. After user clicks on the `Load more`
     * button, more data will be loaded.
     */
    var LoadmoreDatabase = /** @class */ (function () {
        function LoadmoreDatabase() {
            this.batchNumber = 5;
            this.dataChange = new rxjs.BehaviorSubject([]);
            this.nodeMap = new Map();
            /** The data */
            this.rootLevelNodes = ['Vegetables', 'Fruits'];
            this.dataMap = new Map([
                ['Fruits', ['Apple', 'Orange', 'Banana']],
                ['Vegetables', ['Tomato', 'Potato', 'Onion']],
                ['Apple', ['Fuji', 'Macintosh']],
                ['Onion', ['Yellow', 'White', 'Purple', 'Green', 'Shallot', 'Sweet', 'Red', 'Leek']],
            ]);
        }
        LoadmoreDatabase.prototype.initialize = function () {
            var _this = this;
            var data = this.rootLevelNodes.map(function (name) { return _this._generateNode(name); });
            this.dataChange.next(data);
        };
        /** Expand a node whose children are not loaded */
        LoadmoreDatabase.prototype.loadMore = function (item, onlyFirstTime) {
            var _this = this;
            if (onlyFirstTime === void 0) { onlyFirstTime = false; }
            if (!this.nodeMap.has(item) || !this.dataMap.has(item)) {
                return;
            }
            var parent = this.nodeMap.get(item);
            var children = this.dataMap.get(item);
            if (onlyFirstTime && parent.children.length > 0) {
                return;
            }
            var newChildrenNumber = parent.children.length + this.batchNumber;
            var nodes = children.slice(0, newChildrenNumber)
                .map(function (name) { return _this._generateNode(name); });
            if (newChildrenNumber < children.length) {
                // Need a new load more node
                nodes.push(new LoadmoreNode(LOAD_MORE, false, item));
            }
            parent.childrenChange.next(nodes);
            this.dataChange.next(this.dataChange.value);
        };
        LoadmoreDatabase.prototype._generateNode = function (item) {
            if (this.nodeMap.has(item)) {
                return this.nodeMap.get(item);
            }
            var result = new LoadmoreNode(item, this.dataMap.has(item));
            this.nodeMap.set(item, result);
            return result;
        };
        LoadmoreDatabase = tslib_1.__decorate([
            core.Injectable()
        ], LoadmoreDatabase);
        return LoadmoreDatabase;
    }());
    /**
     * @title Tree with partially loaded data
     */
    var TreeLoadmoreExample = /** @class */ (function () {
        function TreeLoadmoreExample(_database) {
            var _this = this;
            this._database = _database;
            this.nodeMap = new Map();
            this.getChildren = function (node) { return node.childrenChange; };
            this.transformer = function (node, level) {
                var existingNode = _this.nodeMap.get(node.item);
                if (existingNode) {
                    return existingNode;
                }
                var newNode = new LoadmoreFlatNode(node.item, level, node.hasChildren, node.loadMoreParentItem);
                _this.nodeMap.set(node.item, newNode);
                return newNode;
            };
            this.getLevel = function (node) { return node.level; };
            this.isExpandable = function (node) { return node.expandable; };
            this.hasChild = function (_, _nodeData) { return _nodeData.expandable; };
            this.isLoadMore = function (_, _nodeData) { return _nodeData.item === LOAD_MORE; };
            this.treeFlattener = new tree$1.MatTreeFlattener(this.transformer, this.getLevel, this.isExpandable, this.getChildren);
            this.treeControl = new tree.FlatTreeControl(this.getLevel, this.isExpandable);
            this.dataSource = new tree$1.MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
            _database.dataChange.subscribe(function (data) {
                _this.dataSource.data = data;
            });
            _database.initialize();
        }
        /** Load more nodes from data source */
        TreeLoadmoreExample.prototype.loadMore = function (item) {
            this._database.loadMore(item);
        };
        TreeLoadmoreExample.prototype.loadChildren = function (node) {
            this._database.loadMore(node.item, true);
        };
        TreeLoadmoreExample = tslib_1.__decorate([
            core.Component({
                selector: 'tree-loadmore-example',
                template: "<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n  <!-- Leaf node -->\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodePadding>\n    <button mat-icon-button disabled></button>\n    {{node.item}}\n  </mat-tree-node>\n\n  <!-- expandable node -->\n  <mat-tree-node *matTreeNodeDef=\"let node; when: hasChild\" matTreeNodePadding>\n    <button mat-icon-button\n            [attr.aria-label]=\"'toggle ' + node.filename\"\n            (click)=\"loadChildren(node)\"\n            matTreeNodeToggle>\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    {{node.item}}\n  </mat-tree-node>\n\n  <mat-tree-node *matTreeNodeDef=\"let node; when: isLoadMore\">\n    <button mat-button (click)=\"loadMore(node.loadMoreParentItem)\">\n      Load more...\n    </button>\n  </mat-tree-node>\n</mat-tree>\n",
                providers: [LoadmoreDatabase],
                styles: [""]
            }),
            tslib_1.__metadata("design:paramtypes", [LoadmoreDatabase])
        ], TreeLoadmoreExample);
        return TreeLoadmoreExample;
    }());

    var TREE_DATA$4 = [
        {
            name: 'Fruit',
            children: [
                { name: 'Apple' },
                { name: 'Banana' },
                { name: 'Fruit loops' },
            ]
        }, {
            name: 'Vegetables',
            children: [
                {
                    name: 'Green',
                    children: [
                        { name: 'Broccoli' },
                        { name: 'Brussel sprouts' },
                    ]
                }, {
                    name: 'Orange',
                    children: [
                        { name: 'Pumpkins' },
                        { name: 'Carrots' },
                    ]
                },
            ]
        },
    ];
    /**
     * @title Tree with nested nodes
     */
    var TreeNestedOverviewExample = /** @class */ (function () {
        function TreeNestedOverviewExample() {
            this.treeControl = new tree.NestedTreeControl(function (node) { return node.children; });
            this.dataSource = new tree$1.MatTreeNestedDataSource();
            this.hasChild = function (_, node) { return !!node.children && node.children.length > 0; };
            this.dataSource.data = TREE_DATA$4;
        }
        TreeNestedOverviewExample = tslib_1.__decorate([
            core.Component({
                selector: 'tree-nested-overview-example',
                template: "<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\" class=\"example-tree\">\n  <!-- This is the tree node template for leaf nodes -->\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodeToggle>\n    <li class=\"mat-tree-node\">\n      <!-- use a disabled button to provide padding for tree leaf -->\n      <button mat-icon-button disabled></button>\n      {{node.name}}\n    </li>\n  </mat-tree-node>\n  <!-- This is the tree node template for expandable nodes -->\n  <mat-nested-tree-node *matTreeNodeDef=\"let node; when: hasChild\">\n    <li>\n      <div class=\"mat-tree-node\">\n        <button mat-icon-button matTreeNodeToggle\n                [attr.aria-label]=\"'toggle ' + node.name\">\n          <mat-icon class=\"mat-icon-rtl-mirror\">\n            {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n          </mat-icon>\n        </button>\n        {{node.name}}\n      </div>\n      <ul [class.example-tree-invisible]=\"!treeControl.isExpanded(node)\">\n        <ng-container matTreeNodeOutlet></ng-container>\n      </ul>\n    </li>\n  </mat-nested-tree-node>\n</mat-tree>\n",
                styles: [".example-tree-invisible {\n  display: none;\n}\n\n.example-tree ul,\n.example-tree li {\n  margin-top: 0;\n  margin-bottom: 0;\n  list-style-type: none;\n}\n"]
            }),
            tslib_1.__metadata("design:paramtypes", [])
        ], TreeNestedOverviewExample);
        return TreeNestedOverviewExample;
    }());

    /* tslint:disable */
    var EXAMPLE_COMPONENTS = { "autocomplete-auto-active-first-option": { "title": "Highlight the first autocomplete option", "component": AutocompleteAutoActiveFirstOptionExample, "additionalFiles": [], "selectorName": "" }, "autocomplete-display": { "title": "Display value autocomplete", "component": AutocompleteDisplayExample, "additionalFiles": [], "selectorName": "" }, "autocomplete-filter": { "title": "Filter autocomplete", "component": AutocompleteFilterExample, "additionalFiles": [], "selectorName": "" }, "autocomplete-optgroup": { "title": "Option groups autocomplete", "component": AutocompleteOptgroupExample, "additionalFiles": [], "selectorName": "" }, "autocomplete-overview": { "title": "Autocomplete overview", "component": AutocompleteOverviewExample, "additionalFiles": [], "selectorName": "" }, "autocomplete-plain-input": { "title": "Plain input autocomplete", "component": AutocompletePlainInputExample, "additionalFiles": [], "selectorName": "" }, "autocomplete-simple": { "title": "Simple autocomplete", "component": AutocompleteSimpleExample, "additionalFiles": [], "selectorName": "" }, "badge-overview": { "title": "Badge overview", "component": BadgeOverviewExample, "additionalFiles": [], "selectorName": "" }, "bottom-sheet-overview": { "title": "Bottom Sheet Overview", "component": BottomSheetOverviewExample, "additionalFiles": ["bottom-sheet-overview-example-sheet.html"], "selectorName": "BottomSheetOverviewExample, BottomSheetOverviewExampleSheet" }, "button-overview": { "title": "Basic buttons", "component": ButtonOverviewExample, "additionalFiles": [], "selectorName": "" }, "button-toggle-appearance": { "title": "Button toggle appearance", "component": ButtonToggleAppearanceExample, "additionalFiles": [], "selectorName": "" }, "button-toggle-exclusive": { "title": "Exclusive selection", "component": ButtonToggleExclusiveExample, "additionalFiles": [], "selectorName": "" }, "button-toggle-overview": { "title": "Basic button-toggles", "component": ButtonToggleOverviewExample, "additionalFiles": [], "selectorName": "" }, "button-types": { "title": "Button varieties", "component": ButtonTypesExample, "additionalFiles": [], "selectorName": "" }, "card-fancy": { "title": "Card with multiple sections", "component": CardFancyExample, "additionalFiles": [], "selectorName": "" }, "card-overview": { "title": "Basic cards", "component": CardOverviewExample, "additionalFiles": [], "selectorName": "" }, "cdk-custom-stepper-without-form": { "title": "A custom CDK stepper without a form", "component": CdkCustomStepperWithoutFormExample, "additionalFiles": ["./example-custom-stepper.html", "./example-custom-stepper.css"], "selectorName": "CdkCustomStepperWithoutFormExample, CustomStepper" }, "cdk-drag-drop-axis-lock": { "title": "Drag&Drop position locking", "component": CdkDragDropAxisLockExample, "additionalFiles": [], "selectorName": "" }, "cdk-drag-drop-boundary": { "title": "Drag&Drop boundary", "component": CdkDragDropBoundaryExample, "additionalFiles": [], "selectorName": "" }, "cdk-drag-drop-connected-sorting-group": { "title": "Drag&Drop connected sorting group", "component": CdkDragDropConnectedSortingGroupExample, "additionalFiles": [], "selectorName": "" }, "cdk-drag-drop-connected-sorting": { "title": "Drag&Drop connected sorting", "component": CdkDragDropConnectedSortingExample, "additionalFiles": [], "selectorName": "" }, "cdk-drag-drop-custom-placeholder": { "title": "Drag&Drop custom placeholer", "component": CdkDragDropCustomPlaceholderExample, "additionalFiles": [], "selectorName": "" }, "cdk-drag-drop-custom-preview": { "title": "Drag&Drop custom preview", "component": CdkDragDropCustomPreviewExample, "additionalFiles": [], "selectorName": "" }, "cdk-drag-drop-delay": { "title": "Delayed dragging", "component": CdkDragDropDelayExample, "additionalFiles": [], "selectorName": "" }, "cdk-drag-drop-disabled-sorting": { "title": "Drag&Drop disabled sorting", "component": CdkDragDropDisabledSortingExample, "additionalFiles": [], "selectorName": "" }, "cdk-drag-drop-disabled": { "title": "Drag&Drop disabled", "component": CdkDragDropDisabledExample, "additionalFiles": [], "selectorName": "" }, "cdk-drag-drop-enter-predicate": { "title": "Drag&Drop enter predicate", "component": CdkDragDropEnterPredicateExample, "additionalFiles": [], "selectorName": "" }, "cdk-drag-drop-free-drag-position": { "title": "Programmatically setting the free drag position", "component": CdkDragDropFreeDragPositionExample, "additionalFiles": [], "selectorName": "" }, "cdk-drag-drop-handle": { "title": "Drag&Drop with a handle", "component": CdkDragDropHandleExample, "additionalFiles": [], "selectorName": "" }, "cdk-drag-drop-horizontal-sorting": { "title": "Drag&Drop horizontal sorting", "component": CdkDragDropHorizontalSortingExample, "additionalFiles": [], "selectorName": "" }, "cdk-drag-drop-overview": { "title": "Basic Drag&Drop", "component": CdkDragDropOverviewExample, "additionalFiles": [], "selectorName": "" }, "cdk-drag-drop-root-element": { "title": "Drag&Drop with alternate root element", "component": CdkDragDropRootElementExample, "additionalFiles": [], "selectorName": "" }, "cdk-drag-drop-sorting": { "title": "Drag&Drop sorting", "component": CdkDragDropSortingExample, "additionalFiles": [], "selectorName": "" }, "cdk-platform-overview": { "title": "Platform overview", "component": CdkPlatformOverviewExample, "additionalFiles": [], "selectorName": "" }, "cdk-popover-edit-cdk-table-flex": { "title": "CDK Popover Edit on a flex cdk-table.", "component": CdkPopoverEditCdkTableFlexExample, "additionalFiles": [], "selectorName": "" }, "cdk-popover-edit-cdk-table": { "title": "CDK Popover Edit on a CDK data-table", "component": CdkPopoverEditCdkTableExample, "additionalFiles": [], "selectorName": "" }, "cdk-popover-edit-cell-span-vanilla-table": { "title": "CDK Popover Edit spanning multiple columns on an HTML data-table", "component": CdkPopoverEditCellSpanVanillaTableExample, "additionalFiles": [], "selectorName": "" }, "cdk-popover-edit-tab-out-vanilla-table": { "title": "CDK Popover Edit with spreadsheet-like configuration on an HTML data-table", "component": CdkPopoverEditTabOutVanillaTableExample, "additionalFiles": [], "selectorName": "" }, "cdk-popover-edit-vanilla-table": { "title": "CDK Popover Edit on an HTML data-table", "component": CdkPopoverEditVanillaTableExample, "additionalFiles": [], "selectorName": "" }, "cdk-portal-overview": { "title": "Portal overview", "component": CdkPortalOverviewExample, "additionalFiles": [], "selectorName": "CdkPortalOverviewExample, ComponentPortalExample" }, "cdk-table-basic-flex": { "title": "Basic use of `<cdk-table>` (uses display flex)", "component": CdkTableBasicFlexExample, "additionalFiles": [], "selectorName": "" }, "cdk-table-basic": { "title": "Basic CDK data-table", "component": CdkTableBasicExample, "additionalFiles": [], "selectorName": "" }, "cdk-tree-flat": { "title": "Tree with flat nodes", "component": CdkTreeFlatExample, "additionalFiles": [], "selectorName": "" }, "cdk-tree-nested": { "title": "Tree with nested nodes", "component": CdkTreeNestedExample, "additionalFiles": [], "selectorName": "" }, "cdk-virtual-scroll-context": { "title": "Virtual scroll context variables", "component": CdkVirtualScrollContextExample, "additionalFiles": [], "selectorName": "" }, "cdk-virtual-scroll-custom-strategy": { "title": "Virtual scroll with a custom strategy", "component": CdkVirtualScrollCustomStrategyExample, "additionalFiles": [], "selectorName": "" }, "cdk-virtual-scroll-data-source": { "title": "Virtual scroll with a custom data source", "component": CdkVirtualScrollDataSourceExample, "additionalFiles": [], "selectorName": "" }, "cdk-virtual-scroll-dl": { "title": "Virtual scrolling `<dl>`", "component": CdkVirtualScrollDlExample, "additionalFiles": [], "selectorName": "" }, "cdk-virtual-scroll-fixed-buffer": { "title": "Fixed size virtual scroll with custom buffer parameters", "component": CdkVirtualScrollFixedBufferExample, "additionalFiles": [], "selectorName": "" }, "cdk-virtual-scroll-horizontal": { "title": "Horizontal virtual scroll", "component": CdkVirtualScrollHorizontalExample, "additionalFiles": [], "selectorName": "" }, "cdk-virtual-scroll-overview": { "title": "Basic virtual scroll", "component": CdkVirtualScrollOverviewExample, "additionalFiles": [], "selectorName": "" }, "cdk-virtual-scroll-template-cache": { "title": "Virtual scroll with no template caching", "component": CdkVirtualScrollTemplateCacheExample, "additionalFiles": [], "selectorName": "" }, "checkbox-configurable": { "title": "Configurable checkbox", "component": CheckboxConfigurableExample, "additionalFiles": [], "selectorName": "" }, "checkbox-overview": { "title": "Basic checkboxes", "component": CheckboxOverviewExample, "additionalFiles": [], "selectorName": "" }, "chips-autocomplete": { "title": "Chips Autocomplete", "component": ChipsAutocompleteExample, "additionalFiles": [], "selectorName": "" }, "chips-drag-drop": { "title": "Chips Drag and Drop", "component": ChipsDragDropExample, "additionalFiles": [], "selectorName": "" }, "chips-input": { "title": "Chips with input", "component": ChipsInputExample, "additionalFiles": [], "selectorName": "" }, "chips-overview": { "title": "Basic chips", "component": ChipsOverviewExample, "additionalFiles": [], "selectorName": "" }, "chips-stacked": { "title": "Stacked chips", "component": ChipsStackedExample, "additionalFiles": [], "selectorName": "" }, "datepicker-api": { "title": "Datepicker open method", "component": DatepickerApiExample, "additionalFiles": [], "selectorName": "" }, "datepicker-color": { "title": "Datepicker palette colors", "component": DatepickerColorExample, "additionalFiles": [], "selectorName": "" }, "datepicker-custom-header": { "title": "Datepicker with custom calendar header", "component": DatepickerCustomHeaderExample, "additionalFiles": [], "selectorName": "DatepickerCustomHeaderExample, ExampleHeader" }, "datepicker-custom-icon": { "title": "Datepicker with custom icon", "component": DatepickerCustomIconExample, "additionalFiles": [], "selectorName": "" }, "datepicker-date-class": { "title": "Datepicker with custom date classes", "component": DatepickerDateClassExample, "additionalFiles": [], "selectorName": "" }, "datepicker-disabled": { "title": "Disabled datepicker", "component": DatepickerDisabledExample, "additionalFiles": [], "selectorName": "" }, "datepicker-events": { "title": "Datepicker input and change events", "component": DatepickerEventsExample, "additionalFiles": [], "selectorName": "" }, "datepicker-filter": { "title": "Datepicker with filter validation", "component": DatepickerFilterExample, "additionalFiles": [], "selectorName": "" }, "datepicker-formats": { "title": "Datepicker with custom formats", "component": DatepickerFormatsExample, "additionalFiles": [], "selectorName": "" }, "datepicker-locale": { "title": "Datepicker with different locale", "component": DatepickerLocaleExample, "additionalFiles": [], "selectorName": "" }, "datepicker-min-max": { "title": "Datepicker with min & max validation", "component": DatepickerMinMaxExample, "additionalFiles": [], "selectorName": "" }, "datepicker-moment": { "title": "Datepicker that uses Moment.js dates", "component": DatepickerMomentExample, "additionalFiles": [], "selectorName": "" }, "datepicker-overview": { "title": "Basic datepicker", "component": DatepickerOverviewExample, "additionalFiles": [], "selectorName": "" }, "datepicker-start-view": { "title": "Datepicker start date", "component": DatepickerStartViewExample, "additionalFiles": [], "selectorName": "" }, "datepicker-touch": { "title": "Datepicker touch UI", "component": DatepickerTouchExample, "additionalFiles": [], "selectorName": "" }, "datepicker-value": { "title": "Datepicker selected value", "component": DatepickerValueExample, "additionalFiles": [], "selectorName": "" }, "datepicker-views-selection": { "title": "Datepicker emulating a Year and month picker", "component": DatepickerViewsSelectionExample, "additionalFiles": [], "selectorName": "" }, "dialog-content": { "title": "Dialog with header, scrollable content and actions", "component": DialogContentExample, "additionalFiles": ["dialog-content-example-dialog.html"], "selectorName": "DialogContentExample, DialogContentExampleDialog" }, "dialog-data": { "title": "Injecting data when opening a dialog", "component": DialogDataExample, "additionalFiles": ["dialog-data-example-dialog.html"], "selectorName": "DialogDataExample, DialogDataExampleDialog" }, "dialog-elements": { "title": "Dialog elements", "component": DialogElementsExample, "additionalFiles": ["dialog-elements-example-dialog.html"], "selectorName": "DialogElementsExample, DialogElementsExampleDialog" }, "dialog-overview": { "title": "Dialog Overview", "component": DialogOverviewExample, "additionalFiles": ["dialog-overview-example-dialog.html"], "selectorName": "DialogOverviewExample, DialogOverviewExampleDialog" }, "divider-overview": { "title": "Basic divider", "component": DividerOverviewExample, "additionalFiles": [], "selectorName": "" }, "elevation-overview": { "title": "Elevation CSS classes", "component": ElevationOverviewExample, "additionalFiles": [], "selectorName": "" }, "expansion-expand-collapse-all": { "title": "Accordion with expand/collapse all toggles", "component": ExpansionExpandCollapseAllExample, "additionalFiles": [], "selectorName": "" }, "expansion-overview": { "title": "Basic expansion panel", "component": ExpansionOverviewExample, "additionalFiles": [], "selectorName": "" }, "expansion-steps": { "title": "Expansion panel as accordion", "component": ExpansionStepsExample, "additionalFiles": [], "selectorName": "" }, "focus-monitor-directives": { "title": "Monitoring focus with FocusMonitor", "component": FocusMonitorDirectivesExample, "additionalFiles": [], "selectorName": "" }, "focus-monitor-focus-via": { "title": "Focusing with a specific FocusOrigin", "component": FocusMonitorFocusViaExample, "additionalFiles": [], "selectorName": "" }, "focus-monitor-overview": { "title": "Monitoring focus with FocusMonitor", "component": FocusMonitorOverviewExample, "additionalFiles": [], "selectorName": "" }, "form-field-appearance": { "title": "Form field appearance variants", "component": FormFieldAppearanceExample, "additionalFiles": [], "selectorName": "" }, "form-field-custom-control": { "title": "Form field with custom telephone number input control.", "component": FormFieldCustomControlExample, "additionalFiles": ["example-tel-input-example.html", "example-tel-input-example.css"], "selectorName": "FormFieldCustomControlExample, MyTelInput" }, "form-field-error": { "title": "Form field with error messages", "component": FormFieldErrorExample, "additionalFiles": [], "selectorName": "" }, "form-field-hint": { "title": "Form field with hints", "component": FormFieldHintExample, "additionalFiles": [], "selectorName": "" }, "form-field-label": { "title": "Form field with label", "component": FormFieldLabelExample, "additionalFiles": [], "selectorName": "" }, "form-field-overview": { "title": "Simple form field", "component": FormFieldOverviewExample, "additionalFiles": [], "selectorName": "" }, "form-field-prefix-suffix": { "title": "Form field with prefix & suffix", "component": FormFieldPrefixSuffixExample, "additionalFiles": [], "selectorName": "" }, "form-field-theming": { "title": "Form field theming", "component": FormFieldThemingExample, "additionalFiles": [], "selectorName": "" }, "grid-list-dynamic": { "title": "Dynamic grid-list", "component": GridListDynamicExample, "additionalFiles": [], "selectorName": "" }, "grid-list-overview": { "title": "Basic grid-list", "component": GridListOverviewExample, "additionalFiles": [], "selectorName": "" }, "icon-overview": { "title": "Basic icons", "component": IconOverviewExample, "additionalFiles": [], "selectorName": "" }, "icon-svg": { "title": "SVG icons", "component": IconSvgExample, "additionalFiles": [], "selectorName": "" }, "input-clearable": { "title": "Input with a clear button", "component": InputClearableExample, "additionalFiles": [], "selectorName": "" }, "input-error-state-matcher": { "title": "Input with a custom ErrorStateMatcher", "component": InputErrorStateMatcherExample, "additionalFiles": [], "selectorName": "" }, "input-errors": { "title": "Input with error messages", "component": InputErrorsExample, "additionalFiles": [], "selectorName": "" }, "input-form": { "title": "Inputs in a form", "component": InputFormExample, "additionalFiles": [], "selectorName": "" }, "input-hint": { "title": "Input with hints", "component": InputHintExample, "additionalFiles": [], "selectorName": "" }, "input-overview": { "title": "Basic Inputs", "component": InputOverviewExample, "additionalFiles": [], "selectorName": "" }, "input-prefix-suffix": { "title": "Inputs with prefixes and suffixes", "component": InputPrefixSuffixExample, "additionalFiles": [], "selectorName": "" }, "list-overview": { "title": "Basic list", "component": ListOverviewExample, "additionalFiles": [], "selectorName": "" }, "list-sections": { "title": "List with sections", "component": ListSectionsExample, "additionalFiles": [], "selectorName": "" }, "list-selection": { "title": "List with selection", "component": ListSelectionExample, "additionalFiles": [], "selectorName": "" }, "menu-icons": { "title": "Menu with icons", "component": MenuIconsExample, "additionalFiles": [], "selectorName": "" }, "menu-overview": { "title": "Basic menu", "component": MenuOverviewExample, "additionalFiles": [], "selectorName": "" }, "menu-position": { "title": "Menu positioning", "component": MenuPositionExample, "additionalFiles": [], "selectorName": "" }, "nested-menu": { "title": "Nested menu", "component": NestedMenuExample, "additionalFiles": [], "selectorName": "" }, "paginator-configurable": { "title": "Configurable paginator", "component": PaginatorConfigurableExample, "additionalFiles": [], "selectorName": "" }, "paginator-overview": { "title": "Paginator", "component": PaginatorOverviewExample, "additionalFiles": [], "selectorName": "" }, "popover-edit-cell-span-mat-table": { "title": "Material Popover Edit spanning multiple columns on a Material data-table", "component": PopoverEditCellSpanMatTableExample, "additionalFiles": [], "selectorName": "" }, "popover-edit-mat-table-flex": { "title": "Material Popover Edit on a flex Material data-table", "component": PopoverEditMatTableFlexExample, "additionalFiles": [], "selectorName": "" }, "popover-edit-mat-table": { "title": "Material Popover Edit on a Material data-table", "component": PopoverEditMatTableExample, "additionalFiles": [], "selectorName": "" }, "popover-edit-tab-out-mat-table": { "title": "Material Popover Edit with spreadsheet-like configuration on a Material data-table", "component": PopoverEditTabOutMatTableExample, "additionalFiles": [], "selectorName": "" }, "progress-bar-buffer": { "title": "Buffer progress-bar", "component": ProgressBarBufferExample, "additionalFiles": [], "selectorName": "" }, "progress-bar-configurable": { "title": "Configurable progress-bar", "component": ProgressBarConfigurableExample, "additionalFiles": [], "selectorName": "" }, "progress-bar-determinate": { "title": "Determinate progress-bar", "component": ProgressBarDeterminateExample, "additionalFiles": [], "selectorName": "" }, "progress-bar-indeterminate": { "title": "Indeterminate progress-bar", "component": ProgressBarIndeterminateExample, "additionalFiles": [], "selectorName": "" }, "progress-bar-query": { "title": "Query progress-bar", "component": ProgressBarQueryExample, "additionalFiles": [], "selectorName": "" }, "progress-spinner-configurable": { "title": "Configurable progress spinner", "component": ProgressSpinnerConfigurableExample, "additionalFiles": [], "selectorName": "" }, "progress-spinner-overview": { "title": "Basic progress-spinner", "component": ProgressSpinnerOverviewExample, "additionalFiles": [], "selectorName": "" }, "radio-ng-model": { "title": "Radios with ngModel", "component": RadioNgModelExample, "additionalFiles": [], "selectorName": "" }, "radio-overview": { "title": "Basic radios", "component": RadioOverviewExample, "additionalFiles": [], "selectorName": "" }, "ripple-overview": { "title": "MatRipple basic usage", "component": RippleOverviewExample, "additionalFiles": [], "selectorName": "" }, "select-custom-trigger": { "title": "Select with custom trigger text", "component": SelectCustomTriggerExample, "additionalFiles": [], "selectorName": "" }, "select-disabled": { "title": "Disabled select", "component": SelectDisabledExample, "additionalFiles": [], "selectorName": "" }, "select-error-state-matcher": { "title": "Select with a custom ErrorStateMatcher", "component": SelectErrorStateMatcherExample, "additionalFiles": [], "selectorName": "" }, "select-form": { "title": "Select in a form", "component": SelectFormExample, "additionalFiles": [], "selectorName": "" }, "select-hint-error": { "title": "Select with form field features", "component": SelectHintErrorExample, "additionalFiles": [], "selectorName": "" }, "select-multiple": { "title": "Select with multiple selection", "component": SelectMultipleExample, "additionalFiles": [], "selectorName": "" }, "select-no-ripple": { "title": "Select with no option ripple", "component": SelectNoRippleExample, "additionalFiles": [], "selectorName": "" }, "select-optgroup": { "title": "Select with option groups", "component": SelectOptgroupExample, "additionalFiles": [], "selectorName": "" }, "select-overview": { "title": "Basic select", "component": SelectOverviewExample, "additionalFiles": [], "selectorName": "" }, "select-panel-class": { "title": "Select with custom panel styling", "component": SelectPanelClassExample, "additionalFiles": [], "selectorName": "" }, "select-reset": { "title": "Select with reset option", "component": SelectResetExample, "additionalFiles": [], "selectorName": "" }, "select-value-binding": { "title": "Select with 2-way value binding", "component": SelectValueBindingExample, "additionalFiles": [], "selectorName": "" }, "sidenav-autosize": { "title": "Autosize sidenav", "component": SidenavAutosizeExample, "additionalFiles": [], "selectorName": "" }, "sidenav-backdrop": { "title": "Drawer with explicit backdrop setting", "component": SidenavBackdropExample, "additionalFiles": [], "selectorName": "" }, "sidenav-disable-close": { "title": "Sidenav with custom escape and backdrop click behavior", "component": SidenavDisableCloseExample, "additionalFiles": [], "selectorName": "" }, "sidenav-drawer-overview": { "title": "Basic drawer", "component": SidenavDrawerOverviewExample, "additionalFiles": [], "selectorName": "" }, "sidenav-fixed": { "title": "Fixed sidenav", "component": SidenavFixedExample, "additionalFiles": [], "selectorName": "" }, "sidenav-mode": { "title": "Sidenav with configurable mode", "component": SidenavModeExample, "additionalFiles": [], "selectorName": "" }, "sidenav-open-close": { "title": "Sidenav open & close behavior", "component": SidenavOpenCloseExample, "additionalFiles": [], "selectorName": "" }, "sidenav-overview": { "title": "Basic sidenav", "component": SidenavOverviewExample, "additionalFiles": [], "selectorName": "" }, "sidenav-position": { "title": "Implicit main content with two sidenavs", "component": SidenavPositionExample, "additionalFiles": [], "selectorName": "" }, "sidenav-responsive": { "title": "Responsive sidenav", "component": SidenavResponsiveExample, "additionalFiles": [], "selectorName": "" }, "slide-toggle-configurable": { "title": "Configurable slide-toggle", "component": SlideToggleConfigurableExample, "additionalFiles": [], "selectorName": "" }, "slide-toggle-forms": { "title": "Slide-toggle with forms", "component": SlideToggleFormsExample, "additionalFiles": [], "selectorName": "" }, "slide-toggle-overview": { "title": "Basic slide-toggles", "component": SlideToggleOverviewExample, "additionalFiles": [], "selectorName": "" }, "slider-configurable": { "title": "Configurable slider", "component": SliderConfigurableExample, "additionalFiles": [], "selectorName": "" }, "slider-formatting": { "title": "Slider with custom thumb label formatting.", "component": SliderFormattingExample, "additionalFiles": [], "selectorName": "" }, "slider-overview": { "title": "Basic slider", "component": SliderOverviewExample, "additionalFiles": [], "selectorName": "" }, "snack-bar-component": { "title": "Snack-bar with a custom component", "component": SnackBarComponentExample, "additionalFiles": ["snack-bar-component-example-snack.html"], "selectorName": "SnackBarComponentExample, PizzaPartyComponent" }, "snack-bar-overview": { "title": "Basic snack-bar", "component": SnackBarOverviewExample, "additionalFiles": [], "selectorName": "" }, "snack-bar-position": { "title": "Snack-bar with configurable position", "component": SnackBarPositionExample, "additionalFiles": [], "selectorName": "" }, "sort-overview": { "title": "Sorting overview", "component": SortOverviewExample, "additionalFiles": [], "selectorName": "" }, "stepper-editable": { "title": "Stepper with editable steps", "component": StepperEditableExample, "additionalFiles": [], "selectorName": "" }, "stepper-errors": { "title": "Stepper that displays errors in the steps", "component": StepperErrorsExample, "additionalFiles": [], "selectorName": "" }, "stepper-label-position-bottom": { "title": "Stepper label bottom position", "component": StepperLabelPositionBottomExample, "additionalFiles": [], "selectorName": "" }, "stepper-optional": { "title": "Stepper with optional steps", "component": StepperOptionalExample, "additionalFiles": [], "selectorName": "" }, "stepper-overview": { "title": "Stepper overview", "component": StepperOverviewExample, "additionalFiles": [], "selectorName": "" }, "stepper-states": { "title": "Stepper with customized states", "component": StepperStatesExample, "additionalFiles": [], "selectorName": "" }, "stepper-vertical": { "title": "Stepper vertical", "component": StepperVerticalExample, "additionalFiles": [], "selectorName": "" }, "tab-group-align": { "title": "Tab group with aligned labels", "component": TabGroupAlignExample, "additionalFiles": [], "selectorName": "" }, "tab-group-animations": { "title": "Tab group animations", "component": TabGroupAnimationsExample, "additionalFiles": [], "selectorName": "" }, "tab-group-async": { "title": "Tab group with asynchronously loading tab contents", "component": TabGroupAsyncExample, "additionalFiles": [], "selectorName": "" }, "tab-group-basic": { "title": "Basic use of the tab group", "component": TabGroupBasicExample, "additionalFiles": [], "selectorName": "" }, "tab-group-custom-label": { "title": "Using tabs with a custom label template", "component": TabGroupCustomLabelExample, "additionalFiles": [], "selectorName": "" }, "tab-group-dynamic-height": { "title": "Tab group with dynamic height based on tab contents", "component": TabGroupDynamicHeightExample, "additionalFiles": [], "selectorName": "" }, "tab-group-dynamic": { "title": "Tab group with dynamically changing tabs", "component": TabGroupDynamicExample, "additionalFiles": [], "selectorName": "" }, "tab-group-header-below": { "title": "Tab group with the headers on the bottom", "component": TabGroupHeaderBelowExample, "additionalFiles": [], "selectorName": "" }, "tab-group-lazy-loaded": { "title": "Tab group where the tab content is loaded lazily (when activated)", "component": TabGroupLazyLoadedExample, "additionalFiles": [], "selectorName": "" }, "tab-group-stretched": { "title": "Tab group with stretched labels", "component": TabGroupStretchedExample, "additionalFiles": [], "selectorName": "" }, "tab-group-theme": { "title": "Customizing the theme options on the tab group", "component": TabGroupThemeExample, "additionalFiles": [], "selectorName": "" }, "tab-nav-bar-basic": { "title": "Basic use of the tab nav bar", "component": TabNavBarBasicExample, "additionalFiles": [], "selectorName": "" }, "table-basic-flex": { "title": "Basic use of `<mat-table>` (uses display flex)", "component": TableBasicFlexExample, "additionalFiles": [], "selectorName": "" }, "table-basic": { "title": "Basic use of `<table mat-table>`", "component": TableBasicExample, "additionalFiles": [], "selectorName": "" }, "table-dynamic-columns": { "title": "Table dynamically changing the columns displayed", "component": TableDynamicColumnsExample, "additionalFiles": [], "selectorName": "" }, "table-expandable-rows": { "title": "Table with expandable rows", "component": TableExpandableRowsExample, "additionalFiles": [], "selectorName": "" }, "table-filtering": { "title": "Table with filtering", "component": TableFilteringExample, "additionalFiles": [], "selectorName": "" }, "table-footer-row": { "title": "Footer row table", "component": TableFooterRowExample, "additionalFiles": [], "selectorName": "" }, "table-http": { "title": "Table retrieving data through HTTP", "component": TableHttpExample, "additionalFiles": [], "selectorName": "" }, "table-multiple-header-footer": { "title": "Table with multiple header and footer rows", "component": TableMultipleHeaderFooterExample, "additionalFiles": [], "selectorName": "" }, "table-overview": { "title": "Data table with sorting, pagination, and filtering.", "component": TableOverviewExample, "additionalFiles": [], "selectorName": "" }, "table-pagination": { "title": "Table with pagination", "component": TablePaginationExample, "additionalFiles": [], "selectorName": "" }, "table-row-context": { "title": "Table showing each row context properties.", "component": TableRowContextExample, "additionalFiles": [], "selectorName": "" }, "table-selection": { "title": "Table with selection", "component": TableSelectionExample, "additionalFiles": [], "selectorName": "" }, "table-sorting": { "title": "Table with sorting", "component": TableSortingExample, "additionalFiles": [], "selectorName": "" }, "table-sticky-columns": { "title": "Table with sticky columns", "component": TableStickyColumnsExample, "additionalFiles": [], "selectorName": "" }, "table-sticky-complex-flex": { "title": "Flex-layout tables with toggle-able sticky headers, footers, and columns", "component": TableStickyComplexFlexExample, "additionalFiles": [], "selectorName": "" }, "table-sticky-complex": { "title": "Tables with toggle-able sticky headers, footers, and columns", "component": TableStickyComplexExample, "additionalFiles": [], "selectorName": "" }, "table-sticky-footer": { "title": "Table with a sticky footer", "component": TableStickyFooterExample, "additionalFiles": [], "selectorName": "" }, "table-sticky-header": { "title": "Table with sticky header", "component": TableStickyHeaderExample, "additionalFiles": [], "selectorName": "" }, "table-text-column-advanced": { "title": "Use of 'mat-text-column' with various configurations of the interface.", "component": TableTextColumnAdvancedExample, "additionalFiles": [], "selectorName": "" }, "table-text-column": { "title": "Use of `mat-text-column` which can be used for simple columns that only need to display\na text value for the header and cells.", "component": TableTextColumnExample, "additionalFiles": [], "selectorName": "" }, "table-wrapped": { "title": "Table example that shows how to wrap a table component for definition and behavior reuse.", "component": TableWrappedExample, "additionalFiles": ["wrapper-table.html"], "selectorName": "TableWrappedExample, WrapperTable" }, "text-field-autofill-directive": { "title": "Monitoring autofill state with cdkAutofill", "component": TextFieldAutofillDirectiveExample, "additionalFiles": [], "selectorName": "" }, "text-field-autofill-monitor": { "title": "Monitoring autofill state with AutofillMonitor", "component": TextFieldAutofillMonitorExample, "additionalFiles": [], "selectorName": "" }, "text-field-autosize-textarea": { "title": "Auto-resizing textarea", "component": TextFieldAutosizeTextareaExample, "additionalFiles": [], "selectorName": "" }, "toolbar-multirow": { "title": "Multi-row toolbar", "component": ToolbarMultirowExample, "additionalFiles": [], "selectorName": "" }, "toolbar-overview": { "title": "Basic toolbar", "component": ToolbarOverviewExample, "additionalFiles": [], "selectorName": "" }, "tooltip-auto-hide": { "title": "Tooltip that demonstrates auto-hiding when it clips out of its scrolling container.", "component": TooltipAutoHideExample, "additionalFiles": [], "selectorName": "" }, "tooltip-custom-class": { "title": "Tooltip that can have a custom class applied.", "component": TooltipCustomClassExample, "additionalFiles": [], "selectorName": "" }, "tooltip-delay": { "title": "Tooltip with a show and hide delay", "component": TooltipDelayExample, "additionalFiles": [], "selectorName": "" }, "tooltip-disabled": { "title": "Tooltip that can be disabled", "component": TooltipDisabledExample, "additionalFiles": [], "selectorName": "" }, "tooltip-manual": { "title": "Tooltip that can be manually shown/hidden.", "component": TooltipManualExample, "additionalFiles": [], "selectorName": "" }, "tooltip-message": { "title": "Tooltip with a changing message", "component": TooltipMessageExample, "additionalFiles": [], "selectorName": "" }, "tooltip-modified-defaults": { "title": "Tooltip with a show and hide delay", "component": TooltipModifiedDefaultsExample, "additionalFiles": [], "selectorName": "" }, "tooltip-overview": { "title": "Basic tooltip", "component": TooltipOverviewExample, "additionalFiles": [], "selectorName": "" }, "tooltip-position": { "title": "Tooltip with a custom position", "component": TooltipPositionExample, "additionalFiles": [], "selectorName": "" }, "tree-checklist": { "title": "Tree with checkboxes", "component": TreeChecklistExample, "additionalFiles": [], "selectorName": "" }, "tree-dynamic": { "title": "Tree with dynamic data", "component": TreeDynamicExample, "additionalFiles": [], "selectorName": "" }, "tree-flat-overview": { "title": "Tree with flat nodes", "component": TreeFlatOverviewExample, "additionalFiles": [], "selectorName": "" }, "tree-loadmore": { "title": "Tree with partially loaded data", "component": TreeLoadmoreExample, "additionalFiles": [], "selectorName": "" }, "tree-nested-overview": { "title": "Tree with nested nodes", "component": TreeNestedOverviewExample, "additionalFiles": [], "selectorName": "" } };
    var EXAMPLE_LIST = [AutocompleteAutoActiveFirstOptionExample, AutocompleteDisplayExample, AutocompleteFilterExample, AutocompleteOptgroupExample, AutocompleteOverviewExample, AutocompletePlainInputExample, AutocompleteSimpleExample, BadgeOverviewExample, BottomSheetOverviewExample, BottomSheetOverviewExampleSheet, ButtonOverviewExample, ButtonToggleAppearanceExample, ButtonToggleExclusiveExample, ButtonToggleOverviewExample, ButtonTypesExample, CardFancyExample, CardOverviewExample, CdkCustomStepperWithoutFormExample, CustomStepper, CdkDragDropAxisLockExample, CdkDragDropBoundaryExample, CdkDragDropConnectedSortingGroupExample, CdkDragDropConnectedSortingExample, CdkDragDropCustomPlaceholderExample, CdkDragDropCustomPreviewExample, CdkDragDropDelayExample, CdkDragDropDisabledSortingExample, CdkDragDropDisabledExample, CdkDragDropEnterPredicateExample, CdkDragDropFreeDragPositionExample, CdkDragDropHandleExample, CdkDragDropHorizontalSortingExample, CdkDragDropOverviewExample, CdkDragDropRootElementExample, CdkDragDropSortingExample, CdkPlatformOverviewExample, CdkPopoverEditCdkTableFlexExample, CdkPopoverEditCdkTableExample, CdkPopoverEditCellSpanVanillaTableExample, CdkPopoverEditTabOutVanillaTableExample, CdkPopoverEditVanillaTableExample, CdkPortalOverviewExample, ComponentPortalExample, CdkTableBasicFlexExample, CdkTableBasicExample, CdkTreeFlatExample, CdkTreeNestedExample, CdkVirtualScrollContextExample, CdkVirtualScrollCustomStrategyExample, CdkVirtualScrollDataSourceExample, CdkVirtualScrollDlExample, CdkVirtualScrollFixedBufferExample, CdkVirtualScrollHorizontalExample, CdkVirtualScrollOverviewExample, CdkVirtualScrollTemplateCacheExample, CheckboxConfigurableExample, CheckboxOverviewExample, ChipsAutocompleteExample, ChipsDragDropExample, ChipsInputExample, ChipsOverviewExample, ChipsStackedExample, DatepickerApiExample, DatepickerColorExample, DatepickerCustomHeaderExample, ExampleHeader, DatepickerCustomIconExample, DatepickerDateClassExample, DatepickerDisabledExample, DatepickerEventsExample, DatepickerFilterExample, DatepickerFormatsExample, DatepickerLocaleExample, DatepickerMinMaxExample, DatepickerMomentExample, DatepickerOverviewExample, DatepickerStartViewExample, DatepickerTouchExample, DatepickerValueExample, DatepickerViewsSelectionExample, DialogContentExample, DialogContentExampleDialog, DialogDataExample, DialogDataExampleDialog, DialogElementsExample, DialogElementsExampleDialog, DialogOverviewExample, DialogOverviewExampleDialog, DividerOverviewExample, ElevationOverviewExample, ExpansionExpandCollapseAllExample, ExpansionOverviewExample, ExpansionStepsExample, FocusMonitorDirectivesExample, FocusMonitorFocusViaExample, FocusMonitorOverviewExample, FormFieldAppearanceExample, FormFieldCustomControlExample, MyTelInput, FormFieldErrorExample, FormFieldHintExample, FormFieldLabelExample, FormFieldOverviewExample, FormFieldPrefixSuffixExample, FormFieldThemingExample, GridListDynamicExample, GridListOverviewExample, IconOverviewExample, IconSvgExample, InputClearableExample, InputErrorStateMatcherExample, InputErrorsExample, InputFormExample, InputHintExample, InputOverviewExample, InputPrefixSuffixExample, ListOverviewExample, ListSectionsExample, ListSelectionExample, MenuIconsExample, MenuOverviewExample, MenuPositionExample, NestedMenuExample, PaginatorConfigurableExample, PaginatorOverviewExample, PopoverEditCellSpanMatTableExample, PopoverEditMatTableFlexExample, PopoverEditMatTableExample, PopoverEditTabOutMatTableExample, ProgressBarBufferExample, ProgressBarConfigurableExample, ProgressBarDeterminateExample, ProgressBarIndeterminateExample, ProgressBarQueryExample, ProgressSpinnerConfigurableExample, ProgressSpinnerOverviewExample, RadioNgModelExample, RadioOverviewExample, RippleOverviewExample, SelectCustomTriggerExample, SelectDisabledExample, SelectErrorStateMatcherExample, SelectFormExample, SelectHintErrorExample, SelectMultipleExample, SelectNoRippleExample, SelectOptgroupExample, SelectOverviewExample, SelectPanelClassExample, SelectResetExample, SelectValueBindingExample, SidenavAutosizeExample, SidenavBackdropExample, SidenavDisableCloseExample, SidenavDrawerOverviewExample, SidenavFixedExample, SidenavModeExample, SidenavOpenCloseExample, SidenavOverviewExample, SidenavPositionExample, SidenavResponsiveExample, SlideToggleConfigurableExample, SlideToggleFormsExample, SlideToggleOverviewExample, SliderConfigurableExample, SliderFormattingExample, SliderOverviewExample, SnackBarComponentExample, PizzaPartyComponent, SnackBarOverviewExample, SnackBarPositionExample, SortOverviewExample, StepperEditableExample, StepperErrorsExample, StepperLabelPositionBottomExample, StepperOptionalExample, StepperOverviewExample, StepperStatesExample, StepperVerticalExample, TabGroupAlignExample, TabGroupAnimationsExample, TabGroupAsyncExample, TabGroupBasicExample, TabGroupCustomLabelExample, TabGroupDynamicHeightExample, TabGroupDynamicExample, TabGroupHeaderBelowExample, TabGroupLazyLoadedExample, TabGroupStretchedExample, TabGroupThemeExample, TabNavBarBasicExample, TableBasicFlexExample, TableBasicExample, TableDynamicColumnsExample, TableExpandableRowsExample, TableFilteringExample, TableFooterRowExample, TableHttpExample, TableMultipleHeaderFooterExample, TableOverviewExample, TablePaginationExample, TableRowContextExample, TableSelectionExample, TableSortingExample, TableStickyColumnsExample, TableStickyComplexFlexExample, TableStickyComplexExample, TableStickyFooterExample, TableStickyHeaderExample, TableTextColumnAdvancedExample, TableTextColumnExample, TableWrappedExample, WrapperTable, TextFieldAutofillDirectiveExample, TextFieldAutofillMonitorExample, TextFieldAutosizeTextareaExample, ToolbarMultirowExample, ToolbarOverviewExample, TooltipAutoHideExample, TooltipCustomClassExample, TooltipDelayExample, TooltipDisabledExample, TooltipManualExample, TooltipMessageExample, TooltipModifiedDefaultsExample, TooltipOverviewExample, TooltipPositionExample, TreeChecklistExample, TreeDynamicExample, TreeFlatOverviewExample, TreeLoadmoreExample, TreeNestedOverviewExample];
    var ExampleModule = /** @class */ (function () {
        function ExampleModule() {
        }
        ExampleModule = tslib_1.__decorate([
            core.NgModule({
                declarations: EXAMPLE_LIST,
                entryComponents: EXAMPLE_LIST,
                imports: [
                    ExampleMaterialModule,
                    forms.FormsModule,
                    forms.ReactiveFormsModule,
                    common.CommonModule
                ]
            })
        ], ExampleModule);
        return ExampleModule;
    }());

    /**
     * Example data
     *   with information about Component name, selector, files used in example, and path to examples
     */
    var ExampleData = /** @class */ (function () {
        function ExampleData(example) {
            var _a;
            if (!example || !EXAMPLE_COMPONENTS.hasOwnProperty(example)) {
                return;
            }
            var exampleConfig = EXAMPLE_COMPONENTS[example];
            // TODO(tinayuangao): Do not hard-code extensions
            this.exampleFiles = ['html', 'ts', 'css'].map(function (extension) { return example + "-example." + extension; });
            this.selectorName = this.indexFilename = example + "-example";
            if (exampleConfig.additionalFiles) {
                (_a = this.exampleFiles).push.apply(_a, tslib_1.__spread(exampleConfig.additionalFiles));
            }
            var exampleName = example.replace(/(?:^\w|\b\w)/g, function (letter) { return letter.toUpperCase(); });
            this.description = exampleConfig.title || exampleName.replace(/[\-]+/g, ' ') + ' Example';
            this.componentName = exampleConfig.selectorName ||
                exampleName.replace(/[\-]+/g, '') + 'Example';
        }
        return ExampleData;
    }());

    /**
     * Generated bundle index. Do not edit.
     */

    exports.ɵangular_material_src_material_examples_examples_a = AutocompleteAutoActiveFirstOptionExample;
    exports.ɵangular_material_src_material_examples_examples_b = AutocompleteDisplayExample;
    exports.ɵangular_material_src_material_examples_examples_c = AutocompleteFilterExample;
    exports.ɵangular_material_src_material_examples_examples_d = AutocompleteOptgroupExample;
    exports.ɵangular_material_src_material_examples_examples_e = AutocompleteOverviewExample;
    exports.ɵangular_material_src_material_examples_examples_f = AutocompletePlainInputExample;
    exports.ɵangular_material_src_material_examples_examples_g = AutocompleteSimpleExample;
    exports.ɵangular_material_src_material_examples_examples_h = BadgeOverviewExample;
    exports.ɵangular_material_src_material_examples_examples_i = BottomSheetOverviewExample;
    exports.ɵangular_material_src_material_examples_examples_j = BottomSheetOverviewExampleSheet;
    exports.ɵangular_material_src_material_examples_examples_k = ButtonOverviewExample;
    exports.ɵangular_material_src_material_examples_examples_l = ButtonToggleAppearanceExample;
    exports.ɵangular_material_src_material_examples_examples_m = ButtonToggleExclusiveExample;
    exports.ɵangular_material_src_material_examples_examples_n = ButtonTypesExample;
    exports.ɵangular_material_src_material_examples_examples_o = CardOverviewExample;
    exports.ɵangular_material_src_material_examples_examples_p = CdkCustomStepperWithoutFormExample;
    exports.ɵangular_material_src_material_examples_examples_q = CustomStepper;
    exports.ɵangular_material_src_material_examples_examples_r = CdkDragDropAxisLockExample;
    exports.ɵangular_material_src_material_examples_examples_s = CdkDragDropBoundaryExample;
    exports.ɵangular_material_src_material_examples_examples_t = CdkDragDropConnectedSortingGroupExample;
    exports.ɵangular_material_src_material_examples_examples_u = CdkDragDropConnectedSortingExample;
    exports.ɵangular_material_src_material_examples_examples_v = CdkDragDropCustomPlaceholderExample;
    exports.ɵangular_material_src_material_examples_examples_w = CdkDragDropCustomPreviewExample;
    exports.ɵangular_material_src_material_examples_examples_x = CdkDragDropDelayExample;
    exports.ɵangular_material_src_material_examples_examples_y = CdkDragDropDisabledSortingExample;
    exports.ɵangular_material_src_material_examples_examples_z = CdkDragDropDisabledExample;
    exports.ɵangular_material_src_material_examples_examples_ba = CdkDragDropEnterPredicateExample;
    exports.ɵangular_material_src_material_examples_examples_bb = CdkDragDropFreeDragPositionExample;
    exports.ɵangular_material_src_material_examples_examples_bc = CdkDragDropHandleExample;
    exports.ɵangular_material_src_material_examples_examples_bd = CdkDragDropHorizontalSortingExample;
    exports.ɵangular_material_src_material_examples_examples_be = CdkDragDropOverviewExample;
    exports.ɵangular_material_src_material_examples_examples_bf = CdkDragDropRootElementExample;
    exports.ɵangular_material_src_material_examples_examples_bg = CdkDragDropSortingExample;
    exports.ɵangular_material_src_material_examples_examples_bh = CdkPlatformOverviewExample;
    exports.ɵangular_material_src_material_examples_examples_bi = CdkPopoverEditCdkTableFlexExample;
    exports.ɵangular_material_src_material_examples_examples_bj = CdkPopoverEditCdkTableExample;
    exports.ɵangular_material_src_material_examples_examples_bk = CdkPopoverEditCellSpanVanillaTableExample;
    exports.ɵangular_material_src_material_examples_examples_bl = CdkPopoverEditTabOutVanillaTableExample;
    exports.ɵangular_material_src_material_examples_examples_bm = CdkPopoverEditVanillaTableExample;
    exports.ɵangular_material_src_material_examples_examples_bn = CdkPortalOverviewExample;
    exports.ɵangular_material_src_material_examples_examples_bo = ComponentPortalExample;
    exports.ɵangular_material_src_material_examples_examples_bp = CdkTableBasicFlexExample;
    exports.ɵangular_material_src_material_examples_examples_bq = CdkTableBasicExample;
    exports.ɵangular_material_src_material_examples_examples_br = CdkTreeFlatExample;
    exports.ɵangular_material_src_material_examples_examples_bs = CdkTreeNestedExample;
    exports.ɵangular_material_src_material_examples_examples_bt = CdkVirtualScrollContextExample;
    exports.ɵangular_material_src_material_examples_examples_bv = CdkVirtualScrollCustomStrategyExample;
    exports.ɵangular_material_src_material_examples_examples_bu = CustomVirtualScrollStrategy;
    exports.ɵangular_material_src_material_examples_examples_bw = CdkVirtualScrollDataSourceExample;
    exports.ɵangular_material_src_material_examples_examples_bx = CdkVirtualScrollDlExample;
    exports.ɵangular_material_src_material_examples_examples_by = CdkVirtualScrollFixedBufferExample;
    exports.ɵangular_material_src_material_examples_examples_bz = CdkVirtualScrollHorizontalExample;
    exports.ɵangular_material_src_material_examples_examples_ca = CdkVirtualScrollOverviewExample;
    exports.ɵangular_material_src_material_examples_examples_cb = CdkVirtualScrollTemplateCacheExample;
    exports.ɵangular_material_src_material_examples_examples_cc = CheckboxConfigurableExample;
    exports.ɵangular_material_src_material_examples_examples_cd = CheckboxOverviewExample;
    exports.ɵangular_material_src_material_examples_examples_ce = ChipsAutocompleteExample;
    exports.ɵangular_material_src_material_examples_examples_cf = ChipsDragDropExample;
    exports.ɵangular_material_src_material_examples_examples_cg = ChipsInputExample;
    exports.ɵangular_material_src_material_examples_examples_ch = ChipsOverviewExample;
    exports.ɵangular_material_src_material_examples_examples_ci = ChipsStackedExample;
    exports.ɵangular_material_src_material_examples_examples_cj = DatepickerApiExample;
    exports.ɵangular_material_src_material_examples_examples_ck = DatepickerColorExample;
    exports.ɵangular_material_src_material_examples_examples_cl = DatepickerCustomHeaderExample;
    exports.ɵangular_material_src_material_examples_examples_cm = ExampleHeader;
    exports.ɵangular_material_src_material_examples_examples_cn = DatepickerCustomIconExample;
    exports.ɵangular_material_src_material_examples_examples_co = DatepickerDateClassExample;
    exports.ɵangular_material_src_material_examples_examples_cp = DatepickerDisabledExample;
    exports.ɵangular_material_src_material_examples_examples_cq = DatepickerEventsExample;
    exports.ɵangular_material_src_material_examples_examples_cr = DatepickerFilterExample;
    exports.ɵangular_material_src_material_examples_examples_ct = DatepickerFormatsExample;
    exports.ɵangular_material_src_material_examples_examples_cs = MY_FORMATS;
    exports.ɵangular_material_src_material_examples_examples_cu = DatepickerLocaleExample;
    exports.ɵangular_material_src_material_examples_examples_cv = DatepickerMinMaxExample;
    exports.ɵangular_material_src_material_examples_examples_cw = DatepickerMomentExample;
    exports.ɵangular_material_src_material_examples_examples_cx = DatepickerStartViewExample;
    exports.ɵangular_material_src_material_examples_examples_cy = DatepickerTouchExample;
    exports.ɵangular_material_src_material_examples_examples_cz = DatepickerValueExample;
    exports.ɵangular_material_src_material_examples_examples_db = DatepickerViewsSelectionExample;
    exports.ɵangular_material_src_material_examples_examples_da = MY_FORMATS$1;
    exports.ɵangular_material_src_material_examples_examples_dc = DialogContentExample;
    exports.ɵangular_material_src_material_examples_examples_dd = DialogContentExampleDialog;
    exports.ɵangular_material_src_material_examples_examples_de = DialogDataExample;
    exports.ɵangular_material_src_material_examples_examples_df = DialogDataExampleDialog;
    exports.ɵangular_material_src_material_examples_examples_dg = DialogElementsExample;
    exports.ɵangular_material_src_material_examples_examples_dh = DialogElementsExampleDialog;
    exports.ɵangular_material_src_material_examples_examples_di = DialogOverviewExample;
    exports.ɵangular_material_src_material_examples_examples_dj = DialogOverviewExampleDialog;
    exports.ɵangular_material_src_material_examples_examples_dk = DividerOverviewExample;
    exports.ɵangular_material_src_material_examples_examples_dl = ElevationOverviewExample;
    exports.ɵangular_material_src_material_examples_examples_dm = ExpansionExpandCollapseAllExample;
    exports.ɵangular_material_src_material_examples_examples_dn = ExpansionStepsExample;
    exports.ɵangular_material_src_material_examples_examples_do = FocusMonitorDirectivesExample;
    exports.ɵangular_material_src_material_examples_examples_dp = FocusMonitorFocusViaExample;
    exports.ɵangular_material_src_material_examples_examples_dq = FocusMonitorOverviewExample;
    exports.ɵangular_material_src_material_examples_examples_dr = FormFieldAppearanceExample;
    exports.ɵangular_material_src_material_examples_examples_ds = FormFieldCustomControlExample;
    exports.ɵangular_material_src_material_examples_examples_dt = MyTelInput;
    exports.ɵangular_material_src_material_examples_examples_du = FormFieldErrorExample;
    exports.ɵangular_material_src_material_examples_examples_dv = FormFieldHintExample;
    exports.ɵangular_material_src_material_examples_examples_dw = FormFieldLabelExample;
    exports.ɵangular_material_src_material_examples_examples_dx = FormFieldOverviewExample;
    exports.ɵangular_material_src_material_examples_examples_dy = FormFieldPrefixSuffixExample;
    exports.ɵangular_material_src_material_examples_examples_dz = FormFieldThemingExample;
    exports.ɵangular_material_src_material_examples_examples_ea = GridListDynamicExample;
    exports.ɵangular_material_src_material_examples_examples_eb = GridListOverviewExample;
    exports.ɵangular_material_src_material_examples_examples_ec = IconOverviewExample;
    exports.ɵangular_material_src_material_examples_examples_ed = IconSvgExample;
    exports.ɵangular_material_src_material_examples_examples_ee = InputClearableExample;
    exports.ɵangular_material_src_material_examples_examples_ef = InputErrorStateMatcherExample;
    exports.ɵangular_material_src_material_examples_examples_eg = InputErrorsExample;
    exports.ɵangular_material_src_material_examples_examples_eh = InputFormExample;
    exports.ɵangular_material_src_material_examples_examples_ei = InputHintExample;
    exports.ɵangular_material_src_material_examples_examples_ej = InputOverviewExample;
    exports.ɵangular_material_src_material_examples_examples_ek = InputPrefixSuffixExample;
    exports.ɵangular_material_src_material_examples_examples_el = ListSectionsExample;
    exports.ɵangular_material_src_material_examples_examples_em = ListSelectionExample;
    exports.ɵangular_material_src_material_examples_examples_iy = ExampleMaterialModule;
    exports.ɵangular_material_src_material_examples_examples_en = MenuIconsExample;
    exports.ɵangular_material_src_material_examples_examples_eo = MenuOverviewExample;
    exports.ɵangular_material_src_material_examples_examples_ep = MenuPositionExample;
    exports.ɵangular_material_src_material_examples_examples_eq = NestedMenuExample;
    exports.ɵangular_material_src_material_examples_examples_er = PaginatorConfigurableExample;
    exports.ɵangular_material_src_material_examples_examples_es = PaginatorOverviewExample;
    exports.ɵangular_material_src_material_examples_examples_et = PopoverEditCellSpanMatTableExample;
    exports.ɵangular_material_src_material_examples_examples_eu = PopoverEditMatTableFlexExample;
    exports.ɵangular_material_src_material_examples_examples_ev = PopoverEditMatTableExample;
    exports.ɵangular_material_src_material_examples_examples_ew = PopoverEditTabOutMatTableExample;
    exports.ɵangular_material_src_material_examples_examples_ex = ProgressBarBufferExample;
    exports.ɵangular_material_src_material_examples_examples_ey = ProgressBarConfigurableExample;
    exports.ɵangular_material_src_material_examples_examples_ez = ProgressBarDeterminateExample;
    exports.ɵangular_material_src_material_examples_examples_fa = ProgressBarIndeterminateExample;
    exports.ɵangular_material_src_material_examples_examples_fb = ProgressBarQueryExample;
    exports.ɵangular_material_src_material_examples_examples_fc = ProgressSpinnerConfigurableExample;
    exports.ɵangular_material_src_material_examples_examples_fd = ProgressSpinnerOverviewExample;
    exports.ɵangular_material_src_material_examples_examples_fe = RadioNgModelExample;
    exports.ɵangular_material_src_material_examples_examples_ff = RadioOverviewExample;
    exports.ɵangular_material_src_material_examples_examples_fg = RippleOverviewExample;
    exports.ɵangular_material_src_material_examples_examples_fh = SelectCustomTriggerExample;
    exports.ɵangular_material_src_material_examples_examples_fi = SelectDisabledExample;
    exports.ɵangular_material_src_material_examples_examples_fj = SelectErrorStateMatcherExample;
    exports.ɵangular_material_src_material_examples_examples_fk = SelectFormExample;
    exports.ɵangular_material_src_material_examples_examples_fl = SelectHintErrorExample;
    exports.ɵangular_material_src_material_examples_examples_fm = SelectMultipleExample;
    exports.ɵangular_material_src_material_examples_examples_fn = SelectNoRippleExample;
    exports.ɵangular_material_src_material_examples_examples_fo = SelectOptgroupExample;
    exports.ɵangular_material_src_material_examples_examples_fp = SelectOverviewExample;
    exports.ɵangular_material_src_material_examples_examples_fq = SelectPanelClassExample;
    exports.ɵangular_material_src_material_examples_examples_fr = SelectResetExample;
    exports.ɵangular_material_src_material_examples_examples_fs = SelectValueBindingExample;
    exports.ɵangular_material_src_material_examples_examples_ft = SidenavAutosizeExample;
    exports.ɵangular_material_src_material_examples_examples_fu = SidenavBackdropExample;
    exports.ɵangular_material_src_material_examples_examples_fv = SidenavDisableCloseExample;
    exports.ɵangular_material_src_material_examples_examples_fw = SidenavDrawerOverviewExample;
    exports.ɵangular_material_src_material_examples_examples_fx = SidenavFixedExample;
    exports.ɵangular_material_src_material_examples_examples_fy = SidenavModeExample;
    exports.ɵangular_material_src_material_examples_examples_fz = SidenavOpenCloseExample;
    exports.ɵangular_material_src_material_examples_examples_ga = SidenavOverviewExample;
    exports.ɵangular_material_src_material_examples_examples_gb = SidenavPositionExample;
    exports.ɵangular_material_src_material_examples_examples_gc = SidenavResponsiveExample;
    exports.ɵangular_material_src_material_examples_examples_gd = SlideToggleConfigurableExample;
    exports.ɵangular_material_src_material_examples_examples_ge = SlideToggleFormsExample;
    exports.ɵangular_material_src_material_examples_examples_gf = SlideToggleOverviewExample;
    exports.ɵangular_material_src_material_examples_examples_gg = SliderConfigurableExample;
    exports.ɵangular_material_src_material_examples_examples_gh = SliderFormattingExample;
    exports.ɵangular_material_src_material_examples_examples_gi = SliderOverviewExample;
    exports.ɵangular_material_src_material_examples_examples_gk = PizzaPartyComponent;
    exports.ɵangular_material_src_material_examples_examples_gj = SnackBarComponentExample;
    exports.ɵangular_material_src_material_examples_examples_gl = SnackBarOverviewExample;
    exports.ɵangular_material_src_material_examples_examples_gm = SnackBarPositionExample;
    exports.ɵangular_material_src_material_examples_examples_gn = SortOverviewExample;
    exports.ɵangular_material_src_material_examples_examples_go = StepperEditableExample;
    exports.ɵangular_material_src_material_examples_examples_gp = StepperErrorsExample;
    exports.ɵangular_material_src_material_examples_examples_gq = StepperLabelPositionBottomExample;
    exports.ɵangular_material_src_material_examples_examples_gr = StepperOptionalExample;
    exports.ɵangular_material_src_material_examples_examples_gs = StepperStatesExample;
    exports.ɵangular_material_src_material_examples_examples_gt = StepperVerticalExample;
    exports.ɵangular_material_src_material_examples_examples_gu = TabGroupAlignExample;
    exports.ɵangular_material_src_material_examples_examples_gv = TabGroupAnimationsExample;
    exports.ɵangular_material_src_material_examples_examples_gw = TabGroupAsyncExample;
    exports.ɵangular_material_src_material_examples_examples_gx = TabGroupBasicExample;
    exports.ɵangular_material_src_material_examples_examples_gy = TabGroupCustomLabelExample;
    exports.ɵangular_material_src_material_examples_examples_gz = TabGroupDynamicHeightExample;
    exports.ɵangular_material_src_material_examples_examples_ha = TabGroupDynamicExample;
    exports.ɵangular_material_src_material_examples_examples_hb = TabGroupHeaderBelowExample;
    exports.ɵangular_material_src_material_examples_examples_hc = TabGroupLazyLoadedExample;
    exports.ɵangular_material_src_material_examples_examples_hd = TabGroupStretchedExample;
    exports.ɵangular_material_src_material_examples_examples_he = TabGroupThemeExample;
    exports.ɵangular_material_src_material_examples_examples_hf = TabNavBarBasicExample;
    exports.ɵangular_material_src_material_examples_examples_hg = TableBasicFlexExample;
    exports.ɵangular_material_src_material_examples_examples_hh = TableBasicExample;
    exports.ɵangular_material_src_material_examples_examples_hi = TableDynamicColumnsExample;
    exports.ɵangular_material_src_material_examples_examples_hj = TableExpandableRowsExample;
    exports.ɵangular_material_src_material_examples_examples_hk = TableFilteringExample;
    exports.ɵangular_material_src_material_examples_examples_hl = TableFooterRowExample;
    exports.ɵangular_material_src_material_examples_examples_hm = TableHttpExample;
    exports.ɵangular_material_src_material_examples_examples_hn = TableMultipleHeaderFooterExample;
    exports.ɵangular_material_src_material_examples_examples_ho = TableOverviewExample;
    exports.ɵangular_material_src_material_examples_examples_hp = TablePaginationExample;
    exports.ɵangular_material_src_material_examples_examples_hq = TableRowContextExample;
    exports.ɵangular_material_src_material_examples_examples_hr = TableSelectionExample;
    exports.ɵangular_material_src_material_examples_examples_hs = TableSortingExample;
    exports.ɵangular_material_src_material_examples_examples_ht = TableStickyColumnsExample;
    exports.ɵangular_material_src_material_examples_examples_hu = TableStickyComplexFlexExample;
    exports.ɵangular_material_src_material_examples_examples_hv = TableStickyComplexExample;
    exports.ɵangular_material_src_material_examples_examples_hw = TableStickyFooterExample;
    exports.ɵangular_material_src_material_examples_examples_hx = TableStickyHeaderExample;
    exports.ɵangular_material_src_material_examples_examples_hy = TableTextColumnAdvancedExample;
    exports.ɵangular_material_src_material_examples_examples_hz = TableTextColumnExample;
    exports.ɵangular_material_src_material_examples_examples_ia = TableWrappedExample;
    exports.ɵangular_material_src_material_examples_examples_ib = WrapperTable;
    exports.ɵangular_material_src_material_examples_examples_ic = TextFieldAutofillDirectiveExample;
    exports.ɵangular_material_src_material_examples_examples_id = TextFieldAutofillMonitorExample;
    exports.ɵangular_material_src_material_examples_examples_ie = TextFieldAutosizeTextareaExample;
    exports.ɵangular_material_src_material_examples_examples_if = ToolbarOverviewExample;
    exports.ɵangular_material_src_material_examples_examples_ig = TooltipAutoHideExample;
    exports.ɵangular_material_src_material_examples_examples_ih = TooltipCustomClassExample;
    exports.ɵangular_material_src_material_examples_examples_ii = TooltipDelayExample;
    exports.ɵangular_material_src_material_examples_examples_ij = TooltipDisabledExample;
    exports.ɵangular_material_src_material_examples_examples_ik = TooltipManualExample;
    exports.ɵangular_material_src_material_examples_examples_il = TooltipMessageExample;
    exports.ɵangular_material_src_material_examples_examples_in = TooltipModifiedDefaultsExample;
    exports.ɵangular_material_src_material_examples_examples_im = myCustomTooltipDefaults;
    exports.ɵangular_material_src_material_examples_examples_io = TooltipOverviewExample;
    exports.ɵangular_material_src_material_examples_examples_ip = TooltipPositionExample;
    exports.ɵangular_material_src_material_examples_examples_iq = ChecklistDatabase;
    exports.ɵangular_material_src_material_examples_examples_ir = TreeChecklistExample;
    exports.ɵangular_material_src_material_examples_examples_is = DynamicDatabase;
    exports.ɵangular_material_src_material_examples_examples_it = TreeDynamicExample;
    exports.ɵangular_material_src_material_examples_examples_iu = TreeFlatOverviewExample;
    exports.ɵangular_material_src_material_examples_examples_iv = LoadmoreDatabase;
    exports.ɵangular_material_src_material_examples_examples_iw = TreeLoadmoreExample;
    exports.ɵangular_material_src_material_examples_examples_ix = TreeNestedOverviewExample;
    exports.ExampleData = ExampleData;
    exports.EXAMPLE_COMPONENTS = EXAMPLE_COMPONENTS;
    exports.EXAMPLE_LIST = EXAMPLE_LIST;
    exports.ExampleModule = ExampleModule;
    exports.ListOverviewExample = ListOverviewExample;
    exports.DatepickerOverviewExample = DatepickerOverviewExample;
    exports.CardFancyExample = CardFancyExample;
    exports.ToolbarMultirowExample = ToolbarMultirowExample;
    exports.ButtonToggleOverviewExample = ButtonToggleOverviewExample;
    exports.ExpansionOverviewExample = ExpansionOverviewExample;
    exports.StepperOverviewExample = StepperOverviewExample;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=material-examples.umd.js.map
