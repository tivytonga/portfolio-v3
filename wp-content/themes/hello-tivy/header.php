<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo('charset') ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php wp_head(); ?>
</head>

<body <?php body_class() ?>>
    <!-- Contents of page -->
    <div id="pageContents" class="container-fluid">
        <!-- Header/Navbar -->
        <div id="header" class="row">
            <nav class="navbar navbar-expand-md col-12 my-0 py-0 navbar-dark fixed-top">
                <a class="navbar-brand" href="index.html">Tivinia Tonga</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggle"
                    aria-controls="navbarToggle" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarToggle">
                    <ul id="topNavbarLinks" class="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li class="nav-item">
                            <a class="nav-link btn btn-light btn-lg btn-rounded" href="resume.pdf"
                                target="_blank">Resume</a>
                        </li>
                        <li class="nav-item">
                            <a id="aboutToggleLink" class="nav-link" href="#about">About</a>
                        </li>
                        <li class="nav-item">
                            <a id="portfolioToggleLink" class="nav-link" href="#portfolio">Portfolio</a>
                        </li>
                        <li class="nav-item">
                            <a id="contactToggleLink" class="nav-link" href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
                <a id="btnResume" class="nav-link btn btn-outline-light btn-sm btn-round" href="resume.pdf"
                    target="_blank">Resume</a>
            </nav>
        </div>
        <!-- Main Row-->
        <div id="mainRow" class="row">
            <!-- Left Nav -->
            <div id="leftNavWrapper" class="col-md-1 justify-content-center">
                <nav id="leftNavbar" class="nav sticky-scroll">
                    <div id="leftLinkContainer" class="">
                        <div id="main-links">
                            <a id="linkAbout" class="nav-link" href="<?php echo site_url('/about-me') ?>"><i
                                    class="fa about-icon fa-big" aria-hidden="true"></i></a>
                            <a id="linkPortfolio" class="nav-link" href="#portfolio"><i class="fa portfolio-icon fa-big"
                                    aria-hidden="true"></i></a>
                            <a id="linkContact" class="nav-link" href="<?php echo site_url('/contact-me') ?>"><i
                                    class="fa contact-icon fa-big" aria-hidden="true"></i></a>
                        </div>
                    </div>
                </nav>
            </div>

            <!-- Contents of page -->

            <!-- Main Content -->
            <div id="mainContentWrapper" class="col-md-10">