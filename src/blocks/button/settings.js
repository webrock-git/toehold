import {
    TextControl,
    PanelBody,
    __experimentalUnitControl as UnitControl,
    TextareaControl,
    ToggleControl
} from '@wordpress/components';
import { memo, useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import MenuURL from '@/components/menu-url';

const Settings = ({ attributes, setAttributes, clientId }) => {
    const {
        isSmall,
        svg,
        buttonText,
        buttonLink,
        buttonTitleAttr,
        buttonRelAttr,
    } = attributes;

    useEffect(() => {
        setAttributes({
            blockClass: `toehold-${clientId}`,
        })
    }, [clientId]);

    return (
        <InspectorControls>
            <PanelBody title={'Button Settings'} initialOpen={true}>
                <ToggleControl
                    label="Is Small Button"
                    checked={isSmall}
                    onChange={(value) => setAttributes({ isSmall: value})}
                />
                <TextareaControl
                    help="Paste Your Svg here"
                    label="Button Icon"
                    onChange={(value) => {
                        let trimedValue = value.trim();
                        setAttributes({ svg: trimedValue });
                    }}
                    value={svg}
                />
                <TextControl
                    label="Label"
                    value={buttonText}
                    onChange={(value) => setAttributes({ buttonText: value })}
                />
                <MenuURL
                    label="Button Link"
                    value={buttonLink}
                    onChange={(value) => setAttributes({ buttonLink: value })}
                />
                <TextControl
                    label="Title Attribute"
                    value={buttonTitleAttr}
                    onChange={(value) => setAttributes({ buttonTitleAttr: value })}
                />
                <TextControl
                    label="Rel Attribute"
                    value={buttonRelAttr}
                    onChange={(value) => setAttributes({ buttonRelAttr: value })}
                />
            </PanelBody>
        </InspectorControls>
    )
}

export default memo(Settings);