<?php
if ( ! function_exists( 'opto_energy_setup' ) ) :

function opto_energy_setup() {

    /*
     * Make theme available for translation.
     * Translations can be filed in the /languages/ directory.
     */
    /* Pinegrow generated Load Text Domain Begin */
    load_theme_textdomain( 'opto_energy', get_template_directory() . '/languages' );
    /* Pinegrow generated Load Text Domain End */

    // Add default posts and comments RSS feed links to head.
    add_theme_support( 'automatic-feed-links' );

    /*
     * Let WordPress manage the document title.
     */
    add_theme_support( 'title-tag' );
    
    /*
     * Enable support for Post Thumbnails on posts and pages.
     */
    add_theme_support( 'post-thumbnails' );
    //Support custom logo
    add_theme_support( 'custom-logo' );

    // Add menus.
    register_nav_menus( array(
        'primary' => __( 'Primary Menu', 'opto_energy' ),
        'social'  => __( 'Social Links Menu', 'opto_energy' ),
    ) );

/*
     * Register custom menu locations
     */
    /* Pinegrow generated Register Menus Begin */

    /* Pinegrow generated Register Menus End */
    
/*
    * Set image sizes
     */
    /* Pinegrow generated Image sizes Begin */

    /* Pinegrow generated Image sizes End */
    
    /*
     * Switch default core markup for search form, comment form, and comments
     * to output valid HTML5.
     */
    add_theme_support( 'html5', array(
        'search-form', 'comment-form', 'comment-list', 'gallery', 'caption'
    ) );

    /*
     * Enable support for Post Formats.
     */
    add_theme_support( 'post-formats', array(
        'aside', 'image', 'video', 'quote', 'link', 'gallery', 'status', 'audio', 'chat'
    ) );

    /*
     * Enable support for Page excerpts.
     */
     add_post_type_support( 'page', 'excerpt' );
}
endif; // opto_energy_setup

add_action( 'after_setup_theme', 'opto_energy_setup' );


if ( ! function_exists( 'opto_energy_init' ) ) :

function opto_energy_init() {

    
    // Use categories and tags with attachments
    register_taxonomy_for_object_type( 'category', 'attachment' );
    register_taxonomy_for_object_type( 'post_tag', 'attachment' );

    /*
     * Register custom post types. You can also move this code to a plugin.
     */
    /* Pinegrow generated Custom Post Types Begin */

    register_post_type('post', array(
        'labels' => 
            array(
                'name' => __( 'Anfragen', 'opto_energy' ),
                'singular_name' => __( 'Anfrage', 'opto_energy' )
            ),
        'public' => false,
        'supports' => array( 'title', 'editor', 'author' ),
        'show_in_rest' => false,
        'show_ui' => true,
        'show_in_menu' => true
    ));

    /* Pinegrow generated Custom Post Types End */
    
    /*
     * Register custom taxonomies. You can also move this code to a plugin.
     */
    /* Pinegrow generated Taxonomies Begin */

    /* Pinegrow generated Taxonomies End */

}
endif; // opto_energy_setup

add_action( 'init', 'opto_energy_init' );


if ( ! function_exists( 'opto_energy_custom_image_sizes_names' ) ) :

function opto_energy_custom_image_sizes_names( $sizes ) {

    /*
     * Add names of custom image sizes.
     */
    /* Pinegrow generated Image Sizes Names Begin*/
    /* This code will be replaced by returning names of custom image sizes. */
    /* Pinegrow generated Image Sizes Names End */
    return $sizes;
}
add_action( 'image_size_names_choose', 'opto_energy_custom_image_sizes_names' );
endif;// opto_energy_custom_image_sizes_names



if ( ! function_exists( 'opto_energy_widgets_init' ) ) :

function opto_energy_widgets_init() {

    /*
     * Register widget areas.
     */
    /* Pinegrow generated Register Sidebars Begin */

    /* Pinegrow generated Register Sidebars End */
}
add_action( 'widgets_init', 'opto_energy_widgets_init' );
endif;// opto_energy_widgets_init



