// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React, { useState } from 'react';
import InternalBox from '../box/internal';
import { InternalButton } from '../button/internal';
import InternalCheckbox from '../checkbox/internal';
import InternalColumnLayout from '../column-layout/internal';
import InternalFormField from '../form-field/internal';
import InternalModal from '../modal/internal';
import InternalSelect from '../select/internal';
import InternalSpaceBetween from '../space-between/internal';
import { LightThemes, DarkThemes } from './ace-themes';
function filterThemes(allThemes, available) {
    if (!available) {
        return allThemes;
    }
    return allThemes.filter(theme => available.indexOf(theme.value) > -1);
}
export default (props) => {
    var _a, _b, _c, _d, _e, _f;
    const [wrapLines, setWrapLines] = useState((_b = (_a = props.preferences) === null || _a === void 0 ? void 0 : _a.wrapLines) !== null && _b !== void 0 ? _b : true);
    const [theme, setTheme] = useState((_d = (_c = props.preferences) === null || _c === void 0 ? void 0 : _c.theme) !== null && _d !== void 0 ? _d : props.defaultTheme);
    const themeOptions = [
        {
            label: props.i18nStrings.lightThemes,
            options: filterThemes(LightThemes, (_e = props.themes) === null || _e === void 0 ? void 0 : _e.light),
        },
        {
            label: props.i18nStrings.darkThemes,
            options: filterThemes(DarkThemes, (_f = props.themes) === null || _f === void 0 ? void 0 : _f.dark),
        },
    ];
    const [selectedThemeOption, setSelectedThemeOption] = useState(() => [...LightThemes, ...DarkThemes].filter(t => t.value === theme)[0]);
    const onThemeSelected = (e) => {
        setTheme(e.detail.selectedOption.value);
        setSelectedThemeOption(e.detail.selectedOption);
    };
    return (React.createElement(InternalModal, { size: "medium", visible: true, onDismiss: props.onDismiss, header: props.i18nStrings.header, closeAriaLabel: props.i18nStrings.cancel, footer: React.createElement(InternalBox, { float: "right" },
            React.createElement(InternalSpaceBetween, { direction: "horizontal", size: "xs" },
                React.createElement(InternalButton, { onClick: props.onDismiss }, props.i18nStrings.cancel),
                React.createElement(InternalButton, { onClick: () => props.onConfirm({ wrapLines, theme }), variant: "primary" }, props.i18nStrings.confirm))) },
        React.createElement(InternalColumnLayout, { columns: 2, variant: "text-grid" },
            React.createElement("div", null,
                React.createElement(InternalCheckbox, { checked: wrapLines, onChange: e => setWrapLines(e.detail.checked) }, props.i18nStrings.wrapLines)),
            React.createElement("div", null,
                React.createElement(InternalFormField, { label: props.i18nStrings.theme },
                    React.createElement(InternalSelect, { selectedOption: selectedThemeOption, onChange: onThemeSelected, options: themeOptions, filteringType: "auto", filteringAriaLabel: props.i18nStrings.themeFilteringAriaLabel, filteringClearAriaLabel: props.i18nStrings.themeFilteringClearAriaLabel, filteringPlaceholder: props.i18nStrings.themeFilteringPlaceholder }))))));
};
//# sourceMappingURL=preferences-modal.js.map