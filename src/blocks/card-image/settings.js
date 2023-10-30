import {
    ColorPalette,
    PanelBody,
    __experimentalHeading as Heading,
    __experimentalUnitControl as UnitControl,
    __experimentalSpacer as Spacer,
    TextControl
} from '@wordpress/components';
import { memo, useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import {
    InspectorControls, __experimentalFontAppearanceControl
        as FontAppearanceControl, FontSizePicker
} from '@wordpress/block-editor';
import dynamicStyles from './style';
import { _x } from "@wordpress/i18n";

const Settings = ({ attributes, setAttributes, clientId }) => {
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
        attributes?.blockClass,
        attributes?.badgeTextColor,
        attributes?.badgeBackgroundColor,
        attributes?.badgeTextFontSize,
        attributes?.badgePositionFromRight,
        attributes?.badgePositionFromTop,
        attributes?.captionFontSize,
        attributes?.captionFontWeight,
        attributes?.captionColor,
        attributes?.captionPositionFromBottom,
        attributes?.captionAlignment
    ])

    return (
        <InspectorControls>
            <PanelBody title={__('Badge')} initialOpen={true}>
                <TextControl
                    label="Badge Text"
                    value={attributes?.badgeText}
                    onChange={(value) => setAttributes({ badgeText: value })}
                />
                <Heading>{__('Text Color')}</Heading>
                <ColorPalette
                    value={attributes.badgeTextColor}
                    onChange={(color) => setAttributes({ badgeTextColor: color })}
                />
                <Heading>{__('Background Color')}</Heading>
                <ColorPalette
                    value={attributes.badgeBackgroundColor}
                    onChange={(color) => setAttributes({ badgeBackgroundColor: color })}
                />
                <FontSizePicker
                    __nextHasNoMarginBottom
                    value={attributes?.badgeTextFontSize}
                    onChange={(newFontSize) => {
                        setAttributes({ badgeTextFontSize: newFontSize });
                    }}
                />
                <UnitControl
                    label={'Position From Right'}
                    onChange={(value) => setAttributes({ badgePositionFromRight: value })}
                    value={attributes?.badgePositionFromRight}
                />
                <UnitControl
                    label={'Position From Top'}
                    onChange={(value) => setAttributes({ badgePositionFromTop: value })}
                    value={attributes?.badgePositionFromTop}
                />

            </PanelBody>
            <PanelBody title={__('Caption')} initialOpen={false}>
                <FontSizePicker
                    __nextHasNoMarginBottom
                    value={attributes?.captionFontSize}
                    onChange={(newFontSize) => {
                        setAttributes({ captionFontSize: newFontSize });
                    }}
                />
                <Spacer>
                    <FontAppearanceControl
                        value={attributes?.captionFontWeight}
                        onChange={(value) => setAttributes({ captionFontWeight: value })}
                    />
                </Spacer>
                <Heading>{__('Caption Color')}</Heading>
                <ColorPalette
                    value={attributes.captionColor}
                    onChange={(color) => setAttributes({ captionColor: color })}
                />
                <UnitControl
                    label={'Position From Bottom'}
                    onChange={(value) => setAttributes({ captionPositionFromBottom: value })}
                    value={attributes?.captionPositionFromBottom}
                />
            </PanelBody>
        </InspectorControls>
    )
}

export default memo(Settings);