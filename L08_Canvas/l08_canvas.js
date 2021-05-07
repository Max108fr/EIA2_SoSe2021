"use strict";
//Quellen: Mit Hilfe von Jonas Scheid; https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API; 
var l08canvas;
(function (l08canvas) {
    window.addEventListener("load", generateCanvas);
    let crc2;
    let crc3;
    let crc4;
    function generateCanvas(_event) {
        let canvas = document.querySelector(".canvas");
        crc2 = canvas.getContext("2d");
        crc3 = canvas.getContext("2d");
        crc4 = canvas.getContext("2d");
        ball();
        square();
        triangle();
    }
    function ball() {
        for (let index = 0; index < 5; index++) {
            let firstball = Math.floor(Math.random() * 25);
            let secondball = Math.floor(Math.random() * 50);
            let thirdball = Math.floor(Math.random() * 75);
            crc2.beginPath();
            crc2.arc(Math.floor(Math.random() * (100) + 1), (Math.random() * (100) + 1), (Math.random() * (100) + 1), 0, 5 + Math.PI);
            crc2.fillStyle = "rgb( " + firstball + ", " + secondball + ", " + thirdball + ")";
            crc2.fill();
            crc2.closePath();
            crc2.stroke();
        }
    }
    function square() {
        for (let i = 0; i < 5; i++) {
            let firstsquare = Math.floor(Math.random() * 25);
            let secondsquare = Math.floor(Math.random() * 25);
            let thirdsquare = Math.floor(Math.random() * 25);
            crc3.beginPath();
            crc3.moveTo(Math.floor(Math.random() * (500) + 1), Math.floor(Math.random() * (250) + 1));
            crc3.lineTo(Math.floor(Math.random() * (500) + 1), Math.floor(Math.random() * (250) + 1));
            crc3.lineTo(Math.floor(Math.random() * (500) + 1), Math.floor(Math.random() * (250) + 1));
            crc3.lineTo(Math.floor(Math.random() * (500) + 1), Math.floor(Math.random() * (250) + 1));
            crc3.stroke();
            crc3.closePath();
            crc3.fillStyle = "rgb(" + firstsquare + ", " + secondsquare + "," + thirdsquare + ")";
            crc3.fill();
        }
    }
    function triangle() {
        for (let index = 0; index < 5; index++) {
            let firsttriangle = Math.floor(Math.random() * 25);
            let secondtriangle = Math.floor(Math.random() * 50);
            let thirdtriangle = Math.floor(Math.random() * 75);
            crc4.beginPath();
            crc4.moveTo(Math.floor(Math.random() * (100) + 1), Math.floor(Math.random() * (100) + 1));
            crc4.lineTo(Math.floor(Math.random() * (150) + 1), Math.floor(Math.random() * (150) + 1));
            crc4.lineTo(Math.floor(Math.random() * (200) + 1), Math.floor(Math.random() * (200) + 1));
            crc4.lineTo(Math.floor(Math.random() * (350) + 1), Math.floor(Math.random() * (250) + 1));
            crc4.fillStyle = "rgb( " + firsttriangle + ", " + secondtriangle + ", " + thirdtriangle + ")";
            crc4.fill();
            crc4.closePath();
            crc4.stroke();
        }
    }
})(l08canvas || (l08canvas = {}));
//# sourceMappingURL=l08_canvas.js.map