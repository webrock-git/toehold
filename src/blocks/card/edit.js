import { useBlockProps, RichText } from '@wordpress/block-editor';
import './editor.scss';
import Settings from './settings';
import classNames from 'classnames';

export default function Edit({ attributes, setAttributes, clientId }) {
	const blockProps = useBlockProps({
		className: classNames('toehold-card', attributes?.cardThumbnailRibbon?.key)
	});
	return (
		<>
			<Settings attributes={attributes} setAttributes={setAttributes} clientId={clientId} />
			<div {...blockProps}>
				<div className="toehold-card-wrapper">
					<div className='toehold-card-image-wrapper'>
						<img
							className="toehold-card-image"
							src={attributes?.cardThumbnail?.url}
							alt={attributes?.cardThumbnailAlt || attributes?.cardThumbnail?.alt}
						/>
						<div className="toehold-card-image-ribbon">
							<span>{attributes?.cardThumbnailRibbon?.name}</span>
						</div>
						<h3 className="toehold-card-tour-name">{attributes?.cardTourName}</h3>
					</div>
					<div className='toehold-card-content'>
						<div className="toehold-card-content-header">
							<RichText
								tagName='h3'
								className='toehold-card-content-title'
								value={attributes?.cardHeaderTitle}
								onChange={(value) => setAttributes({ cardHeaderTitle: value })}
							/>
							<RichText
								tagName='p'
								className='toehold-card-content-subtitle'
								value={attributes?.cardHeaderSubtitle}
								onChange={(value) => setAttributes({ cardHeaderSubtitle: value })}
							/>
						</div>
						<div className="toehold-card-content-body">
							<p className="toehold-card-content-date">
								<span className="toehold-card-content-title">Date:</span>
								<RichText
									tagName='span'
									className='toehold-card-content-date-text'
									value={attributes?.cardContentDate}
									onChange={(value) => setAttributes({ cardContentDate: value })}
								/>
							</p>
							<p className="toehold-card-content-duration">
								<span className="toehold-card-content-title">Duration:</span>
								<RichText
									tagName='span'
									className='toehold-card-content-duration-text'
									value={attributes?.cardContentDuration}
									onChange={(value) => setAttributes({ cardContentDuration: value })}
								/>
							</p>
							<p className="toehold-card-content-skipper">
								<span className="toehold-card-content-title">Skipper:</span>
								<RichText
									tagName='span'
									className='toehold-card-content-skipper-text'
									value={attributes?.cardContentSkipper}
									onChange={(value) => setAttributes({ cardContentSkipper: value })}
								/>
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
