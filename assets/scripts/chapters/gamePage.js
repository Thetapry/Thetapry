const gamePage = {
    game: undefined,

    init: function () {
        this.gameCanvas = document.querySelector("canvas#game-canvas");
    },

    createNewGame: function (selectedChapter) {
        document.body.requestPointerLock();
        setTimeout(() => {
            document.exitPointerLock();
            setTimeout(() => {
                document.body.requestPointerLock();
            }, 10);
        }, 10);
        if (!chapterTutorial.played) {
            /* 還沒玩過Tutorial */
            this.game = new chapterTutorial.Tutorial(new Canvas(gamePage.gameCanvas), selectedChapter);
        } else {
            setTimeout(() => {
                gamePage.game = new gamePage.Game(selectedChapter);
            }, 1000);
        }
    },

    Game: class {
        constructor(selectedChapter) {
            this._time = 0;
            this._timerInterval = undefined;
            this.score = 0;
            this.perfectCounts = 0;
            this.goodCounts = 0;
            this.maxCombo = 0;
            this.currentCombo = 0;
            this.comboElement = document.createElement("div");
            this.comboElement.id = "gameCombo";
            this.comboElement.style.opacity = "0";
            this.comboElement.textContent = "0";
            chapterList.appendChild(this.comboElement);
            this.scoreElement = document.createElement("div");
            this.scoreElement.id = "gameScore";
            this.scoreElement.style.opacity = "0";
            this.scoreElement.textContent = "0";
            chapterList.appendChild(this.scoreElement);
            keyboard.attach();
            this.processBar = document.createElement("div");
            this.processBar.id = "gameProcessBar";
            this.processBar.style.width = "0";
            this.processBar.style.opacity = "1";
            chapterList.appendChild(this.processBar);
            this._init(selectedChapter);
            this.canvas.start();
        }

        _init(selectedChapter) {
            let canvas = new Canvas(gamePage.gameCanvas);
            canvas.element.style.opacity = "0";
            this.canvas = canvas;

            this._chapterLoader(selectedChapter);
            this.processBar.style.transitionDuration = `${this.music.duration(this.music._sounds[0].id) + 3}s`;
            this._timer();
            let game = this;

            setTimeout(() => {
                // game object fade in
                game.scoreElement.style.opacity = "1";
                let opacityInterval = setInterval(() => {
                    if (parseFloat(canvas.element.style.opacity) >= 1) {
                        clearInterval(opacityInterval);
                    }
                    canvas.element.style.opacity = (parseFloat(canvas.element.style.opacity) + 0.05).toString();
                }, 30);
                setTimeout(function () {
                    // after game object fade in finished
                    game.processBar.style.width = "100%";
                }, 600);
            }, 1000);
        }

        addCombo() {
            this.currentCombo++;
            if (this.currentCombo > this.maxCombo) {
                this.maxCombo = this.currentCombo;
            }
        }

        _chapterLoader(selectedChapter) {
            switch (selectedChapter) {
                case chapter_1:
                    this.music = soundsManager.chapter1;
                    this.chapterInfo = Chapter1;
                    break;
                case chapter_2:
                    this.music = soundsManager.chapter2;
                    this.chapterInfo = Chapter2;
                    break;
                case chapter_3:
                    this.music = soundsManager.chapter3;
                    this.chapterInfo = Chapter3;
                    break;
            }
        }

        _timer() {
            let game = this;
            this._timerInterval = setInterval(() => {
                if (game.chapterInfo[game._time]) game.chapterInfo[game._time](game);

                game._time++;
            }, 1000);
        }

        _updateScore(game) {
            this.score = (((900000 / game.chapterInfo.noteCounts) * game.perfectCounts) +
                (((900000 / game.chapterInfo.noteCounts) / 2) * game.goodCounts) +
                (100000 * (game.maxCombo / game.chapterInfo.noteCounts)));
            let scoreText = game.score.toString();
            for (let i = 0; i < 7 - game.score.toString().length; i++) {
                scoreText = `0${scoreText}`;
            }
            game.scoreElement.textContent = scoreText.split(".")[0];

            if (game.currentCombo >= 3) {
                game.comboElement.textContent = game.currentCombo;
                if (game.comboElement.style.opacity === "0") {
                    game.comboElement.style.opacity = "1";
                }
            } else {
                if (game.comboElement.style.opacity === "1") {
                    game.comboElement.style.opacity = "0";
                }
            }
        }

        startPlayMusic() {
            let game = this;
            setTimeout(function () {
                game.music.volume(settings.musicVolume);
                game.music.play("inGame");
            }, settings.delay);
        }

        end() {
            clearInterval(this._timerInterval);
            this.scoreElement.style.opacity = "0";
            this.comboElement.style.opacity = "0";
            this.processBar.style.transitionDuration = "1s";
            this.processBar.style.opacity = "0";
            let game = this;
            game.canvas.stop();
            let opacityInterval = setInterval(() => {
                if (parseFloat(game.canvas.element.style.opacity) <= 0) {
                    clearInterval(opacityInterval);
                }
                game.canvas.element.style.opacity = (parseFloat(game.canvas.element.style.opacity) - 0.05).toString();
            }, 30);

            setTimeout(() => {
                chapterList.removeChild(game.scoreElement);
                chapterList.removeChild(game.processBar);
                // show end page
                conclusionPage.show(game);
            }, 1000);
        }
    }
}