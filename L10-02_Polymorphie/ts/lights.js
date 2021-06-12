"use strict";
var L1002;
(function (L1002) {
    class Lights {
        constructor(_position) {
            console.log("draw lights");
        }
        draw(_x, _y) {
            for (let index = 0; index < 2; index++) {
                let r1 = 1;
                let r2 = 15;
                let gradient = L1002.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
                gradient.addColorStop(0, "HSLA(310, 90%, 100%, 1");
                gradient.addColorStop(1, "HSLA(310, 100%, 70%, 0.8");
                L1002.crc2.beginPath();
                L1002.crc2.strokeStyle = "black";
                L1002.crc2.fillStyle = "black";
                L1002.crc2.fillRect(_x - 2, _y + 5, 4, 15);
                L1002.crc2.beginPath();
                L1002.crc2.fillStyle = gradient;
                L1002.crc2.moveTo(_x, _y);
                L1002.crc2.arc(_x, _y, 15, 0, 2 * Math.PI);
                L1002.crc2.fill();
                L1002.crc2.beginPath();
                L1002.crc2.fillStyle = "white";
                L1002.crc2.arc(_x, _y, 3, 0, 2 * Math.PI);
                L1002.crc2.closePath();
                L1002.crc2.fill();
            }
        }
    }
    L1002.Lights = Lights;
})(L1002 || (L1002 = {}));
//# sourceMappingURL=lights.js.map