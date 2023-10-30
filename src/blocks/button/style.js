const dynamicStyles = (attributes) => {
    const WRAPPER = `.${attributes?.blockClass}`;
    return (`
        ${WRAPPER} {
            width: ${attributes?.buttonWidth};
            height: ${attributes?.buttonHeight};
        }
    `)
}

export default dynamicStyles;