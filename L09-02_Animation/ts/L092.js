"use strict";
//Aufgabe 09.02 Classes 
//Max Tabori 266818
//Quellen: Inverted Classroom; Inspirationen von Max Wronka, Sophie Heuvels, Lukas Muschal
var L092;
(function (L092) {
    window.addEventListener("load", handleLoad);
    let ufoArray = [];
    let cloudArray = [];
    let xCloudArray = [];
    let yCloudArray = [];
    let cloudSize = new L092.Vector(10, 5);
    function handleLoad(_event) {
        let canvas = document.querySelector("#screen");
        let crc2 = canvas.getContext("2d");
        createCloud();
        createCloudxy(20, cloudSize);
        createUfo(5);
        function drawBackground(_x, _y) {
            console.log("draw space");
            let gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
            gradient.addColorStop(0, "HSL(260, 100%, 10%)");
            gradient.addColorStop(0.6, "HSL(250, 100%, 30%)");
            crc2.fillStyle = gradient;
            crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        }
        function drawMars(_x, _y) {
            console.log("draw ground");
            crc2.beginPath();
            crc2.moveTo(_x, _y + 350);
            crc2.lineTo(_x + 1200, _y + 350);
            crc2.lineTo(_x + 1200, _y + 900);
            crc2.lineTo(_x - 1200, _y + 900);
            let gradient2 = crc2.createLinearGradient(0, 0, 0, 900);
            gradient2.addColorStop(.5, "HSL(20, 70%, 30%");
            gradient2.addColorStop(.7, "HSL(30, 100%, 60%");
            crc2.fillStyle = gradient2;
            crc2.fill();
            crc2.closePath();
        }
        function drawRunway(_x, _y, _widthBack, _widthFront) {
            console.log("draw runway");
            crc2.beginPath();
            crc2.moveTo(_x + _widthBack / 2, _y);
            crc2.lineTo(crc2.canvas.width / 2 + _widthFront / 2, crc2.canvas.height);
            crc2.lineTo(crc2.canvas.width / 2 - _widthFront / 2, crc2.canvas.height);
            crc2.lineTo(_x - _widthBack / 2, _y);
            crc2.closePath();
            let gradient = crc2.createLinearGradient(0, _y, 0, crc2.canvas.height);
            gradient.addColorStop(0, "HSLA(30, 30%, 50%, 0.5)");
            gradient.addColorStop(1, "HSLA(0, 100%, 10%, 1)");
            crc2.fillStyle = gradient;
            crc2.fill();
            crc2.restore();
        }
        function drawSun(_x, _y) {
            console.log("draw sun", _x, _y);
            let r1 = 50;
            let r2 = 75;
            let gradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
            gradient.addColorStop(0, "HSLA(50, 90%, 60%, 1");
            gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0.2");
            crc2.save();
            crc2.translate(_x, _y);
            crc2.fillStyle = gradient;
            crc2.arc(0, 0, r2, 0, 2 * Math.PI);
            crc2.fill();
            crc2.restore();
        }
        function drawMoon(_x, _y) {
            console.log("draw moon", _x, _y);
            // tslint:disable-next-line: typedef
            let r1 = 25;
            // tslint:disable-next-line: typedef
            let r2 = 50;
            // tslint:disable-next-line: typedef
            let gradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
            gradient.addColorStop(0, "HSLA(180, 80%, 50%, 1");
            gradient.addColorStop(1, "HSLA(150, 30%, 10%, 0.2");
            crc2.save();
            crc2.translate(_x, _y);
            crc2.fillStyle = gradient;
            crc2.arc(0, 0, r2, 0, 2 * Math.PI);
            crc2.fill();
            crc2.restore();
        }
        function drawMountain(_x, _y, _min, _max, _colorLow, _colorHigh) {
            console.log("draw mountains");
            crc2.save();
            crc2.translate(_x, _y);
            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.lineTo(0, -100);
            crc2.lineTo(75, -70);
            crc2.lineTo(160, -90);
            crc2.lineTo(270, -80);
            crc2.lineTo(290, -70);
            crc2.lineTo(310, -50);
            crc2.lineTo(370, -90);
            crc2.lineTo(400, -60);
            crc2.lineTo(475, -70);
            crc2.lineTo(530, -80);
            crc2.lineTo(560, -100);
            crc2.lineTo(610, -60);
            crc2.lineTo(670, -70);
            crc2.lineTo(720, -90);
            crc2.lineTo(800, -100);
            crc2.lineTo(800, 0);
            crc2.closePath();
            let gradient = crc2.createLinearGradient(0, 0, 0, -_max);
            gradient.addColorStop(0, _colorLow);
            gradient.addColorStop(0.7, _colorHigh);
            crc2.fillStyle = gradient;
            crc2.fill();
            crc2.restore();
        }
        function drawMountain2(_x, _y, _min, _max, _colorLow, _colorHigh) {
            console.log("draw mountains2");
            crc2.save();
            crc2.translate(_x, _y);
            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.lineTo(0, -60);
            crc2.lineTo(30, -40);
            crc2.lineTo(200, -80);
            crc2.lineTo(230, -100);
            crc2.lineTo(260, -80);
            crc2.lineTo(310, -30);
            crc2.lineTo(370, -100);
            crc2.lineTo(400, -80);
            crc2.lineTo(475, -40);
            crc2.lineTo(530, -60);
            crc2.lineTo(580, -80);
            crc2.lineTo(630, -60);
            crc2.lineTo(690, -40);
            crc2.lineTo(740, -70);
            crc2.lineTo(800, -80);
            crc2.lineTo(800, 0);
            crc2.closePath();
            let gradient = crc2.createLinearGradient(0, 0, 0, -_max);
            gradient.addColorStop(0, _colorLow);
            gradient.addColorStop(0.7, _colorHigh);
            crc2.fillStyle = gradient;
            crc2.fill();
            crc2.restore();
        }
        function drawLights(_x, _y) {
            console.log("draw lights", _x, _y);
            // tslint:disable-next-line: typedef
            let r1 = 4;
            // tslint:disable-next-line: typedef
            let r2 = 12;
            // tslint:disable-next-line: typedef
            let gradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
            gradient.addColorStop(0, "HSLA(340, 100%, 80%, 1");
            gradient.addColorStop(1, "HSLA(300, 80%, 90%, 0");
            crc2.save();
            crc2.translate(_x, _y);
            crc2.fillStyle = gradient;
            crc2.arc(0, 0, r2, 0, 2 * Math.PI);
            crc2.fill();
            crc2.restore();
        }
        function createCloudxy(_particleNumber, _size) {
            for (let i = 0; i < _particleNumber; i++) {
                let x = (Math.random() - 0.5) * _size.x;
                let y = -(Math.random() * _size.y);
                xCloudArray.push(x);
                yCloudArray.push(y);
            }
        }
        function createCloud() {
            let xCloud = 0;
            let yCloud = 125;
            let cloudPosition = new L092.Vector(xCloud, yCloud);
            let cloudSize = new L092.Vector(100, 50);
            let velocityCloud = new L092.Vector(4, 0);
            for (let i = 0; i < 20; i++) {
                let cloud = new L092.Cloud(cloudPosition, cloudSize, velocityCloud, xCloudArray[i], yCloudArray[i]);
                cloud.drawCloud();
                cloudArray.push(cloud);
            }
        }
        function createUfo(_nUfos) {
            console.log("let the ufos fly");
            for (let i = 0; i < _nUfos; i++) {
                let randomXUfo = Math.random() * (crc2.canvas.width);
                let randomYUfo = Math.random() * (crc2.canvas.height);
                let ufoPosition = new L092.Vector(randomXUfo, randomYUfo);
                let ufoVelocity = new L092.Vector(20, 0);
                let ufo = new L092.Ufos(ufoPosition, ufoVelocity);
                ufoArray.push(ufo);
            }
        }
        function update() {
            crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
            crc2.save();
            drawBackground(0, 475);
            crc2.restore();
            crc2.save();
            drawMars(0, 125);
            crc2.restore();
            crc2.save();
            drawRunway(400, 475, 100, 300);
            crc2.restore();
            crc2.save();
            drawSun(100, 75);
            crc2.restore();
            crc2.save();
            drawMoon(600, 100);
            crc2.restore();
            crc2.save();
            drawMountain(0, 475, 80, 150, "HSLA(10, 100%, 30%, 1)", "HSLA(20, 100%, 70%, 1)");
            crc2.restore();
            crc2.save();
            drawMountain2(0, 475, 50, 120, "HSLA(30, 100%, 30%, 1)", "HSLA(30, 80%, 70%, 1)");
            crc2.restore();
            crc2.save();
            drawLights(325, 475);
            drawLights(300, 500);
            drawLights(275, 525);
            drawLights(250, 550);
            drawLights(225, 575);
            drawLights(200, 600);
            drawLights(475, 475);
            drawLights(500, 500);
            drawLights(525, 525);
            drawLights(550, 550);
            drawLights(575, 575);
            drawLights(600, 600);
            for (let ufo of ufoArray) {
                ufo.move(1 / 100);
                ufo.drawUfos(0, 0);
            }
            for (let i = 0; i < 20; i++) {
                cloudArray[i].drawCloud();
                cloudArray[i].move(1 / 150);
            }
        }
        window.setInterval(update, 60);
    }
})(L092 || (L092 = {}));
//# sourceMappingURL=L092.js.map