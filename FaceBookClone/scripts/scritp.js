function showMore() {
    var more = document.querySelectorAll("#more")
    var moreButton = document.getElementById("more-button")
    if (moreButton.style.display != "none") {
        moreButton.style.display = "none"
    } else {
        moreButton.style.display = "flex"
    }
    for (let i = 0; i < more.length; i++) {
        more[i].style.display = "flex"
    }
}

function showLess() {
    var more = document.querySelectorAll("#more")
    var moreButton = document.getElementById("more-button")
    moreButton.style.display = "flex"
    for (let i = 0; i < more.length; i++) {
        more[i].style.display = "none"
    }
}

function addOverlay(obj) {
    var overlay = document.createElement('span');
    overlay.classList.add('story-overlay')
    obj.appendChild(overlay)
}

function deleteOverlay() {
    const overlay = document.querySelectorAll(".story-tray>.story-overlay")
    for (var e of overlay) {
        e.remove()
    }
}