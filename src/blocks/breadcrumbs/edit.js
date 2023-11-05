import { useBlockProps } from '@wordpress/block-editor';
import './editor.scss';
import Settings from './settings';
import classNames from 'classnames';

export default function Edit({ attributes, setAttributes, clientId }) {
	const blockProps = useBlockProps({
		className: classNames('toehold-breadcrumbs'),
	});
	return (
		<>
			<Settings attributes={attributes} setAttributes={setAttributes} clientId={clientId} />
			<div {...blockProps}>
				<ul className="toehold-breadcrumbs-list">
					<li className="toehold-breadcrumbs-item">
						<a onClick={(e) => e.preventDefault()} href="#">Home</a>
						<span className="toehold-breadcrumbs-separator" dangerouslySetInnerHTML={{ __html: attributes?.isShowIcon && attributes?.svg ? attributes?.svg : "&#92" }} />
					</li>
					<li className="toehold-breadcrumbs-item">
						<a onClick={(e) => e.preventDefault()} href="#">Dummy Parent</a>
						<span className="toehold-breadcrumbs-separator" dangerouslySetInnerHTML={{ __html: attributes?.isShowIcon && attributes?.svg ? attributes?.svg : "&#92" }} />
					</li>
					<li className="toehold-breadcrumbs-item">
						<a onClick={(e) => e.preventDefault()} href="#">Dummy Page</a>
					</li>
				</ul>
			</div>
		</>
	)
}
