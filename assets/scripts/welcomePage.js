const welcomePage = {
    starAnimationInterval: undefined,

    starAnimation: function () {
        const glowing_star_color_list = ["purple-glowing-star", "white-glowing-star", "pink-glowing-star"]

        welcomePage.starAnimationInterval = setInterval(() => {
            if (welcome_page.classList.contains("Visible")) {
                let child = welcome_page.appendChild(purple_glowing_star.cloneNode());
                child.classList.add(glowing_star_color_list[Math.floor(Math.random() * glowing_star_color_list.length)]);
                child.style.marginLeft = Math.floor(((Math.random() * window.innerWidth)) - welcome_page.getBoundingClientRect().left) + 'px';
                child.style.marginTop = Math.floor(Math.random() * window.innerHeight) - welcome_page.getBoundingClientRect().height + 'px';
                setTimeout(() => {
                    child.remove();
                }, 1000);
            } else {
                clearInterval(welcomePage.starAnimationInterval);
                welcomePage.starAnimationInterval = undefined;
            }
        }, 200);
    },

    enterGame: function () {
        soundsManager.clickSound.play();
        let menuBGM = soundsManager.menuBGM.play();
        soundsManager.menuBGM.fade(0, settings.musicVolume, 1000, menuBGM);

        methods.switchShine(welcome_clickToStart);
        let welcome_clickToStart2 = welcome_page.appendChild(welcome_clickToStart.cloneNode(false));
        let timer = setInterval(() => {
            if (welcome_clickToStart.style.opacity === "" || welcome_clickToStart.style.opacity > 0) {
                welcome_icon.style.opacity = welcome_icon.style.opacity === "" ? "0.1" : welcome_icon.style.opacity - 0.001;
                welcome_clickToStart.style.opacity = welcome_clickToStart.style.opacity === "" ? "1" : welcome_clickToStart.style.opacity - 0.01;
                welcome_clickToStart2.style.opacity = welcome_clickToStart2.style.opacity === "" ? "1" : welcome_clickToStart2.style.opacity - 0.02;
                welcome_clickToStart2.style.transform = welcome_clickToStart2.style.transform === "" ?
                    "scale(1)" : "scale(" + (parseFloat(welcome_clickToStart2.style.transform.split("(")[1].replace(")", "")) + 0.01) + ")";
            } else {
                welcome_page.style.opacity = welcome_page.style.opacity === "" ? "1" : welcome_page.style.opacity - 0.01;
                if (chapters_bg.style.opacity < 0.15) {
                    welcome_page.style.opacity = "1";
                }
                if (chapters_bg.style.opacity < 0.2 || chapters_bg.style.opacity === ""){
                    chapters_bg.style.opacity = chapters_bg.style.opacity === "" ? "0" : parseFloat(chapters_bg.style.opacity) + 0.002;
                }
                chapterList.style.opacity = chapterList.style.opacity === "" ? "0" : parseFloat(chapterList.style.opacity) + 0.01;
                functions.style.opacity = functions.style.opacity === "" ? "0" : parseFloat(functions.style.opacity) + 0.01;
                if (welcome_page.style.opacity <= 0) {
                    clearInterval(timer);
                    methods.switchVisible(welcome_page);
                    methods.switchVisible(chapterList);
                    methods.switchVisible(functions);
                    functions.style.pointerEvents = "none";
                    settings_button.style.pointerEvents = "fill";
                    authors_button.style.pointerEvents = "fill";
                    animationPlaying = false;
                }
            }
        }, 10);
    }
};