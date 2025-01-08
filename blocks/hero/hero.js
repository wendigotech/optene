
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
    
    const block = registerBlockType( 'opto-energy/hero', {
        apiVersion: 2,
        title: 'Hero',
        description: 'Main hero section',
        icon: 'block-default',
        category: 'opto_energy',
        keywords: [],
        supports: {},
        attributes: {
            video_source: {
                type: ['string', 'null'],
                default: '',
            },
            story_link: {
                type: ['object', 'null'],
                default: {post_id: 0, url: '#story', title: '', 'post_type': null},
            },
            register_link: {
                type: ['object', 'null'],
                default: {post_id: 0, url: '#register', title: '', 'post_type': null},
            },
            showroom_link: {
                type: ['object', 'null'],
                default: {post_id: 0, url: '#showroom', title: '', 'post_type': null},
            },
            news_link: {
                type: ['object', 'null'],
                default: {post_id: 0, url: '#news', title: '', 'post_type': null},
            },
            traders_link: {
                type: ['object', 'null'],
                default: {post_id: 0, url: 'login.html', title: '', 'post_type': null},
            },
            contact_link: {
                type: ['object', 'null'],
                default: {post_id: 0, url: '#', title: '', 'post_type': null},
            },
            logo_image: {
                type: ['object', 'null'],
                default: {id: 0, url: (pg_project_data_opto_energy ? pg_project_data_opto_energy.url : '') + 'img/Logo-OE-silver-a.svg', size: '', svg: '', alt: null},
            },
            header_text: {
                type: ['string', 'null'],
                default: `<noscript class="text-success"> Energie erneuern.<br> Zukunft gestalten.<br> Leben verbessern. </noscript> <span id="typed-text" class="text-white"></span>`,
            },
            paragraph_text: {
                type: ['string', 'null'],
                default: `Opto Energy ist Ihr zuverlässiger Partner als Großhändler für energieeffiziente Solaranlagen, Wärmepumpen und nachhaltige Haushaltsgeräte, bieten Ihnen maßgeschneiderte Lösungen und Services.`,
            },
            hero_button_link: {
                type: ['object', 'null'],
                default: {post_id: 0, url: '#story', title: '', 'post_type': null},
            },
            hero_button_label: {
                type: ['string', 'null'],
                default: `Mehr erfahren&nbsp;&darr;`,
            }
        },
        example: { attributes: { video_source: '', story_link: {post_id: 0, url: '#story', title: '', 'post_type': null}, register_link: {post_id: 0, url: '#register', title: '', 'post_type': null}, showroom_link: {post_id: 0, url: '#showroom', title: '', 'post_type': null}, news_link: {post_id: 0, url: '#news', title: '', 'post_type': null}, traders_link: {post_id: 0, url: 'login.html', title: '', 'post_type': null}, contact_link: {post_id: 0, url: '#', title: '', 'post_type': null}, logo_image: {id: 0, url: (pg_project_data_opto_energy ? pg_project_data_opto_energy.url : '') + 'img/Logo-OE-silver-a.svg', size: '', svg: '', alt: null}, header_text: `<noscript class="text-success"> Energie erneuern.<br> Zukunft gestalten.<br> Leben verbessern. </noscript> <span id="typed-text" class="text-white"></span>`, paragraph_text: `Opto Energy ist Ihr zuverlässiger Partner als Großhändler für energieeffiziente Solaranlagen, Wärmepumpen und nachhaltige Haushaltsgeräte, bieten Ihnen maßgeschneiderte Lösungen und Services.`, hero_button_link: {post_id: 0, url: '#story', title: '', 'post_type': null}, hero_button_label: `Mehr erfahren&nbsp;&darr;` } },
        edit: function ( props ) {
            const blockProps = useBlockProps({ className: 'flex-column hero-block min-vh-100 pb-5 position-relative poster text-light', 'data-pg-name': 'Hero', id: 'hero' });
            const setAttributes = props.setAttributes; 
            
            props.logo_image = useSelect(function( select ) {
                return {
                    logo_image: props.attributes.logo_image.id ? select('core').getMedia(props.attributes.logo_image.id) : undefined
                };
            }, [props.attributes.logo_image] ).logo_image;
            
            
            const innerBlocksProps = null;
            
            
            return el(Fragment, {}, [
                el('section', { ...blockProps }, [' ', el('video', { id: 'heroVideo', className: 'bg-success video-background', 'autoPlay': '', 'loop': '', 'muted': '', poster: 'img/MOSHED-2024-12-6-20-49-13.jpg' }, [' ', el('source', { src: (pg_project_data_opto_energy ? pg_project_data_opto_energy.url : '') + 'img/Energiekreis-25.mp4', type: 'video/mp4' }), ' Your browser does not support the video tag.', ' ']), ' ', el('nav', { className: 'bg-opacity-10 navbar navbar-dark navbar-expand-lg  pb-3 pb-lg-1 pt-3 pt-lg-0' }, [' ', el('div', { className: 'container flex-wrap' }, [' ', el('span', {}), ' ', el('button', { className: 'navbar-toggler', type: 'button', 'data-bs-toggle': 'collapse', 'data-bs-target': '#navbarToggler2', 'aria-controls': 'navbarToggler2', 'aria-expanded': 'false', 'aria-label': 'Toggle navigation' }, [el('span', { className: 'navbar-toggler-icon' }), ' ']), ' ', el('div', { className: 'collapse justify-content-center navbar-collapse  w-100', id: 'navbarToggler2' }, [' ', el('ul', { className: 'align-items-start d-flex fa-ul h5 navbar-nav' }, [' ', el('li', { className: 'nav-item' }, [' ', el('a', { className: 'nav-link p-lg-4', href: propOrDefault( props.attributes.story_link.url, 'story_link', 'url' ), onClick: function(e) { e.preventDefault(); } }, el('strong', {}, 'Story')), ' ']), ' ', el('li', { className: 'nav-item' }, [' ', el('a', { className: 'nav-link p-lg-4', href: propOrDefault( props.attributes.register_link.url, 'register_link', 'url' ), onClick: function(e) { e.preventDefault(); } }, el('strong', {}, 'Registrieren')), ' ']), ' ', el('li', { className: 'nav-item' }, [' ', el('a', { className: 'nav-link p-lg-4', href: propOrDefault( props.attributes.showroom_link.url, 'showroom_link', 'url' ), onClick: function(e) { e.preventDefault(); } }, el('strong', {}, 'Showroom')), ' ']), ' ', el('li', { className: 'nav-item' }, [' ', el('a', { className: 'nav-link p-lg-4', href: propOrDefault( props.attributes.news_link.url, 'news_link', 'url' ), onClick: function(e) { e.preventDefault(); } }, el('strong', {}, 'Aktuelles')), ' ']), ' ', el('li', { className: 'nav-item' }, [' ', el('a', { className: 'nav-link p-lg-4', href: propOrDefault( props.attributes.traders_link.url, 'traders_link', 'url' ), target: '_blank', onClick: function(e) { e.preventDefault(); } }, [el('strong', {}, 'Händlerportal '), el('i', { className: 'fa-external-link-square-alt fas' })]), ' ', ' ']), ' ', el('li', { className: 'nav-item' }, [' ', el('a', { className: 'nav-link p-lg-4', href: propOrDefault( props.attributes.contact_link.url, 'contact_link', 'url' ), onClick: function(e) { e.preventDefault(); } }, el('strong', {}, 'Kontakt')), ' ']), ' ']), ' ']), ' ']), ' ']), ' ', el('div', { className: 'align-content-center align-items-center container d-flex hero-center justify-content-center  test text-center' }, [' ', el('div', { className: 'align-content-center align-items-center gy-4 justify-content-center pb-5 pt-5 row' }, [' ', el('div', { className: 'align-items-center col-lg-7 d-inline-flex flex-column justify-content-center ' }, [' ', props.attributes.logo_image && props.attributes.logo_image.svg && pgCreateSVG3(RawHTML, {}, pgMergeInlineSVGAttributes(propOrDefault( props.attributes.logo_image.svg, 'logo_image', 'svg' ), { className: 'w-50' })), props.attributes.logo_image && !props.attributes.logo_image.svg && propOrDefault( props.attributes.logo_image.url, 'logo_image', 'url' ) && el('img', { src: propOrDefault( props.attributes.logo_image.url, 'logo_image', 'url' ), className: 'w-50 ' + (props.attributes.logo_image.id ? ('wp-image-' + props.attributes.logo_image.id) : ''), alt: propOrDefault( props.attributes.logo_image?.alt, 'logo_image', 'alt' ) }), ' ', el(RichText, { tagName: 'h1', className: 'display-4 fw-bold mb-3 text-white', value: propOrDefault( props.attributes.header_text, 'header_text' ), onChange: function(val) { setAttributes( {header_text: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el(RichText, { tagName: 'p', className: 'lead mb-4 pe-sm-5 ps-sm-5 text-start', value: propOrDefault( props.attributes.paragraph_text, 'paragraph_text' ), onChange: function(val) { setAttributes( {paragraph_text: val }) } }), ' ', el(RichText, { tagName: 'a', href: propOrDefault( props.attributes.hero_button_link.url, 'hero_button_link', 'url' ), className: 'btn btn-lg btn-outline-success pb-2 pe-4 ps-4 pt-2', onClick: function(e) { e.preventDefault(); }, value: propOrDefault( props.attributes.hero_button_label, 'hero_button_label' ), onChange: function(val) { setAttributes( {hero_button_label: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el('section', { className: 'bg-light-100 py-10' }), ' ']), ' ']), ' ']), ' ']),                        
                
                    el( InspectorControls, {},
                        [
                            
                        pgMediaImageControl('logo_image', setAttributes, props, 'full', false, 'Logo image', '' ),
                                        
                            el(Panel, {},
                                el(PanelBody, {
                                    title: __('Block properties')
                                }, [
                                    
                                    el(TextControl, {
                                        value: props.attributes.video_source,
                                        help: __( '' ),
                                        label: __( 'Video source' ),
                                        onChange: function(val) { setAttributes({video_source: val}) },
                                        type: 'text'
                                    }),
                                    pgUrlControl('story_link', setAttributes, props, 'Story link', '', null ),
                                    pgUrlControl('register_link', setAttributes, props, 'Registrieren link', '', null ),
                                    pgUrlControl('showroom_link', setAttributes, props, 'Showroom link', '', null ),
                                    pgUrlControl('news_link', setAttributes, props, 'Aktuelles link', '', null ),
                                    pgUrlControl('traders_link', setAttributes, props, 'Händlerportal', '', null ),
                                    pgUrlControl('contact_link', setAttributes, props, 'Kontakt link', '', null ),
                                    el(TextControl, {
                                        value: props.attributes.header_text,
                                        help: __( '' ),
                                        label: __( 'Header text' ),
                                        onChange: function(val) { setAttributes({header_text: val}) },
                                        type: 'text'
                                    }),
                                    el(BaseControl, {
                                        help: __( '' ),
                                        label: __( 'Paragraph text' ),
                                    }, [
                                        el(RichText, {
                                            value: props.attributes.paragraph_text,
                                            style: {
                                                    border: '1px solid black',
                                                    padding: '6px 8px',
                                                    minHeight: '80px',
                                                    border: '1px solid rgb(117, 117, 117)',
                                                    fontSize: '13px',
                                                    lineHeight: 'normal'
                                                },
                                            onChange: function(val) { setAttributes({paragraph_text: val}) },
                                        })
                                    ]),
                                    pgUrlControl('hero_button_link', setAttributes, props, 'Hero Button link', '', null ),
                                    el(TextControl, {
                                        value: props.attributes.hero_button_label,
                                        help: __( '' ),
                                        label: __( 'Hero Button Label' ),
                                        onChange: function(val) { setAttributes({hero_button_label: val}) },
                                        type: 'text'
                                    }),    
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
