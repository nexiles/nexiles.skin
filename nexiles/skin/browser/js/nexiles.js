jQuery.fn.setDeco = function(width, position) {
    var classes = this.attr("class").split(" ");

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

function changeLayout(identifier) {
    $("#debug").text(identifier + " " + $(window).width());

    console.log("changeLayout: " + identifier);

    // switch style sheets
    $("head > link").each(function(index) {
        var node = $(this);
        var title = "nexiles-css-" + identifier;

        if (node.attr("title") == title) {
            console.log("enable: " + node.attr("title"));
            this.disabled = false;
        } else if (node.attr("title").indexOf("nexiles") == 0 ) {
            console.log("disable: " + node.attr("title"));
            this.disabled = true;
        }

    });

    // do some JS work to rebuild deco grid
    if (identifier == "wide") {
        $("#portal-column-content").setDeco(12, 4);
        $("#portal-globalnav-wrapper").setDeco(12, 4);
    } else if (identifier == "wider") {
        $("#portal-column-content").setDeco(8, 4);
        $("#portal-globalnav-wrapper").setDeco(12, 4);
    } else if (identifier == "thin") {
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
    console.log("document load");
    updateLayout($(window).width());
});

$(window).load(function() {
    console.log("window load");
    updateLayout($(window).width());
});

$(window).resize(function() {
    console.log("window resize");
    updateLayout($(window).width());

});

$(document).ready(function() {
    console.log("document ready");
    updateLayout($(window).width());

    Cufon.set('fontFamily', 'MetaNormalRoman').replace('#portal-globalnav li a', {hover: true});
    Cufon.set('fontFamily', 'MetaNormalRoman').replace('li.navTreeItem a', {hover: true});
    Cufon.set('fontFamily', 'MetaNormalRoman').replace('h1');
});