if ( ! function_exists( 'opto_energy_customize_register' ) ) :

function opto_energy_customize_register( $wp_customize ) {
    // Do stuff with $wp_customize, the WP_Customize_Manager object.

    /* Pinegrow generated Customizer Controls Begin */

    $wp_customize->add_section( 'captcha_settings', array(
        'title' => __( 'Captcha settings', 'opto_energy' )
    ));
    $pgwp_sanitize = function_exists('pgwp_sanitize_placeholder') ? 'pgwp_sanitize_placeholder' : null;

    $wp_customize->add_setting( 'captcha_key', array(
        'type' => 'theme_mod',
        'sanitize_callback' => $pgwp_sanitize
    ));

    $wp_customize->add_control( 'captcha_key', array(
        'label' => __( 'ReCaptcha API Key', 'opto_energy' ),
        'type' => 'text',
        'section' => 'captcha_settings'
    ));

    $wp_customize->add_setting( 'captcha_secret', array(
        'type' => 'theme_mod',
        'sanitize_callback' => $pgwp_sanitize
    ));

    $wp_customize->add_control( 'captcha_secret', array(
        'label' => __( 'ReCaptcha API Secret', 'opto_energy' ),
        'type' => 'text',
        'section' => 'captcha_settings'
    ));

    /* Pinegrow generated Customizer Controls End */

}
add_action( 'customize_register', 'opto_energy_customize_register' );
endif;// opto_energy_customize_register


