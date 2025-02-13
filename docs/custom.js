document.addEventListener("DOMContentLoaded", function () {
    var toc = document.getElementById("TOC");
    var button = document.createElement("button");
    button.id = "toggle-toc";
    button.innerText = "Toggle Navigation";
    document.body.appendChild(button);

    button.addEventListener("click", function () {
        if (toc.style.display === "none" || toc.style.display === "") {
            toc.style.display = "block";
        } else {
            toc.style.display = "none";
        }
    });
});