import { useBlockProps } from '@wordpress/block-editor';
import './editor.scss';
import Settings from './settings';
import LinkAttributes from '@/components/link-attributes';
import classNames from 'classnames';

export default function Edit({ attributes, setAttributes, clientId }) {
	const blockProps = useBlockProps({
		className: classNames(attributes?.blockClass, {
			['has-icon']: attributes?.svg,
			['is-small']: attributes?.isSmall
		}),
		...LinkAttributes(attributes?.buttonLink)
	});

	return (
		<>
			<style>{attributes?.blockCSS}</style>
			<Settings attributes={attributes} setAttributes={setAttributes} clientId={clientId}/>
			<a {...blockProps} onClick={(e) => e.preventDefault()}>
				{
					attributes?.svg && (
						<span className='toehold-btn-icon' dangerouslySetInnerHTML={{ __html: attributes?.svg }} />
					)
				}
				{
					attributes?.buttonText && (
						<span className='toehold-btn-text'>{attributes?.buttonText}</span>
					)
				}
			</a>
		</>
	)
}
