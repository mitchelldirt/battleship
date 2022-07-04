"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
let main = document.querySelector("main");
window.onload = ()=>{
    main.appendChild();
};
window.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        const loadingBar = document.querySelector(".progress");
        const loadingBG = this.document.querySelector(".color");
        loadingBar.classList.remove("displayNone");
        loadingBG.classList.add("loadingAnimation");
    }
});

//# sourceMappingURL=index.377278e2.js.map
