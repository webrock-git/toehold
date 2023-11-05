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
        'tour-card',
        'destination-card',
        'breadcrumbs',
    ];

    foreach ($blocks as $block) {
        register_block_type(plugin_dir_path(__FILE__) . 'assets/build/blocks/' . $block);
    }

    include_once get_theme_file_path('inc/block-styles.php');
    include_once get_theme_file_path('inc/post-meta.php');
    $scripts_path = include_once get_theme_file_path("assets/build/js/scripts.asset.php");

    if (is_array($scripts_path) && isset($scripts_path['dependencies']) && isset($scripts_path['version'])) {
        $dependencies = $scripts_path['dependencies'];
        $version = $scripts_path['version'];

        wp_register_script('toehold-theme-script', get_theme_file_uri('assets/build/js/scripts.js'), $dependencies, $version, true);
    }
}

add_action('init', 'create_block_toehold_block_init');
function toehold_block_categories($categories, $post)
{
    return array_merge(
        array(
            array(
                'slug'  => 'toehold',
                'title' => __('Toehold Blocks', 'toehold'),
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
    wp_enqueue_block_style('core/columns', [
        'name' => 'toehold-theme-style',
        'src'  => get_theme_file_uri('assets/build/css/style.css'),
    ]);

    if(is_admin()){
        wp_enqueue_script('toehold-theme-script');
    }
}
add_action("enqueue_block_editor_assets", "toehold_enqueue_assets");
add_action("enqueue_block_assets", "toehold_enqueue_assets");
