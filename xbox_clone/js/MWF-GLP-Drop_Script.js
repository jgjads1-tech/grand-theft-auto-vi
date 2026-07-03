var purchaseSectionList = $('.purchaseSection');

$.each( purchaseSectionList , function( i ) {
    var currentPurchaseSection = $(this);

    $(this).find(".purchaseDrop").change(function  () {
        hideButtonsAndImage(currentPurchaseSection, $(this));
    }); // end Change function
}); // end Each

var hideButtonsAndImage = function(section, dropdown) {
   var purchaseButtons = section.find('.purchaseButtons');
   var xpaImage = section.find('.c-image');
   var dropVal = dropdown.find('option:selected').val().toLowerCase();
   
   $(purchaseButtons).hide();
   section.find($('.' + dropdown.val())).show();
   if (dropVal.includes('disc')) {
      xpaImage.css("display", "none");
   } else {
     xpaImage.css("display", "inline-block");
   }
  // price areas
  $(section).find(".priceareas").addClass("hidden")
  if (dropVal.indexOf("download") !== -1) {
    $(section).find(".pricedl").removeClass("hidden")
  } else if (dropVal.indexOf("disc") !== -1)  {
    $(section).find(".pricedisc").removeClass("hidden")
  } else if (dropVal.indexOf("option") !== -1)  {
    $(section).find(".priceother").removeClass("hidden")
  }
}; // end hideButtonsAndImage function

 
