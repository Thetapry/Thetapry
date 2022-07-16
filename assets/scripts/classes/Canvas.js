class Canvas {
    constructor(canvasElement) {
        canvasElement.width = canvasElement.getBoundingClientRect().width;
        canvasElement.height = canvasElement.getBoundingClientRect().height;
        this.element = canvasElement
        this.context = canvasElement.getContext("2d");
        this.checkCircles = [];
        this.tapNotes = [];
        this.flickNotes = [];
        this.dragNotes = [];
        this.fadingOutNotes = [];
        this._rotateAnimation = undefined;
        this._rotate = 0;
        this._stop = false;
        this._maxCheckDistance = 100;
        this._perfectDistance = 50;
        this._goodDistance = 80;
    }

    start() {
        let canvas = this;
        let fpsNow, fpsThen;
        fpsThen = Date.now();

        function frame() {
            if (!canvas._stop) {
                requestAnimationFrame(frame);
                // fps controller
                fpsNow = Date.now();
                if (fpsNow - fpsThen < fpsInterval) return;
                fpsThen = fpsNow - ((fpsNow - fpsThen) % fpsInterval);

                canvas.element.width = canvas.element.getBoundingClientRect().width;
                canvas.element.height = canvas.element.getBoundingClientRect().height;

                if (canvas._rotateAnimation !== undefined && canvas._rotateAnimation["CurrentFrames"] < canvas._rotateAnimation["Frames"]) {
                    let radiansPerFrame = canvas._rotateAnimation["RadiansPerFrame"];
                    canvas._rotate += radiansPerFrame;
                    canvas._rotateAnimation["CurrentFrames"]++;
                }
                canvas._doRotate(canvas, canvas._rotate);

                canvas.checkCircles.forEach(cc => {
                    cc.run(canvas);
                });
                canvas.dragNotes.forEach(dn => {
                    dn.run(canvas);
                    if (gamePage.game) canvas._checkDragNote(canvas, dn);
                });
                canvas.tapNotes.forEach(tn => {
                    tn.run(canvas);
                    if (gamePage.game) canvas._checkTapNote(canvas, tn);
                });
                canvas.flickNotes.forEach(fn => {
                    fn.run(canvas);
                    if (gamePage.game) canvas._checkFlickNote(canvas, fn);
                });

                canvas.fadingOutNotes.forEach(fon => {
                    fon.runFadeOut(canvas);
                });

                if (gamePage.game) gamePage.game._updateScore(gamePage.game);
            }
        }

        requestAnimationFrame(frame)
    }

    _calcDistance(x1, y1, x2, y2) {
        let x = x1 - x2;
        let y = y1 - y2;
        return Math.sqrt(x ** 2 + y ** 2);
    }

    _checkTapNote(canvas, tapNote) {
        canvas.checkCircles.forEach(cc => {
            let distance = canvas._calcDistance(tapNote.x, tapNote.y, cc.x, cc.y);
            if (distance <= canvas._maxCheckDistance) {
                switch (true) {
                    case (distance <= canvas._perfectDistance):
                        if (distance === 0) {
                            if (tapNote.centerTime >= 0) {
                                // distance == 0 and wait 0.1 seconds(6 frames)
                                if (tapNote.centerTime >= 5) {
                                    // miss
                                    gamePage.game.currentCombo = 0;
                                    tapNote.fadeOut(canvas);
                                }
                            }
                            tapNote.centerTime = tapNote.centerTime === undefined ? 0 : ++tapNote.centerTime;
                        }
                        if (keyboard.isAnyKeyAvailable()) {
                            // Perfect
                            canvas.bindNoteToKey(tapNote);
                            gamePage.game.perfectCounts++;
                            gamePage.game.addCombo();
                            tapNote.fadeOut(canvas);
                            soundsManager.tap.play();
                        }
                        break;
                    case (canvas._perfectDistance < distance && distance <= canvas._goodDistance && keyboard.isAnyKeyAvailable()):
                        // Good
                        canvas.bindNoteToKey(tapNote);
                        gamePage.game.goodCounts++;
                        gamePage.game.addCombo();
                        tapNote.fadeOut(canvas);
                        soundsManager.tap.play();
                        break;
                    case (canvas._goodDistance < distance && distance <= canvas._maxCheckDistance && keyboard.isAnyKeyAvailable()):
                        // Miss
                        canvas.bindNoteToKey(tapNote);
                        gamePage.game.currentCombo = 0;
                        tapNote.fadeOut(canvas);
                        soundsManager.tap.play();
                }
            }

        });
    }

    _checkFlickNote(canvas, flickNote) {
        canvas.checkCircles.forEach(cc => {
            let distance = canvas._calcDistance(flickNote.x, flickNote.y, cc.x, cc.y);
            if (distance === 0) {
                if (Object.keys(keyboard.workingKeyList).length > 0) {
                    // perfect
                    gamePage.game.addCombo();
                    gamePage.game.perfectCounts++;
                    soundsManager.flick.play();
                    flickNote.fadeOut(canvas);
                }
                if (flickNote.centerTime >= 5) {
                    // miss
                    gamePage.game.currentCombo = 0;
                    flickNote.fadeOut(canvas);
                }
                flickNote.centerTime = flickNote.centerTime === undefined ? 0 : ++flickNote.centerTime;
            }
        });
    }

    _checkDragNote(canvas, dragNote) {
        canvas.checkCircles.forEach(cc => {
            let distance = canvas._calcDistance(dragNote.x, dragNote.y, cc.x, cc.y);
            if (distance <= canvas._maxCheckDistance) {
                switch (true) {
                    case (distance <= canvas._perfectDistance):
                        if (distance === 0) {
                            // distance == 0 and wait 0.1 seconds(6 frames)
                            if (dragNote.centerTime >= 5 && dragNote.keyCheck === undefined || dragNote.keyCheck === "miss") {
                                // miss
                                if (!dragNote.isTailVisible()) {
                                    dragNote.fadeOut(canvas);
                                } else if (dragNote.keyCheck === undefined) {
                                    dragNote.keyCheck = "miss";
                                    gamePage.game.currentCombo = 0;
                                }
                                dragNote.shortenTail();
                            }
                            dragNote.centerTime = dragNote.centerTime === undefined ? 0 : ++dragNote.centerTime;
                        }
                        if (keyboard.isAnyKeyAvailable() && dragNote.keyCheck !== "miss" || dragNote.keyCheck === "perfect") {
                            // Perfect
                            dragNote.shortenTail();
                            if (keyboard.getKeyFromNote(dragNote) !== undefined && !dragNote.isTailVisible()) {
                                gamePage.game.perfectCounts++;
                                gamePage.game.addCombo();
                                dragNote.fadeOut(canvas);
                            } else if (!dragNote.isTailVisible()) {
                                // key released
                                gamePage.game.currentCombo = 0;
                                dragNote.fadeOut(canvas);
                            }
                            if (dragNote.keyCheck === undefined) {
                                dragNote.track = undefined;
                                canvas.bindNoteToKey(dragNote);
                                dragNote.keyCheck = "perfect";
                                soundsManager.drag.play();
                            }
                        }
                        break;
                    case (canvas._perfectDistance < distance && distance <= canvas._goodDistance && keyboard.isAnyKeyAvailable() || canvas._perfectDistance < distance && distance <= canvas._goodDistance && dragNote.keyCheck === "good"):
                        // good
                        dragNote.shortenTail();
                        if (keyboard.getKeyFromNote(dragNote) !== undefined && !dragNote.isTailVisible()) {
                            gamePage.game.goodCounts++;
                            gamePage.game.addCombo();
                            dragNote.fadeOut(canvas);
                        } else if (!dragNote.isTailVisible()) {
                            gamePage.game.currentCombo = 0;
                            dragNote.fadeOut(canvas);
                        }
                        if (dragNote.keyCheck === undefined) {
                            dragNote.track = undefined;
                            canvas.bindNoteToKey(dragNote);
                            dragNote.keyCheck = "good";
                            soundsManager.drag.play();
                        }
                        break;
                    case (canvas._goodDistance < distance && distance <= canvas._maxCheckDistance && keyboard.isAnyKeyAvailable() || canvas._goodDistance < distance && distance <= canvas._maxCheckDistance && dragNote.keyCheck === "miss") :
                        // miss
                        dragNote.shortenTail();
                        if (!dragNote.isTailVisible()) {
                            dragNote.fadeOut(canvas);
                        }
                        if (dragNote.keyCheck === undefined) {
                            dragNote.track = undefined;
                            canvas.bindNoteToKey(dragNote);
                            dragNote.keyCheck = "miss";
                            gamePage.game.currentCombo = 0;
                        }
                        break;
                }
            }
        });
    }

    _doRotate(canvas, radians) {
        let x = canvas.element.getBoundingClientRect().width / 2;
        let y = canvas.element.getBoundingClientRect().height / 2;
        canvas.context.translate(x, y);
        canvas.context.rotate(radians);
        canvas.context.translate(-x, -y);
    }

    bindNoteToKey(note) {
        Object.keys(keyboard.workingKeyList).some((item, index, array) => {
            if (keyboard.workingKeyList[item] === true) {
                keyboard.workingKeyList[item] = note;
                return true;
            }
        });
    }

    createCheckCircle(startX, startY, track = undefined) {
        let checkCircle = new CheckCircle(startX, startY, 50, 10, "rgb(255,245,255)");
        checkCircle.track = track;
        this.checkCircles.push(checkCircle);
    }

    createTapNote(startX, startY, track = undefined, showYellow = false) {
        let tapNote = new TapNote(startX, startY, 50, 30, 10, "rgba(3, 219, 252, 1)", "rgba(255, 255, 255, 1)", showYellow);
        tapNote.track = track;
        this.tapNotes.push(tapNote)

        return tapNote;
    }

    createDragNote(startX, startY, tailLongX, tailLongY, track = undefined, tailSpeed = 16.66) {
        if (tailLongX !== 0 && tailLongY !== 0) alert("Drag Note settings error");
        let dragNote = new DragNote(startX, startY, 50, 10,
            "rgb(255,255,255)", "rgba(3, 219, 252, 1)",
            {x: tailLongX, y: tailLongY}, tailSpeed,
            "rgba(3,219,252,1)", "rgba(0,0,0,0)",
            "rgba(3,219,252,0.3)", "rgba(3,219,252,0)",
            track);
        this.dragNotes.push(dragNote);
    }

    createFlickNote(startX, startY, track = undefined) {
        let flickNote = new FlickNote(startX, startY, 50, 10, "rgba(255, 255, 0, 1)", track);
        this.flickNotes.push(flickNote);
    }

    rotate(degrees, duration) {
        let radians = Math.PI * (degrees / 180);
        let radiansPerFrame = radians / (duration * 60);

        this._rotateAnimation = {
            "RadiansPerFrame": radiansPerFrame,
            "Frames": duration * 60,
            "CurrentFrames": 0
        }
    }

    stop() {
        this._stop = true;
    }
}