<?php get_header(); ?>


<!-- About Me -->
<div id="aboutMe" class="">
    <div class="title">
        <h1><?php the_title(); ?></h1>
    </div>
    <div class="row justify-content-center">
        <div class="about-content-container col-12 col-md-6 order-2 order-md-1">
            <p class="fadeInUp">
                <?php echo the_content(); ?>
            </p>
        </div>
        <div class="about-image-container col-12 col-md-6 fadeInUp order-1 order-md-2">
            <img src="<?php echo get_theme_file_uri('/images/tiviniapic.jpg') ?>">
        </div>
    </div>
</div>

</div>

<?php get_footer(); ?>