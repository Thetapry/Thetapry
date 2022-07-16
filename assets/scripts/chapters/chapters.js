const chapters = {
    chapter_1_bg: "./assets/images/c1_bg.png",
    chapter_2_bg: "./assets/images/c2_bg.jpg",
    chapter_3_bg: "./assets/images/c3_bg.png",
    playLabelElement: document.createElement('div'),

    switchSelected: function (selected) {
        if (animationPlaying) return;
        let updateFinished = false;
        requestAnimationFrame(updateBackgroundImage);
        setTimeout(() => {
            updateFinished = true;
        }, 300);

        function updateBackgroundImage() {
            chapters.windowResize(false);
            if (!updateFinished) {
                requestAnimationFrame(updateBackgroundImage);
            }
        }
        soundsManager.clickSound.play();
        switch (selected) {
            case "1" : {
                if (chapter_1.classList.contains("selected")) {
                    waitingPage.show([chapter_1, chapter_2, chapter_3], Chapter1.name, Chapter1.musicAuthor, Chapter1.imageAuthor);
                } else {
                    chapters.switch(chapters.chapter_1_bg, chapter_1);
                }
                break;
            }
            case "2" : {
                if (chapter_2.classList.contains("selected")) {
                    waitingPage.show([chapter_2, chapter_1, chapter_3], Chapter2.name, Chapter2.musicAuthor, Chapter2.imageAuthor);
                } else {
                    chapters.switch(chapters.chapter_2_bg, chapter_2);
                }
                break;
            }
            case "3" : {
                if (chapter_3.classList.contains("selected")) {
                    waitingPage.show([chapter_3, chapter_2, chapter_1], Chapter3.name, Chapter3.musicAuthor, Chapter3.imageAuthor);
                } else {
                    chapters.switch(chapters.chapter_3_bg, chapter_3);
                }
                break;
            }
        }
    },

    clearSelected: function () {
        chapter_1.classList.remove("selected");
        chapter_2.classList.remove("selected");
        chapter_3.classList.remove("selected");
        try {
            chapter_1.removeChild(chapters.playLabelElement);
            chapter_2.removeChild(chapters.playLabelElement);
            chapter_3.removeChild(chapters.playLabelElement);
        } catch (e) {
        }
    },

    switch: function (image_url, chapter_element) {
        chapters.clearSelected();
        chapters_bg.style.backgroundImage = `url('${image_url}')`;
        chapter_element.classList.add("selected");
        chapter_element.appendChild(chapters.playLabelElement);
    },

    windowResize: function (echo, delay) {
        chapter_1_img.style.right = (870 - (chapter_1.getBoundingClientRect().width / 2)) >= 665 ?
            (870 - (chapter_1.getBoundingClientRect().width / 2)) + "px" :
            chapter_1_img.getBoundingClientRect().width - chapter_1.getBoundingClientRect().width - 10 + "px";
        chapter_2_img.style.right = Math.max(0, (230 - (chapter_2.getBoundingClientRect().width / 2))) + "px";
        chapter_3_img.style.right = Math.max(800 - (chapter_3.getBoundingClientRect().width / 3)) + "px";
        chapter_1_img.style.bottom = Math.max(65, (methods.getScreenHeight() / 2) - chapter_1.getBoundingClientRect().height - 100) + "px";
        chapter_2_img.style.bottom = Math.max(0, (methods.getScreenHeight() / 2) - chapter_2.getBoundingClientRect().height - 200) + "px";
        chapter_3_img.style.bottom = Math.max(50, (methods.getScreenHeight() / 2) - chapter_3.getBoundingClientRect().height - 150) + "px";

        if (echo) {
            setTimeout(() => chapters.windowResize(false, delay), delay);
        }
    }
};