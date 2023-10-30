import { useBlockProps, useInnerBlocksProps, RichText, BlockControls, AlignmentControl  } from '@wordpress/block-editor';
import './editor.scss';
import Settings from './settings';
import classNames from 'classnames';

export default function Edit({ attributes, setAttributes, clientId }) {
	const blockProps = useBlockProps({
		className: classNames('toehold-card-image-container', attributes?.blockClass)
	});
	const innerBlockProps = useInnerBlocksProps({
		className: 'toehold-card-image',
	}, {
		allowedBlocks: ['core/image'],
		template: [
			['core/image', {}],
		]
	});
	return (
		<>
			<style>{attributes?.blockCSS}</style>
			<BlockControls group="block">
				<AlignmentControl
					value={attributes.captionAlignment}
					onChange={(nextAlign) => {
						setAttributes({ captionAlignment: nextAlign });
					}}
				/>
			</BlockControls>
			<Settings attributes={attributes} setAttributes={setAttributes} clientId={clientId}/>
			<div {...blockProps}>
				<div className="toehold-card-image-badge">
					<span className="toehold-card-image-badge-text">{attributes?.badgeText}</span>
				</div>
				<div {...innerBlockProps}></div>
				<RichText
					tagName='h3'
					className='toehold-card-image-caption'
					value={attributes?.imageCaption}
					onChange={(value) => setAttributes({ imageCaption: value })}
				/>
			</div>
		</>
	)
}
