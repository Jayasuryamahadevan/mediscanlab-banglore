<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php wp_title( '|', true, 'right' ); ?></title>
    <?php wp_head(); ?>
    <style>
        body, html { margin: 0; padding: 0; }
        /* Fix for WP admin bar overlapping sticky headers */
        body.admin-bar .sticky.top-0 { top: 32px !important; }
        @media screen and (max-width: 782px) {
            body.admin-bar .sticky.top-0 { top: 46px !important; }
        }
    </style>
</head>
<body <?php body_class(); ?>>
    <div id="root"></div>
    <?php wp_footer(); ?>
</body>
</html>