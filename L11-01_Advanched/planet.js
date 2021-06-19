"use strict";
//Nectar Methode inspiriert von Lisa Waletzko
var L11advanced;
(function (L11advanced) {
    class Flower {
        constructor(_fillLevel, _position) {
            console.log("flower constructor");
            if (_position)
                this.position = _position.copy();
            else
                this.position = new L11advanced.Vector(0, 0);
            let randomFill = Math.floor(Math.random() * 50);
            if (_fillLevel)
                this.fillLevel = _fillLevel;
            else
                this.fillLevel = randomFill;
            this.velocity = new L11advanced.Vector(0, 0);
        }
        draw() {
            console.log("Flower draw");
        }
        nectar(_timeslice) {
            console.log("Flower nectar");
        }
    }
    L11advanced.Flower = Flower;
})(L11advanced || (L11advanced = {}));
//# sourceMappingURL=planet.js.map