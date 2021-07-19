"use strict";
var EIA2Endabgabe;
(function (EIA2Endabgabe) {
    class Player extends EIA2Endabgabe.Movable {
        constructor(_position, _playerNumber, _speed, _inaccuracy, _team) {
            super(_position, _speed);
            this.origPosition = _position.copy();
            this.playerNumber = _playerNumber;
            this.speed = _speed;
            this.inaccuracy = _inaccuracy;
            this.team = _team;
        }
        init(_game) {
            document.addEventListener("click", (e) => {
                if (this.mouseCollision()) {
                    this.showInformation();
                }
            });
        }
        makeSelectedPlayer() {
            const selectedPlayer = document.getElementById("selectedPlayer");
            selectedPlayer.innerHTML =
                this.team === 1
                    ? (-1 * this.playerNumber).toString()
                    : this.playerNumber.toString();
        }
        showInformation() {
            this.makeSelectedPlayer();
            const numberEl = document.getElementById("displayNumber");
            numberEl.innerHTML = this.playerNumber.toString();
            const teamEl = document.getElementById("displayTeam");
            teamEl.innerHTML = this.team.toString();
            const inaccuracyEl = document.getElementById("displayInaccuracy");
            inaccuracyEl.innerHTML = (this.inaccuracy * 100).toFixed(2) + "%";
            const speedEl = document.getElementById("displaySpeed");
            speedEl.innerHTML = this.speed.toString();
        }
        update(_game) {
            if (this.ballCollision(_game.ball)) {
                _game.activateShooting();
                _game.ballPosession =
                    this.team === 1 ? -1 * this.playerNumber : this.playerNumber;
                _game.updateGameInfo();
                const shootBall = () => {
                    const diff = EIA2Endabgabe.Vector.getDifference(EIA2Endabgabe.mouse, _game.ball.position);
                    const inaccuracy = EIA2Endabgabe.randomBetween(-0.25, 0.25) * this.inaccuracy;
                    const angle = Math.atan2(diff.y, diff.x) + inaccuracy;
                    const vx = Math.cos(angle);
                    const vy = Math.sin(angle);
                    const vel = new EIA2Endabgabe.Vector(vx, vy).scale(15);
                    _game.ball.vel = vel.copy();
                    // ensure ball is outside of player
                    while (this.ballCollision(_game.ball)) {
                        _game.ball.position.add(vel);
                    }
                    _game.state = EIA2Endabgabe.GameState.RUNNING;
                    EIA2Endabgabe.canvas.removeEventListener("click", shootBall);
                };
                EIA2Endabgabe.canvas.addEventListener("click", shootBall);
                return;
            }
            // check for collision with ball
            if (this.shouldBeRunning(_game.ball)) {
                this.moveTowards(_game.ball.position);
            }
            else {
                this.moveTowards(this.origPosition);
            }
        }
        render(_crc2, _game) {
            const color = this.team === 1 ? _game.team1Color : _game.team2Color;
            _crc2.beginPath();
            _crc2.lineWidth = 2;
            _crc2.fillStyle = color;
            _crc2.arc(this.position.x, this.position.y, 20, //20 = Player size
            0, 2 * Math.PI, false);
            _crc2.fill();
            _crc2.fillStyle = "black";
            _crc2.font = "27px Arial";
            const digits = this.playerNumber.toString().length;
            _crc2.fillText(this.playerNumber.toString(), this.position.x - 8 * digits, this.position.y + 10);
            const selectedPlayer = _game.getSelectedPlayer();
            if (selectedPlayer) {
                const isSelected = this.equals(selectedPlayer);
                if (isSelected) {
                    _crc2.beginPath();
                    _crc2.lineWidth = 2;
                    _crc2.strokeStyle = "yellow";
                    _crc2.arc(this.position.x, this.position.y, 20, //20 = Player size
                    0, 2 * Math.PI, false);
                    _crc2.stroke();
                }
            }
            if (EIA2Endabgabe.DEBUG) {
                _crc2.beginPath();
                _crc2.lineWidth = 2;
                _crc2.strokeStyle = "red";
                _crc2.arc(this.position.x, this.position.y, (EIA2Endabgabe.canvas.width * (30 / 90)) / 2, //Radius
                0, 2 * Math.PI, false);
                _crc2.stroke();
            }
        }
        shouldBeRunning(_ball) {
            return EIA2Endabgabe.Vector.getDistance(_ball.position, this.position) <= (EIA2Endabgabe.canvas.width * (30 / 90)) / 2;
        }
        ballCollision(_ball) {
            const r = 20 + _ball.radius; //20 = Player size
            return EIA2Endabgabe.Vector.getDistance(_ball.position, this.position) <= r;
        }
        mouseCollision() {
            return EIA2Endabgabe.Vector.getDistance(EIA2Endabgabe.mouse, this.position) <= 20; //20 = Player size
        }
        equals(_other) {
            return (_other.playerNumber === this.playerNumber && _other.team === this.team);
        }
    }
    EIA2Endabgabe.Player = Player;
})(EIA2Endabgabe || (EIA2Endabgabe = {}));
//# sourceMappingURL=player.js.map