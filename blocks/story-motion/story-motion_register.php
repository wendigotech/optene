<?php

        PG_Blocks_v3::register_block_type( array(
            'name' => 'opto-energy/story-motion',
            'title' => __( 'Story Motion', 'opto_energy' ),
            'description' => __( 'Story motion section', 'opto_energy' ),
            'render_template' => 'blocks/story-motion/story-motion.php',
            'supports' => array(),
            'base_url' => get_template_directory_uri(),
            'base_path' => get_template_directory(),
            'js_file' => 'blocks/story-motion/story-motion.js',
            'attributes' => array(
                'title' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Ihre nachhaltige Zukunft ermöglichen'
                ),
                'description' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Bei Opto Energy bieten wir innovative energieeffiziente Lösungen für ein nachhaltiges Zuhause. Entdecken Sie unser Angebot an Solarpaneelen, Wärmepumpen und umweltfreundlichen Haushaltsgeräten in unserem Showroom oder unserem exklusiven Handelsportal für Geschäftskunden.'
                ),
                'image' => array(
                    'type' => array('object', 'null'),
                    'default' => array('id' => 0, 'url' => 'https://images.unsplash.com/photo-1485740112426-0c2549fa8c86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDkyMnwwfDF8c2VhcmNofDF8fGZ1dHVyZXxlbnwwfHx8fDE3MzM4MzgwMzh8MA&ixlib=rb-4.0.3&q=80&w=1080', 'size' => '', 'svg' => '', 'alt' => null)
                ),
                'description2' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Bei Opto Energy bieten wir innovative und effiziente Lösungen für ein nachhaltiges Zuhause. Als führender Distributor von Solarmodulen, Wärmepumpen und umweltfreundlichen Geräten unterstützen wir Sie dabei, Ihren Energieverbrauch zu reduzieren und Ihren ökologischen Fußabdruck zu verbessern.&nbsp;'
                ),
                'image2' => array(
                    'type' => array('object', 'null'),
                    'default' => array('id' => 0, 'url' => 'https://images.unsplash.com/photo-1546188994-07c34f6e5e1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDkyMnwwfDF8c2VhcmNofDIwMnx8Y2xlYW4lMjBmdXR1cmV8ZW58MHx8fHwxNzM0MDM0NzA1fDA&ixlib=rb-4.0.3&q=80&w=1080', 'size' => '', 'svg' => '', 'alt' => null)
                )
            ),
            'example' => array(
'title' => 'Ihre nachhaltige Zukunft ermöglichen', 'description' => 'Bei Opto Energy bieten wir innovative energieeffiziente Lösungen für ein nachhaltiges Zuhause. Entdecken Sie unser Angebot an Solarpaneelen, Wärmepumpen und umweltfreundlichen Haushaltsgeräten in unserem Showroom oder unserem exklusiven Handelsportal für Geschäftskunden.', 'image' => array('id' => 0, 'url' => 'https://images.unsplash.com/photo-1485740112426-0c2549fa8c86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDkyMnwwfDF8c2VhcmNofDF8fGZ1dHVyZXxlbnwwfHx8fDE3MzM4MzgwMzh8MA&ixlib=rb-4.0.3&q=80&w=1080', 'size' => '', 'svg' => '', 'alt' => null), 'description2' => 'Bei Opto Energy bieten wir innovative und effiziente Lösungen für ein nachhaltiges Zuhause. Als führender Distributor von Solarmodulen, Wärmepumpen und umweltfreundlichen Geräten unterstützen wir Sie dabei, Ihren Energieverbrauch zu reduzieren und Ihren ökologischen Fußabdruck zu verbessern.&nbsp;', 'image2' => array('id' => 0, 'url' => 'https://images.unsplash.com/photo-1546188994-07c34f6e5e1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDkyMnwwfDF8c2VhcmNofDIwMnx8Y2xlYW4lMjBmdXR1cmV8ZW58MHx8fHwxNzM0MDM0NzA1fDA&ixlib=rb-4.0.3&q=80&w=1080', 'size' => '', 'svg' => '', 'alt' => null)
            ),
            'dynamic' => true,
            'version' => '1.0.161'
        ) );
