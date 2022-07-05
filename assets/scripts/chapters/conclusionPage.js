const conclusionPage = {
    init: function () {
        this.page = document.querySelector("div#conclusion-page");
        this.page.style.pointerEvents = "none";
        this.page.style.opacity = "0";
        this.chapterTitleLable = document.createElement("h1");
        this.scoreLabel = document.createElement("h1");
        this.perfectCountsLabel = document.createElement("h1");
        this.goodCountsLabel = document.createElement("h1");
        this.missCountsLabel = document.createElement("h1");
        this.rankLabel = document.createElement("h1");
        this.comboLabel = document.createElement("h1");
        this.exitButton = document.createElement("div");
        this.exitButton.id = "game-back-button";
        this.exitButton.addEventListener("click", conclusionPage._close);
        this.restartButton = document.createElement("div");
        this.restartButton.textContent = "Restart";
        this.restartButton.id = "game-restart-button";
        this.restartButton.addEventListener("click", conclusionPage._gameRestart);
    },

    show(game) {
        if (animationPlaying) return;
        animationPlaying = true;
        document.exitPointerLock();
        game.music.fade(settings.musicVolume, 0, 1000);
        this.chapterTitleLable.textContent = game.chapterInfo.name;
        this.scoreLabel.textContent = `Score ${game.score}`.split(".")[0]
        this.perfectCountsLabel.textContent = `Perfect ${game.perfectCounts}`;
        this.goodCountsLabel.textContent = `Good ${game.goodCounts}`;
        this.missCountsLabel.textContent = `Miss ${game.chapterInfo.noteCounts - game.perfectCounts - game.goodCounts}`;
        this.comboLabel.textContent = `MaxCombos ${game.maxCombo}`;
        switch (true) {
            case (1000000 === game.score):
                this.rankLabel.style.color = "rgb(192 0 255)";
                this.rankLabel.textContent = "θ";
                break;
            case (game.score >= 950000):
                this.rankLabel.style.color = "rgb(62,17,255)";
                this.rankLabel.textContent = "S";
                break;
            case (game.score >= 900000):
                this.rankLabel.style.color = "rgb(255,8,8)";
                this.rankLabel.textContent = "A";
                break;
            case (game.score >= 850000):
                this.rankLabel.style.color = "rgb(255,99,43)";
                this.rankLabel.textContent = "B";
                break;
            case (game.score >= 800000):
                this.rankLabel.style.color = "rgb(0,119,255)";
                this.rankLabel.textContent = "C";
                break;
            default:
                this.rankLabel.style.color = "white";
                this.rankLabel.textContent = "F";
        }

        this.page.appendChild(this.chapterTitleLable);
        this.page.appendChild(this.scoreLabel);
        this.page.appendChild(this.perfectCountsLabel);
        this.page.appendChild(this.goodCountsLabel);
        this.page.appendChild(this.missCountsLabel);
        this.page.appendChild(this.rankLabel);
        this.page.appendChild(this.comboLabel);
        this.page.appendChild(this.exitButton);
        this.page.appendChild(this.restartButton);

        this._switchVisible(true);
        setTimeout(() => {
            game.music.stop();
            animationPlaying = false;
        }, 1000);
    },

    _close() {
        if (animationPlaying) return;
        animationPlaying = true;
        soundsManager.clickSound.play();
        conclusionPage._switchVisible(false);

        setTimeout(() => {
            conclusionPage._clearChildElement();
            soundsManager.menuBGM.fade(0, settings.musicVolume, 1000, soundsManager.menuBGM._sounds[0].id);
            soundsManager.menuBGM.play();
            functionButtons.switchSettingsButton(true, 2000);
            functionButtons.switchAuthorsButton(true, 2000);
            waitingPage.switchChapterListAnimation([chapter_1, chapter_2, chapter_3], true);

            gamePage.game = undefined;
        }, 1000);
    },

    _switchVisible(visible) {
        if (visible) {
            this.page.style.pointerEvents = "fill";
            this.page.style.opacity = "1";
        } else {
            this.page.style.pointerEvents = "none";
            this.page.style.opacity = "0";
        }
    },

    _clearChildElement() {
        conclusionPage.page.removeChild(conclusionPage.chapterTitleLable);
        conclusionPage.page.removeChild(conclusionPage.scoreLabel);
        conclusionPage.page.removeChild(conclusionPage.perfectCountsLabel);
        conclusionPage.page.removeChild(conclusionPage.goodCountsLabel);
        conclusionPage.page.removeChild(conclusionPage.missCountsLabel);
        conclusionPage.page.removeChild(conclusionPage.rankLabel);
        conclusionPage.page.removeChild(conclusionPage.comboLabel);
        conclusionPage.page.removeChild(conclusionPage.exitButton);
        conclusionPage.page.removeChild(conclusionPage.restartButton);
    },

    _gameRestart() {
        if (animationPlaying) return;
        animationPlaying = true;
        conclusionPage._switchVisible(false);
        setTimeout(function () {
            conclusionPage._clearChildElement();
            gamePage.game = undefined;

            setTimeout(function () {
                gamePage.createNewGame(document.querySelector("div.selected"));
                animationPlaying = false;
            }, 500);
        }, 1000);
    }
}