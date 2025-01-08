<?php

        PG_Blocks_v3::register_block_type( array(
            'name' => 'opto-energy/story',
            'title' => __( 'Story', 'opto_energy' ),
            'description' => __( 'Innovative, reliable and customer-oriented', 'opto_energy' ),
            'enqueue_style' => get_template_directory_uri() . '/style.css',
            'enqueue_editor_style' => get_template_directory_uri() . '/blocks.css',
            'render_template' => 'blocks/story/story.php',
            'supports' => array(),
            'base_url' => get_template_directory_uri(),
            'base_path' => get_template_directory(),
            'js_file' => 'blocks/story/story.js',
            'attributes' => array(
                'logo' => array(
                    'type' => array('object', 'null'),
                    'default' => array('id' => 0, 'url' => esc_url( get_template_directory_uri() . '/img/Logo-OE-navyblue.svg' ), 'size' => '', 'svg' => '', 'alt' => null)
                ),
                'heading' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Innovativ, zuverlässig und kundenorientiert'
                ),
                'description' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Bei Opto Energy setzen wir uns für innovative, energiesparende Lösungen für eine nachhaltige Zukunft ein. Unser umfangreiches Sortiment an Solarmodulen, Wärmepumpen und umweltfreundlichen Haushaltsgeräten ermöglicht es Hausbesitzern und Unternehmen, ihren CO2-Fußabdruck zu reduzieren. Mit unserem modernen Showroom und unserem umfassenden Handelsportal bieten wir unseren Kunden außergewöhnliche Erfahrungen und unterstützen ein sauberes, grünes Morgen.'
                )
            ),
            'example' => array(
'logo' => array('id' => 0, 'url' => esc_url( get_template_directory_uri() . '/img/Logo-OE-navyblue.svg' ), 'size' => '', 'svg' => '', 'alt' => null), 'heading' => 'Innovativ, zuverlässig und kundenorientiert', 'description' => 'Bei Opto Energy setzen wir uns für innovative, energiesparende Lösungen für eine nachhaltige Zukunft ein. Unser umfangreiches Sortiment an Solarmodulen, Wärmepumpen und umweltfreundlichen Haushaltsgeräten ermöglicht es Hausbesitzern und Unternehmen, ihren CO2-Fußabdruck zu reduzieren. Mit unserem modernen Showroom und unserem umfassenden Handelsportal bieten wir unseren Kunden außergewöhnliche Erfahrungen und unterstützen ein sauberes, grünes Morgen.'
            ),
            'dynamic' => true,
            'version' => '1.0.162'
        ) );
