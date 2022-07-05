const keyboard = {
    workingKeyList: {},

    keyDown: function (event) {
        if (!(event.key in keyboard.workingKeyList)) {
            keyboard.workingKeyList[event.key] = true;
            setTimeout(() => {
                if (keyboard.workingKeyList[event.key] === true) {
                    keyboard.workingKeyList[event.key] = false;
                }
            }, 300);
        }
    },

    isAnyKeyAvailable() {
        let available = false;
        Object.keys(keyboard.workingKeyList).some((key, index, array) => {
            if (keyboard.workingKeyList[key] === true) {
                available = true;
                return true;
            }
        });
        return available;
    },

    getKeyFromNote(note) {
        let foundKey = undefined;
        Object.keys(keyboard.workingKeyList).some((key, index, array) => {
            if (keyboard.workingKeyList[key] === note) {
                 foundKey = key;
                 return true;
            }
        });
        return foundKey;
    },

    keyUp: function (event) {
        if (event.key in keyboard.workingKeyList) {
            delete keyboard.workingKeyList[event.key]
        }
    },

    attach: function () {
        window.addEventListener('keydown', this.keyDown);
        window.addEventListener('keyup', this.keyUp);
    },

    detach: function () {
        window.removeEventListener('keydown', this.keyDown);
        window.removeEventListener('keyup', this.keyUp);
        keyboard.workingKeyList = {};
    }
}