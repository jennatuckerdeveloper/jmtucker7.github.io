document.getElementById("b1").addEventListener('click', function () {
    document.getElementById("skills").style.display = "flex";
    document.getElementById("summary").style.display = "none";
    document.getElementById("projects").style.display = "none";
});

document.getElementById("b2").addEventListener('click', function () {
    document.getElementById("summary").style.display = "flex";
    document.getElementById("skills").style.display = "none";
    document.getElementById("projects").style.display = "none";
});

document.getElementById("b3").addEventListener('click', function () {
    document.getElementById("projects").style.display = "flex";
    document.getElementById("summary").style.display = "none";
    document.getElementById("skills").style.display = "none";

});
