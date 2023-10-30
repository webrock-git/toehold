import { useBlockProps } from '@wordpress/block-editor';
import './editor.scss';
import Settings from './settings';
import LinkAttributes from '@/components/link-attributes';

export default function Edit({ attributes, setAttributes, clientId }) {
	const blockProps = useBlockProps({
		className: attributes?.blockClass,
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
