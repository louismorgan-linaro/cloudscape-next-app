import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import clsx from 'clsx';
import React, { useRef, useState, useImperativeHandle } from 'react';
import InternalSpaceBetween from '../space-between/internal';
import { InternalButton } from '../button/internal';
import { getBaseProps } from '../internal/base-component';
import { applyDisplayName } from '../internal/utils/apply-display-name';
import { KeyCode } from '../internal/keycode';
import { useUniqueId } from '../internal/hooks/use-unique-id/index';
import { fireNonCancelableEvent } from '../internal/events';
import { TokenButton } from './token';
import { getQueryActions, parseText, getAutosuggestOptions, getAllowedOperators } from './controller';
import { useLoadItems } from './use-load-items';
import styles from './styles.css.js';
import useBaseComponent from '../internal/hooks/use-base-component';
import PropertyFilterAutosuggest from './property-filter-autosuggest';
import { PropertyEditor } from './property-editor';
import { matchTokenValue } from './utils';
import { useInternalI18n } from '../i18n/context';
import TokenList from '../internal/components/token-list';
import { SearchResults } from '../text-filter/search-results';
function getOperatorI18nString(operator) {
    switch (operator) {
        case '=':
            return 'equals';
        case '!=':
            return 'not_equals';
        case '>':
            return 'greater_than';
        case '>=':
            return 'greater_than_equal';
        case '<':
            return 'less_than';
        case '<=':
            return 'less_than_equal';
        case ':':
            return 'contains';
        case '!:':
            return 'not_contains';
        // The line is ignored from coverage because it is not reachable.
        // The purpose of it is to prevent TS errors if ComparisonOperator type gets extended.
        /* istanbul ignore next */
        default:
            return operator;
    }
}
const PropertyFilter = React.forwardRef((_a, ref) => {
    var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0;
    var { disabled, countText, query, hideOperations, onChange, filteringProperties, filteringOptions = [], customGroupsText = [], disableFreeTextFiltering = false, onLoadItems, virtualScroll, customControl, customFilterActions, filteringPlaceholder, filteringAriaLabel, filteringEmpty, filteringLoadingText, filteringFinishedText, filteringErrorText, filteringRecoveryText, filteringStatusType, asyncProperties, tokenLimit, expandToViewport } = _a, rest = __rest(_a, ["disabled", "countText", "query", "hideOperations", "onChange", "filteringProperties", "filteringOptions", "customGroupsText", "disableFreeTextFiltering", "onLoadItems", "virtualScroll", "customControl", "customFilterActions", "filteringPlaceholder", "filteringAriaLabel", "filteringEmpty", "filteringLoadingText", "filteringFinishedText", "filteringErrorText", "filteringRecoveryText", "filteringStatusType", "asyncProperties", "tokenLimit", "expandToViewport"]);
    const { __internalRootRef } = useBaseComponent('PropertyFilter');
    const [removedTokenIndex, setRemovedTokenIndex] = useState(null);
    const inputRef = useRef(null);
    const baseProps = getBaseProps(rest);
    const i18n = useInternalI18n('property-filter');
    const i18nStrings = Object.assign(Object.assign({}, rest.i18nStrings), { allPropertiesLabel: i18n('i18nStrings.allPropertiesLabel', (_b = rest.i18nStrings) === null || _b === void 0 ? void 0 : _b.allPropertiesLabel), applyActionText: i18n('i18nStrings.applyActionText', (_c = rest.i18nStrings) === null || _c === void 0 ? void 0 : _c.applyActionText), cancelActionText: i18n('i18nStrings.cancelActionText', (_d = rest.i18nStrings) === null || _d === void 0 ? void 0 : _d.cancelActionText), clearFiltersText: i18n('i18nStrings.clearFiltersText', (_e = rest.i18nStrings) === null || _e === void 0 ? void 0 : _e.clearFiltersText), editTokenHeader: i18n('i18nStrings.editTokenHeader', (_f = rest.i18nStrings) === null || _f === void 0 ? void 0 : _f.editTokenHeader), groupPropertiesText: i18n('i18nStrings.groupPropertiesText', (_g = rest.i18nStrings) === null || _g === void 0 ? void 0 : _g.groupPropertiesText), groupValuesText: i18n('i18nStrings.groupValuesText', (_h = rest.i18nStrings) === null || _h === void 0 ? void 0 : _h.groupValuesText), operationAndText: i18n('i18nStrings.operationAndText', (_j = rest.i18nStrings) === null || _j === void 0 ? void 0 : _j.operationAndText), operationOrText: i18n('i18nStrings.operationOrText', (_k = rest.i18nStrings) === null || _k === void 0 ? void 0 : _k.operationOrText), operatorContainsText: i18n('i18nStrings.operatorContainsText', (_l = rest.i18nStrings) === null || _l === void 0 ? void 0 : _l.operatorContainsText), operatorDoesNotContainText: i18n('i18nStrings.operatorDoesNotContainText', (_m = rest.i18nStrings) === null || _m === void 0 ? void 0 : _m.operatorDoesNotContainText), operatorDoesNotEqualText: i18n('i18nStrings.operatorDoesNotEqualText', (_o = rest.i18nStrings) === null || _o === void 0 ? void 0 : _o.operatorDoesNotEqualText), operatorEqualsText: i18n('i18nStrings.operatorEqualsText', (_p = rest.i18nStrings) === null || _p === void 0 ? void 0 : _p.operatorEqualsText), operatorGreaterOrEqualText: i18n('i18nStrings.operatorGreaterOrEqualText', (_q = rest.i18nStrings) === null || _q === void 0 ? void 0 : _q.operatorGreaterOrEqualText), operatorGreaterText: i18n('i18nStrings.operatorGreaterText', (_r = rest.i18nStrings) === null || _r === void 0 ? void 0 : _r.operatorGreaterText), operatorLessOrEqualText: i18n('i18nStrings.operatorLessOrEqualText', (_s = rest.i18nStrings) === null || _s === void 0 ? void 0 : _s.operatorLessOrEqualText), operatorLessText: i18n('i18nStrings.operatorLessText', (_t = rest.i18nStrings) === null || _t === void 0 ? void 0 : _t.operatorLessText), operatorText: i18n('i18nStrings.operatorText', (_u = rest.i18nStrings) === null || _u === void 0 ? void 0 : _u.operatorText), operatorsText: i18n('i18nStrings.operatorsText', (_v = rest.i18nStrings) === null || _v === void 0 ? void 0 : _v.operatorsText), propertyText: i18n('i18nStrings.propertyText', (_w = rest.i18nStrings) === null || _w === void 0 ? void 0 : _w.propertyText), tokenLimitShowFewer: i18n('i18nStrings.tokenLimitShowFewer', (_x = rest.i18nStrings) === null || _x === void 0 ? void 0 : _x.tokenLimitShowFewer), tokenLimitShowMore: i18n('i18nStrings.tokenLimitShowMore', (_y = rest.i18nStrings) === null || _y === void 0 ? void 0 : _y.tokenLimitShowMore), valueText: i18n('i18nStrings.valueText', (_z = rest.i18nStrings) === null || _z === void 0 ? void 0 : _z.valueText), removeTokenButtonAriaLabel: i18n('i18nStrings.removeTokenButtonAriaLabel', (_0 = rest.i18nStrings) === null || _0 === void 0 ? void 0 : _0.removeTokenButtonAriaLabel, format => token => {
            var _a;
            return format({
                token__operator: getOperatorI18nString(token.operator),
                token__propertyKey: (_a = token.propertyKey) !== null && _a !== void 0 ? _a : '',
                token__value: token.value,
            });
        }) });
    useImperativeHandle(ref, () => ({ focus: () => { var _a; return (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.focus(); } }), []);
    const { tokens, operation } = query;
    const showResults = !!(tokens === null || tokens === void 0 ? void 0 : tokens.length) && !disabled && !!countText;
    const { addToken, removeToken, setToken, setOperation, removeAllTokens } = getQueryActions(query, onChange, inputRef);
    const [filteringText, setFilteringText] = useState('');
    const internalFilteringProperties = filteringProperties.map(property => {
        var _a, _b, _c, _d, _e;
        const extendedOperators = ((_a = property.operators) !== null && _a !== void 0 ? _a : []).reduce((acc, operator) => (typeof operator === 'object' ? acc.set(operator.operator, operator) : acc), new Map());
        return {
            propertyKey: property.key,
            propertyLabel: (_b = property.propertyLabel) !== null && _b !== void 0 ? _b : '',
            groupValuesLabel: (_c = property.groupValuesLabel) !== null && _c !== void 0 ? _c : '',
            propertyGroup: property.group,
            operators: ((_d = property.operators) !== null && _d !== void 0 ? _d : []).map(op => (typeof op === 'string' ? op : op.operator)),
            defaultOperator: (_e = property.defaultOperator) !== null && _e !== void 0 ? _e : '=',
            getValueFormatter: operator => { var _a, _b; return (operator ? (_b = (_a = extendedOperators.get(operator)) === null || _a === void 0 ? void 0 : _a.format) !== null && _b !== void 0 ? _b : null : null); },
            getValueFormRenderer: operator => { var _a, _b; return (operator ? (_b = (_a = extendedOperators.get(operator)) === null || _a === void 0 ? void 0 : _a.form) !== null && _b !== void 0 ? _b : null : null); },
            externalProperty: property,
        };
    });
    const propertyByKey = new Map(internalFilteringProperties.map(p => [p.propertyKey, p]));
    const internalFilteringOptions = filteringOptions.map(option => {
        var _a, _b, _c;
        const formatter = (_a = propertyByKey.get(option.propertyKey)) === null || _a === void 0 ? void 0 : _a.getValueFormatter();
        return {
            propertyKey: option.propertyKey,
            value: option.value,
            label: formatter ? formatter(option.value) : (_c = (_b = option.label) !== null && _b !== void 0 ? _b : option.value) !== null && _c !== void 0 ? _c : '',
        };
    });
    const parsedText = parseText(filteringText, internalFilteringProperties, disableFreeTextFiltering);
    const autosuggestOptions = getAutosuggestOptions(parsedText, internalFilteringOptions, internalFilteringProperties, customGroupsText, i18nStrings);
    const createToken = (currentText) => {
        const parsedText = parseText(currentText, internalFilteringProperties, disableFreeTextFiltering);
        let newToken;
        switch (parsedText.step) {
            case 'property': {
                newToken = matchTokenValue({
                    propertyKey: parsedText.property.propertyKey,
                    operator: parsedText.operator,
                    value: parsedText.value,
                }, internalFilteringOptions);
                break;
            }
            case 'free-text': {
                newToken = {
                    operator: parsedText.operator || ':',
                    value: parsedText.value,
                };
                break;
            }
            case 'operator': {
                newToken = {
                    operator: ':',
                    value: currentText,
                };
                break;
            }
        }
        if (disableFreeTextFiltering && !('propertyKey' in newToken)) {
            return;
        }
        addToken(newToken);
        setFilteringText('');
    };
    const ignoreKeyDown = useRef(false);
    const handleKeyDown = event => {
        if (filteringText && !ignoreKeyDown.current && event.detail.keyCode === KeyCode.enter) {
            createToken(filteringText);
        }
    };
    const getLoadMoreDetail = (parsedText, filteringText) => {
        const loadMoreDetail = {
            filteringProperty: undefined,
            filteringText,
            filteringOperator: undefined,
        };
        if (parsedText.step === 'property') {
            loadMoreDetail.filteringProperty = parsedText.property.externalProperty;
            loadMoreDetail.filteringText = parsedText.value;
            loadMoreDetail.filteringOperator = parsedText.operator;
        }
        return loadMoreDetail;
    };
    const loadMoreDetail = getLoadMoreDetail(parsedText, filteringText);
    const inputLoadItemsHandlers = useLoadItems(onLoadItems, loadMoreDetail.filteringText, loadMoreDetail.filteringProperty, loadMoreDetail.filteringText, loadMoreDetail.filteringOperator);
    const asyncProps = {
        empty: filteringEmpty,
        loadingText: filteringLoadingText,
        finishedText: filteringFinishedText,
        errorText: filteringErrorText,
        recoveryText: filteringRecoveryText,
        statusType: filteringStatusType,
    };
    const asyncAutosuggestProps = !!filteringText.length || asyncProperties
        ? Object.assign(Object.assign({}, inputLoadItemsHandlers), asyncProps) : {};
    const handleSelected = event => {
        // The ignoreKeyDown flag makes sure `createToken` routine runs only once. Autosuggest's `onKeyDown` fires,
        // when an item is selected from the list using "enter" key.
        ignoreKeyDown.current = true;
        setTimeout(() => {
            ignoreKeyDown.current = false;
        }, 0);
        const { detail: option } = event;
        const value = option.value || '';
        if (!('keepOpenOnSelect' in option)) {
            createToken(value);
            return;
        }
        // stop dropdown from closing
        event.preventDefault();
        const parsedText = parseText(value, internalFilteringProperties, disableFreeTextFiltering);
        const loadMoreDetail = getLoadMoreDetail(parsedText, value);
        // Insert operator automatically if only one operator is defined for the given property.
        if (parsedText.step === 'operator') {
            const operators = getAllowedOperators(parsedText.property);
            if (value.trim() === parsedText.property.propertyLabel && operators.length === 1) {
                loadMoreDetail.filteringProperty = parsedText.property.externalProperty;
                loadMoreDetail.filteringOperator = operators[0];
                loadMoreDetail.filteringText = '';
                setFilteringText(parsedText.property.propertyLabel + ' ' + operators[0] + ' ');
            }
        }
        fireNonCancelableEvent(onLoadItems, Object.assign(Object.assign({}, loadMoreDetail), { firstPage: true, samePage: false }));
    };
    const operatorForm = parsedText.step === 'property' && parsedText.property.getValueFormRenderer(parsedText.operator);
    const searchResultsId = useUniqueId('property-filter-search-results');
    return (React.createElement("div", Object.assign({}, baseProps, { className: clsx(baseProps.className, styles.root), ref: __internalRootRef }),
        React.createElement("div", { className: styles['search-field'] },
            customControl && React.createElement("div", { className: styles['custom-control'] }, customControl),
            React.createElement(PropertyFilterAutosuggest, Object.assign({ ref: inputRef, virtualScroll: virtualScroll, enteredTextLabel: i18nStrings.enteredTextLabel, ariaLabel: filteringAriaLabel !== null && filteringAriaLabel !== void 0 ? filteringAriaLabel : i18nStrings.filteringAriaLabel, placeholder: filteringPlaceholder !== null && filteringPlaceholder !== void 0 ? filteringPlaceholder : i18nStrings.filteringPlaceholder, ariaLabelledby: rest.ariaLabelledby, ariaDescribedby: rest.ariaDescribedby, controlId: rest.controlId, value: filteringText, disabled: disabled, onKeyDown: handleKeyDown }, autosuggestOptions, { onChange: event => setFilteringText(event.detail.value), empty: filteringEmpty }, asyncAutosuggestProps, { expandToViewport: expandToViewport, onOptionClick: handleSelected, customForm: operatorForm && (React.createElement(PropertyEditor, { property: parsedText.property, operator: parsedText.operator, filter: parsedText.value, operatorForm: operatorForm, i18nStrings: i18nStrings, onCancel: () => {
                        var _a, _b;
                        setFilteringText('');
                        (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.close();
                        (_b = inputRef.current) === null || _b === void 0 ? void 0 : _b.focus({ preventDropdown: true });
                    }, onSubmit: token => {
                        var _a, _b;
                        addToken(token);
                        setFilteringText('');
                        (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.focus({ preventDropdown: true });
                        (_b = inputRef.current) === null || _b === void 0 ? void 0 : _b.close();
                    } })), hideEnteredTextOption: disableFreeTextFiltering && parsedText.step !== 'property', clearAriaLabel: i18nStrings.clearAriaLabel, searchResultsId: showResults ? searchResultsId : undefined })),
            showResults ? (React.createElement("div", { className: styles.results },
                React.createElement(SearchResults, { id: searchResultsId }, countText))) : null),
        tokens && tokens.length > 0 && (React.createElement("div", { className: styles.tokens },
            React.createElement(InternalSpaceBetween, { size: "xs", direction: "horizontal" },
                React.createElement(TokenList, { alignment: "inline", limit: tokenLimit, items: tokens, renderItem: (token, tokenIndex) => (React.createElement(TokenButton, { token: token, first: tokenIndex === 0, operation: operation, removeToken: () => {
                            removeToken(tokenIndex);
                            setRemovedTokenIndex(tokenIndex);
                        }, setToken: (newToken) => setToken(tokenIndex, newToken), setOperation: setOperation, filteringOptions: internalFilteringOptions, filteringProperties: internalFilteringProperties, asyncProps: asyncProps, onLoadItems: onLoadItems, i18nStrings: i18nStrings, asyncProperties: asyncProperties, hideOperations: hideOperations, customGroupsText: customGroupsText, disableFreeTextFiltering: disableFreeTextFiltering, disabled: disabled, expandToViewport: expandToViewport })), i18nStrings: {
                        limitShowFewer: i18nStrings.tokenLimitShowFewer,
                        limitShowMore: i18nStrings.tokenLimitShowMore,
                    }, after: customFilterActions ? (React.createElement("div", { className: styles['custom-filter-actions'] }, customFilterActions)) : (React.createElement(InternalButton, { formAction: "none", onClick: removeAllTokens, className: styles['remove-all'], disabled: disabled }, i18nStrings.clearFiltersText)), removedItemIndex: removedTokenIndex }))))));
});
applyDisplayName(PropertyFilter, 'PropertyFilter');
export default PropertyFilter;
//# sourceMappingURL=index.js.map