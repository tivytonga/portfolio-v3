var currentPage = $("#intro");
var portfolio = "portfolio";
var about = "about";
var contact = "contact";
var aboutIcon = "about-icon";
var portfolioIcon = "portfolio-icon";
var contactIcon = "contact-icon";
var aboutText = "About Me";
var portfolioText = "Portfolio";
var contactText ="Contact Me";
var experienceText = ["awesome", "unique", "amazing", "fabulous", "wonderful"];
var iconHover;
var linkHover;
var currentOverlay;
var overlayIsOpen = false;



// Main Navigation (left) Button Clicks

$("#leftNavbar").on("click", "a", function(){
    var link = $(this).attr('id').toLowerCase();
    var item;
    if (link.indexOf(portfolio) >= 0){
        item = $("#portfolio");
    }
    else if (link.indexOf(about) >= 0){
        item = $("#aboutMe");
    } else {
        item = $("#contact");
    }
    mainLinksClicked(item);
});

$("#topNavbarLinks").on("click", "a", function(){
    var link = $(this).attr('id').toLowerCase();
    var item;
    if (link.indexOf(portfolio) >= 0){
        item = $("#portfolio");
    }
    else if (link.indexOf(about) >= 0){
        item = $("#aboutMe");
    } else {
        item = $("#contact");
    }
    mainLinksClicked(item);
});

// Hide Toggle Menu after link clicked
$("#navbarToggle").on("click", function(){
    $(this).collapse('hide');
});

// HOVER CHANGES TO LEFT NAV
$("#leftNavbar a").hover(
    function(){
        var link = $(this).attr('id').toLowerCase();
        if (link.indexOf(portfolio) >= 0){
            iconHover = portfolioIcon;
            $(this).text(portfolioText);
        }
        else if (link.indexOf(about) >= 0){
            iconHover = aboutIcon;
            $(this).text(aboutText);

        } else {
            iconHover = contactIcon;
            $(this).text(contactText);
        }
    }, function(){
        $(this).text("");
        $(this).html("<i></i>");
        $(this).children().addClass("fa fa-big");
        $(this).children().addClass(iconHover);
    }
);

// Hover over project boxes animation
$(".project-item").hover(
    function(){
        $(this).css({
            position: 'relative',
            top: '-7px'
        });
        $(this).css('cursor','pointer');
    
    }, function(){
        $(this).removeAttr("style");
        $(this).css('cursor','auto');
    }
);


// Main Left Nav Link Clicked shows the link's section contents
function mainLinksClicked(activeLink){
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
}

// Scheduler Overlay (open and close)
$("#scheduler").on("click", function(){
    if (checkScreenSize()){
        openOverlay($("#schedulerOverlay"));
        currentOverlay = $(this);
    }
});
$("#schedulerOverlay").on("click", function(){
    closeOverlay($(this));
});

// Inventory Overlay (open and close)
$("#inventory").on("click", function(){
    if (checkScreenSize()){
        openOverlay($("#inventoryOverlay"));
        currentOverlay = $(this);
    }  
});
$("#inventoryOverlay").on("click", function(){
    closeOverlay($(this));
});

// AgCubio Overlay (open and close)
$("#agcubio").on("click", function(){
    if (checkScreenSize()){
        openOverlay($("#agcubioOverlay"));
        currentOverlay = $(this);
    }
});
$("#agcubioOverlay").on("click", function(){
    closeOverlay($(this));
});

// WebsiteV1 Overlay (open and close)
$("#websiteV1").on("click", function(){
    if (checkScreenSize()){
        openOverlay($("#websiteV1Overlay"));
        currentOverlay = $(this);
    } 
});
$("#websiteV1Overlay").on("click", function(){
    closeOverlay($(this));
});

// Close Mobile Overlay
$("#mobileOverlay").on("click", function(){
    closeOverlay($(this));
});


function openOverlay(projectOverlay){
    $("body").addClass("no-scroll");
    $("#pageContents").addClass("blur-page-background");
    projectOverlay.fadeIn(500);
    projectOverlay.removeClass("overlay-screen");
    projectOverlay.removeClass("hide");
    projectOverlay.addClass("project-overlay");
    overlayIsOpen = true;
}

function closeOverlay(projectOverlay){
    projectOverlay.removeAttr("style");
    $("body").removeClass("no-scroll");
    $("#pageContents").removeClass("blur-page-background");
    projectOverlay.addClass("overlay-screen");
    projectOverlay.removeClass("project-overlay");
    projectOverlay.addClass("hide");
    overlayIsOpen = false;
}

// Check screen size
function checkScreenSize(){
    if ($(".overlay-screen").css("float") === "none"){
        return true;
    } else {
        openOverlay($("#mobileOverlay"));
        return false;
    }
}

// $(window).on('resize', function(){
//     if ($(this).width() < 768) {
//         if (overlayIsOpen === true){
//             closeOverlay(currentOverlay);
//         }
//     }
// });

// Intro Animations
$(".initial-hidden").each(function(index){
    $(this).slideDown(1500);
});

$(document).ready(function(){
    var count = 0;
    setInterval(function(){
        $("#intro span").text(experienceText[count]);
        count++;
        if (count >= experienceText.length){
            count = 0;
        }
    }, 2000);
});



