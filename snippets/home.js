function shrinkFace() {
    myFace = document.getElementById('my-face')
    widthString = window.getComputedStyle(myFace).width.slice(0, -2)
    widthInt = parseInt(widthString)
    newWidthInt = widthInt / 1.5
    myFace.style.width = String(newWidthInt) + "px"
}
