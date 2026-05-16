// Returns appropriate title based on calling page
function generateTitle(page) {
    var titles = [];
    titles["splash"] = "Oct 2016 - Feb 2020";
    titles["current"] = "100 Generated Images";
    titles["monthly"] = "All Daily Selected Images";
    titles["selected"] = "Selected Images This Month";
    titles["result"] = "End Result";

    var title = "Project RAT (Randomized Art Trial)";
    if(page != "splash") title += "<br>";
    title += titles[page];

    $("#rat_title").html(title);
}

function generateLinks() {
    var dailyGenerated = '<a id="current" href="rat.html">100 Generated Images</a><br><br>';
    var dailySelected = '<a href="rat_daily_selected.html">Selected Images This Month</a><br><br>';
    var monthlyCompilation = '<a href="rat_monthly_compilation.html">All Daily Selected Images</a><br><br>';
    var resultLink = '<a href="rat_result.html">End Result Feb 2020</a>';

    $("#rat_links").append("DAILY<br><br>" + dailyGenerated + dailySelected + "<br>MONTHLY COMPILATIONS<br><br>" + monthlyCompilation + "<br>" + resultLink);
}

function generateText() {
    var table = '<table id="rat_text_table">' +
        '<tr>' +
        '<td>Project name:</td>' +
        '<td>RAT</td>' +
        '</tr>' +
        '<tr>' +
        '<td>Project start:</td>' +
        '<td>2016-10-01</td>' +
        '</tr>' +
        '<tr>' +
        '<td>Project end:</td>' +
        '<td>2020-02-29</td> ' +
        '</tr> ' +
        '<tr> ' +
        '<td>Curator:</td> ' +
        '<td>Ove Carlson</td> ' +
        '</tr> ' +
        '<tr> ' +
        '<td>Computer program:</td> ' +
        '<td>ArtGen</td> ' +
        '</tr> ' +
        '<tr> ' +
        '<td>ArtGen specification:</td> ' +
        '<td>Ove Carlson</td> ' +
        '</tr> ' +
        '</table>';
    
    var text = "RAT - Randomized Art Trial is a project that aims to investigate and raise questions regarding the " +
        "circumstances a work of art can be created. In order to do so, the computer program ArtGen has been developed." +
        " ArtGen is the backbone in the project and is designed by Ove Carlson.<br><br>" +
        "Every day ArtGen randomly creates 100 images and over the project period more than 100.000 images " +
        "will have been randomly created. From the 100 daily images, ArtGen randomly selects one image. The " +
        "continuous process of creating and selecting images can be followed on www.carlson.se.<br><br>" +
        "At project end after 41 months (randomly decided by ArtGen), one previously selected image is chosen. This " +
        "final image is to be considered the projects end result.<br><br>" +
        "What is art? When does art become art? Who is an artist?";

    
    $("#rat_text").append(table + "<br><br>").append(text);
}

// Used on front page of RAT
function loadSplash() {
    var date = new Date().getDate();
    if(date.toString().length == 1) date = "0" + date;
    var path = "rat/daily_selected/" + date + ".png";
    $("#rat_splash_image").attr("src", path);
}

// Used on "current" page
function loadCurrent() {
    var path = "rat/daily_generated/daily.png";
    $("#current_image").attr("src", path);
}

// Numerical value of elapsed months since Oct 2016
function elapsedMonths() {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;

    if(year == 2016) {
        return month - 10;
    } else {
        var yearDiff = year - 2016;
        return yearDiff * 12 + month - 10;
    }
}

// Activates links on history page based on how many months
// have passed since Oct 2016
function activateLinks(iterations) {
    var year = 16;
    var month = 10;
    var id = 0;
    if(iterations < 0) iterations = 0;
    $("ul").find("li").each(function(index) {
        if(index == iterations) return false;
        id = year + pad(month);
        $(this).html('<a href="#" id="' + id + '" class="history_link">' + $(this).text() + '</a>');
        month++;
        if(month > 12) {
            year++;
            month = 1;
        }
    })
}

// Pads one-digit integers with leading zero
// Returns two-digit integers as string
function pad(num) {
    var numString = num.toString();
    if(numString.length == 1) return "0" + numString;
    else return numString;
}

// Event listener for clicking on history links
$(document).on("click", ".history_link", function() {
    loadHistory(this);
});

// Loads appropriate matrix on history site when link is clicked
function loadHistory(clicked) {
    var path = "rat/history/" + clicked.id + "_matrix.png";
    $("#history_image").attr("src", path);
}

function generateSelectedRows() {
    var dateObject = new Date();
    var date = dateObject.getDate();
    var month = dateObject.getMonth();
    var builder = "";
    var path = "";
    var text = "";
    var result = "";
    
    for(var i = 1; i <= date; i++) {
        text = months[month] + " " + i;
        if(i.toString().length == 1) i = "0" + i;
        path = "rat/daily_selected/" + i + ".png";
        builder += '<div class="col-xs-6">';
        builder += '<img class="img-responsive center-block" src="' + path + '" width="350px" height="350px">';
        builder += '<p class="selectedText">' + text + '</p>';
        builder += '</div>';
        result = builder + result;
        builder = "";
    }

    $("#selected").append(result);
}

function getDateMonth() {
    var dateObject = new Date();
    var date = dateObject.getDate().toString();
    if(date.length == 1) date = "0" + date;
    var month = (dateObject.getMonth() + 1).toString();
    if(month.length == 1) month = "0" + month;
    return date + month;
}