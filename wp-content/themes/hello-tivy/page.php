<?php get_header(); ?>


<!-- About Me -->
<div id="singleContent" class="">
    <div class="title">
        <h1><?php the_title(); ?></h1>
    </div>
    <div class="row justify-content-center">
        <div class="about-content-container col-12 col-md-6 order-2 order-md-1">
            <p>
                <?php echo the_content(); ?>
            </p>
        </div>
        <div class="single-page-image-container col-12 col-md-6 order-1 order-md-2">
            <!-- ADD A PLUGIN FOR INSERTING IMAGES INTO THIS SLOT -->
            <img class="single-page-image" src="<?php echo get_theme_file_uri('/images/tiviniapic.jpg') ?>">
        </div>
    </div>
</div>

</div>

<?php get_footer(); ?>