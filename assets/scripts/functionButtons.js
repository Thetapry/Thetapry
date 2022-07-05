const functionButtons = {
    showingSettings: false,
    showingAuthors: false,

    onSettingsClick: function () {
        if (animationPlaying) return;

        soundsManager.clickSound.play();
        animationPlaying = true;
        let animationFading;

        if (functionButtons.showingSettings) {
            soundsManager.menuBGM.fade(0, settings.musicVolume, 1000, soundsManager.menuBGM._sounds[0].id);
            soundsManager.menuBGM.play();
            functionButtons.showingSettings = false;
            functionButtons.switchAuthorsButton(true);
            animationFading = new AnimationFading(settings_page, false);
            settings.stopReviewAnimation();
        } else {
            soundsManager.menuBGM.fade(settings.musicVolume, 0, 1000, soundsManager.menuBGM._sounds[0].id);
            setTimeout(()=>{
                soundsManager.menuBGM.pause();
            }, 1000);
            functionButtons.showingSettings = true;
            functionButtons.switchAuthorsButton(false);
            animationFading = new AnimationFading(settings_page, true);
            settings.playReviewAnimation();
        }

        animationFading.play();
        methods.switchVisible(settings_page);
    },

    onAuthorsClick: function () {
        if (animationPlaying) return;

        soundsManager.clickSound.play();
        animationPlaying = true;
        let animationFading;

        if (functionButtons.showingAuthors) {
            functionButtons.showingAuthors = false;
            functionButtons.switchSettingsButton(true);
            animationFading = new AnimationFading(authors_page, false);
        } else {
            functionButtons.showingAuthors = true;
            functionButtons.switchSettingsButton(false);
            animationFading = new AnimationFading(authors_page, true);
        }

        animationFading.play();
        methods.switchVisible(authors_page);
    },

    switchAuthorsButton: function (show, animationPlayingResetDelay = 1000) {
        if (show) {
            authors_button.style.animation = "AuthorsBTNLeft cubic-bezier(0.39, 0.63, 0.35, 1) 1s";
            authors_button.style.transform = "translateX(0px) translateY(-20vh)";
        } else {
            authors_button.style.animation = "AuthorsBTNRight cubic-bezier(0.39, 0.63, 0.35, 1) 1s";
            authors_button.style.transform = "translateX(100%) translateY(-20vh)";
        }
        setTimeout(() => {
            animationPlaying = false;
        }, animationPlayingResetDelay);
    },

    switchSettingsButton: function (show, animationPlayingResetDelay = 1000) {
        if (show) {
            settings_button.style.animation = "SettingsBTNLeft cubic-bezier(0.39, 0.63, 0.35, 1) 1s";
            settings_button.style.transform = "translateX(0px)";
        } else {
            settings_button.style.animation = "SettingsBTNRight cubic-bezier(0.39, 0.63, 0.35, 1) 1s";
            settings_button.style.transform = "translateX(100%)";
        }
        setTimeout(() => {
            animationPlaying = false;
        }, animationPlayingResetDelay);
    }
}