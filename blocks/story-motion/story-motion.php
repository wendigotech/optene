<section <?php if(empty($_GET['context']) || $_GET['context'] !== 'edit') echo get_block_wrapper_attributes( array('class' => "overflow-hidden pb-5 pt-5", ) ); else echo 'data-wp-block-props="true"'; ?>>
    <div class="container pb-5 pt-5">
        <div class="align-items-center g-4 row">
            <div class="col-lg-5">
                <h3 class="display-5 fw-bold text-secondary" data-pg-ia-scene="{&quot;s&quot;:&quot;auto&quot;,&quot;s_t&quot;:&quot;start&quot;,&quot;s_s&quot;:&quot;center&quot;,&quot;redm&quot;:&quot;true&quot;,&quot;l&quot;:[{&quot;name&quot;:&quot;4&quot;,&quot;a&quot;:{&quot;l&quot;:[{&quot;t&quot;:&quot;&quot;,&quot;l&quot;:[{&quot;t&quot;:&quot;set&quot;,&quot;p&quot;:0,&quot;d&quot;:0,&quot;l&quot;:{&quot;autoAlpha&quot;:0},&quot;e&quot;:&quot;Power1.easeOut&quot;},{&quot;t&quot;:&quot;tween&quot;,&quot;p&quot;:0,&quot;d&quot;:0.51,&quot;l&quot;:{&quot;autoAlpha&quot;:1},&quot;e&quot;:&quot;Power1.easeOut&quot;}]}]}}]}"><?php echo PG_Blocks_v3::getAttribute( $args, 'title' ) ?></h3>
                <p class="fw-light lead mb-4" data-pg-ia-scene="{&quot;s_t&quot;:&quot;start&quot;,&quot;s_s&quot;:&quot;center&quot;,&quot;redm&quot;:&quot;true&quot;,&quot;l&quot;:[{&quot;name&quot;:&quot;4&quot;,&quot;a&quot;:&quot;fadeIn&quot;}],&quot;s&quot;:&quot;auto&quot;}"><?php echo PG_Blocks_v3::getAttribute( $args, 'description' ) ?></p>
            </div>
            <div class="col-lg-7 col-md-12 order-lg-first text-center">
                <?php if ( !PG_Blocks_v3::getImageSVG( $args, 'image', false) && PG_Blocks_v3::getImageUrl( $args, 'image', 'full' ) ) : ?>
                    <img src="<?php echo PG_Blocks_v3::getImageUrl( $args, 'image', 'full' ) ?>" class="<?php echo (PG_Blocks_v3::getImageField( $args, 'image', 'id', true) ? ('wp-image-' . PG_Blocks_v3::getImageField( $args, 'image', 'id', true)) : '') ?> img-fluid w-100" data-pg-ia-scene="{&quot;l&quot;:[{&quot;name&quot;:&quot;1&quot;,&quot;a&quot;:&quot;fadeInLeft&quot;}]}" alt="<?php echo PG_Blocks_v3::getImageField( $args, 'image', 'alt', true); ?>"/>
                <?php endif; ?>
                <?php if ( PG_Blocks_v3::getImageSVG( $args, 'image', false) ) : ?>
                    <?php echo PG_Blocks_v3::mergeInlineSVGAttributes( PG_Blocks_v3::getImageSVG( $args, 'image' ), array( 'class' => 'img-fluid w-100', 'data-pg-ia-scene' => '{"l":[{"name":"1","a":"fadeInLeft"}]}' ) ) ?>
                <?php endif; ?>
            </div>
            <div class="col-lg-5">
                <p class="fw-light lead mb-4" data-pg-ia-scene="{&quot;l&quot;:[{&quot;name&quot;:&quot;1&quot;,&quot;a&quot;:&quot;fadeIn&quot;}]}"><?php echo PG_Blocks_v3::getAttribute( $args, 'description2' ) ?></p>
            </div>
            <div class="col-lg-7 col-md-12 text-center">
                <?php if ( !PG_Blocks_v3::getImageSVG( $args, 'image2', false) && PG_Blocks_v3::getImageUrl( $args, 'image2', 'full' ) ) : ?>
                    <img src="<?php echo PG_Blocks_v3::getImageUrl( $args, 'image2', 'full' ) ?>" class="<?php echo (PG_Blocks_v3::getImageField( $args, 'image2', 'id', true) ? ('wp-image-' . PG_Blocks_v3::getImageField( $args, 'image2', 'id', true)) : '') ?> img-fluid w-100" data-pg-ia-scene="{&quot;l&quot;:[{&quot;name&quot;:&quot;2&quot;,&quot;a&quot;:&quot;fadeInRight&quot;}],&quot;redm&quot;:&quot;true&quot;}" alt="<?php echo PG_Blocks_v3::getImageField( $args, 'image2', 'alt', true); ?>"/>
                <?php endif; ?>
                <?php if ( PG_Blocks_v3::getImageSVG( $args, 'image2', false) ) : ?>
                    <?php echo PG_Blocks_v3::mergeInlineSVGAttributes( PG_Blocks_v3::getImageSVG( $args, 'image2' ), array( 'class' => 'img-fluid w-100', 'data-pg-ia-scene' => '{"l":[{"name":"2","a":"fadeInRight"}],"redm":"true"}' ) ) ?>
                <?php endif; ?>
            </div>
        </div>
    </div>
    <div class="container mt-5 pb-5 pt-5">
        <div class="col-lg-6 me-auto ms-auto text-center">
            <div class="align-items-center row">
                <div class="col">
                    <hr class="border-secondary mb-0 mt-0"/>
                </div>
                <div class="col-auto">
                    <div class="bg-secondary p-2" style="transform: rotate(45deg);"></div>
                </div>
                <div class="col">
                    <hr class="border-secondary mb-0 mt-0"/>
                </div>
            </div>
        </div>
    </div>
</section>