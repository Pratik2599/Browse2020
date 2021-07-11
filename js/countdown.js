
var countDownDate = new Date("March 20, 2020 08:00:00").getTime();
var countDownDate1 = new Date("March 20, 2020 18:00:00").getTime();

var x = setInterval(function () {

    var now = new Date().getTime();

    var distance = countDownDate - now;
    var distance1 = countDownDate1 - now;

    var d = Math.floor(distance / (1000 * 60 * 60 * 24));
    var h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var s = Math.floor((distance % (1000 * 60)) / 1000);

    h = (h < 10) ? "0" + h : h;
    d = (d < 10) ? "0" + d : d;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    document.getElementById("days").innerHTML = d;
    document.getElementById("hours").innerHTML = h;
    document.getElementById("minutes").innerHTML = m;
    document.getElementById("seconds").innerHTML = s;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("clockdiv").innerHTML = "Event is Live";
    }

    if (distance1 < 0) {
        clearInterval(x);
        document.getElementById("clockdiv").innerHTML = "Event is Over";
    }

}, 1000);