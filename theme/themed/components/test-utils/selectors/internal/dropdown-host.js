"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PortalDropdownContentWrapper = exports.DropdownContentWrapper = void 0;
const selectors_1 = require("@cloudscape-design/test-utils-core/selectors");
const utils_1 = require("@cloudscape-design/test-utils-core/utils");
const dropdown_1 = require("./dropdown");
const options_list_1 = require("./options-list");
const option_1 = require("./option");
const styles_selectors_js_1 = require("../../../internal/components/selectable-item/styles.selectors.js");
const styles_selectors_js_2 = require("../../../internal/components/dropdown/styles.selectors.js");
const styles_selectors_js_3 = require("../../../internal/components/dropdown-status/styles.selectors.js");
const styles_selectors_js_4 = require("../../../internal/components/option/styles.selectors.js");
class DropdownHostComponentWrapper extends selectors_1.ComponentWrapper {
    /**
     * @param options
     * * expandToViewport (boolean) - Use this when the component under test is rendered with an `expandToViewport` flag.
     */
    assertOpenDropdown(options = {
        expandToViewport: false
    }) {
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
    findDropdown(options = {
        expandToViewport: false
    }) {
        return options.expandToViewport ? (0, selectors_1.createWrapper)().findComponent(`.${styles_selectors_js_2.default.dropdown}[data-open=true]`, PortalDropdownContentWrapper) : new DropdownContentWrapper(this.getElement());
    }
}
exports.default = DropdownHostComponentWrapper;
class DropdownContentWrapper extends selectors_1.ComponentWrapper {
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
        return (0, selectors_1.createWrapper)().findComponent(`.${styles_selectors_js_2.default.dropdown}[data-open=true]`, dropdown_1.default);
    }
}
exports.PortalDropdownContentWrapper = PortalDropdownContentWrapper;
//# sourceMappingURL=dropdown-host.js.map