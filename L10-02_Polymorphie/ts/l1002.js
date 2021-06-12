"use strict";
//L 10.02 Polymorphie
//Maximilian Tabori 266818
//Quellen: Inverted Classroom; Aileen Akin
//Liebe Alida, 
//ich konnte die Fehler bzw. deine Anmerkungen aus L09.02 leider nicht umsetzten. Und für 10.02 musste ich mir Hilfe von Aileen holen. (Es war leider keine gute Woche). 
//die Blumenwiese hatte ich zu einem Planeten gemacht weil im Inverted Classroom ja die ganze Zeit von Ufos die Rede ist, da hatte mich ein Anflug von "Weltraum-Fieber" übermannt :D
//Ganz liebe Grüße, Max
var L1002;
(function (L1002) {
    window.addEventListener("load", handleLoad);
    let imageData;
    let lightsArray = [];
    let moveables = [];
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        L1002.crc2 = canvas.getContext("2d");
        drawBackground();
        drawMars(0, 125);
        drawRunway(615, 539, 40, 300);
        drawSun(100, 75);
        drawMoon(600, 100);
        createClouds();
        window.setInterval(update, 50);
        drawMountain(0, 475, 80, 150, "HSLA(10, 100%, 30%, 1)", "HSLA(20, 100%, 70%, 1)");
        drawMountain2(0, 475, 50, 120, "HSLA(30, 100%, 30%, 1)", "HSLA(30, 80%, 70%, 1)");
        createLights();
        drawLights();
        drawHangar(400, 100);
        imageData = L1002.crc2.getImageData(0, 0, canvas.width, canvas.height);
        createUfo(20);
    }
    function update() {
        L1002.crc2.clearRect(0, 0, 1000, 750);
        L1002.crc2.putImageData(imageData, 0, 0);
        for (let moveable of moveables) {
            moveable.move(1 / 50);
            moveable.draw();
        }
    }
    function createUfo(_amound) {
        for (let i = 0; i < 10; i++) {
            let ufo = new L1002.Ufo();
            moveables.push(ufo);
        }
    }
    function createClouds() {
        for (let i = 0; i < 1; i++) {
            let cloud = new L1002.Cloud(0.5);
            moveables.push(cloud);
        }
    }
    function createLights() {
        for (let i = 0; i < 30; i++) {
            let lights = new L1002.Lights();
            lightsArray.push(lights);
        }
    }
    function drawLights() {
        for (let lights of lightsArray) {
            let randomX = Math.floor(Math.random() * 800);
            let randomY = Math.floor(Math.random() * 300);
            lights.draw(randomX + 30, randomY + 475);
        }
    }
    function drawBackground() {
        console.log("draw space");
        let gradient = L1002.crc2.createLinearGradient(0, 0, 0, L1002.crc2.canvas.height);
        gradient.addColorStop(0, "HSL(260, 100%, 10%)");
        gradient.addColorStop(0.6, "HSL(250, 100%, 30%)");
        L1002.crc2.fillStyle = gradient;
        L1002.crc2.fillRect(0, 0, L1002.crc2.canvas.width, L1002.crc2.canvas.height);
    }
    function drawRunway(_x, _y, _widthBack, _widthFront) {
        console.log("draw runway");
        L1002.crc2.beginPath();
        L1002.crc2.moveTo(_x + _widthBack / 2, _y);
        L1002.crc2.lineTo(L1002.crc2.canvas.width / 2 + _widthFront / 2, L1002.crc2.canvas.height);
        L1002.crc2.lineTo(L1002.crc2.canvas.width / 2 - _widthFront / 2, L1002.crc2.canvas.height);
        L1002.crc2.lineTo(_x - _widthBack / 2, _y);
        L1002.crc2.closePath();
        let gradient = L1002.crc2.createLinearGradient(0, _y, 0, L1002.crc2.canvas.height);
        gradient.addColorStop(0, "HSLA(30, 30%, 50%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 10%, 1)");
        L1002.crc2.fillStyle = gradient;
        L1002.crc2.fill();
        L1002.crc2.restore();
    }
    function drawMars(_x, _y) {
        console.log("draw ground");
        L1002.crc2.beginPath();
        L1002.crc2.moveTo(_x, _y + 350);
        L1002.crc2.lineTo(_x + 1200, _y + 350);
        L1002.crc2.lineTo(_x + 1200, _y + 900);
        L1002.crc2.lineTo(_x - 1200, _y + 900);
        let gradient2 = L1002.crc2.createLinearGradient(0, 0, 0, 900);
        gradient2.addColorStop(.5, "HSL(20, 70%, 30%");
        gradient2.addColorStop(.7, "HSL(30, 100%, 60%");
        L1002.crc2.fillStyle = gradient2;
        L1002.crc2.fill();
        L1002.crc2.closePath();
    }
    function drawSun(_x, _y) {
        console.log("draw sun", _x, _y);
        let r1 = 50;
        let r2 = 75;
        let gradient = L1002.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(50, 90%, 60%, 1");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0.2");
        L1002.crc2.save();
        L1002.crc2.translate(_x, _y);
        L1002.crc2.fillStyle = gradient;
        L1002.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        L1002.crc2.fill();
        L1002.crc2.restore();
    }
    function drawMoon(_x, _y) {
        console.log("draw moon", _x, _y);
        // tslint:disable-next-line: typedef
        let r1 = 25;
        // tslint:disable-next-line: typedef
        let r2 = 50;
        // tslint:disable-next-line: typedef
        let gradient = L1002.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(180, 80%, 50%, 1");
        gradient.addColorStop(1, "HSLA(150, 30%, 10%, 0.2");
        L1002.crc2.save();
        L1002.crc2.translate(_x, _y);
        L1002.crc2.fillStyle = gradient;
        L1002.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        L1002.crc2.fill();
        L1002.crc2.restore();
    }
    function drawMountain(_x, _y, _min, _max, _colorLow, _colorHigh) {
        console.log("draw mountains");
        L1002.crc2.save();
        L1002.crc2.translate(_x, _y);
        L1002.crc2.beginPath();
        L1002.crc2.moveTo(0, 0);
        L1002.crc2.lineTo(0, -100);
        L1002.crc2.lineTo(75, -70);
        L1002.crc2.lineTo(160, -90);
        L1002.crc2.lineTo(270, -80);
        L1002.crc2.lineTo(290, -70);
        L1002.crc2.lineTo(310, -50);
        L1002.crc2.lineTo(370, -90);
        L1002.crc2.lineTo(400, -60);
        L1002.crc2.lineTo(475, -70);
        L1002.crc2.lineTo(530, -80);
        L1002.crc2.lineTo(560, -100);
        L1002.crc2.lineTo(610, -60);
        L1002.crc2.lineTo(670, -70);
        L1002.crc2.lineTo(720, -90);
        L1002.crc2.lineTo(800, -100);
        L1002.crc2.lineTo(800, 0);
        L1002.crc2.closePath();
        let gradient = L1002.crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        L1002.crc2.fillStyle = gradient;
        L1002.crc2.fill();
        L1002.crc2.restore();
    }
    function drawMountain2(_x, _y, _min, _max, _colorLow, _colorHigh) {
        console.log("draw mountains2");
        L1002.crc2.save();
        L1002.crc2.translate(_x, _y);
        L1002.crc2.beginPath();
        L1002.crc2.moveTo(0, 0);
        L1002.crc2.lineTo(0, -60);
        L1002.crc2.lineTo(30, -40);
        L1002.crc2.lineTo(200, -80);
        L1002.crc2.lineTo(230, -100);
        L1002.crc2.lineTo(260, -80);
        L1002.crc2.lineTo(310, -30);
        L1002.crc2.lineTo(370, -100);
        L1002.crc2.lineTo(400, -80);
        L1002.crc2.lineTo(475, -40);
        L1002.crc2.lineTo(530, -60);
        L1002.crc2.lineTo(580, -80);
        L1002.crc2.lineTo(630, -60);
        L1002.crc2.lineTo(690, -40);
        L1002.crc2.lineTo(740, -70);
        L1002.crc2.lineTo(800, -80);
        L1002.crc2.lineTo(800, 0);
        L1002.crc2.closePath();
        let gradient = L1002.crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        L1002.crc2.fillStyle = gradient;
        L1002.crc2.fill();
        L1002.crc2.restore();
    }
    function drawHangar(_x, _y) {
        L1002.crc2.save();
        L1002.crc2.beginPath();
        L1002.crc2.arc(610, 530, 90, 3.1, 2 * Math.PI);
        L1002.crc2.fillStyle = "HSLA(0, 0%, 20%)";
        L1002.crc2.fill();
        L1002.crc2.closePath();
        L1002.crc2.beginPath();
        L1002.crc2.moveTo(690, 540);
        L1002.crc2.lineTo(700, 530);
        L1002.crc2.lineTo(680, 500);
        L1002.crc2.lineTo(690, 540);
        L1002.crc2.fillStyle = "HSLA(0, 0%, 20%)";
        L1002.crc2.fill();
        L1002.crc2.closePath();
        L1002.crc2.beginPath();
        L1002.crc2.arc(600, 540, 90, 3.1, 2 * Math.PI);
        L1002.crc2.fillStyle = "HSLA(0, 0%, 50%)";
        L1002.crc2.fill();
        L1002.crc2.closePath();
        L1002.crc2.beginPath();
        L1002.crc2.arc(600, 541, 30, 3.1, 2 * Math.PI);
        L1002.crc2.fillStyle = "black";
        L1002.crc2.fill();
        L1002.crc2.closePath();
        L1002.crc2.beginPath();
        L1002.crc2.arc(650, 500, 15, 0, 2 * Math.PI);
        L1002.crc2.fillStyle = "lightblue";
        L1002.crc2.fill();
        L1002.crc2.closePath();
        L1002.crc2.beginPath();
        L1002.crc2.arc(550, 500, 15, 0, 2 * Math.PI);
        L1002.crc2.fillStyle = "lightblue";
        L1002.crc2.fill();
        L1002.crc2.closePath();
    }
})(L1002 || (L1002 = {}));
//# sourceMappingURL=l1002.js.map