window.onresize = function() {
    changeTitle();
};

function changeTitle() {
    const width = window.innerWidth || document.documentElement.clientWidth;
    let title;
    if (width <= 600) {
        title = "mobile";
    } else  if (width <= 1024) {
        title = "tablet";
    } else {
        title = "desktop";
    }
    document.title = title;
}

changeTitle();