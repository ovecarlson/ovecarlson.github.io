$(document).ready(function () {
    $("#menuRow").load("menu.html");
    $("#topScroll").hide();
});

generateRows = function (contentObject, selector) {
    var builder = '<div class="row pictureGridRow">';
    var keys = Object.keys(contentObject);
    for (var i = 0; i < keys.length; i++) {
        builder += '<div class="col-xs-3 pictureFrame">';
        builder += '<div class="img-container">';
        builder += '<img class="img-responsive" src="' + keys[i] + '">';
        builder += '</div>';
        builder += '<p class="footerTextOld">' + contentObject[keys[i]] + '</p>';
        builder += '</div>';
    }
    builder += '</div>';
    $(selector).append(builder);
};

$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y >= 300) {
        $("#topScroll").fadeIn();
    } else {
        $("#topScroll").fadeOut();
    }
});

goToTop = function () {
    $(document).scrollTop(0);
};
