/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function toggleNav() {
    if ($("#sidebar").hasClass("open")) {
        closeNav();
    } else {
        openNav();
    }
}

function openNav() {
    $("#sidebar").addClass("open");
    document.getElementById("sidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    $("#sidebar").removeClass("open");
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

$(function () {
    openNav();
});
