jQuery.fn.setDeco = function(width, position) {
    var classes = this.attr("class").split(" ");
    //console.log("setDeco: " + $(this).attr("id") + " " + width + " " + position);

    for (var i=0; i<classes.length; i++) {
        if (classes[i].indexOf("width-") == 0) {
            this.removeClass(classes[i]);
        }
    }

    for (var i=0; i<classes.length; i++) {
        if (classes[i].indexOf("position-") == 0) {
            this.removeClass(classes[i]);
        }
    }

    this.addClass("width-"+width);
    this.addClass("position-"+position);
};

var changeLayout = function(identifier) {
    //console.log("changeLayout: " + identifier);

    var logo_margin = $("#portal-column-one").width() - 142;
    //console.log("changeLayout.logo_margin: " + logo_margin);
    if (logo_margin<14) {
        logo_margin = $("#visual-portal-wrapper").width() - $("#portal-globalnav-wrapper").width() - 200;
    }
    $("#portal-logo").css({"margin-left": logo_margin});


    // do some JS work to rebuild deco grid
    // TODO: only show column two if it's actually there ...
    if (identifier == "wide") {
        $("#portal-logo").show();
        $("#portal-column-one").show();
        $("#portal-column-two").hide();
        $("#portal-column-content").setDeco(12, 4);
        $("#portal-globalnav-wrapper").setDeco(12, 4);
    } else if (identifier == "wider") {
        $("#portal-logo").show();
        $("#portal-column-one").show();
        $("#portal-column-two").show();
        $("#portal-column-content").setDeco(8, 4);
        $("#portal-globalnav-wrapper").setDeco(12, 4);
    } else if (identifier == "thin") {
        $("#portal-logo").hide();
        $("#portal-column-one").hide();
        $("#portal-column-two").hide();
        $("#portal-column-content").setDeco("full", 0);
        $("#portal-globalnav-wrapper").setDeco("full", 0);
    }
};

var updateLayout = function(width) {

    //Load Thin CSS Rules
    if (width < 750){
        changeLayout("thin");
    }

    //Load Wide CSS Rules
    if ((width >= 750) && (width <= 1200)){
        changeLayout("wide");
    }

    //Load Wider CSS Rules
    if (width > 1200){
        changeLayout("wider");
    }
};

$(document).load(function() {
    //console.log("document load");
    updateLayout($(window).width());
});

$(window).load(function() {
    //console.log("window load");
    updateLayout($(window).width());
});

$(window).resize(function() {
    //console.log("window resize");
    updateLayout($(window).width());

});

$(document).ready(function() {
    //console.log("document ready");
    updateLayout($(window).width());

    Cufon.set('fontFamily', 'MetaNormalRoman').replace('#portal-globalnav li a', {hover: true});
    Cufon.set('fontFamily', 'MetaNormalRoman').replace('li.navTreeItem a', {hover: true});
    Cufon.set('fontFamily', 'MetaNormalRoman').replace('h1');
    Cufon.set('fontFamily', 'MetaNormalRoman').replace('dt.portletHeader a');

    $(window).trigger("resize");
});
