
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
    
    const block = registerBlockType( 'opto-energy/register', {
        apiVersion: 2,
        title: 'Registrieren',
        description: 'für Händler',
        icon: 'block-default',
        category: 'opto_energy',
        keywords: [],
        supports: {},
        attributes: {
            advantages_heading: {
                type: ['string', 'null'],
                default: `Unsere Vorteile:`,
            },
            register_button_link: {
                type: ['object', 'null'],
                default: {post_id: 0, url: '', title: '', 'post_type': null},
            },
            register_button_label: {
                type: ['string', 'null'],
                default: `Jetzt Mitglied werden`,
            }
        },
        example: { attributes: { advantages_heading: `Unsere Vorteile:`, register_button_link: {post_id: 0, url: '', title: '', 'post_type': null}, register_button_label: `Jetzt Mitglied werden` } },
        edit: function ( props ) {
            const blockProps = useBlockProps({ className: 'align-items-center d-flex flex-column justify-content-center min-vh-100 pb-5 pt-5 text-center', id: 'register', 'data-pg-name': 'Registrieren', title: 'Registrieren' });
            const setAttributes = props.setAttributes; 
            
            
            const innerBlocksProps = useInnerBlocksProps({ className: 'justify-content-center row' }, {
                allowedBlocks: [ 'opto-energy/advantage' ],
                template: [
    [ 'opto-energy/advantage', {} ],
    [ 'opto-energy/advantage', {} ],
    [ 'opto-energy/advantage', {} ],
    [ 'opto-energy/advantage', {} ]
],
            } );
                            
            
            return el(Fragment, {}, [
                el('section', { ...blockProps }, [' ', el('div', { className: 'container' }, [' ', el(RichText, { tagName: 'h2', className: 'display-4 fw-bolder mb-4 text-success', value: propOrDefault( props.attributes.advantages_heading, 'advantages_heading' ), onChange: function(val) { setAttributes( {advantages_heading: val }) } }), ' ', el('div', { ...innerBlocksProps }), ' ']), ' ', el(RichText, { tagName: 'a', className: 'btn btn-lg btn-success fw-bold mt-5 pb-2 pe-5 ps-5 pt-2 text-primary-emphasis', onClick: function(e) { e.preventDefault(); }, href: propOrDefault( props.attributes.register_button_link.url, 'register_button_link', 'url' ), value: propOrDefault( props.attributes.register_button_label, 'register_button_label' ), onChange: function(val) { setAttributes( {register_button_label: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']),                        
                
                    el( InspectorControls, {},
                        [
                            
                            el(Panel, {},
                                el(PanelBody, {
                                    title: __('Block properties')
                                }, [
                                    
                                    el(BaseControl, {
                                        help: __( '' ),
                                        label: __( 'Advantages Heading' ),
                                    }, [
                                        el(RichText, {
                                            value: props.attributes.advantages_heading,
                                            style: {
                                                    border: '1px solid black',
                                                    padding: '6px 8px',
                                                    minHeight: '80px',
                                                    border: '1px solid rgb(117, 117, 117)',
                                                    fontSize: '13px',
                                                    lineHeight: 'normal'
                                                },
                                            onChange: function(val) { setAttributes({advantages_heading: val}) },
                                        })
                                    ]),
                                    pgUrlControl('register_button_link', setAttributes, props, 'Register Button Link', '', null ),
                                    el(TextControl, {
                                        value: props.attributes.register_button_label,
                                        help: __( '' ),
                                        label: __( 'Register Button Label' ),
                                        onChange: function(val) { setAttributes({register_button_label: val}) },
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
