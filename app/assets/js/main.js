var currentMode = "";

$("#emoji").click(function(){
    currentMode = "emoji";
    update($("#input-TA").val());
});

$("#aesthetic").click(function(){
    currentMode = "aesthetic";
    update($("#input-TA").val());
});

$("#random").click(function(){
    currentMode = "random";
    update($("#input-TA").val());
});

$("#input-TA").on("input", function() {
	update($("#input-TA").val());
});

$("#randomize").click(function() {
    update($("#input-TA").val());
})
