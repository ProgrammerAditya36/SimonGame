var chosencolor = [];
var usercolor;
var color = ["red", "green", "yellow", "blue"];
var level = 0;
var started = false;
function nextsequence() {
    level++;
    usercolor = [];
    $("#level-title").text("Level " + level);
    var randomNumber = Math.floor(Math.random() * 4);

    var randomChosencolor = color[randomNumber];

    chosencolor.push(randomChosencolor);

    $("#" + randomChosencolor).fadeOut(200).fadeIn(200);
    playsound(randomChosencolor);



}
$("h1").click(function (e) {
    if (started === false) {
        $("#level-title").text("Level " + level);
        nextsequence();
        started = true;

    }

});
$(".btn").click(function (e) {
    usercolor.push(this.id);
    playsound(this.id);
    animatepress(this.id);
    checkanswer(usercolor.length - 1);
});

function playsound(key) {
    var audio = new Audio("sounds/" + key + ".mp3")
    audio.play();
}
function animatepress(color) {
    $("#" + color).addClass("pressed");
    window.setTimeout(function () { $("." + color).removeClass("pressed"); }, 100)
}
function checkanswer(currentlevel) {
    if (usercolor[currentlevel] === chosencolor[currentlevel]) {
        console.log("success");
        if (usercolor.length === chosencolor.length) {
            window.setTimeout(function () { nextsequence(); }, 1000);
        }
    } else {
        console.log("fail");
        var audio = new Audio("sounds/wrong.mp3");
        audio.play();
        $("body").addClass("game-over ");
        window.setTimeout(function () { $("body").removeClass("game-over "); }, 200);
        startover();
    }
}
function startover() {
    chosencolor = [];
    usercolor;
    level = 0;
    started = false;
    $("#level-title").text("Game Over Press Here  to Continue");
}