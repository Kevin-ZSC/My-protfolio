function toggleMenu () {
    let menuOpen = document.querySelector(".hamburger-bar");
    let menuClose = document.querySelector(".bar-close");
    let icon = document.querySelector(".menu-links")
    
    menuOpen.classList.toggle("open");
    menuClose.classList.toggle("close");
    icon.classList.toggle("open")
  
}


