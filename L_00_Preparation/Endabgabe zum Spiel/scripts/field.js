"use strict";
var EIA2Endabgabe;
(function (EIA2Endabgabe) {
    class Field {
        constructor(_width, _height) {
            this.width = _width;
            this.height = _height;
            const goalWidth = 200;
            const goalHeight = 5;
            this.goalTeam1 = new EIA2Endabgabe.Rectangle(new EIA2Endabgabe.Vector((this.width - goalWidth) / 2, 0), goalWidth, goalHeight);
            this.goalTeam2 = new EIA2Endabgabe.Rectangle(new EIA2Endabgabe.Vector((this.width - goalWidth) / 2, this.height - goalHeight), goalWidth, goalHeight);
        }
        update(_game) {
            if (this.checkGoal1(_game.ball)) {
                _game.scoreTeam2 += 1;
                _game.updateGameInfo();
                _game.resetBall(2);
            }
            else if (this.checkGoal2(_game.ball)) {
                _game.scoreTeam1 += 1;
                _game.updateGameInfo();
                _game.resetBall(1);
            }
            if (this.outOfPlay(_game)) {
                _game.resetBall();
            }
        }
        render(_crc2, _game) {
            console.log("draw playingfield");
            // middle line
            _crc2.strokeStyle = "white";
            _crc2.lineWidth = 2;
            _crc2.beginPath();
            _crc2.moveTo(0, this.height / 2);
            _crc2.lineTo(this.width, this.height / 2);
            _crc2.stroke();
            // border
            _crc2.strokeStyle = "white";
            _crc2.lineWidth = 4;
            _crc2.strokeRect(0, 0, this.width, this.height);
            // penaltyarea t1
            _crc2.strokeStyle = "white";
            _crc2.lineWidth = 2;
            _crc2.strokeRect(150, 785, 400, 125);
            _crc2.strokeStyle = "white";
            _crc2.lineWidth = 2;
            _crc2.strokeRect(225, 835, 250, 75);
            _crc2.strokeStyle = "white";
            _crc2.beginPath();
            _crc2.lineWidth = 2;
            _crc2.arc(this.width / 2, this.height - 810, 5, 0, 2 * Math.PI, false);
            _crc2.fillStyle = "white";
            _crc2.stroke();
            _crc2.fill();
            // penaltyarea t2
            _crc2.strokeStyle = "white";
            _crc2.lineWidth = 2;
            _crc2.strokeRect(150, 0, 400, 125);
            _crc2.strokeStyle = "white";
            _crc2.lineWidth = 2;
            _crc2.strokeRect(225, 0, 250, 75);
            _crc2.strokeStyle = "white";
            _crc2.beginPath();
            _crc2.lineWidth = 2;
            _crc2.arc(this.width / 2, this.height - 100, 5, 0, 2 * Math.PI, false);
            _crc2.fillStyle = "white";
            _crc2.stroke();
            _crc2.fill();
            // middle circle
            _crc2.strokeStyle = "white";
            _crc2.beginPath();
            _crc2.lineWidth = 2;
            _crc2.arc(this.width / 2, this.height / 2, 100, 0, 2 * Math.PI, false);
            _crc2.stroke();
            _crc2.strokeStyle = "white";
            _crc2.beginPath();
            _crc2.lineWidth = 2;
            _crc2.arc(this.width / 2, this.height / 2, 10, 0, 2 * Math.PI, false);
            _crc2.fillStyle = "white";
            _crc2.stroke();
            _crc2.fill();
            // corners
            _crc2.strokeStyle = "white";
            _crc2.lineWidth = 2;
            _crc2.beginPath();
            _crc2.moveTo(0, this.height - 885);
            _crc2.lineTo(this.width - 675, 0);
            _crc2.stroke();
            _crc2.strokeStyle = "white";
            _crc2.lineWidth = 2;
            _crc2.beginPath();
            _crc2.moveTo(this.width - 25, 0);
            _crc2.lineTo(this.width, this.height - 885);
            _crc2.stroke();
            _crc2.strokeStyle = "white";
            _crc2.lineWidth = 2;
            _crc2.beginPath();
            _crc2.moveTo(0, this.height - 25);
            _crc2.lineTo(this.width - 675, this.height);
            _crc2.stroke();
            _crc2.strokeStyle = "white";
            _crc2.lineWidth = 2;
            _crc2.beginPath();
            _crc2.moveTo(this.width - 25, this.height);
            _crc2.lineTo(this.width, this.height - 25);
            _crc2.stroke();
            // goals
            _crc2.strokeStyle = _game.team1Color;
            _crc2.lineWidth = 4;
            _crc2.strokeRect(this.goalTeam1.position.x, this.goalTeam1.position.y, this.goalTeam1.width, this.goalTeam1.height);
            _crc2.strokeStyle = _game.team2Color;
            _crc2.strokeRect(this.goalTeam2.position.x, this.goalTeam2.position.y, this.goalTeam2.width, this.goalTeam2.height);
        }
        outOfPlay(_game) {
            const fieldRect = new EIA2Endabgabe.Rectangle(new EIA2Endabgabe.Vector(0, 0), this.width, this.height);
            return !this.checkRectangleBallCollision(_game.ball, fieldRect);
        }
        checkRectangleBallCollision(_ball, _rect) {
            var distX = Math.abs(_ball.position.x - _rect.position.x - _rect.width / 2);
            var distY = Math.abs(_ball.position.y - _rect.position.y - _rect.height / 2);
            if (distX > _rect.width / 2 + _ball.radius)
                return false;
            if (distY > _rect.height / 2 + _ball.radius)
                return false;
            if (distX <= _rect.width / 2)
                return true;
            if (distY <= _rect.height / 2)
                return true;
            var dx = distX - _rect.width / 2;
            var dy = distY - _rect.height / 2;
            return dx * dx + dy * dy <= _ball.radius * _ball.radius;
        }
        checkGoal1(_ball) {
            return this.checkRectangleBallCollision(_ball, this.goalTeam1);
        }
        checkGoal2(_ball) {
            return this.checkRectangleBallCollision(_ball, this.goalTeam2);
        }
    }
    EIA2Endabgabe.Field = Field;
})(EIA2Endabgabe || (EIA2Endabgabe = {}));
//# sourceMappingURL=field.js.map