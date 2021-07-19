"use strict";
var EIA2Endabgabe;
(function (EIA2Endabgabe) {
    class Game {
        constructor() {
            this.scoreTeam1 = 0;
            this.scoreTeam2 = 0;
            this.state = EIA2Endabgabe.GameState.RUNNING;
            this.field = new EIA2Endabgabe.Field(EIA2Endabgabe.canvas.width, EIA2Endabgabe.canvas.height);
            this.ball = new EIA2Endabgabe.Ball(15, new EIA2Endabgabe.Vector(this.field.width / 2 - 70, this.field.height / 2 - 70));
            this.movables = [];
            this.team1Color = "red";
            this.team2Color = "white";
            this.initSoccer();
            this.initGUI();
            this.initArrowKeys();
        }
        updateGameInfo() {
            const scoreDisplay = document.getElementById("displayScore");
            scoreDisplay.innerHTML = `${this.scoreTeam1} : ${this.scoreTeam2}`;
            if (this.ballPosession === undefined)
                return;
            const posessionDisplay = document.getElementById("displayPosession");
            const team = this.ballPosession < 0 ? 1 : 2;
            posessionDisplay.innerHTML = `${Math.abs(this.ballPosession)} (T${team})`;
        }
        resetBall(_team) {
            if (this.ballPosession === undefined)
                return;
            if (!_team) {
                _team = this.ballPosession < 0 ? 1 : 2;
            }
            const players = this.getPlayers().filter((player) => player.team !== _team);
            const idx = Math.floor(EIA2Endabgabe.randomBetween(0, players.length));
            const player = players[idx];
            this.ball.position = player.position.copy();
        }
        activateShooting() {
            this.state = EIA2Endabgabe.GameState.SHOOTING;
        }
        update() {
            if (this.state === EIA2Endabgabe.GameState.RUNNING) {
                this.field.update(this);
                this.ball.update(this);
                this.movables.forEach((e) => e.update(this));
            }
        }
        render(_crc2) {
            this.field.render(_crc2, this);
            this.movables.forEach((e) => e.render(_crc2, this));
            this.ball.render(_crc2, this);
            if (this.state === EIA2Endabgabe.GameState.SHOOTING) {
                _crc2.strokeStyle = "red";
                _crc2.beginPath();
                _crc2.lineWidth = 3;
                _crc2.arc(EIA2Endabgabe.mouse.x, EIA2Endabgabe.mouse.y, this.ball.radius, 0, 2 * Math.PI, false);
                _crc2.stroke();
            }
            else if (this.state === EIA2Endabgabe.GameState.ADD_PLAYER) {
                _crc2.strokeStyle = "green";
                _crc2.beginPath();
                _crc2.lineWidth = 3;
                _crc2.arc(EIA2Endabgabe.mouse.x, EIA2Endabgabe.mouse.y, this.ball.radius, 0, 2 * Math.PI, false);
                _crc2.stroke();
            }
        }
        getSelectedPlayer() {
            const selectedPlayerEl = document.getElementById("selectedPlayer");
            if (!selectedPlayerEl)
                return;
            const selectedPlayer = parseInt(selectedPlayerEl.innerHTML);
            const team = selectedPlayer < 0 ? 1 : 2;
            return this.movables
                .filter((e) => e instanceof EIA2Endabgabe.Player)
                .filter((e) => e.team === team)
                .find((e) => e.playerNumber === Math.abs(selectedPlayer));
        }
        getPlayers() {
            return this.movables.filter((e) => e instanceof EIA2Endabgabe.Player);
        }
        initArrowKeys() {
            document.addEventListener("keydown", (event) => {
                const selectedPlayer = this.getSelectedPlayer();
                const index = selectedPlayer
                    ? this.getPlayers().indexOf(selectedPlayer)
                    : 0;
                let nextIndex = 0;
                if (event.key === "ArrowLeft") {
                    nextIndex = index - 1;
                    if (nextIndex < 0)
                        nextIndex = this.getPlayers().length - 1;
                }
                else if (event.key === "ArrowRight") {
                    nextIndex = index + 1;
                    if (nextIndex >= this.getPlayers().length)
                        nextIndex = 0;
                }
                const newPlayer = this.getPlayers()[nextIndex];
                newPlayer.makeSelectedPlayer();
                newPlayer.showInformation();
            });
        }
        initSoccer() {
            // PLAYER
            let counter = 1;
            for (let row = 0; row < 6; row++) {
                if (row % 2 === 0) {
                    for (let i = 0; i < 4; i++) {
                        const team = counter % 2 == 0 ? 1 : 2;
                        const speed = this.getSpeedFromSettings();
                        const inaccuracy = this.getInaccuracyFromSettings();
                        const pos = new EIA2Endabgabe.Vector(i * (this.field.width / 4) + this.field.width / 4 / 2, row * (this.field.height / 6) + this.field.height / 6 / 2);
                        const player = new EIA2Endabgabe.Player(pos, counter, speed, inaccuracy, team);
                        this.movables.push(player);
                        counter += 1;
                    }
                }
                else {
                    for (let i = 0; i < 3; i++) {
                        const team = counter % 2 == 0 ? 1 : 2;
                        const speed = this.getSpeedFromSettings();
                        const inaccuracy = this.getInaccuracyFromSettings();
                        const pos = new EIA2Endabgabe.Vector(i * (this.field.width / 3) + this.field.width / 3 / 2, row * (this.field.height / 6) + this.field.height / 6 / 2);
                        const player = new EIA2Endabgabe.Player(pos, counter, speed, inaccuracy, team);
                        this.movables.push(player);
                        counter += 1;
                    }
                }
            }
            // REFEREE
            const referee = new EIA2Endabgabe.Referee(new EIA2Endabgabe.Vector(this.field.width / 2 - 10, this.field.height / 2 - 10));
            this.movables.push(referee);
            // LINESMEN
            const linesman1 = new EIA2Endabgabe.Linesman(new EIA2Endabgabe.Vector(0, this.ball.position.y));
            const linesman2 = new EIA2Endabgabe.Linesman(new EIA2Endabgabe.Vector(this.field.width, this.ball.position.y));
            this.movables.push(linesman1);
            this.movables.push(linesman2);
            this.movables.forEach((e) => e.init(this));
        }
        getInaccuracyFromSettings() {
            const minInaccuracy = parseInt(document.getElementById("minInaccuracy").value) / 100;
            const maxInaccuracy = parseInt(document.getElementById("maxInaccuracy").value) / 100;
            return EIA2Endabgabe.randomBetween(minInaccuracy, maxInaccuracy);
        }
        getSpeedFromSettings() {
            const minSpeed = parseInt(document.getElementById("minSpeed").value);
            const maxSpeed = parseInt(document.getElementById("maxSpeed").value);
            return Math.floor(EIA2Endabgabe.randomBetween(minSpeed, maxSpeed + 1));
        }
        initGUI() {
            // COLOR PICKER
            const picker1 = document.getElementById("color1");
            const picker2 = document.getElementById("color2");
            picker1.value = this.team1Color;
            picker2.value = this.team2Color;
            picker1.addEventListener("change", (e) => {
                this.team1Color = picker1.value;
            });
            picker2.addEventListener("change", (e) => {
                this.team2Color = picker2.value;
            });
            // PLAYER ATTRIBUTES
            const form = document.querySelector("#settingsDialog form");
            form.addEventListener("submit", () => {
                this.movables
                    .filter((e) => e instanceof EIA2Endabgabe.Player)
                    .forEach((e) => {
                    const player = e;
                    player.speed = this.getSpeedFromSettings();
                    player.inaccuracy = this.getInaccuracyFromSettings();
                });
            });
            // PLAYER REMOVAL
            const removeBtn = document.getElementById("removeBtn");
            removeBtn.addEventListener("click", (e) => {
                const selectedPlayer = this.getSelectedPlayer();
                if (!selectedPlayer)
                    return;
                const idx = this.movables.indexOf(selectedPlayer);
                this.movables.splice(idx, 1);
            });
            // PLAYER ADDING
            const addBtn = document.getElementById("addBtn");
            addBtn.addEventListener("click", (e) => {
                this.state = EIA2Endabgabe.GameState.ADD_PLAYER;
                const addPlayer = () => {
                    const selectedPlayer = this.getSelectedPlayer();
                    const team = selectedPlayer ? selectedPlayer.team : 1;
                    let playerNumber;
                    while (true) {
                        playerNumber = Math.floor(EIA2Endabgabe.randomBetween(0, this.movables.length + 1));
                        const existing = this.getPlayers().find((p) => p.playerNumber === playerNumber);
                        if (!existing)
                            break;
                    }
                    const speed = this.getSpeedFromSettings();
                    const inaccuracy = this.getInaccuracyFromSettings();
                    const newPlayer = new EIA2Endabgabe.Player(EIA2Endabgabe.mouse, playerNumber, speed, inaccuracy, team);
                    this.movables.push(newPlayer);
                    this.state = EIA2Endabgabe.GameState.RUNNING;
                    EIA2Endabgabe.canvas.removeEventListener("click", addPlayer);
                };
                EIA2Endabgabe.canvas.addEventListener("click", addPlayer);
            });
        }
    }
    EIA2Endabgabe.Game = Game;
})(EIA2Endabgabe || (EIA2Endabgabe = {}));
//# sourceMappingURL=game.js.map