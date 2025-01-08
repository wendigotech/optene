<section <?php if(empty($_GET['context']) || $_GET['context'] !== 'edit') echo get_block_wrapper_attributes( array('class' => "bg-secondary pb-5 pt-5 text-center", 'id' => "contact", 'title' => "Contact", ) ); else echo 'data-wp-block-props="true"'; ?>>
    <div class="container pb-5 pt-5">
        <h3 class="fw-bold h2 mb-4 text-white"><?php echo PG_Blocks_v3::getAttribute( $args, 'contact_heading' ) ?></h3><a href="<?php echo (!empty($_GET['context']) && $_GET['context'] === 'edit') ? 'javascript:void()' : PG_Blocks_v3::getLinkUrl( $args, 'contact_email_link' ) ?>" class="btn btn-success pb-2 pe-4 ps-4 pt-2"><?php echo PG_Blocks_v3::getAttribute( $args, 'contact_email_label' ) ?></a>
    </div>
    <div class="container mx-auto px-5 pt-10 pb-10 text-light">
        <h2 class="font-bold fw-bold h3 mb-5 text-center text-lg text-white"><?php echo PG_Blocks_v3::getAttribute( $args, 'form_title' ) ?></h2>
        <?php $mailer = new PG_Simple_Form_Mailer(); ?>
        <?php $mailer->process( array(
                'form_id' => 'contact_form_mailer_id',
                'send_to_email' => true,
                'save_to_post_type' => true,
                'post_type' => 'post',
                'captcha' => true,
                'captcha_key' => get_theme_mod( 'captcha_key' ),
                'captcha_secret' => get_theme_mod( 'captcha_secret' )
        ) ); ?>
        <?php if( !$mailer->processed || $mailer->error) : ?>
            <form id="contact_form_mailer_id" action="<?php echo '#contact_form_mailer_id'; ?>" method="post" onsubmit="event.stopImmediatePropagation();event.stopPropagation();">
                <div class="row">
                    <div class="mb-5 col-md-6">
                        <h4 class="form-label text-white"><?php echo PG_Blocks_v3::getAttribute( $args, 'first_name_label' ) ?></h4>
                        <input type="text" class="bg-light border-start-0 border-end-0 border-top-0 form-control ps-2 pe-2 rounded-2" id="inputFirstName" placeholder="Geben Sie Ihren Vornamen ein..." required="true" name="contact_form_mailer_id_1" value="<?php echo ( isset( $_POST['contact_form_mailer_id_1'] ) ? $_POST['contact_form_mailer_id_1'] : '' ); ?>"><?php echo PG_Blocks_v3::getAttribute( $args, 'first_name_placeholder' ) ?>
                    </div>
                    <div class="mb-5 col-md-6">
                        <h4 class="form-label text-white"><?php echo PG_Blocks_v3::getAttribute( $args, 'last_name_label' ) ?></h4>
                        <input type="text" class="bg-light border-start-0 border-end-0 border-top-0 form-control ps-2 pe-2 rounded-2" id="inputLastName" placeholder="Geben Sie Ihren Nachnamen ein..." required="true" name="contact_form_mailer_id_2" value="<?php echo ( isset( $_POST['contact_form_mailer_id_2'] ) ? $_POST['contact_form_mailer_id_2'] : '' ); ?>"><?php echo PG_Blocks_v3::getAttribute( $args, 'last_name_placeholder' ) ?>
                    </div>
                </div>
                <div class="row">
                    <div class="mb-5 col-md-6">
                        <h4 class="form-label text-white"><?php echo PG_Blocks_v3::getAttribute( $args, 'email_label' ) ?></h4>
                        <input type="email" class="bg-light border-end-0 border-start-0 border-top-0 form-control pe-2 ps-2 rounded-2" id="inputEmail" placeholder="Geben Sie Ihre E-Mail-Adresse ein..." required="true" name="contact_form_mailer_id_3" value="<?php echo ( isset( $_POST['contact_form_mailer_id_3'] ) ? $_POST['contact_form_mailer_id_3'] : '' ); ?>"><?php echo PG_Blocks_v3::getAttribute( $args, 'email_placeholder' ) ?>
                    </div>
                    <div class="mb-5 col-md-6"> 
                        <h4 class="form-label text-white"><?php echo PG_Blocks_v3::getAttribute( $args, 'phone_label' ) ?></h4> 
                        <input type="tel" class="bg-light border-start-0 border-end-0 border-top-0 form-control ps-2 pe-2 rounded-2" id="inputPhone" placeholder="Geben Sie Ihre Telefonnummer ein..." required="true" name="contact_form_mailer_id_4" value="<?php echo ( isset( $_POST['contact_form_mailer_id_4'] ) ? $_POST['contact_form_mailer_id_4'] : '' ); ?>"><?php echo PG_Blocks_v3::getAttribute( $args, 'phone_placeholder' ) ?> 
                    </div>
                    <div class="col-lg-6 col-md-12 mb-5">
                        <h4 class="form-label text-white"><?php echo PG_Blocks_v3::getAttribute( $args, 'source_label' ) ?></h4>
                        <select id="formInput4" class="bg-light border-start-0 border-end-0 border-top-0 form-control ps-2 pe-2 rounded-2" name="contact_form_mailer_id_5">
                            <?php echo PG_Blocks_v3::getAttribute( $args, 'source_options' ) ?>
                        </select>
                    </div>
                    <div class="col-md-6 mb-5">
                        <h4 class="form-label text-white"><?php echo PG_Blocks_v3::getAttribute( $args, 'source_label' ) ?></h4>
                        <select id="formInput4" class="bg-light border-start-0 border-end-0 border-top-0 form-control ps-2 pe-2 rounded-2" name="contact_form_mailer_id_6">
                            <?php echo PG_Blocks_v3::getAttribute( $args, 'source_options' ) ?>
                        </select>
                    </div>
                </div>
                <div class="row">
                    <div class="col col-12 col-lg-12 mb-10">
                        <h3 class="form-label text-white"><?php echo PG_Blocks_v3::getAttribute( $args, 'message_label' ) ?></h3>
                        <textarea class="bg-light border-start-0 border-end-0 border-top-0 form-control ps-2 pe-2 rounded-2" rows="6" id="inputTextarea" placeholder="Geben Sie Ihre Nachricht ein..." name="contact_form_mailer_id_7"><?php echo PG_Blocks_v3::getAttribute( $args, 'message_placeholder' ) ?></textarea>
                    </div>
                    <div class="col-md-4"> 
                        <div class="form-check form-check-inline form-switch">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" required="true" name="contact_form_mailer_id_8" <?php echo ( isset( $_POST['contact_form_mailer_id_8'] ) ? 'checked' : '' ); ?>>
                            <label class="form-check-label" for="flexCheckDefault">
                                <?php _e( 'Datenschutzerklärung zustimmen*', 'opto_energy' ); ?>
                            </label>
                        </div>
                    </div>
                </div>
                <div class="mt-5 text-end">
                    <button type="submit" class="btn btn-success pe-4 ps-4 rounded-2 rounded-pill text-secondary-emphasis" href="<?php echo (!empty($_GET['context']) && $_GET['context'] === 'edit') ? 'javascript:void()' : PG_Blocks_v3::getLinkUrl( $args, 'submit_button' ) ?>">
                        <span class="align-middle"><?php echo PG_Blocks_v3::getAttribute( $args, 'submit_label' ) ?></span>
                        <?php if ( !PG_Blocks_v3::getImageUrl( $args, 'submit_icon', 'full', false ) && PG_Blocks_v3::getImageSVG( $args, 'submit_icon' ) ) : ?>
                            <?php echo PG_Blocks_v3::mergeInlineSVGAttributes( PG_Blocks_v3::getImageSVG( $args, 'submit_icon' ), array( 'class' => 'ms-1' ) ) ?>
                        <?php endif; ?>
                        <?php if ( PG_Blocks_v3::getImageUrl( $args, 'submit_icon', 'full', false ) ) : ?>
                            <img src="<?php echo PG_Blocks_v3::getImageUrl( $args, 'submit_icon', 'full' ); ?>" class="ms-1 <?php echo (PG_Blocks_v3::getImageField( $args, 'submit_icon', 'id', true) ? ('wp-image-' . PG_Blocks_v3::getImageField( $args, 'submit_icon', 'id', true)) : '') ?>"/>
                        <?php endif; ?>
                    </button>
                </div>
                <div class="g-recaptcha" style="margin:10px 0;" data-sitekey="<?php echo get_theme_mod( 'captcha_key' ) ?>"></div>
                <input type="hidden" name="contact_form_mailer_id" value="1"/>
            </form>
        <?php endif; ?>
        <?php if( $mailer->processed ) : ?>
            <?php echo $mailer->message; ?>
            <?php if( !$mailer->error ) echo $mailer->html; ?>
        <?php endif; ?>
    </div>
</section>