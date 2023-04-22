<?php
/*
Plugin Name: ChartJS Gutenberg Block
Description: A Gutenberg block for creating bar charts using ChartJS.
Author: Your Name
Version: 1.0.0
*/

function chartjs_gutenberg_block() {
    wp_register_script(
        'chartjs-gutenberg-block',
        plugins_url('build/index.js', __FILE__),
        array('wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor', 'wp-components'),
        filemtime(plugin_dir_path(__FILE__) . 'build/index.js')
    );

    wp_register_style(
        'chartjs-gutenberg-block-editor',
        plugins_url('build/editor.css', __FILE__),
        array(),
        filemtime(plugin_dir_path(__FILE__) . 'index.css')
    );

    wp_register_style(
        'chartjs-gutenberg-block-frontend',
        plugins_url('build/style.css', __FILE__),
        array(),
        filemtime(plugin_dir_path(__FILE__) . 'style-index.css')
    );

    register_block_type('chartjs-gutenberg-block/bar-chart', array(
        'editor_script' => 'chartjs-gutenberg-block',
        'editor_style' => 'chartjs-gutenberg-block-editor',
        'style' => 'chartjs-gutenberg-block-frontend',
    ));
}

add_action('init', 'chartjs_gutenberg_block');
