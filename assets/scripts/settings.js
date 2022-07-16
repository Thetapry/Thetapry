const settings = {
    musicVolume: 1,
    effectVolume: 1,
    delay: 0,
    noteSize: 1,

    init: function () {
        this.musicVolumeText = document.querySelector("div#music-volume-box h1 span");
        this.effectVolumeText = document.querySelector("div#effect-volume-box h1 span");
        this.delayText = document.querySelector("div#delay-box h1 span");
        this.noteSizeText = document.querySelector("div#note-size-box h1 span");
        this.reviewCanvas = document.querySelector("#settings-page canvas");
    },

    scrollMusicVolume: function (value) {
        settings.musicVolume = value * 0.01;
        settings.musicVolumeText.textContent = value + "%";
    },

    scrollEffectVolume: function (value) {
        settings.effectVolume = value * 0.01;
        soundsManager.clickSound.volume(value * 0.01);
        soundsManager.tap.volume(value * 0.01);
        soundsManager.flick.volume(value * 0.01);
        soundsManager.drag.volume(value * 0.01);
        settings.effectVolumeText.textContent = value + "%";
    },

    scrollDelay: function (value) {
        settings.delay = value;
        settings.delayText.textContent = value + "ms";
    },

    scrollNoteSize: function (value) {
        settings.noteSize = value;
        settings.noteSizeText.textContent = value;
    },

    reviewAnimationInterval: undefined,
    reviewCanvasObject: undefined,
    playReviewAnimation: function () {
        settings.reviewCanvasObject = new Canvas(settings.reviewCanvas);
        let startY = -1 * settings.reviewCanvas.getBoundingClientRect().height;
        let endY = (settings.reviewCanvas.getBoundingClientRect().height / 2) - 100;
        let step = (endY - startY) / 60;

        settings.reviewCanvasObject.checkCircles.push(new CheckCircle(0, endY, 50, 10, "rgb(255,255,255)"));
        settings.reviewCanvasObject.start();
        let firstTime = true;
        this.reviewAnimationInterval = setInterval(() => {
            let tapNote = settings.reviewCanvasObject.createTapNote(0, startY, function (note) {
                if (note.original_y === undefined) note.original_y = note.y;

                if (note.y >= endY) {
                    note.y = endY;
                    note.fadeOut(settings.reviewCanvasObject);
                    let x = note.x, y = note.y;
                    return {x, y};
                } else {
                    // note.y += step;
                    note.original_y += step;
                }
                let x = note.x, y = note.original_y - settings.delay;
                return {x, y};
            }, false);
            if (firstTime) {
                firstTime = false;
                return;
            }
            soundsManager.tap.play();
        }, 1000);
    },
    stopReviewAnimation: function () {
        this.reviewCanvasObject.stop();
        clearInterval(this.reviewAnimationInterval);
        this.reviewAnimationInterval = undefined;
        this.reviewCanvasObject = undefined;
    }
}