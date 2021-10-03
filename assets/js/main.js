//Check to see if the window is top if not then display button
$(window).scroll(function() {

    // Show button after 100px
    var showAfter = 100;
    if ($(this).scrollTop() > showAfter) {
        $('.back-to-top').fadeIn();
    } else {
        $('.back-to-top').fadeOut();
    }
});

//Click event to scroll to top
$('.back-to-top').click(function() {
    $('html, body').animate({
        scrollTop: 0
    }, 800);
    return false;
});


$(document).ready(function() {
    $("#chartContainer__infected-case").show();
    $("#chartContainer__cured").hide();
    $("#chartContainer__die").hide();

    $(".btn-case").click(function() {
        $("#chartContainer__infected-case").show();
        $("#chartContainer__cured").hide();
        $("#chartContainer__die").hide();
    });
    $(".btn-cured").click(function() {
        $("#chartContainer__infected-case").hide();
        $("#chartContainer__cured").show();
        $("#chartContainer__die").hide();
    });
    $(".btn-die").click(function() {
        $("#chartContainer__infected-case").hide();
        $("#chartContainer__cured").hide();
        $("#chartContainer__die").show();
    });
});


/*update date-time header*/
var today = new Date();
var weekday = new Array(7);
weekday[0] = "Chủ nhật";
weekday[1] = "Thứ hai";
weekday[2] = "Thứ ba";
weekday[3] = "Thứ tư";
weekday[4] = "Thứ năm";
weekday[5] = "Thứ sáu";
weekday[6] = "Thứ bảy";
var n = weekday[today.getDay()];
var date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
var dateTime = n + ", " + date;

document.getElementById("date").innerHTML = dateTime;



/* animation input search*/
$(document).ready(function() {
    $(".box-search").hide();
    $(".icon-search").hover(function() {
        $(".box-search").show(200);
    }, );
    $(".main").hover(function() {
        $(".box-search").hide(200);
    }, );
});



$(".box-tg").hide();

$(".tg").click(function() {
    $(".box-vn").hide();
    $(".box-tg").show();
});


$(".vn").click(function() {
    $(".box-tg").hide();
    $(".box-vn").show();
});