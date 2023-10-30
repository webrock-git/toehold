import { __ } from '@wordpress/i18n';
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit() {
	const blockProps = useBlockProps();
	const innerBlocksProps = useInnerBlocksProps({
		className: "header-navmenu-submenu",
	}, {
		allowedBlocks: ["toehold/menu-item"],
		template: [
			["toehold/menu-item", {
				menuLabel: "Submenu Item#1",
				menuLink: {
					url: "#",
				},
			}],
			["toehold/menu-item", {
				menuLabel: "Submenu Item#2",
				menuLink: {
					url: "#",
				},
			}],
			["toehold/menu-item", {
				menuLabel: "Submenu Item#3",
				menuLink: {
					url: "#",
				},
			}]
		],
	})
	return (
		<>
			<div {...blockProps}>
				<ul {...innerBlocksProps}></ul>
			</div>
		</>
	);
}
