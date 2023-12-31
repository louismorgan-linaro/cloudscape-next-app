// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { useCallback, useEffect, useRef, useState } from 'react';
import { getAceTheme, getDefaultConfig, getDefaultTheme } from './util';
export function useEditor(ace, loading) {
    const editorRef = useRef(null);
    const [editor, setEditor] = useState(null);
    useEffect(() => {
        const elem = editorRef.current;
        if (!ace || !elem) {
            return;
        }
        const config = getDefaultConfig(ace);
        setEditor(ace.edit(elem, Object.assign(Object.assign({}, config), { theme: getAceTheme(getDefaultTheme(elem)) })));
    }, [ace, loading]);
    return { editorRef, editor };
}
export function useSyncEditorLabels(editor, { controlId, ariaLabel, ariaLabelledby, ariaDescribedby, }) {
    useEffect(() => {
        if (!editor) {
            return;
        }
        const { textarea } = editor.renderer;
        if (!textarea) {
            return;
        }
        const updateAttribute = (attribute, value) => value ? textarea.setAttribute(attribute, value) : textarea.removeAttribute(attribute);
        updateAttribute('id', controlId);
        updateAttribute('aria-label', ariaLabel);
        updateAttribute('aria-labelledby', ariaLabelledby);
        updateAttribute('aria-describedby', ariaDescribedby);
    }, [ariaLabel, ariaDescribedby, ariaLabelledby, controlId, editor]);
}
export function useSyncEditorSize(editor, { width, height }) {
    useEffect(() => {
        editor === null || editor === void 0 ? void 0 : editor.resize();
    }, [editor, width, height]);
    const onResize = useCallback(() => {
        editor === null || editor === void 0 ? void 0 : editor.resize();
    }, [editor]);
    return { onResize };
}
export function useSyncEditorValue(editor, value) {
    useEffect(() => {
        if (!editor) {
            return;
        }
        if (value === editor.getValue()) {
            return;
        }
        const pos = editor.session.selection.toJSON();
        editor.setValue(value, -1);
        editor.session.selection.fromJSON(pos);
    }, [editor, value]);
}
export function useSyncEditorLanguage(editor, language) {
    useEffect(() => {
        editor === null || editor === void 0 ? void 0 : editor.session.setMode(`ace/mode/${language}`);
    }, [editor, language]);
}
export function useSyncEditorWrapLines(editor, wrapLines) {
    useEffect(() => {
        editor === null || editor === void 0 ? void 0 : editor.session.setUseWrapMode(wrapLines !== null && wrapLines !== void 0 ? wrapLines : true);
    }, [editor, wrapLines]);
}
export function useSyncEditorTheme(editor, theme) {
    useEffect(() => {
        editor === null || editor === void 0 ? void 0 : editor.setTheme(getAceTheme(theme));
    }, [editor, theme]);
}
//# sourceMappingURL=use-editor.js.map