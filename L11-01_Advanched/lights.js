"use strict";
var L11advanced;
(function (L11advanced) {
    class Lights extends L11advanced.Flower {
        constructor(_fillLevel, _position) {
            super(_fillLevel, _position);
            //random Vektor auf Wiese
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
            console.log("draw lights");
            L11advanced.crc2.save();
            //Laternenpfahl
            L11advanced.crc2.moveTo(this.position.x, this.position.y);
            L11advanced.crc2.fillStyle = "black";
            L11advanced.crc2.fillRect(this.position.x, this.position.y, 2, 5);
            //Licht
            L11advanced.crc2.beginPath();
            L11advanced.crc2.arc(this.position.x + 1, this.position.y - 8, 8, 0, 2 * Math.PI, false);
            L11advanced.crc2.closePath();
            L11advanced.crc2.lineWidth = 5;
            L11advanced.crc2.fillStyle = "yellow";
            L11advanced.crc2.lineWidth = 1;
            L11advanced.crc2.fillStyle = "yellow";
            L11advanced.crc2.fill();
            L11advanced.crc2.strokeStyle = "white";
            L11advanced.crc2.stroke();
            //Glühbirne
            L11advanced.crc2.beginPath();
            L11advanced.crc2.arc(this.position.x + 1, this.position.y - 8, 4, 0, 2 * Math.PI, false);
            L11advanced.crc2.closePath();
            L11advanced.crc2.lineWidth = 5;
            L11advanced.crc2.fillStyle = "orange";
            L11advanced.crc2.lineWidth = 1;
            L11advanced.crc2.fillStyle = "orange";
            L11advanced.crc2.fill();
            L11advanced.crc2.strokeStyle = "white";
            L11advanced.crc2.stroke();
            L11advanced.crc2.restore();
        }
        nectar(_timeslice) {
            for (let i = 0; i < 10; i++) {
                L11advanced.crc2.save();
                L11advanced.crc2.beginPath();
                L11advanced.crc2.fillRect(this.position.x + 19, this.position.y - 20, 4, this.fillLevel);
                L11advanced.crc2.closePath();
                L11advanced.crc2.fillStyle = "yellow";
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
    L11advanced.Lights = Lights;
})(L11advanced || (L11advanced = {}));
//# sourceMappingURL=lights.js.map