document.addEventListener("DOMContentLoaded", function() {
  var link = document.querySelector("a#targeting-tracker");
  if (link) {
    link.setAttribute("target", "_blank");
  }
});
