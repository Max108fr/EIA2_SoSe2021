"use strict";
var L11advanced;
(function (L11advanced) {
    class Alien extends L11advanced.Flower {
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
            console.log("draw Alien");
            L11advanced.crc2.save();
            //Körper
            L11advanced.crc2.moveTo(this.position.x, this.position.y);
            L11advanced.crc2.fillStyle = "green";
            L11advanced.crc2.fillRect(this.position.x, this.position.y, 2, -20);
            //Kopf
            L11advanced.crc2.beginPath();
            L11advanced.crc2.arc(this.position.x + 1, this.position.y - 25, 5, 0, 2 * Math.PI);
            L11advanced.crc2.fillStyle = "green";
            L11advanced.crc2.fill();
            L11advanced.crc2.closePath();
            //Arme
            L11advanced.crc2.beginPath();
            L11advanced.crc2.moveTo(this.position.x, this.position.y);
            L11advanced.crc2.moveTo(this.position.x, this.position.y - 18);
            L11advanced.crc2.lineTo(this.position.x + 12, this.position.y - 22);
            L11advanced.crc2.lineTo(this.position.x + 12, this.position.y - 18);
            L11advanced.crc2.lineTo(this.position.x, this.position.y - 14);
            L11advanced.crc2.moveTo(this.position.x, this.position.y - 18);
            L11advanced.crc2.lineTo(this.position.x - 12, this.position.y - 18);
            L11advanced.crc2.lineTo(this.position.x - 12, this.position.y - 14);
            L11advanced.crc2.lineTo(this.position.x, this.position.y - 14);
            L11advanced.crc2.fillStyle = "green";
            L11advanced.crc2.fill();
            //Beine
            L11advanced.crc2.beginPath();
            L11advanced.crc2.moveTo(this.position.x, this.position.y);
            L11advanced.crc2.lineTo(this.position.x + 10, this.position.y + 5);
            L11advanced.crc2.lineTo(this.position.x + 15, this.position.y + 5);
            L11advanced.crc2.lineTo(this.position.x, this.position.y - 5);
            L11advanced.crc2.moveTo(this.position.x, this.position.y);
            L11advanced.crc2.lineTo(this.position.x - 10, this.position.y + 5);
            L11advanced.crc2.lineTo(this.position.x - 15, this.position.y + 5);
            L11advanced.crc2.lineTo(this.position.x, this.position.y - 5);
            L11advanced.crc2.fillStyle = "green";
            L11advanced.crc2.fill();
            // //Bauch
            L11advanced.crc2.beginPath();
            L11advanced.crc2.arc(this.position.x + 1, this.position.y - 10, 8, 0, 2 * Math.PI);
            L11advanced.crc2.fillStyle = "green";
            L11advanced.crc2.fill();
            L11advanced.crc2.closePath();
            L11advanced.crc2.restore();
            //Augen 1
            L11advanced.crc2.beginPath();
            L11advanced.crc2.arc(this.position.x - 1, this.position.y - 25, 2, 0, 2 * Math.PI);
            L11advanced.crc2.fillStyle = "black";
            L11advanced.crc2.fill();
            L11advanced.crc2.closePath();
            //Augen 2
            L11advanced.crc2.beginPath();
            L11advanced.crc2.arc(this.position.x + 3, this.position.y - 25, 2, 0, 2 * Math.PI);
            L11advanced.crc2.fillStyle = "black";
            L11advanced.crc2.fill();
            L11advanced.crc2.closePath();
            //Augen 3
            L11advanced.crc2.beginPath();
            L11advanced.crc2.arc(this.position.x + 2, this.position.y - 26, 1, 0, 2 * Math.PI);
            L11advanced.crc2.fillStyle = "white";
            L11advanced.crc2.fill();
            L11advanced.crc2.closePath();
            //Augen 4
            L11advanced.crc2.beginPath();
            L11advanced.crc2.arc(this.position.x - 2, this.position.y - 26, 1, 0, 2 * Math.PI);
            L11advanced.crc2.fillStyle = "white";
            L11advanced.crc2.fill();
            L11advanced.crc2.closePath();
            L11advanced.crc2.restore();
        }
        nectar(_timeslice) {
            for (let i = 0; i < 10; i++) {
                L11advanced.crc2.save();
                L11advanced.crc2.beginPath();
                L11advanced.crc2.fillRect(this.position.x + 19, this.position.y - 20, 4, this.fillLevel);
                L11advanced.crc2.closePath();
                L11advanced.crc2.fillStyle = "red";
                L11advanced.crc2.strokeStyle = "red";
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
    L11advanced.Alien = Alien;
})(L11advanced || (L11advanced = {}));
//# sourceMappingURL=alien.js.map