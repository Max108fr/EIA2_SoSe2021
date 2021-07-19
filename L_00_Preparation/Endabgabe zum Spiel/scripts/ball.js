"use strict";
var EIA2Endabgabe;
(function (EIA2Endabgabe) {
    class Ball extends EIA2Endabgabe.Movable {
        constructor(_radius, _pos) {
            super(_pos, 0);
            this.vel = new EIA2Endabgabe.Vector(0, 0);
            this.radius = _radius;
        }
        init(_game) {
            return;
        }
        update(_game) {
            this.position.add(this.vel);
            this.vel.scale(0.95);
        }
        render(_crc2, _game) {
            console.log("draw Ball");
            _crc2.beginPath();
            _crc2.lineWidth = 2;
            _crc2.strokeStyle = "black";
            _crc2.fillStyle = "white";
            _crc2.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI, false);
            _crc2.fill();
            _crc2.stroke();
            _crc2.beginPath();
            _crc2.lineWidth = 2;
            _crc2.fillStyle = "black";
            _crc2.arc(this.position.x, this.position.y, 5, 0, 2 * Math.PI, false);
            _crc2.fill();
            _crc2.beginPath();
            _crc2.lineWidth = 2;
            _crc2.fillStyle = "black";
            _crc2.arc(this.position.x - 8, this.position.y - 8, 5, 0, 2 * Math.PI, false);
            _crc2.fill();
            _crc2.beginPath();
            _crc2.lineWidth = 2;
            _crc2.fillStyle = "black";
            _crc2.arc(this.position.x + 8, this.position.y + 8, 5, 0, 2 * Math.PI, false);
            _crc2.fill();
            _crc2.beginPath();
            _crc2.lineWidth = 2;
            _crc2.fillStyle = "black";
            _crc2.arc(this.position.x - 8, this.position.y + 8, 5, 0, 2 * Math.PI, false);
            _crc2.fill();
            _crc2.beginPath();
            _crc2.lineWidth = 2;
            _crc2.fillStyle = "black";
            _crc2.arc(this.position.x + 8, this.position.y - 8, 5, 0, 2 * Math.PI, false);
            _crc2.fill();
        }
    }
    EIA2Endabgabe.Ball = Ball;
})(EIA2Endabgabe || (EIA2Endabgabe = {}));
//# sourceMappingURL=ball.js.map