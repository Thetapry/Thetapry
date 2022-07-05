const soundsManager = {
    clickSound: new Howl({
        src: ["./assets/sounds/menu/click.mp3"]
    }),

    menuBGM: new Howl({
        src: ["./assets/sounds/menu/bgm.mp3"],
        volume: 1,
        loop: true,
        preload: true
    }),

    chapter1: new Howl({
        src: ["./assets/sounds/GOODJACKY.mp3"],
        volume: 0,
        sprite: {
            inGame: [0, 123000, false],
            preview: [75000, 21000, true]
        }
    }),

    chapter2: new Howl({
        src: ["./assets/sounds/S_game_ver.mp3"],
        volume: 0,
        sprite: {
            inGame: [0, 137000, false],
            preview: [69000, 18000, true]
        }
    }),

    chapter3: new Howl({
        src: ["./assets/sounds/FREEDOM_DiVE_game_ver.mp3"],
        volume: 0,
        sprite: {
            inGame: [0, 145000, false],
            preview: [64000, 18000, true]
        }
    }),

    tap: new Howl({
        src: ["./assets/sounds/effects/tap.mp3"]
    }),

    flick: new Howl({
        src: ["./assets/sounds/effects/drag.mp3"]
    }),

    drag: new Howl({
        src: ["./assets/sounds/effects/tap.mp3"]
    })
}