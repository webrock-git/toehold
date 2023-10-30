/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';
import metadata from './block.json';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType(metadata.name, {
	/**
	 * @see ./edit.js
	 */
	edit: Edit,
	icon: {
		src: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
			<circle cx="12" cy="2" r="1" fill="#494c4e" />
			<circle cx="12" cy="6" r="1" fill="#494c4e" />
			<circle cx="12" cy="10" r="1" fill="#494c4e" />
			<circle cx="12" cy="14" r="1" fill="#494c4e" />
			<circle cx="12" cy="18" r="1" fill="#494c4e" />
			<circle cx="12" cy="22" r="1" fill="#494c4e" />
		</svg>
	},

	/**
	 * @see ./save.js
	 */
	save,
});
