let toggle = document.querySelector(".logo");
let sideMenu = document.querySelector("aside");
let mode = document.querySelector(".mode");
let modeIcon = document.querySelector(".mode i").classList;
let menu = document.querySelector("ul.main");
let menuList = document.querySelectorAll("ul.main li");

toggle.addEventListener("click", (e) => {
    sideMenu.classList.toggle("expand");
});

menuList.forEach((e, index) => {
    e.addEventListener("click", (event) => {
        menuList.forEach((l) => {
            l.classList.remove("active");
        });
        menu.style.setProperty("--i", index);
        e.classList.add("active");
    });
});

mode.addEventListener("click", e => {
    document.body.classList.toggle("dark");
    if (modeIcon.contains("fa-moon")) {
        modeIcon.replace("fa-moon", "fa-sun");
    } else {
        modeIcon.replace("fa-sun", "fa-moon");
    }
});



