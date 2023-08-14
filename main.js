document.addEventListener("DOMContentLoaded", function() {
    var video = document.getElementById("video");
    video.addEventListener("ended", function() {
        video.currentTime = 0;
        video.play();
    });
});
