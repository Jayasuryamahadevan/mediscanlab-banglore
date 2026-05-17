import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import archiver from 'archiver';

const themeName = 'mediscan-react-theme';
const themeDir = path.join(process.cwd(), themeName);

console.log('1. Building Vite React App...');
execSync('npm run build', { stdio: 'inherit' });

console.log('2. Creating WordPress Theme Structure...');
if (!fs.existsSync(themeDir)) {
    fs.mkdirSync(themeDir);
}

// Copy dist folder
const distSrc = path.join(process.cwd(), 'dist');
const distDest = path.join(themeDir, 'dist');
if (fs.existsSync(distDest)) {
    fs.rmSync(distDest, { recursive: true, force: true });
}
fs.cpSync(distSrc, distDest, { recursive: true });

// Create style.css
const styleCss = `/*
Theme Name: Mediscan Lab React Theme
Theme URI: https://mediscanlab.com
Author: Mediscan
Description: A headless-style React theme built with Vite.
Version: 1.0.0
*/
`;
fs.writeFileSync(path.join(themeDir, 'style.css'), styleCss);

// Create index.php
const indexPhp = `<!DOCTYPE html>
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
</html>`;
fs.writeFileSync(path.join(themeDir, 'index.php'), indexPhp);

// Create functions.php
const functionsPhp = `<?php

// 1. Enqueue React Assets dynamically from dist/assets
add_action( 'wp_enqueue_scripts', 'mediscan_react_enqueue_assets' );
function mediscan_react_enqueue_assets() {
    $dist_dir = get_template_directory() . '/dist/assets';
    $dist_url = get_template_directory_uri() . '/dist/assets';
    
    if ( is_dir( $dist_dir ) ) {
        $files = scandir( $dist_dir );
        foreach ( $files as $file ) {
            // Enqueue all compiled CSS styles dynamically
            if ( preg_match( '/\\.css$/i', $file ) ) {
                wp_enqueue_style( 'mediscan-react-style-' . sanitize_title($file), $dist_url . '/' . $file, array(), null );
            }
            // Enqueue all compiled JS script modules dynamically
            if ( preg_match( '/\\.js$/i', $file ) ) {
                wp_enqueue_script( 'mediscan-react-script-' . sanitize_title($file), $dist_url . '/' . $file, array(), null, true );
            }
        }
    }
}

// 2. Add module type to generated script tags so React works
add_filter('script_loader_tag', 'mediscan_add_module_to_script', 10, 3);
function mediscan_add_module_to_script($tag, $handle, $src) {
    if (strpos($handle, 'mediscan-react-script-') !== false) {
        return '<script type="module" src="' . esc_url($src) . '"></script>\n';
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
`;
fs.writeFileSync(path.join(themeDir, 'functions.php'), functionsPhp);

const output = fs.createWriteStream(path.join(process.cwd(), themeName + '.zip'));
const archive = archiver('zip', {
    zlib: { level: 9 } // maximum compression
});

output.on('close', function() {
    console.log('✅ Done! Theme created successfully at: ' + path.join(process.cwd(), themeName + '.zip'));
    console.log('\\nYou can now upload ' + themeName + '.zip directly into WordPress via Appearance > Themes > Add New.');
});

archive.pipe(output);
archive.directory(themeDir, themeName);
archive.finalize();
