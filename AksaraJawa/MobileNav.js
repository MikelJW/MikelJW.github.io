const hamburgerBtn = document.getElementById("hamburger");
const mobilemenu = document.getElementById("mobilemenu");
const hamburgericon = document.getElementById("menubutton");
const exiticon = document.getElementById("exitbutton");
let isopen = false;;

hamburgerBtn.addEventListener("click", () => {
    isopen = !isopen;
    if(isopen) {
        mobilemenu.classList.remove("translate-x-full");
        mobilemenu.classList.add("translate-x-0");
        hamburgericon.classList.add("hidden");
        exiticon.classList.remove("hidden");
        document.body.style.overflow = "hidden";
    }else{
        mobilemenu.classList.remove("translate-x-0");
        mobilemenu.classList.add("translate-x-full");
        hamburgericon.classList.remove("hidden");
        exiticon.classList.add("hidden");
        document.body.style.overflow = "";
    }
})
