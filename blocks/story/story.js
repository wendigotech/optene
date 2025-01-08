
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
    
    const block = registerBlockType( 'opto-energy/story', {
        apiVersion: 2,
        title: 'Story',
        description: 'Innovative, reliable and customer-oriented',
        icon: 'block-default',
        category: 'opto_energy',
        keywords: [],
        supports: {},
        attributes: {
            logo: {
                type: ['object', 'null'],
                default: {id: 0, url: (pg_project_data_opto_energy ? pg_project_data_opto_energy.url : '') + 'img/Logo-OE-navyblue.svg', size: '', svg: '', alt: null},
            },
            heading: {
                type: ['string', 'null'],
                default: `Innovativ, zuverlässig und kundenorientiert`,
            },
            description: {
                type: ['string', 'null'],
                default: `Bei Opto Energy setzen wir uns für innovative, energiesparende Lösungen für eine nachhaltige Zukunft ein. Unser umfangreiches Sortiment an Solarmodulen, Wärmepumpen und umweltfreundlichen Haushaltsgeräten ermöglicht es Hausbesitzern und Unternehmen, ihren CO2-Fußabdruck zu reduzieren. Mit unserem modernen Showroom und unserem umfassenden Handelsportal bieten wir unseren Kunden außergewöhnliche Erfahrungen und unterstützen ein sauberes, grünes Morgen.`,
            }
        },
        example: { attributes: { logo: {id: 0, url: (pg_project_data_opto_energy ? pg_project_data_opto_energy.url : '') + 'img/Logo-OE-navyblue.svg', size: '', svg: '', alt: null}, heading: `Innovativ, zuverlässig und kundenorientiert`, description: `Bei Opto Energy setzen wir uns für innovative, energiesparende Lösungen für eine nachhaltige Zukunft ein. Unser umfangreiches Sortiment an Solarmodulen, Wärmepumpen und umweltfreundlichen Haushaltsgeräten ermöglicht es Hausbesitzern und Unternehmen, ihren CO2-Fußabdruck zu reduzieren. Mit unserem modernen Showroom und unserem umfassenden Handelsportal bieten wir unseren Kunden außergewöhnliche Erfahrungen und unterstützen ein sauberes, grünes Morgen.` } },
        edit: function ( props ) {
            const blockProps = useBlockProps({ className: 'pb-5 pt-5', id: 'story', 'data-pg-name': 'Story' });
            const setAttributes = props.setAttributes; 
            
            props.logo = useSelect(function( select ) {
                return {
                    logo: props.attributes.logo.id ? select('core').getMedia(props.attributes.logo.id) : undefined
                };
            }, [props.attributes.logo] ).logo;
            
            
            const innerBlocksProps = null;
            
            
            return el(Fragment, {}, [
                el('section', { ...blockProps }, [' ', el('div', { className: 'container pb-5 pt-5' }, [' ', el('div', { className: 'col-lg-6 me-auto ms-auto text-center' }, [' ', props.attributes.logo && props.attributes.logo.svg && pgCreateSVG3(RawHTML, {}, pgMergeInlineSVGAttributes(propOrDefault( props.attributes.logo.svg, 'logo', 'svg' ), {})), props.attributes.logo && !props.attributes.logo.svg && propOrDefault( props.attributes.logo.url, 'logo', 'url' ) && el('img', { src: propOrDefault( props.attributes.logo.url, 'logo', 'url' ), alt: propOrDefault( props.attributes.logo?.alt, 'logo', 'alt' ), className: (props.attributes.logo.id ? ('wp-image-' + props.attributes.logo.id) : '') }), ' ', el(RichText, { tagName: 'h2', className: 'display-5 fw-bold mb-3 text-primary-emphasis', value: propOrDefault( props.attributes.heading, 'heading' ), onChange: function(val) { setAttributes( {heading: val }) } }), ' ']), ' ', el('div', { className: 'col-lg-8 me-auto ms-auto text-center' }, [' ', el(RichText, { tagName: 'p', className: 'fw-light mb-0 text-start', value: propOrDefault( props.attributes.description, 'description' ), onChange: function(val) { setAttributes( {description: val }) } }), ' ']), ' ']), ' ', el('div', { className: 'container pb-5 pt-5' }, ' '), ' ', el('div', { className: 'container pb-4 pt-4' }, [' ', el('div', { className: 'col-lg-6 me-auto ms-auto text-center' }, [' ', el('div', { className: 'align-items-center row' }, [' ', el('div', { className: 'col' }, [' ', el('hr', { className: 'border-secondary mb-0 mt-0' }), ' ']), ' ', el('div', { className: 'col-auto' }, [' ', el('div', { className: 'bg-secondary p-2', style: { transform: 'rotate(45deg)' } }), ' ']), ' ', el('div', { className: 'col' }, [' ', el('hr', { className: 'border-secondary mb-0 mt-0' }), ' ']), ' ']), ' ']), ' ']), ' ']),                        
                
                    el( InspectorControls, {},
                        [
                            
                        pgMediaImageControl('logo', setAttributes, props, 'full', false, 'Logo', '' ),
                                        
                            el(Panel, {},
                                el(PanelBody, {
                                    title: __('Block properties')
                                }, [
                                    
                                    el(BaseControl, {
                                        help: __( '' ),
                                        label: __( 'Heading' ),
                                    }, [
                                        el(RichText, {
                                            value: props.attributes.heading,
                                            style: {
                                                    border: '1px solid black',
                                                    padding: '6px 8px',
                                                    minHeight: '80px',
                                                    border: '1px solid rgb(117, 117, 117)',
                                                    fontSize: '13px',
                                                    lineHeight: 'normal'
                                                },
                                            onChange: function(val) { setAttributes({heading: val}) },
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
