import {
    Button,
    TextControl,
    PanelBody,
    __experimentalSpacer as Spacer,
    SelectControl,
    TextareaControl,
    ToggleControl
} from '@wordpress/components';
import { memo } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import {
    InspectorControls,
    MediaUpload,
    MediaUploadCheck
} from '@wordpress/block-editor';
import { upload } from '@wordpress/icons';
import MenuURL from '@/components/menu-url';

const Settings = ({ attributes, setAttributes, clientId }) => {
    return (
        <InspectorControls>
            <PanelBody title={__('Thumbnail')} initialOpen={false}>
                <Spacer marginBottom={'20px'} marginTop={'10px'}>
                    <MediaUploadCheck>
                        <MediaUpload
                            onSelect={(media) =>
                                setAttributes({ cardThumbnail: media })
                            }
                            allowedTypes={['image/jpg', 'image/jpeg', 'image/png']}
                            value={attributes?.cardThumbnail?.id}
                            multiple={false}
                            title='Upload Thumbnail'
                            render={({ open }) => {
                                return (
                                    <Button
                                        className="toehold-card-thumbnail-button"
                                        onClick={open}
                                        icon={attributes?.cardThumbnail?.url ? <img style={{ width: '20px', height: '20px', objectFit: 'cover', borderRadius: '50%' }} src={attributes?.cardThumbnail?.url} /> : upload}
                                        iconSize={30}
                                        iconPosition='left'
                                        style={{ width: '100%', justifyContent: 'flex-start', border: '1px solid #00000026', alignItems: 'center', gap: '8px' }}
                                    >
                                        {attributes?.cardThumbnail?.filename || __('Upload')}
                                    </Button>
                                );
                            }}
                        />
                    </MediaUploadCheck>
                </Spacer>

            </PanelBody>
            <PanelBody title='Destination Details' initialOpen={false}>
                <TextControl
                    onChange={(value) => setAttributes({ destinationName: value })}
                    value={attributes?.destinationName}
                    label={__('Destination Name')}
                />
                <TextControl
                    onChange={(value) => setAttributes({ destinationRegion: value })}
                    value={attributes?.destinationRegion}
                    label={__('Destination Region')}
                />
                <TextareaControl
                    onChange={(value) => setAttributes({ destinationDescription: value })}
                    value={attributes?.destinationDescription}
                    label={__('Destination Description')}
                />
            </PanelBody>
            <PanelBody title='Tour1 Details' initialOpen={false}>
                <ToggleControl
                    label={__('Enable')}
                    checked={attributes?.tour1Enable}
                    onChange={(value) => setAttributes({ tour1Enable: value })}
                />
                <TextControl
                    onChange={(value) => setAttributes({ tour1Name: value })}
                    value={attributes?.tour1Name}
                    label={__('Tour Name')}
                />
                <SelectControl
                    label={__('Tour Type')}
                    value={attributes?.tour1Type}
                    onChange={(value) => setAttributes({ tour1Type: value })}
                    options={[
                        {
                            label: "Wildlife Photography Tour",
                            value: "Wildlife Photography Tour"
                        },
                        {
                            label: "Photography Tour",
                            value: "Photography Tour"
                        },
                        {
                            label: "Landscape Photography Tour",
                            value: "Landscape Photography Tour"
                        },
                        {
                            label: "Heritage & Culture Photography Tour",
                            value: "Heritage & Culture Photography Tour"
                        },
                        {
                            label: "Bird Photography Tour",
                            value: "Bird Photography Tour"
                        },
                    ]}
                />
                <TextControl
                    onChange={(value) => setAttributes({ tour1Dates: value })}
                    value={attributes?.tour1Dates}
                    label={__('Dates')}
                />
                <TextControl
                    onChange={(value) => setAttributes({ tour1Duration: value })}
                    value={attributes?.tour1Duration}
                    label={__('Duration')}
                />
                <TextControl
                    onChange={(value) => setAttributes({ tour1OriginalPrice: value })}
                    value={attributes?.tour1OriginalPrice}
                    label={__('Original Price')}
                />
                <TextControl
                    onChange={(value) => setAttributes({ tour1OfferPrice: value })}
                    value={attributes?.tour1OfferPrice}
                    label={__('Offer Price')}
                />
                <TextControl
                    onChange={(value) => setAttributes({ tour1PageLinkBtn: value })}
                    value={attributes?.tour1PageLinkBtn}
                    label={__('Button Text')}
                />
                <MenuURL
                    label="Button URL"
                    value={attributes?.tour1PageLink}
                    onChange={(value) => setAttributes({ tour1PageLink: value })}
                />
            </PanelBody>
            <PanelBody title='Tour2 Details' initialOpen={false}>
                <ToggleControl
                    label={__('Enable')}
                    checked={attributes?.tour2Enable}
                    onChange={(value) => setAttributes({ tour2Enable: value })}
                />
                <TextControl
                    onChange={(value) => setAttributes({ tour2Name: value })}
                    value={attributes?.tour2Name}
                    label={__('Tour Name')}
                />
                <SelectControl
                    label={__('Tour Type')}
                    value={attributes?.tour2Type}
                    onChange={(value) => setAttributes({ tour2Type: value })}
                    options={[
                        {
                            label: "Wildlife Photography Tour",
                            value: "Wildlife Photography Tour"
                        },
                        {
                            label: "Photography Tour",
                            value: "Photography Tour"
                        },
                        {
                            label: "Landscape Photography Tour",
                            value: "Landscape Photography Tour"
                        },
                        {
                            label: "Heritage & Culture Photography Tour",
                            value: "Heritage & Culture Photography Tour"
                        },
                        {
                            label: "Bird Photography Tour",
                            value: "Bird Photography Tour"
                        },
                    ]}
                />
                <TextControl
                    onChange={(value) => setAttributes({ tour2Dates: value })}
                    value={attributes?.tour2Dates}
                    label={__('Dates')}
                />
                <TextControl
                    onChange={(value) => setAttributes({ tour2Duration: value })}
                    value={attributes?.tour2Duration}
                    label={__('Duration')}
                />
                <TextControl
                    onChange={(value) => setAttributes({ tour2OriginalPrice: value })}
                    value={attributes?.tour2OriginalPrice}
                    label={__('Original Price')}
                />
                <TextControl
                    onChange={(value) => setAttributes({ tour2OfferPrice: value })}
                    value={attributes?.tour2OfferPrice}
                    label={__('Offer Price')}
                />
                <TextControl
                    onChange={(value) => setAttributes({ tour2PageLinkBtn: value })}
                    value={attributes?.tour2PageLinkBtn}
                    label={__('Button Text')}
                />
                <MenuURL
                    label="Button URL"
                    value={attributes?.tour2PageLink}
                    onChange={(value) => setAttributes({ tour2PageLink: value })}
                />
            </PanelBody>
            <PanelBody title='Tour3 Details' initialOpen={false}>
                <ToggleControl
                    label={__('Enable')}
                    checked={attributes?.tour3Enable}
                    onChange={(value) => setAttributes({ tour3Enable: value })}
                />
                <TextControl
                    onChange={(value) => setAttributes({ tour3Name: value })}
                    value={attributes?.tour3Name}
                    label={__('Tour Name')}
                />
                <SelectControl
                    label={__('Tour Type')}
                    value={attributes?.tour3Type}
                    onChange={(value) => setAttributes({ tour3Type: value })}
                    options={[
                        {
                            label: "Regular Photo Tour",
                            value: "Regular Photo Tour"
                        },
                        {
                            label: "Full Day Photo Tour",
                            value: "Full Day Photo Tour"
                        },
                        {
                            label: "Wildlife Photography Tour",
                            value: "Wildlife Photography Tour"
                        },
                        {
                            label: "Photography Tour",
                            value: "Photography Tour"
                        },
                        {
                            label: "Photography Tour",
                            value: "Photography Tour"
                        },
                        {
                            label: "Landscape Photography Tour",
                            value: "Landscape Photography Tour"
                        },
                        {
                            label: "Bird Photography Tour",
                            value: "Bird Photography Tour"
                        },
                    ]}
                />
                <TextControl
                    onChange={(value) => setAttributes({ tour3Dates: value })}
                    value={attributes?.tour3Dates}
                    label={__('Dates')}
                />
                <TextControl
                    onChange={(value) => setAttributes({ tour3Duration: value })}
                    value={attributes?.tour3Duration}
                    label={__('Duration')}
                />
                <TextControl
                    onChange={(value) => setAttributes({ tour3OriginalPrice: value })}
                    value={attributes?.tour3OriginalPrice}
                    label={__('Original Price')}
                />
                <TextControl
                    onChange={(value) => setAttributes({ tour3OfferPrice: value })}
                    value={attributes?.tour3OfferPrice}
                    label={__('Offer Price')}
                />
                <TextControl
                    onChange={(value) => setAttributes({ tour3PageLinkBtn: value })}
                    value={attributes?.tour3PageLinkBtn}
                    label={__('Button Text')}
                />
                <MenuURL
                    label="Button URL"
                    value={attributes?.tour3PageLink}
                    onChange={(value) => setAttributes({ tour3PageLink: value })}
                />
            </PanelBody>
            <PanelBody title='Card Link' initialOpen={false}>
                <TextControl
                    onChange={(value) => setAttributes({ cardButtonLinkText: value })}
                    value={attributes?.cardButtonLinkText}
                    label={__('Link Text')}
                />
                <MenuURL
                    label="Link URL"
                    value={attributes?.cardButtonLinkURL}
                    onChange={(value) => setAttributes({ cardButtonLinkURL: value })}
                />
            </PanelBody>
        </InspectorControls>
    )
}

export default memo(Settings);