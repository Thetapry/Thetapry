class TapNote {
    constructor(x, y, radius, innerRadius, lineWidth, borderColor, fillColor, showYellow) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.innerRadius = innerRadius;
        this.lineWidth = lineWidth;
        this.borderColor = borderColor;
        this.fillColor = fillColor;
        if (showYellow) {
            this.yellowColor = "rgba(255,255,0,1)";
        }
        this.track = undefined;
    }

    run(canvas) {
        canvas.context.lineWidth = this.lineWidth;
        canvas.context.strokeStyle = this.borderColor;
        canvas.context.beginPath();
        canvas.context.arc(this._getX(canvas.element), this._getY(canvas.element), this.radius * settings.noteSize, 0, 2 * Math.PI, false);
        canvas.context.stroke();

        canvas.context.fillStyle = this.fillColor;
        canvas.context.beginPath();
        canvas.context.arc(this._getX(canvas.element), this._getY(canvas.element), this.innerRadius * settings.noteSize, 0, 2 * Math.PI, false);
        canvas.context.fill();

        if (this.yellowColor) {
            canvas.context.strokeStyle = this.yellowColor;
            canvas.context.beginPath();
            canvas.context.arc(this._getX(canvas.element), this._getY(canvas.element), this.innerRadius * settings.noteSize, 0, 2 * Math.PI, false);
            canvas.context.stroke();
        }

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
        canvas.tapNotes = methods.removeElementFromAList(canvas.tapNotes, this);
        canvas.fadingOutNotes.push(this);
    }

    runFadeOut(canvas) {
        if (parseFloat(this.borderColor.split(",")[3].replace(")", "")) <= 0) {
            // fading out animation finished
            canvas.fadingOutNotes = methods.removeElementFromAList(canvas.fadingOutNotes, this);
        }
        canvas.context.lineWidth = this.lineWidth;
        canvas.context.strokeStyle = this.borderColor;
        canvas.context.beginPath();
        canvas.context.arc(this._getX(canvas.element), this._getY(canvas.element), this.radius * settings.noteSize, 0, 2 * Math.PI, false);
        canvas.context.stroke();

        canvas.context.fillStyle = this.fillColor;
        canvas.context.beginPath();
        canvas.context.arc(this._getX(canvas.element), this._getY(canvas.element), this.innerRadius * settings.noteSize, 0, 2 * Math.PI, false);
        canvas.context.fill();

        if (this.yellowColor) {
            canvas.context.strokeStyle = this.yellowColor;
            canvas.context.beginPath();
            canvas.context.arc(this._getX(canvas.element), this._getY(canvas.element), this.innerRadius * settings.noteSize, 0, 2 * Math.PI, false);
            canvas.context.stroke();
        }

        let borderColorList = this.borderColor.split(",");
        borderColorList[3] = parseFloat(borderColorList[3].replace(")", "")) - 0.05 + ")";
        let newColor = "";
        borderColorList.forEach(s => {
            newColor = newColor + s + ",";
        });
        this.borderColor = newColor.substring(0, newColor.length - 1);

        newColor = "";
        let innerColorList = this.fillColor.split(",");
        innerColorList[3] = parseFloat(innerColorList[3].replace(")", "")) - 0.05 + ")";
        innerColorList.forEach(s => {
            newColor = newColor + s + ",";
        });
        this.fillColor = newColor.substring(0, newColor.length - 1);

        if (this.yellowColor) {
            newColor = "";
            let yellowColorList = this.yellowColor.split(",");
            yellowColorList[3] = parseFloat(innerColorList[3].replace(")", "")) - "0.05" + ")";
            yellowColorList.forEach(s => {
                newColor = newColor + s + ",";
            });
            this.yellowColor = newColor.substring(0, newColor.length - 1);
        }

        this.radius += 0.2;
        if (this.innerRadius - 2 >= 0) this.innerRadius -= 2;
        this.lineWidth = this.lineWidth + 0.3;
    }
}