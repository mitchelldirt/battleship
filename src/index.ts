window.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        const loadingBar = document.querySelector(".progress") as HTMLDivElement;
        const loadingBG = this.document.querySelector(".color") as HTMLDivElement;
        loadingBar.classList.remove("displayNone");
        loadingBG.classList.add("loadingAnimation");
    }
});