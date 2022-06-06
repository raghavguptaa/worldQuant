letterCarousel(".Frist", ".big-title");
letterCarousel(".Frists", ".big-title");
letterCarousel(".Fristss", ".big-title");
letterCarousel(".Fristsss", ".big-title");
letterCarousel(".Fristssss", ".big-title");

function letterCarousel(parent_cls, child_cls) {
  var e = jQuery(parent_cls + " " + child_cls),
    t = jQuery(window).height();
  jQuery(window).on("scroll", function () {
    if (jQuery(parent_cls).length) {
      var t = jQuery(document).scrollTop() + jQuery(window).height(),
        n = jQuery(parent_cls).offset().top;

      if (n <= t) {
        var i = jQuery(document).scrollTop() - n + jQuery(window).height();
        var scroll = i - 150;
        var scroll_slow = scroll + scroll / 70 / 100;
        var img_scroll = (scroll_slow * 30) / 100;
        e.css({
          transform: "translateX(" + img_scroll + "px)",
        });
      }
    }
  });
}
