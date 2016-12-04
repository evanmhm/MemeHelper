
function update(input) {
    var output = [];
    if (currentMode === "emoji") {
        output.push("");
        output = output.concat(input.split(" "));
        output.push("");
        output = output.join("👏");
    }

    $("#output-TA").text(output);
}
