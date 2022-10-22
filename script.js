function showCoords(event) {
    //var x = event.screenX;
    //var y = event.screenY;
    var x = event.clientX;
    var y = event.clientY;
    var coords = "X coords: " + x + ", Y coords: " + y
    document.getElementById("demo").innerHTML = coords;
  }
  
  /*var navLinks = document.getElementById('navLinks');
  window.addEventListener("navLinks", e => {
    e.preventDefault();
    let x = e.offsetX, y = e.offsetY,
    winWidth = window.innerWidth,
    winHeight = window.innerHeight,
    cmWidth = navLinks.offsetWidth,
    cmHeight = navLinks.offsetHeight;

    x = x > winWidth - cmWidth ? winWidth - cmWidth - 5 : x;
    y = y > winHeight - cmHeight ? winHeight - cmHeight - 5 : y;
    
    navLinks.style.left = `${x}px`;
    navLinks.style.top = `${y}px`;
    navLinks.style.visibility = "visible";
});

document.addEventListener("onClick", () => navLinks.style.visibility = "hidden");*/