let main = document.querySelector("main") as HTMLDivElement;

window.onload = () => {
    const splashPageElement = document.createElement("splashPage");
    splashPageElement.innerHTML = `
            <p>PRESS <kbd>ENTER</kbd> TO PLAY</p>
            <div class="progress displayNone">
                <div class="color"></div>
            </div>
    `;
    console.log(splashPageElement)
    main.appendChild(splashPageElement);
}

window.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        const loadingBar = document.querySelector(".progress") as HTMLDivElement;
        const loadingBG = this.document.querySelector(".color") as HTMLDivElement;
        loadingBar.classList.remove("displayNone");
        loadingBG.classList.add("loadingAnimation");
    }
});