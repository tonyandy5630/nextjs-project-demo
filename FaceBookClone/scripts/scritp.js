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
let leftBtn = document.querySelector('.left')
let RightBtn = document.querySelector('.right')
let parentWidth = document.querySelector('.feed-block--container').offsetWidth;
let maxScroll = Math.floor(carouselWidth / parentWidth);
let scrollCount = 0;
let scrollLength = 0;

window.addEventListener("load", function() {
    visibleLeft();
    visibleRight();
})

carousel.addEventListener("transitionend", function() {
    visibleLeft();
    visibleRight();
})

function visibleLeft() {
    if (scrollLength == 0) {
        leftBtn.style.visibility = 'hidden'
    } else {
        leftBtn.style.visibility = 'visible'
    }
}


function visibleRight() {
    if (scrollCount == maxScroll) {
        RightBtn.style.visibility = 'hidden'
    } else {
        RightBtn.style.visibility = 'visible'
    }
}

function scrollToLeft() {
    visibleRight();

    if (parentWidth < carouselWidth) {
        if (scrollLength > 0) {
            scrollLength -= parentWidth;
            carousel.style.transform = 'translateX(' + scrollLength * -1 + 'px)';
            scrollCount--;
        }
    }
}

function scrollRight() {
    visibleLeft();
    if (parentWidth < carouselWidth) {
        scrollLength += parentWidth;
        if (scrollLength <= carouselWidth) {
            carousel.style.transform = 'translateX(' + scrollLength * -1 + 'px)';
            scrollCount++;
        } else {
            scrollLength -= parentWidth;
        }
    }
}

function addContacts() {

    const parent = document.querySelector('.right-nav > .child-container--bottom-half')
    for (i = 0; i < 20; i++) {
        let div = document.createElement('div');
        div.classList.add('child-container--item-container')
        div.innerHTML = ` <span class="post--avatar meet">
                        <img class="post-avatar--img" src="images/header-ava.png">
                        <span class="online-icon"></span>
                    </span>
                    <span class="child-container-icon--title"> Ngoc Linh</span>`;
        parent.appendChild(div)
    }
}
addContacts();