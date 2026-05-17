<?php
    $current_path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
    $seo_title = '';
    $seo_desc = '';
    
    $seo_file = get_template_directory() . '/dist/seo-routes.json';
    if (file_exists($seo_file)) {
        $seo_data = json_decode(file_get_contents($seo_file), true);
        
        $match_path = $current_path;
        if ($match_path !== '/' && rtrim($match_path, '/') !== $match_path) {
            $match_path = rtrim($match_path, '/');
        }
        
        if (isset($seo_data[$match_path])) {
            $seo_title = $seo_data[$match_path]['title'];
            $seo_desc = $seo_data[$match_path]['description'];
        } elseif (isset($seo_data[$current_path])) {
            $seo_title = $seo_data[$current_path]['title'];
            $seo_desc = $seo_data[$current_path]['description'];
        }
    }
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <?php if ($seo_title): ?>
        <title><?php echo esc_html($seo_title); ?></title>
        <meta name="description" content="<?php echo esc_attr($seo_desc); ?>">
        <meta property="og:title" content="<?php echo esc_attr($seo_title); ?>">
        <meta property="og:description" content="<?php echo esc_attr($seo_desc); ?>">
        <meta property="twitter:title" content="<?php echo esc_attr($seo_title); ?>">
        <meta property="twitter:description" content="<?php echo esc_attr($seo_desc); ?>">
    <?php else: ?>
        <title><?php wp_title( '|', true, 'right' ); ?></title>
    <?php endif; ?>
    
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