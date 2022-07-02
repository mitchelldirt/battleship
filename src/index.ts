window.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        const loadingBar = document.querySelector(".progress") as HTMLDivElement;
        loadingBar.classList.remove("displayNone");
    }
});