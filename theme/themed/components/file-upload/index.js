// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { __rest } from "tslib";
import React from 'react';
import { applyDisplayName } from '../internal/utils/apply-display-name';
import InternalFileUpload from './internal';
import useBaseComponent from '../internal/hooks/use-base-component';
import { getExternalProps } from '../internal/utils/external-props';
const FileUpload = React.forwardRef((_a, ref) => {
    var { multiple, showFileSize, showFileLastModified, showFileThumbnail } = _a, restProps = __rest(_a, ["multiple", "showFileSize", "showFileLastModified", "showFileThumbnail"]);
    const baseComponentProps = useBaseComponent('FileUpload');
    const externalProps = getExternalProps(restProps);
    return (React.createElement(InternalFileUpload, Object.assign({ ref: ref, multiple: multiple, showFileSize: showFileSize, showFileLastModified: showFileLastModified, showFileThumbnail: showFileThumbnail }, externalProps, baseComponentProps)));
});
applyDisplayName(FileUpload, 'FileUpload');
export default FileUpload;
//# sourceMappingURL=index.js.map