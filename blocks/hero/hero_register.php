<?php

        PG_Blocks_v3::register_block_type( array(
            'name' => 'opto-energy/hero',
            'title' => __( 'Hero', 'opto_energy' ),
            'description' => __( 'Main hero section', 'opto_energy' ),
            'render_template' => 'blocks/hero/hero.php',
            'supports' => array(),
            'base_url' => get_template_directory_uri(),
            'base_path' => get_template_directory(),
            'js_file' => 'blocks/hero/hero.js',
            'attributes' => array(
                'video_source' => array(
                    'type' => array('string', 'null'),
                    'default' => ''
                ),
                'story_link' => array(
                    'type' => array('object', 'null'),
                    'default' => array('post_id' => 0, 'url' => '#story', 'post_type' => '', 'title' => '')
                ),
                'register_link' => array(
                    'type' => array('object', 'null'),
                    'default' => array('post_id' => 0, 'url' => '#register', 'post_type' => '', 'title' => '')
                ),
                'showroom_link' => array(
                    'type' => array('object', 'null'),
                    'default' => array('post_id' => 0, 'url' => '#showroom', 'post_type' => '', 'title' => '')
                ),
                'news_link' => array(
                    'type' => array('object', 'null'),
                    'default' => array('post_id' => 0, 'url' => '#news', 'post_type' => '', 'title' => '')
                ),
                'traders_link' => array(
                    'type' => array('object', 'null'),
                    'default' => array('post_id' => 0, 'url' => 'login.html', 'post_type' => '', 'title' => '')
                ),
                'contact_link' => array(
                    'type' => array('object', 'null'),
                    'default' => array('post_id' => 0, 'url' => '#', 'post_type' => '', 'title' => '')
                ),
                'logo_image' => array(
                    'type' => array('object', 'null'),
                    'default' => array('id' => 0, 'url' => esc_url( get_template_directory_uri() . '/img/Logo-OE-silver-a.svg' ), 'size' => '', 'svg' => '', 'alt' => null)
                ),
                'header_text' => array(
                    'type' => array('string', 'null'),
                    'default' => '<noscript class="text-success"> Energie erneuern.<br> Zukunft gestalten.<br> Leben verbessern. </noscript> <span id="typed-text" class="text-white"></span>'
                ),
                'paragraph_text' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Opto Energy ist Ihr zuverlässiger Partner als Großhändler für energieeffiziente Solaranlagen, Wärmepumpen und nachhaltige Haushaltsgeräte, bieten Ihnen maßgeschneiderte Lösungen und Services.'
                ),
                'hero_button_link' => array(
                    'type' => array('object', 'null'),
                    'default' => array('post_id' => 0, 'url' => '#story', 'post_type' => '', 'title' => '')
                ),
                'hero_button_label' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Mehr erfahren&nbsp;&darr;'
                )
            ),
            'example' => array(
'video_source' => '', 'story_link' => array('post_id' => 0, 'url' => '#story', 'post_type' => '', 'title' => ''), 'register_link' => array('post_id' => 0, 'url' => '#register', 'post_type' => '', 'title' => ''), 'showroom_link' => array('post_id' => 0, 'url' => '#showroom', 'post_type' => '', 'title' => ''), 'news_link' => array('post_id' => 0, 'url' => '#news', 'post_type' => '', 'title' => ''), 'traders_link' => array('post_id' => 0, 'url' => 'login.html', 'post_type' => '', 'title' => ''), 'contact_link' => array('post_id' => 0, 'url' => '#', 'post_type' => '', 'title' => ''), 'logo_image' => array('id' => 0, 'url' => esc_url( get_template_directory_uri() . '/img/Logo-OE-silver-a.svg' ), 'size' => '', 'svg' => '', 'alt' => null), 'header_text' => '<noscript class="text-success"> Energie erneuern.<br> Zukunft gestalten.<br> Leben verbessern. </noscript> <span id="typed-text" class="text-white"></span>', 'paragraph_text' => 'Opto Energy ist Ihr zuverlässiger Partner als Großhändler für energieeffiziente Solaranlagen, Wärmepumpen und nachhaltige Haushaltsgeräte, bieten Ihnen maßgeschneiderte Lösungen und Services.', 'hero_button_link' => array('post_id' => 0, 'url' => '#story', 'post_type' => '', 'title' => ''), 'hero_button_label' => 'Mehr erfahren&nbsp;&darr;'
            ),
            'dynamic' => true,
            'version' => '1.0.167'
        ) );
