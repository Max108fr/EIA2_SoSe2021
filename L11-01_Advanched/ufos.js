"use strict";
var L11advanced;
(function (L11advanced) {
    class Ufo extends L11advanced.Moveable {
        constructor(_size, _position) {
            console.log("ufo constructor");
            super(_size, _position);
            if (_position)
                this.position = _position;
            else
                this.position = new L11advanced.Vector(660, 390); // Startposition
            this.velocity = new L11advanced.Vector(50, 0);
            this.velocity.random(120, 20);
        }
        draw() {
            console.log("create ufo");
            L11advanced.crc2.save();
            L11advanced.crc2.beginPath();
            L11advanced.crc2.beginPath();
            L11advanced.crc2.fillStyle = "HSL(150, 100%, 50%)";
            L11advanced.crc2.arc(this.position.x, this.position.y - 4, 15, 0, 2 * Math.PI);
            L11advanced.crc2.fill();
            L11advanced.crc2.closePath();
            L11advanced.crc2.save();
            L11advanced.crc2.beginPath();
            L11advanced.crc2.fillStyle = "HSL(180, 40%, 60%)";
            L11advanced.crc2.ellipse(this.position.x, this.position.y, 8, 35, Math.PI / 2, 0, 2 * Math.PI);
            L11advanced.crc2.fill();
            L11advanced.crc2.closePath();
            L11advanced.crc2.save();
            L11advanced.crc2.beginPath();
            L11advanced.crc2.beginPath();
            L11advanced.crc2.fillStyle = "HSL(180, 100%, 100%)";
            L11advanced.crc2.arc(this.position.x, this.position.y - 5, 3, 0, 2 * Math.PI);
            L11advanced.crc2.arc(this.position.x + 12, this.position.y - 5, 3, 0, 2 * Math.PI);
            L11advanced.crc2.arc(this.position.x - 12, this.position.y - 5, 3, 0, 2 * Math.PI);
            L11advanced.crc2.fill();
            L11advanced.crc2.closePath();
            L11advanced.crc2.save();
            let gradient = L11advanced.crc2.createLinearGradient(0, this.position.y, 0, L11advanced.crc2.canvas.height);
            gradient.addColorStop(0, "HSLA(110, 100%, 50%, 0.2)");
            gradient.addColorStop(1, "HSLA(140, 100%, 10%, 0.1)");
            L11advanced.crc2.fillStyle = gradient;
            L11advanced.crc2.moveTo(this.position.x, this.position.y + 5);
            L11advanced.crc2.lineTo(this.position.x + 30, this.position.y + 50);
            L11advanced.crc2.lineTo(this.position.x - 30, this.position.y + 50);
            L11advanced.crc2.fill();
            L11advanced.crc2.closePath();
            L11advanced.crc2.restore();
        }
    }
    L11advanced.Ufo = Ufo;
})(L11advanced || (L11advanced = {}));
//# sourceMappingURL=ufos.js.map