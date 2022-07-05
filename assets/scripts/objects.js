const objects = {
    Canvas: class canvas {
        constructor(canvas) {
            this.canvas = canvas;
            this.context = canvas.getContext("2d");
            this.checkCircles = [];
            this.tapNotes = [];
            this.fadingOutNotes = [];
        }


        start() {
            let object = this;

            function draw() {
                object.canvas.width = object.canvas.getBoundingClientRect().width;
                object.canvas.height = object.canvas.getBoundingClientRect().height;
                object.checkCircles.forEach(checkCircles => {
                    objects.drawCheckCircles(object.context, checkCircles.lineWidth, checkCircles.color, checkCircles.getX(object.canvas),
                        checkCircles.getY(object.canvas), checkCircles.radius);
                    checkCircles.move();
                });
                object.tapNotes.forEach(tapNote => {
                    objects.drawTapNotes(object.context, tapNote.lineWidth, tapNote.color, tapNote.getX(object.canvas),
                        tapNote.getY(object.canvas), tapNote.radius);
                    tapNote.move();
                });
                object.fadingOutNotes.forEach(fadingOutNote => {
                    objects.drawFadingOutNote(object.canvas, object.context, fadingOutNote);
                });
                requestAnimationFrame(draw);
            }

            requestAnimationFrame(draw);
        }


    },

    drawFadingOutNote: function (canvas, context, object) {
        context.lineWidth = object.lineWidth;
        context.strokeStyle = object.color;
        context.beginPath();
        context.arc(object.getX(canvas), object.getY(canvas), object.radius * settings.noteSize, 0, 2 * Math.PI, false);
        context.stroke();
        let colorList = object.color.split(",");
        colorList[3] = parseFloat(colorList[3].replace(")", "")) - 0.05 + ")";
        let newColor = "";
        colorList.forEach(s => {
            newColor = newColor + s + ",";
        });
        object.color = newColor.substring(0, newColor.length - 1);
        object.radius = object.radius + 0.1;
        object.lineWidth = object.lineWidth + 0.3;
    },

    checkCircle: class checkCircle {
        constructor(x, y, radius, lineWidth, color) {
            this.x = x;
            this.y = y;
            this.radius = radius;
            this.lineWidth = lineWidth;
            this.color = color;
            this.track = undefined;
        }

        getX(element) {
            return (element.getBoundingClientRect().width / 2) + this.x;
        }

        getY(element) {
            return (element.getBoundingClientRect().height / 2) + this.y;
        }

        move() {
            if (this.track === undefined) return;
            let result = this.track(this.x, this.y);
            this.x = result.x;
            this.y = result.y;
        }
    },

    drawCheckCircles(context, lineWidth, color, x, y, radius) {
        context.lineWidth = lineWidth;
        context.strokeStyle = color;
        context.beginPath();
        context.arc(x, y, radius, 0, 2 * Math.PI, false);
        context.stroke();
    },

    TapNote: class TapNote {
        constructor(x, y, radius, lineWidth, color) {
            this.x = x;
            this.y = y;
            this.radius = radius;
            this.lineWidth = lineWidth;
            this.color = color;
            this.track = undefined;
        }

        getX(element) {
            return (element.getBoundingClientRect().width / 2) + this.x;
        }

        getY(element) {
            return (element.getBoundingClientRect().height / 2) + this.y;
        }

        move() {
            if (this.track === undefined) return;
            let results = this.track(this.x, this.y);
            this.x = results.x;
            this.y = results.y;
        }

        fadeOut(canvasObject) {
            canvasObject.fadingOutNotes.push(this);
            canvasObject.tapNotes = methods.removeElementFromAList(canvasObject.tapNotes, this);
        }
    },

    drawTapNotes(context, lineWidth, color, x, y, radius) {
        context.lineWidth = lineWidth;
        context.strokeStyle = color;
        context.beginPath();
        context.arc(x, y, radius * settings.noteSize, 0, 2 * Math.PI, false);
        context.stroke();
    },

    HoldNote: class HoldNote {

    },

    DragNote: class DragNote {

    }
}