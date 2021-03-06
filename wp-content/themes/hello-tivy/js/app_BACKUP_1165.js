
// Main Navigation (left) Button Clicks
$("#linkAbout").on("click", function(){
    aboutClicked();
});

$("#aboutToggleLink").on("click", function(){
    aboutClicked();
})

$("#linkPortfolio").on("click", function(){
    portfolioClicked();
});

$("#portfolioToggleLink").on("click", function(){
    portfolioClicked();
});

$("#linkContact").on("click", function(){
    contactClicked();
});

$("#contactToggleLink").on("click", function(){
    contactClicked();
});

$("#navbarToggle").on("click", function(){
    $(this).collapse('hide');
});

// Hover Left Nav Links Change Appearance (About)
$("#linkAbout").hover(function(){
    $(this).text("About Me");
});
$("#linkAbout").mouseleave(function(){
    $(this).text("");
    $(this).html("<i></i>");
    $(this).children().addClass("fa about-icon fa-big");
});
// Portfolio 
$("#linkPortfolio").hover(function(){
    $(this).text("Portfolio");
});
$("#linkPortfolio").mouseleave(function(){
    $(this).text("");
    $(this).html("<i></i>");
    $(this).children().addClass("fa portfolio-icon fa-big");
});
// Contact
$("#linkContact").hover(function(){
    $(this).text("Contact Me");
});
$("#linkContact").mouseleave(function(){
    $(this).text("");
    $(this).html("<i></i>");
    $(this).children().addClass("fa contact-icon fa-big");
});

// Hover over project boxes animation
$(".project-item").hover(function(){
    $(this).css({
        position: 'relative',
        top: '-7px'
    });
});
$(".project-item").mouseleave(function(){
    // $(this).animate({marginTop: "0"});
    $(this).removeAttr("style");
});

// Click "About" link shows Add Div and hides others
function aboutClicked(){
    //Intro
    $("#intro").addClass("hide");
    //About
    $("#aboutMe").fadeIn(1000);
    $("#aboutMe").addClass("about-flex-container");
    $("#aboutMe").removeAttr("style");
    //Portfolio
    $("#portfolio").addClass("hide");
    $("#portfolio").removeAttr("style");
    $("#portfolio").removeClass("portfolio-flex-container");
    //Contact
    $("#contact").addClass("hide");
    $("#contact").removeAttr("style");
    $("#contact").removeClass("contact-flex-container");
}

// Click "Portfolio" link shows Portfolio Div and hides others
function portfolioClicked(){
    //Intro
    $("#intro").addClass("hide");
    //About
    $("#aboutMe").addClass("hide");
    $("#aboutMe").removeAttr("style");
    $("#aboutMe").removeClass("about-flex-container");
    //Portfolio
    $("#portfolio").fadeIn(1000);
    $("#portfolio").addClass("portfolio-flex-container");
    $("#portfolio").removeAttr("style");

    //Contact
    $("#contact").addClass("hide");
    $("#contact").removeAttr("style");
    $("#contact").removeClass("contact-flex-container");

}

// Click "Contact" link shows Contact Div and hides others
function contactClicked(){
    //Intro
    $("#intro").addClass("hide");
    //About
    $("#aboutMe").addClass("hide");
    $("#aboutMe").removeAttr("style");
    $("#aboutMe").removeClass("about-flex-container");
    //Portfolio
    $("#portfolio").addClass("hide");
    $("#portfolio").removeAttr("style");
    $("#portfolio").removeClass("portfolio-flex-container");

    //Contact
    $("#contact").fadeIn(1000);
    $("#contact").addClass("contact-flex-container");
    $("#contact").removeAttr("style");
}


// Animations
$(".initial-hidden").each(function(index){
    $(this).slideDown(1500);
});


