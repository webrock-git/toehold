<?php
define('TOEHOLD_VERSION', wp_get_theme()->get('Version'));

function create_block_toehold_block_init()
{
    $blocks = [
        "header-container",
        "header-topbar",
        "header-navbar",
        "navmenu",
        "submenu",
        "menu-item",
        "topbar-divider",
        "button",
        'card',
        'card-image',
    ];

    foreach ($blocks as $block) {
        register_block_type(plugin_dir_path(__FILE__) . 'assets/build/blocks/' . $block);
    }

    include_once get_theme_file_path('inc/block-styles.php');

    if ( function_exists( 'register_block_pattern_category' ) ) {
        register_block_pattern_category(
          'toehold',
          array(
                'label' => __( 'Toehold', 'toehold' ),
                'description' => __( 'Toehold Patterns Block', 'toehold' ),
           )
       );
    }

    register_block_pattern("toehold/404-page", array(
        "title" => __("404 Page", "toehold"),
        "category" => "toehold",
        "content" => 'This is a 404 page',
    ));
}

add_action('init', 'create_block_toehold_block_init');
function toehold_block_categories($categories, $post)
{
    return array_merge(
        array(
            array(
                'slug'  => 'toehold',
                'title' => __('Header Template', 'toehold'),
            ),
        ),
        $categories
    );
}
add_filter('block_categories_all', 'toehold_block_categories', 10, 2);
function toehold_enqueue_assets()
{
    wp_register_style('toehold-woocommerce-style', get_theme_file_uri('assets/build/css/woocommerce.css'), array(), TOEHOLD_VERSION);
    wp_enqueue_style('toehold-woocommerce-style');
    wp_register_style('toehold-theme-style', get_theme_file_uri('assets/build/css/style.css'), array(), TOEHOLD_VERSION);
    wp_enqueue_style('toehold-theme-style');
}
add_action("wp_enqueue_scripts", "toehold_enqueue_assets");
