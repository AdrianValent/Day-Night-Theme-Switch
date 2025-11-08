const lampIcons = document.querySelectorAll(".material-symbols-outlined");
const dayLight = document.querySelector("body");
const constellation = document.getElementById("particles-background");
const moon = document.querySelector(".moon");
const sun = document.querySelector(".sun");

lampIcons.forEach(lampIcon => {
    lampIcon.addEventListener("click", () => {

        if (lampIcon.style.color === "rgb(249, 203, 67)") {
            lampIcon.style.color = "cyan";
            dayLight.style.backgroundColor = "#000";
            constellation.style.display = "block";
            moon.style.display = "block";
            sun.style.display = "none";
        } else {
            lampIcon.style.color = "#F9CB43";
            dayLight.style.backgroundColor = "#fff";
            constellation.style.display = "none";
            moon.style.display = "none";
            sun.style.display = "block";
        }
    });
});