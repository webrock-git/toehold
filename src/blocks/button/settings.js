import {
    TextControl,
    PanelBody,
    __experimentalUnitControl as UnitControl,
    TextareaControl
} from '@wordpress/components';
import { memo, useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import MenuURL from '@/components/menu-url';
import dynamicStyles from './style';

const Settings = ({ attributes, setAttributes, clientId }) => {
    const {
        blockClass,
        svg,
        isShowIcon,
        buttonText,
        buttonLink,
        buttonTitleAttr,
        buttonRelAttr,
        buttonWidth,
        buttonHeight
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
        svg,
        isShowIcon,
        buttonText,
        buttonLink,
        buttonWidth,
        buttonHeight
    ])

    return (
        <InspectorControls>
            <PanelBody title={'Button Settings'} initialOpen={true}>
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
            <PanelBody title={'Button Style'} initialOpen={false}>
                <UnitControl
                    label={'Button Width'}
                    onChange={(value) => setAttributes({ buttonWidth: value })}
                    value={buttonWidth}
                />
                <UnitControl
                    label={'Button Height'}
                    onChange={(value) => setAttributes({ buttonHeight: value })}
                    value={buttonHeight}
                />
            </PanelBody>
        </InspectorControls>
    )
}

export default memo(Settings);