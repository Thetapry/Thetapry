const methods = {
    switchVisible: function (element) {
        if (element.classList.contains("Visible")) {
            element.classList.remove("Visible");
            element.classList.add("Invisible");
        } else {
            element.classList.remove("Invisible");
            element.classList.add("Visible");
        }
    },

    switchShine: function (element) {
        if (element.classList.contains("Shine")) {
            element.classList.remove("Shine");
        } else {
            element.classList.add("Shine");
        }
    },

    getWindowWidth: function () {
        return window.innerWidth;
    },

    getWindowHeight: function () {
        return window.innerHeight;
    },

    getScreenWidth: function () {
        return window.screen.width;
    },

    getScreenHeight: function () {
        return window.screen.height;
    },

    transformGetTranslateX: function (transform) {
        let value = false;
        transform.split(" ").forEach(ele => {
            if (ele.includes("translateX")) {
                value = ele.split("(")[1].replace(")", "");
            }
        });
        return value;
    },

    transformGetTranslateY: function (transform) {
        transform.split(" ").forEach(ele => {
            if (ele.includes("translateY")) {
                return ele.split("(")[1].replace(")", "");
            }
        });
        return false;
    },

    removeElementFromAList: function (list, targetElement) {
        return list.filter(((value) => {
            return value !== targetElement;
        }));
    }
}