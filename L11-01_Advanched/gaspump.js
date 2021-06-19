"use strict";
var L11advanced;
(function (L11advanced) {
    class Gaspump extends L11advanced.Flower {
        constructor(_fillLevel, _position) {
            super(_fillLevel, _position);
            let randomX = Math.floor(Math.random() * 900) + 100;
            let randomY = Math.floor(Math.random() * 200) + 350;
            if (_position)
                this.position = _position;
            else
                this.position = new L11advanced.Vector(randomX, randomY);
            let randomFill = Math.floor(Math.random() * 50);
            if (_fillLevel)
                this.fillLevel = _fillLevel;
            else
                this.fillLevel = randomFill;
            this.velocity = new L11advanced.Vector(0, 0);
        }
        draw() {
            console.log("draw pump");
            L11advanced.crc2.save();
            //Zapfsäule
            L11advanced.crc2.beginPath();
            L11advanced.crc2.moveTo(this.position.x, this.position.y);
            L11advanced.crc2.lineTo(this.position.x, this.position.y - 20);
            L11advanced.crc2.lineTo(this.position.x + 15, this.position.y - 20);
            L11advanced.crc2.lineTo(this.position.x + 15, this.position.y);
            L11advanced.crc2.lineTo(this.position.x, this.position.y);
            L11advanced.crc2.strokeStyle = "black";
            L11advanced.crc2.stroke();
            L11advanced.crc2.fillStyle = "silver";
            L11advanced.crc2.fill();
            //Schild 1
            L11advanced.crc2.beginPath();
            L11advanced.crc2.ellipse(this.position.x + 7.5, this.position.y - 24, 7, 10, Math.PI / 2, 0, 2 * Math.PI);
            L11advanced.crc2.closePath();
            L11advanced.crc2.lineWidth = 1;
            L11advanced.crc2.fillStyle = "whithe";
            L11advanced.crc2.lineWidth = 2;
            L11advanced.crc2.fillStyle = "blue";
            L11advanced.crc2.fill();
            //Schild 2
            L11advanced.crc2.beginPath();
            L11advanced.crc2.ellipse(this.position.x + 7.5, this.position.y - 24, 2, 6, Math.PI / 2, 0, 2 * Math.PI);
            L11advanced.crc2.closePath();
            L11advanced.crc2.lineWidth = 1;
            L11advanced.crc2.fillStyle = "pink";
            L11advanced.crc2.lineWidth = 2;
            L11advanced.crc2.fillStyle = "pink";
            L11advanced.crc2.fill();
            //Tankschlauch
            L11advanced.crc2.beginPath();
            L11advanced.crc2.moveTo(this.position.x, this.position.y - 20);
            L11advanced.crc2.lineTo(this.position.x, this.position.y - 25);
            L11advanced.crc2.lineTo(this.position.x - 1, this.position.y - 25);
            L11advanced.crc2.lineTo(this.position.x - 3, this.position.y - 22.5);
            L11advanced.crc2.lineTo(this.position.x - 3, this.position.y - 10);
            L11advanced.crc2.lineTo(this.position.x - 1, this.position.y - 7.5);
            L11advanced.crc2.moveTo(this.position.x - 1, this.position.y - 20);
            L11advanced.crc2.moveTo(this.position.x, this.position.y - 20);
            L11advanced.crc2.closePath();
            L11advanced.crc2.lineWidth = 1;
            L11advanced.crc2.fillStyle = "black";
            L11advanced.crc2.fill();
            L11advanced.crc2.restore();
        }
        nectar(_timeslice) {
            for (let i = 0; i < 10; i++) {
                L11advanced.crc2.save();
                L11advanced.crc2.beginPath();
                L11advanced.crc2.fillRect(this.position.x + 19, this.position.y - 20, 4, this.fillLevel);
                L11advanced.crc2.closePath();
                L11advanced.crc2.fillStyle = "pink";
                L11advanced.crc2.strokeStyle = "black";
                L11advanced.crc2.fill();
                L11advanced.crc2.stroke();
            }
            let offset = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.fillLevel < 50)
                this.fillLevel += 0.02;
            if (this.fillLevel > 50)
                this.fillLevel -= this.fillLevel;
            L11advanced.crc2.restore();
        }
    }
    L11advanced.Gaspump = Gaspump;
})(L11advanced || (L11advanced = {}));
//# sourceMappingURL=gaspump.js.map