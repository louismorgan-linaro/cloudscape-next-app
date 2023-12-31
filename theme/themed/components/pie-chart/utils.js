import styles from './styles.css.js';
const paddingLabels = 44; // = 2 * (size-lineHeight-body-100)
const defaultPadding = 12; // = space-s
const smallPadding = 8; // = space-xs
export const minLabelLineAngularPadding = Math.PI / 20;
export const dimensionsBySize = {
    small: {
        innerRadius: 33,
        outerRadius: 50,
        innerLabelPadding: smallPadding,
        padding: smallPadding,
        paddingLabels,
    },
    medium: {
        innerRadius: 66,
        outerRadius: 100,
        innerLabelPadding: defaultPadding,
        padding: defaultPadding,
        paddingLabels,
    },
    large: {
        innerRadius: 93,
        outerRadius: 140,
        innerLabelPadding: defaultPadding,
        padding: defaultPadding,
        paddingLabels,
    },
};
export const refreshDimensionsBySize = {
    small: Object.assign(Object.assign({}, dimensionsBySize.small), { innerRadius: 38, cornerRadius: 3 }),
    medium: Object.assign(Object.assign({}, dimensionsBySize.medium), { innerRadius: 75, cornerRadius: 4 }),
    large: Object.assign(Object.assign({}, dimensionsBySize.large), { innerRadius: 105, cornerRadius: 5 }),
};
/**
 * When `size` is a string ("small", "medium" or "large") the predefined pie chart element dimensions for classic and visual refresh are used.
 * When `size` is a number the outer and inner radii are computed and the rest of the dimensions are taken from the closest predefined size.
 */
export function getDimensionsBySize({ size, hasLabels, visualRefresh, }) {
    if (typeof size === 'string') {
        const dimensions = visualRefresh ? refreshDimensionsBySize[size] : dimensionsBySize[size];
        return Object.assign(Object.assign({}, dimensions), { size });
    }
    const sizeSpec = visualRefresh ? refreshDimensionsBySize : dimensionsBySize;
    const getPixelSize = (d) => d.outerRadius * 2 + d.padding * 2 + (hasLabels ? d.paddingLabels : 0) * 2;
    let matchedSize = 'small';
    if (size > getPixelSize(sizeSpec.medium)) {
        matchedSize = 'medium';
    }
    if (size > getPixelSize(sizeSpec.large)) {
        matchedSize = 'large';
    }
    const padding = sizeSpec[matchedSize].padding;
    const paddingLabels = hasLabels ? sizeSpec[matchedSize].paddingLabels : 0;
    const radiiRatio = sizeSpec[matchedSize].outerRadius / sizeSpec[matchedSize].innerRadius;
    const outerRadius = (size - 2 * paddingLabels - 2 * padding) / 2;
    const innerRadius = outerRadius / radiiRatio;
    return Object.assign(Object.assign({}, sizeSpec[matchedSize]), { outerRadius, innerRadius, size: matchedSize });
}
export const defaultDetails = (i18n, i18nStrings) => (datum, dataSum) => [
    { key: i18n('i18nStrings.detailsValue', i18nStrings.detailsValue) || '', value: datum.value },
    {
        key: i18n('i18nStrings.detailsPercentage', i18nStrings.detailsPercentage) || '',
        value: `${((datum.value * 100) / dataSum).toFixed(0)}%`,
    },
];
/**
 * Adjusts the position of the given label nodes to avoid visual overlapping.
 * @param nodes List of label nodes of the entire chart (both left and right side)
 * @param markers Markers array that was calculated in <Labels>, but we just need the `endY` values
 * @param leftSide Boolean flag whether we are processing the left or right side of the chart labels
 */
