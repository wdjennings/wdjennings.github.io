
function auto_play(video){
    if (video.paused)
        video.play();
    else
        video.pause(); 
}

var video1 = document.getElementById('video1');
video1.addEventListener('click',function() { auto_play(video1); },false);

var video2 = document.getElementById('video2');
video2.addEventListener('click',function() { auto_play(video2); },false);

var video3 = document.getElementById('video3');
video3.addEventListener('click',function() { auto_play(video3); },false);

var video4 = document.getElementById('video4');
video4.addEventListener('click',function() { auto_play(video4); },false);

var video5 = document.getElementById('video5');
video5.addEventListener('click',function() { auto_play(video5); },false);

