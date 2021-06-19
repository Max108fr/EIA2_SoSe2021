"use strict";
var L11advanced;
(function (L11advanced) {
    class Moveable {
        constructor(_size, _position) {
            console.log("Moveables constructor");
            if (_position)
                this.position = _position.copy();
            else
                this.position = new L11advanced.Vector(0, 0);
            this.velocity = new L11advanced.Vector(0, 0);
        }
        draw() {
            console.log("Moveables draw");
        }
        move(_timeslice) {
            console.log("Moveables move");
            let offset = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += L11advanced.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += L11advanced.crc2.canvas.height;
            if (this.position.x > L11advanced.crc2.canvas.width)
                this.position.x -= L11advanced.crc2.canvas.width;
            if (this.position.y > L11advanced.crc2.canvas.height)
                this.position.y -= L11advanced.crc2.canvas.height;
        }
    }
    L11advanced.Moveable = Moveable;
})(L11advanced || (L11advanced = {}));
//# sourceMappingURL=movable.js.map