export const balanceLabelNodes = (nodes, markers, leftSide, radius) => {
    var _a;
    const MARGIN = 10;
    let previousBBox = null;
    // When traversing the right side of labels, we start at the beginning of the array and go forwards.
    // For the left side, we need to traverse backwards from the end, so that overlapping nodes are pushed down in the right order.
    let i = leftSide ? nodes.length - 1 : 0;
    while ((leftSide && i >= 0) || (!leftSide && i < nodes.length)) {
        const node = nodes[i];
        // Currently using dataset attributes to determine the base position.
        // This implementation can be changed back to using `getBBox` when we drop IE11 support.
        // Unfortunately, there is no good alternative for `getBBox` that is supported by IE11.
        // `getBoundingClientRect` works for width and height calculations in SVG, but the x/y positions are inaccurate.
        const x = parseFloat(node.getAttribute('data-x') || '0');
        const y = parseFloat(node.getAttribute('data-y') || '0');
        const box = {
            x,
            y,
            height: node.getBoundingClientRect().height,
        };
        const marker = markers[i];
        if (leftSide) {
            i--;
        }
        else {
            i++;
        }
        if (!previousBBox) {
            previousBBox = box;
            node.setAttribute('transform', '');
            continue;
        }
        if ((!leftSide && box.x < 0) || (leftSide && box.x >= 0)) {
            // We have reached a label that is on the other side of the chart, so we're done.
            break;
        }
        node.setAttribute('transform', '');
        // Calculate how much the current node is overlapping with the previous one.
        const yOffset = previousBBox.y + previousBBox.height + MARGIN - box.y;
        if (yOffset > 0) {
            const xOffset = computeXOffset(box, yOffset, radius) * (leftSide ? -1 : 1);
            // Move the label down.
            node.setAttribute('transform', `translate(${xOffset} ${yOffset})`);
            // Adjust the attached line accordingly.
            const lineNode = (_a = node.parentNode) === null || _a === void 0 ? void 0 : _a.querySelector(`.${styles['label-line']}`);
            if (lineNode) {
                const { endY, endX } = marker;
                lineNode.setAttribute('y2', '' + (endY + yOffset));
                lineNode.setAttribute('x2', '' + (endX + xOffset));
            }
            // Update the position accordingly to inform the next label
            box.y += yOffset;
            box.x += xOffset;
        }
        previousBBox = box;
    }
};
const squareDistance = (edge) => Math.pow(edge[0], 2) + Math.pow(edge[1], 2);
const computeXOffset = (box, yOffset, radius) => {
    const upperEdge = [box.x, box.y + yOffset];
    const lowerEdge = [box.x, box.y + box.height + yOffset];
    const closestEdge = squareDistance(upperEdge) < squareDistance(lowerEdge) ? upperEdge : lowerEdge;
    if (squareDistance(closestEdge) < Math.pow(radius, 2)) {
        return Math.sqrt(Math.pow(radius, 2) - Math.pow(closestEdge[1], 2)) - Math.abs(closestEdge[0]);
    }
    return 0;
};
export const computeSmartAngle = (startAngle, endAngle, optimize = false) => {
    if (!optimize || endAngle - startAngle < 2 * minLabelLineAngularPadding) {
        return (endAngle + startAngle) / 2;
    }
    const paddedStartAngle = startAngle + minLabelLineAngularPadding;
    const paddedEndAngle = endAngle - minLabelLineAngularPadding;
    if (paddedStartAngle < 0 && paddedEndAngle > 0) {
        return 0;
    }
    if (paddedStartAngle < Math.PI && paddedEndAngle > Math.PI) {
        return Math.PI;
    }
    const endAngleMinDistance = Math.min(paddedEndAngle, Math.abs(Math.PI - paddedEndAngle), 2 * Math.PI - paddedEndAngle);
    const startAngleMinDistance = Math.min(paddedStartAngle, Math.abs(Math.PI - paddedStartAngle), 2 * Math.PI - paddedStartAngle);
    if (endAngleMinDistance < startAngleMinDistance) {
        return paddedEndAngle;
    }
    return paddedStartAngle;
};
//# sourceMappingURL=utils.js.map