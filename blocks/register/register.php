<section <?php if(empty($_GET['context']) || $_GET['context'] !== 'edit') echo get_block_wrapper_attributes( array('class' => "align-items-center d-flex flex-column justify-content-center min-vh-100 pb-5 pt-5 text-center", 'id' => "register", 'title' => "Registrieren", ) ); else echo 'data-wp-block-props="true"'; ?>>
    <div class="container">
        <h2 class="display-4 fw-bolder mb-4 text-success"><?php echo PG_Blocks_v3::getAttribute( $args, 'advantages_heading' ) ?></h2>
            <div class="justify-content-center row" <?php if(!empty($_GET['context']) && $_GET['context'] === 'edit') echo 'data-wp-inner-blocks'; ?>>
            <?php if(empty($_GET['context']) || $_GET['context'] !== 'edit') echo PG_Blocks_v3::getInnerContent( $args ); ?>
        </div>
    </div><a class="btn btn-lg btn-success fw-bold mt-5 pb-2 pe-5 ps-5 pt-2 text-primary-emphasis" href="<?php echo (!empty($_GET['context']) && $_GET['context'] === 'edit') ? 'javascript:void()' : PG_Blocks_v3::getLinkUrl( $args, 'register_button_link' ) ?>"><?php echo PG_Blocks_v3::getAttribute( $args, 'register_button_label' ) ?></a>
</section>