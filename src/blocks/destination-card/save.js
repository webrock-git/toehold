import LinkAttributes from '@/components/link-attributes';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import classNames from 'classnames';
export default function save({ attributes }) {
	const blockProps = useBlockProps.save({
		className: classNames('toehold-card', attributes?.cardThumbnailRibbon?.key)
	})
	return (
		<div {...blockProps}>
			<div className="toehold-card-wrapper">
				<div className='toehold-card-image-wrapper' style={{ backgroundImage: `url("${attributes?.cardThumbnail?.url}")` }}>
					<RichText.Content
						tagName='h4'
						className='card-destination-name'
						value={attributes?.destinationName}
					/>
					<RichText.Content
						tagName='h4'
						className='card-destination-region'
						value={attributes?.destinationRegion}
					/>
					<RichText.Content
						tagName='p'
						className='card-destination-description'
						value={attributes?.destinationDescription}
					/>
					<RichText.Content
						tagName='a'
						className='card-destination-page-link-btn'
						value={attributes?.destinationPageLinkBtn}
					/>
				</div>
				<div className='toehold-tour-content-wrapper'>
					<div className="destination-card">
						{
							attributes?.tour1Enable && (
								<>
									<div className="card-content-left">
										<RichText.Content
											tagName='h3'
											className='card-tour-name'
											value={attributes?.tour1Name}
										/>
										<p className="card-tour-type">{attributes?.tour1Type}</p>
										{
											attributes?.tour1OriginalPrice && (
												<p className="card-tour-price">
													<span className="card-tour-price-label">Starts from</span>
													{
														attributes?.tour1OfferPrice && (
															<RichText.Content
																tagName='span'
																className='card-tour-offer-price-value'
																value={attributes?.tour1OfferPrice}
															/>
														)
													}
													<RichText.Content
														tagName='span'
														className={`card-tour-original-price-value ${attributes?.tour1OfferPrice ? 'has-offer-price' : ''}`}
														value={attributes?.tour1OriginalPrice}
													/>
												</p>
											)
										}
									</div>
									<div className="card-content-right">
										<RichText.Content
											tagName='p'
											className='card-tour-dates'
											value={attributes?.tour1Dates}
										/>
										<RichText.Content
											tagName='p'
											className='card-tour-duration'
											value={attributes?.tour1Duration}
										/>
										<RichText.Content
											tagName='a'
											className='card-tour-page-link'
											value={attributes?.tour1PageLinkBtn}
											{
												...LinkAttributes(
													attributes?.tour1PageLink
												)
											}
										/>
									</div>
								</>
							)
						}
					</div>
					<div className="destination-card">
						{
							attributes?.tour2Enable && (
								<>
									<div className="card-content-left">
										<RichText.Content
											tagName='h3'
											className='card-tour-name'
											value={attributes?.tour2Name}
										/>
										<p className="card-tour-type">{attributes?.tour2Type}</p>
										{
											attributes?.tour2OriginalPrice && (
												<p className="card-tour-price">
													<span className="card-tour-price-label">Starts from</span>
													{
														attributes?.tour2OfferPrice && (
															<RichText.Content
																tagName='span'
																className='card-tour-offer-price-value'
																value={attributes?.tour2OfferPrice}
															/>
														)
													}
													<RichText.Content
														tagName='span'
														className={`card-tour-original-price-value ${attributes?.tour2OfferPrice ? 'has-offer-price' : ''}`}
														value={attributes?.tour2OriginalPrice}
													/>
												</p>
											)
										}
									</div>
									<div className="card-content-right">
										<RichText.Content
											tagName='p'
											className='card-tour-dates'
											value={attributes?.tour2Dates}
										/>
										<RichText.Content
											tagName='p'
											className='card-tour-duration'
											value={attributes?.tour2Duration}
										/>
										<RichText.Content
											tagName='a'
											className='card-tour-page-link'
											value={attributes?.tour2PageLinkBtn}
											{
												...LinkAttributes(
													attributes?.tour2PageLink
												)
											}
										/>
									</div>
								</>
							)
						}
					</div>
					<div className="destination-card">
						{
							attributes?.tour3Enable && (
								<>
									<div className="card-content-left">
										<RichText.Content
											tagName='h3'
											className='card-tour-name'
											value={attributes?.tour3Name}
										/>
										<p className="card-tour-type">{attributes?.tour3Type}</p>
										{
											attributes?.tour3OriginalPrice && (
												<p className="card-tour-price">
													<span className="card-tour-price-label">Starts from</span>
													{
														attributes?.tour3OfferPrice && (
															<RichText.Content
																tagName='span'
																className='card-tour-offer-price-value'
																value={attributes?.tour3OfferPrice}
															/>
														)
													}
													<RichText.Content
														tagName='span'
														className={`card-tour-original-price-value ${attributes?.tour3OfferPrice ? 'has-offer-price' : ''}`}
														value={attributes?.tour3OriginalPrice}
													/>
												</p>
											)
										}
									</div>
									<div className="card-content-right">
										<RichText.Content
											tagName='p'
											className='card-tour-dates'
											value={attributes?.tour3Dates}
										/>
										<RichText.Content
											tagName='p'
											className='card-tour-duration'
											value={attributes?.tour3Duration}
										/>
										<RichText.Content
											tagName='a'
											className='card-tour-page-link'
											value={attributes?.tour3PageLinkBtn}
											{
												...LinkAttributes(
													attributes?.tour3PageLink
												)
											}
										/>
									</div>
								</>
							)
						}
					</div>
				</div>
				<div className="card-footer">
					<RichText.Content
						tagName='a'
						className='card-footer-page-link'
						value={attributes?.cardButtonLinkText}
						{
							...LinkAttributes(
								attributes?.cardButtonLinkURL
							)
						}
					/>
				</div>
			</div>
		</div>
	)
}
