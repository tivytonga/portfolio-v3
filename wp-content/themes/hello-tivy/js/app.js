var $j = jQuery.noConflict();
var currentPage = $j("#intro");
var portfolio = "portfolio";
var about = "about";
var contact = "contact";
var aboutIcon = "about-icon";
var portfolioIcon = "portfolio-icon";
var contactIcon = "contact-icon";
var aboutText = "About Me";
var portfolioText = "Portfolio";
var contactText = "Contact Me";
var experienceText = ["awesome", "unique", "amazing", "fabulous", "wonderful"];
var iconHover;
var linkHover;
var currentOverlay;
var overlayIsOpen = false;



// Main Navigation (left) Button Clicks

$j("#leftNavbar").on("click", "a", function () {
    var link = $j(this).attr('id').toLowerCase();
    var item;
    if (link.indexOf(portfolio) >= 0) {
        item = $j("#portfolio");
    }
    else if (link.indexOf(about) >= 0) {
        item = $j("#aboutMe");
    } else {
        item = $j("#contact");
    }
    mainLinksClicked(item);
});

$j("#topNavbarLinks").on("click", "a", function () {
    var link = $j(this).attr('id').toLowerCase();
    var item;
    if (link.indexOf(portfolio) >= 0) {
        item = $j("#portfolio");
    }
    else if (link.indexOf(about) >= 0) {
        item = $j("#aboutMe");
    } else {
        item = $j("#contact");
    }
    mainLinksClicked(item);
});

// Hide Toggle Menu after link clicked
/* $j("#navbarToggle").on("click", function () {
    $j(this).collapse('hide');
}); */

// HOVER CHANGES TO LEFT NAV
$j("#leftNavbar a").hover(
    function () {
        var link = $j(this).attr('id').toLowerCase();
        if (link.indexOf(portfolio) >= 0) {
            iconHover = portfolioIcon;
            $j(this).text(portfolioText);
        }
        else if (link.indexOf(about) >= 0) {
            iconHover = aboutIcon;
            $j(this).text(aboutText);

        } else {
            iconHover = contactIcon;
            $j(this).text(contactText);
        }
    }, function () {
        $j(this).text("");
        $j(this).html("<i></i>");
        $j(this).children().addClass("fa fa-big");
        $j(this).children().addClass(iconHover);
    }
);

// Hover over project boxes animation
$j(".project-item").hover(
    function () {
        $j(this).css({
            position: 'relative',
            top: '-7px'
        });
        $j(this).css('cursor', 'pointer');

    }, function () {
        $j(this).removeAttr("style");
        $j(this).css('cursor', 'auto');
    }
);


// Main Left Nav Link Clicked shows the link's section contents
/* function mainLinksClicked(activeLink){
    //fade out the currentPage
    currentPage.fadeOut(400, function(){
        //add class "hide" to currentPage, removeAttr "style", remove class "section-flex-container"
        currentPage.addClass("hide");
        currentPage.removeAttr("style");
        currentPage.removeClass("section-flex-container");
        //fade in next page, add class "section-flex-container", removeAttr "style"
        activeLink.fadeIn(800);
        activeLink.addClass("section-flex-container");
        activeLink.removeAttr("style");
        //activeLink becomes new currentPage
        currentPage = activeLink;
    });   
} */

// Scheduler Overlay (open and close)
$j("#scheduler").on("click", function () {
    if (checkScreenSize()) {
        openOverlay($j("#schedulerOverlay"));
        currentOverlay = $j(this);
    }
});
$j("#schedulerOverlay").on("click", function () {
    closeOverlay($j(this));
});

// Inventory Overlay (open and close)
$j("#inventory").on("click", function () {
    if (checkScreenSize()) {
        openOverlay($j("#inventoryOverlay"));
        currentOverlay = $j(this);
    }
});
$j("#inventoryOverlay").on("click", function () {
    closeOverlay($j(this));
});

// AgCubio Overlay (open and close)
$j("#agcubio").on("click", function () {
    if (checkScreenSize()) {
        openOverlay($j("#agcubioOverlay"));
        currentOverlay = $j(this);
    }
});
$j("#agcubioOverlay").on("click", function () {
    closeOverlay($j(this));
});

// WebsiteV1 Overlay (open and close)
$j("#websiteV1").on("click", function () {
    if (checkScreenSize()) {
        openOverlay($j("#websiteV1Overlay"));
        currentOverlay = $j(this);
    }
});
$j("#websiteV1Overlay").on("click", function () {
    closeOverlay($j(this));
});

// Close Mobile Overlay
$j("#mobileOverlay").on("click", function () {
    closeOverlay($j(this));
});


/* function openOverlay(projectOverlay) {
    $j("body").addClass("no-scroll");
    $j("#pageContents").addClass("blur-page-background");
    projectOverlay.fadeIn(500);
    projectOverlay.removeClass("overlay-screen");
    projectOverlay.removeClass("hide");
    projectOverlay.addClass("project-overlay");
    overlayIsOpen = true;
} */

/* function closeOverlay(projectOverlay) {
    projectOverlay.removeAttr("style");
    $j("body").removeClass("no-scroll");
    $j("#pageContents").removeClass("blur-page-background");
    projectOverlay.addClass("overlay-screen");
    projectOverlay.removeClass("project-overlay");
    projectOverlay.addClass("hide");
    overlayIsOpen = false;
} */

// Check screen size
function checkScreenSize() {
    if ($j(".overlay-screen").css("float") === "none") {
        return true;
    } else {
        openOverlay($j("#mobileOverlay"));
        return false;
    }
}

// $j(window).on('resize', function(){
//     if ($j(this).width() < 768) {
//         if (overlayIsOpen === true){
//             closeOverlay(currentOverlay);
//         }
//     }
// });

// Intro Animations
$j(".initial-hidden").each(function (index) {
    $j(this).slideDown(1500);
});

$j(document).ready(function () {
    var count = 0;
    setInterval(function () {
        $j("#intro span").text(experienceText[count]);
        count++;
        if (count >= experienceText.length) {
            count = 0;
        }
    }, 2000);
});



