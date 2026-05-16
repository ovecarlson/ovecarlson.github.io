$(document).ready(function() {
    $("#menuRow").load("menu.html");
    $("#topScroll").hide();
});

// Load code for modal on document load
/*$(document).ready(function() {
    var modal = '<div class="modal fade" tabindex="-1" role="dialog" id="artgen_modal">' +
        '<div class="modal-dialog" role="document">' +
        '<div class="modal-content">' +
        '<div class="modal-header">' +
        '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>' +
        '<h4 class="modal-title">ArtGen</h4>' +
        '</div>' +
        '<div class="modal-body">' +
        'The computer program ArtGen is a multi-purpose program developed in Python to support varying kinds of visual art ' +
        'projects. The basic idea is a program that can generate images given a certain context but also has a strong ' +
        'random element. A requirement is that the program can be used for different purposes and that the functionality ' +
        'of the program can be changed in a flexible way. The program is designed by the artist Ove Carlson and is ' +
        'implemented by Simon Carlson, master\'s student at KTH, Royal Institute of Technology in Stockholm.<br><br>' +
        'ArtGen creates a specified amount of images where every image is unique. The probability that an image is ' +
        'recreated is virtually zero. Each image is structured in layers where the amount of shapes, color and transparency ' +
        'of each shape is randomly chosen according to some given boundaries. Predetermined shapes and colors ' +
        'can be used if the user wishes so.<br><br>' +
        'The result is images in an abstract geometric spirit that is close to the visual imagery of Ove Carlson. ' +
        'The images can be either regarded as complete works or as a base for Ove to work upon.' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>';
    $("body").append(modal);
});*/

function loadFront() {
    var time = currentTime("number");
    var path = "rat/current/" + time + "_matrix.png";
    $("#rat_splash_image").attr("src", path);
}

generateRows = function(contentObject, selector) {
    var builder = '<div class="row pictureGridRow">';
    var keys = Object.keys(contentObject);
    for(var i = 0; i < keys.length; i++) {
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

$(document).scroll(function() {
    var y = $(this).scrollTop();
    if(y >= 300) {
        $("#topScroll").fadeIn();
    } else {
        $("#topScroll").fadeOut();
    }
});

goToTop = function() {
    $(document).scrollTop(0);
};

var months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

currentTime = function(version) {
    var date = new Date();
    var month = date.getMonth();
    var year = date.getFullYear();
    if(version == "text") {
        return months[month] + " " + year;
    } else if(version == "number") {
        month++;
        return year.toString().slice(-2) + pad(month);
    }
};

