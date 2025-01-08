<?php

        PG_Blocks_v3::register_block_type( array(
            'name' => 'opto-energy/showroom',
            'title' => __( 'Showroom', 'opto_energy' ),
            'description' => __( 'Showroom section with banner and product details', 'opto_energy' ),
            'render_template' => 'blocks/showroom/showroom.php',
            'supports' => array(),
            'base_url' => get_template_directory_uri(),
            'base_path' => get_template_directory(),
            'js_file' => 'blocks/showroom/showroom.js',
            'attributes' => array(
                'section_subtitle' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Nachhaltige Energie für IhrE Kunden'
                ),
                'section_title' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Ihr zuverlässiger Partner für umweltfreundliche Lösungen'
                ),
                'section_description' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Entdecken Sie bei Opto Energy die innovative Welt der erneuerbaren Energien: Effiziente Solaranlagen, umweltfreundliche Wärmepumpen und nachhaltige Haushaltsgeräte für ein energieeffizientes Zuhause.'
                ),
                'banner_image' => array(
                    'type' => array('object', 'null'),
                    'default' => array('id' => 0, 'url' => 'https://images.unsplash.com/photo-1629997047282-41f678126175?ixid=M3wyMDkyMnwwfDF8c2VhcmNofDl8fGltZyUyRnIlMjVtb25vYmxvYyUyMGElMjBzdGlmdHVuZyUyMHdhcmVudGVzdHxlbnwwfHx8fDE3MzQzMDc0MDJ8MA&ixlib=rb-4.0.3q=85&fm=jpg&crop=faces&cs=srgb&w=1200&h=800&fit=crop', 'size' => '', 'svg' => '', 'alt' => 'Opto Energy - Leading Distributor of Energy-Efficient Solar Panels')
                ),
                'banner_icon' => array(
                    'type' => array('object', 'null'),
                    'default' => array('id' => 0, 'url' => '', 'size' => '', 'svg' => '<svg viewBox="0 0 251 271" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:square;stroke-miterlimit:2" class="bg-primary img-fluid w-100" height="1" width="2" version="1.1">
    <path d="M12 2v4" style="fill:none;fill-rule:nonzero;stroke:#1fffd6;stroke-width:2.72px" transform="matrix(10.65147 0 0 11.32169 -2.743 10.783)" data-pg-ia-scene=\'{"l":[{"a":"fadeIn"}]}\'/>
    <path d="M8.5 3.706A9.003 9.003 0 0 0 5.292 18C6.435 19.277 7.233 19.929 9 20.488c.949.3 1.948.512 3 .512a9 9 0 0 0 9-9 9.003 9.003 0 0 0-5.5-8.294" style="fill:none;fill-rule:nonzero;stroke:#17456b;stroke-width:2.72px;stroke-linecap:butt" transform="matrix(10.37222 0 0 10.4632 .561 18.633)" data-pg-ia-scene=\'{"l":[{"a":"fadeIn"}]}\'/>
</svg>', 'alt' => null)
                ),
                'product_details' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Opto Energy ist ein führender Distributor für energieeffiziente Solarpanele, Wärmepumpen und nachhaltige Haushaltsgeräte. Moderne, professionelle und kundenorientierte Lösungen für eine nachhaltige Zukunft. Unser Ziel ist es, Menschen dabei zu helfen, ihre Energiekosten zu senken und gleichzeitig die Umwelt zu schützen, indem wir innovative und effiziente Energielösungen anbieten.'
                ),
                'event_title' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Bestseller'
                ),
                'event_description' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Bei Opto Energy bieten wir eine Vielzahl umweltfreundlicher Energieprodukte an, wie leistungsstarke Solarpanele, effiziente Wärmepumpen und energiesparende Haushaltsgeräte. Unsere Lösungen sind darauf ausgelegt, benutzerfreundlich und einfach verständlich zu sein, damit unsere Kunden die Vorteile einer nachhaltigen Energieversorgung voll ausschöpfen können.'
                ),
                'event_main_link' => array(
                    'type' => array('object', 'null'),
                    'default' => array('post_id' => 0, 'url' => '#', 'post_type' => '', 'title' => '')
                ),
                'event_main_image' => array(
                    'type' => array('object', 'null'),
                    'default' => array('id' => 0, 'url' => esc_url( get_template_directory_uri() . '/img/2023_therma-v_r290.png' ), 'size' => '', 'svg' => '', 'alt' => 'Solarpanel')
                ),
                'event_main_title' => array(
                    'type' => array('string', 'null'),
                    'default' => 'R290 Monobloc'
                ),
                'event_main_subtitle' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Control-Box, Hydro-Unit, IWT'
                ),
                'scrolling_image_1' => array(
                    'type' => array('object', 'null'),
                    'default' => array('id' => 0, 'url' => esc_url( get_template_directory_uri() . '/img/schallleistung_r290.png' ), 'size' => '', 'svg' => '', 'alt' => 'Solarpanel')
                ),
                'scrolling_image_2' => array(
                    'type' => array('object', 'null'),
                    'default' => array('id' => 0, 'url' => esc_url( get_template_directory_uri() . '/img/temperaturen_r290_scaled.png' ), 'size' => '', 'svg' => '', 'alt' => 'Heat Pump')
                ),
                'scrolling_image_3' => array(
                    'type' => array('object', 'null'),
                    'default' => array('id' => 0, 'url' => esc_url( get_template_directory_uri() . '/img/effizienz_r290_scaled.png' ), 'size' => '', 'svg' => '', 'alt' => 'Sustainable Household Appliance')
                ),
                'scrolling_image_4' => array(
                    'type' => array('object', 'null'),
                    'default' => array('id' => 0, 'url' => esc_url( get_template_directory_uri() . '/img/lg-therma-v_r290_lifestyle_8-1.webp' ), 'size' => '', 'svg' => '', 'alt' => 'Energy Efficient System')
                ),
                'scrolling_image_5' => array(
                    'type' => array('object', 'null'),
                    'default' => array('id' => 0, 'url' => esc_url( get_template_directory_uri() . '/img/temperaturen_r290_scaled.png' ), 'size' => '', 'svg' => '', 'alt' => 'Renewable Energy Source')
                ),
                'scrolling_image_6' => array(
                    'type' => array('object', 'null'),
                    'default' => array('id' => 0, 'url' => esc_url( get_template_directory_uri() . '/img/effizienz_r290_scaled.png' ), 'size' => '', 'svg' => '', 'alt' => 'Eco Friendly House')
                ),
                'scrolling_image_7' => array(
                    'type' => array('object', 'null'),
                    'default' => array('id' => 0, 'url' => esc_url( get_template_directory_uri() . '/img/lg-therma-v_r290_lifestyle_8-1.webp' ), 'size' => '', 'svg' => '', 'alt' => 'Green Energy Solution')
                ),
                'scrolling_image_8' => array(
                    'type' => array('object', 'null'),
                    'default' => array('id' => 0, 'url' => 'https://images.unsplash.com/photo-1500514966906-fe245eea9344?ixid=M3wyMDkyMnwwfDF8c2VhcmNofDE1fHx3YWxscGFwZXJ8ZW58MHx8fHwxNzM0MDI1OTA1fDA&ixlib=rb-4.0.3q=85&fm=jpg&crop=faces&cs=srgb&w=1200&h=800&fit=crop', 'size' => '', 'svg' => '', 'alt' => 'Solar Powered Home')
                ),
                'event_description_2' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Als führender Distributor von energieeffizienten Solarpaneelen, Wärmepumpen und nachhaltigen Haushaltsgeräten bei Opto Energy freuen wir uns, unsere Kunden auf eine Reise durch die Welt der erneuerbaren Energien zu begleiten. Unser Team wird Sie auf einer siebentägigen Entdeckungstour durch unsere modernen Produkte und Lösungen führen, um Ihnen die Vorteile unserer innovativen Technologien näherzubringen.'
                ),
                'event_main_link_2' => array(
                    'type' => array('object', 'null'),
                    'default' => array('post_id' => 0, 'url' => '#', 'post_type' => '', 'title' => '')
                ),
                'event_main_image_2' => array(
                    'type' => array('object', 'null'),
                    'default' => array('id' => 0, 'url' => esc_url( get_template_directory_uri() . '/img/thermav_r32_monobloc.webp' ), 'size' => '', 'svg' => '', 'alt' => '...')
                ),
                'event_main_title_2' => array(
                    'type' => array('string', 'null'),
                    'default' => 'R32 Monobloc S'
                ),
                'event_main_subtitle_2' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Silent Supreme'
                ),
                'scrolling_image_9' => array(
                    'type' => array('object', 'null'),
                    'default' => array('id' => 0, 'url' => esc_url( get_template_directory_uri() . '/img/m_sound.jpg' ), 'size' => '', 'svg' => '', 'alt' => 'Solarpanel')
                ),
                'scrolling_image_10' => array(
                    'type' => array('object', 'null'),
                    'default' => array('id' => 0, 'url' => esc_url( get_template_directory_uri() . '/img/m_plot.jpg' ), 'size' => '', 'svg' => '', 'alt' => 'Heat Pump')
                ),
                'scrolling_image_11' => array(
                    'type' => array('object', 'null'),
                    'default' => array('id' => 0, 'url' => esc_url( get_template_directory_uri() . '/img/m_features.jpg' ), 'size' => '', 'svg' => '', 'alt' => 'Sustainable Household Appliance')
                ),
                'scrolling_image_12' => array(
                    'type' => array('object', 'null'),
                    'default' => array('id' => 0, 'url' => esc_url( get_template_directory_uri() . '/img/m_allinone-jpg.jpg' ), 'size' => '', 'svg' => '', 'alt' => 'Energy-Efficient Solution')
                ),
                'scrolling_image_13' => array(
                    'type' => array('object', 'null'),
                    'default' => array('id' => 0, 'url' => esc_url( get_template_directory_uri() . '/img/m_sound.jpg' ), 'size' => '', 'svg' => '', 'alt' => 'Eco-Friendly Product')
                ),
                'scrolling_image_14' => array(
                    'type' => array('object', 'null'),
                    'default' => array('id' => 0, 'url' => esc_url( get_template_directory_uri() . '/img/m_plot.jpg' ), 'size' => '', 'svg' => '', 'alt' => 'Renewable Energy Source')
                ),
                'scrolling_image_15' => array(
                    'type' => array('object', 'null'),
                    'default' => array('id' => 0, 'url' => esc_url( get_template_directory_uri() . '/img/m_features.jpg' ), 'size' => '', 'svg' => '', 'alt' => 'Green Energy Solution')
                ),
                'scrolling_image_16' => array(
                    'type' => array('object', 'null'),
                    'default' => array('id' => 0, 'url' => esc_url( get_template_directory_uri() . '/img/m_allinone-jpg.jpg' ), 'size' => '', 'svg' => '', 'alt' => 'Solar Power System')
                ),
                'recent_events_title' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Aktuelles'
                ),
                'view_all_button_link' => array(
                    'type' => array('object', 'null'),
                    'default' => array('post_id' => 0, 'url' => '#', 'post_type' => '', 'title' => '')
                ),
                'view_all_button_label' => array(
                    'type' => array('string', 'null'),
                    'default' => 'Alle anzeigen'
                )
            ),
            'example' => array(
'section_subtitle' => 'Nachhaltige Energie für IhrE Kunden', 'section_title' => 'Ihr zuverlässiger Partner für umweltfreundliche Lösungen', 'section_description' => 'Entdecken Sie bei Opto Energy die innovative Welt der erneuerbaren Energien: Effiziente Solaranlagen, umweltfreundliche Wärmepumpen und nachhaltige Haushaltsgeräte für ein energieeffizientes Zuhause.', 'banner_image' => array('id' => 0, 'url' => 'https://images.unsplash.com/photo-1629997047282-41f678126175?ixid=M3wyMDkyMnwwfDF8c2VhcmNofDl8fGltZyUyRnIlMjVtb25vYmxvYyUyMGElMjBzdGlmdHVuZyUyMHdhcmVudGVzdHxlbnwwfHx8fDE3MzQzMDc0MDJ8MA&ixlib=rb-4.0.3q=85&fm=jpg&crop=faces&cs=srgb&w=1200&h=800&fit=crop', 'size' => '', 'svg' => '', 'alt' => 'Opto Energy - Leading Distributor of Energy-Efficient Solar Panels'), 'banner_icon' => array('id' => 0, 'url' => '', 'size' => '', 'svg' => '<svg viewBox="0 0 251 271" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:square;stroke-miterlimit:2" class="bg-primary img-fluid w-100" height="1" width="2" version="1.1">
    <path d="M12 2v4" style="fill:none;fill-rule:nonzero;stroke:#1fffd6;stroke-width:2.72px" transform="matrix(10.65147 0 0 11.32169 -2.743 10.783)" data-pg-ia-scene=\'{"l":[{"a":"fadeIn"}]}\'/>
    <path d="M8.5 3.706A9.003 9.003 0 0 0 5.292 18C6.435 19.277 7.233 19.929 9 20.488c.949.3 1.948.512 3 .512a9 9 0 0 0 9-9 9.003 9.003 0 0 0-5.5-8.294" style="fill:none;fill-rule:nonzero;stroke:#17456b;stroke-width:2.72px;stroke-linecap:butt" transform="matrix(10.37222 0 0 10.4632 .561 18.633)" data-pg-ia-scene=\'{"l":[{"a":"fadeIn"}]}\'/>
</svg>', 'alt' => null), 'product_details' => 'Opto Energy ist ein führender Distributor für energieeffiziente Solarpanele, Wärmepumpen und nachhaltige Haushaltsgeräte. Moderne, professionelle und kundenorientierte Lösungen für eine nachhaltige Zukunft. Unser Ziel ist es, Menschen dabei zu helfen, ihre Energiekosten zu senken und gleichzeitig die Umwelt zu schützen, indem wir innovative und effiziente Energielösungen anbieten.', 'event_title' => 'Bestseller', 'event_description' => 'Bei Opto Energy bieten wir eine Vielzahl umweltfreundlicher Energieprodukte an, wie leistungsstarke Solarpanele, effiziente Wärmepumpen und energiesparende Haushaltsgeräte. Unsere Lösungen sind darauf ausgelegt, benutzerfreundlich und einfach verständlich zu sein, damit unsere Kunden die Vorteile einer nachhaltigen Energieversorgung voll ausschöpfen können.', 'event_main_link' => array('post_id' => 0, 'url' => '#', 'post_type' => '', 'title' => ''), 'event_main_image' => array('id' => 0, 'url' => esc_url( get_template_directory_uri() . '/img/2023_therma-v_r290.png' ), 'size' => '', 'svg' => '', 'alt' => 'Solarpanel'), 'event_main_title' => 'R290 Monobloc', 'event_main_subtitle' => 'Control-Box, Hydro-Unit, IWT', 'scrolling_image_1' => array('id' => 0, 'url' => esc_url( get_template_directory_uri() . '/img/schallleistung_r290.png' ), 'size' => '', 'svg' => '', 'alt' => 'Solarpanel'), 'scrolling_image_2' => array('id' => 0, 'url' => esc_url( get_template_directory_uri() . '/img/temperaturen_r290_scaled.png' ), 'size' => '', 'svg' => '', 'alt' => 'Heat Pump'), 'scrolling_image_3' => array('id' => 0, 'url' => esc_url( get_template_directory_uri() . '/img/effizienz_r290_scaled.png' ), 'size' => '', 'svg' => '', 'alt' => 'Sustainable Household Appliance'), 'scrolling_image_4' => array('id' => 0, 'url' => esc_url( get_template_directory_uri() . '/img/lg-therma-v_r290_lifestyle_8-1.webp' ), 'size' => '', 'svg' => '', 'alt' => 'Energy Efficient System'), 'scrolling_image_5' => array('id' => 0, 'url' => esc_url( get_template_directory_uri() . '/img/temperaturen_r290_scaled.png' ), 'size' => '', 'svg' => '', 'alt' => 'Renewable Energy Source'), 'scrolling_image_6' => array('id' => 0, 'url' => esc_url( get_template_directory_uri() . '/img/effizienz_r290_scaled.png' ), 'size' => '', 'svg' => '', 'alt' => 'Eco Friendly House'), 'scrolling_image_7' => array('id' => 0, 'url' => esc_url( get_template_directory_uri() . '/img/lg-therma-v_r290_lifestyle_8-1.webp' ), 'size' => '', 'svg' => '', 'alt' => 'Green Energy Solution'), 'scrolling_image_8' => array('id' => 0, 'url' => 'https://images.unsplash.com/photo-1500514966906-fe245eea9344?ixid=M3wyMDkyMnwwfDF8c2VhcmNofDE1fHx3YWxscGFwZXJ8ZW58MHx8fHwxNzM0MDI1OTA1fDA&ixlib=rb-4.0.3q=85&fm=jpg&crop=faces&cs=srgb&w=1200&h=800&fit=crop', 'size' => '', 'svg' => '', 'alt' => 'Solar Powered Home'), 'event_description_2' => 'Als führender Distributor von energieeffizienten Solarpaneelen, Wärmepumpen und nachhaltigen Haushaltsgeräten bei Opto Energy freuen wir uns, unsere Kunden auf eine Reise durch die Welt der erneuerbaren Energien zu begleiten. Unser Team wird Sie auf einer siebentägigen Entdeckungstour durch unsere modernen Produkte und Lösungen führen, um Ihnen die Vorteile unserer innovativen Technologien näherzubringen.', 'event_main_link_2' => array('post_id' => 0, 'url' => '#', 'post_type' => '', 'title' => ''), 'event_main_image_2' => array('id' => 0, 'url' => esc_url( get_template_directory_uri() . '/img/thermav_r32_monobloc.webp' ), 'size' => '', 'svg' => '', 'alt' => '...'), 'event_main_title_2' => 'R32 Monobloc S', 'event_main_subtitle_2' => 'Silent Supreme', 'scrolling_image_9' => array('id' => 0, 'url' => esc_url( get_template_directory_uri() . '/img/m_sound.jpg' ), 'size' => '', 'svg' => '', 'alt' => 'Solarpanel'), 'scrolling_image_10' => array('id' => 0, 'url' => esc_url( get_template_directory_uri() . '/img/m_plot.jpg' ), 'size' => '', 'svg' => '', 'alt' => 'Heat Pump'), 'scrolling_image_11' => array('id' => 0, 'url' => esc_url( get_template_directory_uri() . '/img/m_features.jpg' ), 'size' => '', 'svg' => '', 'alt' => 'Sustainable Household Appliance'), 'scrolling_image_12' => array('id' => 0, 'url' => esc_url( get_template_directory_uri() . '/img/m_allinone-jpg.jpg' ), 'size' => '', 'svg' => '', 'alt' => 'Energy-Efficient Solution'), 'scrolling_image_13' => array('id' => 0, 'url' => esc_url( get_template_directory_uri() . '/img/m_sound.jpg' ), 'size' => '', 'svg' => '', 'alt' => 'Eco-Friendly Product'), 'scrolling_image_14' => array('id' => 0, 'url' => esc_url( get_template_directory_uri() . '/img/m_plot.jpg' ), 'size' => '', 'svg' => '', 'alt' => 'Renewable Energy Source'), 'scrolling_image_15' => array('id' => 0, 'url' => esc_url( get_template_directory_uri() . '/img/m_features.jpg' ), 'size' => '', 'svg' => '', 'alt' => 'Green Energy Solution'), 'scrolling_image_16' => array('id' => 0, 'url' => esc_url( get_template_directory_uri() . '/img/m_allinone-jpg.jpg' ), 'size' => '', 'svg' => '', 'alt' => 'Solar Power System'), 'recent_events_title' => 'Aktuelles', 'view_all_button_link' => array('post_id' => 0, 'url' => '#', 'post_type' => '', 'title' => ''), 'view_all_button_label' => 'Alle anzeigen'
            ),
            'dynamic' => true,
            'has_inner_blocks' => true,
            'version' => '1.0.161'
        ) );
