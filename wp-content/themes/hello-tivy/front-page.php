<?php get_header(); ?>

<!-- Contents of page -->

<div id="mainRow" class="row">
    <!-- Left Nav -->
    <div id="leftNavWrapper" class="col-md-1 justify-content-center">
        <nav id="leftNavbar" class="nav sticky-scroll">
            <div id="leftLinkContainer" class="initial-hidden">
                <div id="main-links">
                    <a id="linkAbout" class="nav-link" href="#about"><i class="fa about-icon fa-big"
                            aria-hidden="true"></i></a>
                    <a id="linkPortfolio" class="nav-link" href="#portfolio"><i class="fa portfolio-icon fa-big"
                            aria-hidden="true"></i></a>
                    <a id="linkContact" class="nav-link" href="#contact"><i class="fa contact-icon fa-big"
                            aria-hidden="true"></i></a>
                </div>
            </div>
        </nav>
    </div>
    <!-- Main Content -->
    <div id="mainContentWrapper" class="col-md-10">
        <!-- Intro -->
        <div id="intro" class="pt-4">
            <h1 class="fadeInUp">Hello there! My name is</h1>
            <h2 class="fadeInUp">Tivinia Tonga</h2>
            <h3 class="fadeInUp">Software Engineer</h3>
            <p class="fadeInUp">I'm a software engineer that specializes in Front-End Development. I enjoy building
                applications that provide <span>wonderful</span> user experiences.</p>
            <a class="btn btn-outline-light fadeInUp" href="mailto:tivytonga@gmail.com">Hire Me</a>
        </div>
        <!-- About Me -->
        <div id="aboutMe" class="hide">
            <div class="title">
                <h1>About Me</h1>
            </div>
            <div class="row justify-content-center">
                <div class="about-content-container col-12 col-md-6 order-2 order-md-1">
                    <p class="fadeInUp p1">
                        Hello! I'm Tivinia, a <strong>software engineer</strong> that enjoys <i>breaking things</i>
                        and
                        developing robust software
                        with user experience in mind.
                        Most of my experience is in <i>Desktop Applications</i> but through side projects I've found
                        a
                        passion
                        for <i>Web Applications</i>.
                    </p>
                    <p class="fadeInUp p2">
                        During my Computer Science program at the <a href="https://utah.edu" target="_blank">University
                            of Utah</a>
                        I interned and then was employed in the Cybersecurity department of
                        <a href="https://intermountainhealthcare.org" target="_blank">Intermountain Healthcare</a>.
                        While there, I worked on a wide variety of substantial projects on a daily basis.
                    </p>
                    <p class="fadeInUp p3">
                        Technologies I have worked with recently:
                    </p>
                    <div class="about-skills fadeInUp">
                        <ul class="skills-container">
                            <li>Java</li>
                            <li>HTML & CSS</li>
                            <li>C#</li>
                            <li>JavaScript</li>
                            <li>MySQL</li>
                            <li>jQuery</li>
                            <li>Node.js</li>
                            <li>Express</li>
                        </ul>
                    </div>
                </div>
                <div class="about-image-container col-12 col-md-6 fadeInUp order-1 order-md-2">
                    <img src="assets/imgs/tiviniapic.jpg">
                </div>
            </div>
        </div>
    </div>
</div>

<?php get_footer(); ?>