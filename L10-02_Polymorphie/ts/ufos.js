"use strict";
var L1002;
(function (L1002) {
    class Ufo extends L1002.Moveable {
        constructor(_position) {
            super(_position);
            if (_position)
                this.position = _position;
            else
                this.position = new L1002.Vector(600, 520);
            this.velocity = new L1002.Vector(1000, 0);
            this.velocity.random(120, 20);
        }
        draw() {
            console.log("create ufo");
            L1002.crc2.save();
            L1002.crc2.beginPath();
            L1002.crc2.beginPath();
            L1002.crc2.fillStyle = "HSL(150, 100%, 50%)";
            L1002.crc2.arc(this.position.x, this.position.y - 4, 15, 0, 2 * Math.PI);
            L1002.crc2.fill();
            L1002.crc2.closePath();
            L1002.crc2.save();
            L1002.crc2.beginPath();
            L1002.crc2.fillStyle = "HSL(180, 40%, 60%)";
            L1002.crc2.ellipse(this.position.x, this.position.y, 8, 35, Math.PI / 2, 0, 2 * Math.PI);
            L1002.crc2.fill();
            L1002.crc2.closePath();
            L1002.crc2.save();
            L1002.crc2.beginPath();
            L1002.crc2.beginPath();
            L1002.crc2.fillStyle = "HSL(180, 100%, 100%)";
            L1002.crc2.arc(this.position.x, this.position.y - 5, 3, 0, 2 * Math.PI);
            L1002.crc2.arc(this.position.x + 12, this.position.y - 5, 3, 0, 2 * Math.PI);
            L1002.crc2.arc(this.position.x - 12, this.position.y - 5, 3, 0, 2 * Math.PI);
            L1002.crc2.fill();
            L1002.crc2.closePath();
            L1002.crc2.save();
            let gradient = L1002.crc2.createLinearGradient(0, this.position.y, 0, L1002.crc2.canvas.height);
            gradient.addColorStop(0, "HSLA(110, 100%, 50%, 0.2)");
            gradient.addColorStop(1, "HSLA(140, 100%, 10%, 0.1)");
            L1002.crc2.fillStyle = gradient;
            L1002.crc2.moveTo(this.position.x, this.position.y + 5);
            L1002.crc2.lineTo(this.position.x + 30, this.position.y + 50);
            L1002.crc2.lineTo(this.position.x - 30, this.position.y + 50);
            L1002.crc2.fill();
            L1002.crc2.closePath();
            L1002.crc2.restore();
        }
    }
    L1002.Ufo = Ufo;
})(L1002 || (L1002 = {}));
//# sourceMappingURL=ufos.js.map