function toggleMenu () {
    let menuOpen = document.querySelector(".hamburger-bar");
    let menuClose = document.querySelector(".bar-close");
    let icon = document.querySelector(".menu-links")
    
    menuOpen.classList.toggle("open");
    menuClose.classList.toggle("close");
    icon.classList.toggle("open")
  
}

var audio = document.getElementById("myAudio");
function playAudio() {
    audio.play();
}
        document.addEventListener("click", function() {
            playAudio(); 
            audio.style.display= 'block';
            document.removeEventListener("click", arguments.callee);
            
        });


