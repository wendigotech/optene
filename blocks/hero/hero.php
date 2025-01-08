<section <?php if(empty($_GET['context']) || $_GET['context'] !== 'edit') echo get_block_wrapper_attributes( array('class' => "flex-column hero-block min-vh-100 pb-5 position-relative poster text-light", 'id' => "hero", ) ); else echo 'data-wp-block-props="true"'; ?>>
    <video id="heroVideo" class="bg-success video-background" autoplay loop muted poster="<?php echo get_template_directory_uri(); ?>/img/MOSHED-2024-12-6-20-49-13.jpg">
        <source src="<?php echo get_template_directory_uri(); ?>/img/Energiekreis-25.mp4" type="video/mp4">
        <?php _e( 'Your browser does not support the video tag.', 'opto_energy' ); ?>
    </video>
    <nav class="bg-opacity-10 navbar navbar-dark navbar-expand-lg  pb-3 pb-lg-1 pt-3 pt-lg-0">
        <div class="container flex-wrap"><span></span>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler2" aria-controls="navbarToggler2" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse justify-content-center navbar-collapse  w-100" id="navbarToggler2">
                <ul class="align-items-start d-flex fa-ul h5 navbar-nav">
                    <li class="nav-item"><a class="nav-link p-lg-4" href="<?php echo (!empty($_GET['context']) && $_GET['context'] === 'edit') ? 'javascript:void()' : PG_Blocks_v3::getLinkUrl( $args, 'story_link' ) ?>"><strong><?php _e( 'Story', 'opto_energy' ); ?></strong></a>
                    </li>
                    <li class="nav-item"><a class="nav-link p-lg-4" href="<?php echo (!empty($_GET['context']) && $_GET['context'] === 'edit') ? 'javascript:void()' : PG_Blocks_v3::getLinkUrl( $args, 'register_link' ) ?>"><strong><?php _e( 'Registrieren', 'opto_energy' ); ?></strong></a>
                    </li>
                    <li class="nav-item"><a class="nav-link p-lg-4" href="<?php echo (!empty($_GET['context']) && $_GET['context'] === 'edit') ? 'javascript:void()' : PG_Blocks_v3::getLinkUrl( $args, 'showroom_link' ) ?>"><strong><?php _e( 'Showroom', 'opto_energy' ); ?></strong></a>
                    </li>
                    <li class="nav-item"><a class="nav-link p-lg-4" href="<?php echo (!empty($_GET['context']) && $_GET['context'] === 'edit') ? 'javascript:void()' : PG_Blocks_v3::getLinkUrl( $args, 'news_link' ) ?>"><strong><?php _e( 'Aktuelles', 'opto_energy' ); ?></strong></a>
                    </li>
                    <li class="nav-item"> <a class="nav-link p-lg-4" href="<?php echo (!empty($_GET['context']) && $_GET['context'] === 'edit') ? 'javascript:void()' : PG_Blocks_v3::getLinkUrl( $args, 'traders_link' ) ?>" target="_blank"><strong><?php _e( 'Händlerportal', 'opto_energy' ); ?> </strong><i class="fa-external-link-square-alt fas"></i></a> 
                    </li>
                    <li class="nav-item"><a class="nav-link p-lg-4" href="<?php echo (!empty($_GET['context']) && $_GET['context'] === 'edit') ? 'javascript:void()' : PG_Blocks_v3::getLinkUrl( $args, 'contact_link' ) ?>"><strong><?php _e( 'Kontakt', 'opto_energy' ); ?></strong></a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <div class="align-content-center align-items-center container d-flex hero-center justify-content-center  test text-center">
        <div class="align-content-center align-items-center gy-4 justify-content-center pb-5 pt-5 row">
            <div class="align-items-center col-lg-7 d-inline-flex flex-column justify-content-center ">
                <?php if ( !PG_Blocks_v3::getImageSVG( $args, 'logo_image', false) && PG_Blocks_v3::getImageUrl( $args, 'logo_image', 'full' ) ) : ?>
                    <img src="<?php echo PG_Blocks_v3::getImageUrl( $args, 'logo_image', 'full' ) ?>" class="<?php echo (PG_Blocks_v3::getImageField( $args, 'logo_image', 'id', true) ? ('wp-image-' . PG_Blocks_v3::getImageField( $args, 'logo_image', 'id', true)) : '') ?> w-50" alt="<?php echo PG_Blocks_v3::getImageField( $args, 'logo_image', 'alt', true); ?>">
                <?php endif; ?>
                <?php if ( PG_Blocks_v3::getImageSVG( $args, 'logo_image', false) ) : ?>
                    <?php echo PG_Blocks_v3::mergeInlineSVGAttributes( PG_Blocks_v3::getImageSVG( $args, 'logo_image' ), array( 'class' => 'w-50' ) ) ?>
                <?php endif; ?>
                <h1 class="display-4 fw-bold mb-3 text-white"><?php echo PG_Blocks_v3::getAttribute( $args, 'header_text' ) ?></h1>
                <p class="lead mb-4 pe-sm-5 ps-sm-5 text-start"><?php echo PG_Blocks_v3::getAttribute( $args, 'paragraph_text' ) ?></p><a href="<?php echo (!empty($_GET['context']) && $_GET['context'] === 'edit') ? 'javascript:void()' : PG_Blocks_v3::getLinkUrl( $args, 'hero_button_link' ) ?>" class="btn btn-lg btn-outline-success pb-2 pe-4 ps-4 pt-2"><?php echo PG_Blocks_v3::getAttribute( $args, 'hero_button_label' ) ?></a>
                <section class="bg-light-100 py-10"></section>
            </div>
        </div>
    </div>
</section>