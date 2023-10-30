import { useBlockProps, useInnerBlocksProps, RichText } from '@wordpress/block-editor';
import classNames from 'classnames';
export default function save({ attributes }) {
	const blockProps = useBlockProps.save({
		className: classNames('toehold-card', attributes?.blockClass)
	});

	const innerBlockProps = useInnerBlocksProps.save({
		className: 'toehold-card-image-wrapper',
	})

	return (
		<>
			<style>{attributes?.blockCSS}</style>
			<div {...blockProps}>
				<div className="toehold-card-wrapper">
					<div {...innerBlockProps}></div>
					<div className='toehold-card-content'>
						<div className="toehold-card-content-header">
							<RichText.Content
								tagName='h3'
								className='toehold-card-content-title'
								value={attributes?.cardHeaderTitle}
							/>
							<RichText.Content
								tagName='p'
								className='toehold-card-content-subtitle'
								value={attributes?.cardHeaderSubtitle}
							/>
						</div>
						<div className="toehold-card-content-body">
							<p className="toehold-card-content-date">
								<span className="toehold-card-content-title">Date:</span>
								<RichText.Content
									tagName='span'
									className='toehold-card-content-date-text'
									value={attributes?.cardContentDate}
								/>
							</p>
							<p className="toehold-card-content-duration">
								<span className="toehold-card-content-title">Duration:</span>
								<RichText.Content
									tagName='span'
									className='toehold-card-content-duration-text'
									value={attributes?.cardContentDuration}
								/>
							</p>
							<p className="toehold-card-content-skipper">
								<span className="toehold-card-content-title">Skipper:</span>
								<RichText.Content
									tagName='span'
									className='toehold-card-content-skipper-text'
									value={attributes?.cardContentSkipper}
								/>
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
