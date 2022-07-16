const chapterTutorial = {
    played: true,

    init: function () {
        let tutorialHintText = document.createElement('h1');
        tutorialHintText.classList.id = "tutorialText";
        tutorialHintText.style.color = "white";
        tutorialHintText.style.position = "absolute";
        tutorialHintText.style.top = "30%";
        tutorialHintText.style.width = "100%";
        tutorialHintText.style.textAlign = "center";
        tutorialHintText.style.fontFamily = "Orbitron";
        this.tutorialHintText = tutorialHintText;
    },

    Tutorial: class {
        constructor(canvasObject, originalPlayChapter) {
            this.canvas = canvasObject;
            this._originalPlayChapter = originalPlayChapter;
            let tutorial = this;
            keyboard.attach();
            setTimeout(() => {
                tutorial.skipCheck(tutorial);
            }, 1);
        }

        skipCheck(tutorial) {
            let countDown = 3;
            let skipHint = document.createElement("div");
            skipHint.innerHTML = `Do you want to skip the tutorial?<br>Yes (Press Y)<br>${countDown}`;
            skipHint.style.position = "absolute";
            skipHint.style.top = "30%";
            skipHint.style.width = "100%";
            skipHint.style.textAlign = "center";
            skipHint.style.fontFamily = "Orbitron";
            skipHint.style.fontSize = "3vw";
            skipHint.style.color = "white";

            chapterList.appendChild(skipHint);

            let skip = false;
            let lastTime = Date.now();
            let skipCheckInterval = setInterval(function () {
                let nowTime = Date.now();

                if (countDown >= 0) {
                    Object.keys(keyboard.workingKeyList).forEach(function (key) {
                        if (key === "Y" || key === "y") {
                            skip = true;
                            chapterTutorial.played = true;
                            chapterList.removeChild(skipHint);
                            keyboard.detach();
                            gamePage.createNewGame(tutorial._originalPlayChapter);
                            clearInterval(skipCheckInterval);
                        }
                    });
                } else {
                    if (skipHint) {
                        chapterList.removeChild(skipHint);
                        skipHint = undefined
                    }
                    if (!skip && countDown <= -3) {
                        tutorial.sceneOne(tutorial);
                        clearInterval(skipCheckInterval);
                    }
                }
                if (nowTime - lastTime >= 1000) {
                    console.log(countDown)
                    lastTime = nowTime;
                    countDown--;
                    skipHint.innerHTML = `Do you want to skip the tutorial?<br>Yes (Press Y)<br>${countDown}`;
                }
            }, 1);
        }

        sceneOne(tutorial) {
            let canvas = tutorial.canvas;
            let checkCircleCurPercent = 0;
            let noteCurPercent = 0;
            let tapNoteY = 70;
            let textShowed = false;
            let keyPressed = false;
            let fpsNow, fpsThen;
            let colorAlpha = 1;
            let noteScaleStep = 0;
            fpsThen = Date.now();
            let sceneStop = false;
            canvas.start = function () {
                function frame() {
                    if (!sceneStop) {
                        requestAnimationFrame(frame);
                        // fps controller
                        fpsNow = Date.now();
                        if (fpsNow - fpsThen < fpsInterval) return;
                        fpsThen = fpsNow - ((fpsNow - fpsThen) % fpsInterval);

                        canvas.element.width = canvas.element.getBoundingClientRect().width;
                        canvas.element.height = canvas.element.getBoundingClientRect().height;
                        let centerX = canvas.element.getBoundingClientRect().width / 2;
                        let centerY = canvas.element.getBoundingClientRect().height / 2;
                        // draw check circle animation
                        canvas.context.strokeStyle = "rgb(255,255,255)";
                        canvas.context.lineWidth = 10;
                        canvas.context.beginPath();
                        canvas.context.arc(centerX, centerY,
                            50, -(Math.PI / 2), ((Math.PI * 2) * (checkCircleCurPercent / 100)) - (Math.PI / 2), false);
                        canvas.context.stroke();
                        if (checkCircleCurPercent < 100) {
                            checkCircleCurPercent++;
                        } else {
                            // draw tap note animation
                            canvas.context.lineWidth = 10;
                            canvas.context.strokeStyle = `rgba(3, 219, 252, ${colorAlpha})`
                            canvas.context.beginPath();
                            canvas.context.arc(centerX, tapNoteY, (50 + noteScaleStep * 2) * settings.noteSize, -(Math.PI / 2), ((Math.PI * 2) * (noteCurPercent / 100)) - (Math.PI / 2), false);
                            canvas.context.stroke();
                            canvas.context.fillStyle = `rgba(255, 255, 255, ${colorAlpha})`
                            canvas.context.beginPath();
                            canvas.context.arc(centerX, tapNoteY, (Math.max(30 - noteScaleStep * 2, 0)) * settings.noteSize, -(Math.PI / 2), ((Math.PI * 2) * (noteCurPercent / 100)) - (Math.PI / 2), false);
                            canvas.context.fill();
                            if (noteCurPercent < 100) {
                                noteCurPercent++;
                            } else {
                                // tap note start moving ( 60fps -> 90 frames = 1.5s)
                                if (tapNoteY < centerY) {
                                    tapNoteY += ((centerY - 70) / 90);
                                } else {
                                    if (!textShowed) {
                                        //show text
                                        chapterTutorial.tutorialHintText.textContent = "Tap A Key";
                                        chapterList.appendChild(chapterTutorial.tutorialHintText);
                                        textShowed = true;
                                    } else {
                                        for (let [key, value] of Object.entries(keyboard.workingKeyList)) {
                                            if (value === true) {
                                                if (!keyPressed) {
                                                    soundsManager.tap.play();
                                                }
                                                keyPressed = true;
                                                try {
                                                    chapterList.removeChild(chapterTutorial.tutorialHintText);
                                                } catch (e) {
                                                }
                                            }
                                        }
                                        if (keyPressed) {
                                            colorAlpha -= 0.05;
                                            noteScaleStep++;
                                        }
                                        if (colorAlpha <= 0) {
                                            tutorial.sceneTwo(tutorial);
                                            sceneStop = true;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }

                requestAnimationFrame(frame);
            }
            canvas.start();
        }

        sceneTwo(tutorial) {
            let canvas = tutorial.canvas;
            let fpsNow, fpsThen;
            let holdNoteCurPercent = 0, colorAlpha = 1;
            let holdNoteScaleStep = 0;
            let holdNoteY = 70;
            let textShowed = false;
            let startFaded = false;
            chapterTutorial.tutorialHintText.textContent = "Hold A Key";
            let sceneStop = false;
            fpsThen = Date.now();
            canvas.start = function () {
                function frame() {
                    if (!sceneStop) {
                        requestAnimationFrame(frame);
                        // fps controller
                        fpsNow = Date.now();
                        if (fpsNow - fpsThen < fpsInterval) return;
                        fpsThen = fpsNow - ((fpsNow - fpsThen) % fpsInterval);

                        canvas.element.width = canvas.element.getBoundingClientRect().width;
                        canvas.element.height = canvas.element.getBoundingClientRect().height;
                        let centerX = canvas.element.getBoundingClientRect().width / 2;
                        let centerY = canvas.element.getBoundingClientRect().height / 2;

                        canvas.context.strokeStyle = "rgb(255,255,255)";
                        canvas.context.lineWidth = 10;
                        canvas.context.arc(centerX, centerY, 50, 0, Math.PI * 2, false);
                        canvas.context.stroke();

                        canvas.context.lineWidth = 10;
                        canvas.context.strokeStyle = `rgba( 255, 255, 0, ${colorAlpha})`;
                        canvas.context.beginPath();
                        canvas.context.arc(centerX, holdNoteY, (50 + holdNoteScaleStep * 2) * settings.noteSize, -(Math.PI / 2), ((Math.PI * 2) * (holdNoteCurPercent / 100)) - (Math.PI / 2), false);
                        canvas.context.stroke();

                        if (holdNoteCurPercent < 100) {
                            holdNoteCurPercent++;
                        } else {
                            let keyHeld = false;
                            if (Object.keys(keyboard.workingKeyList).length > 0) keyHeld = true;
                            if (holdNoteY < centerY) {
                                if (startFaded) return;
                                if (holdNoteY < centerY && holdNoteY > (centerY - 70)) {
                                    if (keyHeld) {
                                        if (textShowed) {
                                            textShowed = false;
                                            try {
                                                chapterList.removeChild(chapterTutorial.tutorialHintText);
                                            } catch (e) {
                                            }
                                        }
                                        holdNoteY += ((centerY - 70) / 90);
                                    }
                                    if (!keyHeld && !textShowed) {
                                        chapterList.appendChild(chapterTutorial.tutorialHintText);
                                        textShowed = true;
                                    }
                                } else {
                                    holdNoteY += ((centerY - 70) / 90);
                                }
                            } else {
                                if (keyHeld || startFaded) {
                                    if (!startFaded) soundsManager.flick.play();
                                    startFaded = true;
                                    colorAlpha -= 0.05;
                                    holdNoteScaleStep++;
                                }
                                if (colorAlpha <= -1) {
                                    tutorial.sceneThree(tutorial);
                                    sceneStop = true;
                                }
                            }
                        }
                    }
                }

                requestAnimationFrame(frame);
            }
            canvas.start();
        }

        sceneThree(tutorial) {
            console.log("3")
            let canvas = tutorial.canvas;
            let sceneStop = false;
            let flickNoteY = 0;
            let tailLong = 500;
            let textShowed = false;
            let radiusStep = 0;
            let alpha = 1;
            let fpsNow, fpsThen;
            let soundsPlayed = false;
            fpsThen = Date.now();
            chapterTutorial.tutorialHintText.textContent = "Hold A Key";
            canvas.start = function () {
                function frame() {
                    if (!sceneStop) {
                        requestAnimationFrame(frame);
                        // fps controller
                        fpsNow = Date.now();
                        if (fpsNow - fpsThen < fpsInterval) return;
                        fpsThen = fpsNow - ((fpsNow - fpsThen) % fpsInterval);

                        canvas.element.width = canvas.element.getBoundingClientRect().width;
                        canvas.element.height = canvas.element.getBoundingClientRect().height;
                        let centerX = canvas.element.getBoundingClientRect().width / 2;
                        let centerY = canvas.element.getBoundingClientRect().height / 2;

                        canvas.context.beginPath();
                        canvas.context.strokeStyle = "rgb(255,255,255)";
                        canvas.context.lineWidth = 10;
                        canvas.context.arc(centerX, centerY, 50, 0, Math.PI * 2, false);
                        canvas.context.stroke();

                        let tail = canvas.context.createLinearGradient(0, flickNoteY - tailLong, 0, flickNoteY);
                        // inner
                        tail.addColorStop(0, 'rgba(3,219,252,0)');
                        tail.addColorStop(0.8, 'rgba(3,219,252,0.3)');
                        canvas.context.fillStyle = tail;
                        canvas.context.beginPath();
                        canvas.context.fillRect(centerX - 50 * settings.noteSize, flickNoteY, 100 * settings.noteSize, -1 * tailLong);
                        // side
                        tail = canvas.context.createLinearGradient(0, flickNoteY - tailLong, 0, flickNoteY);
                        tail.addColorStop(0, 'rgba(0,0,0,0)');
                        tail.addColorStop(0.8, 'rgba(3,219,252,1)');
                        canvas.context.fillStyle = tail;
                        canvas.context.beginPath();
                        canvas.context.fillRect(centerX - (50 * settings.noteSize) - 5, flickNoteY, 10, -1 * tailLong);
                        canvas.context.beginPath();
                        canvas.context.fillRect(centerX + (50 * settings.noteSize) + 5, flickNoteY, -10, -1 * tailLong);
                        // circle
                        if (alpha === 1) {
                            canvas.context.beginPath();
                            canvas.context.fillStyle = "rgb(255,255,255)";
                            canvas.context.arc(centerX, flickNoteY, 50 * settings.noteSize, 0, 2 * Math.PI, false);
                            canvas.context.fill();
                        }
                        canvas.context.beginPath();
                        canvas.context.strokeStyle = `rgba(3, 219, 252, ${alpha})`;
                        canvas.context.arc(centerX, flickNoteY, (50 + radiusStep * 2) * settings.noteSize, 0, 2 * Math.PI, false);
                        canvas.context.stroke();


                        if (flickNoteY < centerY) {
                            flickNoteY += (centerY) / 90;
                        } else {
                            let keyPressed = false;
                            for (let [key, value] of Object.entries(keyboard.workingKeyList)) {
                                if (value === true || value === "dragNoteHolding") {
                                    keyPressed = true;
                                    keyboard.workingKeyList[key] = "dragNoteHolding";
                                }
                            }
                            if (keyPressed || tailLong <= 0) {
                                if (tailLong <= 0) {
                                    if (alpha <= 0) {
                                        tutorial.sceneFour(tutorial);
                                        sceneStop = true;
                                    }
                                    radiusStep++;
                                    alpha -= 0.05;
                                } else {
                                    if (!soundsPlayed) {
                                        soundsManager.drag.play();
                                        soundsPlayed = true;
                                    }
                                    tailLong -= 5;
                                    textShowed = false;
                                    try {
                                        chapterList.removeChild(chapterTutorial.tutorialHintText);
                                    } catch (e) {
                                    }
                                }
                            } else if (!textShowed) {
                                chapterList.appendChild(chapterTutorial.tutorialHintText);
                                textShowed = true;
                            }
                        }
                    }
                }

                requestAnimationFrame(frame);
            }
            canvas.start();
        }

        sceneFour(tutorial) {
            let canvas = tutorial.canvas;
            let sceneStop = false;
            let fpsNow, fpsThen;
            chapterTutorial.tutorialHintText.textContent = "";
            chapterTutorial.tutorialHintText.innerHTML = "Congratulations! <br>You complete the tutorial!";
            let time = 0;
            let sceneOpacity = 1;
            canvas.start = function () {
                function frame() {
                    if (!sceneStop) {
                        requestAnimationFrame(frame);
                        fpsNow = Date.now();
                        if (fpsNow - fpsThen < fpsInterval) return;
                        fpsThen = fpsNow - ((fpsNow - fpsThen) % fpsInterval);

                        canvas.element.width = canvas.element.getBoundingClientRect().width;
                        canvas.element.height = canvas.element.getBoundingClientRect().height;
                        let centerX = canvas.element.getBoundingClientRect().width / 2;
                        let centerY = canvas.element.getBoundingClientRect().height / 2;

                        canvas.context.beginPath();
                        canvas.context.strokeStyle = "rgb(255,255,255)";
                        canvas.context.lineWidth = 10;
                        canvas.context.arc(centerX, centerY, 50, 0, Math.PI * 2, false);
                        canvas.context.stroke();


                        if (time >= 60) {
                            chapterList.appendChild(chapterTutorial.tutorialHintText);

                            if (time >= 180) {
                                canvas.element.style.opacity = sceneOpacity.toString();
                                chapterTutorial.tutorialHintText.style.opacity = sceneOpacity.toString();
                                if (sceneOpacity > 0) sceneOpacity -= 0.05;

                                if (time >= 360) {
                                    chapterTutorial.played = true;
                                    sceneStop = true;
                                    chapterList.removeChild(chapterTutorial.tutorialHintText);
                                    keyboard.detach();
                                    gamePage.createNewGame(tutorial._originalPlayChapter);
                                }
                            }
                        }
                        time++;
                    }
                }

                requestAnimationFrame(frame);
            }
            canvas.start();
        }
    }
}