var btnContainer = document.getElementById("act-lang");
var btns = btnContainer.getElementsByClassName("language");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active-lang");
        current[0].className = current[0].className.replace(" active-lang", "");
        this.className += " active-lang";
    });
}

var btnContainer = document.getElementById("act-exp");
var btns = btnContainer.getElementsByClassName("exp--title");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active-exp");
        current[0].className = current[0].className.replace(" active-exp", "");
        this.className += " active-exp";
    });
}

var btnContainer = document.getElementById("act-nav");
var btns = btnContainer.getElementsByClassName("main-nav-link");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("main-nav-link");
        current[0].className = current[0].className.replace(" main-nav-link", "");
        this.className += " main-nav-link";
    });
}

var btnContainer = document.getElementById("act-sl");
var btns = btnContainer.getElementsByClassName("slider__item");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active-slider");
        current[0].className = current[0].className.replace(" active-slider", "");
        this.className += " active-slider";
    });
}

