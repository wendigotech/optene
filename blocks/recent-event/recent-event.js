
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
    
    const block = registerBlockType( 'opto-energy/recent-event', {
        apiVersion: 2,
        title: 'Recent Event',
        description: '',
        icon: 'block-default',
        category: 'opto_energy',
        parent: [ 'opto-energy/showroom' ],

        keywords: [],
        supports: {},
        attributes: {
            event_image: {
                type: ['object', 'null'],
                default: {id: 0, url: 'https://images.unsplash.com/photo-1441171205449-f600f908a9f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDkyMnwwfDF8c2VhcmNofDQ4OHx8ZW5lcmd5fGVufDB8fHx8MTczMzc4NTA1Nnww&ixlib=rb-4.0.3&q=80&w=1080', size: '', svg: '', alt: 'Opto Energy Solar Panel'},
            },
            event_title: {
                type: ['string', 'null'],
                default: `Opto Energy - Effiziente Lösungen für eine nachhaltige Zukunft`,
            }
        },
        example: { attributes: { event_image: {id: 0, url: 'https://images.unsplash.com/photo-1441171205449-f600f908a9f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDkyMnwwfDF8c2VhcmNofDQ4OHx8ZW5lcmd5fGVufDB8fHx8MTczMzc4NTA1Nnww&ixlib=rb-4.0.3&q=80&w=1080', size: '', svg: '', alt: 'Opto Energy Solar Panel'}, event_title: `Opto Energy - Effiziente Lösungen für eine nachhaltige Zukunft` } },
        edit: function ( props ) {
            const blockProps = useBlockProps({ className: 'col-lg-6' });
            const setAttributes = props.setAttributes; 
            
            props.event_image = useSelect(function( select ) {
                return {
                    event_image: props.attributes.event_image.id ? select('core').getMedia(props.attributes.event_image.id) : undefined
                };
            }, [props.attributes.event_image] ).event_image;
            
            
            const innerBlocksProps = null;
            
            
            return el(Fragment, {}, [
                el('div', { ...blockProps }, [el('a', { href: '#', className: 'd-block event-link px-4', 'data-pg-ia-hide': '' }, [' ', props.attributes.event_image && props.attributes.event_image.svg && pgCreateSVG3(RawHTML, {}, pgMergeInlineSVGAttributes(propOrDefault( props.attributes.event_image.svg, 'event_image', 'svg' ), { className: 'img-fluid mb-4' })), props.attributes.event_image && !props.attributes.event_image.svg && propOrDefault( props.attributes.event_image.url, 'event_image', 'url' ) && el('img', { src: propOrDefault( props.attributes.event_image.url, 'event_image', 'url' ), className: 'img-fluid mb-4 ' + (props.attributes.event_image.id ? ('wp-image-' + props.attributes.event_image.id) : ''), alt: propOrDefault( props.attributes.event_image?.alt, 'event_image', 'alt' ) }), ' ', el(RichText, { tagName: 'h3', className: 'h4', value: propOrDefault( props.attributes.event_title, 'event_title' ), onChange: function(val) { setAttributes( {event_title: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ']),                        
                
                    el( InspectorControls, {},
                        [
                            
                        pgMediaImageControl('event_image', setAttributes, props, 'full', false, 'Event Image', '' ),
                                        
                            el(Panel, {},
                                el(PanelBody, {
                                    title: __('Block properties')
                                }, [
                                    
                                    el(TextControl, {
                                        value: props.attributes.event_title,
                                        help: __( '' ),
                                        label: __( 'Event Title' ),
                                        onChange: function(val) { setAttributes({event_title: val}) },
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
