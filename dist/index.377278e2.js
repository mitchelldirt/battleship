"use strict";
window.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        const loadingBar = document.querySelector(".progress");
        const loadingBG = this.document.querySelector(".color");
        loadingBar.classList.remove("displayNone");
        loadingBG.classList.add("loadingAnimation");
    }
});

//# sourceMappingURL=index.377278e2.js.map
