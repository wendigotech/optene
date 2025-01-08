
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
    
    const block = registerBlockType( 'opto-energy/story-motion', {
        apiVersion: 2,
        title: 'Story Motion',
        description: 'Story motion section',
        icon: 'block-default',
        category: 'opto_energy',
        keywords: [],
        supports: {},
        attributes: {
            title: {
                type: ['string', 'null'],
                default: `Ihre nachhaltige Zukunft ermöglichen`,
            },
            description: {
                type: ['string', 'null'],
                default: `Bei Opto Energy bieten wir innovative energieeffiziente Lösungen für ein nachhaltiges Zuhause. Entdecken Sie unser Angebot an Solarpaneelen, Wärmepumpen und umweltfreundlichen Haushaltsgeräten in unserem Showroom oder unserem exklusiven Handelsportal für Geschäftskunden.`,
            },
            image: {
                type: ['object', 'null'],
                default: {id: 0, url: 'https://images.unsplash.com/photo-1485740112426-0c2549fa8c86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDkyMnwwfDF8c2VhcmNofDF8fGZ1dHVyZXxlbnwwfHx8fDE3MzM4MzgwMzh8MA&ixlib=rb-4.0.3&q=80&w=1080', size: '', svg: '', alt: null},
            },
            description2: {
                type: ['string', 'null'],
                default: `Bei Opto Energy bieten wir innovative und effiziente Lösungen für ein nachhaltiges Zuhause. Als führender Distributor von Solarmodulen, Wärmepumpen und umweltfreundlichen Geräten unterstützen wir Sie dabei, Ihren Energieverbrauch zu reduzieren und Ihren ökologischen Fußabdruck zu verbessern.&nbsp;`,
            },
            image2: {
                type: ['object', 'null'],
                default: {id: 0, url: 'https://images.unsplash.com/photo-1546188994-07c34f6e5e1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDkyMnwwfDF8c2VhcmNofDIwMnx8Y2xlYW4lMjBmdXR1cmV8ZW58MHx8fHwxNzM0MDM0NzA1fDA&ixlib=rb-4.0.3&q=80&w=1080', size: '', svg: '', alt: null},
            }
        },
        example: { attributes: { title: `Ihre nachhaltige Zukunft ermöglichen`, description: `Bei Opto Energy bieten wir innovative energieeffiziente Lösungen für ein nachhaltiges Zuhause. Entdecken Sie unser Angebot an Solarpaneelen, Wärmepumpen und umweltfreundlichen Haushaltsgeräten in unserem Showroom oder unserem exklusiven Handelsportal für Geschäftskunden.`, image: {id: 0, url: 'https://images.unsplash.com/photo-1485740112426-0c2549fa8c86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDkyMnwwfDF8c2VhcmNofDF8fGZ1dHVyZXxlbnwwfHx8fDE3MzM4MzgwMzh8MA&ixlib=rb-4.0.3&q=80&w=1080', size: '', svg: '', alt: null}, description2: `Bei Opto Energy bieten wir innovative und effiziente Lösungen für ein nachhaltiges Zuhause. Als führender Distributor von Solarmodulen, Wärmepumpen und umweltfreundlichen Geräten unterstützen wir Sie dabei, Ihren Energieverbrauch zu reduzieren und Ihren ökologischen Fußabdruck zu verbessern.&nbsp;`, image2: {id: 0, url: 'https://images.unsplash.com/photo-1546188994-07c34f6e5e1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDkyMnwwfDF8c2VhcmNofDIwMnx8Y2xlYW4lMjBmdXR1cmV8ZW58MHx8fHwxNzM0MDM0NzA1fDA&ixlib=rb-4.0.3&q=80&w=1080', size: '', svg: '', alt: null} } },
        edit: function ( props ) {
            const blockProps = useBlockProps({ className: 'overflow-hidden pb-5 pt-5' });
            const setAttributes = props.setAttributes; 
            
            props.image = useSelect(function( select ) {
                return {
                    image: props.attributes.image.id ? select('core').getMedia(props.attributes.image.id) : undefined
                };
            }, [props.attributes.image] ).image;
            

            props.image2 = useSelect(function( select ) {
                return {
                    image2: props.attributes.image2.id ? select('core').getMedia(props.attributes.image2.id) : undefined
                };
            }, [props.attributes.image2] ).image2;
            
            
            const innerBlocksProps = null;
            
            
            return el(Fragment, {}, [
                el('section', { ...blockProps }, [' ', el('div', { className: 'container pb-5 pt-5' }, [' ', el('div', { className: 'align-items-center g-4 row' }, [' ', el('div', { className: 'col-lg-5' }, [' ', el(RichText, { tagName: 'h3', className: 'display-5 fw-bold text-secondary', 'data-pg-ia-scene': '{&quot;s&quot;:&quot;auto&quot;,&quot;s_t&quot;:&quot;start&quot;,&quot;s_s&quot;:&quot;center&quot;,&quot;redm&quot;:&quot;true&quot;,&quot;l&quot;:[{&quot;name&quot;:&quot;4&quot;,&quot;a&quot;:{&quot;l&quot;:[{&quot;t&quot;:&quot;&quot;,&quot;l&quot;:[{&quot;t&quot;:&quot;set&quot;,&quot;p&quot;:0,&quot;d&quot;:0,&quot;l&quot;:{&quot;autoAlpha&quot;:0},&quot;e&quot;:&quot;Power1.easeOut&quot;},{&quot;t&quot;:&quot;tween&quot;,&quot;p&quot;:0,&quot;d&quot;:0.51,&quot;l&quot;:{&quot;autoAlpha&quot;:1},&quot;e&quot;:&quot;Power1.easeOut&quot;}]}]}}]}', value: propOrDefault( props.attributes.title, 'title' ), onChange: function(val) { setAttributes( {title: val }) } }), ' ', el(RichText, { tagName: 'p', className: 'fw-light lead mb-4', 'data-pg-ia-scene': '{&quot;s_t&quot;:&quot;start&quot;,&quot;s_s&quot;:&quot;center&quot;,&quot;redm&quot;:&quot;true&quot;,&quot;l&quot;:[{&quot;name&quot;:&quot;4&quot;,&quot;a&quot;:&quot;fadeIn&quot;}],&quot;s&quot;:&quot;auto&quot;}', value: propOrDefault( props.attributes.description, 'description' ), onChange: function(val) { setAttributes( {description: val }) } }), ' ']), ' ', el('div', { className: 'col-lg-7 col-md-12 order-lg-first text-center' }, [' ', props.attributes.image && props.attributes.image.svg && pgCreateSVG3(RawHTML, {}, pgMergeInlineSVGAttributes(propOrDefault( props.attributes.image.svg, 'image', 'svg' ), { className: 'img-fluid w-100', 'data-pg-ia-scene': '{"l":[{"name":"1","a":"fadeInLeft"}]}' })), props.attributes.image && !props.attributes.image.svg && propOrDefault( props.attributes.image.url, 'image', 'url' ) && el('img', { src: propOrDefault( props.attributes.image.url, 'image', 'url' ), className: 'img-fluid w-100 ' + (props.attributes.image.id ? ('wp-image-' + props.attributes.image.id) : ''), 'data-pg-ia-scene': '{&quot;l&quot;:[{&quot;name&quot;:&quot;1&quot;,&quot;a&quot;:&quot;fadeInLeft&quot;}]}', alt: propOrDefault( props.attributes.image?.alt, 'image', 'alt' ) }), ' ']), ' ', el('div', { className: 'col-lg-5' }, [' ', el(RichText, { tagName: 'p', className: 'fw-light lead mb-4', 'data-pg-ia-scene': '{&quot;l&quot;:[{&quot;name&quot;:&quot;1&quot;,&quot;a&quot;:&quot;fadeIn&quot;}]}', value: propOrDefault( props.attributes.description2, 'description2' ), onChange: function(val) { setAttributes( {description2: val }) } }), ' ']), ' ', el('div', { className: 'col-lg-7 col-md-12 text-center' }, [' ', props.attributes.image2 && props.attributes.image2.svg && pgCreateSVG3(RawHTML, {}, pgMergeInlineSVGAttributes(propOrDefault( props.attributes.image2.svg, 'image2', 'svg' ), { className: 'img-fluid w-100', 'data-pg-ia-scene': '{"l":[{"name":"2","a":"fadeInRight"}],"redm":"true"}' })), props.attributes.image2 && !props.attributes.image2.svg && propOrDefault( props.attributes.image2.url, 'image2', 'url' ) && el('img', { src: propOrDefault( props.attributes.image2.url, 'image2', 'url' ), className: 'img-fluid w-100 ' + (props.attributes.image2.id ? ('wp-image-' + props.attributes.image2.id) : ''), 'data-pg-ia-scene': '{&quot;l&quot;:[{&quot;name&quot;:&quot;2&quot;,&quot;a&quot;:&quot;fadeInRight&quot;}],&quot;redm&quot;:&quot;true&quot;}', alt: propOrDefault( props.attributes.image2?.alt, 'image2', 'alt' ) }), ' ']), ' ']), ' ']), ' ', el('div', { className: 'container mt-5 pb-5 pt-5' }, [' ', el('div', { className: 'col-lg-6 me-auto ms-auto text-center' }, [' ', el('div', { className: 'align-items-center row' }, [' ', el('div', { className: 'col' }, [' ', el('hr', { className: 'border-secondary mb-0 mt-0' }), ' ']), ' ', el('div', { className: 'col-auto' }, [' ', el('div', { className: 'bg-secondary p-2', style: { transform: 'rotate(45deg)' } }), ' ']), ' ', el('div', { className: 'col' }, [' ', el('hr', { className: 'border-secondary mb-0 mt-0' }), ' ']), ' ']), ' ']), ' ']), ' ']),                        
                
                    el( InspectorControls, {},
                        [
                            
                        pgMediaImageControl('image', setAttributes, props, 'full', false, 'Image', '' ),
                                        
                        pgMediaImageControl('image2', setAttributes, props, 'full', false, 'Image 2', '' ),
                                        
                            el(Panel, {},
                                el(PanelBody, {
                                    title: __('Block properties')
                                }, [
                                    
                                    el(BaseControl, {
                                        help: __( '' ),
                                        label: __( 'Title' ),
                                    }, [
                                        el(RichText, {
                                            value: props.attributes.title,
                                            style: {
                                                    border: '1px solid black',
                                                    padding: '6px 8px',
                                                    minHeight: '80px',
                                                    border: '1px solid rgb(117, 117, 117)',
                                                    fontSize: '13px',
                                                    lineHeight: 'normal'
                                                },
                                            onChange: function(val) { setAttributes({title: val}) },
                                        })
                                    ]),
                                    el(BaseControl, {
                                        help: __( '' ),
                                        label: __( 'Description' ),
                                    }, [
                                        el(RichText, {
                                            value: props.attributes.description,
                                            style: {
                                                    border: '1px solid black',
                                                    padding: '6px 8px',
                                                    minHeight: '80px',
                                                    border: '1px solid rgb(117, 117, 117)',
                                                    fontSize: '13px',
                                                    lineHeight: 'normal'
                                                },
                                            onChange: function(val) { setAttributes({description: val}) },
                                        })
                                    ]),
                                    el(BaseControl, {
                                        help: __( '' ),
                                        label: __( 'Description 2' ),
                                    }, [
                                        el(RichText, {
                                            value: props.attributes.description2,
                                            style: {
                                                    border: '1px solid black',
                                                    padding: '6px 8px',
                                                    minHeight: '80px',
                                                    border: '1px solid rgb(117, 117, 117)',
                                                    fontSize: '13px',
                                                    lineHeight: 'normal'
                                                },
                                            onChange: function(val) { setAttributes({description2: val}) },
                                        })
                                    ]),    
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
