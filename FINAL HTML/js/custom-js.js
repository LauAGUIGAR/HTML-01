$(document).ready(function() {
    $("#meta-data").load("meta.html");
    $("#header-file").load("header.html");
    $("#footer").load("footer.html");
});

function revealMessage() {
    document.getElementById("hideM").style.display = 'block';
}
function Alertfunction() {
    alert("You are trying to order! Check back next semester");
}