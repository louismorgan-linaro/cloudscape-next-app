"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PortalDropdownContentWrapper = exports.DropdownContentWrapper = void 0;
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const test_utils_1 = require("react-dom/test-utils");
const dom_1 = require("@cloudscape-design/test-utils-core/dom");
const utils_1 = require("@cloudscape-design/test-utils-core/utils");
const dropdown_1 = require("./dropdown");
const options_list_1 = require("./options-list");
const option_1 = require("./option");
const styles_selectors_js_1 = require("../../../internal/components/selectable-item/styles.selectors.js");
const styles_selectors_js_2 = require("../../../internal/components/dropdown/styles.selectors.js");
const styles_selectors_js_3 = require("../../../internal/components/dropdown-status/styles.selectors.js");
const styles_selectors_js_4 = require("../../../internal/components/option/styles.selectors.js");
class DropdownHostComponentWrapper extends dom_1.ComponentWrapper {
    /**
     * @param options
     * * expandToViewport (boolean) - Use this when the component under test is rendered with an `expandToViewport` flag.
     */
    assertOpenDropdown(options = { expandToViewport: false }) {
        var _a;
        const isOpen = !!((_a = this.findDropdown(options)) === null || _a === void 0 ? void 0 : _a.findOpenDropdown());
        if (!isOpen) {
            throw new Error('Unable to select an option when dropdown is closed');
        }
    }
    /**
     * @param options
     * * expandToViewport (boolean) - Use this when the component under test is rendered with an `expandToViewport` flag.
     */
    findDropdown(options = { expandToViewport: false }) {
        return options.expandToViewport
            ? (0, dom_1.createWrapper)().findComponent(`.${styles_selectors_js_2.default.dropdown}[data-open=true]`, PortalDropdownContentWrapper)
            : new DropdownContentWrapper(this.getElement());
    }
    openDropdown() {
        (0, test_utils_1.act)(() => {
            this.findTrigger().fireEvent(new MouseEvent('mousedown', { bubbles: true }));
        });
    }
    /**
     * @param options
     * * expandToViewport (boolean) - Use this when the component under test is rendered with an `expandToViewport` flag.
     */
    closeDropdown(options = { expandToViewport: false }) {
        if (document.activeElement &&
            (this.element.contains(document.activeElement) ||
                this.findDropdown(options).getElement().contains(document.activeElement)) &&
            document.activeElement instanceof HTMLElement) {
            const element = document.activeElement;
            (0, test_utils_1.act)(() => {
                element.blur();
            });
        }
    }
    /**
     * Selects an option for the given index by triggering corresponding events.
     *
     * This utility does not open the dropdown of the given select and it will need to be called explicitly in your test.
     * On selection the dropdown will close automatically.
     *
     * Example:
     * ```
     * wrapper.openDropdown();
     * wrapper.selectOption(1);
     * ```
     *
     * @param index 1-based index of the option to select
     * @param options
     * * expandToViewport (boolean) - Use this when the component under test is rendered with an `expandToViewport` flag.
     */
    selectOption(index, options = { expandToViewport: false }) {
        if (index < 1) {
            throw new Error('Option index should be a 1-based integer number');
        }
        this.assertOpenDropdown(options);
        const option = this.findDropdown(options).findOption(index);
        if (!option) {
            throw new Error(`Can't select the option, because there is no option with the index ${index}.`);
        }
        (0, test_utils_1.act)(() => {
            option.fireEvent(new MouseEvent('mouseup', { bubbles: true }));
        });
    }
    /**
     * Selects an option for the given value by triggering corresponding events.
     *
     * This utility does not open the dropdown of the given select and it will need to be called explicitly in your test.
     * On selection the dropdown will close automatically.
     *
     * Example:
     * ```
     * wrapper.openDropdown();
     * wrapper.selectOptionByValue('option_1');
     * ```
     *
     * @param value value of the option
     * @param options
     * * expandToViewport (boolean) - Use this when the component under test is rendered with an `expandToViewport` flag.
     */
    selectOptionByValue(value, options = { expandToViewport: false }) {
        this.assertOpenDropdown(options);
        const option = this.findDropdown(options).findOptionByValue(value);
        if (!option) {
            throw new Error(`Can't select the option, because there is no option with the value ${JSON.stringify(value)}.`);
        }
        (0, test_utils_1.act)(() => {
            option.fireEvent(new MouseEvent('mouseup', { bubbles: true }));
        });
    }
}
__decorate([
    dom_1.usesDom
], DropdownHostComponentWrapper.prototype, "openDropdown", null);
__decorate([
    dom_1.usesDom
], DropdownHostComponentWrapper.prototype, "closeDropdown", null);
__decorate([
    dom_1.usesDom
], DropdownHostComponentWrapper.prototype, "selectOption", null);
__decorate([
    dom_1.usesDom
], DropdownHostComponentWrapper.prototype, "selectOptionByValue", null);
exports.default = DropdownHostComponentWrapper;
class DropdownContentWrapper extends dom_1.ComponentWrapper {
    findDisabledOptions() {
        return this.findAllByClassName(styles_selectors_js_1.default.disabled).map((elementWrapper) => new option_1.default(elementWrapper.getElement()));
    }
    findFooterRegion() {
        return this.findByClassName(styles_selectors_js_3.default.root);
    }
    findHighlightedAriaLiveRegion() {
        return this.find('[aria-live]');
    }
    /**
     * Returns highlighted text fragments from all of the options.
     * Options get highlighted when they match the value of the input field.
     */
    findHighlightedMatches() {
        return this.findAllByClassName(styles_selectors_js_4.default['filtering-match-highlight']);
    }
    findHighlightedOption() {
        return this.findComponent(`.${styles_selectors_js_1.default.highlighted}`, option_1.default);
    }
    findOpenDropdown() {
        const dropdown = new dropdown_1.default(this.getElement());
        return dropdown.findOpenDropdown();
    }
    /**
     * Returns an option from the dropdown.
     *
     * @param optionIndex 1-based index of the option to select.
     */
    findOption(optionIndex) {
        return this.findComponent(`.${styles_selectors_js_1.default['selectable-item']}[data-test-index="${optionIndex}"] .${option_1.default.rootSelector}`, option_1.default);
    }
    findOptionByValue(value) {
        const toReplace = (0, utils_1.escapeSelector)(value);
        return this.findComponent(`.${option_1.default.rootSelector}[data-value="${toReplace}"]`, option_1.default);
    }
    /**
     * Returns an option from the dropdown.
     *
     * @param groupIndex 1-based index of the group to select an option in.
     * @param optionIndex 1-based index of the option to select.
     */
    findOptionInGroup(groupIndex, optionIndex) {
        return this.findComponent(`.${styles_selectors_js_1.default['selectable-item']}[data-group-index="${groupIndex}"][data-child-index="${optionIndex}"] .${option_1.default.rootSelector}`, option_1.default);
    }
    findOptions() {
        return this.findAll(`.${styles_selectors_js_1.default['selectable-item']}[data-test-index] .${option_1.default.rootSelector}`).map((elementWrapper) => new option_1.default(elementWrapper.getElement()));
    }
    /**
     * Use this element to scroll through the list of options
     */
    findOptionsContainer() {
        return this.findByClassName(options_list_1.default.rootSelector);
    }
    findSelectedOptions() {
        return this.findAllByClassName(styles_selectors_js_1.default.selected).map((elementWrapper) => new option_1.default(elementWrapper.getElement()));
    }
}
exports.DropdownContentWrapper = DropdownContentWrapper;
class PortalDropdownContentWrapper extends DropdownContentWrapper {
    findOpenDropdown() {
        return (0, dom_1.createWrapper)().findComponent(`.${styles_selectors_js_2.default.dropdown}[data-open=true]`, dropdown_1.default);
    }
}
exports.PortalDropdownContentWrapper = PortalDropdownContentWrapper;
//# sourceMappingURL=dropdown-host.js.map