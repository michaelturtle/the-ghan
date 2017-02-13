$(document).ready(function() {
  // // Sticky map
    // content, start fix & end fix
    var stopsContent = $("sidebar");
    var stopsText = $("#stops-text")
    // var endFix = $("footer");

    var height = $("header").height();
    // Calculate how far from the top the element is
    var heightThreshold = $(stopsContent).offset().top - height;
    // var heightThreshold_end  = $(endFix).offset().top;
    // console.log(heightThreshold);
    // Use if you want the element to only be fixed while it's in view
    // var heightThreshold_end  = $(startFix).offset().top +$(startFix).height() ;

    //Stops Page
    $(document).scroll(function() {
        var pixelsFromTop = $(document).scrollTop();
        console.log(pixelsFromTop);
        if (pixelsFromTop >= heightThreshold ) {
            stopsContent.addClass("bg-stops-fixed");
            stopsText.attr("data-push-left", "off-5__sm-0_xs-0");
        } else {
            stopsContent.removeClass("bg-stops-fixed");
            stopsText.attr("data-push-left", "");
        }
    });

// Smooth Scrolling

    // Click on the a tag with a class="scroll-to"
    $('.scroll-to').click(function() {

      // Find the href attribute of the a tag we just clicked
      var href = $(this).attr("href");

      // based on the link, find the section
      // e.g. if we click on <a href="#company">
      // section is $("#company")

      // Once we know the section we can calculate the distance (the offset) from the top
      var section = $(href).offset().top - 83;

      // Animate the page to a particular point (the one we just calculated above)
      $("body, html").animate({ scrollTop: section }, 1000);

      // stop the default behaviour of jumping to the section
      return false;
    });


});
