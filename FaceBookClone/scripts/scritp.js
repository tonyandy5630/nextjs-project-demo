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