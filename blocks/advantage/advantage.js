
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
    
    const block = registerBlockType( 'opto-energy/advantage', {
        apiVersion: 2,
        title: 'Advantage',
        description: '',
        icon: 'block-default',
        category: 'opto_energy',
        parent: [ 'opto-energy/story' ],

        keywords: [],
        supports: {},
        attributes: {
            icon1: {
                type: ['object', 'null'],
                default: {id: 0, url: (pg_project_data_opto_energy ? pg_project_data_opto_energy.url : '') + 'img/icons/energy-socket.svg', size: '', svg: '', alt: null},
            },
            advantage_title1: {
                type: ['string', 'null'],
                default: `Energieeffizienz`,
            },
            advantage_description1: {
                type: ['string', 'null'],
                default: `Durch die Nutzung von Solarenergie und anderen nachhaltigen Technologien`,
            }
        },
        example: { attributes: { icon1: {id: 0, url: (pg_project_data_opto_energy ? pg_project_data_opto_energy.url : '') + 'img/icons/energy-socket.svg', size: '', svg: '', alt: null}, advantage_title1: `Energieeffizienz`, advantage_description1: `Durch die Nutzung von Solarenergie und anderen nachhaltigen Technologien` } },
        edit: function ( props ) {
            const blockProps = useBlockProps({ className: 'col-lg-3 col-sm-6 pb-3 pt-3' });
            const setAttributes = props.setAttributes; 
            
            props.icon1 = useSelect(function( select ) {
                return {
                    icon1: props.attributes.icon1.id ? select('core').getMedia(props.attributes.icon1.id) : undefined
                };
            }, [props.attributes.icon1] ).icon1;
            
            
            const innerBlocksProps = null;
            
            
            return el(Fragment, {}, [
                el('div', { ...blockProps }, [' ', ' ', el('div', { className: 'text-dark' }, [' ', ' ', el('div', { className: 'bg-success border border-3 border-primary d-inline-block mb-4 p-4 rounded-circle text-success' }, [' ', ' ', props.attributes.icon1 && props.attributes.icon1.svg && pgCreateSVG3(RawHTML, {}, pgMergeInlineSVGAttributes(propOrDefault( props.attributes.icon1.svg, 'icon1', 'svg' ), { className: 'bg-transparent' })), props.attributes.icon1 && !props.attributes.icon1.svg && propOrDefault( props.attributes.icon1.url, 'icon1', 'url' ) && el('img', { src: propOrDefault( props.attributes.icon1.url, 'icon1', 'url' ), width: '50', height: '50', className: 'bg-transparent ' + (props.attributes.icon1.id ? ('wp-image-' + props.attributes.icon1.id) : ''), alt: propOrDefault( props.attributes.icon1?.alt, 'icon1', 'alt' ) }), ' ']), ' ', ' ', el(RichText, { tagName: 'h3', className: 'fw-bold mb-1 text-break text-success', value: propOrDefault( props.attributes.advantage_title1, 'advantage_title1' ), onChange: function(val) { setAttributes( {advantage_title1: val }) } }), ' ', ' ', el(RichText, { tagName: 'p', className: 'mb-0 text-primary', value: propOrDefault( props.attributes.advantage_description1, 'advantage_description1' ), onChange: function(val) { setAttributes( {advantage_description1: val }) } }), ' ', ' ']), ' ', ' ']),                        
                
                    el( InspectorControls, {},
                        [
                            
                        pgMediaImageControl('icon1', setAttributes, props, 'full', false, 'Icon 1', '' ),
                                        
                            el(Panel, {},
                                el(PanelBody, {
                                    title: __('Block properties')
                                }, [
                                    
                                    el(BaseControl, {
                                        help: __( '' ),
                                        label: __( 'Advantage Title 1' ),
                                    }, [
                                        el(RichText, {
                                            value: props.attributes.advantage_title1,
                                            style: {
                                                    border: '1px solid black',
                                                    padding: '6px 8px',
                                                    minHeight: '80px',
                                                    border: '1px solid rgb(117, 117, 117)',
                                                    fontSize: '13px',
                                                    lineHeight: 'normal'
                                                },
                                            onChange: function(val) { setAttributes({advantage_title1: val}) },
                                        })
                                    ]),
                                    el(BaseControl, {
                                        help: __( '' ),
                                        label: __( 'Advantage Description 1' ),
                                    }, [
                                        el(RichText, {
                                            value: props.attributes.advantage_description1,
                                            style: {
                                                    border: '1px solid black',
                                                    padding: '6px 8px',
                                                    minHeight: '80px',
                                                    border: '1px solid rgb(117, 117, 117)',
                                                    fontSize: '13px',
                                                    lineHeight: 'normal'
                                                },
                                            onChange: function(val) { setAttributes({advantage_description1: val}) },
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
