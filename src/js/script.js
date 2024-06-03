// Esconde o texto inicialmente
document.addEventListener("DOMContentLoaded", function() {
    var text = document.getElementById("quinzenal-text");
    text.style.display = "none";
});

function toggleTable(tableId) {
    var table = document.getElementById(tableId);
    var text = document.getElementById(tableId + "-text");
    if (table.style.display === "none") {
        table.style.display = "table";
        text.style.display = "block";
    } else {
        table.style.display = "none";
        text.style.display = "none";
    }
}