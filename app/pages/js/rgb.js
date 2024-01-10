function color(){
    var red = document.getElementById("red").value,
    green = document.getElementById("green").value,
    blue = document.getElementById("blue").value;

    document.getElementById("red_s").innerHTML = red;
    document.getElementById("green_s").innerHTML = green;
    document.getElementById("blue_s").innerHTML = blue;
 
    var hex_r = parseInt(red).toString(16).toUpperCase(),
    hex_g = parseInt(green).toString(16).toUpperCase(),
    hex_b = parseInt(blue).toString(16).toUpperCase(),
    hex = hex_r + hex_g + hex_b;
 
    document.body.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";

    document.getElementById("hex").innerHTML = "#" + hex;
}
