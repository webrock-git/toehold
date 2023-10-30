import { useBlockProps, useInnerBlocksProps, RichText } from '@wordpress/block-editor';
import classNames from 'classnames';
export default function save({ attributes }) {
	const blockProps = useBlockProps.save({
		className: classNames('toehold-card-image-container', attributes?.blockClass)
	});
	const innerBlockProps = useInnerBlocksProps.save({
		className: 'toehold-card-image',
	})

	return (
		<>
			<style>{attributes?.blockCSS}</style>
			<div {...blockProps}>
				<div className="toehold-card-image-badge">
					<span className="toehold-card-image-badge-text">{attributes?.badgeText}</span>
				</div>
				<div {...innerBlockProps}></div>
				<RichText.Content
					tagName='h3'
					className='toehold-card-image-caption'
					value={attributes?.imageCaption}
				/>
			</div>
		</>
	)
}
