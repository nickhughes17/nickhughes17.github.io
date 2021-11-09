var openButton1 = document.getElementById("dots-1");
var moreText1 = document.getElementById("more-1");
var closeButton1 = document.getElementById("less-1");
var openButton2 = document.getElementById("dots-2");
var moreText2 = document.getElementById("more-2");
var closeButton2 = document.getElementById("less-2");
var openButton3 = document.getElementById("dots-3");
var moreText3 = document.getElementById("more-3");
var closeButton3 = document.getElementById("less-3");


openButton1.addEventListener("click", toggleOpen);
closeButton1.addEventListener("click", toggleClose);
openButton2.addEventListener("click", toggleOpen);
closeButton2.addEventListener("click", toggleClose);
openButton3.addEventListener("click", toggleOpen);
closeButton3.addEventListener("click", toggleClose);

function toggleOpen(event) {
    event.target.style.display = "none";
    event.target.nextSibling.style.display = "inline";
    event.target.nextSibling.nextSibling.style.display = "inline";
}
function toggleClose(event) {
    event.target.style.display = "none";
    event.target.previousSibling.style.display = "none";
    event.target.previousSibling.previousSibling.style.display = "inline";
}