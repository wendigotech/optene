
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
    
    const block = registerBlockType( 'opto-energy/footer', {
        apiVersion: 2,
        title: 'Footer',
        description: 'Website footer with company information and links',
        icon: 'block-default',
        category: 'opto_energy',
        keywords: [],
        supports: {},
        attributes: {
            logo_link: {
                type: ['object', 'null'],
                default: {post_id: 0, url: '#', title: '', 'post_type': null},
            },
            logo_image: {
                type: ['object', 'null'],
                default: {id: 0, url: (pg_project_data_opto_energy ? pg_project_data_opto_energy.url : '') + 'img/Logo-OE-dark-a.svg', size: '', svg: '', alt: 'Opto Energy Sustainability'},
            },
            company_description: {
                type: ['string', 'null'],
                default: `Wir sind der führende Distributor für energieeffiziente Solarpanele, Wärmepumpen und nachhaltige Haushaltsgeräte. Unsere Mission ist es, moderne, professionelle und kundenorientierte Lösungen anzubieten.`,
            },
            about_us_heading: {
                type: ['string', 'null'],
                default: `Über Uns`,
            },
            about_us_links: {
                type: ['string', 'null'],
                default: '',
            },
            about_us_link_1: {
                type: ['object', 'null'],
                default: {post_id: 0, url: '#', title: '', 'post_type': null},
            },
            about_us_link_2: {
                type: ['object', 'null'],
                default: {post_id: 0, url: '#', title: '', 'post_type': null},
            },
            about_us_link_3: {
                type: ['object', 'null'],
                default: {post_id: 0, url: '#', title: '', 'post_type': null},
            },
            about_us_link_4: {
                type: ['object', 'null'],
                default: {post_id: 0, url: '#', title: '', 'post_type': null},
            },
            products_heading: {
                type: ['string', 'null'],
                default: `Produkte`,
            },
            products_links: {
                type: ['string', 'null'],
                default: '',
            },
            product_link_1: {
                type: ['object', 'null'],
                default: {post_id: 0, url: '#', title: '', 'post_type': null},
            },
            product_link_2: {
                type: ['object', 'null'],
                default: {post_id: 0, url: '#', title: '', 'post_type': null},
            },
            product_link_3: {
                type: ['object', 'null'],
                default: {post_id: 0, url: '#', title: '', 'post_type': null},
            },
            product_link_4: {
                type: ['object', 'null'],
                default: {post_id: 0, url: '#', title: '', 'post_type': null},
            },
            support_heading: {
                type: ['string', 'null'],
                default: `Support`,
            },
            support_links: {
                type: ['string', 'null'],
                default: '',
            },
            support_link_1: {
                type: ['object', 'null'],
                default: {post_id: 0, url: '#', title: '', 'post_type': null},
            },
            support_link_2: {
                type: ['object', 'null'],
                default: {post_id: 0, url: '#', title: '', 'post_type': null},
            },
            support_link_3: {
                type: ['object', 'null'],
                default: {post_id: 0, url: '#', title: '', 'post_type': null},
            },
            support_link_4: {
                type: ['object', 'null'],
                default: {post_id: 0, url: '#', title: '', 'post_type': null},
            }
        },
        example: { attributes: { logo_link: {post_id: 0, url: '#', title: '', 'post_type': null}, logo_image: {id: 0, url: (pg_project_data_opto_energy ? pg_project_data_opto_energy.url : '') + 'img/Logo-OE-dark-a.svg', size: '', svg: '', alt: 'Opto Energy Sustainability'}, company_description: `Wir sind der führende Distributor für energieeffiziente Solarpanele, Wärmepumpen und nachhaltige Haushaltsgeräte. Unsere Mission ist es, moderne, professionelle und kundenorientierte Lösungen anzubieten.`, about_us_heading: `Über Uns`, about_us_links: '', about_us_link_1: {post_id: 0, url: '#', title: '', 'post_type': null}, about_us_link_2: {post_id: 0, url: '#', title: '', 'post_type': null}, about_us_link_3: {post_id: 0, url: '#', title: '', 'post_type': null}, about_us_link_4: {post_id: 0, url: '#', title: '', 'post_type': null}, products_heading: `Produkte`, products_links: '', product_link_1: {post_id: 0, url: '#', title: '', 'post_type': null}, product_link_2: {post_id: 0, url: '#', title: '', 'post_type': null}, product_link_3: {post_id: 0, url: '#', title: '', 'post_type': null}, product_link_4: {post_id: 0, url: '#', title: '', 'post_type': null}, support_heading: `Support`, support_links: '', support_link_1: {post_id: 0, url: '#', title: '', 'post_type': null}, support_link_2: {post_id: 0, url: '#', title: '', 'post_type': null}, support_link_3: {post_id: 0, url: '#', title: '', 'post_type': null}, support_link_4: {post_id: 0, url: '#', title: '', 'post_type': null} } },
        edit: function ( props ) {
            const blockProps = useBlockProps({ className: 'bg-primary pt-5 text-white' });
            const setAttributes = props.setAttributes; 
            
            props.logo_image = useSelect(function( select ) {
                return {
                    logo_image: props.attributes.logo_image.id ? select('core').getMedia(props.attributes.logo_image.id) : undefined
                };
            }, [props.attributes.logo_image] ).logo_image;
            
            
            const innerBlocksProps = null;
            
            
            return el(Fragment, {}, [
                el('footer', { ...blockProps }, [' ', ' ', el('div', { className: 'container pb-4 pt-4' }, [' ', ' ', el('div', { className: 'row' }, [' ', ' ', el('div', { className: 'col-xl-4 me-auto py-3' }, [' ', el('a', { className: 'align-items-end d-inline-flex h2 link-info mb-4 text-decoration-none text-uppercase', href: propOrDefault( props.attributes.logo_link.url, 'logo_link', 'url' ), onClick: function(e) { e.preventDefault(); } }, [' ', props.attributes.logo_image && props.attributes.logo_image.svg && pgCreateSVG3(RawHTML, {}, pgMergeInlineSVGAttributes(propOrDefault( props.attributes.logo_image.svg, 'logo_image', 'svg' ), { className: 'img-fluid rounded-3 w-50' })), props.attributes.logo_image && !props.attributes.logo_image.svg && propOrDefault( props.attributes.logo_image.url, 'logo_image', 'url' ) && el('img', { src: propOrDefault( props.attributes.logo_image.url, 'logo_image', 'url' ), className: 'img-fluid rounded-3 w-50 ' + (props.attributes.logo_image.id ? ('wp-image-' + props.attributes.logo_image.id) : ''), alt: propOrDefault( props.attributes.logo_image?.alt, 'logo_image', 'alt' ) }), ' ']), ' ', ' ', el(RichText, { tagName: 'p', className: 'mb-3', value: propOrDefault( props.attributes.company_description, 'company_description' ), onChange: function(val) { setAttributes( {company_description: val }) } }), ' ', ' ']), ' ', ' ', el('div', { className: 'col-sm-4 col-xl-2 py-3' }, [' ', ' ', el(RichText, { tagName: 'h4', className: 'fw-bold h5 mb-4 text-info text-uppercase', value: propOrDefault( props.attributes.about_us_heading, 'about_us_heading' ), onChange: function(val) { setAttributes( {about_us_heading: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', ' ', el('ul', { className: 'list-unstyled' }, [' ', ' ', el('li', { className: 'mb-3' }, [' ', el('a', { href: propOrDefault( props.attributes.about_us_link_1.url, 'about_us_link_1', 'url' ), className: 'link-light', onClick: function(e) { e.preventDefault(); } }, 'Unsere Geschichte'), ' ', ' ']), ' ', el('li', { className: 'mb-3' }, [' ', el('a', { href: propOrDefault( props.attributes.about_us_link_2.url, 'about_us_link_2', 'url' ), className: 'link-light', onClick: function(e) { e.preventDefault(); } }, 'Unser Team'), ' ', ' ']), ' ', ' ', el('li', { className: 'mb-3' }, [' ', el('a', { href: propOrDefault( props.attributes.about_us_link_3.url, 'about_us_link_3', 'url' ), className: 'link-light', onClick: function(e) { e.preventDefault(); } }, 'Karriere'), ' ', ' ']), ' ', ' ', el('li', { className: 'mb-3' }, [' ', el('a', { href: propOrDefault( props.attributes.about_us_link_4.url, 'about_us_link_4', 'url' ), className: 'link-light', onClick: function(e) { e.preventDefault(); } }, 'Kundenbewertungen'), ' ', ' ']), ' ', ' ']), ' ', ' ']), ' ', ' ', el('div', { className: 'col-sm-4 col-xl-2 py-3' }, [' ', ' ', el(RichText, { tagName: 'h4', className: 'fw-bold h5 mb-4 text-info text-uppercase', value: propOrDefault( props.attributes.products_heading, 'products_heading' ), onChange: function(val) { setAttributes( {products_heading: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', ' ', el('ul', { className: 'list-unstyled' }, [' ', ' ', el('li', { className: 'mb-3' }, [el('a', { href: propOrDefault( props.attributes.product_link_1.url, 'product_link_1', 'url' ), className: 'link-light', onClick: function(e) { e.preventDefault(); } }, 'Solarpanele'), ' ', ' ']), ' ', ' ', el('li', { className: 'mb-3' }, [el('a', { href: propOrDefault( props.attributes.product_link_2.url, 'product_link_2', 'url' ), className: 'link-light', onClick: function(e) { e.preventDefault(); } }, 'Wärmepumpen'), ' ', ' ']), ' ', ' ', el('li', { className: 'mb-3' }, [el('a', { href: propOrDefault( props.attributes.product_link_3.url, 'product_link_3', 'url' ), className: 'link-light', onClick: function(e) { e.preventDefault(); } }, 'Nachhaltige Haushaltsgeräte'), ' ', ' ']), ' ', ' ', el('li', { className: 'mb-3' }, [el('a', { href: propOrDefault( props.attributes.product_link_4.url, 'product_link_4', 'url' ), className: 'link-light', onClick: function(e) { e.preventDefault(); } }, 'Energiespeicher'), ' ', ' ']), ' ', ' ']), ' ', ' ']), ' ', ' ', el('div', { className: 'col-sm-4 col-xl-2 py-3' }, [' ', ' ', el(RichText, { tagName: 'h4', className: 'fw-bold h5 mb-4 text-info text-uppercase', value: propOrDefault( props.attributes.support_heading, 'support_heading' ), onChange: function(val) { setAttributes( {support_heading: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', ' ', el('ul', { className: 'list-unstyled' }, [' ', ' ', el('li', { className: 'mb-3' }, [el('a', { href: propOrDefault( props.attributes.support_link_1.url, 'support_link_1', 'url' ), className: 'link-light', onClick: function(e) { e.preventDefault(); } }, 'Häufig gestellte Fragen'), ' ', ' ']), ' ', ' ', el('li', { className: 'mb-3' }, [el('a', { href: propOrDefault( props.attributes.support_link_2.url, 'support_link_2', 'url' ), className: 'link-light', onClick: function(e) { e.preventDefault(); } }, 'Kontaktieren Sie uns'), ' ', ' ']), ' ', ' ', el('li', { className: 'mb-3' }, [el('a', { href: propOrDefault( props.attributes.support_link_3.url, 'support_link_3', 'url' ), className: 'link-light', onClick: function(e) { e.preventDefault(); } }, 'Garantieinformationen'), ' ', ' ']), ' ', ' ', el('li', { className: 'mb-3' }, [el('a', { href: propOrDefault( props.attributes.support_link_4.url, 'support_link_4', 'url' ), className: 'link-light', onClick: function(e) { e.preventDefault(); } }, 'Rückgaben und Rückerstattungen'), ' ', ' ']), ' ', ' ']), ' ', ' ']), ' ', ' ']), ' ', ' ', el('div', { className: 'pb-3 pt-3 text-center' }, [' ', ' ', el('hr', { className: 'mt-0' }), ' ', ' ', el('p', { className: 'mb-0' }, [' ', ' Copyright © ', el('span', {}, '2024'), ' ', el('span', {}, 'Opto-Energie'), '. All rights reserved. ']), ' ', ' ']), ' ', ' ', ' ', ' ']), ' ', ' ']),                        
                
                    el( InspectorControls, {},
                        [
                            
                        pgMediaImageControl('logo_image', setAttributes, props, 'full', false, 'Logo image', '' ),
                                        
                            el(Panel, {},
                                el(PanelBody, {
                                    title: __('Block properties')
                                }, [
                                    
                                    pgUrlControl('logo_link', setAttributes, props, 'Logo link', '', null ),
                                    el(BaseControl, {
                                        help: __( '' ),
                                        label: __( 'Company description' ),
                                    }, [
                                        el(RichText, {
                                            value: props.attributes.company_description,
                                            style: {
                                                    border: '1px solid black',
                                                    padding: '6px 8px',
                                                    minHeight: '80px',
                                                    border: '1px solid rgb(117, 117, 117)',
                                                    fontSize: '13px',
                                                    lineHeight: 'normal'
                                                },
                                            onChange: function(val) { setAttributes({company_description: val}) },
                                        })
                                    ]),
                                    el(TextControl, {
                                        value: props.attributes.about_us_heading,
                                        help: __( '' ),
                                        label: __( 'About Us Heading' ),
                                        onChange: function(val) { setAttributes({about_us_heading: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.about_us_links,
                                        help: __( '' ),
                                        label: __( 'About Us Links' ),
                                        onChange: function(val) { setAttributes({about_us_links: val}) },
                                        type: 'text'
                                    }),
                                    pgUrlControl('about_us_link_1', setAttributes, props, 'About Us Link 1', '', null ),
                                    pgUrlControl('about_us_link_2', setAttributes, props, 'About Us Link 2', '', null ),
                                    pgUrlControl('about_us_link_3', setAttributes, props, 'About Us Link 3', '', null ),
                                    pgUrlControl('about_us_link_4', setAttributes, props, 'About Us Link 4', '', null ),
                                    el(TextControl, {
                                        value: props.attributes.products_heading,
                                        help: __( '' ),
                                        label: __( 'Products Heading' ),
                                        onChange: function(val) { setAttributes({products_heading: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.products_links,
                                        help: __( '' ),
                                        label: __( 'Products Links' ),
                                        onChange: function(val) { setAttributes({products_links: val}) },
                                        type: 'text'
                                    }),
                                    pgUrlControl('product_link_1', setAttributes, props, 'Product Link 1', '', null ),
                                    pgUrlControl('product_link_2', setAttributes, props, 'Product Link 2', '', null ),
                                    pgUrlControl('product_link_3', setAttributes, props, 'Product Link 3', '', null ),
                                    pgUrlControl('product_link_4', setAttributes, props, 'Product Link 4', '', null ),
                                    el(TextControl, {
                                        value: props.attributes.support_heading,
                                        help: __( '' ),
                                        label: __( 'Support Heading' ),
                                        onChange: function(val) { setAttributes({support_heading: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.support_links,
                                        help: __( '' ),
                                        label: __( 'Support Links' ),
                                        onChange: function(val) { setAttributes({support_links: val}) },
                                        type: 'text'
                                    }),
                                    pgUrlControl('support_link_1', setAttributes, props, 'Support Link 1', '', null ),
                                    pgUrlControl('support_link_2', setAttributes, props, 'Support Link 2', '', null ),
                                    pgUrlControl('support_link_3', setAttributes, props, 'Support Link 3', '', null ),
                                    pgUrlControl('support_link_4', setAttributes, props, 'Support Link 4', '', null ),    
                                ])
                            )
                        ]
                    )                            

            ]);
        },

        save: function(props) {
            return null;
        }                        

    } );
} )(
    window.wp.blocks,
    window.wp.element,
    window.wp.blockEditor
);                        
