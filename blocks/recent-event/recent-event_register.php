<?php

        PG_Blocks_v3::register_block_type( array(
            'name' => 'opto-energy/recent-event',
            'title' => __( 'Recent Event', 'opto_energy' ),
            'render_template' => 'blocks/recent-event/recent-event.php',
            'supports' => array(),
            'base_url' => get_template_directory_uri(),
            'base_path' => get_template_directory(),
            'js_file' => 'blocks/recent-event/recent-event.js',
            'attributes' => array(
                'event_image' => array(
                    'type' => array('object', 'null'),
                    'default' => array('id' => 0, 'url' => 'https://images.unsplash.com/photo-1441171205449-f600f908a9f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDkyMnwwfDF8c2VhcmNofDQ4OHx8ZW5lcmd5fGVufDB8fHx8MTczMzc4NTA1Nnww&ixlib=rb-4.0.3&q=80&w=1080', 'size' => '', 'svg' => '', 'alt' => 'Opto Energy Solar Panel')
                ),
                'event_title' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Opto Energy - Effiziente Lösungen für eine nachhaltige Zukunft'
                )
            ),
            'example' => array(
'event_image' => array('id' => 0, 'url' => 'https://images.unsplash.com/photo-1441171205449-f600f908a9f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDkyMnwwfDF8c2VhcmNofDQ4OHx8ZW5lcmd5fGVufDB8fHx8MTczMzc4NTA1Nnww&ixlib=rb-4.0.3&q=80&w=1080', 'size' => '', 'svg' => '', 'alt' => 'Opto Energy Solar Panel'), 'event_title' => 'Opto Energy - Effiziente Lösungen für eine nachhaltige Zukunft'
            ),
            'dynamic' => true,
            'version' => '1.0.167'
        ) );
