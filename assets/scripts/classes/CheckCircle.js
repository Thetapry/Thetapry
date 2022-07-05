class CheckCircle {
    constructor(x, y, radius, lineWidth, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.lineWidth = lineWidth;
        this.color = color;
        this.track = undefined;
    }

    run(canvas) {
        canvas.context.lineWidth = this.lineWidth;
        canvas.context.strokeStyle = this.color;
        canvas.context.beginPath();
        canvas.context.arc(this._getX(canvas.element), this._getY(canvas.element), this.radius, 0, 2 * Math.PI, false);
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
            let result = this.track(this.x, this.y);
            this.x = result.x;
            this.y = result.y;
        }
    }
}