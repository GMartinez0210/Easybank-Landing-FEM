$(window).resize(function() {
    if (window.innerWidth <= 991) {
        $("#nav-button").removeClass("collapse")
        $("#nav-content").addClass("collapse")
        $("#button-request").addClass("collapse")
    }
    else {
        $("#nav-button").addClass("collapse")
        $("#nav-content").removeClass("collapse")
        $("#button-request").removeClass("collapse")
    }
})

/* $("#nav-button").click(function() {
    $("#hamburger-icon").toggleClass("collapse")
    alert("jquery")
}) */

console.log(document.getElementById("nav-button"))