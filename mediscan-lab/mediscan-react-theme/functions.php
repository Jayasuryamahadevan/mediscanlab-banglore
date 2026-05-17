<?php

// 1. Enqueue React Assets dynamically from dist/assets
add_action( 'wp_enqueue_scripts', 'mediscan_react_enqueue_assets' );
function mediscan_react_enqueue_assets() {
    $dist_dir = get_template_directory() . '/dist/assets';
    $dist_url = get_template_directory_uri() . '/dist/assets';
    
    if ( is_dir( $dist_dir ) ) {
        $files = scandir( $dist_dir );
        foreach ( $files as $file ) {
            // Enqueue all compiled CSS styles dynamically
            if ( preg_match( '/\.css$/i', $file ) ) {
                wp_enqueue_style( 'mediscan-react-style-' . sanitize_title($file), $dist_url . '/' . $file, array(), null );
            }
            // Enqueue all compiled JS script modules dynamically
            if ( preg_match( '/\.js$/i', $file ) ) {
                wp_enqueue_script( 'mediscan-react-script-' . sanitize_title($file), $dist_url . '/' . $file, array(), null, true );
            }
        }
    }
}

// 2. Add module type to generated script tags so React works
add_filter('script_loader_tag', 'mediscan_add_module_to_script', 10, 3);
function mediscan_add_module_to_script($tag, $handle, $src) {
    if (strpos($handle, 'mediscan-react-script-') !== false) {
        return '<script type="module" src="' . esc_url($src) . '"></script>
';
    }
    return $tag;
}

// 3. Catch all 404s and redirect to index.php so React Router can handle them
add_action('template_redirect', 'mediscan_catch_react_routes');
function mediscan_catch_react_routes() {
    // Only intercept frontend 404s, don't break WP REST API or Admin
    if (is_404() && !is_admin() && (strpos($_SERVER['REQUEST_URI'], '/wp-json/') === false)) {
        global $wp_query;
        $wp_query->is_404 = false;
        status_header(200);
        include(get_template_directory() . '/index.php');
        exit();
    }
}

// 4. Basic theme setup
add_action('after_setup_theme', function() {
    add_theme_support('title-tag');
});
