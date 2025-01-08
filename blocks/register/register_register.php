<?php

        PG_Blocks_v3::register_block_type( array(
            'name' => 'opto-energy/register',
            'title' => __( 'Registrieren', 'opto_energy' ),
            'description' => __( 'für Händler', 'opto_energy' ),
            'render_template' => 'blocks/register/register.php',
            'supports' => array(),
            'base_url' => get_template_directory_uri(),
            'base_path' => get_template_directory(),
            'js_file' => 'blocks/register/register.js',
            'attributes' => array(
                'advantages_heading' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Unsere Vorteile:'
                ),
                'register_button_link' => array(
                    'type' => array('object', 'null'),
                    'default' => array('post_id' => 0, 'url' => '', 'post_type' => '', 'title' => '')
                ),
                'register_button_label' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Jetzt Mitglied werden'
                )
            ),
            'example' => array(
'advantages_heading' => 'Unsere Vorteile:', 'register_button_link' => array('post_id' => 0, 'url' => '', 'post_type' => '', 'title' => ''), 'register_button_label' => 'Jetzt Mitglied werden'
            ),
            'dynamic' => true,
            'has_inner_blocks' => true,
            'version' => '1.0.167'
        ) );
