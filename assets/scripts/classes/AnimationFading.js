class AnimationFading {
    constructor(element, show) {
        this.element = element;
        this.amount = 0.05;
        this.show = show;
    }

    play() {
        let amount = this.show ? this.amount : this.amount * -1;
        let target = this.show ? "1" : "0";
        let element = this.element;

        function req() {
            element.style.opacity = element.style.opacity === "" ? "0" : String(parseFloat(element.style.opacity) + amount);
            if (element.style.opacity !== target) {
                requestAnimationFrame(req);
            }
        }

        requestAnimationFrame(req);
    }
}