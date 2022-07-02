function up() {
    if (greencar_y >= 0) {
        greencar_y -= 10;
        console.log("When up arrow is pressed =" + greencar_x + "-" + greencar_y);
        uploadBackground();
        uploadgreencar();
    }
}
function down() {
    if (greencar_y <= 500) {
        greencar_y += 10;
        console.log("When down arrow is pressed =" + greencar_x + "-" + greencar_y);
        uploadBackground();
        uploadgreencar();
    }
}
function left() {
    if (greencar_x >= 0) {
        greencar_x -= 10;
        console.log("When  left arrow is pressed =" + greencar_x + "-" + greencar_y);
        uploadBackground();
        uploadgreencar();
    }
}
function right() {
    if (greencar_x <= 700) {
        greencar_x += 10;
        console.log("When right arrow is pressed =" + greencar_x + "-" + greencar_y);
        uploadBackground();
        uploadgreencar();
    }
}