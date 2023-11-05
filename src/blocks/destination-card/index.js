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
		src: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 494.914 494.914">
			<path d="M285.813 266.034v36.483c91.16 9.032 145.408 40.674 145.408 64.427 0 27.993-75.088 67.024-197.362 67.024S36.514 394.937 36.514 366.944c0-23.93 54.996-55.856 147.32-64.635v-36.466C87.701 274.843 0 309.59 0 366.944c0 67.247 120.488 103.54 233.858 103.54 113.369 0 233.877-36.293 233.877-103.54 0-56.972-86.541-91.623-181.922-100.91z" />
			<path d="M486.869 40.363a17.164 17.164 0 0 0-9.145-2.63c-2.551 0-5.098.558-7.472 1.704l-30.271 14.689a102.095 102.095 0 0 1-44.593 10.245 102.299 102.299 0 0 1-46.919-11.392 101.812 101.812 0 0 0-46.695-11.327 102.466 102.466 0 0 0-48.592 12.252V42.8c0-10.149-8.236-18.37-18.369-18.37s-18.354 8.221-18.354 18.37v328.94c0 10.133 8.221 18.354 18.354 18.354s18.369-8.221 18.369-18.354V203.853a102.542 102.542 0 0 1 48.607-12.268c15.996 0 32.007 3.76 46.68 11.326a102.239 102.239 0 0 0 91.511 1.149l45.245-21.953a17.144 17.144 0 0 0 9.686-15.438V54.908a17.161 17.161 0 0 0-8.042-14.545z" />
		</svg>
	},

	/**
	 * @see ./save.js
	 */
	save,
});
