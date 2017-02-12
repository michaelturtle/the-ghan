
$(document).ready(function() {
  // // Sticky map
    // content, start fix & end fix
    var content = $("#map");
    var startFix = $("#map");
    var endFix = $("footer");

    // Calculate how far from the top the element is
    var heightThreshold = $(startFix).offset().top;
    var heightThreshold_end  = $(endFix).offset().top;
    console.log(heightThreshold);
    // Use if you want the element to only be fixed while it's in view
    // var heightThreshold_end  = $(startFix).offset().top +$(startFix).height() ;

    $(document).scroll(function() {
        var pixelsFromTop = $(document).scrollTop();
        console.log(pixelsFromTop);
        if (pixelsFromTop >= heightThreshold && pixelsFromTop <=  heightThreshold_end ) {
            content.addClass(".bg-map-fixed");
        } else {
            content.removeClass(".bg-map-fixed");
        }
    });


});
