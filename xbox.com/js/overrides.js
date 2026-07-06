$(document).ready(function() {
  $("#BodyContent a").not(".followable").each(function() {
      var thelink = "";
      if ($(this).attr("href")) {
          thelink = $(this).attr("href").toLowerCase();
      }
      if (thelink.indexOf("/store/") !== -1 || thelink.indexOf("marketplace.xbox") !== -1) {
          $(this).attr("rel", "nofollow");
      }
  });

  // Close dropdown when user navigates out of it. Set up to work for any combination of <button> and <a>
  $(".c-navigation-menu li > *:not(.m-in-page-navigation .c-navigation-menu li > *)").on("blur", function(e) {// excludes page bar dropdown to avoid duplication
      setTimeout(function() { // delayed because focus moves to BODY before finding next element
          var theFocused = document.activeElement;
          if (theFocused.closest(".c-navigation-menu ul") == null) {
              $(".c-navigation-menu ul").attr("aria-hidden", "true");
          }
      }, 20);
  });
  // Move focus on button when ESC out of dropdown
  $(".c-navigation-menu li > *:not(.m-in-page-navigation .c-navigation-menu li > *)").on("keydown", function(e) {// excludes page bar dropdown to avoid duplication
      if (e.key === "Escape" || e.keycode === 27) {
        $(this).closest(".c-navigation-menu").find("button").focus();
      }
  });
});