document.getElementById("start").addEventListener("click", function() {
    var minutes = parseInt(document.getElementById("minutes").value);
    var seconds = parseInt(document.getElementById("seconds").value);
    var totalSeconds = (minutes * 60) + seconds;
    
    var interval = setInterval(function() {
        var minutePart = parseInt(totalSeconds / 60, 10);
        var secondPart = parseInt(totalSeconds % 60, 10);

        minutePart = minutePart < 10 ? "0" + minutePart : minutePart;
        secondPart = secondPart < 10 ? "0" + secondPart : secondPart;

        document.getElementById("display").textContent = minutePart + ":" + secondPart;

        if (--totalSeconds < 0) {
            clearInterval(interval);
        }
    }, 1000);
});
