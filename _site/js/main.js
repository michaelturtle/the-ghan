
$(document).ready(function() {
  // // Sticky map
    // content, start fix & end fix
      var content = $("#map");
      var startFix = $("#map");
      var endFix = $("footer");
      var footerHeight = $("footer").height();
      var headerHeight = $("header").height();
      var heightThreshold = $(startFix).offset().top - headerHeight;
      var heightThreshold_end = $(endFix).offset().top - footerHeight;
      console.log("This is the end" + heightThreshold_end);


    // Use if you want the element to only be fixed while it's in view
    // var heightThreshold_end  = $(startFix).offset().top +$(startFix).height() ;

    $(document).scroll(function() {
        var pixelsFromTop = $(document).scrollTop();
        console.log(pixelsFromTop);
        if (pixelsFromTop >= heightThreshold && pixelsFromTop <=  heightThreshold_end ) {
            content.addClass("bg-map-fixed");
        } else if ((pixelsFromTop - 100) === heightThreshold_end) {
            $("bg-map-fixed").css("top", heightThreshold_end);
        } else {
            content.removeClass("bg-map-fixed");
        }
    });

});
