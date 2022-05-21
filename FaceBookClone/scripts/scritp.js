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
    var img = obj.querySelector("img")
    img.style.animation = "zoomIn 0.2s ease-out both"
    overlay.classList.add('story-overlay')
    obj.appendChild(overlay)
}

function deleteOverlay(obj) {
    const overlay = document.querySelectorAll(".story-tray>.story-overlay")
    var img = obj.querySelector("img")
    img.removeAttribute("animation")
    img.style.animation = "zoomOut 0.2s ease-in both"
    for (var e of overlay) {
        e.remove()
    }
}