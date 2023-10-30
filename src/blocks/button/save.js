import { useBlockProps } from '@wordpress/block-editor';
import LinkAttributes from '@/components/link-attributes';
export default function save({ attributes }) {
	const blockProps = useBlockProps.save({
		className: attributes?.blockClass,
		...LinkAttributes(attributes?.buttonLink),
		title: attributes?.buttonTitleAttr ? attributes?.buttonTitleAttr : '',
		rel: attributes?.buttonRelAttr ? attributes?.buttonRelAttr : '',
	});

	return (
		<a {...blockProps}>
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
	)
}
