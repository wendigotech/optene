<?php

        PG_Blocks_v3::register_block_type( array(
            'name' => 'opto-energy/footer',
            'title' => __( 'Footer', 'opto_energy' ),
            'description' => __( 'Website footer with company information and links', 'opto_energy' ),
            'render_template' => 'blocks/footer/footer.php',
            'supports' => array(),
            'base_url' => get_template_directory_uri(),
            'base_path' => get_template_directory(),
            'js_file' => 'blocks/footer/footer.js',
            'attributes' => array(
                'logo_link' => array(
                    'type' => array('object', 'null'),
                    'default' => array('post_id' => 0, 'url' => '#', 'post_type' => '', 'title' => '')
                ),
                'logo_image' => array(
                    'type' => array('object', 'null'),
                    'default' => array('id' => 0, 'url' => esc_url( get_template_directory_uri() . '/img/Logo-OE-dark-a.svg' ), 'size' => '', 'svg' => '', 'alt' => 'Opto Energy Sustainability')
                ),
                'company_description' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Wir sind der führende Distributor für energieeffiziente Solarpanele, Wärmepumpen und nachhaltige Haushaltsgeräte. Unsere Mission ist es, moderne, professionelle und kundenorientierte Lösungen anzubieten.'
                ),
                'about_us_heading' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Über Uns'
                ),
                'about_us_links' => array(
                    'type' => array('string', 'null'),
                    'default' => ''
                ),
                'about_us_link_1' => array(
                    'type' => array('object', 'null'),
                    'default' => array('post_id' => 0, 'url' => '#', 'post_type' => '', 'title' => '')
                ),
                'about_us_link_2' => array(
                    'type' => array('object', 'null'),
                    'default' => array('post_id' => 0, 'url' => '#', 'post_type' => '', 'title' => '')
                ),
                'about_us_link_3' => array(
                    'type' => array('object', 'null'),
                    'default' => array('post_id' => 0, 'url' => '#', 'post_type' => '', 'title' => '')
                ),
                'about_us_link_4' => array(
                    'type' => array('object', 'null'),
                    'default' => array('post_id' => 0, 'url' => '#', 'post_type' => '', 'title' => '')
                ),
                'products_heading' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Produkte'
                ),
                'products_links' => array(
                    'type' => array('string', 'null'),
                    'default' => ''
                ),
                'product_link_1' => array(
                    'type' => array('object', 'null'),
                    'default' => array('post_id' => 0, 'url' => '#', 'post_type' => '', 'title' => '')
                ),
                'product_link_2' => array(
                    'type' => array('object', 'null'),
                    'default' => array('post_id' => 0, 'url' => '#', 'post_type' => '', 'title' => '')
                ),
                'product_link_3' => array(
                    'type' => array('object', 'null'),
                    'default' => array('post_id' => 0, 'url' => '#', 'post_type' => '', 'title' => '')
                ),
                'product_link_4' => array(
                    'type' => array('object', 'null'),
                    'default' => array('post_id' => 0, 'url' => '#', 'post_type' => '', 'title' => '')
                ),
                'support_heading' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Support'
                ),
                'support_links' => array(
                    'type' => array('string', 'null'),
                    'default' => ''
                ),
                'support_link_1' => array(
                    'type' => array('object', 'null'),
                    'default' => array('post_id' => 0, 'url' => '#', 'post_type' => '', 'title' => '')
                ),
                'support_link_2' => array(
                    'type' => array('object', 'null'),
                    'default' => array('post_id' => 0, 'url' => '#', 'post_type' => '', 'title' => '')
                ),
                'support_link_3' => array(
                    'type' => array('object', 'null'),
                    'default' => array('post_id' => 0, 'url' => '#', 'post_type' => '', 'title' => '')
                ),
                'support_link_4' => array(
                    'type' => array('object', 'null'),
                    'default' => array('post_id' => 0, 'url' => '#', 'post_type' => '', 'title' => '')
                )
            ),
            'example' => array(
'logo_link' => array('post_id' => 0, 'url' => '#', 'post_type' => '', 'title' => ''), 'logo_image' => array('id' => 0, 'url' => esc_url( get_template_directory_uri() . '/img/Logo-OE-dark-a.svg' ), 'size' => '', 'svg' => '', 'alt' => 'Opto Energy Sustainability'), 'company_description' => 'Wir sind der führende Distributor für energieeffiziente Solarpanele, Wärmepumpen und nachhaltige Haushaltsgeräte. Unsere Mission ist es, moderne, professionelle und kundenorientierte Lösungen anzubieten.', 'about_us_heading' => 'Über Uns', 'about_us_links' => '', 'about_us_link_1' => array('post_id' => 0, 'url' => '#', 'post_type' => '', 'title' => ''), 'about_us_link_2' => array('post_id' => 0, 'url' => '#', 'post_type' => '', 'title' => ''), 'about_us_link_3' => array('post_id' => 0, 'url' => '#', 'post_type' => '', 'title' => ''), 'about_us_link_4' => array('post_id' => 0, 'url' => '#', 'post_type' => '', 'title' => ''), 'products_heading' => 'Produkte', 'products_links' => '', 'product_link_1' => array('post_id' => 0, 'url' => '#', 'post_type' => '', 'title' => ''), 'product_link_2' => array('post_id' => 0, 'url' => '#', 'post_type' => '', 'title' => ''), 'product_link_3' => array('post_id' => 0, 'url' => '#', 'post_type' => '', 'title' => ''), 'product_link_4' => array('post_id' => 0, 'url' => '#', 'post_type' => '', 'title' => ''), 'support_heading' => 'Support', 'support_links' => '', 'support_link_1' => array('post_id' => 0, 'url' => '#', 'post_type' => '', 'title' => ''), 'support_link_2' => array('post_id' => 0, 'url' => '#', 'post_type' => '', 'title' => ''), 'support_link_3' => array('post_id' => 0, 'url' => '#', 'post_type' => '', 'title' => ''), 'support_link_4' => array('post_id' => 0, 'url' => '#', 'post_type' => '', 'title' => '')
            ),
            'dynamic' => true,
            'version' => '1.0.161'
        ) );
