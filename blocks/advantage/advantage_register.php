<?php

        PG_Blocks_v3::register_block_type( array(
            'name' => 'opto-energy/advantage',
            'title' => __( 'Advantage', 'opto_energy' ),
            'render_template' => 'blocks/advantage/advantage.php',
            'supports' => array(),
            'base_url' => get_template_directory_uri(),
            'base_path' => get_template_directory(),
            'js_file' => 'blocks/advantage/advantage.js',
            'attributes' => array(
                'icon1' => array(
                    'type' => array('object', 'null'),
                    'default' => array('id' => 0, 'url' => esc_url( get_template_directory_uri() . '/img/icons/energy-socket.svg' ), 'size' => '', 'svg' => '', 'alt' => null)
                ),
                'advantage_title1' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Energieeffizienz'
                ),
                'advantage_description1' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Durch die Nutzung von Solarenergie und anderen nachhaltigen Technologien'
                )
            ),
            'example' => array(
'icon1' => array('id' => 0, 'url' => esc_url( get_template_directory_uri() . '/img/icons/energy-socket.svg' ), 'size' => '', 'svg' => '', 'alt' => null), 'advantage_title1' => 'Energieeffizienz', 'advantage_description1' => 'Durch die Nutzung von Solarenergie und anderen nachhaltigen Technologien'
            ),
            'dynamic' => true,
            'version' => '1.0.161'
        ) );
