const circle = document.querySelector('.mouseCircle')

var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;

function mouseCoordinates(e){
    // Capture the event object (mouse movement).
    // Get X coordinate (distance from left viewport edge) via clientX property.
    // Take total window width, subtract current coordinate and width of circle.
    // Do the same for Y coordinate (distance from top viewport edge).
    var mousePositionX = e.clientX - 26;
    var mousePositionY = e.clientY - 26;

    // Set horizontal and vertical position.
    circle.style.top = mousePositionY + 'px';
    circle.style.left = mousePositionX + 'px';
}

function changeColorOnTouch(){
    circle.style.backgroundColor = 'rgb(219, 217, 69, 0.5)';
}
// When the mouse moves, run the mouseCoordinates function.
document.body.addEventListener('mousemove', mouseCoordinates);
//document.body.addEventListener('mousemove', (e)=> {console.log(e.clientX, e.client.Y)});

// When the mouse touches the circle, run the changeColorOnTouch function.
circle.addEventListener('mouseenter', changeColorOnTouch);

// When the mouse leaves the circle, remove inline styles with an anonymous function.
circle.addEventListener('mouseleave', function(){circle.removeAttribute("style");}, false);
