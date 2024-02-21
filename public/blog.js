$(".blog-text").on("input", function() {
  letterCount();
});

$(".blog-header").on("input", function() {
  var headerMaxLength = 20;
  var headerText = $(".blog-header").val();

  if(headerText.length > headerMaxLength) {
    $(".blog-header").val(headerText.substring(0,headerMaxLength));
  } else {

  }
});

function letterCount() {
  var maxLength = 140;
  var text = $(".blog-text").val();
  
  if (text.length > maxLength) {
    $(".blog-text").val(text.substring(0, maxLength));
    $(".image-text").text(maxLength + "/140");
  } else {
    $(".image-text").text(text.length + "/140");
  }
}


