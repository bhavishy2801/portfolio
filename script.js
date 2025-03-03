let vid = document.getElementById("myVideo");
vid.playbackRate = 2;

document.getElementById('overlayImage').addEventListener('click', function() {
    document.getElementById('myVideo').play();
  });