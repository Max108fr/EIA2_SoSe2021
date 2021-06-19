"use strict";
//Nectar-Methode inspiriert von Lisa W.
var L11advanced;
(function (L11advanced) {
    let imageData;
    let flowerArray = [];
    let moveablesArray = [];
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        L11advanced.crc2 = canvas.getContext("2d");
        let posMountains = { x: 0, y: 250 };
        drawBackground();
        drawMars(0, 0);
        drawRunway(670, 390, 50, 300);
        drawSun(100, 75);
        drawMoon(600, 100);
        drawMountains(posMountains, 75, 140, "HSLA(10, 100%, 30%, 1)", "HSLA(20, 100%, 70%, 1)");
        drawMountains(posMountains, 50, 100, "HSLA(30, 100%, 30%, 1)", "HSLA(30, 80%, 70%, 1)");
        drawHangar(400, -100);
        createFlower();
        createClouds();
        createBee();
        console.log(flowerArray);
        //save background
        imageData = L11advanced.crc2.getImageData(0, 0, 900, 500);
        window.setInterval(update, 20);
    } //end handleload
    //draw and move Bees/Clouds. Draw flowers from Array
    function update() {
        // console.log("update moveables");
        L11advanced.crc2.clearRect(0, 0, 900, 500);
        L11advanced.crc2.putImageData(imageData, 0, 0);
        for (let moveable of moveablesArray) {
            moveable.move(1 / 50);
            moveable.draw();
        }
        for (let flower of flowerArray) {
            flower.draw();
            flower.nectar(0.1);
        }
    }
    function createBee() {
        for (let i = 0; i < 10; i++) {
            // console.log("create bee");
            let ufo = new L11advanced.Ufo(1);
            moveablesArray.push(ufo);
        }
    }
    function createClouds() {
        for (let i = 0; i < 1; i++) {
            let cloud = new L11advanced.Cloud(0.5);
            moveablesArray.push(cloud);
        }
    }
    function createFlower() {
        console.log("create flower");
        for (let i = 0; i < 10; i++) {
            let lights = new L11advanced.Lights();
            flowerArray.push(lights);
        }
        for (let i = 0; i < 10; i++) {
            let gaspump = new L11advanced.Gaspump();
            flowerArray.push(gaspump);
        }
        for (let i = 0; i < 10; i++) {
            let alien = new L11advanced.Alien();
            flowerArray.push(alien);
        }
    }
    function drawBackground() {
        console.log("draw space");
        let gradient = L11advanced.crc2.createLinearGradient(0, 0, 0, L11advanced.crc2.canvas.height);
        gradient.addColorStop(0, "HSL(260, 100%, 10%)");
        gradient.addColorStop(0.6, "HSL(250, 100%, 30%)");
        L11advanced.crc2.fillStyle = gradient;
        L11advanced.crc2.fillRect(0, 0, L11advanced.crc2.canvas.width, L11advanced.crc2.canvas.height);
    }
    function drawMars(_x, _y) {
        console.log("draw ground");
        L11advanced.crc2.beginPath();
        L11advanced.crc2.moveTo(_x, _y + 350);
        L11advanced.crc2.lineTo(_x + 1200, _y + 350);
        L11advanced.crc2.lineTo(_x + 1200, _y + 900);
        L11advanced.crc2.lineTo(_x - 1200, _y + 900);
        let gradient2 = L11advanced.crc2.createLinearGradient(0, 0, 0, 900);
        gradient2.addColorStop(.5, "HSL(20, 70%, 30%");
        gradient2.addColorStop(.7, "HSL(30, 100%, 60%");
        L11advanced.crc2.fillStyle = gradient2;
        L11advanced.crc2.fill();
        L11advanced.crc2.closePath();
    }
    function drawRunway(_x, _y, _widthBack, _widthFront) {
        console.log("draw runway");
        L11advanced.crc2.beginPath();
        L11advanced.crc2.moveTo(_x + _widthBack / 2, _y);
        L11advanced.crc2.lineTo(L11advanced.crc2.canvas.width / 2 + _widthFront / 2, L11advanced.crc2.canvas.height);
        L11advanced.crc2.lineTo(L11advanced.crc2.canvas.width / 2 - _widthFront / 2, L11advanced.crc2.canvas.height);
        L11advanced.crc2.lineTo(_x - _widthBack / 2, _y);
        L11advanced.crc2.closePath();
        let gradient = L11advanced.crc2.createLinearGradient(0, _y, 0, L11advanced.crc2.canvas.height);
        gradient.addColorStop(0, "HSLA(30, 30%, 50%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 10%, 1)");
        L11advanced.crc2.fillStyle = gradient;
        L11advanced.crc2.fill();
        L11advanced.crc2.restore();
    }
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        let stepMin = 50;
        let stepMax = 150;
        let x = 0;
        L11advanced.crc2.save();
        L11advanced.crc2.translate(_position.x, _position.y + 100);
        L11advanced.crc2.beginPath();
        L11advanced.crc2.moveTo(0, 0);
        L11advanced.crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            L11advanced.crc2.lineTo(x, y);
        } while (x < L11advanced.crc2.canvas.width);
        L11advanced.crc2.lineTo(x, 0);
        L11advanced.crc2.closePath();
        let gradient = L11advanced.crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        L11advanced.crc2.fillStyle = gradient;
        L11advanced.crc2.fill();
        L11advanced.crc2.restore();
    }
    function drawSun(_x, _y) {
        console.log("draw sun", _x, _y);
        let r1 = 50;
        let r2 = 75;
        let gradient = L11advanced.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(50, 90%, 60%, 1");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0.2");
        L11advanced.crc2.save();
        L11advanced.crc2.translate(_x, _y);
        L11advanced.crc2.fillStyle = gradient;
        L11advanced.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        L11advanced.crc2.fill();
        L11advanced.crc2.restore();
    }
    function drawMoon(_x, _y) {
        console.log("draw moon", _x, _y);
        // tslint:disable-next-line: typedef
        let r1 = 25;
        // tslint:disable-next-line: typedef
        let r2 = 50;
        // tslint:disable-next-line: typedef
        let gradient = L11advanced.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(180, 80%, 50%, 1");
        gradient.addColorStop(1, "HSLA(150, 30%, 10%, 0.2");
        L11advanced.crc2.save();
        L11advanced.crc2.translate(_x, _y);
        L11advanced.crc2.fillStyle = gradient;
        L11advanced.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        L11advanced.crc2.fill();
        L11advanced.crc2.restore();
    }
    function drawHangar(_x, _y) {
        //Schatten
        L11advanced.crc2.save();
        L11advanced.crc2.beginPath();
        L11advanced.crc2.arc(660, 390, 90, 3.1, 2 * Math.PI);
        L11advanced.crc2.fillStyle = "HSLA(0, 0%, 20%)";
        L11advanced.crc2.fill();
        L11advanced.crc2.closePath();
        //3D
        L11advanced.crc2.beginPath();
        L11advanced.crc2.moveTo(650, 395);
        L11advanced.crc2.lineTo(740, 395);
        L11advanced.crc2.lineTo(750, 390);
        L11advanced.crc2.lineTo(690, 390);
        L11advanced.crc2.fillStyle = "HSLA(0, 0%, 20%)";
        L11advanced.crc2.fill();
        L11advanced.crc2.closePath();
        //Front
        L11advanced.crc2.beginPath();
        L11advanced.crc2.arc(650, 395, 90, 3.1, 2 * Math.PI);
        L11advanced.crc2.fillStyle = "HSLA(0, 0%, 50%)";
        L11advanced.crc2.fill();
        L11advanced.crc2.closePath();
        //Tür
        L11advanced.crc2.beginPath();
        L11advanced.crc2.arc(650, 396, 30, 3.1, 2 * Math.PI);
        L11advanced.crc2.fillStyle = "black";
        L11advanced.crc2.fill();
        L11advanced.crc2.closePath();
        //Fenster 1
        L11advanced.crc2.beginPath();
        L11advanced.crc2.arc(690, 360, 15, 0, 2 * Math.PI);
        L11advanced.crc2.fillStyle = "lightblue";
        L11advanced.crc2.fill();
        L11advanced.crc2.closePath();
        //Fenster 2
        L11advanced.crc2.beginPath();
        L11advanced.crc2.arc(610, 360, 15, 0, 2 * Math.PI);
        L11advanced.crc2.fillStyle = "lightblue";
        L11advanced.crc2.fill();
        L11advanced.crc2.closePath();
    }
})(L11advanced || (L11advanced = {}));
//# sourceMappingURL=L11advanced.js.map