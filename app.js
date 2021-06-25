var canvas = new fabric.Canvas('myCanvas');

var block_width = 30;
var block_height = 30;

var player_x = 10;
var player_y = 10;

var player_object = "";
var block_img_object = "";

function player_update() {
    fabric.Image.fromURL("player.png", function(Img) {
        player_object = Img;
        player_object.scaleToWidth(80);
        player_object.scaleToHeight(100);

        player_object.set({
            top: player_y,
            left: player_x
        })

        canvas.add(player_object)
    })
}

function new_img_block(getImg) {
    fabric.Image.fromURL(getImg, function(Img) {
        block_img_object = Img;
        block_img_object.scaleToWidth(block_width);
        block_img_object.scaleToHeight(block_height);

        block_img_object.set({
            top: player_y,
            left: player_x
        })

        canvas.add(block_img_object);
    })
}

window.addEventListener("keydown", mykeypress);

function mykeypress(e) {
    var key = e.keyCode;
    console.log(key);

    if(e.shiftKey == true && key == "80") {
        block_width = block_width + 10;
        block_height = block_height + 10;
        document.getElementById("span_current_width").innerHTML = block_width;
        document.getElementById("span_current_height").innerHTML = block_height;
        console.log(key)
    }

    if(e.shiftKey == true && key == "77") {
        block_width = block_width - 10;
        block_height = block_height - 10;
        document.getElementById("span_current_width").innerHTML = block_width;
        document.getElementById("span_current_height").innerHTML = block_height;
        console.log(key)
    }

    if(key == "70") {
        new_img_block('ironman_face.png');
        console.log('f');
    }

    if(key == "66") {
        new_img_block('spiderman_body.png');
        console.log('b');
    }

    if(key == "76") {
        new_img_block('hulk_legs.png');
        console.log('l');
    }

    if(key == "82") {
        new_img_block('thor_right_hand.png');
        console.log('r');
    }

    if(key == "72") {
        new_img_block('captain_america_left_hand.png');
        console.log('h');
    }

    if(key == "37") {
        console.log("Left");
        player_left();
    }

    if(key == "38") {
        console.log("Up");
        player_up();
    }

    if(key == "39") {
        console.log("Right");
        player_right();
    }

    if(key == "40") {
        console.log("Down");
        player_down();
    }
}

function player_up() {
    if(player_y >= 0) {
        player_y = player_y - block_height;
        canvas.remove(player_object);
        player_update();
        console.log("player x = " + player_x + " player y = " + player_y);
    }
}

function player_down() {
    if(player_y <= 480) {
        player_y = player_y + block_height;
        canvas.remove(player_object);
        player_update();
        console.log("player x = " + player_x + " player y = " + player_y);
    }
}

function player_left() {
    if(player_x >= 0) {
        player_x = player_x - block_width;
        canvas.remove(player_object);
        player_update();
        console.log("player x = " + player_x + " player y = " + player_y);
    }
}

function player_right() {
    if(player_x <= 850) {
        player_x = player_x + block_width;
        canvas.remove(player_object);
        player_update();
        console.log("player x = " + player_x + " player y = " + player_y);
    }
}