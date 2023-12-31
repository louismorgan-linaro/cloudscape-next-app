// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import styles from './styles.css.js';
import clsx from 'clsx';
const splitOnFiltering = (str, highlightText) => {
    // Filtering needs to be case insensitive
    const filteringPattern = highlightText.replace(/[-[\]/{}()*+?.\\^$|]/g, '\\$&');
    const regexp = new RegExp(filteringPattern, 'gi');
    const noMatches = str.split(regexp);
    const matches = str.match(regexp);
    return { noMatches, matches };
};
const Highlight = ({ str }) => str ? React.createElement("span", { className: clsx(styles['filtering-match-highlight']) }, str) : null;
export default function HighlightMatch({ str, highlightText }) {
    if (!str || !highlightText) {
        return React.createElement("span", null, str);
    }
    if (str === highlightText) {
        return React.createElement(Highlight, { str: str });
    }
    const { noMatches, matches } = splitOnFiltering(str, highlightText);
    const highlighted = [];
    noMatches.forEach((noMatch, idx) => {
        highlighted.push(React.createElement("span", { key: `noMatch-${idx}` }, noMatch));
        if (matches && idx < matches.length) {
            highlighted.push(React.createElement(Highlight, { key: `match-${idx}`, str: matches[idx] }));
        }
    });
    return React.createElement("span", null, highlighted);
}
//# sourceMappingURL=highlight-match.js.map