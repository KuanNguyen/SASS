$(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    
    if (scroll > 100) {
        $("#navContent").addClass("show");
    } else {
        $("#navContent").removeClass("show");
    }
});

