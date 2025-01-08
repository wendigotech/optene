<div <?php if(empty($_GET['context']) || $_GET['context'] !== 'edit') echo get_block_wrapper_attributes( array('class' => "col-lg-3 col-sm-6 pb-3 pt-3", ) ); else echo 'data-wp-block-props="true"'; ?>> 
    <div class="text-dark"> 
        <div class="bg-success border border-3 border-primary d-inline-block mb-4 p-4 rounded-circle text-success"> 
            <?php if ( !PG_Blocks_v3::getImageSVG( $args, 'icon1', false) && PG_Blocks_v3::getImageUrl( $args, 'icon1', 'full' ) ) : ?>
                <img src="<?php echo PG_Blocks_v3::getImageUrl( $args, 'icon1', 'full' ) ?>" width="50" height="50" class="<?php echo (PG_Blocks_v3::getImageField( $args, 'icon1', 'id', true) ? ('wp-image-' . PG_Blocks_v3::getImageField( $args, 'icon1', 'id', true)) : '') ?> bg-transparent" alt="<?php echo PG_Blocks_v3::getImageField( $args, 'icon1', 'alt', true); ?>"/>
            <?php endif; ?>
            <?php if ( PG_Blocks_v3::getImageSVG( $args, 'icon1', false) ) : ?>
                <?php echo PG_Blocks_v3::mergeInlineSVGAttributes( PG_Blocks_v3::getImageSVG( $args, 'icon1' ), array( 'class' => 'bg-transparent' ) ) ?>
            <?php endif; ?>
        </div>         
        <h3 class="fw-bold mb-1 text-break text-success"><?php echo PG_Blocks_v3::getAttribute( $args, 'advantage_title1' ) ?></h3> 
        <p class="mb-0 text-primary"><?php echo PG_Blocks_v3::getAttribute( $args, 'advantage_description1' ) ?></p> 
    </div>     
</div>