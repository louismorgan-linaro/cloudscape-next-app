import { __rest } from "tslib";
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import { getBaseProps } from '../internal/base-component';
import clsx from 'clsx';
import styles from './styles.css.js';
export default function InternalBox(_a) {
    var { variant = 'div', tagOverride, margin = {}, padding = {}, display, textAlign, float, fontSize, fontWeight, color, children, __internalRootRef = null } = _a, props = __rest(_a, ["variant", "tagOverride", "margin", "padding", "display", "textAlign", "float", "fontSize", "fontWeight", "color", "children", "__internalRootRef"]);
    const baseProps = getBaseProps(props);
    const marginsClassNamesSuffices = getClassNamesSuffixes(margin);
    const paddingsClassNamesSuffices = getClassNamesSuffixes(padding);
    // This can be any arbitrary string if passed into tagOverride.
    // We appease the compiler with an incorrect type.
    const Tag = getTag(variant, tagOverride);
    const className = clsx(baseProps.className, styles.root, styles.box, styles[`${variant.replace(/^awsui-/, '')}-variant`], marginsClassNamesSuffices.map(suffix => styles[`m-${suffix}`]), paddingsClassNamesSuffices.map(suffix => styles[`p-${suffix}`]), styles[`d-${display}`], styles[`f-${float}`], styles[`color-${color || 'default'}`], styles[`font-size-${fontSize || 'default'}`], styles[`font-weight-${fontWeight || 'default'}`], styles[`t-${textAlign}`]);
    return (React.createElement(Tag, Object.assign({}, baseProps, { className: className, ref: __internalRootRef }), children));
}
const getClassNamesSuffixes = (value) => {
    if (typeof value === 'string') {
        return [value];
    }
    const sides = ['top', 'right', 'bottom', 'left', 'horizontal', 'vertical'];
    return sides.filter(side => !!value[side]).map(side => `${side}-${value[side]}`);
};
const getTag = (variant, tagOverride) => {
    if (tagOverride) {
        return tagOverride;
    }
    if (variant === 'awsui-value-large') {
        return 'span';
    }
    if (variant === 'awsui-key-label') {
        return 'div';
    }
    return variant;
};
//# sourceMappingURL=internal.js.map