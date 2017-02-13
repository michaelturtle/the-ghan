// Journey Page
$(document).ready(function() {
  // // Sticky map
    // content, start fix & end fix
    var journeyContent = $("#map");
    // var endFix = $("footer");


    var height = $("header").height();
    // Calculate how far from the top the element is
    //var journeyHeightThreshold = $(journeyContent).offset().top - height;
    var heightThreshold = $(journeyContent).offset().top - height;
    // var heightThreshold_end  = $(endFix).offset().top;
    // console.log(heightThreshold);
    // Use if you want the element to only be fixed while it's in view
    // var heightThreshold_end  = $(startFix).offset().top +$(startFix).height() ;

    //Journey Page
    $(document).scroll(function() {
        var pixelsFromTop = $(document).scrollTop();
        console.log(pixelsFromTop);
        if (pixelsFromTop >= heightThreshold ) {
            journeyContent.addClass("bg-map-fixed");
        } else {
            journeyContent.removeClass("bg-map-fixed");
        }
    });

});
