"use strict";
var L1002;
(function (L1002) {
    class Cloud extends L1002.Moveable {
        constructor(_size, _position) {
            super(_position);
            if (_position)
                this.position = _position;
            else
                this.position = new L1002.Vector(20, 100);
            this.velocity = new L1002.Vector(100, 0);
            this.size = _size;
        }
        draw() {
            let canvas = document.querySelector("#screen");
            let crc2 = canvas.getContext("2d");
            let particleNumber = 30;
            let particleRadius = 20;
            let particle = new Path2D();
            let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, particleRadius);
            gradient.addColorStop(0, "HSL(150, 100%, 80%)");
            gradient.addColorStop(1, ("HSL(150, 50%, 90%)"));
            particle.arc(0, 0, particleRadius, 0, 2 * Math.PI);
            particle.arc(50, 0, 30, 0, 2 * Math.PI);
            particle.arc(30, 0, particleRadius, 0, 2 * Math.PI);
            particle.arc(60, -20, particleRadius, 0, 2 * Math.PI);
            particle.arc(50, -10, particleRadius, 0, 2 * Math.PI);
            particle.arc(80, 0, particleRadius, 0, 2 * Math.PI);
            particle.arc(30, 5, 30, 0, 2 * Math.PI);
            crc2.fillStyle = gradient;
            crc2.fill();
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.fillStyle = gradient;
            for (let i = 0; i < particleNumber; i++) {
                crc2.save();
                crc2.translate(this.position.x, this.position.y);
                crc2.fill(particle);
                crc2.restore();
            }
            crc2.restore();
        }
    }
    L1002.Cloud = Cloud;
})(L1002 || (L1002 = {}));
//# sourceMappingURL=clouds.js.map