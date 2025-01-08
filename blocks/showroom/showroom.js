
( function ( blocks, element, blockEditor ) {
    const el = element.createElement,
        registerBlockType = blocks.registerBlockType,
        ServerSideRender = PgServerSideRender3,
        InspectorControls = blockEditor.InspectorControls,
        useBlockProps = blockEditor.useBlockProps;
        
    const {__} = wp.i18n;
    const {ColorPicker, TextControl, ToggleControl, SelectControl, Panel, PanelBody, Disabled, TextareaControl, BaseControl} = wp.components;
    const {useSelect} = wp.data;
    const {RawHTML, Fragment} = element;
   
    const {InnerBlocks, URLInputButton, RichText} = wp.blockEditor;
    const useInnerBlocksProps = blockEditor.useInnerBlocksProps || blockEditor.__experimentalUseInnerBlocksProps;
    
    const propOrDefault = function(val, prop, field) {
        if(block.attributes[prop] && (val === null || val === '')) {
            return field ? block.attributes[prop].default[field] : block.attributes[prop].default;
        }
        return val;
    }
    
    const block = registerBlockType( 'opto-energy/showroom', {
        apiVersion: 2,
        title: 'Showroom',
        description: 'Showroom section with banner and product details',
        icon: 'block-default',
        category: 'opto_energy',
        keywords: [],
        supports: {},
        attributes: {
            section_subtitle: {
                type: ['string', 'null'],
                default: `Nachhaltige Energie für IhrE Kunden`,
            },
            section_title: {
                type: ['string', 'null'],
                default: `Ihr zuverlässiger Partner für umweltfreundliche Lösungen`,
            },
            section_description: {
                type: ['string', 'null'],
                default: `Entdecken Sie bei Opto Energy die innovative Welt der erneuerbaren Energien: Effiziente Solaranlagen, umweltfreundliche Wärmepumpen und nachhaltige Haushaltsgeräte für ein energieeffizientes Zuhause.`,
            },
            banner_image: {
                type: ['object', 'null'],
                default: {id: 0, url: 'https://images.unsplash.com/photo-1629997047282-41f678126175?ixid=M3wyMDkyMnwwfDF8c2VhcmNofDl8fGltZyUyRnIlMjVtb25vYmxvYyUyMGElMjBzdGlmdHVuZyUyMHdhcmVudGVzdHxlbnwwfHx8fDE3MzQzMDc0MDJ8MA&ixlib=rb-4.0.3q=85&fm=jpg&crop=faces&cs=srgb&w=1200&h=800&fit=crop', size: '', svg: '', alt: 'Opto Energy - Leading Distributor of Energy-Efficient Solar Panels'},
            },
            banner_icon: {
                type: ['object', 'null'],
                default: {id: 0, url: '', size: '', svg: `<svg viewBox="0 0 251 271" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:square;stroke-miterlimit:2" class="bg-primary img-fluid w-100" height="1" width="2" version="1.1">
    <path d="M12 2v4" style="fill:none;fill-rule:nonzero;stroke:#1fffd6;stroke-width:2.72px" transform="matrix(10.65147 0 0 11.32169 -2.743 10.783)" data-pg-ia-scene='{"l":[{"a":"fadeIn"}]}'/>
    <path d="M8.5 3.706A9.003 9.003 0 0 0 5.292 18C6.435 19.277 7.233 19.929 9 20.488c.949.3 1.948.512 3 .512a9 9 0 0 0 9-9 9.003 9.003 0 0 0-5.5-8.294" style="fill:none;fill-rule:nonzero;stroke:#17456b;stroke-width:2.72px;stroke-linecap:butt" transform="matrix(10.37222 0 0 10.4632 .561 18.633)" data-pg-ia-scene='{"l":[{"a":"fadeIn"}]}'/>
</svg>`, alt: null},
            },
            product_details: {
                type: ['string', 'null'],
                default: `Opto Energy ist ein führender Distributor für energieeffiziente Solarpanele, Wärmepumpen und nachhaltige Haushaltsgeräte. Moderne, professionelle und kundenorientierte Lösungen für eine nachhaltige Zukunft. Unser Ziel ist es, Menschen dabei zu helfen, ihre Energiekosten zu senken und gleichzeitig die Umwelt zu schützen, indem wir innovative und effiziente Energielösungen anbieten.`,
            },
            event_title: {
                type: ['string', 'null'],
                default: `Bestseller`,
            },
            event_description: {
                type: ['string', 'null'],
                default: `Bei Opto Energy bieten wir eine Vielzahl umweltfreundlicher Energieprodukte an, wie leistungsstarke Solarpanele, effiziente Wärmepumpen und energiesparende Haushaltsgeräte. Unsere Lösungen sind darauf ausgelegt, benutzerfreundlich und einfach verständlich zu sein, damit unsere Kunden die Vorteile einer nachhaltigen Energieversorgung voll ausschöpfen können.`,
            },
            event_main_link: {
                type: ['object', 'null'],
                default: {post_id: 0, url: '#', title: '', 'post_type': null},
            },
            event_main_image: {
                type: ['object', 'null'],
                default: {id: 0, url: (pg_project_data_opto_energy ? pg_project_data_opto_energy.url : '') + 'img/2023_therma-v_r290.png', size: '', svg: '', alt: 'Solarpanel'},
            },
            event_main_title: {
                type: ['string', 'null'],
                default: `R290 Monobloc`,
            },
            event_main_subtitle: {
                type: ['string', 'null'],
                default: `Control-Box, Hydro-Unit, IWT`,
            },
            scrolling_image_1: {
                type: ['object', 'null'],
                default: {id: 0, url: (pg_project_data_opto_energy ? pg_project_data_opto_energy.url : '') + 'img/schallleistung_r290.png', size: '', svg: '', alt: 'Solarpanel'},
            },
            scrolling_image_2: {
                type: ['object', 'null'],
                default: {id: 0, url: (pg_project_data_opto_energy ? pg_project_data_opto_energy.url : '') + 'img/temperaturen_r290_scaled.png', size: '', svg: '', alt: 'Heat Pump'},
            },
            scrolling_image_3: {
                type: ['object', 'null'],
                default: {id: 0, url: (pg_project_data_opto_energy ? pg_project_data_opto_energy.url : '') + 'img/effizienz_r290_scaled.png', size: '', svg: '', alt: 'Sustainable Household Appliance'},
            },
            scrolling_image_4: {
                type: ['object', 'null'],
                default: {id: 0, url: (pg_project_data_opto_energy ? pg_project_data_opto_energy.url : '') + 'img/lg-therma-v_r290_lifestyle_8-1.webp', size: '', svg: '', alt: 'Energy Efficient System'},
            },
            scrolling_image_5: {
                type: ['object', 'null'],
                default: {id: 0, url: (pg_project_data_opto_energy ? pg_project_data_opto_energy.url : '') + 'img/temperaturen_r290_scaled.png', size: '', svg: '', alt: 'Renewable Energy Source'},
            },
            scrolling_image_6: {
                type: ['object', 'null'],
                default: {id: 0, url: (pg_project_data_opto_energy ? pg_project_data_opto_energy.url : '') + 'img/effizienz_r290_scaled.png', size: '', svg: '', alt: 'Eco Friendly House'},
            },
            scrolling_image_7: {
                type: ['object', 'null'],
                default: {id: 0, url: (pg_project_data_opto_energy ? pg_project_data_opto_energy.url : '') + 'img/lg-therma-v_r290_lifestyle_8-1.webp', size: '', svg: '', alt: 'Green Energy Solution'},
            },
            scrolling_image_8: {
                type: ['object', 'null'],
                default: {id: 0, url: 'https://images.unsplash.com/photo-1500514966906-fe245eea9344?ixid=M3wyMDkyMnwwfDF8c2VhcmNofDE1fHx3YWxscGFwZXJ8ZW58MHx8fHwxNzM0MDI1OTA1fDA&ixlib=rb-4.0.3q=85&fm=jpg&crop=faces&cs=srgb&w=1200&h=800&fit=crop', size: '', svg: '', alt: 'Solar Powered Home'},
            },
            event_description_2: {
                type: ['string', 'null'],
                default: `Als führender Distributor von energieeffizienten Solarpaneelen, Wärmepumpen und nachhaltigen Haushaltsgeräten bei Opto Energy freuen wir uns, unsere Kunden auf eine Reise durch die Welt der erneuerbaren Energien zu begleiten. Unser Team wird Sie auf einer siebentägigen Entdeckungstour durch unsere modernen Produkte und Lösungen führen, um Ihnen die Vorteile unserer innovativen Technologien näherzubringen.`,
            },
            event_main_link_2: {
                type: ['object', 'null'],
                default: {post_id: 0, url: '#', title: '', 'post_type': null},
            },
            event_main_image_2: {
                type: ['object', 'null'],
                default: {id: 0, url: (pg_project_data_opto_energy ? pg_project_data_opto_energy.url : '') + 'img/thermav_r32_monobloc.webp', size: '', svg: '', alt: '...'},
            },
            event_main_title_2: {
                type: ['string', 'null'],
                default: `R32 Monobloc S`,
            },
            event_main_subtitle_2: {
                type: ['string', 'null'],
                default: `Silent Supreme`,
            },
            scrolling_image_9: {
                type: ['object', 'null'],
                default: {id: 0, url: (pg_project_data_opto_energy ? pg_project_data_opto_energy.url : '') + 'img/m_sound.jpg', size: '', svg: '', alt: 'Solarpanel'},
            },
            scrolling_image_10: {
                type: ['object', 'null'],
                default: {id: 0, url: (pg_project_data_opto_energy ? pg_project_data_opto_energy.url : '') + 'img/m_plot.jpg', size: '', svg: '', alt: 'Heat Pump'},
            },
            scrolling_image_11: {
                type: ['object', 'null'],
                default: {id: 0, url: (pg_project_data_opto_energy ? pg_project_data_opto_energy.url : '') + 'img/m_features.jpg', size: '', svg: '', alt: 'Sustainable Household Appliance'},
            },
            scrolling_image_12: {
                type: ['object', 'null'],
                default: {id: 0, url: (pg_project_data_opto_energy ? pg_project_data_opto_energy.url : '') + 'img/m_allinone-jpg.jpg', size: '', svg: '', alt: 'Energy-Efficient Solution'},
            },
            scrolling_image_13: {
                type: ['object', 'null'],
                default: {id: 0, url: (pg_project_data_opto_energy ? pg_project_data_opto_energy.url : '') + 'img/m_sound.jpg', size: '', svg: '', alt: 'Eco-Friendly Product'},
            },
            scrolling_image_14: {
                type: ['object', 'null'],
                default: {id: 0, url: (pg_project_data_opto_energy ? pg_project_data_opto_energy.url : '') + 'img/m_plot.jpg', size: '', svg: '', alt: 'Renewable Energy Source'},
            },
            scrolling_image_15: {
                type: ['object', 'null'],
                default: {id: 0, url: (pg_project_data_opto_energy ? pg_project_data_opto_energy.url : '') + 'img/m_features.jpg', size: '', svg: '', alt: 'Green Energy Solution'},
            },
            scrolling_image_16: {
                type: ['object', 'null'],
                default: {id: 0, url: (pg_project_data_opto_energy ? pg_project_data_opto_energy.url : '') + 'img/m_allinone-jpg.jpg', size: '', svg: '', alt: 'Solar Power System'},
            },
            recent_events_title: {
                type: ['string', 'null'],
                default: `Aktuelles`,
            },
            view_all_button_link: {
                type: ['object', 'null'],
                default: {post_id: 0, url: '#', title: '', 'post_type': null},
            },
            view_all_button_label: {
                type: ['string', 'null'],
                default: `Alle anzeigen`,
            }
        },
        example: { attributes: { section_subtitle: `Nachhaltige Energie für IhrE Kunden`, section_title: `Ihr zuverlässiger Partner für umweltfreundliche Lösungen`, section_description: `Entdecken Sie bei Opto Energy die innovative Welt der erneuerbaren Energien: Effiziente Solaranlagen, umweltfreundliche Wärmepumpen und nachhaltige Haushaltsgeräte für ein energieeffizientes Zuhause.`, banner_image: {id: 0, url: 'https://images.unsplash.com/photo-1629997047282-41f678126175?ixid=M3wyMDkyMnwwfDF8c2VhcmNofDl8fGltZyUyRnIlMjVtb25vYmxvYyUyMGElMjBzdGlmdHVuZyUyMHdhcmVudGVzdHxlbnwwfHx8fDE3MzQzMDc0MDJ8MA&ixlib=rb-4.0.3q=85&fm=jpg&crop=faces&cs=srgb&w=1200&h=800&fit=crop', size: '', svg: '', alt: 'Opto Energy - Leading Distributor of Energy-Efficient Solar Panels'}, banner_icon: {id: 0, url: '', size: '', svg: `<svg viewBox="0 0 251 271" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:square;stroke-miterlimit:2" class="bg-primary img-fluid w-100" height="1" width="2" version="1.1">
    <path d="M12 2v4" style="fill:none;fill-rule:nonzero;stroke:#1fffd6;stroke-width:2.72px" transform="matrix(10.65147 0 0 11.32169 -2.743 10.783)" data-pg-ia-scene='{"l":[{"a":"fadeIn"}]}'/>
    <path d="M8.5 3.706A9.003 9.003 0 0 0 5.292 18C6.435 19.277 7.233 19.929 9 20.488c.949.3 1.948.512 3 .512a9 9 0 0 0 9-9 9.003 9.003 0 0 0-5.5-8.294" style="fill:none;fill-rule:nonzero;stroke:#17456b;stroke-width:2.72px;stroke-linecap:butt" transform="matrix(10.37222 0 0 10.4632 .561 18.633)" data-pg-ia-scene='{"l":[{"a":"fadeIn"}]}'/>
</svg>`, alt: null}, product_details: `Opto Energy ist ein führender Distributor für energieeffiziente Solarpanele, Wärmepumpen und nachhaltige Haushaltsgeräte. Moderne, professionelle und kundenorientierte Lösungen für eine nachhaltige Zukunft. Unser Ziel ist es, Menschen dabei zu helfen, ihre Energiekosten zu senken und gleichzeitig die Umwelt zu schützen, indem wir innovative und effiziente Energielösungen anbieten.`, event_title: `Bestseller`, event_description: `Bei Opto Energy bieten wir eine Vielzahl umweltfreundlicher Energieprodukte an, wie leistungsstarke Solarpanele, effiziente Wärmepumpen und energiesparende Haushaltsgeräte. Unsere Lösungen sind darauf ausgelegt, benutzerfreundlich und einfach verständlich zu sein, damit unsere Kunden die Vorteile einer nachhaltigen Energieversorgung voll ausschöpfen können.`, event_main_link: {post_id: 0, url: '#', title: '', 'post_type': null}, event_main_image: {id: 0, url: (pg_project_data_opto_energy ? pg_project_data_opto_energy.url : '') + 'img/2023_therma-v_r290.png', size: '', svg: '', alt: 'Solarpanel'}, event_main_title: `R290 Monobloc`, event_main_subtitle: `Control-Box, Hydro-Unit, IWT`, scrolling_image_1: {id: 0, url: (pg_project_data_opto_energy ? pg_project_data_opto_energy.url : '') + 'img/schallleistung_r290.png', size: '', svg: '', alt: 'Solarpanel'}, scrolling_image_2: {id: 0, url: (pg_project_data_opto_energy ? pg_project_data_opto_energy.url : '') + 'img/temperaturen_r290_scaled.png', size: '', svg: '', alt: 'Heat Pump'}, scrolling_image_3: {id: 0, url: (pg_project_data_opto_energy ? pg_project_data_opto_energy.url : '') + 'img/effizienz_r290_scaled.png', size: '', svg: '', alt: 'Sustainable Household Appliance'}, scrolling_image_4: {id: 0, url: (pg_project_data_opto_energy ? pg_project_data_opto_energy.url : '') + 'img/lg-therma-v_r290_lifestyle_8-1.webp', size: '', svg: '', alt: 'Energy Efficient System'}, scrolling_image_5: {id: 0, url: (pg_project_data_opto_energy ? pg_project_data_opto_energy.url : '') + 'img/temperaturen_r290_scaled.png', size: '', svg: '', alt: 'Renewable Energy Source'}, scrolling_image_6: {id: 0, url: (pg_project_data_opto_energy ? pg_project_data_opto_energy.url : '') + 'img/effizienz_r290_scaled.png', size: '', svg: '', alt: 'Eco Friendly House'}, scrolling_image_7: {id: 0, url: (pg_project_data_opto_energy ? pg_project_data_opto_energy.url : '') + 'img/lg-therma-v_r290_lifestyle_8-1.webp', size: '', svg: '', alt: 'Green Energy Solution'}, scrolling_image_8: {id: 0, url: 'https://images.unsplash.com/photo-1500514966906-fe245eea9344?ixid=M3wyMDkyMnwwfDF8c2VhcmNofDE1fHx3YWxscGFwZXJ8ZW58MHx8fHwxNzM0MDI1OTA1fDA&ixlib=rb-4.0.3q=85&fm=jpg&crop=faces&cs=srgb&w=1200&h=800&fit=crop', size: '', svg: '', alt: 'Solar Powered Home'}, event_description_2: `Als führender Distributor von energieeffizienten Solarpaneelen, Wärmepumpen und nachhaltigen Haushaltsgeräten bei Opto Energy freuen wir uns, unsere Kunden auf eine Reise durch die Welt der erneuerbaren Energien zu begleiten. Unser Team wird Sie auf einer siebentägigen Entdeckungstour durch unsere modernen Produkte und Lösungen führen, um Ihnen die Vorteile unserer innovativen Technologien näherzubringen.`, event_main_link_2: {post_id: 0, url: '#', title: '', 'post_type': null}, event_main_image_2: {id: 0, url: (pg_project_data_opto_energy ? pg_project_data_opto_energy.url : '') + 'img/thermav_r32_monobloc.webp', size: '', svg: '', alt: '...'}, event_main_title_2: `R32 Monobloc S`, event_main_subtitle_2: `Silent Supreme`, scrolling_image_9: {id: 0, url: (pg_project_data_opto_energy ? pg_project_data_opto_energy.url : '') + 'img/m_sound.jpg', size: '', svg: '', alt: 'Solarpanel'}, scrolling_image_10: {id: 0, url: (pg_project_data_opto_energy ? pg_project_data_opto_energy.url : '') + 'img/m_plot.jpg', size: '', svg: '', alt: 'Heat Pump'}, scrolling_image_11: {id: 0, url: (pg_project_data_opto_energy ? pg_project_data_opto_energy.url : '') + 'img/m_features.jpg', size: '', svg: '', alt: 'Sustainable Household Appliance'}, scrolling_image_12: {id: 0, url: (pg_project_data_opto_energy ? pg_project_data_opto_energy.url : '') + 'img/m_allinone-jpg.jpg', size: '', svg: '', alt: 'Energy-Efficient Solution'}, scrolling_image_13: {id: 0, url: (pg_project_data_opto_energy ? pg_project_data_opto_energy.url : '') + 'img/m_sound.jpg', size: '', svg: '', alt: 'Eco-Friendly Product'}, scrolling_image_14: {id: 0, url: (pg_project_data_opto_energy ? pg_project_data_opto_energy.url : '') + 'img/m_plot.jpg', size: '', svg: '', alt: 'Renewable Energy Source'}, scrolling_image_15: {id: 0, url: (pg_project_data_opto_energy ? pg_project_data_opto_energy.url : '') + 'img/m_features.jpg', size: '', svg: '', alt: 'Green Energy Solution'}, scrolling_image_16: {id: 0, url: (pg_project_data_opto_energy ? pg_project_data_opto_energy.url : '') + 'img/m_allinone-jpg.jpg', size: '', svg: '', alt: 'Solar Power System'}, recent_events_title: `Aktuelles`, view_all_button_link: {post_id: 0, url: '#', title: '', 'post_type': null}, view_all_button_label: `Alle anzeigen` } },
        edit: function ( props ) {
            const blockProps = useBlockProps({ className: 'bg-success  pt-5 text-center', id: 'showroom', 'data-pg-name': 'Showroom', title: 'Showroom' });
            const setAttributes = props.setAttributes; 
            
            props.banner_image = useSelect(function( select ) {
                return {
                    banner_image: props.attributes.banner_image.id ? select('core').getMedia(props.attributes.banner_image.id) : undefined
                };
            }, [props.attributes.banner_image] ).banner_image;
            

            props.banner_icon = useSelect(function( select ) {
                return {
                    banner_icon: props.attributes.banner_icon.id ? select('core').getMedia(props.attributes.banner_icon.id) : undefined
                };
            }, [props.attributes.banner_icon] ).banner_icon;
            

            props.event_main_image = useSelect(function( select ) {
                return {
                    event_main_image: props.attributes.event_main_image.id ? select('core').getMedia(props.attributes.event_main_image.id) : undefined
                };
            }, [props.attributes.event_main_image] ).event_main_image;
            

            props.scrolling_image_1 = useSelect(function( select ) {
                return {
                    scrolling_image_1: props.attributes.scrolling_image_1.id ? select('core').getMedia(props.attributes.scrolling_image_1.id) : undefined
                };
            }, [props.attributes.scrolling_image_1] ).scrolling_image_1;
            

            props.scrolling_image_2 = useSelect(function( select ) {
                return {
                    scrolling_image_2: props.attributes.scrolling_image_2.id ? select('core').getMedia(props.attributes.scrolling_image_2.id) : undefined
                };
            }, [props.attributes.scrolling_image_2] ).scrolling_image_2;
            

            props.scrolling_image_3 = useSelect(function( select ) {
                return {
                    scrolling_image_3: props.attributes.scrolling_image_3.id ? select('core').getMedia(props.attributes.scrolling_image_3.id) : undefined
                };
            }, [props.attributes.scrolling_image_3] ).scrolling_image_3;
            

            props.scrolling_image_4 = useSelect(function( select ) {
                return {
                    scrolling_image_4: props.attributes.scrolling_image_4.id ? select('core').getMedia(props.attributes.scrolling_image_4.id) : undefined
                };
            }, [props.attributes.scrolling_image_4] ).scrolling_image_4;
            

            props.scrolling_image_5 = useSelect(function( select ) {
                return {
                    scrolling_image_5: props.attributes.scrolling_image_5.id ? select('core').getMedia(props.attributes.scrolling_image_5.id) : undefined
                };
            }, [props.attributes.scrolling_image_5] ).scrolling_image_5;
            

            props.scrolling_image_6 = useSelect(function( select ) {
                return {
                    scrolling_image_6: props.attributes.scrolling_image_6.id ? select('core').getMedia(props.attributes.scrolling_image_6.id) : undefined
                };
            }, [props.attributes.scrolling_image_6] ).scrolling_image_6;
            

            props.scrolling_image_7 = useSelect(function( select ) {
                return {
                    scrolling_image_7: props.attributes.scrolling_image_7.id ? select('core').getMedia(props.attributes.scrolling_image_7.id) : undefined
                };
            }, [props.attributes.scrolling_image_7] ).scrolling_image_7;
            

            props.scrolling_image_8 = useSelect(function( select ) {
                return {
                    scrolling_image_8: props.attributes.scrolling_image_8.id ? select('core').getMedia(props.attributes.scrolling_image_8.id) : undefined
                };
            }, [props.attributes.scrolling_image_8] ).scrolling_image_8;
            

            props.event_main_image_2 = useSelect(function( select ) {
                return {
                    event_main_image_2: props.attributes.event_main_image_2.id ? select('core').getMedia(props.attributes.event_main_image_2.id) : undefined
                };
            }, [props.attributes.event_main_image_2] ).event_main_image_2;
            

            props.scrolling_image_9 = useSelect(function( select ) {
                return {
                    scrolling_image_9: props.attributes.scrolling_image_9.id ? select('core').getMedia(props.attributes.scrolling_image_9.id) : undefined
                };
            }, [props.attributes.scrolling_image_9] ).scrolling_image_9;
            

            props.scrolling_image_10 = useSelect(function( select ) {
                return {
                    scrolling_image_10: props.attributes.scrolling_image_10.id ? select('core').getMedia(props.attributes.scrolling_image_10.id) : undefined
                };
            }, [props.attributes.scrolling_image_10] ).scrolling_image_10;
            

            props.scrolling_image_11 = useSelect(function( select ) {
                return {
                    scrolling_image_11: props.attributes.scrolling_image_11.id ? select('core').getMedia(props.attributes.scrolling_image_11.id) : undefined
                };
            }, [props.attributes.scrolling_image_11] ).scrolling_image_11;
            

            props.scrolling_image_12 = useSelect(function( select ) {
                return {
                    scrolling_image_12: props.attributes.scrolling_image_12.id ? select('core').getMedia(props.attributes.scrolling_image_12.id) : undefined
                };
            }, [props.attributes.scrolling_image_12] ).scrolling_image_12;
            

            props.scrolling_image_13 = useSelect(function( select ) {
                return {
                    scrolling_image_13: props.attributes.scrolling_image_13.id ? select('core').getMedia(props.attributes.scrolling_image_13.id) : undefined
                };
            }, [props.attributes.scrolling_image_13] ).scrolling_image_13;
            

            props.scrolling_image_14 = useSelect(function( select ) {
                return {
                    scrolling_image_14: props.attributes.scrolling_image_14.id ? select('core').getMedia(props.attributes.scrolling_image_14.id) : undefined
                };
            }, [props.attributes.scrolling_image_14] ).scrolling_image_14;
            

            props.scrolling_image_15 = useSelect(function( select ) {
                return {
                    scrolling_image_15: props.attributes.scrolling_image_15.id ? select('core').getMedia(props.attributes.scrolling_image_15.id) : undefined
                };
            }, [props.attributes.scrolling_image_15] ).scrolling_image_15;
            

            props.scrolling_image_16 = useSelect(function( select ) {
                return {
                    scrolling_image_16: props.attributes.scrolling_image_16.id ? select('core').getMedia(props.attributes.scrolling_image_16.id) : undefined
                };
            }, [props.attributes.scrolling_image_16] ).scrolling_image_16;
            
            
            const innerBlocksProps = useInnerBlocksProps({ className: 'gy-3 row' }, {
                allowedBlocks: [ 'opto-energy/recent-event' ],
                template: [
    [ 'opto-energy/recent-event', {} ],
    [ 'opto-energy/recent-event', {} ],
    [ 'opto-energy/recent-event', {} ],
    [ 'opto-energy/recent-event', {} ]
],
            } );
                            
            
            return el(Fragment, {}, [
                el('section', { ...blockProps }, [' ', el('div', { className: 'container pb-4 pt-4' }, [' ', el('div', { className: 'col-lg-9 mb-5 me-auto ms-auto' }, [' ', el(RichText, { tagName: 'h3', className: 'h4 mb-3 text-light text-uppercase', value: propOrDefault( props.attributes.section_subtitle, 'section_subtitle' ), onChange: function(val) { setAttributes( {section_subtitle: val }) } }), ' ', el(RichText, { tagName: 'h2', className: 'display-3 fw-bold text-primary-emphasis', value: propOrDefault( props.attributes.section_title, 'section_title' ), onChange: function(val) { setAttributes( {section_title: val }) } }), ' ', el(RichText, { tagName: 'p', className: 'fs-3 fw-light text-primary-emphasis text-start', value: propOrDefault( props.attributes.section_description, 'section_description' ), onChange: function(val) { setAttributes( {section_description: val }) } }), ' ']), ' ']), ' ', el('section', { className: 'bg-black showroom' }, [' ', el('section', { className: 'banner-section min-vh-100', 'data-pg-ia-scene': '{"smooth":"0.5s","s":"onLeave","d":"50%","pin":"true","l":[{"t":".banner-overlay","a":{"l":[{"t":"","l":[{"t":"tween","p":0,"d":0.5,"l":{"autoAlpha":0,"scale":20}},{"t":"set","p":0.3,"d":0,"l":{"class.add":"in-scroll"}}]}]}},{"t":"$nav","a":"fadeIn","p":"time","s":"100","t_d":"0.3","sc_dir":"down","rev":"true"}],"dir":"v"}' }, [' ', props.attributes.banner_image && props.attributes.banner_image.svg && pgCreateSVG3(RawHTML, {}, pgMergeInlineSVGAttributes(propOrDefault( props.attributes.banner_image.svg, 'banner_image', 'svg' ), { className: 'banner-image image-fit-center-top' })), props.attributes.banner_image && !props.attributes.banner_image.svg && propOrDefault( props.attributes.banner_image.url, 'banner_image', 'url' ) && el('img', { src: propOrDefault( props.attributes.banner_image.url, 'banner_image', 'url' ), className: 'banner-image image-fit-center-top ' + (props.attributes.banner_image.id ? ('wp-image-' + props.attributes.banner_image.id) : ''), alt: propOrDefault( props.attributes.banner_image?.alt, 'banner_image', 'alt' ), width: '1038', height: '743' }), ' ', el('div', { className: 'banner-overlay d-flex flex-column h-100 min-vh-100 position-relative' }, [' ', el('div', { className: 'bg-success flex-fill' }), ' ', props.attributes.banner_icon && !props.attributes.banner_icon.url && propOrDefault( props.attributes.banner_icon.svg, 'banner_icon', 'svg' ) && pgCreateSVG3(RawHTML, {}, pgMergeInlineSVGAttributes(propOrDefault( props.attributes.banner_icon.svg, 'banner_icon', 'svg' ), { style: { fillRule: 'evenodd',clipRule: 'evenodd',strokeLinecap: 'square',strokeMiterlimit: '2' }, className: 'bg-primary img-fluid w-100' })), props.attributes.banner_icon && props.attributes.banner_icon.url && el('img', { style: { fillRule: 'evenodd',clipRule: 'evenodd',strokeLinecap: 'square',strokeMiterlimit: '2' }, className: 'bg-primary img-fluid w-100 ' + (props.attributes.banner_icon.id ? ('wp-image-' + props.attributes.banner_icon.id) : ''), src: propOrDefault( props.attributes.banner_icon.url, 'banner_icon', 'url' ) }), ' ', el('div', { className: 'bg-success flex-fill' }), ' ']), ' ']), ' ', el('section', { className: 'py-5 text-center' }, [' ', el('div', { className: 'container py-5' }, [' ', el('div', { className: 'row' }, [' ', el('div', { className: 'col-lg-8 mx-auto' }, [' ', el(RichText, { tagName: 'p', className: 'h4 text-start text-white', value: propOrDefault( props.attributes.product_details, 'product_details' ), onChange: function(val) { setAttributes( {product_details: val }) } }), ' ']), ' ']), ' ']), ' ']), ' ', el('section', { className: 'event-section position-relative py-5', 'data-pg-ia-scene': '{"s":"onEnter","l":[{"t":".floating-title","a":{"l":[{"t":"","l":[{"t":"tween","p":0,"d":1,"l":{"y":"-50vh"}}]}]}},{"t":".event-details","a":"fadeInUp","p":"time","s":"20","t_d":"0.5"}],"dir":"v"}' }, [' ', el(RichText, { tagName: 'h2', className: 'display-3 floating-title mb-5', value: propOrDefault( props.attributes.event_title, 'event_title' ), onChange: function(val) { setAttributes( {event_title: val }) } }), ' ', el('div', { className: 'container py-5' }, [' ', el('div', { className: 'align-items-center row' }, [' ', el('div', { className: 'col-lg-7 col-md-10 event-details mb-5 order-lg-2', 'data-pg-ia-hide': '' }, [' ', el(RichText, { tagName: 'p', className: 'fs-6 text-start text-white', value: propOrDefault( props.attributes.event_description, 'event_description' ), onChange: function(val) { setAttributes( {event_description: val }) } }), ' ']), ' ', el('div', { className: 'col-lg-5 order-lg-1' }, [' ', el('div', { href: propOrDefault( props.attributes.event_main_link.url, 'event_main_link', 'url' ), className: 'd-block event-main-link p-4 text-start', onClick: function(e) { e.preventDefault(); } }, [' ', ' ', props.attributes.event_main_image && props.attributes.event_main_image.svg && pgCreateSVG3(RawHTML, {}, pgMergeInlineSVGAttributes(propOrDefault( props.attributes.event_main_image.svg, 'event_main_image', 'svg' ), { className: 'img-fluid mb-4' })), props.attributes.event_main_image && !props.attributes.event_main_image.svg && propOrDefault( props.attributes.event_main_image.url, 'event_main_image', 'url' ) && el('img', { src: propOrDefault( props.attributes.event_main_image.url, 'event_main_image', 'url' ), className: 'img-fluid mb-4 ' + (props.attributes.event_main_image.id ? ('wp-image-' + props.attributes.event_main_image.id) : ''), alt: propOrDefault( props.attributes.event_main_image?.alt, 'event_main_image', 'alt' ) }), ' ', ' ', el(RichText, { tagName: 'h4', className: 'display-4', value: propOrDefault( props.attributes.event_main_title, 'event_main_title' ), onChange: function(val) { setAttributes( {event_main_title: val }) } }), ' ', el(RichText, { tagName: 'span', value: propOrDefault( props.attributes.event_main_subtitle, 'event_main_subtitle' ), onChange: function(val) { setAttributes( {event_main_subtitle: val }) } }), ' ', ' ']), ' ']), ' ']), ' ']), ' ', el('div', { className: 'container-fluid h-scrolling-block mb-lg-5 overflow-hidden pb-lg-5 pt-lg-5', 'data-pg-ia-scene': '{"s":"onEnter","l":[{"t":".flex-nowrap","a":{"l":[{"t":"","l":[{"t":"tween","p":0,"d":1,"l":{"x":"-100vh"}}]}]}}],"dir":"v"}' }, [' ', el('div', { className: 'flex-nowrap gx-0 row' }, [' ', el('div', { className: 'col-3' }, [' ', props.attributes.scrolling_image_1 && props.attributes.scrolling_image_1.svg && pgCreateSVG3(RawHTML, {}, pgMergeInlineSVGAttributes(propOrDefault( props.attributes.scrolling_image_1.svg, 'scrolling_image_1', 'svg' ), { className: 'img-fluid' })), props.attributes.scrolling_image_1 && !props.attributes.scrolling_image_1.svg && propOrDefault( props.attributes.scrolling_image_1.url, 'scrolling_image_1', 'url' ) && el('img', { src: propOrDefault( props.attributes.scrolling_image_1.url, 'scrolling_image_1', 'url' ), className: 'img-fluid ' + (props.attributes.scrolling_image_1.id ? ('wp-image-' + props.attributes.scrolling_image_1.id) : ''), alt: propOrDefault( props.attributes.scrolling_image_1?.alt, 'scrolling_image_1', 'alt' ) }), ' ']), ' ', el('div', { className: 'col-3' }, [' ', props.attributes.scrolling_image_2 && props.attributes.scrolling_image_2.svg && pgCreateSVG3(RawHTML, {}, pgMergeInlineSVGAttributes(propOrDefault( props.attributes.scrolling_image_2.svg, 'scrolling_image_2', 'svg' ), { className: 'img-fluid' })), props.attributes.scrolling_image_2 && !props.attributes.scrolling_image_2.svg && propOrDefault( props.attributes.scrolling_image_2.url, 'scrolling_image_2', 'url' ) && el('img', { src: propOrDefault( props.attributes.scrolling_image_2.url, 'scrolling_image_2', 'url' ), className: 'img-fluid ' + (props.attributes.scrolling_image_2.id ? ('wp-image-' + props.attributes.scrolling_image_2.id) : ''), alt: propOrDefault( props.attributes.scrolling_image_2?.alt, 'scrolling_image_2', 'alt' ) }), ' ']), ' ', el('div', { className: 'col-3' }, [' ', props.attributes.scrolling_image_3 && props.attributes.scrolling_image_3.svg && pgCreateSVG3(RawHTML, {}, pgMergeInlineSVGAttributes(propOrDefault( props.attributes.scrolling_image_3.svg, 'scrolling_image_3', 'svg' ), { className: 'img-fluid' })), props.attributes.scrolling_image_3 && !props.attributes.scrolling_image_3.svg && propOrDefault( props.attributes.scrolling_image_3.url, 'scrolling_image_3', 'url' ) && el('img', { src: propOrDefault( props.attributes.scrolling_image_3.url, 'scrolling_image_3', 'url' ), alt: propOrDefault( props.attributes.scrolling_image_3?.alt, 'scrolling_image_3', 'alt' ), className: 'img-fluid ' + (props.attributes.scrolling_image_3.id ? ('wp-image-' + props.attributes.scrolling_image_3.id) : '') }), ' ']), ' ', el('div', { className: 'col-3' }, [' ', props.attributes.scrolling_image_4 && props.attributes.scrolling_image_4.svg && pgCreateSVG3(RawHTML, {}, pgMergeInlineSVGAttributes(propOrDefault( props.attributes.scrolling_image_4.svg, 'scrolling_image_4', 'svg' ), { className: 'img-fluid' })), props.attributes.scrolling_image_4 && !props.attributes.scrolling_image_4.svg && propOrDefault( props.attributes.scrolling_image_4.url, 'scrolling_image_4', 'url' ) && el('img', { src: propOrDefault( props.attributes.scrolling_image_4.url, 'scrolling_image_4', 'url' ), className: 'img-fluid ' + (props.attributes.scrolling_image_4.id ? ('wp-image-' + props.attributes.scrolling_image_4.id) : ''), alt: propOrDefault( props.attributes.scrolling_image_4?.alt, 'scrolling_image_4', 'alt' ) }), ' ']), ' ', el('div', { className: 'col-3' }, [' ', props.attributes.scrolling_image_5 && props.attributes.scrolling_image_5.svg && pgCreateSVG3(RawHTML, {}, pgMergeInlineSVGAttributes(propOrDefault( props.attributes.scrolling_image_5.svg, 'scrolling_image_5', 'svg' ), { className: 'img-fluid' })), props.attributes.scrolling_image_5 && !props.attributes.scrolling_image_5.svg && propOrDefault( props.attributes.scrolling_image_5.url, 'scrolling_image_5', 'url' ) && el('img', { src: propOrDefault( props.attributes.scrolling_image_5.url, 'scrolling_image_5', 'url' ), className: 'img-fluid ' + (props.attributes.scrolling_image_5.id ? ('wp-image-' + props.attributes.scrolling_image_5.id) : ''), alt: propOrDefault( props.attributes.scrolling_image_5?.alt, 'scrolling_image_5', 'alt' ) }), ' ']), ' ', el('div', { className: 'col-3' }, [' ', props.attributes.scrolling_image_6 && props.attributes.scrolling_image_6.svg && pgCreateSVG3(RawHTML, {}, pgMergeInlineSVGAttributes(propOrDefault( props.attributes.scrolling_image_6.svg, 'scrolling_image_6', 'svg' ), { className: 'img-fluid' })), props.attributes.scrolling_image_6 && !props.attributes.scrolling_image_6.svg && propOrDefault( props.attributes.scrolling_image_6.url, 'scrolling_image_6', 'url' ) && el('img', { src: propOrDefault( props.attributes.scrolling_image_6.url, 'scrolling_image_6', 'url' ), className: 'img-fluid ' + (props.attributes.scrolling_image_6.id ? ('wp-image-' + props.attributes.scrolling_image_6.id) : ''), alt: propOrDefault( props.attributes.scrolling_image_6?.alt, 'scrolling_image_6', 'alt' ) }), ' ']), ' ', el('div', { className: 'col-3' }, [' ', props.attributes.scrolling_image_7 && props.attributes.scrolling_image_7.svg && pgCreateSVG3(RawHTML, {}, pgMergeInlineSVGAttributes(propOrDefault( props.attributes.scrolling_image_7.svg, 'scrolling_image_7', 'svg' ), { className: 'img-fluid' })), props.attributes.scrolling_image_7 && !props.attributes.scrolling_image_7.svg && propOrDefault( props.attributes.scrolling_image_7.url, 'scrolling_image_7', 'url' ) && el('img', { src: propOrDefault( props.attributes.scrolling_image_7.url, 'scrolling_image_7', 'url' ), className: 'img-fluid ' + (props.attributes.scrolling_image_7.id ? ('wp-image-' + props.attributes.scrolling_image_7.id) : ''), alt: propOrDefault( props.attributes.scrolling_image_7?.alt, 'scrolling_image_7', 'alt' ) }), ' ']), ' ', el('div', { className: 'col-3' }, [' ', props.attributes.scrolling_image_8 && props.attributes.scrolling_image_8.svg && pgCreateSVG3(RawHTML, {}, pgMergeInlineSVGAttributes(propOrDefault( props.attributes.scrolling_image_8.svg, 'scrolling_image_8', 'svg' ), { className: 'img-fluid' })), props.attributes.scrolling_image_8 && !props.attributes.scrolling_image_8.svg && propOrDefault( props.attributes.scrolling_image_8.url, 'scrolling_image_8', 'url' ) && el('img', { src: propOrDefault( props.attributes.scrolling_image_8.url, 'scrolling_image_8', 'url' ), className: 'img-fluid ' + (props.attributes.scrolling_image_8.id ? ('wp-image-' + props.attributes.scrolling_image_8.id) : ''), alt: propOrDefault( props.attributes.scrolling_image_8?.alt, 'scrolling_image_8', 'alt' ) }), ' ']), ' ']), ' ']), ' ']), ' ', el('section', { className: 'event-section position-relative py-5 text-end', 'data-pg-ia-scene': '{"s":"onEnter","l":[{"t":".event-details","a":"fadeInUp","p":"time","s":"20","t_d":"0.5"}],"dir":"v"}' }, [' ', el('div', { className: 'container py-5' }, [' ', el('div', { className: 'align-items-center row' }, [' ', el('div', { className: 'col-lg-7 col-md-10 event-details mb-5 text-start', 'data-pg-ia-hide': '' }, [' ', el(RichText, { tagName: 'p', className: 'fs-6 text-white', value: propOrDefault( props.attributes.event_description_2, 'event_description_2' ), onChange: function(val) { setAttributes( {event_description_2: val }) } }), ' ']), ' ', el('div', { className: 'col-lg-5' }, [' ', el('div', { href: propOrDefault( props.attributes.event_main_link_2.url, 'event_main_link_2', 'url' ), className: 'd-block event-main-link p-4', onClick: function(e) { e.preventDefault(); } }, [' ', ' ', props.attributes.event_main_image_2 && props.attributes.event_main_image_2.svg && pgCreateSVG3(RawHTML, {}, pgMergeInlineSVGAttributes(propOrDefault( props.attributes.event_main_image_2.svg, 'event_main_image_2', 'svg' ), { className: 'img-fluid mb-4' })), props.attributes.event_main_image_2 && !props.attributes.event_main_image_2.svg && propOrDefault( props.attributes.event_main_image_2.url, 'event_main_image_2', 'url' ) && el('img', { src: propOrDefault( props.attributes.event_main_image_2.url, 'event_main_image_2', 'url' ), className: 'img-fluid mb-4 ' + (props.attributes.event_main_image_2.id ? ('wp-image-' + props.attributes.event_main_image_2.id) : ''), alt: propOrDefault( props.attributes.event_main_image_2?.alt, 'event_main_image_2', 'alt' ) }), ' ', ' ', el(RichText, { tagName: 'h4', className: 'display-4', value: propOrDefault( props.attributes.event_main_title_2, 'event_main_title_2' ), onChange: function(val) { setAttributes( {event_main_title_2: val }) } }), ' ', el(RichText, { tagName: 'span', value: propOrDefault( props.attributes.event_main_subtitle_2, 'event_main_subtitle_2' ), onChange: function(val) { setAttributes( {event_main_subtitle_2: val }) } }), ' ', ' ']), ' ']), ' ']), ' ']), ' ', el('div', { className: 'container-fluid h-scrolling-block mb-lg-5 overflow-hidden pb-lg-5 pt-lg-5 py-lg-5', 'data-pg-ia-scene': '{"l":[{"t":".flex-nowrap","a":{"l":[{"t":"","l":[{"t":"tween","p":0,"d":1,"l":{"x":"100vh"}}]}]}}],"s":"onEnter"}' }, [' ', el('div', { className: 'flex-nowrap gx-0 justify-content-end row' }, [' ', el('div', { className: 'col-3' }, [' ', props.attributes.scrolling_image_9 && props.attributes.scrolling_image_9.svg && pgCreateSVG3(RawHTML, {}, pgMergeInlineSVGAttributes(propOrDefault( props.attributes.scrolling_image_9.svg, 'scrolling_image_9', 'svg' ), { className: 'img-fluid' })), props.attributes.scrolling_image_9 && !props.attributes.scrolling_image_9.svg && propOrDefault( props.attributes.scrolling_image_9.url, 'scrolling_image_9', 'url' ) && el('img', { src: propOrDefault( props.attributes.scrolling_image_9.url, 'scrolling_image_9', 'url' ), className: 'img-fluid ' + (props.attributes.scrolling_image_9.id ? ('wp-image-' + props.attributes.scrolling_image_9.id) : ''), alt: propOrDefault( props.attributes.scrolling_image_9?.alt, 'scrolling_image_9', 'alt' ) }), ' ']), ' ', el('div', { className: 'col-3' }, [' ', props.attributes.scrolling_image_10 && props.attributes.scrolling_image_10.svg && pgCreateSVG3(RawHTML, {}, pgMergeInlineSVGAttributes(propOrDefault( props.attributes.scrolling_image_10.svg, 'scrolling_image_10', 'svg' ), { className: 'img-fluid' })), props.attributes.scrolling_image_10 && !props.attributes.scrolling_image_10.svg && propOrDefault( props.attributes.scrolling_image_10.url, 'scrolling_image_10', 'url' ) && el('img', { src: propOrDefault( props.attributes.scrolling_image_10.url, 'scrolling_image_10', 'url' ), className: 'img-fluid ' + (props.attributes.scrolling_image_10.id ? ('wp-image-' + props.attributes.scrolling_image_10.id) : ''), alt: propOrDefault( props.attributes.scrolling_image_10?.alt, 'scrolling_image_10', 'alt' ) }), ' ']), ' ', el('div', { className: 'col-3' }, [' ', props.attributes.scrolling_image_11 && props.attributes.scrolling_image_11.svg && pgCreateSVG3(RawHTML, {}, pgMergeInlineSVGAttributes(propOrDefault( props.attributes.scrolling_image_11.svg, 'scrolling_image_11', 'svg' ), { className: 'img-fluid' })), props.attributes.scrolling_image_11 && !props.attributes.scrolling_image_11.svg && propOrDefault( props.attributes.scrolling_image_11.url, 'scrolling_image_11', 'url' ) && el('img', { src: propOrDefault( props.attributes.scrolling_image_11.url, 'scrolling_image_11', 'url' ), className: 'img-fluid ' + (props.attributes.scrolling_image_11.id ? ('wp-image-' + props.attributes.scrolling_image_11.id) : ''), alt: propOrDefault( props.attributes.scrolling_image_11?.alt, 'scrolling_image_11', 'alt' ) }), ' ']), ' ', el('div', { className: 'col-3' }, [' ', props.attributes.scrolling_image_12 && props.attributes.scrolling_image_12.svg && pgCreateSVG3(RawHTML, {}, pgMergeInlineSVGAttributes(propOrDefault( props.attributes.scrolling_image_12.svg, 'scrolling_image_12', 'svg' ), { className: 'img-fluid' })), props.attributes.scrolling_image_12 && !props.attributes.scrolling_image_12.svg && propOrDefault( props.attributes.scrolling_image_12.url, 'scrolling_image_12', 'url' ) && el('img', { src: propOrDefault( props.attributes.scrolling_image_12.url, 'scrolling_image_12', 'url' ), className: 'img-fluid ' + (props.attributes.scrolling_image_12.id ? ('wp-image-' + props.attributes.scrolling_image_12.id) : ''), alt: propOrDefault( props.attributes.scrolling_image_12?.alt, 'scrolling_image_12', 'alt' ) }), ' ']), ' ', el('div', { className: 'col-3' }, [' ', props.attributes.scrolling_image_13 && props.attributes.scrolling_image_13.svg && pgCreateSVG3(RawHTML, {}, pgMergeInlineSVGAttributes(propOrDefault( props.attributes.scrolling_image_13.svg, 'scrolling_image_13', 'svg' ), { className: 'img-fluid' })), props.attributes.scrolling_image_13 && !props.attributes.scrolling_image_13.svg && propOrDefault( props.attributes.scrolling_image_13.url, 'scrolling_image_13', 'url' ) && el('img', { src: propOrDefault( props.attributes.scrolling_image_13.url, 'scrolling_image_13', 'url' ), className: 'img-fluid ' + (props.attributes.scrolling_image_13.id ? ('wp-image-' + props.attributes.scrolling_image_13.id) : ''), alt: propOrDefault( props.attributes.scrolling_image_13?.alt, 'scrolling_image_13', 'alt' ) }), ' ']), ' ', el('div', { className: 'col-3' }, [' ', props.attributes.scrolling_image_14 && props.attributes.scrolling_image_14.svg && pgCreateSVG3(RawHTML, {}, pgMergeInlineSVGAttributes(propOrDefault( props.attributes.scrolling_image_14.svg, 'scrolling_image_14', 'svg' ), { className: 'img-fluid' })), props.attributes.scrolling_image_14 && !props.attributes.scrolling_image_14.svg && propOrDefault( props.attributes.scrolling_image_14.url, 'scrolling_image_14', 'url' ) && el('img', { src: propOrDefault( props.attributes.scrolling_image_14.url, 'scrolling_image_14', 'url' ), className: 'img-fluid ' + (props.attributes.scrolling_image_14.id ? ('wp-image-' + props.attributes.scrolling_image_14.id) : ''), alt: propOrDefault( props.attributes.scrolling_image_14?.alt, 'scrolling_image_14', 'alt' ) }), ' ']), ' ', el('div', { className: 'col-3' }, [' ', props.attributes.scrolling_image_15 && props.attributes.scrolling_image_15.svg && pgCreateSVG3(RawHTML, {}, pgMergeInlineSVGAttributes(propOrDefault( props.attributes.scrolling_image_15.svg, 'scrolling_image_15', 'svg' ), { className: 'img-fluid' })), props.attributes.scrolling_image_15 && !props.attributes.scrolling_image_15.svg && propOrDefault( props.attributes.scrolling_image_15.url, 'scrolling_image_15', 'url' ) && el('img', { src: propOrDefault( props.attributes.scrolling_image_15.url, 'scrolling_image_15', 'url' ), className: 'img-fluid ' + (props.attributes.scrolling_image_15.id ? ('wp-image-' + props.attributes.scrolling_image_15.id) : ''), alt: propOrDefault( props.attributes.scrolling_image_15?.alt, 'scrolling_image_15', 'alt' ) }), ' ']), ' ', el('div', { className: 'col-3' }, [' ', props.attributes.scrolling_image_16 && props.attributes.scrolling_image_16.svg && pgCreateSVG3(RawHTML, {}, pgMergeInlineSVGAttributes(propOrDefault( props.attributes.scrolling_image_16.svg, 'scrolling_image_16', 'svg' ), { className: 'img-fluid' })), props.attributes.scrolling_image_16 && !props.attributes.scrolling_image_16.svg && propOrDefault( props.attributes.scrolling_image_16.url, 'scrolling_image_16', 'url' ) && el('img', { src: propOrDefault( props.attributes.scrolling_image_16.url, 'scrolling_image_16', 'url' ), className: 'img-fluid ' + (props.attributes.scrolling_image_16.id ? ('wp-image-' + props.attributes.scrolling_image_16.id) : ''), alt: propOrDefault( props.attributes.scrolling_image_16?.alt, 'scrolling_image_16', 'alt' ) }), ' ']), ' ']), ' ']), ' ']), ' ', el('section', { className: 'position-relative py-5 recent-event-section', 'data-pg-ia-scene': '{"s":"onEnter","l":[{"t":".floating-title","a":{"l":[{"t":"","l":[{"t":"tween","p":0,"d":1,"l":{"y":"-50vh"}}]}]}},{"t":".event-link","a":{"l":[{"t":"","l":[{"t":"set","p":0,"d":0,"l":{"autoAlpha":0},"e":"Power1.easeOut"},{"t":"tween","p":0,"d":1,"s":0.25,"l":{"autoAlpha":1},"e":"Power1.easeOut"}]}]},"p":"time","s":"20"}],"dir":"v"}', id: 'news', 'data-pg-name': 'Aktuelles', title: 'Aktuelles' }, [' ', el(RichText, { tagName: 'h2', className: 'floating-title', value: propOrDefault( props.attributes.recent_events_title, 'recent_events_title' ), onChange: function(val) { setAttributes( {recent_events_title: val }) } }), ' ', el('div', { className: 'container py-5' }, [' ', el('div', { ...innerBlocksProps }), ' ', el('div', { className: 'mt-4 text-center' }, [' ', el(RichText, { tagName: 'a', href: propOrDefault( props.attributes.view_all_button_link.url, 'view_all_button_link', 'url' ), className: 'btn btn-lg btn-primary see-more', onClick: function(e) { e.preventDefault(); }, value: propOrDefault( props.attributes.view_all_button_label, 'view_all_button_label' ), onChange: function(val) { setAttributes( {view_all_button_label: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ']), ' ']), ' ']), ' ']),                        
                
                    el( InspectorControls, {},
                        [
                            
                        pgMediaImageControl('banner_image', setAttributes, props, 'full', false, 'Banner Image', '' ),
                                        
                        pgMediaImageControl('banner_icon', setAttributes, props, 'full', false, 'Banner Icon', '' ),
                                        
                        pgMediaImageControl('event_main_image', setAttributes, props, 'full', false, 'Event Main Image', '' ),
                                        
                        pgMediaImageControl('scrolling_image_1', setAttributes, props, 'full', false, 'Scrolling Image 1', '' ),
                                        
                        pgMediaImageControl('scrolling_image_2', setAttributes, props, 'full', false, 'Scrolling Image 2', '' ),
                                        
                        pgMediaImageControl('scrolling_image_3', setAttributes, props, 'full', false, 'Scrolling Image 3', '' ),
                                        
                        pgMediaImageControl('scrolling_image_4', setAttributes, props, 'full', false, 'Scrolling Image 4', '' ),
                                        
                        pgMediaImageControl('scrolling_image_5', setAttributes, props, 'full', false, 'Scrolling Image 5', '' ),
                                        
                        pgMediaImageControl('scrolling_image_6', setAttributes, props, 'full', false, 'Scrolling Image 6', '' ),
                                        
                        pgMediaImageControl('scrolling_image_7', setAttributes, props, 'full', false, 'Scrolling Image 7', '' ),
                                        
                        pgMediaImageControl('scrolling_image_8', setAttributes, props, 'full', false, 'Scrolling Image 8', '' ),
                                        
                        pgMediaImageControl('event_main_image_2', setAttributes, props, 'full', false, 'Event Main Image 2', '' ),
                                        
                        pgMediaImageControl('scrolling_image_9', setAttributes, props, 'full', false, 'Scrolling Image 9', '' ),
                                        
                        pgMediaImageControl('scrolling_image_10', setAttributes, props, 'full', false, 'Scrolling Image 10', '' ),
                                        
                        pgMediaImageControl('scrolling_image_11', setAttributes, props, 'full', false, 'Scrolling Image 11', '' ),
                                        
                        pgMediaImageControl('scrolling_image_12', setAttributes, props, 'full', false, 'Scrolling Image 12', '' ),
                                        
                        pgMediaImageControl('scrolling_image_13', setAttributes, props, 'full', false, 'Scrolling Image 13', '' ),
                                        
                        pgMediaImageControl('scrolling_image_14', setAttributes, props, 'full', false, 'Scrolling Image 14', '' ),
                                        
                        pgMediaImageControl('scrolling_image_15', setAttributes, props, 'full', false, 'Scrolling Image 15', '' ),
                                        
                        pgMediaImageControl('scrolling_image_16', setAttributes, props, 'full', false, 'Scrolling Image 16', '' ),
                                        
                            el(Panel, {},
                                el(PanelBody, {
                                    title: __('Block properties')
                                }, [
                                    
                                    el(BaseControl, {
                                        help: __( '' ),
                                        label: __( 'Section Subtitle' ),
                                    }, [
                                        el(RichText, {
                                            value: props.attributes.section_subtitle,
                                            style: {
                                                    border: '1px solid black',
                                                    padding: '6px 8px',
                                                    minHeight: '80px',
                                                    border: '1px solid rgb(117, 117, 117)',
                                                    fontSize: '13px',
                                                    lineHeight: 'normal'
                                                },
                                            onChange: function(val) { setAttributes({section_subtitle: val}) },
                                        })
                                    ]),
                                    el(BaseControl, {
                                        help: __( '' ),
                                        label: __( 'Section Title' ),
                                    }, [
                                        el(RichText, {
                                            value: props.attributes.section_title,
                                            style: {
                                                    border: '1px solid black',
                                                    padding: '6px 8px',
                                                    minHeight: '80px',
                                                    border: '1px solid rgb(117, 117, 117)',
                                                    fontSize: '13px',
                                                    lineHeight: 'normal'
                                                },
                                            onChange: function(val) { setAttributes({section_title: val}) },
                                        })
                                    ]),
                                    el(BaseControl, {
                                        help: __( '' ),
                                        label: __( 'Section Description' ),
                                    }, [
                                        el(RichText, {
                                            value: props.attributes.section_description,
                                            style: {
                                                    border: '1px solid black',
                                                    padding: '6px 8px',
                                                    minHeight: '80px',
                                                    border: '1px solid rgb(117, 117, 117)',
                                                    fontSize: '13px',
                                                    lineHeight: 'normal'
                                                },
                                            onChange: function(val) { setAttributes({section_description: val}) },
                                        })
                                    ]),
                                    el(BaseControl, {
                                        help: __( '' ),
                                        label: __( 'Product Details' ),
                                    }, [
                                        el(RichText, {
                                            value: props.attributes.product_details,
                                            style: {
                                                    border: '1px solid black',
                                                    padding: '6px 8px',
                                                    minHeight: '80px',
                                                    border: '1px solid rgb(117, 117, 117)',
                                                    fontSize: '13px',
                                                    lineHeight: 'normal'
                                                },
                                            onChange: function(val) { setAttributes({product_details: val}) },
                                        })
                                    ]),
                                    el(BaseControl, {
                                        help: __( '' ),
                                        label: __( 'Event Title' ),
                                    }, [
                                        el(RichText, {
                                            value: props.attributes.event_title,
                                            style: {
                                                    border: '1px solid black',
                                                    padding: '6px 8px',
                                                    minHeight: '80px',
                                                    border: '1px solid rgb(117, 117, 117)',
                                                    fontSize: '13px',
                                                    lineHeight: 'normal'
                                                },
                                            onChange: function(val) { setAttributes({event_title: val}) },
                                        })
                                    ]),
                                    el(BaseControl, {
                                        help: __( '' ),
                                        label: __( 'Event Description' ),
                                    }, [
                                        el(RichText, {
                                            value: props.attributes.event_description,
                                            style: {
                                                    border: '1px solid black',
                                                    padding: '6px 8px',
                                                    minHeight: '80px',
                                                    border: '1px solid rgb(117, 117, 117)',
                                                    fontSize: '13px',
                                                    lineHeight: 'normal'
                                                },
                                            onChange: function(val) { setAttributes({event_description: val}) },
                                        })
                                    ]),
                                    pgUrlControl('event_main_link', setAttributes, props, 'Event Main Link', '', null ),
                                    el(BaseControl, {
                                        help: __( '' ),
                                        label: __( 'Event Main Title' ),
                                    }, [
                                        el(RichText, {
                                            value: props.attributes.event_main_title,
                                            style: {
                                                    border: '1px solid black',
                                                    padding: '6px 8px',
                                                    minHeight: '80px',
                                                    border: '1px solid rgb(117, 117, 117)',
                                                    fontSize: '13px',
                                                    lineHeight: 'normal'
                                                },
                                            onChange: function(val) { setAttributes({event_main_title: val}) },
                                        })
                                    ]),
                                    el(BaseControl, {
                                        help: __( '' ),
                                        label: __( 'Event Main Subtitle' ),
                                    }, [
                                        el(RichText, {
                                            value: props.attributes.event_main_subtitle,
                                            style: {
                                                    border: '1px solid black',
                                                    padding: '6px 8px',
                                                    minHeight: '80px',
                                                    border: '1px solid rgb(117, 117, 117)',
                                                    fontSize: '13px',
                                                    lineHeight: 'normal'
                                                },
                                            onChange: function(val) { setAttributes({event_main_subtitle: val}) },
                                        })
                                    ]),
                                    el(BaseControl, {
                                        help: __( '' ),
                                        label: __( 'Event Description 2' ),
                                    }, [
                                        el(RichText, {
                                            value: props.attributes.event_description_2,
                                            style: {
                                                    border: '1px solid black',
                                                    padding: '6px 8px',
                                                    minHeight: '80px',
                                                    border: '1px solid rgb(117, 117, 117)',
                                                    fontSize: '13px',
                                                    lineHeight: 'normal'
                                                },
                                            onChange: function(val) { setAttributes({event_description_2: val}) },
                                        })
                                    ]),
                                    pgUrlControl('event_main_link_2', setAttributes, props, 'Event Main Link 2', '', null ),
                                    el(BaseControl, {
                                        help: __( '' ),
                                        label: __( 'Event Main Title 2' ),
                                    }, [
                                        el(RichText, {
                                            value: props.attributes.event_main_title_2,
                                            style: {
                                                    border: '1px solid black',
                                                    padding: '6px 8px',
                                                    minHeight: '80px',
                                                    border: '1px solid rgb(117, 117, 117)',
                                                    fontSize: '13px',
                                                    lineHeight: 'normal'
                                                },
                                            onChange: function(val) { setAttributes({event_main_title_2: val}) },
                                        })
                                    ]),
                                    el(BaseControl, {
                                        help: __( '' ),
                                        label: __( 'Event Main Subtitle 2' ),
                                    }, [
                                        el(RichText, {
                                            value: props.attributes.event_main_subtitle_2,
                                            style: {
                                                    border: '1px solid black',
                                                    padding: '6px 8px',
                                                    minHeight: '80px',
                                                    border: '1px solid rgb(117, 117, 117)',
                                                    fontSize: '13px',
                                                    lineHeight: 'normal'
                                                },
                                            onChange: function(val) { setAttributes({event_main_subtitle_2: val}) },
                                        })
                                    ]),
                                    el(BaseControl, {
                                        help: __( '' ),
                                        label: __( 'Recent Events Title' ),
                                    }, [
                                        el(RichText, {
                                            value: props.attributes.recent_events_title,
                                            style: {
                                                    border: '1px solid black',
                                                    padding: '6px 8px',
                                                    minHeight: '80px',
                                                    border: '1px solid rgb(117, 117, 117)',
                                                    fontSize: '13px',
                                                    lineHeight: 'normal'
                                                },
                                            onChange: function(val) { setAttributes({recent_events_title: val}) },
                                        })
                                    ]),
                                    pgUrlControl('view_all_button_link', setAttributes, props, 'View All Button Link', '', null ),
                                    el(TextControl, {
                                        value: props.attributes.view_all_button_label,
                                        help: __( '' ),
                                        label: __( 'View All Button Label' ),
                                        onChange: function(val) { setAttributes({view_all_button_label: val}) },
                                        type: 'text'
                                    }),    
                                ])
                            )
                        ]
                    )                            

            ]);
        },

            save: function(props) {
                return el(InnerBlocks.Content);
            }                        
    
    } );
} )(
    window.wp.blocks,
    window.wp.element,
    window.wp.blockEditor
);                        
