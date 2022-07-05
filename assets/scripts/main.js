const welcome_page = document.querySelector("div#welcome-page"),
    welcome_icon = document.querySelector("div#welcome-page img#icon-img"),
    welcome_clickToStart = document.querySelector("div#welcome-page h3#click-to-start"),
    purple_glowing_star = document.createElement("div"),
    chapterList = document.querySelector("div#chapter-list"),
    chapters_bg = document.querySelector("div#chapter-list div#bg"),
    chapter_1 = document.querySelector("div#chapter1"),
    chapter_1_img = document.querySelector("div#chapter1 img"),
    chapter_2 = document.querySelector("div#chapter2"),
    chapter_2_img = document.querySelector("div#chapter2 img"),
    chapter_3 = document.querySelector("div#chapter3"),
    chapter_3_img = document.querySelector("div#chapter3 img"),
    gameCanvas = document.querySelector("div#chapter-list canvas#game-canvas"),
    functions = document.querySelector("div#functions"),
    function_buttons = document.querySelector("div#function-buttons"),
    settings_button = document.querySelector("div#settings-button"),
    settings_page = document.querySelector("div#settings-page"),
    authors_button = document.querySelector("div#authors-button"),
    authors_page = document.querySelector("div#authors-page"),
    fpsInterval = 1000 / 60;
let animationPlaying = false,
    welcome_page_animated = false;

(function () {
    window.addEventListener("load", () => {
        welcomePage.starAnimation();
        chapters.playLabelElement.classList.add("playButton");
        chapters.playLabelElement.textContent = "→Play";
        waitingPage.init();
        settings.init();
        gamePage.init();
        chapterTutorial.init();
        conclusionPage.init();

        chapter_1.addEventListener('click', () => {
            chapters.switchSelected("1");
        });
        chapter_2.addEventListener('click', () => {
            chapters.switchSelected("2");
        });
        chapter_3.addEventListener('click', () => {
            chapters.switchSelected("3");
        });
        chapters_bg.style.backgroundImage = `url('${chapters.chapter_1_bg}')`;
        chapter_1.classList.add("selected");
        chapter_1.appendChild(chapters.playLabelElement);

        chapters.windowResize(false, 300);

        settings_button.addEventListener('click', () => {
            functionButtons.onSettingsClick();
        });
        authors_button.addEventListener('click', () => {
            functionButtons.onAuthorsClick();
        });
    });

    window.addEventListener('click', () => {
        if (welcome_page.classList.contains("Visible") && !welcome_page_animated && !animationPlaying) {
            animationPlaying = true;
            welcomePage.enterGame();
        }
    });

    window.addEventListener('resize', (event) => {
        chapters.windowResize(true, 300);
    });
})();