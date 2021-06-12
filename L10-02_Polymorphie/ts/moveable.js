"use strict";
var L1002;
(function (L1002) {
    class Moveable {
        constructor(_position) {
            console.log("generate movement");
            if (_position)
                this.position = _position;
            else
                this.position = new L1002.Vector(750, 470);
            this.velocity = new L1002.Vector(1000, 0);
        }
        draw() {
            //comment
        }
        move(_timeslice) {
            let offset = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += L1002.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += L1002.crc2.canvas.height;
            if (this.position.x > L1002.crc2.canvas.height)
                this.position.x -= L1002.crc2.canvas.width;
            if (this.position.y > L1002.crc2.canvas.height)
                this.position.y -= L1002.crc2.canvas.height;
        }
    }
    L1002.Moveable = Moveable;
})(L1002 || (L1002 = {}));
//# sourceMappingURL=moveable.js.map