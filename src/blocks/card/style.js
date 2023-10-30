const dynamicStyles = (attributes) => {
    const WRAPPER = `.${attributes?.blockClass}`;
    return (`
        ${WRAPPER}.toehold-card{
            background-color: ${attributes?.cardWrapperBackground};
            border-style: ${attributes?.cardWrapperBorder?.style};
            border-color: ${attributes?.cardWrapperBorder?.color};
            border-width: ${attributes?.cardWrapperBorder?.width};
            border-top-left-radius: ${attributes?.cardWrapperBorderRadius?.top};
            border-top-right-radius: ${attributes?.cardWrapperBorderRadius?.right};
            border-bottom-right-radius: ${attributes?.cardWrapperBorderRadius?.bottom};
            border-bottom-left-radius: ${attributes?.cardWrapperBorderRadius?.left};
            padding-top: ${attributes?.cardWrapperPadding?.top};
            padding-right: ${attributes?.cardWrapperPadding?.right};
            padding-bottom: ${attributes?.cardWrapperPadding?.bottom};
            padding-left: ${attributes?.cardWrapperPadding?.left};
            box-shadow: ${attributes?.cardWrapperBoxShadow?.horizontal} ${attributes?.cardWrapperBoxShadow?.vertical} ${attributes?.cardWrapperBoxShadow?.blur} ${attributes?.cardWrapperBoxShadow?.spread} ${attributes?.cardWrapperBoxShadow?.color};
        }
        ${WRAPPER}.toehold-card :is(.toehold-card-content-title, .toehold-card-content-subtitle, .toehold-card-content-date, .toehold-card-content-duration, .toehold-card-content-skipper){
            text-align: ${attributes?.cardContentAlign};
        }
        ${WRAPPER} .toehold-card-content-header .toehold-card-content-title{
            color: ${attributes?.cardTitleColor};
            font-size: ${attributes?.cardTitleFontSize};
            font-weight: ${attributes?.cardTitleFontWeight?.fontWeight};
            font-style: ${attributes?.cardTitleFontWeight?.fontStyle};
            margin-top: ${attributes?.cardTitleMargin?.top};
            margin-right: ${attributes?.cardTitleMargin?.right};
            margin-left: ${attributes?.cardTitleMargin?.left};
            margin-bottom: ${attributes?.cardTitleMargin?.bottom};
        }
        ${WRAPPER} .toehold-card-content-header .toehold-card-content-subtitle{
            color: ${attributes?.cardSubTitleColor};
            font-size: ${attributes?.cardSubTitleFontSize};
            font-weight: ${attributes?.cardSubTitleFontWeight?.fontWeight};
            font-style: ${attributes?.cardSubTitleFontWeight?.fontStyle};
            margin-top: ${attributes?.cardSubTitleMargin?.top};
            margin-right: ${attributes?.cardSubTitleMargin?.right};
            margin-left: ${attributes?.cardSubTitleMargin?.left};
            margin-bottom: ${attributes?.cardSubTitleMargin?.bottom};
        }
        ${WRAPPER} .toehold-card-content-body .toehold-card-content-date{
            margin-top: ${attributes?.cardDateMargin?.top};
            margin-right: ${attributes?.cardDateMargin?.right};
            margin-left: ${attributes?.cardDateMargin?.left};
            margin-bottom: ${attributes?.cardDateMargin?.bottom};
        }
        ${WRAPPER} .toehold-card-content-body .toehold-card-content-date .toehold-card-content-title{
            color: ${attributes?.cardDateLabelColor};
            font-size: ${attributes?.cardDateLabelFontSize};
            font-weight: ${attributes?.cardDateLabelFontWeight?.fontWeight};
            font-style: ${attributes?.cardDateLabelFontWeight?.fontStyle};
        }

        ${WRAPPER} .toehold-card-content-body .toehold-card-content-date .toehold-card-content-date-text{
            color: ${attributes?.cardDateColor};
            font-size: ${attributes?.cardDateFontSize};
            font-weight: ${attributes?.cardDateFontWeight?.fontWeight};
            font-style: ${attributes?.cardDateFontWeight?.fontStyle};
        }
        ${WRAPPER} .toehold-card-content-body .toehold-card-content-duration{
            margin-top: ${attributes?.cardDurationMargin?.top};
            margin-right: ${attributes?.cardDurationMargin?.right};
            margin-left: ${attributes?.cardDurationMargin?.left};
            margin-bottom: ${attributes?.cardDurationMargin?.bottom};
        }
        ${WRAPPER} .toehold-card-content-body .toehold-card-content-duration .toehold-card-content-title{
            color: ${attributes?.cardDurationLabelColor};
            font-size: ${attributes?.cardDurationLabelFontSize};
            font-weight: ${attributes?.cardDurationLabelFontWeight?.fontWeight};
            font-style: ${attributes?.cardDurationLabelFontWeight?.fontStyle};
        }

        ${WRAPPER} .toehold-card-content-body .toehold-card-content-duration .toehold-card-content-duration-text{
            color: ${attributes?.cardDurationColor};
            font-size: ${attributes?.cardDurationFontSize};
            font-weight: ${attributes?.cardDurationFontWeight?.fontWeight};
            font-style: ${attributes?.cardDurationFontWeight?.fontStyle};
        }
        ${WRAPPER} .toehold-card-content-body .toehold-card-content-skipper{
            margin-top: ${attributes?.cardSkipperMargin?.top};
            margin-right: ${attributes?.cardSkipperMargin?.right};
            margin-left: ${attributes?.cardSkipperMargin?.left};
            margin-bottom: ${attributes?.cardSkipperMargin?.bottom};
        }
        ${WRAPPER} .toehold-card-content-body .toehold-card-content-skipper .toehold-card-content-title{
            color: ${attributes?.cardSkipperLabelColor};
            font-size: ${attributes?.cardSkipperLabelFontSize};
            font-weight: ${attributes?.cardSkipperLabelFontWeight?.fontWeight};
            font-style: ${attributes?.cardSkipperLabelFontWeight?.fontStyle};
        }

        ${WRAPPER} .toehold-card-content-body .toehold-card-content-skipper .toehold-card-content-skipper-text{
            color: ${attributes?.cardSkipperColor};
            font-size: ${attributes?.cardSkipperFontSize};
            font-weight: ${attributes?.cardSkipperFontWeight?.fontWeight};
            font-style: ${attributes?.cardSkipperFontWeight?.fontStyle};
        }
    `)
}

export default dynamicStyles;