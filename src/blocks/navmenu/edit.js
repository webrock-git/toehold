import { __ } from '@wordpress/i18n';
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import './editor.scss';
import { useRef } from '@wordpress/element';

export default function Edit() {
	const navmenuRef = useRef();
	const blockProps = useBlockProps();
	const innerBlocksProps = useInnerBlocksProps({
		className: "header-navmenu-menu",
	}, {
		allowedBlocks: ['toehold/menu-item'],
	})
	return (
		<>
			<div {...blockProps}>
				<div className="sidebar-header">
					<div className="mobile-logo"></div>
					<button className="close-button">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
							<path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m6 6 12 12M18 6 6 18" />
						</svg>
					</button>
				</div>
				<nav className="header-navmenu">
					<ul {...innerBlocksProps}></ul>
					<div className='sidebar-extra-button-container'></div>
				</nav>
				<div className='navmenu-separator'></div>
				<div className="sidebar-topbar-container"></div>
				<div className="sidebar-social-button-container"></div>
			</div>
			<div className="menu-overlay"></div>
			<button className='hamburger-button'>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 26 14">
					<path stroke="#000" strokeLinecap="round" strokeWidth="2" d="M25 1H9M25 13H9M25 7H1" />
				</svg>
			</button>
		</>
	);
}
