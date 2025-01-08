<section <?php if(empty($_GET['context']) || $_GET['context'] !== 'edit') echo get_block_wrapper_attributes( array('class' => "bg-success  pt-5 text-center", 'id' => "showroom", 'title' => "Showroom", ) ); else echo 'data-wp-block-props="true"'; ?>>
    <div class="container pb-4 pt-4">
        <div class="col-lg-9 mb-5 me-auto ms-auto">
            <h3 class="h4 mb-3 text-light text-uppercase"><?php echo PG_Blocks_v3::getAttribute( $args, 'section_subtitle' ) ?></h3>
            <h2 class="display-3 fw-bold text-primary-emphasis"><?php echo PG_Blocks_v3::getAttribute( $args, 'section_title' ) ?></h2>
            <p class="fs-3 fw-light text-primary-emphasis text-start"><?php echo PG_Blocks_v3::getAttribute( $args, 'section_description' ) ?></p>
        </div>
    </div>
    <section class="bg-black showroom">
        <section class="banner-section min-vh-100" data-pg-ia-scene='{"smooth":"0.5s","s":"onLeave","d":"50%","pin":"true","l":[{"t":".banner-overlay","a":{"l":[{"t":"","l":[{"t":"tween","p":0,"d":0.5,"l":{"autoAlpha":0,"scale":20}},{"t":"set","p":0.3,"d":0,"l":{"class.add":"in-scroll"}}]}]}},{"t":"$nav","a":"fadeIn","p":"time","s":"100","t_d":"0.3","sc_dir":"down","rev":"true"}],"dir":"v"}'>
            <?php if ( !PG_Blocks_v3::getImageSVG( $args, 'banner_image', false) && PG_Blocks_v3::getImageUrl( $args, 'banner_image', 'full' ) ) : ?>
                <img src="<?php echo PG_Blocks_v3::getImageUrl( $args, 'banner_image', 'full' ) ?>" class="<?php echo (PG_Blocks_v3::getImageField( $args, 'banner_image', 'id', true) ? ('wp-image-' . PG_Blocks_v3::getImageField( $args, 'banner_image', 'id', true)) : '') ?> banner-image image-fit-center-top" alt="<?php echo PG_Blocks_v3::getImageField( $args, 'banner_image', 'alt', true); ?>" width="1038" height="743"/>
            <?php endif; ?>
            <?php if ( PG_Blocks_v3::getImageSVG( $args, 'banner_image', false) ) : ?>
                <?php echo PG_Blocks_v3::mergeInlineSVGAttributes( PG_Blocks_v3::getImageSVG( $args, 'banner_image' ), array( 'class' => 'banner-image image-fit-center-top' ) ) ?>
            <?php endif; ?>
            <div class="banner-overlay d-flex flex-column h-100 min-vh-100 position-relative">
                <div class="bg-success flex-fill"></div>
                <?php if ( !PG_Blocks_v3::getImageUrl( $args, 'banner_icon', 'full', false ) && PG_Blocks_v3::getImageSVG( $args, 'banner_icon' ) ) : ?>
                    <?php echo PG_Blocks_v3::mergeInlineSVGAttributes( PG_Blocks_v3::getImageSVG( $args, 'banner_icon' ), array( 'style' => 'fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:square;stroke-miterlimit:2', 'class' => 'bg-primary img-fluid w-100' ) ) ?>
                <?php endif; ?>
                <?php if ( PG_Blocks_v3::getImageUrl( $args, 'banner_icon', 'full', false ) ) : ?>
                    <img style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:square;stroke-miterlimit:2" src="<?php echo PG_Blocks_v3::getImageUrl( $args, 'banner_icon', 'full' ); ?>" class="bg-primary img-fluid w-100 <?php echo (PG_Blocks_v3::getImageField( $args, 'banner_icon', 'id', true) ? ('wp-image-' . PG_Blocks_v3::getImageField( $args, 'banner_icon', 'id', true)) : '') ?>"/>
                <?php endif; ?>
                <div class="bg-success flex-fill"></div>
            </div>
        </section>
        <section class="py-5 text-center">
            <div class="container py-5">
                <div class="row">
                    <div class="col-lg-8 mx-auto">
                        <p class="h4 text-start text-white"><?php echo PG_Blocks_v3::getAttribute( $args, 'product_details' ) ?></p>
                    </div>
                </div>
            </div>
        </section>
        <section class="event-section position-relative py-5" data-pg-ia-scene='{"s":"onEnter","l":[{"t":".floating-title","a":{"l":[{"t":"","l":[{"t":"tween","p":0,"d":1,"l":{"y":"-50vh"}}]}]}},{"t":".event-details","a":"fadeInUp","p":"time","s":"20","t_d":"0.5"}],"dir":"v"}'>
            <h2 class="display-3 floating-title mb-5"><?php echo PG_Blocks_v3::getAttribute( $args, 'event_title' ) ?></h2>
            <div class="container py-5">
                <div class="align-items-center row">
                    <div class="col-lg-7 col-md-10 event-details mb-5 order-lg-2" data-pg-ia-hide>
                        <p class="fs-6 text-start text-white"><?php echo PG_Blocks_v3::getAttribute( $args, 'event_description' ) ?></p>
                    </div>
                    <div class="col-lg-5 order-lg-1">
                        <div href="<?php echo (!empty($_GET['context']) && $_GET['context'] === 'edit') ? 'javascript:void()' : PG_Blocks_v3::getLinkUrl( $args, 'event_main_link' ) ?>" class="d-block event-main-link p-4 text-start"> 
                            <?php if ( !PG_Blocks_v3::getImageSVG( $args, 'event_main_image', false) && PG_Blocks_v3::getImageUrl( $args, 'event_main_image', 'full' ) ) : ?>
                                <img src="<?php echo PG_Blocks_v3::getImageUrl( $args, 'event_main_image', 'full' ) ?>" class="<?php echo (PG_Blocks_v3::getImageField( $args, 'event_main_image', 'id', true) ? ('wp-image-' . PG_Blocks_v3::getImageField( $args, 'event_main_image', 'id', true)) : '') ?> img-fluid mb-4" alt="<?php echo PG_Blocks_v3::getImageField( $args, 'event_main_image', 'alt', true); ?>"/>
                            <?php endif; ?>
                            <?php if ( PG_Blocks_v3::getImageSVG( $args, 'event_main_image', false) ) : ?>
                                <?php echo PG_Blocks_v3::mergeInlineSVGAttributes( PG_Blocks_v3::getImageSVG( $args, 'event_main_image' ), array( 'class' => 'img-fluid mb-4' ) ) ?>
                            <?php endif; ?> 
                            <h4 class="display-4"><?php echo PG_Blocks_v3::getAttribute( $args, 'event_main_title' ) ?></h4> <span><?php echo PG_Blocks_v3::getAttribute( $args, 'event_main_subtitle' ) ?></span> 
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-fluid h-scrolling-block mb-lg-5 overflow-hidden pb-lg-5 pt-lg-5" data-pg-ia-scene='{"s":"onEnter","l":[{"t":".flex-nowrap","a":{"l":[{"t":"","l":[{"t":"tween","p":0,"d":1,"l":{"x":"-100vh"}}]}]}}],"dir":"v"}'>
                <div class="flex-nowrap gx-0 row">
                    <div class="col-3">
                        <?php if ( !PG_Blocks_v3::getImageSVG( $args, 'scrolling_image_1', false) && PG_Blocks_v3::getImageUrl( $args, 'scrolling_image_1', 'full' ) ) : ?>
                            <img src="<?php echo PG_Blocks_v3::getImageUrl( $args, 'scrolling_image_1', 'full' ) ?>" class="<?php echo (PG_Blocks_v3::getImageField( $args, 'scrolling_image_1', 'id', true) ? ('wp-image-' . PG_Blocks_v3::getImageField( $args, 'scrolling_image_1', 'id', true)) : '') ?> img-fluid" alt="<?php echo PG_Blocks_v3::getImageField( $args, 'scrolling_image_1', 'alt', true); ?>"/>
                        <?php endif; ?>
                        <?php if ( PG_Blocks_v3::getImageSVG( $args, 'scrolling_image_1', false) ) : ?>
                            <?php echo PG_Blocks_v3::mergeInlineSVGAttributes( PG_Blocks_v3::getImageSVG( $args, 'scrolling_image_1' ), array( 'class' => 'img-fluid' ) ) ?>
                        <?php endif; ?>
                    </div>
                    <div class="col-3">
                        <?php if ( !PG_Blocks_v3::getImageSVG( $args, 'scrolling_image_2', false) && PG_Blocks_v3::getImageUrl( $args, 'scrolling_image_2', 'full' ) ) : ?>
                            <img src="<?php echo PG_Blocks_v3::getImageUrl( $args, 'scrolling_image_2', 'full' ) ?>" class="<?php echo (PG_Blocks_v3::getImageField( $args, 'scrolling_image_2', 'id', true) ? ('wp-image-' . PG_Blocks_v3::getImageField( $args, 'scrolling_image_2', 'id', true)) : '') ?> img-fluid" alt="<?php echo PG_Blocks_v3::getImageField( $args, 'scrolling_image_2', 'alt', true); ?>"/>
                        <?php endif; ?>
                        <?php if ( PG_Blocks_v3::getImageSVG( $args, 'scrolling_image_2', false) ) : ?>
                            <?php echo PG_Blocks_v3::mergeInlineSVGAttributes( PG_Blocks_v3::getImageSVG( $args, 'scrolling_image_2' ), array( 'class' => 'img-fluid' ) ) ?>
                        <?php endif; ?>
                    </div>
                    <div class="col-3">
                        <?php if ( !PG_Blocks_v3::getImageSVG( $args, 'scrolling_image_3', false) && PG_Blocks_v3::getImageUrl( $args, 'scrolling_image_3', 'full' ) ) : ?>
                            <img src="<?php echo PG_Blocks_v3::getImageUrl( $args, 'scrolling_image_3', 'full' ) ?>" alt="<?php echo PG_Blocks_v3::getImageField( $args, 'scrolling_image_3', 'alt', true); ?>" class="<?php echo (PG_Blocks_v3::getImageField( $args, 'scrolling_image_3', 'id', true) ? ('wp-image-' . PG_Blocks_v3::getImageField( $args, 'scrolling_image_3', 'id', true)) : '') ?> img-fluid"/>
                        <?php endif; ?>
                        <?php if ( PG_Blocks_v3::getImageSVG( $args, 'scrolling_image_3', false) ) : ?>
                            <?php echo PG_Blocks_v3::mergeInlineSVGAttributes( PG_Blocks_v3::getImageSVG( $args, 'scrolling_image_3' ), array( 'class' => 'img-fluid' ) ) ?>
                        <?php endif; ?>
                    </div>
                    <div class="col-3">
                        <?php if ( !PG_Blocks_v3::getImageSVG( $args, 'scrolling_image_4', false) && PG_Blocks_v3::getImageUrl( $args, 'scrolling_image_4', 'full' ) ) : ?>
                            <img src="<?php echo PG_Blocks_v3::getImageUrl( $args, 'scrolling_image_4', 'full' ) ?>" class="<?php echo (PG_Blocks_v3::getImageField( $args, 'scrolling_image_4', 'id', true) ? ('wp-image-' . PG_Blocks_v3::getImageField( $args, 'scrolling_image_4', 'id', true)) : '') ?> img-fluid" alt="<?php echo PG_Blocks_v3::getImageField( $args, 'scrolling_image_4', 'alt', true); ?>"/>
                        <?php endif; ?>
                        <?php if ( PG_Blocks_v3::getImageSVG( $args, 'scrolling_image_4', false) ) : ?>
                            <?php echo PG_Blocks_v3::mergeInlineSVGAttributes( PG_Blocks_v3::getImageSVG( $args, 'scrolling_image_4' ), array( 'class' => 'img-fluid' ) ) ?>
                        <?php endif; ?>
                    </div>
                    <div class="col-3">
                        <?php if ( !PG_Blocks_v3::getImageSVG( $args, 'scrolling_image_5', false) && PG_Blocks_v3::getImageUrl( $args, 'scrolling_image_5', 'full' ) ) : ?>
                            <img src="<?php echo PG_Blocks_v3::getImageUrl( $args, 'scrolling_image_5', 'full' ) ?>" class="<?php echo (PG_Blocks_v3::getImageField( $args, 'scrolling_image_5', 'id', true) ? ('wp-image-' . PG_Blocks_v3::getImageField( $args, 'scrolling_image_5', 'id', true)) : '') ?> img-fluid" alt="<?php echo PG_Blocks_v3::getImageField( $args, 'scrolling_image_5', 'alt', true); ?>"/>
                        <?php endif; ?>
                        <?php if ( PG_Blocks_v3::getImageSVG( $args, 'scrolling_image_5', false) ) : ?>
                            <?php echo PG_Blocks_v3::mergeInlineSVGAttributes( PG_Blocks_v3::getImageSVG( $args, 'scrolling_image_5' ), array( 'class' => 'img-fluid' ) ) ?>
                        <?php endif; ?>
                    </div>
                    <div class="col-3">
                        <?php if ( !PG_Blocks_v3::getImageSVG( $args, 'scrolling_image_6', false) && PG_Blocks_v3::getImageUrl( $args, 'scrolling_image_6', 'full' ) ) : ?>
                            <img src="<?php echo PG_Blocks_v3::getImageUrl( $args, 'scrolling_image_6', 'full' ) ?>" class="<?php echo (PG_Blocks_v3::getImageField( $args, 'scrolling_image_6', 'id', true) ? ('wp-image-' . PG_Blocks_v3::getImageField( $args, 'scrolling_image_6', 'id', true)) : '') ?> img-fluid" alt="<?php echo PG_Blocks_v3::getImageField( $args, 'scrolling_image_6', 'alt', true); ?>"/>
                        <?php endif; ?>
                        <?php if ( PG_Blocks_v3::getImageSVG( $args, 'scrolling_image_6', false) ) : ?>
                            <?php echo PG_Blocks_v3::mergeInlineSVGAttributes( PG_Blocks_v3::getImageSVG( $args, 'scrolling_image_6' ), array( 'class' => 'img-fluid' ) ) ?>
                        <?php endif; ?>
                    </div>
                    <div class="col-3">
                        <?php if ( !PG_Blocks_v3::getImageSVG( $args, 'scrolling_image_7', false) && PG_Blocks_v3::getImageUrl( $args, 'scrolling_image_7', 'full' ) ) : ?>
                            <img src="<?php echo PG_Blocks_v3::getImageUrl( $args, 'scrolling_image_7', 'full' ) ?>" class="<?php echo (PG_Blocks_v3::getImageField( $args, 'scrolling_image_7', 'id', true) ? ('wp-image-' . PG_Blocks_v3::getImageField( $args, 'scrolling_image_7', 'id', true)) : '') ?> img-fluid" alt="<?php echo PG_Blocks_v3::getImageField( $args, 'scrolling_image_7', 'alt', true); ?>"/>
                        <?php endif; ?>
                        <?php if ( PG_Blocks_v3::getImageSVG( $args, 'scrolling_image_7', false) ) : ?>
                            <?php echo PG_Blocks_v3::mergeInlineSVGAttributes( PG_Blocks_v3::getImageSVG( $args, 'scrolling_image_7' ), array( 'class' => 'img-fluid' ) ) ?>
                        <?php endif; ?>
                    </div>
                    <div class="col-3">
                        <?php if ( !PG_Blocks_v3::getImageSVG( $args, 'scrolling_image_8', false) && PG_Blocks_v3::getImageUrl( $args, 'scrolling_image_8', 'full' ) ) : ?>
                            <img src="<?php echo PG_Blocks_v3::getImageUrl( $args, 'scrolling_image_8', 'full' ) ?>" class="<?php echo (PG_Blocks_v3::getImageField( $args, 'scrolling_image_8', 'id', true) ? ('wp-image-' . PG_Blocks_v3::getImageField( $args, 'scrolling_image_8', 'id', true)) : '') ?> img-fluid" alt="<?php echo PG_Blocks_v3::getImageField( $args, 'scrolling_image_8', 'alt', true); ?>"/>
                        <?php endif; ?>
                        <?php if ( PG_Blocks_v3::getImageSVG( $args, 'scrolling_image_8', false) ) : ?>
                            <?php echo PG_Blocks_v3::mergeInlineSVGAttributes( PG_Blocks_v3::getImageSVG( $args, 'scrolling_image_8' ), array( 'class' => 'img-fluid' ) ) ?>
                        <?php endif; ?>
                    </div>
                </div>
            </div>
        </section>
        <section class="event-section position-relative py-5 text-end" data-pg-ia-scene='{"s":"onEnter","l":[{"t":".event-details","a":"fadeInUp","p":"time","s":"20","t_d":"0.5"}],"dir":"v"}'>
            <div class="container py-5">
                <div class="align-items-center row">
                    <div class="col-lg-7 col-md-10 event-details mb-5 text-start" data-pg-ia-hide>
                        <p class="fs-6 text-white"><?php echo PG_Blocks_v3::getAttribute( $args, 'event_description_2' ) ?></p>
                    </div>
                    <div class="col-lg-5">
                        <div href="<?php echo (!empty($_GET['context']) && $_GET['context'] === 'edit') ? 'javascript:void()' : PG_Blocks_v3::getLinkUrl( $args, 'event_main_link_2' ) ?>" class="d-block event-main-link p-4"> 
                            <?php if ( !PG_Blocks_v3::getImageSVG( $args, 'event_main_image_2', false) && PG_Blocks_v3::getImageUrl( $args, 'event_main_image_2', 'full' ) ) : ?>
                                <img src="<?php echo PG_Blocks_v3::getImageUrl( $args, 'event_main_image_2', 'full' ) ?>" class="<?php echo (PG_Blocks_v3::getImageField( $args, 'event_main_image_2', 'id', true) ? ('wp-image-' . PG_Blocks_v3::getImageField( $args, 'event_main_image_2', 'id', true)) : '') ?> img-fluid mb-4" alt="<?php echo PG_Blocks_v3::getImageField( $args, 'event_main_image_2', 'alt', true); ?>"/>
                            <?php endif; ?>
                            <?php if ( PG_Blocks_v3::getImageSVG( $args, 'event_main_image_2', false) ) : ?>
                                <?php echo PG_Blocks_v3::mergeInlineSVGAttributes( PG_Blocks_v3::getImageSVG( $args, 'event_main_image_2' ), array( 'class' => 'img-fluid mb-4' ) ) ?>
                            <?php endif; ?> 
                            <h4 class="display-4"><?php echo PG_Blocks_v3::getAttribute( $args, 'event_main_title_2' ) ?></h4> <span><?php echo PG_Blocks_v3::getAttribute( $args, 'event_main_subtitle_2' ) ?></span> 
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-fluid h-scrolling-block mb-lg-5 overflow-hidden pb-lg-5 pt-lg-5 py-lg-5" data-pg-ia-scene='{"l":[{"t":".flex-nowrap","a":{"l":[{"t":"","l":[{"t":"tween","p":0,"d":1,"l":{"x":"100vh"}}]}]}}],"s":"onEnter"}'>
                <div class="flex-nowrap gx-0 justify-content-end row">
                    <div class="col-3">
                        <?php if ( !PG_Blocks_v3::getImageSVG( $args, 'scrolling_image_9', false) && PG_Blocks_v3::getImageUrl( $args, 'scrolling_image_9', 'full' ) ) : ?>
                            <img src="<?php echo PG_Blocks_v3::getImageUrl( $args, 'scrolling_image_9', 'full' ) ?>" class="<?php echo (PG_Blocks_v3::getImageField( $args, 'scrolling_image_9', 'id', true) ? ('wp-image-' . PG_Blocks_v3::getImageField( $args, 'scrolling_image_9', 'id', true)) : '') ?> img-fluid" alt="<?php echo PG_Blocks_v3::getImageField( $args, 'scrolling_image_9', 'alt', true); ?>"/>
                        <?php endif; ?>
                        <?php if ( PG_Blocks_v3::getImageSVG( $args, 'scrolling_image_9', false) ) : ?>
                            <?php echo PG_Blocks_v3::mergeInlineSVGAttributes( PG_Blocks_v3::getImageSVG( $args, 'scrolling_image_9' ), array( 'class' => 'img-fluid' ) ) ?>
                        <?php endif; ?>
                    </div>
                    <div class="col-3">
                        <?php if ( !PG_Blocks_v3::getImageSVG( $args, 'scrolling_image_10', false) && PG_Blocks_v3::getImageUrl( $args, 'scrolling_image_10', 'full' ) ) : ?>
                            <img src="<?php echo PG_Blocks_v3::getImageUrl( $args, 'scrolling_image_10', 'full' ) ?>" class="<?php echo (PG_Blocks_v3::getImageField( $args, 'scrolling_image_10', 'id', true) ? ('wp-image-' . PG_Blocks_v3::getImageField( $args, 'scrolling_image_10', 'id', true)) : '') ?> img-fluid" alt="<?php echo PG_Blocks_v3::getImageField( $args, 'scrolling_image_10', 'alt', true); ?>"/>
                        <?php endif; ?>
                        <?php if ( PG_Blocks_v3::getImageSVG( $args, 'scrolling_image_10', false) ) : ?>
                            <?php echo PG_Blocks_v3::mergeInlineSVGAttributes( PG_Blocks_v3::getImageSVG( $args, 'scrolling_image_10' ), array( 'class' => 'img-fluid' ) ) ?>
                        <?php endif; ?>
                    </div>
                    <div class="col-3">
                        <?php if ( !PG_Blocks_v3::getImageSVG( $args, 'scrolling_image_11', false) && PG_Blocks_v3::getImageUrl( $args, 'scrolling_image_11', 'full' ) ) : ?>
                            <img src="<?php echo PG_Blocks_v3::getImageUrl( $args, 'scrolling_image_11', 'full' ) ?>" class="<?php echo (PG_Blocks_v3::getImageField( $args, 'scrolling_image_11', 'id', true) ? ('wp-image-' . PG_Blocks_v3::getImageField( $args, 'scrolling_image_11', 'id', true)) : '') ?> img-fluid" alt="<?php echo PG_Blocks_v3::getImageField( $args, 'scrolling_image_11', 'alt', true); ?>"/>
                        <?php endif; ?>
                        <?php if ( PG_Blocks_v3::getImageSVG( $args, 'scrolling_image_11', false) ) : ?>
                            <?php echo PG_Blocks_v3::mergeInlineSVGAttributes( PG_Blocks_v3::getImageSVG( $args, 'scrolling_image_11' ), array( 'class' => 'img-fluid' ) ) ?>
                        <?php endif; ?>
                    </div>
                    <div class="col-3">
                        <?php if ( !PG_Blocks_v3::getImageSVG( $args, 'scrolling_image_12', false) && PG_Blocks_v3::getImageUrl( $args, 'scrolling_image_12', 'full' ) ) : ?>
                            <img src="<?php echo PG_Blocks_v3::getImageUrl( $args, 'scrolling_image_12', 'full' ) ?>" class="<?php echo (PG_Blocks_v3::getImageField( $args, 'scrolling_image_12', 'id', true) ? ('wp-image-' . PG_Blocks_v3::getImageField( $args, 'scrolling_image_12', 'id', true)) : '') ?> img-fluid" alt="<?php echo PG_Blocks_v3::getImageField( $args, 'scrolling_image_12', 'alt', true); ?>"/>
                        <?php endif; ?>
                        <?php if ( PG_Blocks_v3::getImageSVG( $args, 'scrolling_image_12', false) ) : ?>
                            <?php echo PG_Blocks_v3::mergeInlineSVGAttributes( PG_Blocks_v3::getImageSVG( $args, 'scrolling_image_12' ), array( 'class' => 'img-fluid' ) ) ?>
                        <?php endif; ?>
                    </div>
                    <div class="col-3">
                        <?php if ( !PG_Blocks_v3::getImageSVG( $args, 'scrolling_image_13', false) && PG_Blocks_v3::getImageUrl( $args, 'scrolling_image_13', 'full' ) ) : ?>
                            <img src="<?php echo PG_Blocks_v3::getImageUrl( $args, 'scrolling_image_13', 'full' ) ?>" class="<?php echo (PG_Blocks_v3::getImageField( $args, 'scrolling_image_13', 'id', true) ? ('wp-image-' . PG_Blocks_v3::getImageField( $args, 'scrolling_image_13', 'id', true)) : '') ?> img-fluid" alt="<?php echo PG_Blocks_v3::getImageField( $args, 'scrolling_image_13', 'alt', true); ?>"/>
                        <?php endif; ?>
                        <?php if ( PG_Blocks_v3::getImageSVG( $args, 'scrolling_image_13', false) ) : ?>
                            <?php echo PG_Blocks_v3::mergeInlineSVGAttributes( PG_Blocks_v3::getImageSVG( $args, 'scrolling_image_13' ), array( 'class' => 'img-fluid' ) ) ?>
                        <?php endif; ?>
                    </div>
                    <div class="col-3">
                        <?php if ( !PG_Blocks_v3::getImageSVG( $args, 'scrolling_image_14', false) && PG_Blocks_v3::getImageUrl( $args, 'scrolling_image_14', 'full' ) ) : ?>
                            <img src="<?php echo PG_Blocks_v3::getImageUrl( $args, 'scrolling_image_14', 'full' ) ?>" class="<?php echo (PG_Blocks_v3::getImageField( $args, 'scrolling_image_14', 'id', true) ? ('wp-image-' . PG_Blocks_v3::getImageField( $args, 'scrolling_image_14', 'id', true)) : '') ?> img-fluid" alt="<?php echo PG_Blocks_v3::getImageField( $args, 'scrolling_image_14', 'alt', true); ?>"/>
                        <?php endif; ?>
                        <?php if ( PG_Blocks_v3::getImageSVG( $args, 'scrolling_image_14', false) ) : ?>
                            <?php echo PG_Blocks_v3::mergeInlineSVGAttributes( PG_Blocks_v3::getImageSVG( $args, 'scrolling_image_14' ), array( 'class' => 'img-fluid' ) ) ?>
                        <?php endif; ?>
                    </div>
                    <div class="col-3">
                        <?php if ( !PG_Blocks_v3::getImageSVG( $args, 'scrolling_image_15', false) && PG_Blocks_v3::getImageUrl( $args, 'scrolling_image_15', 'full' ) ) : ?>
                            <img src="<?php echo PG_Blocks_v3::getImageUrl( $args, 'scrolling_image_15', 'full' ) ?>" class="<?php echo (PG_Blocks_v3::getImageField( $args, 'scrolling_image_15', 'id', true) ? ('wp-image-' . PG_Blocks_v3::getImageField( $args, 'scrolling_image_15', 'id', true)) : '') ?> img-fluid" alt="<?php echo PG_Blocks_v3::getImageField( $args, 'scrolling_image_15', 'alt', true); ?>"/>
                        <?php endif; ?>
                        <?php if ( PG_Blocks_v3::getImageSVG( $args, 'scrolling_image_15', false) ) : ?>
                            <?php echo PG_Blocks_v3::mergeInlineSVGAttributes( PG_Blocks_v3::getImageSVG( $args, 'scrolling_image_15' ), array( 'class' => 'img-fluid' ) ) ?>
                        <?php endif; ?>
                    </div>
                    <div class="col-3">
                        <?php if ( !PG_Blocks_v3::getImageSVG( $args, 'scrolling_image_16', false) && PG_Blocks_v3::getImageUrl( $args, 'scrolling_image_16', 'full' ) ) : ?>
                            <img src="<?php echo PG_Blocks_v3::getImageUrl( $args, 'scrolling_image_16', 'full' ) ?>" class="<?php echo (PG_Blocks_v3::getImageField( $args, 'scrolling_image_16', 'id', true) ? ('wp-image-' . PG_Blocks_v3::getImageField( $args, 'scrolling_image_16', 'id', true)) : '') ?> img-fluid" alt="<?php echo PG_Blocks_v3::getImageField( $args, 'scrolling_image_16', 'alt', true); ?>"/>
                        <?php endif; ?>
                        <?php if ( PG_Blocks_v3::getImageSVG( $args, 'scrolling_image_16', false) ) : ?>
                            <?php echo PG_Blocks_v3::mergeInlineSVGAttributes( PG_Blocks_v3::getImageSVG( $args, 'scrolling_image_16' ), array( 'class' => 'img-fluid' ) ) ?>
                        <?php endif; ?>
                    </div>
                </div>
            </div>
        </section>
        <section class="position-relative py-5 recent-event-section" data-pg-ia-scene='{"s":"onEnter","l":[{"t":".floating-title","a":{"l":[{"t":"","l":[{"t":"tween","p":0,"d":1,"l":{"y":"-50vh"}}]}]}},{"t":".event-link","a":{"l":[{"t":"","l":[{"t":"set","p":0,"d":0,"l":{"autoAlpha":0},"e":"Power1.easeOut"},{"t":"tween","p":0,"d":1,"s":0.25,"l":{"autoAlpha":1},"e":"Power1.easeOut"}]}]},"p":"time","s":"20"}],"dir":"v"}' id="news" title="Aktuelles">
            <h2 class="floating-title"><?php echo PG_Blocks_v3::getAttribute( $args, 'recent_events_title' ) ?></h2>
            <div class="container py-5">
                    <div class="gy-3 row" <?php if(!empty($_GET['context']) && $_GET['context'] === 'edit') echo 'data-wp-inner-blocks'; ?>>
                    <?php if(empty($_GET['context']) || $_GET['context'] !== 'edit') echo PG_Blocks_v3::getInnerContent( $args ); ?>
                </div>
                <div class="mt-4 text-center"><a href="<?php echo (!empty($_GET['context']) && $_GET['context'] === 'edit') ? 'javascript:void()' : PG_Blocks_v3::getLinkUrl( $args, 'view_all_button_link' ) ?>" class="btn btn-lg btn-primary see-more"><?php echo PG_Blocks_v3::getAttribute( $args, 'view_all_button_label' ) ?></a>
                </div>
            </div>
        </section>
    </section>
</section>