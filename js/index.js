function preloader() {
    if (document.images) {
        var img1 = new Image();
        var img2 = new Image();
        var img3 = new Image();
        var img4 = new Image();
        var img5 = new Image();

        img1.src="images/startpage/slideshow1.jpg";
        img2.src="images/startpage/slideshow3.jpg";
        img3.src="images/startpage/slideshow4.jpg";
        img4.src="images/startpage/slideshow7.jpg";
        img5.src="images/startpage/slideshow9.jpg";
    }
}
function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            if (oldonload) {
                oldonload();
            }
            func();
        }
    }
}
addLoadEvent(preloader);

$(function () {
    var duration = 7000;
    var speed = 700;
    var playList = [];
    var length = $('.slideshow li').length - 1;
    var i = 0;

    for(n = 0; n <= length; n++) {
        playList.push(n);
    }
    playList = shuffle(playList);

    slidePicture = function () {
        $('.slideshow li').eq(playList[i]).fadeOut(speed, function () {
            var next = (i >= length) ? 0 : i + 1;
            $('.slideshow li').eq(playList[next]).fadeIn(speed);
            i = next;
        });
    };

    $('.slideshow li').hide();
    $('.slideshow li').eq(playList[i]).show();
    setInterval(slidePicture, duration);
});

function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}