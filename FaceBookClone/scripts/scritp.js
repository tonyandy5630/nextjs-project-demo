function showMore() {
    let mores = document.querySelectorAll("#more")
    let moreButton = document.getElementById("more-button")
    if (moreButton.style.display != "none") {
        moreButton.style.display = "none"
    } else {
        moreButton.style.display = "flex"
    }

    mores.forEach(more => more.style.display = 'flex')
}

function showLess() {
    let more = document.querySelectorAll("#more")
    let moreButton = document.getElementById("more-button")
    moreButton.style.display = "flex"
    for (let i = 0; i < more.length; i++) {
        more[i].style.display = "none"
    }
}

function addOverlay(obj) {
    let overlay = document.createElement('span');
    let img = obj.querySelector("img")
    img.style.animation = "zoomIn 0.2s ease-out both"
    overlay.classList.add('story-overlay')
    obj.appendChild(overlay)
}

function deleteOverlay(obj) {
    const overlay = document.querySelectorAll(".story-tray>.story-overlay")
    let img = obj.querySelector("img")
    img.removeAttribute("animation")
    img.style.animation = "zoomOut 0.2s ease-in both"
    for (let e of overlay) {
        e.remove()
    }
}
let carousel = document.querySelector('.meet-carousel--container');
let carouselWidth = carousel.offsetWidth;
let initialLoc = carousel.getBoundingClientRect().x;
let leftBtn = document.querySelector('#left')
let RightBtn = document.querySelector('#right')
let parentWidth = document.querySelector('.feed-block--container').offsetWidth;
let scrollLength = 0;

if (scrollLength <= 0) {
    leftBtn.style.visibility = 'hidden'
} else {
    leftBtn.style.visibility = 'visible'
}

if (scrollLength > carouselWidth) {
    RightBtn.style.visibility = 'hidden'
} else {
    leftBtn.style.visibility = 'visible'
}


function scrollToLeft() {
    if (parentWidth < carouselWidth) {
        if (scrollLength > 0) {
            scrollLength -= parentWidth;
            carousel.style.transform = 'translateX(' + scrollLength * -1 + 'px)';
        }
        console.log("scroll:" + scrollLength)
    }


}

function scrollRight() {
    if (parentWidth < carouselWidth) {
        if (scrollLength <= carouselWidth) {
            scrollLength += parentWidth;
            carousel.style.transform = 'translateX(' + scrollLength * -1 + 'px)';
        }

        console.log("scroll left:" + scrollLength)
    }

}