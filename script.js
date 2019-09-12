var casas = {};
var container = document.getElementById("container");


for (var x = 0; x < 9; x++) {
    casas[x] = document.getElementById("casa" + x);
}


casas[0].addEventListener("click", function() {
    casas[0].innerText = "X";
});
casas[1].addEventListener("click", function() {
    casas[1].innerText = "X";
});
casas[2].addEventListener("click", function() {
    casas[2].innerText = "X";
});
casas[3].addEventListener("click", function() {
    casas[3].innerText = "X";
});
casas[4].addEventListener("click", function() {
    casas[4].innerText = "X";
});
casas[5].addEventListener("click", function() {
    casas[5].innerText = "X";
});
casas[6].addEventListener("click", function() {
    casas[6].innerText = "X";
});
casas[7].addEventListener("click", function() {
    casas[7].innerText = "X";
});
casas[8].addEventListener("click", function() {
    casas[8].innerText = "X";
});