if ( ! function_exists( 'opto_energy_enqueue_scripts' ) ) :
    function opto_energy_enqueue_scripts() {

        /* Pinegrow generated Enqueue Scripts Begin */

    wp_enqueue_script( 'g-recaptcha', 'https://www.google.com/recaptcha/api.js' );
    wp_deregister_script( 'opto_energy-typed@' );
    wp_enqueue_script( 'opto_energy-typed@', 'https://cdn.jsdelivr.net/npm/typed.js@2.0.12', [], '1.0.167', false);

    wp_deregister_script( 'opto_energy-lenis' );
    wp_enqueue_script( 'opto_energy-lenis', 'https://unpkg.com/lenis@1.1.18/dist/lenis.min.js', [], '1.0.167', false);

    wp_register_script( 'inline-script-1', '', [], '1.0.167', false );
    wp_enqueue_script( 'inline-script-1' );
    wp_add_inline_script( 'inline-script-1', '/* Pinegrow Interactions, do not remove */ (function(){try{if(!document.documentElement.hasAttribute(\'data-pg-ia-disabled\')) { window.pgia_small_mq=typeof pgia_small_mq==\'string\'?pgia_small_mq:\'(max-width:767px)\';window.pgia_large_mq=typeof pgia_large_mq==\'string\'?pgia_large_mq:\'(min-width:768px)\';var style = document.createElement(\'style\');var pgcss=\'html:not(.pg-ia-no-preview) [data-pg-ia-hide=""] {opacity:0;visibility:hidden;}html:not(.pg-ia-no-preview) [data-pg-ia-show=""] {opacity:1;visibility:visible;display:block;}\';if(document.documentElement.hasAttribute(\'data-pg-id\') && document.documentElement.hasAttribute(\'data-pg-mobile\')) {pgia_small_mq=\'(min-width:0)\';pgia_large_mq=\'(min-width:99999px)\'} pgcss+=\'@media \' + pgia_small_mq + \'{ html:not(.pg-ia-no-preview) [data-pg-ia-hide="mobile"] {opacity:0;visibility:hidden;}html:not(.pg-ia-no-preview) [data-pg-ia-show="mobile"] {opacity:1;visibility:visible;display:block;}}\';pgcss+=\'@media \' + pgia_large_mq + \'{html:not(.pg-ia-no-preview) [data-pg-ia-hide="desktop"] {opacity:0;visibility:hidden;}html:not(.pg-ia-no-preview) [data-pg-ia-show="desktop"] {opacity:1;visibility:visible;display:block;}}\';style.innerHTML=pgcss;document.querySelector(\'head\').appendChild(style);}}catch(e){console&&console.log(e);}})()');

    wp_deregister_script( 'opto_energy-popper' );
    wp_enqueue_script( 'opto_energy-popper', get_template_directory_uri() . '/assets/js/popper.min.js', [], '1.0.167', true);

    wp_deregister_script( 'opto_energy-bootstrap' );
    wp_enqueue_script( 'opto_energy-bootstrap', get_template_directory_uri() . '/bootstrap/js/bootstrap.min.js', [], '1.0.167', true);

    wp_deregister_script( 'opto_energy-pgia' );
    wp_enqueue_script( 'opto_energy-pgia', get_template_directory_uri() . '/pgia/lib/pgia.js', [], '1.0.167', true);

    wp_register_script( 'inline-script-2', '', [], '1.0.167', true );
    wp_enqueue_script( 'inline-script-2' );
    wp_add_inline_script( 'inline-script-2', 'document.addEventListener(\'DOMContentLoaded\', function() {
                var options = {
                    strings: ["Energie erneuern.", "Zukunft gestalten.", "Leben verbessern."],
                    typeSpeed: 50,
                    backSpeed: 50,
                    backDelay: 1000,
                    startDelay: 1000,
                    loop: true
                };
                var typed = new Typed("#typed-text", options);
            });');

    wp_register_script( 'inline-script-3', '', [], '1.0.167', true );
    wp_enqueue_script( 'inline-script-3' );
    wp_add_inline_script( 'inline-script-3', 'window.addEventListener(\'scroll\', function() {
                    var btn = document.getElementById(\'back-to-top\');
                    if (window.scrollY > 300) {
                    btn.style.display = \'block\';
                    } else {
                    btn.style.display = \'none\';
                    }
                });

                document.getElementById(\'back-to-top\').addEventListener(\'click\', function() {
                    window.scrollTo({ top: 0, behavior: \'smooth\' });
                });');

    wp_register_script( 'inline-script-4', '', [], '1.0.167', true );
    wp_enqueue_script( 'inline-script-4' );
    wp_add_inline_script( 'inline-script-4', '// Initialize Lenis
            const lenis = new Lenis({
            autoRaf: true,
            });

            // Listen for the scroll event and log the event data
            lenis.on(\'scroll\', (e) => {
            console.log(e);
            });');

    wp_deregister_script( 'opto_energy-all' );
    wp_enqueue_script( 'opto_energy-all', 'https://use.fontawesome.com/releases/v5.13.1/js/all.js', [], '1.0.167', true);

    /* Pinegrow generated Enqueue Scripts End */

        /* Pinegrow generated Enqueue Styles Begin */

    wp_deregister_style( 'opto_energy-bootstrap' );
    wp_enqueue_style( 'opto_energy-bootstrap', get_template_directory_uri() . '/bootstrap_theme/bootstrap.css', [], '1.0.167', 'all');

    wp_deregister_style( 'opto_energy-blocks' );
    wp_enqueue_style( 'opto_energy-blocks', get_template_directory_uri() . '/blocks.css', [], '1.0.167', 'all');

    wp_deregister_style( 'opto_energy-style' );
    wp_enqueue_style( 'opto_energy-style', get_bloginfo('stylesheet_url'), [], '1.0.167', 'all');

    wp_deregister_style( 'opto_energy-file' );
    wp_enqueue_style( 'opto_energy-file', get_template_directory_uri() . '/path/to/your/css/file.css', [], '1.0.167', 'all');

    wp_deregister_style( 'opto_energy-lenis' );
    wp_enqueue_style( 'opto_energy-lenis', 'https://unpkg.com/lenis@1.1.18/dist/lenis.css', [], '1.0.167', 'all');

    /* Pinegrow generated Enqueue Styles End */

    }
    add_action( 'wp_enqueue_scripts', 'opto_energy_enqueue_scripts' );
