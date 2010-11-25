jQuery(function() {
    //Cufon.set("font-family", "MetaNormal-Roman");
    //Cufon.replace("h1");
    //Cufon.replace("#portal-globalnav > a");

    //Cufon.replace("h1", {FontFamily: "MetaNormal-Roman"});

    Cufon.set('fontFamily', 'MetaNormalRoman').replace('#portal-globalnav li a', {hover: true});
    Cufon.set('fontFamily', 'MetaNormalRoman').replace('li.navTreeItem a');
    Cufon.set('fontFamily', 'MetaNormalRoman').replace('h1');

    // hide personaltools
    //$("#portal-personaltools-wrapper dl").hover(
        //function () {
            //$(this).show();
        //},
        //function () {
            //$(this).hide();
        //}

    //);
});
