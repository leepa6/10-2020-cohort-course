var currentPosition = 0;

/*
var prevImage = function () {
    currentPosition = currentPosition + 500;
    document.getElementById('windowjs').style.transform = 'translateX(' + currentPosition + 'px)'
}

var nextImage = function () {
    currentPosition = currentPosition - 500;
    document.getElementById('windowjs').style.transform = 'translateX(' + currentPosition + 'px)'
}

*/

var currentPosition = 0;

function prevImage() {
    console.log('iwork')
    if (currentPosition > -1000) {
        currentPosition -= 500;
        console.log(currentPosition)
        document.getElementById(
            "windowjs"
        ).style.transform = "translateX(" + currentPosition + "px)";
    }
}


function prevImage() {
    console.log('iwork')
    if (currentPosition < 2500) {
        currentPosition -= 500;
        document.getElementById(
            "windowjs"
        ).style.transform = "translateX(" + currentPosition + "px)";
    }
}

/* js feature . chat box break it down or to do list
// function prev () {}
create a task 
- set up if statement
check current position
make sure not out of bounds from positive and negatives