endif;

function pgwp_sanitize_placeholder($input) { return $input; }
/*
 * Resource files included by Pinegrow.
 */
/* Pinegrow generated Include Resources Begin */
require_once "inc/custom.php";
if( !class_exists( 'PG_Helper_v2' ) ) { require_once "inc/wp_pg_helpers.php"; }
if( !class_exists( 'PG_Blocks_v3' ) ) { require_once "inc/wp_pg_blocks_helpers.php"; }
if( !class_exists( 'PG_Simple_Form_Mailer' ) ) { require_once "inc/wp_simple_form_mailer.php"; }

    /* Pinegrow generated Include Resources End */

/* Setting up theme supports options */

function opto_energy_setup_theme_supports() {
    // Don't edit anything between the following comments.
    /* Pinegrow generated Theme Supports Begin */
    
//Enable site editor                    
add_theme_support('block-templates');
add_theme_support('block-template-parts');    
//Tell WP to scope loaded editor styles to the block editor                    
add_theme_support( 'editor-styles' );
    /* Pinegrow generated Theme Supports End */
}
add_action('after_setup_theme', 'opto_energy_setup_theme_supports');

/* End of setting up theme supports options */


/* Register Blocks Categories */

function opto_energy_register_blocks_categories( $categories ) {

    // Don't edit anything between the following comments.
    /* Pinegrow generated Register Blocks Category Begin */

$categories = array_merge( $categories, array( array(
        'slug' => 'opto_energy',
        'title' => __( 'Opto Energy blocks', 'opto_energy' )
    ) ) );

    /* Pinegrow generated Register Blocks Category End */
    
    return $categories;
}
add_action( version_compare('5.8', get_bloginfo('version'), '<=' ) ? 'block_categories_all' : 'block_categories', 'opto_energy_register_blocks_categories');

/* End of registering Blocks Categories */


/* Creating Editor Blocks with Pinegrow */

if ( ! function_exists('opto_energy_blocks_init') ) :
function opto_energy_blocks_init() {
    // Register blocks. Don't edit anything between the following comments.
    /* Pinegrow generated Register Pinegrow Blocks Begin */
    require_once 'blocks/hero/hero_register.php';
    require_once 'blocks/story/story_register.php';
    require_once 'blocks/story-motion/story-motion_register.php';
    require_once 'blocks/advantage/advantage_register.php';
    require_once 'blocks/register/register_register.php';
    require_once 'blocks/recent-event/recent-event_register.php';
    require_once 'blocks/showroom/showroom_register.php';
    require_once 'blocks/contact/contact_register.php';
    require_once 'blocks/footer/footer_register.php';

    /* Pinegrow generated Register Pinegrow Blocks End */
}
add_action('init', 'opto_energy_blocks_init');
endif;

/* End of creating Editor Blocks with Pinegrow */


/* Loading editor styles for blocks */

function opto_energy_add_blocks_editor_styles() {
// Add blocks editor styles. Don't edit anything between the following comments.
/* Pinegrow generated Load Blocks Editor Styles Begin */
    add_editor_style( 'style.css' );
    add_editor_style( 'bootstrap_theme/bootstrap.css' );
    add_editor_style( 'blocks.css' );

    /* Pinegrow generated Load Blocks Editor Styles End */
}
add_action('admin_init', 'opto_energy_add_blocks_editor_styles');

/* End of loading editor styles for blocks */


/* Control how block assets are loaded on the front-end */
function opto_energy_should_load_separate_core_block_assets() {
    /* Pinegrow generated Load Block Assets Separately Begin */
    //Load only assets of blocks that are used on the page
    add_filter( 'should_load_separate_core_block_assets', '__return_true' );

    /* Pinegrow generated Load Block Assets Separately End */
}
add_action('init', 'opto_energy_should_load_separate_core_block_assets');
/* End of controlling how block assets are loaded on the front-end */

 /* Don't add custom your custom snippets here, but use inc/custom.php */
 require_once "inc/custom.php";

?>