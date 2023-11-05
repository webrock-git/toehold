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
					<div className='toehold-card-image-wrapper' style={{ backgroundImage: `url("${attributes?.cardThumbnail?.url}")` }}>
						<RichText
							tagName='h4'
							className='card-destination-name'
							value={attributes?.destinationName}
							onChange={(value) => setAttributes({ destinationName: value })}
						/>
						<RichText
							tagName='h4'
							className='card-destination-region'
							value={attributes?.destinationRegion}
							onChange={(value) => setAttributes({ destinationRegion: value })}
						/>
						<RichText
							tagName='p'
							className='card-destination-description'
							value={attributes?.destinationDescription}
							onChange={(value) => setAttributes({ destinationDescription: value })}
						/>
						<RichText
							tagName='a'
							className='card-destination-page-link-btn'
							value={attributes?.destinationPageLinkBtn}
							onChange={(value) => setAttributes({ destinationPageLinkBtn: value })}
						/>
					</div>
					<div className='toehold-tour-content-wrapper'>
						<div className="destination-card">
							{
								attributes?.tour1Enable && (
									<>
										<div className="card-content-left">
											<RichText
												tagName='h3'
												className='card-tour-name'
												value={attributes?.tour1Name}
												onChange={(value) => setAttributes({ tour1Name: value })}
											/>
											<p className="card-tour-type">{attributes?.tour1Type}</p>
											{
												attributes?.tour1OriginalPrice && (
													<p className="card-tour-price">
														<span className="card-tour-price-label">Starts from</span>
														{
															attributes?.tour1OfferPrice && (
																<RichText
																	tagName='span'
																	className='card-tour-offer-price-value'
																	value={attributes?.tour1OfferPrice}
																	onChange={(value) => setAttributes({ tour1OfferPrice: value })}
																/>
															)
														}
														<RichText
															tagName='span'
															className={`card-tour-original-price-value ${attributes?.tour1OfferPrice ? 'has-offer-price' : ''}`}
															value={attributes?.tour1OriginalPrice}
															onChange={(value) => setAttributes({ tour1OriginalPrice: value })}
														/>
													</p>
												)
											}
										</div>
										<div className="card-content-right">
											<RichText
												tagName='p'
												className='card-tour-dates'
												value={attributes?.tour1Dates}
												onChange={(value) => setAttributes({ tour1Dates: value })}
											/>
											<RichText
												tagName='p'
												className='card-tour-duration'
												value={attributes?.tour1Duration}
												onChange={(value) => setAttributes({ tour1Duration: value })}
											/>
											<RichText
												tagName='a'
												className='card-tour-page-link'
												value={attributes?.tour1PageLinkBtn}
												onChange={(value) => setAttributes({ tour1PageLinkBtn: value })}
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
											<RichText
												tagName='h3'
												className='card-tour-name'
												value={attributes?.tour2Name}
												onChange={(value) => setAttributes({ tour2Name: value })}
											/>
											<p className="card-tour-type">{attributes?.tour2Type}</p>
											{
												attributes?.tour2OriginalPrice && (
													<p className="card-tour-price">
														<span className="card-tour-price-label">Starts from</span>
														{
															attributes?.tour2OfferPrice && (
																<RichText
																	tagName='span'
																	className='card-tour-offer-price-value'
																	value={attributes?.tour2OfferPrice}
																	onChange={(value) => setAttributes({ tour2OfferPrice: value })}
																/>
															)
														}
														<RichText
															tagName='span'
															className={`card-tour-original-price-value ${attributes?.tour2OfferPrice ? 'has-offer-price' : ''}`}
															value={attributes?.tour2OriginalPrice}
															onChange={(value) => setAttributes({ tour2OriginalPrice: value })}
														/>
													</p>
												)
											}
										</div>
										<div className="card-content-right">
											<RichText
												tagName='p'
												className='card-tour-dates'
												value={attributes?.tour2Dates}
												onChange={(value) => setAttributes({ tour2Dates: value })}
											/>
											<RichText
												tagName='p'
												className='card-tour-duration'
												value={attributes?.tour2Duration}
												onChange={(value) => setAttributes({ tour2Duration: value })}
											/>
											<RichText
												tagName='a'
												className='card-tour-page-link'
												value={attributes?.tour2PageLinkBtn}
												onChange={(value) => setAttributes({ tour2PageLinkBtn: value })}
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
											<RichText
												tagName='h3'
												className='card-tour-name'
												value={attributes?.tour3Name}
												onChange={(value) => setAttributes({ tour3Name: value })}
											/>
											<p className="card-tour-type">{attributes?.tour3Type}</p>
											{
												attributes?.tour3OriginalPrice && (
													<p className="card-tour-price">
														<span className="card-tour-price-label">Starts from</span>
														{
															attributes?.tour3OfferPrice && (
																<RichText
																	tagName='span'
																	className='card-tour-offer-price-value'
																	value={attributes?.tour3OfferPrice}
																	onChange={(value) => setAttributes({ tour3OfferPrice: value })}
																/>
															)
														}
														<RichText
															tagName='span'
															className={`card-tour-original-price-value ${attributes?.tour3OfferPrice ? 'has-offer-price' : ''}`}
															value={attributes?.tour3OriginalPrice}
															onChange={(value) => setAttributes({ tour3OriginalPrice: value })}
														/>
													</p>
												)
											}
										</div>
										<div className="card-content-right">
											<RichText
												tagName='p'
												className='card-tour-dates'
												value={attributes?.tour3Dates}
												onChange={(value) => setAttributes({ tour3Dates: value })}
											/>
											<RichText
												tagName='p'
												className='card-tour-duration'
												value={attributes?.tour3Duration}
												onChange={(value) => setAttributes({ tour3Duration: value })}
											/>
											<RichText
												tagName='a'
												className='card-tour-page-link'
												value={attributes?.tour3PageLinkBtn}
												onChange={(value) => setAttributes({ tour3PageLinkBtn: value })}
											/>
										</div>
									</>
								)
							}
						</div>
					</div>
					<div className="card-footer">
						<RichText
							tagName='a'
							className='card-footer-page-link'
							value={attributes?.cardButtonLinkText}
							onChange={(value) => setAttributes({ cardButtonLinkText: value })}
						/>
					</div>
				</div>
			</div>
		</>
	)
}
