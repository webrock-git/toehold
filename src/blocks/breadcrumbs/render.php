<?php
$attributes = $attributes;

$is_show_icon = $attributes['isShowIcon'];
$svg = isset($attributes['svg']) && $is_show_icon ? $attributes['svg'] : "&#92;";
if (!function_exists('toehold_get_breadcrumb_pages')) {
    function toehold_get_breadcrumb_pages()
    {
        $pages = [];
        $currentid = get_the_id();
        $pages[] = [
            'title' => 'Home',
            'url' => home_url("/"),
            'id' => 0,
            'tag' => 'a'
        ];
        $breadcrumbs = [];
        while ($currentid) {
            $page = get_post($currentid);
            $breadcrumbs[] = [
                'title' => $page->post_title,
                'url' => get_permalink($page->ID),
                'id' => $page->ID,
                'tag' => $currentid == get_the_id() ? 'span' : 'a'
            ];
            $currentid = $page->post_parent;
        }

        $pages =  array_merge($pages, array_reverse($breadcrumbs));
        return $pages;
    }
}

$pages = toehold_get_breadcrumb_pages();
?>

<div class="toehold-breadcrumbs wp-block-toehold-breadcrumbs">
    <ul class="toehold-breadcrumbs-list">
        <?php if (!empty($pages)) : foreach ($pages as $page) : ?>
                <li class="toehold-breadcrumbs-item">
                    <?php
                    printf(
                        '<%1$s href="%2$s">%3$s</%1$s>',
                        $page['tag'],
                        esc_url($page['url']),
                        esc_html($page['title'])
                    );

                    if ($page['id'] != get_the_id()) {
                        printf(
                            '<%1$s class="toehold-breadcrumbs-separator">%2$s</%1$s>',
                            'span',
                            $svg
                        );
                    }
                    ?>
                </li>
        <?php endforeach;
        endif; ?>
    </ul>
</div>