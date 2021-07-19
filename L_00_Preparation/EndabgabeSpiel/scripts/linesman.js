"use strict";
var EIA2Endabgabe;
(function (EIA2Endabgabe) {
    class Linesman extends EIA2Endabgabe.Movable {
        constructor(_pos) {
            super(_pos, 5);
        }
        init(_game) {
            return;
        }
        update(_game) {
            if (_game.ball.position.y < this.position.y) {
                this.position.y -= this.speed;
            }
            else if (_game.ball.position.y > this.position.y) {
                this.position.y += this.speed;
            }
        }
        render(_crc2, _game) {
            _crc2.beginPath();
            _crc2.lineWidth = 2;
            _crc2.fillStyle = "orange";
            _crc2.arc(this.position.x, this.position.y, 20, 0, 2 * Math.PI, false);
            _crc2.fill();
            _crc2.beginPath();
            _crc2.lineWidth = 2;
            _crc2.fillStyle = "silver";
            _crc2.arc(this.position.x, this.position.y, 10, 0, 2 * Math.PI, false);
            _crc2.fill();
        }
    }
    EIA2Endabgabe.Linesman = Linesman;
})(EIA2Endabgabe || (EIA2Endabgabe = {}));
//# sourceMappingURL=linesman.js.map