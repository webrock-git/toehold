const dynamicStyles = (attributes) => {
    const WRAPPER = `.${attributes?.blockClass}`;
    return (`
        ${WRAPPER} .toehold-card-image-badge{
            color: ${attributes?.badgeTextColor};
            background-color: ${attributes?.badgeBackgroundColor};
            font-size: ${attributes?.badgeTextFontSize};
            right: ${attributes?.badgePositionFromRight};
            top: ${attributes?.badgePositionFromTop};
        }

        ${WRAPPER} .toehold-card-image-caption{
            font-size: ${attributes?.captionFontSize};
            font-weight: ${attributes?.captionFontWeight?.fontWeight};
            font-style: ${attributes?.captionFontWeight?.fontStyle};
            color: ${attributes?.captionColor};
            bottom: ${attributes?.captionPositionFromBottom};
            text-align: ${attributes?.captionAlignment};
        }
    `)
}

export default dynamicStyles;