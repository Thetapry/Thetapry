const waitingPage = {
    gameStartButton: document.createElement('div'),
    gameBackButton: document.createElement('div'),
    chapterNameLabel: document.createElement('div'),
    chapterMusicAuthorLabel: document.createElement('div'),
    chapterImageAuthorLabel: document.createElement('div'),
    playingAudio: undefined,

    init: function () {
        this.page = document.querySelector("div#waiting-page");
        this.gameStartButton.id = "game-start-button";
        this.gameStartButton.style.transitionDuration = "0.1s";
        this.gameStartButton.addEventListener('click', this.gameStart);
        this.gameBackButton.id = "game-back-button";
        this.gameBackButton.addEventListener('click', this.back);
        this.chapterNameLabel.classList.add("chapter-info-text");
        this.chapterNameLabel.style.fontSize = "6vh";
        this.chapterMusicAuthorLabel.classList.add("chapter-info-text");
        this.chapterImageAuthorLabel.classList.add("chapter-info-text");
    },

    show: function (orderList, chapterName, musicAuthorName, imageAuthorName) {
        if (animationPlaying) return;

        function previewAudioControl(audio) {
            audio.on("play", function () {
                audio.fade(0, settings.musicVolume, 1000, waitingPage.playingAudio._sounds[0].id);
                setTimeout(function () {
                    if (gamePage.game === undefined) {
                        audio.fade(settings.musicVolume, 0, 1000, waitingPage.playingAudio._sounds[0].id);
                    }
                }, waitingPage.playingAudio._sprite["preview"][1] - 1000);
            }, waitingPage.playingAudio._sounds[0].id);
        }

        soundsManager.menuBGM.fade(settings.musicVolume, 0, 500, soundsManager.menuBGM._sounds[0].id);
        setTimeout(() => {
            soundsManager.menuBGM.pause();
        }, 500);
        switch (orderList[0]) {
            case chapter_1:
                this.playingAudio = soundsManager.chapter1;
                break;
            case chapter_2:
                this.playingAudio = soundsManager.chapter2;
                break;
            case chapter_3:
                this.playingAudio = soundsManager.chapter3;
                break;
        }

        animationPlaying = true;
        functionButtons.switchAuthorsButton(false, 1500);
        functionButtons.switchSettingsButton(false, 1500);
        waitingPage.switchChapterListAnimation(orderList, false);
        this.chapterNameLabel.textContent = chapterName;
        this.chapterMusicAuthorLabel.innerHTML = "Music By <span>" + musicAuthorName + "</span>";
        this.chapterImageAuthorLabel.innerHTML = "Background Image By <span>" + imageAuthorName + "</span>"

        this.playingAudio.play("preview");
        previewAudioControl(this.playingAudio);
        this.page.animate([{opacity: 0}, {opacity: 1}], {duration: 1000, easing: "Linear"});
        this.page.appendChild(this.gameStartButton);
        this.page.appendChild(this.gameBackButton);
        this.page.appendChild(this.chapterNameLabel);
        this.page.appendChild(this.chapterMusicAuthorLabel);
        this.page.appendChild(this.chapterImageAuthorLabel);
        this.switchStartButtonBumping(true);
    },

    back: function () {
        if (animationPlaying) return;
        animationPlaying = true;
        waitingPage.playingAudio.fade(settings.musicVolume, 0, 500, waitingPage.playingAudio._sounds[0].id);
        setTimeout(() => {
            waitingPage.playingAudio.stop();
            waitingPage.playingAudio.off('play', "", waitingPage.playingAudio._sounds[0].id);
        }, 500);
        soundsManager.menuBGM.fade(0, settings.musicVolume, 1000, soundsManager.menuBGM._sounds[0].id);
        soundsManager.menuBGM.play();
        soundsManager.clickSound.play();

        waitingPage.page.animate([{opacity: 1}, {opacity: 0}], {duration: 1000, easing: "Linear"});
        setTimeout(() => {
            Array.from(waitingPage.page.children).forEach(ele => {
                ele.remove();
            });
        }, 1000);
        waitingPage.switchStartButtonBumping(false);
        functionButtons.switchSettingsButton(true, 1500);
        functionButtons.switchAuthorsButton(true, 1500);
        waitingPage.switchChapterListAnimation([chapter_1, chapter_2, chapter_3], true);
    },

    gameStart: function () {
        if (animationPlaying) return;
        animationPlaying = true;
        waitingPage.playingAudio.fade(settings.musicVolume, 0, 1000, waitingPage.playingAudio._sounds[0].id);
        setTimeout(() => {
            waitingPage.playingAudio.stop(waitingPage.playingAudio._sounds[0].id);
            waitingPage.playingAudio.off('play', "", waitingPage.playingAudio._sounds[0].id);
        }, 1000);
        waitingPage.switchStartButtonBumping(false);
        waitingPage.gameStartButton.style.transform = "scale(1.5)";
        setTimeout(() => {
            waitingPage.gameStartButton.style.transitionDuration = "1s";
            waitingPage.gameStartButton.style.transform = "scale(0) rotate(360deg)"
        }, 100);
        setTimeout(() => {
            Array.from(waitingPage.page.children).forEach(ele => {
                ele.animate([{opacity: 1}, {opacity: 0}], {duration: 1000, easing: "Linear"});
                setTimeout(() => {
                    ele.remove();
                }, 1000);
            });
        }, 100);
        setTimeout(() => {
            gamePage.createNewGame(document.querySelector("div.selected"));
            waitingPage.gameStartButton.style.transitionDuration = "0.1s";
            waitingPage.gameStartButton.style.transform = "scale(1)";
            animationPlaying = false;
        }, 1100);
    },

    startButtonInterval: undefined,
    switchStartButtonBumping(play) {
        if (play) {
            this.startButtonInterval = setInterval(() => {
                this.gameStartButton.style.transform = "scale(" + (Math.floor(Math.random() * 9) + 5) * 0.1 + ")";
            }, 100);
        } else {
            clearInterval(this.startButtonInterval);
            this.startButtonInterval = undefined;
        }
    },

    switchChapterListAnimation: function (orderList, visible) {
        if (visible) {
            orderList.forEach(ele => {
                ele.style.bottom = "0";
                setTimeout(() => {
                    ele.classList.remove("transition-duration-1s", "transition-duration-1-3s", "transition-duration-1-5s")
                    ele.classList.add("transition-duration-0-3s");
                }, 1500);
            })
        } else {
            orderList[0].classList.add("transition-duration-1s");
            orderList[1].classList.add("transition-duration-1-3s");
            orderList[2].classList.add("transition-duration-1-5s");
            orderList.forEach(ele => {
                ele.classList.remove("transition-duration-0-3s");
                ele.style.bottom = "100vh";
            });
        }
    }
}