<section <?php if(empty($_GET['context']) || $_GET['context'] !== 'edit') echo get_block_wrapper_attributes( array('class' => "pb-5 pt-5", 'id' => "story", ) ); else echo 'data-wp-block-props="true"'; ?>>
    <div class="container pb-5 pt-5">
        <div class="col-lg-6 me-auto ms-auto text-center">
            <?php if ( !PG_Blocks_v3::getImageSVG( $args, 'logo', false) && PG_Blocks_v3::getImageUrl( $args, 'logo', 'full' ) ) : ?>
                <img src="<?php echo PG_Blocks_v3::getImageUrl( $args, 'logo', 'full' ) ?>" class="<?php echo (PG_Blocks_v3::getImageField( $args, 'logo', 'id', true) ? ('wp-image-' . PG_Blocks_v3::getImageField( $args, 'logo', 'id', true)) : '') ?>" alt="<?php echo PG_Blocks_v3::getImageField( $args, 'logo', 'alt', true); ?>">
            <?php endif; ?>
            <?php if ( PG_Blocks_v3::getImageSVG( $args, 'logo', false) ) : ?>
                <?php echo PG_Blocks_v3::mergeInlineSVGAttributes( PG_Blocks_v3::getImageSVG( $args, 'logo' ), array() ) ?>
            <?php endif; ?>
            <h2 class="display-5 fw-bold mb-3 text-primary-emphasis"><?php echo PG_Blocks_v3::getAttribute( $args, 'heading' ) ?></h2>
        </div>
        <div class="col-lg-8 me-auto ms-auto text-center">
            <p class="fw-light mb-0 text-start"><?php echo PG_Blocks_v3::getAttribute( $args, 'description' ) ?></p>
        </div>
    </div>
    <div class="container pb-5 pt-5">
</div>
    <div class="container pb-4 pt-4">
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