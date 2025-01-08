
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
    
    const block = registerBlockType( 'opto-energy/contact', {
        apiVersion: 2,
        title: 'Contact',
        description: 'Contact section with form and email link',
        icon: 'block-default',
        category: 'opto_energy',
        keywords: [],
        supports: {},
        attributes: {
            contact_heading: {
                type: ['string', 'null'],
                default: `Schreiben Sie uns noch heute und erhalten Sie eine exklusive Beratung.`,
            },
            contact_email_link: {
                type: ['object', 'null'],
                default: {post_id: 0, url: 'mailto:info@opto-energy.de', title: '', 'post_type': null},
            },
            contact_email_label: {
                type: ['string', 'null'],
                default: `Kontaktieren Sie uns: info@opto-energy.de`,
            },
            form_title: {
                type: ['string', 'null'],
                default: `Unser Kontaktformular`,
            },
            first_name_label: {
                type: ['string', 'null'],
                default: `Vorname*`,
            },
            first_name_placeholder: {
                type: ['string', 'null'],
                default: ``,
            },
            last_name_label: {
                type: ['string', 'null'],
                default: `Nachname*`,
            },
            last_name_placeholder: {
                type: ['string', 'null'],
                default: ``,
            },
            email_label: {
                type: ['string', 'null'],
                default: `E-Mail*`,
            },
            email_placeholder: {
                type: ['string', 'null'],
                default: ``,
            },
            phone_label: {
                type: ['string', 'null'],
                default: `Telefon*`,
            },
            phone_placeholder: {
                type: ['string', 'null'],
                default: ``,
            },
            source_label: {
                type: ['string', 'null'],
                default: `Auf welche Weise können wir Sie am besten bei Ihrem Anliegen unterstützen?`,
            },
            source_options: {
                type: ['string', 'null'],
                default: `<option disabled selected>Bitte wählen Sie eine Option</option> <option>Solarenergie</option> <option>Wärmepumpen</option> <option>Nachhaltige Haushaltsgeräte</option>`,
            },
            message_label: {
                type: ['string', 'null'],
                default: `Ihre Nachricht an uns`,
            },
            message_placeholder: {
                type: ['string', 'null'],
                default: ``,
            },
            submit_button: {
                type: ['object', 'null'],
                default: {post_id: 0, url: '', title: '', 'post_type': null},
            },
            submit_label: {
                type: ['string', 'null'],
                default: `Absenden`,
            },
            submit_icon: {
                type: ['object', 'null'],
                default: {id: 0, url: '', size: '', svg: `<svg height="16" width="16" class="ms-1" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"> 
    <path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>     
</svg>`, alt: null},
            }
        },
        example: { attributes: { contact_heading: `Schreiben Sie uns noch heute und erhalten Sie eine exklusive Beratung.`, contact_email_link: {post_id: 0, url: 'mailto:info@opto-energy.de', title: '', 'post_type': null}, contact_email_label: `Kontaktieren Sie uns: info@opto-energy.de`, form_title: `Unser Kontaktformular`, first_name_label: `Vorname*`, first_name_placeholder: ``, last_name_label: `Nachname*`, last_name_placeholder: ``, email_label: `E-Mail*`, email_placeholder: ``, phone_label: `Telefon*`, phone_placeholder: ``, source_label: `Auf welche Weise können wir Sie am besten bei Ihrem Anliegen unterstützen?`, source_options: `<option disabled selected>Bitte wählen Sie eine Option</option> <option>Solarenergie</option> <option>Wärmepumpen</option> <option>Nachhaltige Haushaltsgeräte</option>`, message_label: `Ihre Nachricht an uns`, message_placeholder: ``, submit_button: {post_id: 0, url: '', title: '', 'post_type': null}, submit_label: `Absenden`, submit_icon: {id: 0, url: '', size: '', svg: `<svg height="16" width="16" class="ms-1" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"> 
    <path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>     
</svg>`, alt: null} } },
        edit: function ( props ) {
            const blockProps = useBlockProps({ className: 'bg-secondary pb-5 pt-5 text-center', id: 'contact', 'data-pg-name': 'Contact', title: 'Contact' });
            const setAttributes = props.setAttributes; 
            
            props.submit_icon = useSelect(function( select ) {
                return {
                    submit_icon: props.attributes.submit_icon.id ? select('core').getMedia(props.attributes.submit_icon.id) : undefined
                };
            }, [props.attributes.submit_icon] ).submit_icon;
            
            
            const innerBlocksProps = null;
            
            
            return el(Fragment, {}, [
                el('section', { ...blockProps }, [' ', el('div', { className: 'container pb-5 pt-5' }, [' ', el(RichText, { tagName: 'h3', className: 'fw-bold h2 mb-4 text-white', value: propOrDefault( props.attributes.contact_heading, 'contact_heading' ), onChange: function(val) { setAttributes( {contact_heading: val }) } }), ' ', el(RichText, { tagName: 'a', href: propOrDefault( props.attributes.contact_email_link.url, 'contact_email_link', 'url' ), className: 'btn btn-success pb-2 pe-4 ps-4 pt-2', onClick: function(e) { e.preventDefault(); }, value: propOrDefault( props.attributes.contact_email_label, 'contact_email_label' ), onChange: function(val) { setAttributes( {contact_email_label: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', { className: 'container mx-auto px-5 pt-10 pb-10 text-light' }, [' ', el(RichText, { tagName: 'h2', className: 'font-bold fw-bold h3 mb-5 text-center text-lg text-white', value: propOrDefault( props.attributes.form_title, 'form_title' ), onChange: function(val) { setAttributes( {form_title: val }) } }), ' ', el('form', {}, [' ', el('div', { className: 'row' }, [' ', el('div', { className: 'mb-5 col-md-6' }, [' ', el(RichText, { tagName: 'h4', className: 'form-label text-white', value: propOrDefault( props.attributes.first_name_label, 'first_name_label' ), onChange: function(val) { setAttributes( {first_name_label: val }) } }), ' ', el(RichText, { tagName: 'input', type: 'text', className: 'bg-light border-start-0 border-end-0 border-top-0 form-control ps-2 pe-2 rounded-2', id: 'inputFirstName', placeholder: 'Geben Sie Ihren Vornamen ein...', required: 'true', value: propOrDefault( props.attributes.first_name_placeholder, 'first_name_placeholder' ), onChange: function(val) { setAttributes( {first_name_placeholder: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', { className: 'mb-5 col-md-6' }, [' ', el(RichText, { tagName: 'h4', className: 'form-label text-white', value: propOrDefault( props.attributes.last_name_label, 'last_name_label' ), onChange: function(val) { setAttributes( {last_name_label: val }) } }), ' ', el(RichText, { tagName: 'input', type: 'text', className: 'bg-light border-start-0 border-end-0 border-top-0 form-control ps-2 pe-2 rounded-2', id: 'inputLastName', placeholder: 'Geben Sie Ihren Nachnamen ein...', required: 'true', value: propOrDefault( props.attributes.last_name_placeholder, 'last_name_placeholder' ), onChange: function(val) { setAttributes( {last_name_placeholder: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ']), ' ', el('div', { className: 'row' }, [' ', el('div', { className: 'mb-5 col-md-6' }, [' ', el(RichText, { tagName: 'h4', className: 'form-label text-white', value: propOrDefault( props.attributes.email_label, 'email_label' ), onChange: function(val) { setAttributes( {email_label: val }) } }), ' ', el(RichText, { tagName: 'input', type: 'email', className: 'bg-light border-end-0 border-start-0 border-top-0 form-control pe-2 ps-2 rounded-2', id: 'inputEmail', placeholder: 'Geben Sie Ihre E-Mail-Adresse ein...', required: 'true', value: propOrDefault( props.attributes.email_placeholder, 'email_placeholder' ), onChange: function(val) { setAttributes( {email_placeholder: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', { className: 'mb-5 col-md-6' }, [' ', ' ', el(RichText, { tagName: 'h4', className: 'form-label text-white', value: propOrDefault( props.attributes.phone_label, 'phone_label' ), onChange: function(val) { setAttributes( {phone_label: val }) } }), ' ', ' ', el(RichText, { tagName: 'input', type: 'tel', className: 'bg-light border-start-0 border-end-0 border-top-0 form-control ps-2 pe-2 rounded-2', id: 'inputPhone', placeholder: 'Geben Sie Ihre Telefonnummer ein...', required: 'true', value: propOrDefault( props.attributes.phone_placeholder, 'phone_placeholder' ), onChange: function(val) { setAttributes( {phone_placeholder: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', ' ']), el('div', { className: 'col-lg-6 col-md-12 mb-5' }, [' ', el(RichText, { tagName: 'h4', className: 'form-label text-white', value: propOrDefault( props.attributes.source_label, 'source_label' ), onChange: function(val) { setAttributes( {source_label: val }) } }), el(RichText, { tagName: 'select', id: 'formInput4', className: 'bg-light border-start-0 border-end-0 border-top-0 form-control ps-2 pe-2 rounded-2', value: propOrDefault( props.attributes.source_options, 'source_options' ), onChange: function(val) { setAttributes( {source_options: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', ' ']), el('div', { className: 'col-md-6 mb-5' }, [' ', el(RichText, { tagName: 'h4', className: 'form-label text-white', value: propOrDefault( props.attributes.source_label, 'source_label' ), onChange: function(val) { setAttributes( {source_label: val }) } }), el(RichText, { tagName: 'select', id: 'formInput4', className: 'bg-light border-start-0 border-end-0 border-top-0 form-control ps-2 pe-2 rounded-2', value: propOrDefault( props.attributes.source_options, 'source_options' ), onChange: function(val) { setAttributes( {source_options: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', ' ']), ' ']), ' ', el('div', { className: 'row' }, [el('div', { className: 'col col-12 col-lg-12 mb-10' }, [' ', el(RichText, { tagName: 'h3', className: 'form-label text-white', value: propOrDefault( props.attributes.message_label, 'message_label' ), onChange: function(val) { setAttributes( {message_label: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el(RichText, { tagName: 'textarea', className: 'bg-light border-start-0 border-end-0 border-top-0 form-control ps-2 pe-2 rounded-2', rows: '6', id: 'inputTextarea', placeholder: 'Geben Sie Ihre Nachricht ein...', value: propOrDefault( props.attributes.message_placeholder, 'message_placeholder' ), onChange: function(val) { setAttributes( {message_placeholder: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), el('div', { className: 'col-md-4 pt-3' }, [' ', ' ', el('div', { className: 'form-check form-check-inline form-switch' }, [' ', el('input', { className: 'form-check-input', type: 'checkbox', value: '', id: 'flexCheckDefault', required: 'true' }), ' ', el('label', { className: 'form-check-label', htmlFor: 'flexCheckDefault' }, 'Datenschutzerklärung zustimmen*'), ' ']), ' '])]), el('div', { className: 'mt-5 text-end' }, [' ', el('button', { type: 'submit', className: 'btn btn-success pe-4 ps-4 rounded-2 rounded-pill text-secondary-emphasis', onClick: function(e) { e.preventDefault(); }, href: propOrDefault( props.attributes.submit_button.url, 'submit_button', 'url' ) }, [el(RichText, { tagName: 'span', className: 'align-middle', value: propOrDefault( props.attributes.submit_label, 'submit_label' ), onChange: function(val) { setAttributes( {submit_label: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', props.attributes.submit_icon && !props.attributes.submit_icon.url && propOrDefault( props.attributes.submit_icon.svg, 'submit_icon', 'svg' ) && pgCreateSVG3(RawHTML, {}, pgMergeInlineSVGAttributes(propOrDefault( props.attributes.submit_icon.svg, 'submit_icon', 'svg' ), { className: 'ms-1' })), props.attributes.submit_icon && props.attributes.submit_icon.url && el('img', { className: 'ms-1 ' + (props.attributes.submit_icon.id ? ('wp-image-' + props.attributes.submit_icon.id) : ''), src: propOrDefault( props.attributes.submit_icon.url, 'submit_icon', 'url' ) }), ' ']), ' ']), ' ', ' ']), ' ']), ' ']),                        
                
                    el( InspectorControls, {},
                        [
                            
                        pgMediaImageControl('submit_icon', setAttributes, props, 'full', false, 'Submit Icon', '' ),
                                        
                            el(Panel, {},
                                el(PanelBody, {
                                    title: __('Block properties')
                                }, [
                                    
                                    el(BaseControl, {
                                        help: __( '' ),
                                        label: __( 'Contact Heading' ),
                                    }, [
                                        el(RichText, {
                                            value: props.attributes.contact_heading,
                                            style: {
                                                    border: '1px solid black',
                                                    padding: '6px 8px',
                                                    minHeight: '80px',
                                                    border: '1px solid rgb(117, 117, 117)',
                                                    fontSize: '13px',
                                                    lineHeight: 'normal'
                                                },
                                            onChange: function(val) { setAttributes({contact_heading: val}) },
                                        })
                                    ]),
                                    pgUrlControl('contact_email_link', setAttributes, props, 'Contact Email Link', '', null ),
                                    el(TextControl, {
                                        value: props.attributes.contact_email_label,
                                        help: __( '' ),
                                        label: __( 'Contact Email Label' ),
                                        onChange: function(val) { setAttributes({contact_email_label: val}) },
                                        type: 'text'
                                    }),
                                    el(BaseControl, {
                                        help: __( '' ),
                                        label: __( 'Form Title' ),
                                    }, [
                                        el(RichText, {
                                            value: props.attributes.form_title,
                                            style: {
                                                    border: '1px solid black',
                                                    padding: '6px 8px',
                                                    minHeight: '80px',
                                                    border: '1px solid rgb(117, 117, 117)',
                                                    fontSize: '13px',
                                                    lineHeight: 'normal'
                                                },
                                            onChange: function(val) { setAttributes({form_title: val}) },
                                        })
                                    ]),
                                    el(BaseControl, {
                                        help: __( '' ),
                                        label: __( 'First Name Label' ),
                                    }, [
                                        el(RichText, {
                                            value: props.attributes.first_name_label,
                                            style: {
                                                    border: '1px solid black',
                                                    padding: '6px 8px',
                                                    minHeight: '80px',
                                                    border: '1px solid rgb(117, 117, 117)',
                                                    fontSize: '13px',
                                                    lineHeight: 'normal'
                                                },
                                            onChange: function(val) { setAttributes({first_name_label: val}) },
                                        })
                                    ]),
                                    el(TextControl, {
                                        value: props.attributes.first_name_placeholder,
                                        help: __( '' ),
                                        label: __( 'First Name Placeholder' ),
                                        onChange: function(val) { setAttributes({first_name_placeholder: val}) },
                                        type: 'text'
                                    }),
                                    el(BaseControl, {
                                        help: __( '' ),
                                        label: __( 'Last Name Label' ),
                                    }, [
                                        el(RichText, {
                                            value: props.attributes.last_name_label,
                                            style: {
                                                    border: '1px solid black',
                                                    padding: '6px 8px',
                                                    minHeight: '80px',
                                                    border: '1px solid rgb(117, 117, 117)',
                                                    fontSize: '13px',
                                                    lineHeight: 'normal'
                                                },
                                            onChange: function(val) { setAttributes({last_name_label: val}) },
                                        })
                                    ]),
                                    el(TextareaControl, {
                                        value: props.attributes.last_name_placeholder,
                                        help: __( '' ),
                                        label: __( 'Last Name Placeholder' ),
                                        onChange: function(val) { setAttributes({last_name_placeholder: val}) },
                                    }),
                                    el(BaseControl, {
                                        help: __( '' ),
                                        label: __( 'Email Label' ),
                                    }, [
                                        el(RichText, {
                                            value: props.attributes.email_label,
                                            style: {
                                                    border: '1px solid black',
                                                    padding: '6px 8px',
                                                    minHeight: '80px',
                                                    border: '1px solid rgb(117, 117, 117)',
                                                    fontSize: '13px',
                                                    lineHeight: 'normal'
                                                },
                                            onChange: function(val) { setAttributes({email_label: val}) },
                                        })
                                    ]),
                                    el(TextareaControl, {
                                        value: props.attributes.email_placeholder,
                                        help: __( '' ),
                                        label: __( 'Email Placeholder' ),
                                        onChange: function(val) { setAttributes({email_placeholder: val}) },
                                    }),
                                    el(BaseControl, {
                                        help: __( '' ),
                                        label: __( 'Phone Label' ),
                                    }, [
                                        el(RichText, {
                                            value: props.attributes.phone_label,
                                            style: {
                                                    border: '1px solid black',
                                                    padding: '6px 8px',
                                                    minHeight: '80px',
                                                    border: '1px solid rgb(117, 117, 117)',
                                                    fontSize: '13px',
                                                    lineHeight: 'normal'
                                                },
                                            onChange: function(val) { setAttributes({phone_label: val}) },
                                        })
                                    ]),
                                    el(TextareaControl, {
                                        value: props.attributes.phone_placeholder,
                                        help: __( '' ),
                                        label: __( 'Phone Placeholder' ),
                                        onChange: function(val) { setAttributes({phone_placeholder: val}) },
                                    }),
                                    el(BaseControl, {
                                        help: __( '' ),
                                        label: __( 'Source Label' ),
                                    }, [
                                        el(RichText, {
                                            value: props.attributes.source_label,
                                            style: {
                                                    border: '1px solid black',
                                                    padding: '6px 8px',
                                                    minHeight: '80px',
                                                    border: '1px solid rgb(117, 117, 117)',
                                                    fontSize: '13px',
                                                    lineHeight: 'normal'
                                                },
                                            onChange: function(val) { setAttributes({source_label: val}) },
                                        })
                                    ]),
                                    el(TextControl, {
                                        value: props.attributes.source_options,
                                        help: __( '' ),
                                        label: __( 'Source Options' ),
                                        onChange: function(val) { setAttributes({source_options: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.message_label,
                                        help: __( '' ),
                                        label: __( 'Message Label' ),
                                        onChange: function(val) { setAttributes({message_label: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.message_placeholder,
                                        help: __( '' ),
                                        label: __( 'Message Placeholder' ),
                                        onChange: function(val) { setAttributes({message_placeholder: val}) },
                                        type: 'text'
                                    }),
                                    pgUrlControl('submit_button', setAttributes, props, 'Submit Button', '', null ),
                                    el(TextControl, {
                                        value: props.attributes.submit_label,
                                        help: __( '' ),
                                        label: __( 'Submit Label' ),
                                        onChange: function(val) { setAttributes({submit_label: val}) },
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
