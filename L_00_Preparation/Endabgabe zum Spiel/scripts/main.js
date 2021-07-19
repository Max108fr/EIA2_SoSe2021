"use strict";
//EIA 2 Endabgabe SoSe21
//Maximilian Tabori 266818
//Quellen: Inverted Classroom / Asteroids; Umsetzung in Zusammenarbeit mit Jonas Scheid  
var EIA2Endabgabe;
(function (EIA2Endabgabe) {
    EIA2Endabgabe.DEBUG = false;
    function randomBetween(min, max) {
        return min + Math.random() * (max - min);
    }
    EIA2Endabgabe.randomBetween = randomBetween;
    EIA2Endabgabe.mouse = new EIA2Endabgabe.Vector(0, 0);
    let GameState;
    (function (GameState) {
        GameState[GameState["RUNNING"] = 0] = "RUNNING";
        GameState[GameState["SHOOTING"] = 1] = "SHOOTING";
        GameState[GameState["ADD_PLAYER"] = 2] = "ADD_PLAYER";
    })(GameState = EIA2Endabgabe.GameState || (EIA2Endabgabe.GameState = {}));
    let game;
    function render() {
        EIA2Endabgabe.crc2.clearRect(0, 0, EIA2Endabgabe.canvas.width, EIA2Endabgabe.canvas.height);
        game.render(EIA2Endabgabe.crc2);
    }
    function update() {
        game.update();
    }
    function init() {
        EIA2Endabgabe.canvas = document.getElementById("gameCanvas");
        EIA2Endabgabe.crc2 = EIA2Endabgabe.canvas.getContext("2d");
        EIA2Endabgabe.canvas.addEventListener("mousemove", (e) => {
            EIA2Endabgabe.mouse.set(e.pageX - EIA2Endabgabe.canvas.offsetLeft, e.pageY - EIA2Endabgabe.canvas.offsetTop);
        });
        game = new EIA2Endabgabe.Game();
        loop();
    }
    function loop() {
        render();
        update();
        window.requestAnimationFrame(loop);
    }
    window.onload = init;
})(EIA2Endabgabe || (EIA2Endabgabe = {}));
//# sourceMappingURL=main.js.map