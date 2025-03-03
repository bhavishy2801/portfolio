let vid = document.getElementById("myVideo");
vid.playbackRate = 2;

document.getElementById('overlayImage').addEventListener('click', function() {
    document.getElementById('myVideo').play();
  });

  document.querySelector('.hamburger-menu').addEventListener('click', function() {
    document.querySelector('.nav-menu').classList.toggle('active');
  }); 
