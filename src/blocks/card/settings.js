import {
    ColorPalette,
    PanelBody,
    __experimentalHeading as Heading,
    __experimentalUnitControl as UnitControl,
    __experimentalSpacer as Spacer,
    __experimentalBoxControl as BoxControl,
    __experimentalDivider as Divider,
    __experimentalBorderControl as BorderControl,
    SelectControl
} from '@wordpress/components';
import { memo, useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import {
    InspectorControls, __experimentalFontAppearanceControl
        as FontAppearanceControl, FontSizePicker, HeightControl
} from '@wordpress/block-editor';
import dynamicStyles from './style';
import { _x } from "@wordpress/i18n";

const Settings = ({ attributes, setAttributes, clientId }) => {
    const {
        blockClass,
        cardHeaderTitle,
        cardHeaderSubtitle,
        cardContentDate,
        cardContentDuration,
        cardContentSkipper,
        cardTitleColor,
        cardTitleFontSize,
        cardTitleFontWeight,
        cardTitleMargin,
        cardSubTitleColor,
        cardSubTitleFontSize,
        cardSubTitleFontWeight,
        cardSubTitleMargin,
        cardDateLabelColor,
        cardDateLabelFontSize,
        cardDateLabelFontWeight,
        cardDateColor,
        cardDateFontSize,
        cardDateFontWeight,
        cardDateMargin,
        cardDurationLabelColor,
        cardDurationLabelFontSize,
        cardDurationLabelFontWeight,
        cardDurationColor,
        cardDurationFontSize,
        cardDurationFontWeight,
        cardDurationMargin,
        cardSkipperLabelColor,
        cardSkipperLabelFontSize,
        cardSkipperLabelFontWeight,
        cardSkipperColor,
        cardSkipperFontSize,
        cardSkipperFontWeight,
        cardSkipperMargin,
        cardWrapperBackground,
        cardWrapperBorder,
        cardWrapperBoxShadow,
        cardWrapperBorderRadius,
        cardWrapperPadding,
        cardContentAlign
    } = attributes;

    useEffect(() => {
        setAttributes({
            blockClass: `toehold-${clientId}`,
        })
    }, [clientId]);

    useEffect(() => {
        setAttributes({
            blockCSS: dynamicStyles(attributes),
        })
    }, [
        blockClass,
        cardHeaderTitle,
        cardHeaderSubtitle,
        cardContentDate,
        cardContentDuration,
        cardContentSkipper,
        cardTitleColor,
        cardTitleFontSize,
        cardTitleFontWeight,
        cardTitleMargin,
        cardSubTitleColor,
        cardSubTitleFontSize,
        cardSubTitleFontWeight,
        cardSubTitleMargin,
        cardDateLabelColor,
        cardDateLabelFontSize,
        cardDateLabelFontWeight,
        cardDateColor,
        cardDateFontSize,
        cardDateFontWeight,
        cardDateMargin,
        cardDurationLabelColor,
        cardDurationLabelFontSize,
        cardDurationLabelFontWeight,
        cardDurationColor,
        cardDurationFontSize,
        cardDurationFontWeight,
        cardDurationMargin,
        cardSkipperLabelColor,
        cardSkipperLabelFontSize,
        cardSkipperLabelFontWeight,
        cardSkipperColor,
        cardSkipperFontSize,
        cardSkipperFontWeight,
        cardSkipperMargin,
        cardWrapperBackground,
        cardWrapperBorder,
        cardWrapperBoxShadow,
        cardWrapperBorderRadius,
        cardWrapperPadding,
        cardContentAlign
    ])


    console.log(attributes?.cardWrapperBorder);

    return (
        <InspectorControls>
            <PanelBody title={__('Wrapper')} initialOpen={false}>
                <Heading>{__('Background Color')}</Heading>
                <ColorPalette
                    value={attributes.cardWrapperBackground}
                    onChange={(color) => setAttributes({ cardWrapperBackground: color })}
                />
                <BorderControl 
                    label='Border'
                    value={attributes?.cardWrapperBorder}
                    onChange={(value) => setAttributes({cardWrapperBorder: value})}
                />

                <BoxControl
                    label={'Border Radius'}
                    onChange={(value) => setAttributes({ cardWrapperBorderRadius: value })}
                    value={attributes?.cardWrapperBorderRadius}
                />
                <BoxControl
                    label={'Padding'}
                    onChange={(value) => setAttributes({ cardWrapperPadding: value })}
                    value={attributes?.cardWrapperPadding}
                />
                <SelectControl 
                    label={__('Content Alignment')}
                    value={attributes.cardContentAlign}
                    onChange={(value) => setAttributes({ cardContentAlign: value })}
                    options={[
                        { label: 'Left', value: 'left' },
                        { label: 'Center', value: 'center' },
                        { label: 'Right', value: 'right' },
                    ]}
                />
                <Heading>Box Shadow</Heading>
                <Heading>{__('Shadow Color')}</Heading>
                <ColorPalette
                    value={attributes.cardWrapperBoxShadow?.color}
                    onChange={(color) => setAttributes({ 
                        cardWrapperBoxShadow: {
                            ...attributes?.cardWrapperBoxShadow,
                            color: color
                        }
                    })}
                    enableAlpha={true}
                />
                <HeightControl
                    label="Horizontal"
                    onChange={(value) => setAttributes({
                        cardWrapperBoxShadow: {
                            ...attributes?.cardWrapperBoxShadow,
                            horizontal: value
                        }
                    })}
                    value={attributes?.cardWrapperBoxShadow?.horizontal}
                />
                <HeightControl
                    label="Vertical"
                    onChange={(value) => setAttributes({
                        cardWrapperBoxShadow: {
                            ...attributes?.cardWrapperBoxShadow,
                            vertical: value
                        }
                    })}
                    value={attributes?.cardWrapperBoxShadow?.vertical}
                />
                <HeightControl
                    label="Blur"
                    onChange={(value) => setAttributes({
                        cardWrapperBoxShadow: {
                            ...attributes?.cardWrapperBoxShadow,
                            blur: value
                        }
                    })}
                    value={attributes?.cardWrapperBoxShadow?.blur}
                />
                <HeightControl
                    label="Spread"
                    onChange={(value) => setAttributes({
                        cardWrapperBoxShadow: {
                            ...attributes?.cardWrapperBoxShadow,
                            spread: value
                        }
                    })}
                    value={attributes?.cardWrapperBoxShadow?.spread}
                />
                <Divider />
            </PanelBody>
            <PanelBody title={__('Title')} initialOpen={false}>
                <Heading>{__('Color')}</Heading>
                <ColorPalette
                    value={attributes.cardTitleColor}
                    onChange={(color) => setAttributes({ cardTitleColor: color })}
                />
                <FontSizePicker
                    __nextHasNoMarginBottom
                    value={attributes?.cardTitleFontSize}
                    onChange={(newFontSize) => {
                        setAttributes({ cardTitleFontSize: newFontSize });
                    }}
                />
                <Spacer>
                    <FontAppearanceControl
                        value={attributes?.cardTitleFontWeight}
                        onChange={(value) => setAttributes({ cardTitleFontWeight: value })}
                    />
                </Spacer>
                <BoxControl
                    label={'Margin'}
                    onChange={(value) => setAttributes({ cardTitleMargin: value })}
                    value={attributes?.cardTitleMargin}
                />
            </PanelBody>
            <PanelBody title={__('Sub Title')} initialOpen={false}>
                <Heading>{__('Color')}</Heading>
                <ColorPalette
                    value={attributes.cardSubTitleColor}
                    onChange={(color) => setAttributes({ cardSubTitleColor: color })}
                />
                <FontSizePicker
                    __nextHasNoMarginBottom
                    value={attributes?.cardSubTitleFontSize}
                    onChange={(newFontSize) => {
                        setAttributes({ cardSubTitleFontSize: newFontSize });
                    }}
                />
                <Spacer>
                    <FontAppearanceControl
                        value={attributes?.cardSubTitleFontWeight}
                        onChange={(value) => setAttributes({ cardSubTitleFontWeight: value })}
                    />
                </Spacer>
                <BoxControl
                    label={'Margin'}
                    onChange={(value) => setAttributes({ cardSubTitleMargin: value })}
                    value={attributes?.cardSubTitleMargin}
                />
            </PanelBody>
            <PanelBody title={__('Date')} initialOpen={false}>
                <PanelBody title={__('Date Label')} initialOpen={false}>
                    <Heading>{__('Color')}</Heading>
                    <ColorPalette
                        value={attributes.cardDateLabelColor}
                        onChange={(color) => setAttributes({ cardDateLabelColor: color })}
                    />
                    <FontSizePicker
                        __nextHasNoMarginBottom
                        value={attributes?.cardDateLabelFontSize}
                        onChange={(newFontSize) => {
                            setAttributes({ cardDateLabelFontSize: newFontSize });
                        }}
                    />
                    <Spacer>
                        <FontAppearanceControl
                            value={attributes?.cardDateLabelFontWeight}
                            onChange={(value) => setAttributes({ cardDateLabelFontWeight: value })}
                        />
                    </Spacer>
                </PanelBody>
                <PanelBody title={__('Date Text')} initialOpen={false}>
                    <Heading>{__('Color')}</Heading>
                    <ColorPalette
                        value={attributes.cardDateColor}
                        onChange={(color) => setAttributes({ cardDateColor: color })}
                    />
                    <FontSizePicker
                        __nextHasNoMarginBottom
                        value={attributes?.cardDateFontSize}
                        onChange={(newFontSize) => {
                            setAttributes({ cardDateFontSize: newFontSize });
                        }}
                    />
                    <Spacer>
                        <FontAppearanceControl
                            value={attributes?.cardDateFontWeight}
                            onChange={(value) => setAttributes({ cardDateFontWeight: value })}
                        />
                    </Spacer>
                </PanelBody>
                <BoxControl
                    label={'Date Margin'}
                    onChange={(value) => setAttributes({ cardDateMargin: value })}
                    value={attributes?.cardDateMargin}
                />
            </PanelBody>
            <PanelBody title={__('Duration')} initialOpen={false}>
                <PanelBody title={__('Duration Label')} initialOpen={false}>
                    <Heading>{__('Color')}</Heading>
                    <ColorPalette
                        value={attributes.cardDurationLabelColor}
                        onChange={(color) => setAttributes({ cardDurationLabelColor: color })}
                    />
                    <FontSizePicker
                        __nextHasNoMarginBottom
                        value={attributes?.cardDurationLabelFontSize}
                        onChange={(newFontSize) => {
                            setAttributes({ cardDurationLabelFontSize: newFontSize });
                        }}
                    />
                    <Spacer>
                        <FontAppearanceControl
                            value={attributes?.cardDurationLabelFontWeight}
                            onChange={(value) => setAttributes({ cardDurationLabelFontWeight: value })}
                        />
                    </Spacer>
                </PanelBody>
                <PanelBody title={__('Duration Text')} initialOpen={false}>
                    <Heading>{__('Color')}</Heading>
                    <ColorPalette
                        value={attributes.cardDurationColor}
                        onChange={(color) => setAttributes({ cardDurationColor: color })}
                    />
                    <FontSizePicker
                        __nextHasNoMarginBottom
                        value={attributes?.cardDurationFontSize}
                        onChange={(newFontSize) => {
                            setAttributes({ cardDurationFontSize: newFontSize });
                        }}
                    />
                    <Spacer>
                        <FontAppearanceControl
                            value={attributes?.cardDurationFontWeight}
                            onChange={(value) => setAttributes({ cardDurationFontWeight: value })}
                        />
                    </Spacer>
                </PanelBody>
                <BoxControl
                    label={'Duration Margin'}
                    onChange={(value) => setAttributes({ cardDurationMargin: value })}
                    value={attributes?.cardDurationMargin}
                />
            </PanelBody>
            <PanelBody title={__('Skipper')} initialOpen={false}>
                <PanelBody title={__('Skipper Label')} initialOpen={false}>
                    <Heading>{__('Color')}</Heading>
                    <ColorPalette
                        value={attributes.cardSkipperLabelColor}
                        onChange={(color) => setAttributes({ cardSkipperLabelColor: color })}
                    />
                    <FontSizePicker
                        __nextHasNoMarginBottom
                        value={attributes?.cardSkipperLabelFontSize}
                        onChange={(newFontSize) => {
                            setAttributes({ cardSkipperLabelFontSize: newFontSize });
                        }}
                    />
                    <Spacer>
                        <FontAppearanceControl
                            value={attributes?.cardSkipperLabelFontWeight}
                            onChange={(value) => setAttributes({ cardSkipperLabelFontWeight: value })}
                        />
                    </Spacer>
                </PanelBody>
                <PanelBody title={__('Skipper Name')} initialOpen={false}>
                    <Heading>{__('Color')}</Heading>
                    <ColorPalette
                        value={attributes.cardSkipperColor}
                        onChange={(color) => setAttributes({ cardSkipperColor: color })}
                    />
                    <FontSizePicker
                        __nextHasNoMarginBottom
                        value={attributes?.cardSkipperFontSize}
                        onChange={(newFontSize) => {
                            setAttributes({ cardSkipperFontSize: newFontSize });
                        }}
                    />
                    <Spacer>
                        <FontAppearanceControl
                            value={attributes?.cardSkipperFontWeight}
                            onChange={(value) => setAttributes({ cardSkipperFontWeight: value })}
                        />
                    </Spacer>
                </PanelBody>
                <BoxControl
                    label={'Skipper Margin'}
                    onChange={(value) => setAttributes({ cardSkipperMargin: value })}
                    value={attributes?.cardSkipperMargin}
                />
            </PanelBody>
        </InspectorControls>
    )
}

export default memo(Settings);