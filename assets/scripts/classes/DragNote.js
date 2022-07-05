class DragNote {
    constructor(x, y, radius, lineWidth,
                circleFillColor, circleOutlineColor,
                tailCoords, tailSpeed,
                sideColorStart, sideColorStop,
                tailColorStart, tailColorStop,
                track) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.lineWidth = lineWidth;
        this.tailCoords = tailCoords;
        this.tailSpeed = tailSpeed;
        this.circleFillColor = circleFillColor;
        this.circleOutlineColor = circleOutlineColor;
        this.sideColorStart = sideColorStart;
        this.sideColorStop = sideColorStop;
        this.tailColorStart = tailColorStart;
        this.tailColorStop = tailColorStop;
        this.track = track;
    }

    run(canvas) {
        let x = this._getX(canvas.element);
        let y = this._getY(canvas.element);

        // tail inner
        let tail = canvas.context.createLinearGradient(x + this.tailCoords.x, y + this.tailCoords.y, x, y);
        tail.addColorStop(0, this.tailColorStop);
        tail.addColorStop(0.3, this.tailColorStart);
        canvas.context.fillStyle = tail;
        canvas.context.beginPath();
        if (this.tailCoords.x !== 0) {
            // horizontal
            canvas.context.fillRect(x, y - (50 * settings.noteSize), this.tailCoords.x, 100 * settings.noteSize);
        } else {
            // vertical
            canvas.context.fillRect(x - (50 * settings.noteSize), y, 100 * settings.noteSize, this.tailCoords.y);
        }
        // tail side
        tail = canvas.context.createLinearGradient(x + this.tailCoords.x, y + this.tailCoords.y, x, y);
        tail.addColorStop(0, this.sideColorStop);
        tail.addColorStop(0.3, this.sideColorStart);
        canvas.context.fillStyle = tail;
        canvas.context.beginPath();
        if (this.tailCoords.x !== 0) {
            // horizontal
            canvas.context.fillRect(x, y - (50 * settings.noteSize) - 5, this.tailCoords.x, this.lineWidth);
            canvas.context.beginPath();
            canvas.context.fillRect(x, y + (50 * settings.noteSize) + 5, this.tailCoords.x, -this.lineWidth);
        } else {
            // vertical
            canvas.context.fillRect(x - (50 * settings.noteSize) - 5, y, this.lineWidth, this.tailCoords.y);
            canvas.context.beginPath();
            canvas.context.fillRect(x + (50 * settings.noteSize) + 5, y, -this.lineWidth, this.tailCoords.y);
        }
        // circle (inner)
        canvas.context.beginPath();
        canvas.context.fillStyle = this.circleFillColor;
        canvas.context.arc(x, y, this.radius * settings.noteSize, 0, 2 * Math.PI, false);
        canvas.context.fill();
        // circle (outline)
        canvas.context.beginPath();
        canvas.context.strokeStyle = this.circleOutlineColor;
        canvas.context.arc(x, y, this.radius * settings.noteSize, 0, Math.PI * 2, false);
        canvas.context.stroke();

        this.move();
    }

    _getX(element) {
        return (element.getBoundingClientRect().width / 2) + this.x;
    }

    _getY(element) {
        return (element.getBoundingClientRect().height / 2) + this.y;
    }

    move() {
        if (this.track !== undefined) {
            let results = this.track(this);
            this.x = results.x;
            this.y = results.y;
        }
    }

    fadeOut(canvas) {
        canvas.dragNotes = methods.removeElementFromAList(canvas.dragNotes, this);
        canvas.fadingOutNotes.push(this);
    }

    shortenTail() {
        if (this.tailCoords.x !== 0) {
            let newXCoord = this.tailCoords.x + (this.tailSpeed * ((-this.tailCoords.x) / Math.abs(this.tailCoords.x)));
            if (this.tailCoords.x < 0 && newXCoord > 0 || this.tailCoords.x > 0 && newXCoord < 0) {
                this.tailCoords.x = 0;
            } else {
                this.tailCoords.x = newXCoord;
            }
            // this.tailCoords.x = this.tailCoords.x + ((-this.tailCoords.x) / Math.abs(this.tailCoords.x));
        } else {
            let newYCoord = this.tailCoords.y + (this.tailSpeed * ((-this.tailCoords.y) / Math.abs(this.tailCoords.y)));
            if (this.tailCoords.y < 0 && newYCoord > 0 || this.tailCoords.y > 0 && newYCoord < 0) {
                this.tailCoords.y = 0;
            } else {
                this.tailCoords.y = newYCoord;
            }
	}
    }

    isTailVisible() {
        return !(this.tailCoords.x === 0 && this.tailCoords.y === 0);
    }

    runFadeOut(canvas) {
        if (parseFloat(this.circleOutlineColor.split(",")[3].replace(")", "")) <= 0) {
            // fade out finished
            canvas.fadingOutNotes = methods.removeElementFromAList(canvas.fadingOutNotes, this);
        }

        canvas.context.lineWidth = this.lineWidth;
        canvas.context.strokeStyle = this.circleOutlineColor;
        canvas.context.beginPath();
        canvas.context.arc(this._getX(canvas.element), this._getY(canvas.element), this.radius * settings.noteSize, 0, 2 * Math.PI, false);
        canvas.context.stroke();

        let borderColorList = this.circleOutlineColor.split(",");
        borderColorList[3] = parseFloat(borderColorList[3].replace(")", "")) - 0.05 + ")";
        this.circleOutlineColor = borderColorList.join(",");

        this.radius += 0.2;
        if (this.innerRadius - 2 >= 0) this.innerRadius -= 2;
        this.lineWidth = this.lineWidth + 0.3;
    }
}
