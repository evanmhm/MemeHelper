const {
    clipboard
} = require('electron');

var currentMode = "";
var lastClicked;
$(".top-btn").click(function() {
    if ($(this).attr("id") !== lastClicked) {
        $("#" + lastClicked).removeClass('selected');
        $(this).addClass('selected');
        currentMode = $(this).attr("id");
        lastClicked = $(this).attr("id");
    }
    update($("#input-TA").val());
});

$("#input-TA").on("input", function() {
    update($("#input-TA").val());
});

$("#randomize").click(function() {
    update($("#input-TA").val());
});

$("#copy").click(function() {
    if ($("#output-TA").val()) {
        content = $("#output-TA").val();
        clipboard.writeText(content);
        $('#check').addClass("fadeAnimation").one("animationend", function() {
            $("#check").removeClass("fadeAnimation");
        });
    }
});
