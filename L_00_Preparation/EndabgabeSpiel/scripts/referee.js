"use strict";
var EIA2Endabgabe;
(function (EIA2Endabgabe) {
    class Referee extends EIA2Endabgabe.Movable {
        constructor(_pos) {
            super(_pos, 4);
        }
        init(_game) { return null; }
        update(_game) {
            if (this.shouldBeRunning(_game.ball)) {
                this.moveTowards(_game.ball.position);
            }
        }
        render(_crc2, _game) {
            _crc2.beginPath();
            _crc2.lineWidth = 2;
            _crc2.fillStyle = "violet";
            _crc2.arc(this.position.x, this.position.y, 20, 0, 2 * Math.PI, false);
            _crc2.fill();
            _crc2.beginPath();
            _crc2.lineWidth = 2;
            _crc2.fillStyle = "blue";
            _crc2.arc(this.position.x, this.position.y, 10, 0, 2 * Math.PI, false);
            _crc2.fill();
            if (EIA2Endabgabe.DEBUG) {
                _crc2.beginPath();
                _crc2.lineWidth = 2;
                _crc2.strokeStyle = "pink";
                _crc2.arc(this.position.x, this.position.y, (EIA2Endabgabe.canvas.width * (60 / 90)) / 2, //radius
                0, 2 * Math.PI, false);
                _crc2.stroke();
            }
        }
        shouldBeRunning(_ball) {
            return EIA2Endabgabe.Vector.getDistance(_ball.position, this.position) > (EIA2Endabgabe.canvas.width * (60 / 90)) / 2; //smaller than Referee Radius
        }
    }
    EIA2Endabgabe.Referee = Referee;
})(EIA2Endabgabe || (EIA2Endabgabe = {}));
//# sourceMappingURL=referee.js.map