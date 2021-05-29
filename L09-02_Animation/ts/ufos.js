"use strict";
var L092;
(function (L092) {
    class Ufos {
        constructor(_position, _velocity) {
            this.position = new L092.Vector(0, -450);
            this.velocity = new L092.Vector(0, -450);
            this.velocity.random(75, 75);
        }
        drawUfos(_x, _y) {
            let canvas = document.querySelector("#screen");
            let crc2 = canvas.getContext("2d");
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.beginPath();
            crc2.fillStyle = "HSL(150, 100%, 50%)";
            crc2.arc(_x, _y - 4, 15, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
            crc2.beginPath();
            crc2.fillStyle = "HSL(180, 40%, 60%)";
            crc2.ellipse(_x, _y, 8, 35, Math.PI / 2, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
            crc2.beginPath();
            crc2.fillStyle = "HSL(180, 100%, 100%)";
            crc2.arc(_x, _y - 5, 3, 0, 2 * Math.PI);
            crc2.arc(_x + 12, _y - 5, 3, 0, 2 * Math.PI);
            crc2.arc(_x - 12, _y - 5, 3, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
            crc2.beginPath();
            let gradient = crc2.createLinearGradient(0, _y, 0, crc2.canvas.height);
            gradient.addColorStop(0, "HSLA(110, 100%, 50%, 0.2)");
            gradient.addColorStop(1, "HSLA(140, 100%, 10%, 0.1)");
            crc2.fillStyle = gradient;
            crc2.moveTo(_x, _y + 5);
            crc2.lineTo(_x + 30, _y + 50);
            crc2.lineTo(_x - 30, _y + 50);
            crc2.fill();
            crc2.closePath();
            crc2.restore();
        }
        move(_timeslice) {
            let canvas = document.querySelector("#screen");
            let crc2 = canvas.getContext("2d");
            let offset = new L092.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += crc2.canvas.height;
            if (this.position.x > crc2.canvas.width)
                this.position.x -= crc2.canvas.width;
            if (this.position.y > crc2.canvas.height)
                this.position.y -= crc2.canvas.height;
        }
    }
    L092.Ufos = Ufos;
})(L092 || (L092 = {}));
//# sourceMappingURL=ufos.js.map