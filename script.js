$(function () {
  $(".top-image").click(function () {
    console.log("here")
    //toggle between the title image and the gif
    if ($(".top-image").attr("src") === "us.jpg") {
      //means that the title image is the normal one
      $(".top-image").attr("src", "them.jpg")
    } else {
      //other one
      $(".top-image").attr("src", "us.jpg")
    }

  });
});