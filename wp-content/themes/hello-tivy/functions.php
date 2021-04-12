<?php

function main_portfolio_styles()
{
    wp_enqueue_style('portfolio-main-style', get_theme_file_uri('/style.css'));
    wp_enqueue_style('bootstrap-style', '//stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css');
    wp_enqueue_style('google-fonts', '//fonts.googleapis.com/css?family=Montserrat:500,700|Roboto+Mono:500|Source+Code+Pro:600&display=swap');
    wp_enqueue_style('font-awesome', '//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
}

add_action('wp_enqueue_scripts', 'main_portfolio_styles');